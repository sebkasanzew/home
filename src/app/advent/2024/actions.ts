"use server";

import { generateText } from "ai";
import { anthropic } from "@ai-sdk/anthropic";

export async function getAnswer(question: string) {
  const { text, finishReason, usage } = await generateText({
    model: anthropic("claude-3-5-sonnet-20241022"),
    prompt: question,
  });

  return { text, finishReason, usage };
}
