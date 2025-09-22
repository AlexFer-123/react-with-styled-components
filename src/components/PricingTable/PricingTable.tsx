import React from "react";
import { PricingTableWrapper, PopularBadge, PricingTableContainer, PricingTableHeader, PricingTableTitle, PricingTableDescription, PricingTablePrice, PricingTableFeature, PreviousPricing, PreviousPricingValue, PricingTableFeatureIcon } from "./PricingTable.styles";
import { Row } from "../../App.styles";
import { Price } from "./Price";
import { checkIcon as CheckIcon, plusIcon as PlusIcon } from "../Icons/Icons";
import { Button } from "../Button";

export interface PricingTableProps {
  title: string;
  description: string;
  price: string;
  features: {icon: string, text: string}[];
  previousPricing: string;
  mostPopular?: boolean;
}

export const PricingTable = ({ title, description, price, features, previousPricing, mostPopular }: PricingTableProps) => {
  return (
      <PricingTableWrapper>
        {mostPopular && <PopularBadge>MAIS CONTRATADO</PopularBadge>}
        <PricingTableContainer $mostPopular={mostPopular}>
          <PricingTableHeader>
            <PricingTableTitle>{title}</PricingTableTitle>
            <PreviousPricing>de <PreviousPricingValue>{previousPricing}</PreviousPricingValue> por a partir de </PreviousPricing>
            <Price price={price}></Price>
            <PricingTableDescription>{description}</PricingTableDescription>
            {features.map((feature, index) => (
              <Row key={index} $flexDirection='row' $align='start' $justify='start' $margin='0 0 12px 0'>
                  <PricingTableFeatureIcon>{feature.icon === 'check' ? 
                  <CheckIcon />
                  : <PlusIcon />
                  }
                  </PricingTableFeatureIcon><PricingTableFeature> {feature.text}</PricingTableFeature>
              </Row>
            ))}
          </PricingTableHeader>
          <Row $flexDirection='row' $justify='center' style={{ marginTop: 'auto' }}>
              <Button width='full'>Comece grátis</Button>
          </Row>
        </PricingTableContainer>
      </PricingTableWrapper>
  );
};