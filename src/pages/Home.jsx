import styled from 'styled-components';
import { FaReact, FaTools, FaCode, FaRocket } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const HomeContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.md};
  
  ${({ theme }) => theme.breakpoints.md} {
    padding: ${({ theme }) => theme.spacing.lg};
    max-width: 1200px;
  }
`;

const Hero = styled.div`
  text-align: center;
  margin: 2rem auto 3rem;
  max-width: 800px;
  
  ${({ theme }) => theme.breakpoints.md} {
    margin: 4rem auto 5rem;
  }
`;

const HeroIcon = styled.div`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  
  ${({ theme }) => theme.breakpoints.md} {
    font-size: 5rem;
  }
`;

const HeroTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  
  ${({ theme }) => theme.breakpoints.md} {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: #6c757d;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  
  ${({ theme }) => theme.breakpoints.md} {
    font-size: ${({ theme }) => theme.fontSizes.large};
  }
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.lg};
  margin-bottom: 3rem;
  
  ${({ theme }) => theme.breakpoints.sm} {
    grid-template-columns: repeat(2, 1fr);
  }
  
  ${({ theme }) => theme.breakpoints.lg} {
    grid-template-columns: repeat(3, 1fr);
    margin-bottom: 5rem;
  }
`;

const FeatureCard = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: ${({ theme }) => theme.spacing.md};
  box-shadow: ${({ theme }) => theme.shadows.small};
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  
  ${({ theme }) => theme.breakpoints.md} {
    padding: ${({ theme }) => theme.spacing.lg};
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`;

const FeatureIcon = styled.div`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  
  ${({ theme }) => theme.breakpoints.md} {
    font-size: 2rem;
  }
`;

const FeatureTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.large};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const FeatureDescription = styled.p`
  color: #6c757d;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const GetStarted = styled.div`
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing.xl};
  
  ${({ theme }) => theme.breakpoints.md} {
    margin-top: ${({ theme }) => theme.spacing.xxl};
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <Hero>
        <HeroIcon>
          <FaReact />
        </HeroIcon>
        <HeroTitle>React Toolbox</HeroTitle>
        <HeroSubtitle>
          A collection of reusable React components, hooks, and utilities to speed up your development
        </HeroSubtitle>
        <Link to="/buttons">
          <Button size="large">
            <FaRocket /> Explore Components
          </Button>
        </Link>
      </Hero>
      
      <FeatureGrid>
        <FeatureCard>
          <FeatureIcon>
            <FaTools />
          </FeatureIcon>
          <FeatureTitle>Reusable Components</FeatureTitle>
          <FeatureDescription>
            A set of carefully crafted UI components that you can easily integrate into your projects.
          </FeatureDescription>
          <Link to="/buttons">
            <Button variant="secondary" outline>View Components</Button>
          </Link>
        </FeatureCard>
        
        <FeatureCard>
          <FeatureIcon>
            <FaCode />
          </FeatureIcon>
          <FeatureTitle>Custom Hooks</FeatureTitle>
          <FeatureDescription>
            Powerful custom hooks to handle common patterns and functionality in your React applications.
          </FeatureDescription>
          <Link to="/hooks">
            <Button variant="secondary" outline>View Hooks</Button>
          </Link>
        </FeatureCard>
      </FeatureGrid>
      
      <GetStarted>
        <h2>Ready to get started?</h2>
        <p>Explore our components and utilities to build your next React project faster.</p>
      </GetStarted>
    </HomeContainer>
  );
};

export default Home;

