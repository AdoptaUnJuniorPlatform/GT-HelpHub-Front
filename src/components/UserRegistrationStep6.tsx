import  React, { useState} from  'react';
import Layout from './Layout';

interface UserRegistrationStep6Props{
  onBackClick: () => void;
  onNextClick: () => void;
  steps: string[];
  currentStep: number;  
}
    
const UserRegistrationStep6: React.FC<UserRegistrationStep6Props> = ({ 
  onBackClick,
  onNextClick,
  steps,
  currentStep, }) => {

  const [verificationCode, setVerificationCode] = useState('');
  const [isSending, setIsSending] = useState(false);

  const handleResendCode = () => {
    setIsSending(true);
    // Simulamos una espera de envío; esto se reemplazará por la llamada real al backend.
    setTimeout(() => {
      setIsSending(false); // Volver a habilitar el botón una vez "enviado"
      // Aquí va la lógica de conexión con el backend para reenviar el código
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVerificationCode(e.target.value);
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
      onNextClick={onNextClick}
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
  )};

export default UserRegistrationStep6;