import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FaHome, FaSquare, FaWpforms, FaTools } from 'react-icons/fa';

const SidebarContainer = styled.aside`
  background-color: ${({ theme }) => theme.colors.light};
  border-right: 1px solid #e9ecef;
  height: 100vh;
  overflow-y: auto;
  padding: ${({ theme }) => theme.spacing.md};
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? '0' : '-250px')};
  width: 250px;
  transition: all 0.3s ease;
  z-index: 1000;
  box-shadow: ${({ isOpen, theme }) => isOpen ? theme.shadows.medium : 'none'};
  padding-top: 80px; /* Add space for the navbar */
  
  ${({ theme }) => theme.breakpoints.md} {
    left: ${({ isOpen }) => (isOpen ? '0' : '-250px')};
    box-shadow: none;
    z-index: 900;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 60px;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 800;
  display: ${({ isOpen, isMobile }) => (isOpen && isMobile ? 'block' : 'none')};
`;

const SidebarSection = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const SectionTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.small};
  text-transform: uppercase;
  color: #6c757d;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  padding-left: ${({ theme }) => theme.spacing.sm};
`;

const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.dark};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #e9ecef;
  }
  
  &.active {
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
  }
  
  svg {
    margin-right: ${({ theme }) => theme.spacing.sm};
  }
`;

const Sidebar = ({ isOpen, isMobile, onNavigate }) => {
  return (
    <>
      <Overlay isOpen={isOpen} isMobile={isMobile} onClick={onNavigate} />
      <SidebarContainer isOpen={isOpen}>
        <SidebarSection>
          <SectionTitle>Navigation</SectionTitle>
          <NavItem to="/" onClick={onNavigate}>
            <FaHome /> Home
          </NavItem>
        </SidebarSection>
        
        <SidebarSection>
          <SectionTitle>Components</SectionTitle>
          <NavItem to="/buttons" onClick={onNavigate}>
            <FaSquare /> Buttons
          </NavItem>
          <NavItem to="/forms" onClick={onNavigate}>
            <FaWpforms /> Forms
          </NavItem>
        </SidebarSection>
        
        <SidebarSection>
          <SectionTitle>Utilities</SectionTitle>
          <NavItem to="/hooks" onClick={onNavigate}>
            <FaTools /> Hooks
          </NavItem>
        </SidebarSection>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;

