import React from 'react';
import { AppContainer, Row, Section, SectionTitle, SectionTitlePrimary, Link, EconomyText, EconomyTextStrong } from './App.styles';
import { PricingTable, BenefitsTable } from './components';
import { dollarIcon as DollarIcon, arrowRightIcon as ArrowRightIcon } from './components/Icons';
import { Button } from './components/Button';
import { useBreakpoint } from './hooks/useBreakpoint';

const App: React.FC = () => {
  const { isMobile } = useBreakpoint();
  
  const benefitsData = [
    { name: "Certificado Digital", marketPrice: "R$ 200/ano" },
    { name: "Abertura de empresa, 100% digital", marketPrice: "R$ 700/ano" },
    { name: "Contabilidade Consultiva", marketPrice: "R$ 5.880,00/mês" },
    { name: "Conta PJ gratuita, digital e integrada à sua contabilidade", marketPrice: "R$ 756,00/ano" },
    { name: "Atendimento personalizado por telefone e WhatsApp a partir do plano de entrada", marketPrice: "R$1.920/ano" }
  ];

  const featuresPJ = [
    {icon: "check",text: "Abertura Gratuita"},
    {icon: "check",text: "Certificado digital e-CNPJ"},
    {icon: "check",text: "Plataforma com emissor e gestão financeira"},
    {icon: "check",text: "Contabilidade, pró-labore e entrega de as obrigações com o governo"},
    {icon: "check",text: "Atendimento whatsapp, e-mail, telefone, video e presencial"}
  ]
  const featuresPJPlus = [
    {icon: "check",text: "Abertura Gratuita"},
    {icon: "plus",text: "Entrega do IRPF de 1 sócio(a)"},
    {icon: "plus",text: "Relatórios contábeis mensais"},
    {icon: "plus",text: "Multibenefícios (i)"},
  ]
  const featuresPJVip = [
    {icon: "check",text: "Tudo que contém o Plano PJ e Plus"},
    {icon: "plus",text: "Gestão financeira completa (i)"},
    {icon: "plus",text: "Pró-labore até 2 sócios(as) grátis"},
    {icon: "plus",text: "Pagamentos de contas"},
    {icon: "plus",text: "Distribuição de lucros"}
  ]
  return (
    <AppContainer>

      
      <Section>
        <Row $flexDirection='column' $align='center' $justify='center'>
          <SectionTitle>Por que a <SectionTitlePrimary>Contabilidade.com</SectionTitlePrimary> é a melhor opção em São Paulo?</SectionTitle>
          <BenefitsTable benefits={benefitsData} />

          <Row $margin='24px 0' $align='center' $justify='center'>
            <DollarIcon /> <EconomyText>Uma economia média de <EconomyTextStrong>R$ 9.456/ano</EconomyTextStrong></EconomyText> 
          </Row>

          <Row $flexDirection='row' $align='center' $justify='center'>
            <Button>Abrir empresa grátis</Button>
          </Row>
        </Row>
      </Section>

      

      <Section>
        <SectionTitle $fontSize='md' $maxWidth='440px'>Escolha o <SectionTitlePrimary>plano contábil</SectionTitlePrimary> ideal para sua empresa</SectionTitle>
        <img style={{marginBottom: '60px'}} src="./svg/UnderstandingPlans.png" alt="BackgroundPricing" />

        <Row 
          $flexDirection={isMobile ? 'column' : 'row'} 
          $align={isMobile ? 'center' : 'stretch'} 
          $justify='center' 
          $gap={isMobile ? '32px' : '60px'}
        >
          <PricingTable 
            title="Plano PJ"
            description="Faturamento Mensal: Ideal até 50 mil*   Notas fiscais: até 10 notas/mês"
            previousPricing="R$240"
            price="199"
            features={featuresPJ || []}
            mostPopular={true}
          />
          <PricingTable 
            title="Plano PJ Plus"
            description="Faturamento Mensal: Ideal até 50 mil*   Notas fiscais: até 10 notas/mês"
            previousPricing="R$320"
            price="240"
            features={featuresPJPlus || []}
          />
          <PricingTable 
            title="Plano PJ VIP"
            description="Faturamento Mensal: Ideal até 50 mil*   Notas fiscais: até 10 notas/mês"
            previousPricing="R$500"
            price="329"
            features={featuresPJVip || []}
          />
        </Row>
        <Row $flexDirection='row' $align='center' $justify='center'>
           <Link $margin='lg'>COMPARE TODOS OS PLANOS <ArrowRightIcon /></Link>
        </Row>
      </Section>
    </AppContainer>
  );
};

export default App;
