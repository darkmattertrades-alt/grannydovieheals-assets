"use client";

import { usePathname } from "next/navigation";
import GrannyChat from "@/components/granny-chat";

export default function ChatWrapper() {
  const pathname = usePathname();

  if (pathname === "/bio") return null;

  return <GrannyChat />;
}
