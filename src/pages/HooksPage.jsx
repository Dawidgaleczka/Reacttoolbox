import { useState } from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import FormInput from '../components/FormInput';
import CodeExample from '../components/CodeExample';
import { Section, ComponentDisplay } from '../styles/LayoutStyles';
import useLocalStorage from '../hooks/useLocalStorage';

const HookDemo = styled.div`
  background-color: #f8f9fa;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const HookResult = styled.div`
  background-color: #e9ecef;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.md};
  font-family: monospace;
  white-space: pre-wrap;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.md};
`;

const HooksPage = () => {
  const useFormCode = `import { useState } from 'react';

const useForm = (initialValues = {}, validate) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
    
    if (touched[name] && validate) {
      const validationErrors = validate({ ...values, [name]: value });
      setErrors(validationErrors);
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched({
      ...touched,
      [name]: true
    });
    
    if (validate) {
      const validationErrors = validate(values);
      setErrors(validationErrors);
    }
  };

  const handleSubmit = (callback) => (e) => {
    e.preventDefault();
    
    // Mark all fields as touched
    const allTouched = Object.keys(values).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {});
    setTouched(allTouched);
    
    // Validate all fields
    if (validate) {
      const validationErrors = validate(values);
      setErrors(validationErrors);
      
      // If there are no errors, call the callback
      if (Object.keys(validationErrors).length === 0) {
        setIsSubmitting(true);
        callback(values);
        setIsSubmitting(false);
      }
    } else {
      setIsSubmitting(true);
      callback(values);
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
    setIsSubmitting(false);
  };

  return {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm
  };
};

export default useForm;`;

  const useLocalStorageCode = `import { useState, useEffect } from 'react';

const useLocalStorage = (key, initialValue) => {
  // Get from local storage then
  // parse stored json or return initialValue
  const readValue = () => {
    if (typeof window === 'undefined') {
      return initialValue;
    }

    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(\`Error reading localStorage key "\${key}":\`, error);
      return initialValue;
    }
  };

  // State to store our value
  const [storedValue, setStoredValue] = useState(readValue);

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value) => {
    try {
      // Allow value to be a function so we have the same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      
      // Save to state
      setStoredValue(valueToStore);
      
      // Save to local storage
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.warn(\`Error setting localStorage key "\${key}":\`, error);
    }
  };

  useEffect(() => {
    setStoredValue(readValue());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const handleStorageChange = () => {
      setStoredValue(readValue());
    };

    // this only works for other documents, not the current one
    window.addEventListener('storage', handleStorageChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [storedValue, setValue];
};

export default useLocalStorage;`;

  const useLocalStorageUsageCode = `import useLocalStorage from '../hooks/useLocalStorage';

// Usage example
const [name, setName] = useLocalStorage('name', '');

// Update the value
const handleChange = (e) => {
  setName(e.target.value);
};

// Clear the value
const handleClear = () => {
  setName('');
};`;

  // useLocalStorage demo
  const [name, setName] = useLocalStorage('name', '');
  const [count, setCount] = useLocalStorage('count', 0);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleClearName = () => {
    setName('');
  };

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount(prevCount => Math.max(0, prevCount - 1));
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>Custom Hooks</h1>
      <p>A collection of useful custom hooks to enhance your React applications.</p>
      
      <Section>
        <h2>useForm</h2>
        <p>A custom hook for managing form state, validation, and submission.</p>
        
        <ComponentDisplay>
          <p>The useForm hook simplifies form handling by providing:</p>
          <ul>
            <li>Form state management</li>
            <li>Field-level validation</li>
            <li>Touched state tracking</li>
            <li>Form submission handling</li>
          </ul>
          
          <CodeExample code={useFormCode} language="jsx" title="useForm.js" />
        </ComponentDisplay>
      </Section>
      
      <Section>
        <h2>useLocalStorage</h2>
        <p>A hook that syncs state with localStorage for persistence across page reloads.</p>
        
        <ComponentDisplay>
          <p>The useLocalStorage hook provides:</p>
          <ul>
            <li>Persistent state that survives page reloads</li>
            <li>Automatic JSON serialization/deserialization</li>
            <li>Same API as React's useState</li>
            <li>Syncing across browser tabs</li>
          </ul>
          
          <CodeExample code={useLocalStorageCode} language="jsx" title="useLocalStorage.js" />
          
          <h3>Demo</h3>
          <HookDemo>
            <h4>Persistent Name</h4>
            <p>Type something and refresh the page - your input will be preserved!</p>
            
            <FormInput
              label="Your Name"
              value={name}
              onChange={handleNameChange}
              placeholder="Enter your name"
            />
            
            <Button variant="secondary" size="small" onClick={handleClearName}>
              Clear
            </Button>
            
            <HookResult>
              {`localStorage value: ${JSON.stringify(name)}`}
            </HookResult>
            
            <h4 style={{ marginTop: '20px' }}>Persistent Counter</h4>
            <p>The count will persist even after page reload.</p>
            
            <HookResult>
              {`Count: ${count}`}
            </HookResult>
            
            <ButtonGroup>
              <Button variant="primary" size="small" onClick={handleIncrement}>
                Increment
              </Button>
              <Button variant="secondary" size="small" onClick={handleDecrement}>
                Decrement
              </Button>
              <Button variant="danger" size="small" onClick={handleReset}>
                Reset
              </Button>
            </ButtonGroup>
          </HookDemo>
          
          <CodeExample code={useLocalStorageUsageCode} language="jsx" title="Usage Example" />
        </ComponentDisplay>
      </Section>
    </div>
  );
};

export default HooksPage;
