import Link from "next/link";
import React from "react";

export default function SeriesPage() {
  return (
    <div className="flex flex-1 items-center justify-center bg-background p-2 sm:p-4 lg:p-8">
      <Link href="/inicio-sesion">Iniciar sesión</Link>
    </div>
  );
}
