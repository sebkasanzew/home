"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TreePine, Gift, Snowflake } from "lucide-react";

const christmasJokes = [
  {
    question: "Was sagt der große Stift zum kleinen Stift?",
    answer: "Wachsmalstift!",
  },
  {
    question:
      "Wie nennt man einen Weihnachtsmann, der auf einer Eisscholle davontreibt?",
    answer: "Schollory Klaus!",
  },
  {
    question: "Was ist grün, hängt an der Tür und klopft?",
    answer: "Ein Klopfsalat!",
  },
  {
    question: "Welche Handschuhe passen dem Weihnachtsmann am besten?",
    answer: "Christhandschuhe!",
  },
  {
    question: "Was ist rot und steht im Wald?",
    answer: "Ein Erdbeertarnt!",
  },
];

export default function ChristmasJokeGame() {
  const [currentJokeIndex, setCurrentJokeIndex] = useState(0);
  const [showPunchline, setShowPunchline] = useState(false);

  const currentJoke = christmasJokes[currentJokeIndex];

  const handleNextJoke = () => {
    setCurrentJokeIndex((prevIndex) => (prevIndex + 1) % christmasJokes.length);
    setShowPunchline(false);
  };

  const handleRevealPunchline = () => {
    setShowPunchline(true);
  };

  return (
    <div className="min-h-[600px] bg-gradient-to-b from-red-100 to-green-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-red-600">
            Weihnachts-Witze-Spiel
            <TreePine className="inline-block ml-2 text-green-600" />
          </CardTitle>
        </CardHeader>

        <CardContent className="text-center">
          <p className="text-lg mb-4">{currentJoke.question}</p>
          {showPunchline ? (
            <p className="text-xl font-bold text-green-600 mt-4 h-10">
              {currentJoke.answer}
            </p>
          ) : (
            <Button
              onClick={handleRevealPunchline}
              className="bg-red-500 hover:bg-red-600 text-white h-10"
            >
              Pointe zeigen <Gift className="ml-2" />
            </Button>
          )}
        </CardContent>

        <CardFooter className="flex justify-end items-center">
          <Button onClick={handleNextJoke} variant="outline">
            Nächster Witz
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
