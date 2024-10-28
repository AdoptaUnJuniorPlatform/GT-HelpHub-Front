import { FC } from 'react';
import LeftColumn from './LeftColumn'; 
import RightColumn from './RightColumn';

interface LayoutProps {
  title: string;        
  description: string;
  stepTitle: string;
  stepDescription: string;
  onBackClick: () => void;
  onNextClick: () => void;
  currentStep: number;
  steps: string[];
  children: React.ReactNode;
  showExtraContent?: boolean; // Nueva prop para controlar si se muestra contenido extra en LeftColumn
  extraContent?: React.ReactNode; // Nueva prop para pasar contenido adicional específico
}

const Layout: FC<LayoutProps> = ({ 
  title, 
  description, 
  stepTitle, 
  stepDescription, 
  onBackClick, 
  onNextClick, 
  currentStep, 
  steps, 
  children, 
  showExtraContent = false, 
  extraContent 
}) => {
  return (
    <div className="flex h-screen">
      {/* Columna Izquierda */}
      <LeftColumn 
        title={title} 
        description={description} 
        showExtraContent={showExtraContent} // Pasamos la prop
        extraContent={extraContent} // Pasamos el contenido adicional
      />           

      {/* Columna Derecha */}          
      <RightColumn
        stepTitle={stepTitle}
        stepDescription={stepDescription}
        onBackClick={onBackClick}
        onNextClick={onNextClick}
        currentStep={currentStep}
        steps={steps}
      >
        {children}
      </RightColumn>
    </div>
  );
};

export default Layout;
