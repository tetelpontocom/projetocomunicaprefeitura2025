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
          <div className="md:text-right">
            <a href="mailto:contato@comunicacaopublica.gov.br" className="inline-block px-5 py-3 rounded-md bg-gradient-to-r from-brand to-brand2 text-primary-foreground shadow-[var(--shadow-elev)]">
              contato@comunicacaopublica.gov.br
            </a>
          </div>
        </div>
        <p className="mt-8 text-xs text-muted-foreground">© {new Date().getFullYear()} Comunicação Pública. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};
