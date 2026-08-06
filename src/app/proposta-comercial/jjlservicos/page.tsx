import { Cases } from "@/components/proposal-jjl/cases";
import { ClosingCta } from "@/components/proposal-jjl/closing-cta";
import { Diagnosis } from "@/components/proposal-jjl/diagnosis";
import { Exclusions } from "@/components/proposal-jjl/exclusions";
import { Faq } from "@/components/proposal-jjl/faq";
import { Footer } from "@/components/proposal-jjl/footer";
import { Hero } from "@/components/proposal-jjl/hero";
import { Objective } from "@/components/proposal-jjl/objective";
import { Payment } from "@/components/proposal-jjl/payment";
import { Pricing } from "@/components/proposal-jjl/pricing";
import { ProposalProvider } from "@/components/proposal-jjl/proposal-state";
import { ScopeTable } from "@/components/proposal-jjl/scope-table";
import { Timeline } from "@/components/proposal-jjl/timeline";
import { TopNav } from "@/components/proposal-jjl/top-nav";

export default function ProposalJjlServicos() {
  return (
    <ProposalProvider>
      <TopNav />
      <main>
        <Hero />
        <Diagnosis />
        <Objective />
        <ScopeTable />
        <Cases />
        <Pricing />
        <Payment />
        <Timeline />
        <Faq />
        <Exclusions />
        <ClosingCta />
      </main>
      <Footer />
    </ProposalProvider>
  );
}
