import { Logo } from "@/components/logo";
import { auth } from "@clerk/nextjs";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { userId } = auth();

  if (userId) redirect("/peliculas");
  return (
    <main className="relative flex h-screen w-screen items-center justify-center bg-gradient-to-br from-primary-50 via-primary-300 to-primary-500 p-2 sm:p-4 lg:p-8">
      <Link
        href="/"
        className="absolute left-2 top-5 flex items-center space-x-2 lg:left-5"
      >
        <Logo className="size-6" aria-hidden="true" />
        <span className="font-bold lg:inline-block">Cineverse</span>
        <span className="sr-only">Inicio</span>
      </Link>
      {children}
    </main>
  );
}
