import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "@nextui-org/react";
import * as React from "react";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  verificationCode: z.string().min(6, "El código de verificación es requerido"),
});

type Inputs = z.infer<typeof formSchema>;

type VerificationFormProps = {
  onVerify: (code: string) => void;
};

export function VerificationForm({ onVerify }: VerificationFormProps) {
  const {
    control,
    handleSubmit,
    formState: { isValid, isSubmitting, errors },
  } = useForm<Inputs>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      verificationCode: "",
    },
  });

  const onSubmit = (data: Inputs) => {
    onVerify(data.verificationCode);
  };

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="verificationCode"
        control={control}
        render={({ field }) => (
          <Input
            label="Código de Verificación"
            type="text"
            variant="bordered"
            isRequired
            isInvalid={!!errors.verificationCode}
            errorMessage={errors.verificationCode?.message}
            {...field}
          />
        )}
      />
      <Button
        color="primary"
        type="submit"
        isDisabled={!isValid || isSubmitting}
      >
        Verificar Código
      </Button>
    </form>
  );
}
