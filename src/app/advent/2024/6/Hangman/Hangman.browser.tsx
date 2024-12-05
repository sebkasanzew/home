"use client";

import dynamic from "next/dynamic";

const Hangman = dynamic(() => import("./Hangman"), { ssr: false });

export default function HangmanWrapper() {
  return <Hangman />;
}
