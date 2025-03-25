import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const MainContent = styled.main`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.md};
  transition: margin-left 0.3s ease;
  
  ${({ theme }) => theme.breakpoints.md} {
    padding: ${({ theme }) => theme.spacing.lg};
    margin-left: ${({ sidebarOpen }) => (sidebarOpen ? '250px' : '0')};
  }
`;

export const Section = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

export const ComponentDisplay = styled.div`
  background-color: #f8f9fa;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  border: 1px solid #e9ecef;
  overflow-x: auto;
  
  ${({ theme }) => theme.breakpoints.md} {
    padding: ${({ theme }) => theme.spacing.lg};
  }
`;

export const CodeBlock = styled.div`
  margin-top: ${({ theme }) => theme.spacing.md};
  background-color: #272822;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  overflow: hidden;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
  
  ${({ theme }) => theme.breakpoints.md} {
    padding: 0 ${({ theme }) => theme.spacing.lg};
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${({ columns = 12 }) => columns}, 1fr);
  gap: ${({ gap, theme }) => gap ? theme.spacing[gap] || gap : theme.spacing.md};
`;

export const Column = styled.div`
  grid-column: span ${({ xs = 12 }) => xs};
  
  ${({ theme, sm }) => sm && theme.breakpoints.sm} {
    grid-column: span ${({ sm }) => sm};
  }
  
  ${({ theme, md }) => md && theme.breakpoints.md} {
    grid-column: span ${({ md }) => md};
  }
  
  ${({ theme, lg }) => lg && theme.breakpoints.lg} {
    grid-column: span ${({ lg }) => lg};
  }
  
  ${({ theme, xl }) => xl && theme.breakpoints.xl} {
    grid-column: span ${({ xl }) => xl};
  }
`;

