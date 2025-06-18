import React from 'react';

interface BlockProps {
  title?: string;
  description?: string;
}

// This is definitely invalid TypeScript/JavaScript syntax
const Block: React.FC<BlockProps> = ({ title, description }) => {
  
  // Invalid syntax that should break the compiler
  return (
    <div>
      <h1>{title || "Error Test Block"}</h1>
      <p>{description || "Testing error overlay"}</p>
    </div>
  );
};

// Missing import and invalid syntax
const invalidStatement = 

export default Block;