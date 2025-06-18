import React from 'react';

interface BlockProps {
  title?: string;
  description?: string;
}

// Intentional compilation errors for testing error overlay:

// 1. Using undeclared variable
const undeclaredVariable = someUndefinedVariable;

// 2. Wrong type assignment
const wrongType: string = 123;

// 3. Missing return type and syntax error
const Block: React.FC<BlockProps> = ({ title, description }) => {
  
  // 4. Using non-existent property
  const nonExistent = React.nonExistentProperty;
  
  // 5. Syntax error - missing closing brace
  if (true) {
    console.log("Missing closing brace"
  
  // 6. Wrong JSX syntax
  return (
    <div>
      <h1>{title || "Test Block with Errors"}</h1>
      <p>{description || "This block has intentional compilation errors"}</p>
      
      {/* 7. Invalid JSX - self-closing div with content */}
      <div />Content should not be here</div>
      
      {/* 8. Using undefined variable in JSX */}
      <p>{undefinedJSXVariable}</p>
    </div>
  );
};

// 9. Export with wrong syntax
export default Block
// Missing semicolon and other issues above should trigger multiple errors