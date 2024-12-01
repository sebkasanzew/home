export function useAdventFlags() {
    const date = new Date();

    const isAfterChristmas2024 =
      date.getFullYear() > 2024 ||
      (date.getFullYear() === 2024 && date.getMonth() > 11) ||
      (date.getFullYear() === 2024 &&
        date.getMonth() === 11 &&
        date.getDate() > 24);
  
    const isAdvent2024 =
      date.getFullYear() === 2024 &&
      date.getMonth() === 11 &&
      date.getDate() < 25;
  
    const day = date.getDate().toString();

    return { isAfterChristmas2024, isAdvent2024, day } as const;
}