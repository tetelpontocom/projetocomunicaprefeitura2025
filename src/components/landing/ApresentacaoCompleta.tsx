import React from "react";

// Core slides
import img1 from "@/assets/apresentacao/imagem1.png";
import img2 from "@/assets/apresentacao/imagem2_nova.png";
import img3 from "@/assets/apresentacao/imagem3.png";
import img4 from "@/assets/apresentacao/imagem4.png";
import img5 from "@/assets/apresentacao/imagem5.png";
import img6 from "@/assets/apresentacao/imagem6.png";
import img7 from "@/assets/apresentacao/imagem7.png";
import img8 from "@/assets/apresentacao/imagem8.png";
import img9 from "@/assets/apresentacao/imagem9_nova.png";
import img10 from "@/assets/apresentacao/imagem10_nova.png";
import img11 from "@/assets/apresentacao/imagem11.png";

// Examples (antes/depois)
import ex1AntesCopy from "@/assets/apresentacao/exemplo1-antes-copy.jpg";
import ex1Antes2 from "@/assets/apresentacao/exemplo1-antes-2.jpg";
import ex1Antes3 from "@/assets/apresentacao/exemplo1-antes-3.jpg";
import ex1Depois1 from "@/assets/apresentacao/exemplo1-depois-1.png";
import ex1Depois2 from "@/assets/apresentacao/exemplo1-depois-2.png";
import ex1Depois3 from "@/assets/apresentacao/exemplo1-depois-3.png";
import ex2Antes1 from "@/assets/apresentacao/exemplo2-antes-1.jpg";
import ex2Antes2 from "@/assets/apresentacao/exemplo2-antes-2.jpg";
import ex3Antes1 from "@/assets/apresentacao/exemplo3-antes-1.jpg";

export const ApresentacaoCompleta: React.FC = () => {
  return (
    <section id="conteudo-completo" className="space-y-12">
      <article className="grid md:grid-cols-2 gap-6 items-start">
        <img src={img1} alt="Visão Geral do Projeto - ilustração" className="w-full h-auto rounded-lg glass-card" loading="lazy" />
        <div className="glass-card p-6">
          <h2 className="text-2xl font-semibold">Visão Geral do Projeto</h2>
          <p className="mt-3 text-muted-foreground">
            A comunicação pública moderna enfrenta desafios únicos em um cenário digital dinâmico e competitivo, onde cada voz disputa atenção e engajamento.
          </p>
          <h3 className="mt-4 font-semibold">A Analogia da Feira Livre</h3>
          <p className="mt-2 text-muted-foreground">
            Pense na comunicação da prefeitura como uma feira livre: muito esforço e anúncios, mas como garantir que a mensagem certa chegue à pessoa certa?
          </p>
          <p className="mt-2 text-muted-foreground">
            Propomos transformar essa feira em um centro de inteligência para falar com as pessoas certas, sobre os temas certos, no momento certo – gerando resultados reais e mensuráveis.
          </p>
        </div>
      </article>

      <article className="grid md:grid-cols-2 gap-6 items-start">
        <div className="glass-card p-6 order-2 md:order-1">
          <h2 className="text-2xl font-semibold">Estratégia de Comunicação Digital</h2>
          <p className="mt-3 text-muted-foreground">
            Construção progressiva de uma presença digital forte para a gestão pública.
          </p>
          <ul className="mt-4 space-y-2 text-muted-foreground">
            <li><span className="font-medium">2025 – Curto Prazo:</span> Diferenciação e base digital sólida.</li>
            <li><span className="font-medium">2026 – Médio Prazo:</span> Referência regional em comunicação pública moderna.</li>
            <li><span className="font-medium">2027–2028 – Longo Prazo:</span> Comunicação eficiente e personalizada, com comunidade engajada.</li>
          </ul>
        </div>
        <img src={img2} alt="Estratégia de Comunicação Digital - diagrama" className="w-full h-auto rounded-lg glass-card order-1 md:order-2" loading="lazy" />
      </article>

      <article className="grid md:grid-cols-2 gap-6 items-start">
        <img src={img3} alt="Segmentação Estratégica - ilustração" className="w-full h-auto rounded-lg glass-card" loading="lazy" />
        <div className="glass-card p-6">
          <h2 className="text-2xl font-semibold">Segmentação Estratégica</h2>
          <p className="mt-3 text-muted-foreground">Comunicação segmentada para garantir relevância e confiança.</p>
          <ul className="mt-4 list-disc pl-5 text-muted-foreground space-y-1">
            <li><span className="font-medium">Faixa etária:</span> Linguagem e canais por geração.</li>
            <li><span className="font-medium">Localização:</span> Mensagens por bairro e região.</li>
            <li><span className="font-medium">Interesse temático:</span> Conteúdo por área (saúde, educação, infraestrutura, etc.).</li>
          </ul>
        </div>
      </article>

      <article className="grid md:grid-cols-2 gap-6 items-start">
        <div className="glass-card p-6 order-2 md:order-1">
          <h2 className="text-2xl font-semibold">Arquitetura de Inteligência Artificial</h2>
          <ul className="mt-3 space-y-2 text-muted-foreground">
            <li><span className="font-medium">Assistentes Virtuais 24/7:</span> Site, Instagram e WhatsApp.</li>
            <li><span className="font-medium">Monitoramento Inteligente:</span> Análise de sentimento, tendências e cenários.</li>
            <li><span className="font-medium">Dashboard em tempo real:</span> Mapa de necessidades e engajamento por bairro/tema.</li>
          </ul>
          <p className="mt-2 text-muted-foreground">Fim do achismo; gestão baseada em dados.</p>
        </div>
        <img src={img4} alt="Arquitetura de IA - fluxos" className="w-full h-auto rounded-lg glass-card order-1 md:order-2" loading="lazy" />
      </article>

      <article className="grid md:grid-cols-2 gap-6 items-start">
        <img src={img5} alt="Nova Identidade Visual - moodboard" className="w-full h-auto rounded-lg glass-card" loading="lazy" />
        <div className="glass-card p-6">
          <h2 className="text-2xl font-semibold">Nova Identidade Visual</h2>
          <ul className="mt-3 list-disc pl-5 text-muted-foreground space-y-1">
            <li>Moderna e transparente.</li>
            <li>Expressa a identidade de Barra de São Miguel.</li>
            <li>Diferencia da gestão anterior.</li>
            <li>Posiciona como gestão inovadora e conectada.</li>
          </ul>
        </div>
      </article>

      <article className="grid md:grid-cols-2 gap-6 items-start">
        <div className="glass-card p-6 order-2 md:order-1">
          <h2 className="text-2xl font-semibold">Estratégia de Conteúdo</h2>
          <p className="mt-3 text-muted-foreground">Voz única por canal, guiada por calendário editorial.</p>
          <ul className="mt-4 space-y-1 text-muted-foreground">
            <li><span className="font-medium">Perfil da gestão:</span> Humanizado, conexão com a comunidade.</li>
            <li><span className="font-medium">Perfil da prefeitura:</span> Serviços, informações institucionais e prestação de contas.</li>
          </ul>
        </div>
        <img src={img6} alt="Estratégia de conteúdo - diretrizes" className="w-full h-auto rounded-lg glass-card order-1 md:order-2" loading="lazy" />
      </article>

      <article className="grid md:grid-cols-2 gap-6 items-start">
        <img src={img7} alt="Equipe Especializada - organograma" className="w-full h-auto rounded-lg glass-card" loading="lazy" />
        <div className="glass-card p-6">
          <h2 className="text-2xl font-semibold">Equipe Especializada</h2>
          <ul className="mt-3 list-disc pl-5 text-muted-foreground space-y-1">
            <li>Estratégia digital para gestão pública.</li>
            <li>Especialistas em IA e automação.</li>
            <li>Análise de dados e geração de insights.</li>
            <li>Capacitação da equipe atual; Social Media dedicado à gestão.</li>
          </ul>
        </div>
      </article>

      <article className="grid md:grid-cols-2 gap-6 items-start">
        <div className="glass-card p-6 order-2 md:order-1">
          <h2 className="text-2xl font-semibold">Cronograma de Implementação</h2>
          <ul className="mt-3 space-y-1 text-muted-foreground">
            <li><span className="font-medium">Fase 1 – Fundação (6 meses):</span> Base tecnológica, identidade e primeiros assistentes.</li>
            <li><span className="font-medium">Fase 2 – Expansão (12 meses):</span> IA completa, segmentação e otimização por dados.</li>
            <li><span className="font-medium">Fase 3 – Consolidação (18 meses):</span> Refinos contínuos e referência regional.</li>
          </ul>
        </div>
        <img src={img8} alt="Cronograma - roadmap" className="w-full h-auto rounded-lg glass-card order-1 md:order-2" loading="lazy" />
      </article>

      <article className="grid md:grid-cols-2 gap-6 items-start">
        <img src={img9} alt="Impacto na Comunicação Pública - benefícios" className="w-full h-auto rounded-lg glass-card" loading="lazy" />
        <div className="glass-card p-6">
          <h2 className="text-2xl font-semibold">Impacto na Comunicação Pública</h2>
          <ul className="mt-3 list-disc pl-5 text-muted-foreground space-y-1">
            <li>Imagem consolidada de gestão moderna e inovadora.</li>
            <li>Comunicação direta com grande parcela da população.</li>
            <li>Rede de embaixadores digitais engajados.</li>
            <li>Sistema de resposta rápida a crises e demandas.</li>
            <li>Melhor prestação de serviços, participação cidadã e decisões baseadas em dados.</li>
          </ul>
        </div>
      </article>

      <article className="grid md:grid-cols-2 gap-6 items-start">
        <div className="glass-card p-6 order-2 md:order-1">
          <h2 className="text-2xl font-semibold">Métricas de Sucesso</h2>
          <ul className="mt-3 list-disc pl-5 text-muted-foreground space-y-1">
            <li>Engajamento digital (curtidas, comentários, compartilhamentos).</li>
            <li>Alcance das campanhas.</li>
            <li>Satisfação do cidadão (pesquisas periódicas).</li>
            <li>Velocidade de atendimento.</li>
            <li>Base de dados enriquecida e qualificada.</li>
          </ul>
        </div>
        <img src={img10} alt="Métricas de Sucesso - KPIs" className="w-full h-auto rounded-lg glass-card order-1 md:order-2" loading="lazy" />
      </article>

      <article className="grid md:grid-cols-2 gap-6 items-start">
        <img src={img11} alt="Vantagens Estratégicas - bullets" className="w-full h-auto rounded-lg glass-card" loading="lazy" />
        <div className="glass-card p-6">
          <h2 className="text-2xl font-semibold">Vantagens Estratégicas da Transformação Digital</h2>
          <ul className="mt-3 list-disc pl-5 text-muted-foreground space-y-1">
            <li>Pioneirismo em IA.</li>
            <li>Segmentação inédita por faixa etária.</li>
            <li>Decisões orientadas por dados.</li>
            <li>Liderança em transformação e referência para outros municípios.</li>
          </ul>
        </div>
      </article>

      <article className="space-y-6">
        <h2 className="text-2xl font-semibold">Exemplos Práticos: Antes e Depois</h2>

        <section className="glass-card p-6">
          <h3 className="font-semibold">Exemplo 1: Carrossel – Cadastro Habitacional</h3>
          <h4 className="mt-3 text-sm uppercase tracking-wide text-muted-foreground">Antes</h4>
          <div className="mt-2 grid grid-cols-2 md:grid-cols-3 gap-3">
            <img src={ex1AntesCopy} alt="Cadastro Habitacional - antes - copy" className="rounded-md" loading="lazy" />
            <img src={ex1Antes2} alt="Cadastro Habitacional - antes - card 2" className="rounded-md" loading="lazy" />
            <img src={ex1Antes3} alt="Cadastro Habitacional - antes - card 3" className="rounded-md" loading="lazy" />
          </div>
          <p className="mt-3 text-muted-foreground">
            Comunicação importante, porém com linguagem formal e excesso de texto. Sem inteligência, não sabemos quem viu nem como dar continuidade.
          </p>
          <h4 className="mt-4 text-sm uppercase tracking-wide text-muted-foreground">Depois</h4>
          <div className="mt-2 grid grid-cols-2 md:grid-cols-3 gap-3">
            <img src={ex1Depois1} alt="Cadastro Habitacional - depois - card 1" className="rounded-md" loading="lazy" />
            <img src={ex1Depois2} alt="Cadastro Habitacional - depois - card 2" className="rounded-md" loading="lazy" />
            <img src={ex1Depois3} alt="Cadastro Habitacional - depois - card 3" className="rounded-md" loading="lazy" />
          </div>
          <p className="mt-3 text-muted-foreground">
            Nova identidade, linguagem acolhedora e, sobretudo, dados: cada interação gera inteligência para comunicação personalizada.
          </p>
        </section>

        <section className="glass-card p-6">
          <h3 className="font-semibold">Exemplo 2: Reel – Isenção IPTU</h3>
          <h4 className="mt-3 text-sm uppercase tracking-wide text-muted-foreground">Antes</h4>
          <div className="mt-2 grid grid-cols-2 gap-3">
            <img src={ex2Antes1} alt="Reel IPTU - antes - frame 1" className="rounded-md" loading="lazy" />
            <img src={ex2Antes2} alt="Reel IPTU - antes - frame 2" className="rounded-md" loading="lazy" />
          </div>
          <p className="mt-3 text-muted-foreground">
            Comunicação focada no ato administrativo, sem dados sobre quem de fato será beneficiado.
          </p>
          <h4 className="mt-4 text-sm uppercase tracking-wide text-muted-foreground">Depois</h4>
          <p className="mt-2 text-muted-foreground">
            Narrativa orientada ao impacto na vida real, com Assistente Virtual para checar elegibilidade e registrar interações no CRM.
          </p>
        </section>

        <section className="glass-card p-6">
          <h3 className="font-semibold">Exemplo 3: Reel – Salário na Conta</h3>
          <h4 className="mt-3 text-sm uppercase tracking-wide text-muted-foreground">Antes</h4>
          <div className="mt-2 grid grid-cols-2 md:grid-cols-3 gap-3">
            <img src={ex3Antes1} alt="Reel Salário - antes - frame 1" className="rounded-md" loading="lazy" />
          </div>
          <p className="mt-3 text-muted-foreground">
            Conteúdo positivo, porém sem estratégia e sem inteligência para continuidade.
          </p>
          <h4 className="mt-4 text-sm uppercase tracking-wide text-muted-foreground">Depois</h4>
          <p className="mt-2 text-muted-foreground">
            Perfis com papéis táticos distintos e mensuração por segmento (secretarias, bairros, etc.), permitindo comunicação mais eficiente.
          </p>
        </section>
      </article>
    </section>
  );
};

export default ApresentacaoCompleta;
