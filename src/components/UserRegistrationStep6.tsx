import  React, { useState} from  'react';
import Layout from './Layout';
import SuccessModal from './SuccesModal';
import { RegistrationFormData } from '../types/RegistrationFormData';
import { createProfile, createHability } from '../services/apiClient';

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
  
  const correctVerificationCode = localStorage.getItem('verificationCode');


  const handleResendCode = () => {
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false); 
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputCode(e.target.value);
  };

  const handleVerificationSuccess = async () => {
    // Verificar si el código ingresado coincide con el código correcto
    if (inputCode === correctVerificationCode) {
      try {
        // Enviar la solicitud POST con los datos del usuario
        await createProfile(registrationData.profileData);
        await createHability(registrationData.habilityData);

        // Mostrar el modal de éxito
        setIsModalVisible(true);
      } catch (error) {
        console.error('Error al enviar los datos:', error);
      }
    } else {
      alert('Código de verificación incorrecto.');
    }
  };


  const closeModal = () => {
    setIsModalVisible(false);
    onNextClick(); // Lógica para redirigir al home
  };


  const UserEmail = () => (
    <div className="text-[#434242] text-2xl font-normal font-['Roboto']">
      Introduce el código que hemos enviado a <span className="text-[#434242]">usuario@gmail.com</span>
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
            value={verificationCode}
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