import { useEffect, useState } from 'react';

function useCode() {
  const [code, setCode] = useState<string>('');

  const generateCode = () => {
    const newCode = Math.floor(100000 + Math.random() * 900000).toString();
    setCode(newCode);
  };
  
  useEffect(() => {
    generateCode(); 
  }, []);

  return { code, generateCode };
}

export default useCode