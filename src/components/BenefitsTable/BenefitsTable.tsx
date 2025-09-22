import React from "react";
import {
  BenefitsTableContainer,
  TableContent,
  TableHeader,
  HeaderTitle,
  HeaderColumn,
  MiddleColumnBackground,
  TableRow,
  BenefitName,
  IncludedBadge,
  MarketPrice
} from "./BenefitsTable.styles";

interface Benefit {
  name: string;
  marketPrice: string;
}

interface BenefitsTableProps {
  benefits: Benefit[];
}

export const BenefitsTable = ({ benefits }: BenefitsTableProps) => {
  return (
    <BenefitsTableContainer>
      <TableContent>
        <MiddleColumnBackground />
        <TableHeader>
          <HeaderTitle>
            Benefícios inclusos no seu pacote
          </HeaderTitle>
          <HeaderColumn>
            <img src="/svg/ContabilidadeBrand.svg" alt="Contabilidade.com" width="34" height="41" />
          </HeaderColumn>
          <HeaderColumn>Média de Mercado</HeaderColumn>
        </TableHeader>
        
        {benefits.map((benefit, index) => (
          <TableRow key={index}>
            <BenefitName><p>{benefit.name}</p></BenefitName>
            <IncludedBadge><p>incluso</p></IncludedBadge>
            <MarketPrice><p>{benefit.marketPrice}</p></MarketPrice>
          </TableRow>
        ))}
      </TableContent>
    </BenefitsTableContainer>
  );
};
