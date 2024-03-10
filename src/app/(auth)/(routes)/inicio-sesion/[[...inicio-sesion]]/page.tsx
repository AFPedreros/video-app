import { AuthShell } from "@/components/auth/auth-shell";
import { LoginForm } from "@/components/auth/login-form";
import { Divider } from "@nextui-org/react";
import Link from "next/link";

export default function SignInPage() {
  return (
    <AuthShell>
      <p className="pb-2 text-xl font-medium">Inicia Sesión</p>
      <LoginForm />

      <p className="text-center text-small">
        ¿Necesitas crear una cuenta?&nbsp;
        <Link className="text-sm text-primary-500" href="/registro">
          Regístrate
        </Link>
      </p>
    </AuthShell>
  );
}
