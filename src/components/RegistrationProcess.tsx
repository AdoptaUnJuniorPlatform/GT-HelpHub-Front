import React, { useState } from 'react';
import UserRegistrationStep1 from './UserRegistrationStep1';
import UserRegistrationStep2 from './UserRegistrationStep2';
import UserRegistrationStep3 from './UserRegistrationStep3';
import UserRegistrationStep4 from './UserRegistrationStep4';

const RegistrationProcess: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1); // Estado para controlar el paso actual

  const steps = ["Sobre ti", "Tu foto", "Disponibilidad", "Mis habilidades", "Qué quiero aprender", "Verificación"];

  // Función para ir al siguiente paso
  const goToNextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  // Función para ir al paso anterior
  const goToPreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Renderizamos el paso actual
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <UserRegistrationStep1
            onBackClick={goToPreviousStep}
            onNextClick={goToNextStep}
            steps={steps}
            currentStep={currentStep}
          />
        );
      case 2:
        return (
          <UserRegistrationStep2 
            onBackClick={goToPreviousStep}
            onNextClick={goToNextStep}
            steps={steps}
            currentStep={currentStep}
          />
        );
        case 3:
        return (
          <UserRegistrationStep3
            onBackClick={goToPreviousStep}
            onNextClick={goToNextStep}
            steps={steps}
            currentStep={currentStep}
          />
        );
        case 4:
        return (
          <UserRegistrationStep4
            onBackClick={goToPreviousStep}
            onNextClick={goToNextStep}
            steps={steps}
            currentStep={currentStep}
          />
        );
      default:
        return <div>Algo salió mal</div>;
    }
  };

  return <div>{renderStep()}</div>;
};

export default RegistrationProcess;
