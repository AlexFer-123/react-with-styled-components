import styled from 'styled-components';

export interface SectionTitleProps {
  $maxWidth?: string;
  $fontSize?: 'lg' | 'md' | 'sm';
}

const fontSizes = 
  {
    'lg': '48px', 
    'md': '34px',
    'sm': '24px'
  }

export interface RowProps {
  $align?: 'start' | 'center' | 'end' | 'space-between' | 'stretch';
  $justify?: 'start' | 'center' | 'end' | 'space-between';
  $flexDirection?: 'row' | 'column';
  $gap?: string;
  $marginBottom?: string;
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
`;

export const SectionTitlePrimary = styled.span`
  color: #1FB841;
`;

export const Row = styled.div<RowProps>`
  display: flex;
  gap: ${({ $gap }) => $gap ? $gap : '0'};
  flex-direction: ${({ $flexDirection }) => $flexDirection ? $flexDirection : 'row'};
  align-items: ${({ $align }) => $align ? $align : 'start'};
  justify-content: ${({ $justify }) => $justify ? $justify : 'center'};
  margin-bottom: ${({ $marginBottom }) => $marginBottom ? $marginBottom : '0px'};
  height: ${({ $height }) => $height ? $height : 'auto'};
  width: 100%;
`;