import React from  'react';
import Layout from './Layout';

interface UserRegistrationStep4Props{
  onBackClick: () => void;
  onNextClick: () => void;
  steps: string[];
  currentStep: number;  
}
  
  const UserRegistrationStep4: React.FC<UserRegistrationStep4Props> = ({ 
    onBackClick,
    onNextClick,
    steps,
    currentStep,
   }) => {
    return(
      <Layout
      title="Selecciona tus horarios"
      description="Para que podamos ayudarte a coordinar horarios con nuestros otros usuarios, necesitaremos que nos brindes tu disponibilidad horaria y días disponiles."
      stepTitle="Paso 4"
      stepDescription="¿Qué día sestás disponible?"
      onBackClick={onBackClick}
      onNextClick={onNextClick}
      steps={steps}
      currentStep={currentStep}
    >
      </Layout>
    )};

export default UserRegistrationStep4;