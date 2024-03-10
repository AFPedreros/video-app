"use client";

import { Divider, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import Link from "next/link";

export function MobileNavbar() {
  return (
    <NavbarMenu
      className="top-[calc(var(--navbar-height)_-_1px)] h-svh max-h-fit bg-default-200/50 pb-6 pt-6 shadow-medium backdrop-blur-md backdrop-saturate-150 dark:bg-default-100/50"
      motionProps={{
        initial: { opacity: 0, y: -20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
        transition: {
          ease: "easeInOut",
          duration: 0.2,
        },
      }}
    >
      <NavbarMenuItem className="group">
        <Link
          className="mb-2 w-full text-2xl text-foreground group-hover:text-primary"
          href="/peliculas"
        >
          Películas
        </Link>

        <Divider className="mt-1 opacity-50" />
      </NavbarMenuItem>
      <NavbarMenuItem className="group">
        <Link
          className="mb-2 w-full text-2xl text-foreground group-hover:text-primary"
          href="/series"
        >
          Series
        </Link>
      </NavbarMenuItem>
    </NavbarMenu>
  );
}
