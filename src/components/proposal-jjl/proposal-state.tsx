"use client";

import { createContext, useContext, useMemo, useState } from "react";
import { PLANS, type PaymentMode, type PlanId } from "@/lib/proposal-jjl/content";

type ProposalState = {
  planId: PlanId;
  setPlanId: (id: PlanId) => void;
  paymentMode: PaymentMode;
  setPaymentMode: (mode: PaymentMode) => void;
  plan: (typeof PLANS)[PlanId];
  planPrice: number;
};

const ProposalContext = createContext<ProposalState | null>(null);

export function ProposalProvider({ children }: { children: React.ReactNode }) {
  const [planId, setPlanId] = useState<PlanId>("funcional");
  const [paymentMode, setPaymentMode] = useState<PaymentMode>("parcelado");

  const value = useMemo<ProposalState>(() => {
    const plan = PLANS[planId];
    const planPrice = paymentMode === "avista" ? plan.avistaPrice : plan.price;
    return { planId, setPlanId, paymentMode, setPaymentMode, plan, planPrice };
  }, [planId, paymentMode]);

  return <ProposalContext.Provider value={value}>{children}</ProposalContext.Provider>;
}

export function useProposal() {
  const ctx = useContext(ProposalContext);
  if (!ctx) throw new Error("useProposal precisa estar dentro de <ProposalProvider>");
  return ctx;
}
