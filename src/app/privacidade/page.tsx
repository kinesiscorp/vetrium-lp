import type { Metadata } from "next";
import { LegalPage } from "@/components/site/legal-page";
import { CONTACT } from "@/lib/site/content";

export const metadata: Metadata = {
  title: "Política de privacidade",
  description: "Como a Vetrium trata os dados pessoais enviados pelo site, em linha com a LGPD.",
  alternates: { canonical: "/privacidade" },
};

// TODO(vetrium): revisar com apoio jurídico e incluir razão social/CNPJ
// quando houver. O texto descreve apenas o que o site faz hoje.
export default function PrivacidadePage() {
  return (
    <LegalPage title="Política de privacidade" updated="19/10/2026">
      <p>
        Esta política explica quais dados pessoais a Vetrium recebe por meio
        deste site, para que eles são usados e quais são os seus direitos, de
        acordo com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD).
      </p>

      <h2>Quais dados recebemos</h2>
      <ul>
        <li>
          <strong>Formulário de orçamento:</strong> nome, e-mail, empresa
          (opcional) e as informações que você escreve sobre o seu projeto,
          incluindo a faixa de investimento, se informada.
        </li>
        <li>
          <strong>WhatsApp e e-mail:</strong> o conteúdo das mensagens que você
          decide nos enviar.
        </li>
        <li>
          <strong>Dados técnicos:</strong> o endereço IP é usado
          temporariamente, em memória, para limitar envios abusivos do
          formulário, e não é armazenado junto com a sua solicitação.
        </li>
      </ul>

      <h2>Para que usamos</h2>
      <p>
        Usamos os dados apenas para responder à sua solicitação, conversar sobre
        o projeto e preparar uma proposta. A base legal é a execução de
        procedimentos preliminares a um contrato, a pedido do titular (art. 7º,
        V, da LGPD). Não enviamos newsletters nem mensagens de marketing sem a
        sua autorização.
      </p>

      <h2>Onde ficam e com quem compartilhamos</h2>
      <p>
        As solicitações ficam registradas no sistema interno de gestão de
        clientes da Vetrium, com acesso restrito à equipe por login e senha. Não
        vendemos nem cedemos seus dados. Eles podem ser processados por
        fornecedores de infraestrutura necessários para o site funcionar, como
        o provedor de hospedagem.
      </p>

      <h2>Por quanto tempo</h2>
      <p>
        Mantemos os dados enquanto forem necessários para a negociação e para a
        eventual relação comercial, ou até você pedir a exclusão — exceto quando
        a lei exigir a guarda por mais tempo.
      </p>

      <h2>Cookies e armazenamento no navegador</h2>
      <p>
        Este site não usa cookies de publicidade nem ferramentas de
        rastreamento. O formulário de orçamento guarda um rascunho das suas
        respostas apenas no seu navegador (sessionStorage), para que você não
        perca o que escreveu ao recarregar a página; ele é apagado quando a aba
        é fechada ou quando o envio é concluído.
      </p>

      <h2>Seus direitos</h2>
      <p>
        Você pode pedir a qualquer momento a confirmação de que tratamos seus
        dados, acesso, correção, anonimização, portabilidade ou exclusão, além
        de informações sobre compartilhamento (art. 18 da LGPD). Basta escrever
        para <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.
      </p>

      <h2>Alterações</h2>
      <p>
        Esta política pode ser atualizada quando o site mudar. A data no topo
        indica a versão em vigor.
      </p>
    </LegalPage>
  );
}
