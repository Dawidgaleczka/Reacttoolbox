import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaReact, FaBars, FaTimes } from 'react-icons/fa';

const NavbarContainer = styled.nav`
  background-color: ${({ theme }) => theme.colors.dark};
  color: white;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  position: sticky;
  top: 0;
  z-index: 1000;
  
  ${({ theme }) => theme.breakpoints.md} {
    padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  }
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  color: white;
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: bold;
  
  svg {
    margin-right: ${({ theme }) => theme.spacing.sm};
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.primary};
  }
  
  ${({ theme }) => theme.breakpoints.md} {
    font-size: ${({ theme }) => theme.fontSizes.xlarge};
    
    svg {
      font-size: 1.8rem;
    }
  }
`;

const NavLinks = styled.div`
  display: none;
  
  ${({ theme }) => theme.breakpoints.md} {
    display: flex;
    gap: ${({ theme }) => theme.spacing.lg};
  }
`;

const NavLink = styled(Link)`
  color: white;
  font-weight: 500;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  
  ${({ theme }) => theme.breakpoints.md} {
    display: none;
  }
`;

const Navbar = ({ sidebarOpen, toggleSidebar }) => {
  return (
    <NavbarContainer>
      <Logo to="/">
        <FaReact /> React Toolbox
      </Logo>
      <NavLinks>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/buttons">Buttons</NavLink>
        <NavLink to="/forms">Forms</NavLink>
        <NavLink to="/hooks">Hooks</NavLink>
      </NavLinks>
      <MenuButton onClick={toggleSidebar}>
        {sidebarOpen ? <FaTimes /> : <FaBars />}
      </MenuButton>
    </NavbarContainer>
  );
};

export default Navbar;

