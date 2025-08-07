import { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  description?: string;
  children?: ReactNode;
}

export const Section = ({ id, title, description, children }: SectionProps) => {
  return (
    <section id={id} className="scroll-mt-24 py-16 md:py-24">
      <div className="container space-y-6 md:space-y-8 animate-reveal-up">
        <header className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
          {description && (
            <p className="mt-3 text-muted-foreground">{description}</p>
          )}
        </header>
        {children}
      </div>
    </section>
  );
};
