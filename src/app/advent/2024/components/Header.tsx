"use client";

import { usePathname, useRouter } from "next/navigation";

import { TbArrowBigLeftLinesFilled } from "react-icons/tb";
import { useAdventFlags } from "./useAdventFlags";

const DAYS = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
] as const;

const ADVENT_DAYS = ["1", "8", "15", "22"] as const;

function Header() {
  const pathname = usePathname();
  const { push } = useRouter();

  const pageDay = pathname.split("/").pop();

  const { day, isAdvent2024, isAfterChristmas2024 } = useAdventFlags();

  if (!isValidDay(pageDay)) {
    return null;
  }

  const isAdventDay = ADVENT_DAYS.includes(pageDay);

  const adventDay = isAdventDay && ADVENT_DAYS.indexOf(pageDay) + 1;

  const isPageForToday = isAdvent2024 && pageDay !== day;

  return (
    <nav>
      <div className="inline-flex items-center justify-center w-full mb-4">
        {pageDay !== "1" && (
          <button
            type="button"
            className="p-4 text-red-800"
            onClick={() => push(`/advent/2024/${(+pageDay - 1).toString()}`)}
          >
            <TbArrowBigLeftLinesFilled className="size-6 md:size-10 hover:text-red-600 hover:scale-110" />
          </button>
        )}

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center font-cinzel-decorative text-red-800 leading-tight">
          {pageDay}. Dezember
        </h1>

        {pageDay !== "24" && (isPageForToday || isAfterChristmas2024) && (
          <button
            type="button"
            className="p-4 text-red-800"
            onClick={() => push(`/advent/2024/${(+pageDay + 1).toString()}`)}
          >
            <TbArrowBigLeftLinesFilled className="size-6 md:size-10 hover:text-red-600 hover:scale-110 rotate-180" />
          </button>
        )}
      </div>

      {adventDay && (
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-6 sm:mb-8 font-cinzel-decorative text-green-800 leading-tight">
          {adventDay}. Advent
        </h2>
      )}
    </nav>
  );
}

function isValidDay(day: string | undefined): day is (typeof DAYS)[number] {
  return !!day && DAYS.includes(day);
}

export default Header;
