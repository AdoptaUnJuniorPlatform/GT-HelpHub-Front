import React, { useState } from 'react';
import UserRegistrationStep1 from './UserRegistrationStep1';
import UserRegistrationStep2 from './UserRegistrationStep2';
import UserRegistrationStep3 from './UserRegistrationStep3';
import UserRegistrationStep4 from './UserRegistrationStep4';
import UserRegistrationStep5 from './UserRegistrationStep5';
import { ProfileData, HabilityData } from '../types/AuthServiceTypes'; 
import { useAuthContext } from '../context/AuthContext'; 

const RegistrationProcess: React.FC = () => {
  const { profileData, setProfileData, habilityData, setHabilityData } = useAuthContext(); // Usa el contexto para acceder a profileData y habilityData
  const [currentStep, setCurrentStep] = useState(1);

  const defaultProfileData: ProfileData = {
    description: '',
    interestedSkills: [],
    location: '',
    profilePicture: '',
    preferredTimeRange: '',
    selectedDays: [],
  };

  const defaultHabilityData: HabilityData = {
    title: '',
    level: '',
    mode: '',
    description: '',
    category: '',
  };

  const profileDataToPass = profileData || defaultProfileData;
  const habilityDataToPass = habilityData || defaultHabilityData;

  const steps = ["Sobre ti", "Tu foto", "Disponibilidad", "Mis habilidades", "Qué quiero aprender", "Verificación"];

  const updateProfileData = (data: ProfileData) => {
    setProfileData(data);
  };
  
  const updateHabilityData = (data: HabilityData) => {
    setHabilityData(data);
  };
  
  const goToNextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const goToPreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <UserRegistrationStep1
            onBackClick={goToPreviousStep}
            onNextClick={goToNextStep}
            steps={steps}
            currentStep={currentStep}
            profileData={profileDataToPass}
            updateProfileData={updateProfileData}
          />
        );
      case 2:
        return (
          <UserRegistrationStep2 
            onBackClick={goToPreviousStep}
            onNextClick={goToNextStep}
            steps={steps}
            currentStep={currentStep}
            profileData={profileDataToPass}
            updateProfileData={updateProfileData}
          />
        );
      case 3:
        return (
          <UserRegistrationStep3
            onBackClick={goToPreviousStep}
            onNextClick={goToNextStep}
            steps={steps}
            currentStep={currentStep}
            profileData={profileDataToPass}
            updateProfileData={updateProfileData}
          />
        );
      case 4:
        return (
          <UserRegistrationStep4
            onBackClick={goToPreviousStep}
            onNextClick={goToNextStep}
            steps={steps}
            currentStep={currentStep}
            habilityData={habilityDataToPass}
            updateHabilityData={updateHabilityData}
          />
        );
      case 5:
        return (
          <UserRegistrationStep5
            onBackClick={goToPreviousStep}
            onNextClick={goToNextStep}
            steps={steps}
            currentStep={currentStep}
            profileData={profileDataToPass}
            updateProfileData={updateProfileData}
            habilityData={habilityDataToPass}
          />
        );
      default:
        return <div>Algo salió mal</div>;
    }
  };

  return <div>{renderStep()}</div>;
};

export default RegistrationProcess;
