"use client";

import { usePathname, useRouter } from "next/navigation";
import { useAdventFlags } from "./useAdventFlags";

type Props = Readonly<{
  children: React.ReactNode;
}>;

const isDev = process.env.NODE_ENV === "development";

export default function Container(props: Props) {
  const { children } = props;

  const pathname = usePathname();
  const { push } = useRouter();

  const pageDay = pathname.split("/").pop();
  const { day } = useAdventFlags();

  if (!isDev && pageDay && day && +pageDay > +day) {
    push("/advent/2024");

    return null;
  }

  return (
    <div className="min-h-screen w-full px-4 py-8">
      <div className="mx-auto max-w-3xl">{children}</div>
    </div>
  );
}
