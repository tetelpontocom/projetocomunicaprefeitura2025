import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const sections = [
  { id: "visao-geral", label: "Visão Geral" },
  { id: "estrategia", label: "Estratégia Digital" },
  { id: "segmentacao", label: "Segmentação" },
  { id: "ia", label: "Inteligência Artificial" },
  { id: "identidade", label: "Identidade Visual" },
  { id: "conteudo", label: "Conteúdo" },
  { id: "equipe", label: "Equipe" },
  { id: "cronograma", label: "Cronograma" },
  
];

export const TopNav = () => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onHashLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('a[href^="#"]')) {
        const href = (target.closest('a') as HTMLAnchorElement).getAttribute('href')
        if (!href) return
        const id = href.replace('#', '')
        const el = document.getElementById(id)
        if (el) {
          e.preventDefault()
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }
    }
    document.addEventListener('click', onHashLinkClick)
    return () => document.removeEventListener('click', onHashLinkClick)
  }, [])

  const handleNavClick = () => setOpen(false)

  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2 font-semibold tracking-tight">
          <img src="/lovable-uploads/44e29e0b-d417-4e8d-b41e-7ad8ddd6b7b7.png" alt="Logotipo Tetel Digital - Estratégia & IA" className="h-8 w-auto" loading="lazy" />
          <span className="hidden sm:inline whitespace-nowrap">Tetel Digital</span>
        </a>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-1 overflow-x-auto">
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="px-3 py-2 rounded-md text-sm hover:bg-accent">
              {s.label}
            </a>
          ))}
        </div>

        {/* Right side: CTA + Mobile trigger */}
        <div className="flex items-center gap-2">
          {/* Mobile hamburger */}
          <div className="md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Abrir menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[85%] sm:max-w-sm">
                <SheetHeader>
                  <SheetTitle>Navegação</SheetTitle>
                </SheetHeader>
                <div className="mt-4 grid">
                  {sections.map((s) => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      onClick={handleNavClick}
                      className="px-2 py-3 rounded-md text-base hover:bg-accent"
                    >
                      {s.label}
                    </a>
                  ))}
                  <a href="#contato" onClick={handleNavClick} className="mt-2">
                    <Button className="w-full" variant="pill">
                      Fale conosco
                    </Button>
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* CTA desktop */}
          <a href="#contato" className="hidden md:block">
            <Button variant="pill" size="sm">Fale conosco</Button>
          </a>
        </div>
      </nav>
    </header>
  )
}

