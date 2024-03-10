import { AuthShell } from "@/components/auth/auth-shell";
import { SignUpForm } from "@/components/auth/sign-up-form";
import { Divider } from "@nextui-org/react";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <AuthShell>
      <p className="pb-2 text-xl font-medium">Registrarse</p>
      <SignUpForm />

      <p className="text-center text-small">
        ¿Ya tienes una cuenta?&nbsp;
        <Link className="text-sm text-primary-500" href="/inicio-sesion">
          Inicia Sesión
        </Link>
      </p>
    </AuthShell>
  );
}
