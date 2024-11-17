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
  const convertMode = (mode: string) => {
    switch (mode) {
      case "ONLINE":
        return "Online";
      case "PRESENCIAL":
        return "Presencial";
      case "TODOS":
        return "TODOS";
      default:
        return mode;
    }
  };

  const SelectedComponent: ElementType | null = componentMap?.[selectedBorderButton] || null;
  
  return { selectedBorderButton, handleBorderButtonClick, SelectedComponent, convertMode };
}

export default useBorderButton