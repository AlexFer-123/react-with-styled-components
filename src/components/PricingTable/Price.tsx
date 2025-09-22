import React from "react";
import {  PricingTableTitle, Currency, Monthly, PriceRow } from "./PricingTable.styles";


export interface PriceProps {
  price: string;
}

export const Price = ({ price }: { price: string }) => {
  return (
    <PriceRow>
        <Currency>R$</Currency>
        <PricingTableTitle>{price}</PricingTableTitle>
        <Monthly>/MENSAL</Monthly>
    </PriceRow>
  );
};