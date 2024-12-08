"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import { getAnswer } from "./actions";

export default function ContentFallback() {
  const [generation, setGeneration] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const pathname = usePathname();
  const day = pathname.split("/").pop();

  return (
    <div className="flex flex-col items-center gap-6">
      <button
        onClick={async () => {
          setLoading(true);
          const { text } = await getAnswer(
            `Es ist Adventszeit und ich bin auf der Suche nach Inspiration. Gib mir den Spruch des Tages. Heute ist der ${day}. Dezember 2024. Sei dabei etwas witzig. Verwende keine Hashtags, oder ähnliche Social-Media-Elemente.`
          );
          setGeneration(text);
          setLoading(false);
        }}
        className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md"
      >
        <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
        <span className="relative px-6 py-3 transition-all ease-out rounded-md group-hover:bg-opacity-0 duration-400">
          <span className="relative text-white">
            {loading ? "Laden..." : "Gib mir den Spruch des Tages"}
          </span>
        </span>
      </button>

      <div className="prose-lg">{generation}</div>
    </div>
  );
}
