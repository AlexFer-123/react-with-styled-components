import styled, { css } from 'styled-components';
import { ButtonProps } from './Button';

const primaryVariant = css`
  background-color: #2B79DF;
  color: white;
  border: 2px solid #2B79DF;
  padding: 4px 0;
  
  &:hover:not(:disabled) {
    background-color: #0056b3;
    border-color: #0056b3;
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0, 123, 255, 0.3);
  }
  
  &:active:not(:disabled) {
    background-color: #004085;
    border-color: #004085;
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0, 123, 255, 0.3);
  }
`;

const sizeStyles = {
  small: css`
    padding: 8px 16px;
    font-size: 14px;
    min-height: 32px;
  `,
  medium: css`
    padding: 12px 24px;
    font-size: 16px;
    min-height: 40px;
  `,
  large: css`
    padding: 16px 32px;
    font-size: 18px;
    min-height: 48px;
  `,
};

export const StyledButton = styled.button<ButtonProps>`
  /* Reset de estilos básicos */
  border: none;
  outline: none;
  cursor: pointer;
  font-weight: 500;
  text-align: center;
  text-decoration: none;
  display: inline-flex;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 0%;
  align-items: center;
  justify-content: center;
  font-family: 'Inter', sans-serif;
  color: white;
  height: 50px;
  
  /* Estilos base */
  border-radius: 50px;
  transition: all 0.2s ease-in-out;
  position: relative;
  overflow: hidden;
  width: 100%;

  
  /* Aplicar variante */
  ${({ variant }) => variant === 'primary' && primaryVariant}
  
  /* Aplicar tamanho */
  ${({ size }) => size && sizeStyles[size]}
  
  /* Estado desabilitado */
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none !important;
    box-shadow: none !important;
  }
  
  /* Foco para acessibilidade */
  &:focus-visible {
    outline: 2px solid #007bff;
    outline-offset: 2px;
  }
`;
