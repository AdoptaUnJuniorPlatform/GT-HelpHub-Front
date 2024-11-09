import React, { useState } from 'react';
import UserRegistrationStep1 from './UserRegistrationStep1';
import UserRegistrationStep2 from './UserRegistrationStep2';
import UserRegistrationStep3 from './UserRegistrationStep3';
import UserRegistrationStep4 from './UserRegistrationStep4';
import UserRegistrationStep5 from './UserRegistrationStep5';
import UserRegistrationStep6 from './UserRegistrationStep6';
import { RegistrationFormData } from '../types/RegistrationFormData';

const RegistrationProcess: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1); // Estado para controlar el paso actual

  const [registrationData, setRegistrationData] = useState<RegistrationFormData>({
    profileData: {},
    habilityData: {},
  });

  const steps = ["Sobre ti", "Tu foto", "Disponibilidad", "Mis habilidades", "Qué quiero aprender", "Verificación"];

  const updateRegistrationData = (data: Partial<RegistrationFormData>) => {
    setRegistrationData((prevData) => ({
      ...prevData,
      ...data,
    }));
  };

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
            registrationData={registrationData}
            updateRegistrationData={updateRegistrationData}
          />
        );
      case 2:
        return (
          <UserRegistrationStep2 
            onBackClick={goToPreviousStep}
            onNextClick={goToNextStep}
            steps={steps}
            currentStep={currentStep}
            registrationData={registrationData}
            updateRegistrationData={updateRegistrationData}
          />
        );
      case 3:
        return (
          <UserRegistrationStep3
            onBackClick={goToPreviousStep}
            onNextClick={goToNextStep}
            steps={steps}
            currentStep={currentStep}
            registrationData={registrationData}
            updateRegistrationData={updateRegistrationData}
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
      case 5:
        return (
          <UserRegistrationStep5
            onBackClick={goToPreviousStep}
            onNextClick={goToNextStep}
            steps={steps}
            currentStep={currentStep}
            registrationData={registrationData}
            updateRegistrationData={updateRegistrationData}
          />
        );
      case 6:
        return (
          <UserRegistrationStep6
            onBackClick={goToPreviousStep}
            onNextClick={goToNextStep}
            steps={steps}
            currentStep={currentStep}
            registrationData={registrationData}
          />
        );
      default:
        return <div>Algo salió mal</div>;
    }
  };

  return <div>{renderStep()}</div>;
};

export default RegistrationProcess;
