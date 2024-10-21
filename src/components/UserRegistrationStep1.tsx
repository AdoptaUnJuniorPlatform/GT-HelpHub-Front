import React, { useState } from 'react';
import Layout from './Layout'; 

interface UserRegistrationStep1Props {
  onBackClick: () => void;
  onNextClick: () => void;
  steps: string[];
  currentStep: number;
}

const UserRegistrationStep1: React.FC<UserRegistrationStep1Props> = ({
  onBackClick,
  onNextClick,
  steps,
  currentStep,
}) => {

  const [text, setText] = useState<string>('');
  const [postalCode, setPostalCode] = useState<string>('');
  const [postalCodeError, setPostalCodeError] = useState<boolean>(false);
  
  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handlePostalCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, ''); // Filtrar solo números
    setPostalCode(value); // Actualizamos el valor con solo números
    // Validar si el código postal tiene exactamente 5 dígitos
    if (value.length === 5) {
      setPostalCodeError(false); // No hay error si tiene 5 dígitos
    } else {
      setPostalCodeError(true); // Error si tiene menos o más de 5 dígitos
    }
  };

  return (
    <Layout
      title="Cuéntanos un poco más sobre vos"
      description="En HelpHub nos preocupamos por conocerte un poco más, para brindarte la mejor interacción con otras personas dentro de la comunidad."
      stepTitle="Paso 1"
      stepDescription="Breve descripción del usuario"
      onBackClick={onBackClick}
      onNextClick={onNextClick}
      steps={steps}
      currentStep={currentStep}
    >
      
    {/* Contenido específico del paso 1 */}
    <div className="relative w-[571px] h-[140px] top-[-30px] left-[-160px] mt-[132px] mx-auto bg-gray-100 rounded-md border border-[#b7b7b7]">
      
      {/* Texto "Sobre mí" con el rectángulo pequeño */}
      <div className="absolute top-[-10px] left-[20px] bg-gray-100 px-2">
        <div className="text-[#696868] text-[15px] font-normal leading-normal tracking-wide">
          Sobre mí
        </div>
      </div>

      {/* Textarea en el rectángulo grande */}
      <textarea
        className="w-[526px] h-[150px] mt-[10px] mx-auto p-4 border border-gray-300 rounded-md text-[#696868] text-base font-normal tracking-tight resize-none overflow-hidden bg-transparent"
        placeholder="Por Ej: Soy una joven estudiante de enfermería, tengo 22 años vivo en Madrid con unas amigas. Soy una apasionada por la música, y que desea aprender a tocar el piano."
        maxLength={255}
        style={{ border: 'none', outline: 'none' }}
        onChange={handleTextareaChange}
      />

      {/* Contador de caracteres */}
      <div className="absolute right-[15px] bottom-[10px] text-[#b7b7b7] text-base font-normal">
      {text.length}/255
      </div>
    </div>

    {/* Código postal */}
    <div className="relative w-[571px] top-[-50px] mt-8 left-[-160px] mx-auto">
      <label className="text-[#434242] text-2xl font-normal font-['Roboto']">Ubicación</label>
      <input 
        className={`w-full h-[40px] mt-2 p-4 border rounded-md text-[#696868] text-base font-normal tracking-tight focus:outline-none ${
          postalCodeError ? 'border-red-500' : 'border-gray-300'
        }`}
        type="text"
        inputMode="numeric"
        pattern="[0-9]*"
        placeholder="Código postal (CP)"
        value={postalCode}
        onChange={handlePostalCodeChange}
        maxLength={5}
      />

      {/* Texto debajo del input */}
      {postalCodeError ? (
          <p className="text-red-500 text-base font-normal mt-2">
            Revisa el código postal, debe tener 5 dígitos.
          </p>
        ) : (
          <p className="text-[#b7b7b7] text-base font-normal mt-2">
            Escribe tu código postal (5 dígitos) de tu lugar de residencia.
          </p>
        )}
    </div>
    </Layout>
  );
};

export default UserRegistrationStep1;
