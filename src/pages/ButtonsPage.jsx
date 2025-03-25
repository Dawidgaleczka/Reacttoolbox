import { FaHeart, FaTrash, FaSave, FaPlus } from 'react-icons/fa';
import styled from 'styled-components';
import Button from '../components/Button';
import CodeExample from '../components/CodeExample';
import { Section, ComponentDisplay } from '../styles/LayoutStyles';

const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  
  @media ${({ theme }) => theme.breakpoints.md} {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

const ButtonRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  
  @media ${({ theme }) => theme.breakpoints.md} {
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

const PageTitle = styled.h1`
  font-size: 1.75rem;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  
  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: 2.25rem;
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
`;

const PageDescription = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.textSecondary || '#6c757d'};
  font-size: 0.95rem;
  
  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: 1rem;
  }
`;

const ButtonsPage = () => {
  const basicButtonCode = `import Button from '../components/Button';

// Basic usage
<Button>Default Button</Button>
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="success">Success</Button>
<Button variant="danger">Danger</Button>
<Button variant="warning">Warning</Button>
<Button variant="info">Info</Button>`;

  const outlineButtonCode = `// Outline buttons
<Button outline>Default Outline</Button>
<Button variant="primary" outline>Primary</Button>
<Button variant="secondary" outline>Secondary</Button>
<Button variant="success" outline>Success</Button>
<Button variant="danger" outline>Danger</Button>
<Button variant="warning" outline>Warning</Button>
<Button variant="info" outline>Info</Button>`;

  const sizeButtonCode = `// Different sizes
<Button size="small">Small</Button>
<Button>Default</Button>
<Button size="large">Large</Button>`;

  const iconButtonCode = `import { FaHeart, FaSave, FaPlus } from 'react-icons/fa';

// With icons
<Button><FaHeart /> With Icon</Button>
<Button variant="success"><FaSave /> Save</Button>
<Button variant="primary" size="small"><FaPlus /> Add New</Button>

// Icon only
<Button iconOnly rounded><FaHeart /></Button>
<Button variant="success" iconOnly rounded><FaSave /></Button>
<Button variant="danger" iconOnly rounded><FaTrash /></Button>`;

  const fullWidthButtonCode = `// Full width button
<Button fullWidth>Full Width Button</Button>
<Button variant="primary" fullWidth>Primary Full Width</Button>`;

return (
  <div>
    <PageTitle>Buttons</PageTitle>
    <PageDescription>Customizable button components for actions in forms, dialogs, and more.</PageDescription>
      
      <Section>
        <h2>Basic Buttons</h2>
        <p>Our button component supports different variants to express different meanings.</p>
        
        <ComponentDisplay>
          <ButtonGrid>
            <Button>Default</Button>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="success">Success</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="warning">Warning</Button>
            <Button variant="info">Info</Button>
          </ButtonGrid>
          
          <CodeExample code={basicButtonCode} />
        </ComponentDisplay>
      </Section>
      
      <Section>
        <h2>Outline Buttons</h2>
        <p>For a lighter touch, outline buttons provide a less prominent option.</p>
        
        <ComponentDisplay>
          <ButtonGrid>
            <Button outline>Default</Button>
            <Button variant="primary" outline>Primary</Button>
            <Button variant="secondary" outline>Secondary</Button>
            <Button variant="success" outline>Success</Button>
            <Button variant="danger" outline>Danger</Button>
            <Button variant="warning" outline>Warning</Button>
            <Button variant="info" outline>Info</Button>
          </ButtonGrid>
          
          <CodeExample code={outlineButtonCode} />
        </ComponentDisplay>
      </Section>
      
      <Section>
        <h2>Button Sizes</h2>
        <p>Buttons come in three sizes: small, default, and large.</p>
        
        <ComponentDisplay>
          <ButtonRow>
            <Button size="small">Small</Button>
            <Button>Default</Button>
            <Button size="large">Large</Button>
          </ButtonRow>
          
          <CodeExample code={sizeButtonCode} />
        </ComponentDisplay>
      </Section>
      
      <Section>
        <h2>Buttons with Icons</h2>
        <p>Add icons to buttons to enhance visual meaning.</p>
        
        <ComponentDisplay>
          <ButtonRow>
            <Button><FaHeart /> With Icon</Button>
            <Button variant="success"><FaSave /> Save</Button>
            <Button variant="primary" size="small"><FaPlus /> Add New</Button>
          </ButtonRow>
          
          <h3>Icon Only Buttons</h3>
          <ButtonRow>
            <Button iconOnly rounded><FaHeart /></Button>
            <Button variant="success" iconOnly rounded><FaSave /></Button>
            <Button variant="danger" iconOnly rounded><FaTrash /></Button>
          </ButtonRow>
          
          <CodeExample code={iconButtonCode} />
        </ComponentDisplay>
      </Section>
      
      <Section>
        <h2>Full Width Buttons</h2>
        <p>Buttons can take up the full width of their container.</p>
        
        <ComponentDisplay>
          <div style={{ maxWidth: '500px' }}>
            <Button fullWidth>Full Width Button</Button>
            <div style={{ height: '10px' }}></div>
            <Button variant="primary" fullWidth>Primary Full Width</Button>
          </div>
          
          <CodeExample code={fullWidthButtonCode} />
        </ComponentDisplay>
      </Section>
    </div>
  );
};

export default ButtonsPage;
