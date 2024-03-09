import { Logo } from "@/components/logo";
import Link from "next/link";
import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex relative h-screen w-screen items-center justify-center bg-gradient-to-br from-rose-400 via-fuchsia-500 to-indigo-500 p-2 sm:p-4 lg:p-8">
      <Link
        href="/"
        className="absolute lg:left-5 left-2 top-5 items-center space-x-2 flex"
      >
        <Logo className="size-6" aria-hidden="true" />
        <span className="font-bold lg:inline-block">Vídeos</span>
        <span className="sr-only">Inicio</span>
      </Link>
      {children}
    </main>
  );
}
