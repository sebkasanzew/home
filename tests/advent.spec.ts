import { test, expect } from '@playwright/test';

test('should display mocked response when clicking the button', async ({ page }) => {
  await page.goto('./advent/2024/10');

  const button = page.getByRole('button', { name: 'Gib mir den Spruch des Tages' });
  await expect(button).toBeVisible();

  await button.click();

  await expect(page.getByText('This is a mocked response from MSW.')).toBeVisible({ timeout: 5000 });
});
