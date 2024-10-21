import React from  'react';
import Layout from './Layout';

interface UserRegistrationStep3Props{
  onBackClick: () => void;
  onNextClick: () => void;
  steps: string[];
  currentStep: number;  
}
  
  const UserRegistrationStep3: React.FC<UserRegistrationStep3Props> = ({ 
    onBackClick,
    onNextClick,
    steps,
    currentStep,
   }) => {
    return(
      <Layout
      title="Selecciona tus horarios"
      description="Para que podamos ayudarte a coordinar horarios con nuestros otros usuarios, necesitaremos que nos brindes tu disponibilidad horaria y días disponiles."
      stepTitle="Paso 3"
      stepDescription="¿Qué día sestás disponible?"
      onBackClick={onBackClick}
      onNextClick={onNextClick}
      steps={steps}
      currentStep={currentStep}
    >
      </Layout>
    )};

export default UserRegistrationStep3;