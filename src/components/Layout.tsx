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
  isSubmitted?: boolean;
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
  isSubmitted,
}) => {
  
  return (
    <div className={`flex ${currentStep === 4 
      ? isSubmitted 
        ? "submitted-layout-for-step-4" 
        : "custom-layout-class-for-step-4" 
      : "h-screen"}`}>
      {/* Columna Izquierda */}
      <LeftColumn 
        title={title} 
        description={description} 
        showExtraContent={showExtraContent} // Pasamos la prop
        extraContent={extraContent} // Pasamos el contenido adicional
      />    

      {/* Línea divisoria */}
      {currentStep !== 4 && (
        <div className="border-r border-[#b7b7b7] opacity-30 mx-4"></div>
      )}
      

      {/* Columna Derecha */}          
      <RightColumn
        stepTitle={stepTitle}
        stepDescription={stepDescription}
        onBackClick={onBackClick}
        onNextClick={onNextClick}
        currentStep={currentStep}
        steps={steps}
        isSubmitted={isSubmitted}
      >
        {children}
      </RightColumn>
    </div>
  );
};

export default Layout;
