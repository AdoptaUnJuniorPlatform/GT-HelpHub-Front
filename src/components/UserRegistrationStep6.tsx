import  React, { useState } from  'react';
import Layout from './Layout';
import SuccessModal from './SuccesModal';
import { RegistrationFormData } from '../types/RegistrationFormData';
import { createProfile, createHability } from '../services/apiClient';
import { useAuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { loginUserMail } from '../services/AuthService';

interface UserRegistrationStep6Props{
  onBackClick: () => void;
  onNextClick: () => void;
  steps: string[];
  currentStep: number;
  registrationData: RegistrationFormData;
}
    
const UserRegistrationStep6: React.FC<UserRegistrationStep6Props> = ({ 
  onBackClick,
  onNextClick,
  steps,
  currentStep,
  registrationData,
}) => {
  const [inputCode, setInputCode] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  
  const { registerData } = useAuthContext(); 
  const navigate = useNavigate();

  const handleResendCode = async () => {
    if (registerData?.email) {
      setIsSending(true);
      try {
        const storedCode = localStorage.getItem('verificationCode');
        await loginUserMail({ email: registerData.email, twoFa: storedCode || '' });
        console.log('Código de verificación reenviado con éxito');
      } catch (error) {
        console.error('Error al reenviar el código de verificación:', error);
      } finally {
        setIsSending(false);
      }
    } else {
      console.error('No se encontró un email en registerData');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputCode(e.target.value);
  };

  const verifyCode = (): boolean => {
    return inputCode === localStorage.getItem('verificationCode');
  };

  // Función para enviar el perfil al backend
  const handleVerificationSuccess = async () => {
    if (!verifyCode()) {
      alert('Código de verificación incorrecto.');
      return;
    }
    try {
      const profileResponse = await createProfile(registrationData.profileData); 
  
      const habilityResponse = await createHability(registrationData.habilityData); 
  
      // Mostrar el modal solo si ambas peticiones son exitosas
      if (profileResponse.status === 201 && habilityResponse.status === 201) {
        setIsModalVisible(true);
      } else {
        console.error('Hubo un error al crear perfil o habilidad');
        alert('Error al enviar los datos. Por favor, intenta de nuevo.');
      }

      // Mostrar el modal solo si ambas peticiones son exitosas
      if (profileResponse.status === 201 && habilityResponse.status === 201) {
        setIsModalVisible(true);
      } else {
        console.error('Hubo un error al crear perfil o habilidad');
        alert('Error al enviar los datos. Por favor, intenta de nuevo.');
      }
    } catch (error) {
      console.error('Error en el proceso de envío:', error);
      alert('Hubo un error al enviar los datos. Por favor, intenta de nuevo.');
    }
  };

  const closeModal = () => {
    setIsModalVisible(false);
    onNextClick(); 
    navigate('/profile');
  };

  const UserEmail = () => (
    <div className="text-[#434242] text-2xl font-normal font-['Roboto']">
      Introduce el código que hemos enviado a <span className="text-[#434242]">{registerData?.email}</span>
    </div>
  ); 
  
  const TextExtra = () => (
    <div className="w-[350px] h-[109px] text-[#d2298e] text-m font-normal font-['Roboto'] mt-0">
      ¡No compartas este código de verificación con nadie, este lo utilizarás para autentificar tu cuenta!
    </div>
  )

  return(
    <>
      <Layout
        title="Último paso"
        description={
          <>
            <div className="w-[350px] h-[100px] text-[#434242] text-2xl font-normal font-['Roboto'] mb-3">
              Verifica tu cuenta con tu mail
            </div>
            <TextExtra />
          </>
        }

        stepTitle="Paso 6"
        stepDescription={<UserEmail />}
        onBackClick={onBackClick}
        onNextClick={handleVerificationSuccess}
        steps={steps}
        currentStep={currentStep}
      >
        {/* Mensaje de retraso de correo*/}
        <div className="relative w-[567px] h-10 top-[90px] left-[-40px] text-[#434242] text-l font-normal font-['Roboto']">
          Puede que tarde un minuto en recibir el correo.
        </div>

        {/* Input para el código de verificación */}
        <div className="relative top-[100px] left-[-40px]">
          <input
            type="text"
            placeholder="Código email"
            value={inputCode}
            onChange={handleInputChange}
            className="w-[590px] h-[55px] bg-white rounded-[3px] border border-[#b7b7b7] px-3 text-base"
          />
        </div>

        {/* Texto de ayuda debajo del input */}
        <div className="relative w-[394px] text-[#696868] text-[16px] top-[100px] left-[-40px] font-normal font-['Roboto'] leading-normal tracking-wide mt-2">
          Escribe aquí tu código (6 dígitos) recibido en tu mail
        </div>

        {/* Enlace y botón en línea */}
        <div className="relative top-[130px] left-[-40px] flex space-x-2 items-center">
          <a href="#" className="w-[270px] text-[#496ceb] text-m font-medium font-['Roboto']">
            ¿Aún no recibes el código?
          </a>
          <button
            onClick={handleResendCode}
            disabled={isSending}
            className={`h-10 rounded-[5px] border border-[#b7b7b7] flex justify-center items-center px-[17px] py-2.5 transition-colors duration-200 ${
              isSending
                ? 'bg-[#496ceb] cursor-not-allowed'
                : 'hover:bg-[#496ceb] cursor-pointer'
            }`}
          >
            <div className="text-center text-[#b7b7b7] text-sm font-medium font-['Roboto'] leading-tight tracking-tight">
              {isSending ? 'Enviando...' : 'Reenviar código'}
            </div>
          </button>

        </div>

      </Layout>

      {/* Modal de éxito */}
      {isModalVisible && (
        <SuccessModal
          message="¡Felicitaciones!"
          onClose={closeModal}
        />
      )}

    </>
  )};

export default UserRegistrationStep6;