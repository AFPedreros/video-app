"use client";

import { Icon } from "@iconify/react";
import { Button, Input } from "@nextui-org/react";
import * as React from "react";

export function LoginForm() {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
      <Input
        label="Correo Electrónico"
        labelPlacement="inside"
        name="email"
        type="email"
        variant="bordered"
      />
      <Input
        endContent={
          <button type="button" onClick={toggleVisibility}>
            {isVisible ? (
              <Icon
                className="pointer-events-none text-2xl text-default-400"
                icon="solar:eye-closed-linear"
              />
            ) : (
              <Icon
                className="pointer-events-none text-2xl text-default-400"
                icon="solar:eye-bold"
              />
            )}
          </button>
        }
        label="Contraseña"
        labelPlacement="inside"
        name="password"
        type={isVisible ? "text" : "password"}
        variant="bordered"
      />

      <Button color="primary" type="submit">
        Iniciar Sesión
      </Button>
    </form>
  );
}
