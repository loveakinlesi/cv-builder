import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Sorts an array of items by year and then by title.
 *
 * @param {Item[]} items - The array of items to sort.
 * @param {string} yearOrder - The order to sort the year by ("asc" for ascending, "desc" for descending).
 * @param {string} titleOrder - The order to sort the title by ("asc" for ascending, "desc" for descending).
 * @returns {Item[]} The sorted array of items.
 */
export function sortItems<T extends { title: string; year: string }>(
  items: T[],
  yearOrder: "asc" | "desc" = "asc",
  titleOrder: "asc" | "desc" = "asc"
): T[] {
  return items.sort((a, b) => {
    // Compare years
    const yearComparison =
      yearOrder === "asc"
        ? a.year.localeCompare(b.year, undefined, { numeric: true })
        : b.year.localeCompare(a.year, undefined, { numeric: true });

    if (yearComparison !== 0) {
      return yearComparison;
    }

    // Compare titles
    return titleOrder === "asc"
      ? a.title.localeCompare(b.title)
      : b.title.localeCompare(a.title);
  });
}
