import styled, { css } from 'styled-components';

interface PricingTableContainerProps {
  $mostPopular?: boolean;
}


export const PricingTableWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  
  @media (max-width: 768px) {
    width: 100%;
    max-width: 400px;
  }
`;

export const PopularBadge = styled.div`
  position: absolute;
  top: -35px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #1FB841;
  font-family: 'Inter', sans-serif;
  color: white;
  height: 100%;
  width: 100%;
  padding: 8px 24px;
  border-radius: 32px;
  font-size: 14px;
  font-weight: 700;
  white-space: nowrap;
  line-height: 20px;
  text-align: center;
  z-index: 0;
`;

export const PricingTableContainer = styled.div<PricingTableContainerProps>`
  display: flex;
  flex-direction: column;
  background-color: #F3F5F7;
  border-radius: 32px;
  border: 1.5px solid ${({ $mostPopular }) => $mostPopular ? '#1FB841' : '#F3F5F7'};
  max-width: 278px;
  padding: 16px;
  height: 100%;
  z-index: 1;
  min-height: 535px;
  
  @media (max-width: 768px) {
    max-width: 100%;
    width: 100%;
    min-height: auto;
  }
`;

export const PricingTableHeader = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PricingTableTitle = styled.h2`
  text-align: center;
  font-size: 32px;
  font-weight: 500;
  color: #1E2124;
  letter-spacing: -1%;
  line-height: 40px;
  margin-top: 8px;
`;

export const PreviousPricing = styled.p`
  text-align: center;
  font-size: 12px;
  color: #4C5157;
  font-weight: 500;
  letter-spacing: 0%;
  line-height: 100%;
  margin-top: .5rem;
`;

export const PreviousPricingValue = styled.span`
  color: #B81F1F;
  text-decoration: line-through;
`;

export const PricingTableDescription = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #495057;
  font-size: 12px;
  line-height: 150%;
  letter-spacing: 0%;
  text-align: center;
  margin-bottom: 1rem;
`;

export const PricingTablePrice = styled.div`
  font-size: 32px;
  font-weight: 700;
  color: #1FB841;
`;

export const PricingTableFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 8px 0;
`;

export const PricingTableFeature = styled.li`
  margin-bottom: 8px;
  font-size: 12px;
  list-style: none;
  letter-spacing: 0%;
  font-weight: 400;
  color: #4C5157;
`;

export const PricingTableFeatureIcon = styled.span`
  font-size: 12px;
  margin-right: 16px;
`;

export const PricingTableButton = styled.button`
  background-color: #1FB841;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
`;

export const Currency = styled.span`
font-size: 16px;
  line-height: 54px;
  font-weight: 500;
  color: #232425;
  font-style: semibold
  letter-spacing: 0%;
`;

export const Monthly = styled.span`
  font-size: 16px;
  line-height: 54px;
  font-weight: 500;
  color: #B8B8B8;  
  letter-spacing: 0%;
`;

export const PriceRow = styled.div`
  margin-top: .5rem; 
  display: flex;
  flex-direction: row;
  align-items: baseline;
  gap: 4px;
  justify-content: center;
`;