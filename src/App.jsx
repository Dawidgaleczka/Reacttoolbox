import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import ButtonsPage from './pages/ButtonsPage';
import FormsPage from './pages/FormsPage';
import HooksPage from './pages/HooksPage';
import { GlobalStyle, theme } from './styles/GlobalStyles';
import { AppContainer, MainContent } from './styles/LayoutStyles';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Check if we're on mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Close sidebar when navigating on mobile
  const handleNavigation = () => {
    if (isMobile) {
      setSidebarOpen(false);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <AppContainer>
          <Navbar 
            sidebarOpen={sidebarOpen} 
            toggleSidebar={() => setSidebarOpen(!sidebarOpen)} 
          />
          <Sidebar 
            isOpen={sidebarOpen} 
            isMobile={isMobile}
            onNavigate={handleNavigation}
          />
          <MainContent sidebarOpen={!isMobile && sidebarOpen}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/buttons" element={<ButtonsPage />} />
              <Route path="/forms" element={<FormsPage />} />
              <Route path="/hooks" element={<HooksPage />} />
            </Routes>
          </MainContent>
        </AppContainer>
      </Router>
    </ThemeProvider>
  );
}

export default App;
