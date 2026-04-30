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
  title: React.ReactNode;
  align?: "left" | "center";
  description?: React.ReactNode;
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
      <p
        className={cn(
          "eyebrow text-brand-600",
          align === "center" && "justify-center",
        )}
      >
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-bold leading-tight text-steel-900 sm:text-4xl">
        {title}
      </h2>
      <span
        className={cn(
          "mt-5 block h-1 w-12 rounded-full bg-gradient-to-r from-brand-500 to-brand-700",
          align === "center" && "mx-auto",
        )}
      />
      {description && (
        <p className="mt-6 text-pretty text-base leading-relaxed text-steel-600">
          {description}
        </p>
      )}
    </div>
  );
}

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description?: React.ReactNode;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section
      className="relative overflow-hidden py-20 text-white sm:py-24 lg:py-28"
      style={{
        background:
          "linear-gradient(135deg, #082C4B 0%, #0F4C81 50%, #1B5DA0 100%)",
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-grid-soft opacity-20" />
      <div className="pointer-events-none absolute inset-0 bg-glimmer" />
      <div className="pointer-events-none absolute -left-24 top-0 h-80 w-80 rounded-full bg-brand-400/30 blur-3xl" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-80 w-80 rounded-full bg-brand-300/20 blur-3xl" />
      <div className="container-x relative">
        <p className="eyebrow text-brand-200">{eyebrow}</p>
        <h1 className="mt-4 text-3xl font-bold leading-tight text-balance sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-brand-100">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
