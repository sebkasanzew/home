import { test, expect } from '@playwright/test';

test.describe('Advent 2024', () => {
  test('header displays day title, advent indicator, and navigates between days', async ({ page }) => {
    await page.goto('./advent/2024/1');

    await expect(page.getByRole('heading', { name: '1. Dezember' })).toBeVisible();
    await expect(page.getByRole('heading', { name: '1. Advent' })).toBeVisible();

    const navButtonsOnDay1 = page.locator('nav button');
    await expect(navButtonsOnDay1).toHaveCount(1);

    await navButtonsOnDay1.first().click();
    await expect(page).toHaveURL(/\/advent\/2024\/2$/);
    await expect(page.getByRole('heading', { name: '2. Dezember' })).toBeVisible();
    await expect(page.getByRole('heading', { name: /Advent/ })).toHaveCount(0);

    const navButtonsOnDay2 = page.locator('nav button');
    await expect(navButtonsOnDay2).toHaveCount(2);

    await navButtonsOnDay2.first().click();
    await expect(page).toHaveURL(/\/advent\/2024\/1$/);
  });

  test('not-found redirects to day 24 after Christmas 2024', async ({ page }) => {
    await page.goto('./non-existent-page');
    await expect(page).toHaveURL(/\/advent\/2024\/24$/);
    await expect(page.getByRole('heading', { name: '24. Dezember' })).toBeVisible();
    await expect(page.locator('nav button')).toHaveCount(1);
  });

  test('day 1 renders welcome text and YouTube video iframe', async ({ page }) => {
    await page.goto('./advent/2024/1');

    await expect(page.getByText('Viel Spaß!')).toBeVisible();
    await expect(page.locator('iframe[title="YouTube video player"]')).toBeVisible();
  });

  test('day 2 christmas joke game reveals punchline and cycles jokes', async ({ page }) => {
    await page.goto('./advent/2024/2');

    await expect(page.getByText('Weihnachts-Witze-Spiel')).toBeVisible();
    await expect(page.getByText('Was sagt der große Stift zum kleinen Stift?')).toBeVisible();

    await page.getByRole('button', { name: 'Pointe zeigen' }).click();
    await expect(page.getByText('Wachsmalstift!')).toBeVisible();

    await page.getByRole('button', { name: 'Nächster Witz' }).click();
    await expect(
      page.getByText('Wie nennt man einen Weihnachtsmann, der auf einer Eisscholle davontreibt?')
    ).toBeVisible();
    await expect(page.getByText('Wachsmalstift!')).toHaveCount(0);
  });

  test('day 3 renders Santa image', async ({ page }) => {
    await page.goto('./advent/2024/3');

    const img = page.getByRole('img', { name: 'Daft Punk as Santa' });
    await expect(img).toBeVisible();
  });

  test('day 4 color picker updates selected color and background', async ({ page }) => {
    await page.goto('./advent/2024/4');

    await expect(page.getByText('Selected Color: #ffffff')).toBeVisible();

    const saturation = page.locator('.react-colorful__saturation');
    await expect(saturation).toBeVisible();
    await saturation.click({ position: { x: 100, y: 100 } });

    await expect(page.getByText('Selected Color: #ffffff')).toHaveCount(0);
    await expect(page.getByText(/^Selected Color: #[0-9a-f]{6}$/i)).toBeVisible();
  });

  test('day 5 and day 7 render static content', async ({ page }) => {
    await page.goto('./advent/2024/5');
    await expect(page.getByText('Heute mal nichts besonderes.')).toBeVisible();

    await page.goto('./advent/2024/7');
    await expect(page.getByText(/7 vs\. Wild/)).toBeVisible();
  });

  test('day 6 hangman allows winning a game and displays win toast', async ({ page }) => {
    await page.addInitScript(() => {
      Math.random = () => 0; // selects words[0] = "seine"
    });

    await page.goto('./advent/2024/6');

    for (const letter of ['s', 'e', 'i', 'n']) {
      const btn = page.getByRole('button', { name: letter, exact: true });
      await btn.click();
      await expect(btn).toBeDisabled();
    }

    await expect(page.getByText('Herzlichen Glückwunsch, du hast gewonnen!')).toBeVisible();
  });

  test('day 6 hangman handles losing after 6 wrong guesses and displays error toast', async ({ page }) => {
    await page.addInitScript(() => {
      Math.random = () => 0; // selects words[0] = "seine"
    });

    await page.goto('./advent/2024/6');

    for (const letter of ['a', 'b', 'c', 'd', 'f', 'g']) {
      await page.getByRole('button', { name: letter, exact: true }).click();
    }

    await expect(page.getByText('Du hast verloren, bitte Seite neu laden')).toBeVisible();
    await expect(page.getByRole('button', { name: 'z', exact: true })).toBeDisabled();
  });

  test('should display mocked response when clicking the button', async ({ page }) => {
    await page.goto('./advent/2024/10');

    const button = page.getByRole('button', { name: 'Gib mir den Spruch des Tages' });
    await expect(button).toBeVisible();

    await button.click();

    await expect(page.getByText('This is a mocked response from MSW.')).toBeVisible({ timeout: 5000 });
  });
});
