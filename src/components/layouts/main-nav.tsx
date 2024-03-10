"use client";

import { AvatarButton } from "@/components/avatar-button";
import { Logo } from "@/components/logo";
import { Icon } from "@iconify/react";
import {
  cn,
  Input,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function MainNav() {
  const pathname = usePathname();

  return (
    <Navbar isBordered>
      <NavbarContent justify="start">
        <NavbarBrand className="mr-4">
          <Link
            href="/"
            className="absolute left-2 top-5 flex items-center space-x-2 lg:left-5"
          >
            <Logo className="size-6" aria-hidden="true" />
            <span className="font-bold lg:inline-block">Vídeos</span>
            <span className="sr-only">Inicio</span>
          </Link>
        </NavbarBrand>

        <NavbarContent className="hidden gap-3 sm:flex">
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
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="end">
        <Input
          classNames={{
            base: "max-w-full h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper:
              "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Busca una serie o una película"
          size="sm"
          startContent={
            <Icon
              className="text-default-500"
              icon="solar:magnifer-linear"
              width={20}
            />
          }
          type="search"
        />
        <AvatarButton />
      </NavbarContent>
    </Navbar>
  );
}
