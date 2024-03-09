import { MainNav } from "@/components/layouts/main-nav";

export default function VideosLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />
      {children}
    </div>
  );
}
