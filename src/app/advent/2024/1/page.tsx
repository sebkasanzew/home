import { Cinzel_Decorative, Cormorant_Garamond } from "next/font/google";

const cinzelDecorative = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-cinzel-decorative",
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-cormorant-garamond",
});

export default function Day1() {
  return (
    <div
      className={`${cinzelDecorative.variable} ${cormorantGaramond.variable} font-serif max-w-3xl mx-auto px-4 sm:px-6 lg:px-8`}
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 sm:mb-6 font-cinzel-decorative text-red-800 leading-tight">
        1. Dezember
      </h1>
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-6 sm:mb-8 font-cinzel-decorative text-green-800 leading-tight">
        1. Advent
      </h2>
      <div className="prose prose-sm sm:prose-base lg:prose-lg mx-auto">
        <p className="text-center text-gray-800 font-cormorant-garamond">
          Hallo Matze. Hier wird es in den nächsten Tagen jeden Tag eine neue
          Überraschung geben. Manchmal was cooles, meistens aber langweilige
          Scheiße.
        </p>
        <p className="text-center text-gray-800 font-cormorant-garamond font-bold">
          Viel Spaß!
        </p>
        {/* make a loot of vertical arrows down, so the user user needs to scroll down */}
        {Array.from({ length: 48 }, (_, i) => (
          <div
            key={i}
            className="text-center text-gray-800 font-cormorant-garamond"
          >
            ↓
          </div>
        ))}
        <p className="text-center">Hier ist ein Video</p>
      </div>
    </div>
  );
}
