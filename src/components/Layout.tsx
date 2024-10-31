import { FC } from 'react';
import LeftColumn from './LeftColumn'; 
import RightColumn from './RightColumn';

interface LayoutProps {
  title: string;        
  description: string | React.ReactNode;
  stepTitle: string;
  stepDescription: string | React.ReactNode;
  onBackClick: () => void;
  onNextClick: () => void;
  currentStep: number;
  steps: string[];
  children: React.ReactNode;
  showExtraContent?: boolean; 
  extraContent?: React.ReactNode; 
  isExtended?: boolean;
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
  extraContent,
}) => {
  
  return (
    <div className={`flex ${currentStep === 4 ? "custom-layout-class-for-step-4" : "h-screen"}`}>
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
