export const metadata = {
  title: "1. Dezember",
};

export default function Day1() {
  return (
    <>
      <div className="prose prose-sm sm:prose-base lg:prose-lg mx-auto">
        <p className="text-center text-gray-800 font-cormorant-garamond">
          Hallo Matze. Hier wird es in den nächsten Tagen jeden Tag eine neue
          Überraschung geben. Manchmal was cooles, meistens aber langweilige
          Scheiße.
        </p>
        <p className="text-center text-gray-800 font-cormorant-garamond font-bold">
          Viel Spaß!
        </p>

        {Array.from({ length: 48 }, (_, i) => (
          <div
            key={i}
            className="text-center text-gray-800 font-cormorant-garamond"
          >
            ↓
          </div>
        ))}

        <p className="text-center">Hier ist ein Video, was du schon kennst</p>

        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/sXUlVSGZ_p4?si=46VCTEb0Z8UeSUWx"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </>
  );
}
