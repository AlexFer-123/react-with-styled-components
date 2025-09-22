import styled from 'styled-components';

export interface SectionTitleProps {
  $maxWidth?: string;
  $fontSize?: 'lg' | 'md' | 'sm';
}

const spacing = {
  'sm': '12px',
  'md': '24px',
  'lg': '32px'
}

const fontSizes = 
  {
    'lg': '48px', 
    'md': '34px',
    'sm': '24px'
  }

export interface LinkProps {
  $margin?: 'sm' | 'md' | 'lg';
  }

export interface RowProps {
  $align?: 'start' | 'center' | 'end' | 'space-between' | 'stretch';
  $justify?: 'start' | 'center' | 'end' | 'space-between';
  $flexDirection?: 'row' | 'column';
  $gap?: string;
  $margin?: string;
  $height?: string;
}



export const AppContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: 'Poppins',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #ffffff;
  min-height: 100vh;
  
  @media (max-width: 768px) {
    padding: 20px 16px;
  }
`;

export const Section = styled.section`
  background-color: white;
  border-radius: 12px;
  padding: 32px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 768px) {
    padding: 24px 16px;
    margin-bottom: 24px;
    border-radius: 8px;
  }
`;

export const Link = styled.a<LinkProps>`
  color: #232425;
  text-decoration: underline  ;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  line-height: 24px;
  margin:  ${({ $margin }) => $margin ? `${spacing[$margin]} 8px` : '0'};
`;

export const SectionTitle = styled.h2<SectionTitleProps>`
  color: #232425;
  text-align: center;
  margin-bottom: 40px;
  font-size: ${({ $fontSize }) => $fontSize ? fontSizes[$fontSize] : '48px'};
  line-height: ${({ $fontSize }) => $fontSize === 'md' ? '40px' : '56px'};
  letter-spacing: -1%;
  font-weight: 500;
  max-width: ${({ $maxWidth }) => $maxWidth ? $maxWidth : '800px '};
  
  @media (max-width: 768px) {
    font-size: 32px;
    line-height: 44px;
    margin-bottom: 24px;
    max-width: 100%;
    padding: 0 0;
  }
`;

export const SectionTitlePrimary = styled.span`
  color: #1FB841;
`;

export const EconomyText = styled.p`
  color: #2BBE41;
  font-weight: 500;
  font-family: 'Inter', sans-serif;
  font-size: 30px;
  line-height: 40px;
  margin-left: 16px;
  
  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 32px;
    margin-left: 12px;
    text-align: center;
  }
`;

export const EconomyTextStrong = styled.strong` 
  font-weight: 600;
`;

export const Row = styled.div<RowProps>`
  display: flex;
  gap: ${({ $gap }) => $gap ? $gap : '0'};
  flex-direction: ${({ $flexDirection }) => $flexDirection ? $flexDirection : 'row'};
  align-items: ${({ $align }) => $align ? $align : 'start'};
  justify-content: ${({ $justify }) => $justify ? $justify : 'center'};
  margin: ${({ $margin }) => $margin ? $margin : '0px'};
  height: ${({ $height }) => $height ? $height : 'auto'};
  width: 100%;
`;