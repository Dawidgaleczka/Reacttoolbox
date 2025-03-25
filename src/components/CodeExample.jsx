import { useState } from 'react';
import styled from 'styled-components';
import { FaCopy, FaCheck } from 'react-icons/fa';
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-json';

const CodeContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing.md};
  background-color: #272822;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  overflow: hidden;
  position: relative;
`;

const CodeHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1e1f1c;
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.md};
  border-bottom: 1px solid #3e3d32;
`;

const CodeTitle = styled.div`
  color: #f8f8f2;
  font-family: monospace;
  font-size: ${({ theme }) => theme.fontSizes.small};
`;

const CopyButton = styled.button`
  background: none;
  border: none;
  color: #f8f8f2;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.small};
  
  svg {
    margin-right: ${({ theme }) => theme.spacing.xs};
  }
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Pre = styled.pre`
  margin: 0;
  padding: ${({ theme }) => theme.spacing.md};
  overflow-x: auto;
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
  
  code {
    font-family: 'Fira Code', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
  }
`;

const CodeExample = ({ code, language = 'jsx', title = 'Example' }) => {
  const [copied, setCopied] = useState(false);
  
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  
  // Highlight code when component mounts
  useState(() => {
    Prism.highlightAll();
  }, [code]);
  
  return (
    <CodeContainer>
      <CodeHeader>
        <CodeTitle>{title}</CodeTitle>
        <CopyButton onClick={handleCopy}>
          {copied ? <FaCheck /> : <FaCopy />}
          {copied ? 'Copied!' : 'Copy'}
        </CopyButton>
      </CodeHeader>
      <Pre>
        <code className={`language-${language}`}>{code}</code>
      </Pre>
    </CodeContainer>
  );
};

export default CodeExample;

