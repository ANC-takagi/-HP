import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
};

export function Section({ id, className, children }: SectionProps) {
  return (
    <section id={id} className={cn("py-16 sm:py-20 lg:py-24", className)}>
      <div className="container-x">{children}</div>
    </section>
  );
}

type SectionTitleProps = {
  eyebrow: string;
  title: string;
  align?: "left" | "center";
  description?: string;
};

export function SectionTitle({
  eyebrow,
  title,
  align = "center",
  description,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
      )}
    >
      <p className="font-display text-xs font-bold uppercase tracking-[0.3em] text-brand-600">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-bold leading-tight text-steel-900 sm:text-4xl">
        {title}
      </h2>
      <span
        className={cn(
          "mt-5 block h-1 w-12 rounded-full bg-brand-600",
          align === "center" && "mx-auto",
        )}
      />
      {description && (
        <p className="mt-6 text-base leading-relaxed text-steel-600">
          {description}
        </p>
      )}
    </div>
  );
}

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-brand-700 py-20 text-white sm:py-24 lg:py-28">
      <div className="absolute inset-0 -z-0 opacity-20">
        <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-brand-400 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-brand-500 blur-3xl" />
      </div>
      <div className="container-x relative">
        <p className="font-display text-xs font-bold uppercase tracking-[0.3em] text-brand-200">
          {eyebrow}
        </p>
        <h1 className="mt-3 text-3xl font-bold leading-tight text-balance sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        <span className="mt-5 block h-1 w-12 rounded-full bg-white" />
        {description && (
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-brand-100">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
