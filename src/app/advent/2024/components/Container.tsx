"use client";

import { usePathname, useRouter } from "next/navigation";
import { useAdventFlags } from "./useAdventFlags";
import { useEffect } from "react";

type Props = Readonly<{
  children: React.ReactNode;
}>;

const isDev = process.env.NODE_ENV === "development";
const isMockApi = process.env.NEXT_PUBLIC_MOCK_API === "true";

export default function Container(props: Props) {
  const { children } = props;

  const pathname = usePathname();
  const { push } = useRouter();

  const { day } = useAdventFlags();

  useEffect(() => {
    const p = typeof window === "undefined" ? null : pathname?.split("/").pop() ?? null;
    if (!isDev && !isMockApi && p && day && +p > +day) {
      push("/advent/2024");
    }
  }, [pathname, day, push]);

  return (
    <div className="min-h-screen w-full px-4 py-8">
      <div className="mx-auto max-w-3xl">{children}</div>
    </div>
  );
}
