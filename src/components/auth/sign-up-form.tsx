"use client";

import { Icon } from "@iconify/react";
import { Button, Checkbox, Input } from "@nextui-org/react";
import Link from "next/link";
import * as React from "react";

export function SignUpForm() {
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
        label="Confirmar Contraseña"
        labelPlacement="inside"
        name="password"
        type={isVisible ? "text" : "password"}
        variant="bordered"
      />
      <Checkbox isRequired className="py-4" size="sm">
        Estoy de acuerdo con los&nbsp;
        <Link className="text-sm text-primary-500" href="#">
          Términos
        </Link>
        &nbsp; y&nbsp;
        <Link className="text-sm text-primary-500" href="#">
          Las Políticas de Privacidad
        </Link>
      </Checkbox>

      <Button color="primary" type="submit">
        Registrarse
      </Button>
    </form>
  );
}
