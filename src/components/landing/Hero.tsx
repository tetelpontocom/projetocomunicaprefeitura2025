import heroImage from "@/assets/hero-digital-prefeitura.jpg";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

export const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = Math.round(((e.clientX - rect.left) / rect.width) * 100);
    const y = Math.round(((e.clientY - rect.top) / rect.height) * 100);
    ref.current.style.setProperty("--spot-x", `${x}%`);
    ref.current.style.setProperty("--spot-y", `${y}%`);
  };

  return (
    <div ref={ref} onMouseMove={onMove} className="relative overflow-hidden">
      <div className="spotlight">
        <div className="container flex flex-col md:flex-row items-center gap-10 py-16 md:py-24">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Transformação Digital para Comunicação Pública
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              Construímos uma presença digital moderna, segmentada e mensurável para
              gestões públicas, conectando mensagens certas às pessoas certas.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#estrategia"><Button variant="hero" size="lg">Ver Estratégia</Button></a>
              <a href="#contato"><Button variant="outline" size="lg">Contato: (82) 99917-6900</Button></a>
            </div>
          </div>
          <div className="flex-1 w-full">
            <img
              src={heroImage}
              alt="Ilustração de prefeitura moderna com tecnologia e pessoas conectadas"
              loading="eager"
              className="w-full h-auto rounded-lg shadow-[var(--shadow-elev)]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
