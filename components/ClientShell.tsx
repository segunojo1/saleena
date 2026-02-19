"use client";

import dynamic from "next/dynamic";

const SherySetup = dynamic(() => import("./SherySetup"), {
  ssr: false,
});

export default function ClientShell() {
  return <SherySetup />;
}
