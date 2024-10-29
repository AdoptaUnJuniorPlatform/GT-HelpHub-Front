import { ElementType, useState } from 'react';
import { ComponentMap } from '../types/types';

function useBorderButton(
  initialValue: string, 
  options: string[], 
  componentMap?: ComponentMap
) {
  const [selectedBorderButton, setSelectedBorderButton] = useState(initialValue);

  const handleBorderButtonClick = (label: string) => {
    if (options.includes(label)) {
      setSelectedBorderButton(label);
    }
  };

  const SelectedComponent: ElementType | null = componentMap?.[selectedBorderButton] || null;
  
  return { selectedBorderButton, handleBorderButtonClick, SelectedComponent };
}

export default useBorderButton