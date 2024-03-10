import { MainNav } from "@/components/layouts/main-nav";
import { Spotlight } from "@/components/spotlight";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />

      <div className="relative flex flex-1 items-center justify-center overflow-hidden bg-background p-2 dark:bg-dot-white/[0.2] sm:p-4 lg:p-8">
        <div className="pointer-events-none fixed inset-0 flex h-screen items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        <Spotlight
          className="hidden md:-top-20 md:left-60 md:block"
          fill="white"
        />
        <div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0">
          <h1 className="bg-opacity-50 bg-gradient-to-b from-primary-700 to-primary bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl">
            Cineverse <br /> Tu universo de videos.
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-center text-base font-normal text-default-500 lg:text-lg">
            Plataforma desarrollada en Next.js, aprovechando las capacidades
            avanzadas de server actions para un filtrado eficiente de
            categorías. Utilizando Clerk para la gestión de autenticación,
            aseguramos un acceso seguro y personalizado para cada usuario.
            Integrada con la API de TMDB.
          </p>
        </div>
      </div>
    </div>
  );
}
