"use client";

import { Icon } from "@iconify/react";
import { Button } from "@nextui-org/react";

export function OAuthLogin() {
  return (
    <div className="flex flex-col gap-2">
      <Button
        startContent={<Icon icon="flat-color-icons:google" width={24} />}
        variant="bordered"
      >
        Continúa con Google
      </Button>
    </div>
  );
}
