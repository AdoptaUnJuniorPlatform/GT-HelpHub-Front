import { useState } from 'react';

function useBorderButton(initialValue: string, options: string[]) {
  const [selectedBorderButton, setSelectedBorderButton] = useState(initialValue);

  const handleBorderButtonClick = (label: string) => {
    if (options.includes(label)) {
      setSelectedBorderButton(label);
    }
  };
  
  return { selectedBorderButton, handleBorderButtonClick };
}

export default useBorderButton