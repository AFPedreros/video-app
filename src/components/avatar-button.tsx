"use client";

import { useClerk } from "@clerk/clerk-react";
import { useUser } from "@clerk/nextjs";
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";

export function AvatarButton() {
  const { signOut } = useClerk();
  const router = useRouter();
  const { user } = useUser();

  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <Avatar
          isBordered
          as="button"
          className="shrink-0 transition-transform"
          src={user?.imageUrl || ""}
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="Logout" variant="flat">
        <DropdownSection aria-label="Profile & Actions" showDivider>
          <DropdownItem
            isReadOnly
            key="profile"
            textValue="Profile"
            variant="light"
            className="h-14 cursor-default gap-2"
          >
            <div className="inline-flex flex-col items-start">
              <span className="text-small text-default-600">Usuario</span>
              <span className="text-tiny text-default-500">
                {user?.emailAddresses[0].emailAddress}
              </span>
            </div>
          </DropdownItem>
        </DropdownSection>
        <DropdownSection aria-label="Logout">
          <DropdownItem
            key="logout"
            color="danger"
            onClick={() => signOut(() => router.push("/"))}
          >
            Cerrar sesión
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
}
