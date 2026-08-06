import { Closing } from "@/components/diagnostico-jjl/closing";
import { Consolidated } from "@/components/diagnostico-jjl/consolidated";
import { Findings } from "@/components/diagnostico-jjl/findings";
import { Footer } from "@/components/diagnostico-jjl/footer";
import { Hero } from "@/components/diagnostico-jjl/hero";
import { Questions } from "@/components/diagnostico-jjl/questions";
import { TopNav } from "@/components/diagnostico-jjl/top-nav";
import { Working } from "@/components/diagnostico-jjl/working";

export default function DiagnosticoJjlServicos() {
  return (
    <>
      <TopNav />
      <main>
        <Hero />
        <Working />
        <Findings />
        <Consolidated />
        <Questions />
      </main>
      <Closing />
      <Footer />
    </>
  );
}
