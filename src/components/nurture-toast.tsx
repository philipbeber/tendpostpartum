import type { ReactNode } from "react";

type NurtureToastProps = {
  title: string;
  children: ReactNode;
  icon?: string;
  className?: string;
};

export function NurtureToast({
  title,
  children,
  icon = "lightbulb",
  className = "",
}: NurtureToastProps) {
  return (
    <div
      className={`fixed bottom-8 left-6 z-40 max-w-xs transition-transform duration-500 hover:-translate-y-2 md:bottom-10 md:left-10 ${className}`}
    >
      <div className="rounded-xl bg-secondary-container p-6 text-secondary shadow-2xl">
        <div className="mb-2 flex items-center gap-3">
          <span className="material-symbols-outlined">{icon}</span>
          <span className="text-sm font-bold tracking-widest uppercase">
            {title}
          </span>
        </div>
        <div className="text-sm leading-relaxed">{children}</div>
      </div>
    </div>
  );
}
