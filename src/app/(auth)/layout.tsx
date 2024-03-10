import { Logo } from "@/components/logo";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex relative h-screen w-screen items-center justify-center bg-gradient-to-br from-primary-50 via-primary-300 to-primary-500 p-2 sm:p-4 lg:p-8">
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
