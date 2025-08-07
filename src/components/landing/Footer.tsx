export const Footer = () => {
  return (
    <footer id="contato" className="border-t bg-background/60">
      <div className="container py-10 md:py-14">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h3 className="text-2xl font-semibold">Vamos conversar?</h3>
            <p className="text-muted-foreground mt-2">
              Envie uma mensagem e vamos construir uma comunicação pública moderna.
            </p>
          </div>
          <div className="md:text-right flex flex-col md:items-end gap-2">
            <a href="mailto:contato@tetel.online" className="inline-block px-5 py-3 rounded-md bg-gradient-to-r from-brand to-brand2 text-primary-foreground shadow-[var(--shadow-elev)]">
              contato@tetel.online
            </a>
            <a href="https://wa.me/5582999176900" className="inline-block px-5 py-3 rounded-md border border-border hover:bg-accent hover:text-accent-foreground transition" aria-label="Chamar no WhatsApp">
              WhatsApp: (82) 99917-6900
            </a>
          </div>
        </div>
        <p className="mt-8 text-xs text-muted-foreground">© {new Date().getFullYear()} Tetel Digital. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};
