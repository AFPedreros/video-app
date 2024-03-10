"use client";

import { VerificationForm } from "@/components/auth/verification-form";
import { useSignUp } from "@clerk/nextjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { Icon } from "@iconify/react";
import { Button, Checkbox, Input } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import * as React from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

const passwordRegex =
  /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const formSchema = z
  .object({
    email: z.string().email({
      message: "Por favor ingresa un correo válido",
    }),
    password: z
      .string()
      .min(8, {
        message: "La contraseña debe tener mínimo 8 caracteres",
      })
      .regex(passwordRegex, {
        message:
          "La contraseña debe contener una mayúscula, un número y un carácter especial (ej. #%!). Es necesario incluir al menos uno de estos símbolos",
      }),
    confirmPassword: z.string(),
    termsAccepted: z.boolean().refine((val) => val === true, {
      message: "Debes aceptar los términos y condiciones",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"],
  });

type Inputs = z.infer<typeof formSchema>;

export function SignUpForm() {
  const router = useRouter();
  const {
    formState: { isValid, isSubmitting, dirtyFields, errors },
    control,
    handleSubmit,
  } = useForm<Inputs>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      termsAccepted: false,
    },
    mode: "onChange",
  });

  const { isLoaded, signUp, setActive } = useSignUp();
  const [isVisible, setIsVisible] = React.useState(false);
  const [verifying, setVerifying] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  async function onSubmit(data: Inputs) {
    if (!isLoaded) return;

    try {
      await signUp.create({
        emailAddress: data.email,
        password: data.password,
      });

      await signUp.prepareEmailAddressVerification({
        strategy: "email_code",
      });

      setVerifying(true);
    } catch (error) {
      console.error("Error en el registro", error);
      toast.error("Error en el registro");
    }
  }

  async function handleVerify(code: string) {
    if (!isLoaded || !code.trim()) return;

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });

      if (completeSignUp.status === "complete") {
        await setActive({ session: completeSignUp.createdSessionId });
        router.push("/peliculas");
        toast.success("Registro exitoso");
      } else {
        console.error("Verification failed:", completeSignUp);
        toast.error("Error en la verificación");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error en la verificación");
    }
  }

  return (
    <>
      {verifying && <VerificationForm onVerify={handleVerify} />}
      {!verifying && (
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
                isRequired
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
                isRequired
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
          <Controller
            name="confirmPassword"
            control={control}
            render={({ field }) => (
              <Input
                label="Confirmar Contraseña"
                labelPlacement="inside"
                type={isVisible ? "text" : "password"}
                variant="bordered"
                isRequired
                isInvalid={
                  !!errors.confirmPassword && dirtyFields.confirmPassword
                }
                errorMessage={errors.confirmPassword?.message}
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
          <div className="py-4">
            <Controller
              name="termsAccepted"
              control={control}
              render={({ field: { onChange, onBlur, name, ref, value } }) => (
                <Checkbox
                  isSelected={value}
                  onChange={(e) => onChange(e.target.checked)}
                  onBlur={onBlur}
                  name={name}
                  ref={ref}
                  isRequired
                  size="sm"
                >
                  Estoy de acuerdo con los&nbsp;
                  <Link className="text-sm text-primary-500" href="#">
                    Términos
                  </Link>
                  &nbsp; y&nbsp;
                  <Link className="text-sm text-primary-500" href="#">
                    Las Políticas de Privacidad
                  </Link>
                </Checkbox>
              )}
            />
            {errors.termsAccepted && (
              <div
                className="p-1 text-tiny text-danger"
                data-slot="error-message"
              >
                {errors.termsAccepted.message}
              </div>
            )}
          </div>

          <Button
            color="primary"
            type="submit"
            isDisabled={!isValid || isSubmitting}
          >
            Registrarse
          </Button>
        </form>
      )}
    </>
  );
}
