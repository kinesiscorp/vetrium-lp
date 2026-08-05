import { Cases } from "@/components/proposal-frog/cases";
import { ClosingCta } from "@/components/proposal-frog/closing-cta";
import { CostCalculator } from "@/components/proposal-frog/cost-calculator";
import { Demo } from "@/components/proposal-frog/demo";
import { Diagnosis } from "@/components/proposal-frog/diagnosis";
import { Exclusions } from "@/components/proposal-frog/exclusions";
import { Faq } from "@/components/proposal-frog/faq";
import { Footer } from "@/components/proposal-frog/footer";
import { Hero } from "@/components/proposal-frog/hero";
import { Objective } from "@/components/proposal-frog/objective";
import { Payment } from "@/components/proposal-frog/payment";
import { Pricing } from "@/components/proposal-frog/pricing";
import { ProposalProvider } from "@/components/proposal-frog/proposal-state";
import { ScopeTable } from "@/components/proposal-frog/scope-table";
import { Timeline } from "@/components/proposal-frog/timeline";
import { TopNav } from "@/components/proposal-frog/top-nav";

export default function ProposalFrogman() {
  return (
    <ProposalProvider>
      <TopNav />
      <main>
        <Hero />
        <Diagnosis />
        <CostCalculator />
        <Objective />
        <Demo />
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
