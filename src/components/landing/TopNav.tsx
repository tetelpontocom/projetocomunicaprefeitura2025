import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const sections = [
  { id: "visao-geral", label: "Visão Geral" },
  { id: "estrategia", label: "Estratégia Digital" },
  { id: "segmentacao", label: "Segmentação" },
  { id: "ia", label: "Inteligência Artificial" },
  { id: "identidade", label: "Identidade Visual" },
  { id: "conteudo", label: "Conteúdo" },
  { id: "equipe", label: "Equipe" },
  { id: "cronograma", label: "Cronograma" },
  { id: "conteudo-completo", label: "Apresentação" },
];

export const TopNav = () => {
  useEffect(() => {
    const onHashLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a[href^="#"]')) {
        const href = (target.closest('a') as HTMLAnchorElement).getAttribute('href');
        if (!href) return;
        const id = href.replace('#', '');
        const el = document.getElementById(id);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };
    document.addEventListener('click', onHashLinkClick);
    return () => document.removeEventListener('click', onHashLinkClick);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2 font-semibold tracking-tight">
          <img src="/lovable-uploads/44e29e0b-d417-4e8d-b41e-7ad8ddd6b7b7.png" alt="Logotipo Tetel Digital - Estratégia & IA" className="h-8 w-auto" loading="lazy" />
          <span className="hidden sm:inline">Tetel Digital</span>
        </a>
        <div className="hidden md:flex items-center gap-2">
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="px-3 py-2 rounded-md text-sm hover:bg-accent">
              {s.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <a href="#contato">
            <Button variant="pill" size="sm">Fale conosco</Button>
          </a>
        </div>
      </nav>
    </header>
  );
};
