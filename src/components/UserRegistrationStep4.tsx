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
      title="¡Ya casi terminamos!"
      description="Carga tu primera habilidad."
      stepTitle="Paso 4"
      stepDescription="Nueva habilidad"
      onBackClick={onBackClick}
      onNextClick={onNextClick}
      steps={steps}
      currentStep={currentStep}
    >
      </Layout>
    )};

export default UserRegistrationStep4;