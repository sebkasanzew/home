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

type Props = Readonly<{
  children: React.ReactNode;
}>;

export default function FontSettings(props: Props) {
  const { children } = props;

  //   return children;

  return (
    <div
      className={`${cinzelDecorative.variable} ${cormorantGaramond.variable} font-serif antialiased sm:py-12 sm:px-6 lg:px-8`}
    >
      {children}
    </div>
  );
}
