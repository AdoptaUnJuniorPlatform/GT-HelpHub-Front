import  React from  'react';
import Layout from './Layout';
import Categories from './Categories';
import { RegistrationFormData } from '../types/RegistrationFormData';

interface UserRegistrationStep5Props{
  onBackClick: () => void;
  onNextClick: () => void;
  steps: string[];
  currentStep: number;
  registrationData: RegistrationFormData;
  updateRegistrationData: (data: Partial<RegistrationFormData>) => void;
}
    
const UserRegistrationStep5: React.FC<UserRegistrationStep5Props> = ({ 
  onBackClick,
  onNextClick,
  steps,
  currentStep,
  registrationData,
  updateRegistrationData,
}) => {

  // Función para manejar la selección de categorías
  const handleCategorySelect = (selectedCategories: string[]) => {
    // Actualizar `interestedSkills` dentro de `profileData`
    updateRegistrationData({
      profileData: {
        ...registrationData.profileData,
        interestedSkills: selectedCategories,
      },
    });
  };
    
  return(
    <Layout
      title="Último paso. Intercambiando habilidades"
      description="Estamos creando una comunidad en la que los demás usuarios necesitan conocer tus necesidades, de esa manera podemos construir juntos esta hermosa cadena de favores."
      stepTitle="Paso 5"
      stepDescription="¿Qué te gustaría prender?"
      onBackClick={onBackClick}
      onNextClick={onNextClick}
      steps={steps}
      currentStep={currentStep}
    >

      {/*Contendio específico del Paso 5*/}
      {/* Título "¿Qué te gustaría aprender?" */}
      <div className="relative w-[450px] h-14 left-[-40px] top-[80px] text-[#434242] text-m font-normal font-['Roboto']">Nos gustaría saber qué te gustaría aprender, para que los demás usuarios puedan ofrecerte su ayuda.</div>
      
      {/* Subtítulo "Seleccionar categorías" con altura ajustada */}
      <div className="relative w-[303px] h-12 left-[-40px] top-[115px] text-2xl text-[#434242] font-normal font-['Roboto'] leading-tight tracking-tight">
        Seleccionar categorías
      </div>

      {/* Contenedor de categorías */}
      <div className="relative left-[-40px] top-[120px]">
        <Categories
          selectedCategories={registrationData.profileData?.interestedSkills || []}
          onSelectCategories={handleCategorySelect}
        />
      </div>


    </Layout>
  )};

export default UserRegistrationStep5;