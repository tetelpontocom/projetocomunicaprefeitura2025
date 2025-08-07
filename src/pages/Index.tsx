import { useEffect } from "react";
import { TopNav } from "@/components/landing/TopNav";
import { Hero } from "@/components/landing/Hero";
import { Section } from "@/components/landing/Section";
import { Footer } from "@/components/landing/Footer";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import logoTetel from "@/assets/logo-tetel-online.png";

const Index = () => {
  useEffect(() => {
    toast({ title: "Bem-vindo!", description: "Site de comunicação pública pronto para apresentar sua estratégia." });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30 text-foreground">
      <Helmet>
        <title>Tetel Digital: Estratégia & IA em Comunicação Pública</title>
        <meta name="description" content="Tetel Digital: planejamento, segmentação, IA e métricas para comunicação pública eficaz e mensurável." />
        <link rel="canonical" href="/" />
        <meta property="og:title" content="Tetel Digital: Estratégia & IA em Comunicação Pública" />
        <meta property="og:description" content="Planejamento, segmentação, IA e métricas para comunicação pública eficaz." />
        <meta property="og:site_name" content="Tetel Digital" />
        <meta property="og:image" content={logoTetel} />
        <script type="application/ld+json">{JSON.stringify([
          {
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Tetel Digital',
            url: '/',
            description: 'Planejamento, segmentação, IA e métricas para comunicação pública eficaz.'
          },
          {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Tetel Digital',
            url: '/',
            email: 'contato@tetel.online',
            telephone: '+55-82-99917-6900',
            contactPoint: [{
              '@type': 'ContactPoint',
              contactType: 'customer support',
              email: 'contato@tetel.online',
              telephone: '+55-82-99917-6900'
            }]
          }
        ])}</script>
      </Helmet>

      <TopNav />
      <main>
        <Hero />

        <Section
          id="visao-geral"
          title="Visão Geral do Projeto"
          description="A comunicação pública moderna enfrenta desafios em um cenário digital competitivo. Nosso objetivo é tornar a mensagem correta visível para a pessoa certa, com precisão e mensuração."
        >
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <img
              src="https://hzozubih.manus.space/Todososslides/Todos%20os%20slides/imagem1.png"
              alt="Ilustração de prefeitura com cidadãos conectados"
              loading="lazy"
              className="w-full h-auto rounded-lg glass-card"
            />
            <article className="space-y-4 glass-card p-6">
              <h3 className="text-xl font-semibold">A Analogia da Feira Livre</h3>
              <p>
                Pense na comunicação da prefeitura como uma feira livre. Há esforço, anúncio
                de programas e obras, mas como garantir que a mensagem chegue à pessoa certa?
              </p>
              <p>
                Propomos transformar essa feira em um centro de inteligência: antes de falar,
                entender quem está ouvindo, seus interesses e necessidades — para falar do tema
                certo, no momento certo, com impacto real e mensurável.
              </p>
            </article>
          </div>
        </Section>

        <Section
          id="estrategia"
          title="Estratégia de Comunicação Digital"
          description="Uma construção progressiva de presença digital para curto, médio e longo prazo."
        >
          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass-card p-6">
              <h4 className="font-semibold">2025 — Curto Prazo</h4>
              <p className="text-muted-foreground mt-2">Diferenciação e base digital sólida.</p>
            </div>
            <div className="glass-card p-6">
              <h4 className="font-semibold">2026 — Médio Prazo</h4>
              <p className="text-muted-foreground mt-2">Referência regional em comunicação pública moderna.</p>
            </div>
            <div className="glass-card p-6">
              <h4 className="font-semibold">2027–2028 — Longo Prazo</h4>
              <p className="text-muted-foreground mt-2">Comunicação eficiente, personalizada e comunidade engajada.</p>
            </div>
          </div>
        </Section>

        <Section
          id="segmentacao"
          title="Segmentação Estratégica"
          description="Mensagens sob medida para grupos específicos de cidadãos, aumentando relevância e confiança."
        >
          <ul className="grid md:grid-cols-2 gap-4 list-disc pl-6">
            <li>Mapeamento de públicos por bairro, faixa etária e interesse;</li>
            <li>Campanhas direcionadas com testes A/B;</li>
            <li>Mensuração contínua e ajustes semanais;</li>
            <li>Guia de linguagem e formato por segmento.</li>
          </ul>
        </Section>

        <Section
          id="ia"
          title="Inteligência Artificial Aplicada"
          description="Automação responsável para escalar produção e análise, sem perder o toque humano."
        >
          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass-card p-6"><h5 className="font-medium">Produção</h5><p className="text-muted-foreground mt-2">Roteiros, variações de texto e versões por canal.</p></div>
            <div className="glass-card p-6"><h5 className="font-medium">Análise</h5><p className="text-muted-foreground mt-2">Relatórios de engajamento e sentimento.</p></div>
            <div className="glass-card p-6"><h5 className="font-medium">Atendimento</h5><p className="text-muted-foreground mt-2">Respostas rápidas e consistentes em canais digitais.</p></div>
          </div>
        </Section>

        <Section
          id="identidade"
          title="Identidade Visual e Diretrizes"
          description="Coesão de marca em todos os pontos de contato: cores, tipografia e componentes."
        >
          <p className="text-muted-foreground">Sistema visual responsivo com manual de uso para peças online e offline.</p>
        </Section>

        <Section id="conteudo" title="Estratégia de Conteúdo" description="Calendário editorial vivo com pautas de alto valor público.">
          <div className="flex flex-wrap gap-3">
            <Button variant="pill" size="sm">Serviços ao Cidadão</Button>
            <Button variant="pill" size="sm">Obras e Entregas</Button>
            <Button variant="pill" size="sm">Saúde e Educação</Button>
            <Button variant="pill" size="sm">Transparência</Button>
          </div>
        </Section>

        <Section id="equipe" title="Equipe e Rotinas" description="Papéis claros, rituais semanais e indicadores de performance.">
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Planejamento semanal com priorização por impacto;</li>
            <li>Trilha de aprovação ágil e checklist de qualidade;</li>
            <li>Painel de métricas compartilhado com a gestão.</li>
          </ul>
        </Section>

        <Section id="cronograma" title="Cronograma" description="Implantação em ondas com entregas de valor desde o primeiro mês.">
          <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
            <li>Mês 1: Diagnóstico, identidade e primeiros fluxos;</li>
            <li>Mês 2: Segmentação, calendário e painéis de dados;</li>
            <li>Mês 3: Otimizações, automações e expansão de canais.</li>
          </ol>
        </Section>
        <Section
          id="conteudo-completo"
          title="Apresentação Completa"
          description="Conteúdo integral do material de referência com todos os textos e artes."
        >
          <div className="aspect-[16/9] w-full overflow-hidden rounded-lg border">
            <iframe
              src="https://hzozubih.manus.space/"
              title="Apresentação completa – Tetel Digital"
              loading="lazy"
              className="w-full h-[70vh]"
              referrerPolicy="no-referrer"
            />
          </div>
          <p className="text-sm text-muted-foreground mt-3">
            Se preferir, abra em nova aba:{" "}
            <a href="https://hzozubih.manus.space/" className="story-link">hzozubih.manus.space</a>
          </p>
        </Section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
