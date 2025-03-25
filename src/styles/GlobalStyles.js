import { createGlobalStyle } from 'styled-components';

export const breakpoints = {
  xs: '320px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
};

export const theme = {
  colors: {
    primary: '#4361ee',
    secondary: '#3f37c9',
    success: '#4cc9f0',
    danger: '#f72585',
    warning: '#f8961e',
    info: '#4895ef',
    light: '#f8f9fa',
    dark: '#212529',
    background: '#ffffff',
    text: '#333333',
  },
  fonts: {
    body: "'Roboto', sans-serif",
    heading: "'Poppins', sans-serif",
  },
  fontSizes: {
    small: '0.875rem',
    medium: '1rem',
    large: '1.25rem',
    xlarge: '1.5rem',
    xxlarge: '2rem',
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem',
  },
  borderRadius: {
    small: '0.25rem',
    medium: '0.5rem',
    large: '1rem',
    round: '50%',
  },
  shadows: {
    small: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    medium: '0 3px 6px rgba(0,0,0,0.15), 0 2px 4px rgba(0,0,0,0.12)',
    large: '0 10px 20px rgba(0,0,0,0.15), 0 3px 6px rgba(0,0,0,0.10)',
  },
  breakpoints: {
    xs: `@media (min-width: ${breakpoints.xs})`,
    sm: `@media (min-width: ${breakpoints.sm})`,
    md: `@media (min-width: ${breakpoints.md})`,
    lg: `@media (min-width: ${breakpoints.lg})`,
    xl: `@media (min-width: ${breakpoints.xl})`,
  },
};

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 16px;
    height: 100%;
    
    ${({ theme }) => theme.breakpoints.xs} {
      font-size: 14px;
    }
    
    ${({ theme }) => theme.breakpoints.md} {
      font-size: 16px;
    }
  }

  body {
    font-family: ${({ theme }) => theme.fonts.body};
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    flex-direction: column;
    min-height: 100%;
    overflow-x: hidden;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.heading};
    margin-bottom: ${({ theme }) => theme.spacing.md};
    line-height: 1.2;
  }
  
  h1 {
    font-size: 1.75rem;
    
    ${({ theme }) => theme.breakpoints.md} {
      font-size: 2.25rem;
    }
  }
  
  h2 {
    font-size: 1.5rem;
    
    ${({ theme }) => theme.breakpoints.md} {
      font-size: 1.75rem;
    }
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
  }

  button {
    cursor: pointer;
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }
`;
