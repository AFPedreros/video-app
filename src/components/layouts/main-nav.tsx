"use client";

import { AvatarButton } from "@/components/avatar-button";
import { Logo } from "@/components/logo";
import { useUser } from "@clerk/nextjs";
import {
  Button,
  cn,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function MainNav() {
  const pathname = usePathname();
  const { isSignedIn } = useUser();

  return (
    <Navbar isBordered>
      <NavbarContent justify="start">
        <NavbarBrand className="mr-4">
          <Link
            href="/"
            className="absolute left-2 top-5 flex items-center space-x-2 lg:left-5"
          >
            <Logo className="size-6" aria-hidden="true" />
            <span className="font-bold lg:inline-block">Cineverse</span>
            <span className="sr-only">Inicio</span>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      {isSignedIn && (
        <NavbarContent className="hidden gap-3 sm:flex" justify="center">
          <NavbarItem>
            <Link
              className={cn({
                "text-primary": pathname.includes("/peliculas"),
              })}
              href="/peliculas"
              aria-current={pathname === "/peliculas" ? "page" : "false"}
            >
              Películas
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link
              className={cn({ "text-primary": pathname.includes("/series") })}
              href="/series"
              aria-current={pathname === "/series" ? "page" : "false"}
            >
              Series
            </Link>
          </NavbarItem>
        </NavbarContent>
      )}

      <NavbarContent as="div" className="items-center" justify="end">
        {!isSignedIn && (
          <Link href="/inicio-sesion">
            <Button color="primary" variant="shadow" size="sm">
              Iniciar sesión
            </Button>
          </Link>
        )}
        {isSignedIn && <AvatarButton />}
      </NavbarContent>
    </Navbar>
  );
}
