"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAdventFlags } from "./advent/2024/components/useAdventFlags";

export default function NotFound() {
  const { push } = useRouter();

  const { day, isAdvent2024, isAfterChristmas2024 } = useAdventFlags();

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (isAfterChristmas2024) {
      push("/advent/2024/24");
    }

    if (isAdvent2024) {
      push(`/advent/2024/${day}`);
    }
  }, []);

  return null;
}
