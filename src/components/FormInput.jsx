import { useState } from 'react';
import styled, { css } from 'styled-components';

const InputWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.md};
  width: ${({ fullWidth }) => fullWidth ? '100%' : 'auto'};
`;

const Label = styled.label`
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  font-weight: 500;
`;

const InputBase = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  border: 1px solid #ced4da;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 0.2rem ${({ theme }) => theme.colors.primary}33;
  }
  
  ${({ error }) => error && css`
    border-color: ${({ theme }) => theme.colors.danger};
    
    &:focus {
      box-shadow: 0 0 0 0.2rem ${({ theme }) => theme.colors.danger}33;
    }
  `}
  
  &:disabled {
    background-color: #e9ecef;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.colors.danger};
  font-size: ${({ theme }) => theme.fontSizes.small};
  margin-top: ${({ theme }) => theme.spacing.xs};
`;

const HelpText = styled.div`
  color: #6c757d;
  font-size: ${({ theme }) => theme.fontSizes.small};
  margin-top: ${({ theme }) => theme.spacing.xs};
`;

const FormInput = ({
  label,
  id,
  type = 'text',
  error,
  helpText,
  fullWidth = false,
  ...props
}) => {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <InputWrapper fullWidth={fullWidth}>
      {label && <Label htmlFor={inputId}>{label}</Label>}
      <InputBase 
        id={inputId}
        type={type}
        error={!!error}
        {...props}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {helpText && <HelpText>{helpText}</HelpText>}
    </InputWrapper>
  );
};

export default FormInput;
