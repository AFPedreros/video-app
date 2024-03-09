import { AuthShell } from "@/components/auth/auth-shell";
import { OAuthLogin } from "@/components/auth/oauth-login";
import { SignUpForm } from "@/components/auth/sign-up-form";
import { Divider } from "@nextui-org/react";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <AuthShell>
      <p className="pb-2 text-xl font-medium">Registrarse</p>
      <SignUpForm />

      <div className="flex items-center gap-4 py-2">
        <Divider className="flex-1" />
        <p className="shrink-0 text-tiny text-default-500">O</p>
        <Divider className="flex-1" />
      </div>

      <OAuthLogin />

      <p className="text-center text-small">
        ¿Ya tienes una cuenta?&nbsp;
        <Link className="text-sm text-primary-500" href="/inicio-sesion">
          Inicia Sesión
        </Link>
      </p>
    </AuthShell>
  );
}
