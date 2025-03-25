import { useState } from 'react';
import styled from 'styled-components';
import FormInput from '../components/FormInput';
import Button from '../components/Button';
import CodeExample from '../components/CodeExample';
import { Section, ComponentDisplay } from '../styles/LayoutStyles';
import useForm from '../hooks/useForm';

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const FormContainer = styled.form`
  max-width: 500px;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const FormRow = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FormActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.lg};
`;

const FormsPage = () => {
  const basicInputCode = `import FormInput from '../components/FormInput';

// Basic usage
<FormInput 
  label="Username" 
  name="username" 
  placeholder="Enter username" 
/>

// With help text
<FormInput 
  label="Email" 
  type="email" 
  name="email" 
  placeholder="Enter email" 
  helpText="We'll never share your email with anyone else." 
/>

// With error
<FormInput 
  label="Password" 
  type="password" 
  name="password" 
  placeholder="Enter password" 
  error="Password must be at least 8 characters" 
/>`;

  const useFormCode = `import useForm from '../hooks/useForm';

// Define validation function
const validate = (values) => {
  const errors = {};
  
  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/\\S+@\\S+\\.\\S+/.test(values.email)) {
    errors.email = 'Email is invalid';
  }
  
  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 8) {
    errors.password = 'Password must be at least 8 characters';
  }
  
  return errors;
};

// Use the hook
const { 
  values, 
  errors, 
  touched, 
  handleChange, 
  handleBlur, 
  handleSubmit 
} = useForm(
  { email: '', password: '' }, 
  validate
);

// Form component
<form onSubmit={handleSubmit(onSubmit)}>
  <FormInput 
    label="Email" 
    type="email" 
    name="email" 
    value={values.email}
    onChange={handleChange}
    onBlur={handleBlur}
    error={touched.email && errors.email}
  />
  
  <FormInput 
    label="Password" 
    type="password" 
    name="password" 
    value={values.password}
    onChange={handleChange}
    onBlur={handleBlur}
    error={touched.password && errors.password}
  />
  
  <Button type="submit">Submit</Button>
</form>`;

  // Simple form example
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSimpleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formData, null, 2));
  };

  // useForm example
  const validate = (values) => {
    const errors = {};
    
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email is invalid';
    }
    
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 8) {
      errors.password = 'Password must be at least 8 characters';
    }
    
    return errors;
  };

  const { 
    values, 
    errors, 
    touched, 
    handleChange: handleFormChange, 
    handleBlur, 
    handleSubmit,
    resetForm
  } = useForm(
    { email: '', password: '' }, 
    validate
  );

  const onSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
    resetForm();
  };

  return (
    <div>
      <h1>Forms</h1>
      <p>Form components and utilities to handle user input with ease.</p>
      
      <Section>
        <h2>Basic Inputs</h2>
        <p>Our form inputs support labels, help text, and error messages.</p>
        
        <ComponentDisplay>
          <FormGrid>
            <div>
              <FormInput 
                label="Username" 
                name="username" 
                placeholder="Enter username" 
              />
              
              <FormInput 
                label="Email" 
                type="email" 
                name="email" 
                placeholder="Enter email" 
                helpText="We'll never share your email with anyone else." 
              />
              
              <FormInput 
                label="Password" 
                type="password" 
                name="password" 
                placeholder="Enter password" 
                error="Password must be at least 8 characters" 
              />
            </div>
          </FormGrid>
          
          <CodeExample code={basicInputCode} />
        </ComponentDisplay>
      </Section>
      
      <Section>
        <h2>Simple Form Example</h2>
        <p>A basic contact form example.</p>
        
        <ComponentDisplay>
          <FormContainer onSubmit={handleSimpleSubmit}>
            <FormInput 
              label="Name" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              fullWidth
            />
            
            <FormInput 
              label="Email" 
              type="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              fullWidth
            />
            
            <FormInput 
              label="Message" 
              as="textarea" 
              name="message" 
              value={formData.message}
              onChange={handleChange}
              rows={4}
              fullWidth
            />
            
            <FormActions>
              <Button type="submit" variant="primary">Submit</Button>
            </FormActions>
          </FormContainer>
        </ComponentDisplay>
      </Section>
      
      <Section>
        <h2>Form with Validation</h2>
        <p>Using our useForm hook for form state management and validation.</p>
        
        <ComponentDisplay>
          <FormContainer onSubmit={handleSubmit(onSubmit)}>
            <FormInput 
              label="Email" 
              type="email" 
              name="email" 
              value={values.email}
              onChange={handleFormChange}
              onBlur={handleBlur}
              error={touched.email && errors.email}
              fullWidth
            />
            
            <FormInput 
              label="Password" 
              type="password" 
              name="password" 
              value={values.password}
              onChange={handleFormChange}
              onBlur={handleBlur}
              error={touched.password && errors.password}
              fullWidth
            />
            
            <FormActions>
              <Button type="button" variant="secondary" outline onClick={resetForm}>
                Reset
              </Button>
              <Button type="submit" variant="primary">
                Submit
              </Button>
            </FormActions>
          </FormContainer>
          
          <CodeExample code={useFormCode} />
        </ComponentDisplay>
      </Section>
    </div>
  );
};

export default FormsPage;
