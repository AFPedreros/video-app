"use client";

import { useSignIn } from "@clerk/nextjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { Icon } from "@iconify/react";
import { Button, Input } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import * as React from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

const formSchema = z.object({
  email: z.string().email({
    message: "Por favor ingresa un correo válido",
  }),
  password: z.string().min(1, {
    message: "La contraseña es obligatoria",
  }),
});

type Inputs = z.infer<typeof formSchema>;

export function LoginForm() {
  const router = useRouter();
  const {
    formState: { isValid, isSubmitting, dirtyFields, errors },
    control,
    handleSubmit,
  } = useForm<Inputs>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
  });

  const { isLoaded, signIn, setActive } = useSignIn();
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  async function onSubmit(data: Inputs) {
    if (!isLoaded) return;

    try {
      const result = await signIn.create({
        identifier: data.email,
        password: data.password,
      });

      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId });
        router.push("/peliculas");
        toast.success("Inicio de sesión exitoso");
      } else {
        console.error("Login failed:", result);
        toast.error("Error en el inicio de sesión");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error en el inicio de sesión");
    }
  }

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <Input
            label="Correo Electrónico"
            labelPlacement="inside"
            type="email"
            variant="bordered"
            isInvalid={!!errors.email && dirtyFields.email}
            errorMessage={errors.email?.message}
            isDisabled={isSubmitting}
            {...field}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <Input
            label="Contraseña"
            labelPlacement="inside"
            type={isVisible ? "text" : "password"}
            variant="bordered"
            isInvalid={!!errors.password && dirtyFields.password}
            errorMessage={errors.password?.message}
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
            {...field}
          />
        )}
      />

      <Button
        color="primary"
        type="submit"
        isDisabled={!isValid || isSubmitting}
      >
        Iniciar Sesión
      </Button>
    </form>
  );
}
