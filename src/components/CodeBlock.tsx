
import React from 'react';

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
  className?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ 
  code, 
  language = "javascript", 
  title,
  className = ""
}) => {
  const formatCode = (code: string) => {
    // Very basic highlighting
    if (language === 'json') {
      return code
        .replace(/"([^"]+)":/g, '<span class="text-terminal-purple">"$1"</span>:')
        .replace(/: "([^"]+)"/g, ': <span class="text-terminal-green">"$1"</span>')
        .replace(/: (true|false|null)/g, ': <span class="text-terminal-blue">$1</span>')
        .replace(/: (\d+)/g, ': <span class="text-terminal-cyan">$1</span>');
    }
    
    // For markdown
    if (language === 'markdown') {
      return code
        .replace(/^(#{1,6} .+)$/gm, '<span class="text-terminal-blue">$1</span>')
        .replace(/\*\*(.+?)\*\*/g, '<span class="font-bold">$1</span>')
        .replace(/\*(.+?)\*/g, '<span class="italic">$1</span>')
        .replace(/`(.+?)`/g, '<span class="bg-black/30 px-1 rounded">$1</span>');
    }
    
    // Generic code
    return code;
  };

  return (
    <div className={`terminal-container ${className}`}>
      {title && (
        <div className="terminal-header">
          <div className="terminal-dot bg-red-500"></div>
          <div className="terminal-dot bg-yellow-500"></div>
          <div className="terminal-dot bg-green-500"></div>
          <span className="ml-2 text-sm text-gray-400">{title}</span>
        </div>
      )}
      <pre className="terminal-content">
        <code dangerouslySetInnerHTML={{ __html: formatCode(code) }}></code>
      </pre>
    </div>
  );
};

export default CodeBlock;
