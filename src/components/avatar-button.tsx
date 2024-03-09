"use client";

import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from "@nextui-org/react";

export function AvatarButton() {
  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <Avatar
          isBordered
          as="button"
          className="shrink-0 transition-transform"
          src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
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
                zoey@example.com
              </span>
            </div>
          </DropdownItem>
        </DropdownSection>
        <DropdownSection aria-label="Logout">
          <DropdownItem key="logout" color="danger">
            Cerrar sesión
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
}
