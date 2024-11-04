import  React from  'react';
import Layout from './Layout';
import Categories from './Categories';
import { RegistrationFormData } from '../types/RegistrationFormData';
import { loginUserMail } from '../services/AuthService'; 
import useCode from '../hooks/useCode'; 
import { useAuthContext } from '../context/AuthContext';;

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
  const { registerData } = useAuthContext(); 
  const { twoFaCode } = useCode();


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

  const handleNextClick = async () => {
    try {
      const email = registerData?.email;
      if (email) {
        await loginUserMail({ email, twoFa: twoFaCode }); // Enviar el código de verificación con el correo
        console.log('Código de verificación enviado con éxito');
        // Guarda el código en localStorage para que esté disponible en el Paso 6
        localStorage.setItem('verificationCode', twoFaCode);
      }
      onNextClick(); // Avanza al siguiente paso
    } catch (error) {
      console.error('Error al enviar el código de verificación:', error);
      // Aquí podrías manejar el error, por ejemplo, mostrando un mensaje al usuario
    }
  };
    
  return(
    <Layout
      title="Último paso. Intercambiando habilidades"
      description="Estamos creando una comunidad en la que los demás usuarios necesitan conocer tus necesidades, de esa manera podemos construir juntos esta hermosa cadena de favores."
      stepTitle="Paso 5"
      stepDescription="¿Qué te gustaría prender?"
      onBackClick={onBackClick}
      onNextClick={handleNextClick}
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