export function AuthShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4 rounded-large bg-content1 px-8 pb-10 pt-6 shadow-large">
      {children}
    </div>
  );
}
