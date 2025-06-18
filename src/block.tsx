import React from 'react';

interface BlockProps {
  title?: string;
  description?: string;
}

// This should definitely cause a compilation error
const Block: React.FC<BlockProps> = ({ title, description }) => {
  
  // Severe syntax errors that should break compilation:
  
  // 1. Completely malformed JavaScript
  const ??? = invalid syntax here!!!
  
  // 2. Unclosed string and broken JSX
  return (
    <div>
      <h1>{"Unclosed string
      <p>This should break everything</p>
    </div>
  );
  
  // 3. Random characters that make no sense
  @@##$$%%^^&&**(())
  
}; // Missing closing elements and syntax

export default Block;