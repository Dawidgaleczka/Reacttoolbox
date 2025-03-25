import styled, { css } from 'styled-components';

const getButtonColor = (variant, theme) => {
  switch (variant) {
    case 'primary':
      return theme.colors.primary;
    case 'secondary':
      return theme.colors.secondary;
    case 'success':
      return theme.colors.success;
    case 'danger':
      return theme.colors.danger;
    case 'warning':
      return theme.colors.warning;
    case 'info':
      return theme.colors.info;
    default:
      return theme.colors.primary;
  }
};

const ButtonBase = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: 500;
  border-radius: ${({ theme, rounded }) => 
    rounded ? theme.borderRadius.round : theme.borderRadius.medium};
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  
  ${({ size, theme }) => {
    switch (size) {
      case 'small':
        return css`
          padding: ${theme.spacing.xs} ${theme.spacing.sm};
          font-size: ${theme.fontSizes.small};
        `;
      case 'large':
        return css`
          padding: ${theme.spacing.md} ${theme.spacing.lg};
          font-size: ${theme.fontSizes.large};
        `;
      default:
        return css`
          padding: ${theme.spacing.sm} ${theme.spacing.md};
          font-size: ${theme.fontSizes.medium};
        `;
    }
  }}
  
  ${({ variant, outline, theme }) => {
    const color = getButtonColor(variant, theme);
    
    if (outline) {
      return css`
        background-color: transparent;
        color: ${color};
        border: 1px solid ${color};
        
        &:hover {
          background-color: ${color};
          color: white;
        }
      `;
    }
    
    return css`
      background-color: ${color};
      color: white;
      border: 1px solid ${color};
      
      &:hover {
        background-color: ${color}dd;
        border-color: ${color}dd;
      }
    `;
  }}
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  ${({ fullWidth }) => fullWidth && css`
    width: 100%;
  `}
  
  svg {
    margin-right: ${({ theme, iconOnly }) => iconOnly ? '0' : theme.spacing.xs};
  }
`;

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  outline = false, 
  rounded = false,
  fullWidth = false,
  iconOnly = false,
  ...props 
}) => {
  return (
    <ButtonBase 
      variant={variant} 
      size={size} 
      outline={outline} 
      rounded={rounded}
      fullWidth={fullWidth}
      iconOnly={iconOnly}
      {...props}
    >
      {children}
    </ButtonBase>
  );
};

export default Button;