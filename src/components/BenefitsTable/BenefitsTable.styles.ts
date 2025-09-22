import styled from 'styled-components';

export const BenefitsTableContainer = styled.div`
  width: 100%;
  max-width: 970px;
  margin: 0 auto;
  background-color: white;
  border-radius: 16px;
  overflow: hidden;
  
  @media (max-width: 768px) {
    overflow-x: auto;
  }
`;

export const TableContent = styled.div`
  min-width: 800px;
  position: relative;
  
  @media (max-width: 768px) {
    min-width: 750px;
  }
`;

export const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 0px 220px;
  align-items: center;
  font-family: 'Inter', sans-serif;
  font-size: 22px;
  line-height: 24px;
  font-weight: 500;
  padding: 24px 0;
  background-color: transparent;
  border-bottom: 1px solid #2BBE41;
  position: relative;
  
  @media (max-width: 768px) {
    grid-template-columns: 2fr 0px 200px;
  }
`;

export const HeaderTitle = styled.h3`
  color: #1FB841;
  font-size: 22px;
  line-height: 24px;
  font-weight: 500;
  font-family: 'Inter', sans-serif;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const HeaderIcon = styled.div`
  width: 40px;
  height: 40px;
  background-color: #1FB841;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 18px;
`;

export const HeaderColumn = styled.div`
  text-align: center;
  font-weight: 400;
  color: #232425;
  font-size: 22px;
  line-height: 24px;
  font-family: 'Inter', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:nth-child(2) {
    width: 120px;
    position: absolute;
    right: 294px;
    z-index: 1;
    
    @media (max-width: 768px) {
      right: 230px;
      width: 120px;
    }
  }
  
  &:last-child {
    text-align: center;
    justify-content: flex-start;
    width: 150px;
  }
`;

export const MiddleColumnBackground = styled.div`
  position: absolute;
  right: 250px;
  top: 0;
  width: 208px;
  height: 100%;
  background-color: #F5F5F5;
  border-radius: 12px;
  z-index: 0;
  
  @media (max-width: 768px) {
    right: 220px;
    width: 140px;
  }
`;

export const TableRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 0px 220px;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid #E0E1E2;
  position: relative;
  
  &:last-child {
    border-bottom: none;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 2fr 0px 200px;
  }
`;

export const BenefitName = styled.div`
  font-size: 18px;
  color: #000000;
  font-weight: 500;
  line-height: 24px;
  font-family: 'Inter', sans-serif;
  position: relative;
  max-width: 500px;
  text-align: left;
  z-index: 1;

  @media (max-width: 768px) {
      max-width: 400px;
  }
`;

export const IncludedBadge = styled.div`
  color: #1FB841;
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  position: absolute;
  z-index: 1;
  width: 120px;
  right: 294px;
  left: auto;
  
  @media (max-width: 768px) {
    right: 230px;
    width: 120px;
  }
`;

export const MarketPrice = styled.div`
  font-size: 18px;
  color: #232425;
  font-weight: 500;
  text-align: left;
  position: relative;
  z-index: 1;
  min-width: 170px;
  margin-left: 20px;
`;
