import { BrandSubstrate } from "@/components/diagnostico-frog/brand-substrate";
import { Closing } from "@/components/diagnostico-frog/closing";
import { Consolidated } from "@/components/diagnostico-frog/consolidated";
import { Footer } from "@/components/diagnostico-frog/footer";
import { Hero } from "@/components/diagnostico-frog/hero";
import { NextSteps } from "@/components/diagnostico-frog/next-steps";
import { TopNav } from "@/components/diagnostico-frog/top-nav";
import { VisualAudit } from "@/components/diagnostico-frog/visual-audit";

export default function DiagnosticoFrogman() {
  return (
    <>
      <TopNav />
      <main>
        <Hero />
        <BrandSubstrate />
        <VisualAudit />
        <Consolidated />
        <NextSteps />
        <Closing />
      </main>
      <Footer />
    </>
  );
}
