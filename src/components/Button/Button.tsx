import React from 'react';
import { StyledButton } from './Button.styles';

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary';
  size?: 'small' | 'medium' | 'large';
  width?: 'full' | 'auto';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled = false,
  type = 'button',
  variant = 'primary',
  size = 'medium',
  width = 'auto',
  ...props
}) => {
  return (
    <StyledButton
      onClick={onClick}
      disabled={disabled}
      type={type}
      variant={variant}
      size={size}
      width={width}
      {...props}
    >
      {children}
    </StyledButton>
  );
};
