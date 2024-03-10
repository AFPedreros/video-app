import { AuthShell } from "@/components/auth/auth-shell";
import { LoginForm } from "@/components/auth/login-form";
import { OAuthLogin } from "@/components/auth/oauth-login";
import { Divider } from "@nextui-org/react";
import Link from "next/link";

export default function SignInPage() {
  return (
    <AuthShell>
      <p className="pb-2 text-xl font-medium">Inicia Sesión</p>
      <LoginForm />

      <div className="flex items-center gap-4 py-2">
        <Divider className="flex-1" />
        <p className="shrink-0 text-tiny text-default-500">O</p>
        <Divider className="flex-1" />
      </div>

      <OAuthLogin />

      <p className="text-center text-small">
        ¿Necesitas crear una cuenta?&nbsp;
        <Link className="text-sm text-primary-500" href="/registro">
          Regístrate
        </Link>
      </p>
    </AuthShell>
  );
}
