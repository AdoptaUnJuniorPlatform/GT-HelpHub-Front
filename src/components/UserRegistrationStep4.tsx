import React, { useState } from 'react';
import Layout from './Layout';
import TextInputWithCounter from './TextInputWithCounter';
import LevelRadioButtons from './LevelRadioButtons';
import ModalityRadioButtons from './ModalityRadioButtons';
import TitleTipsModal from './TitleTipsModal';
import TitleExampleModal from './TitleExampleModal';
import DropdownCategories from './DropdownCategories';
import SaveButton from './SaveButton';
import SkillsDisplay from './SkillsDisplay';
import { HabilityData } from '../types/RegistrationFormData';

interface UserRegistrationStep4Props {
  onBackClick: () => void;
  onNextClick: () => void;
  steps: string[];
  currentStep: number;
  habilityData: HabilityData;
  updateHabilityData: (data: HabilityData) => void;
}

const UserRegistrationStep4: React.FC<UserRegistrationStep4Props> = ({
  onBackClick,
  onNextClick,
  steps,
  currentStep,
  habilityData,
  updateHabilityData,
}) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isTitleTipsModalOpen, setIsTitleTipsModalOpen] = useState(false);
  const [isTitleExampleModalOpen, setIsTitleExampleModalOpen] = useState(false);

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    updateHabilityData({
      ...habilityData,
      description: value,
    });
  };
  
  const handleInputChange = (name: keyof HabilityData, value: string) => {
    updateHabilityData({
      ...habilityData,
      [name]: value,
    });
  };

  const toggleTitleTipsModal = () => {
    setIsTitleTipsModalOpen(!isTitleTipsModalOpen);
  };

  const toggleTitleExampleModal = () => {
    setIsTitleExampleModalOpen(!isTitleExampleModalOpen);
  };

  const handleSubmit = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsSubmitted(true); 
  };
  
  const categoryOptions = [
    'Animales', 'Ayuda', 'Consultoría', 'Diseño', 
    'Idiomas', 'Informática', 'Reparaciones', 
    'Salud', 'Tutorías', 'Otros']; 

  const exampleSkillContent = (
    <div className="w-full bg-gray-50 p-8">
      <div className="text-[#434242] text-[24px] font-normal font-['Roboto'] tracking-tight mb-4">
        Ejemplo de habilidad cargada
      </div>
      <div className="w-[332px] h-[360px] bg-[#fbfbff] rounded-md shadow flex flex-col items-start p-5">
        <div className="text-2xl font-normal text-[#434242] mb-2">Pintar Óleo</div>
        <div className="text-sm text-[#434242] mb-4">14011 Córdoba, Córdoba provincia</div>
        <div className="border-t border-[#aeaeae]/5 py-4">
          <div className="text-left text-[#434242] text-[13px] font-normal mb-2">Nivel</div>
          <div className="flex space-x-2">
            <div className="px-3 py-2 bg-[#aeaeae]/10 rounded-full text-[#696868] text-xs">Básico</div>
            <div className="px-3 py-2 bg-[#496ceb] rounded-full text-[#fbfbff] text-xs">Medio</div>
            <div className="px-3 py-2 bg-[#aeaeae]/10 rounded-full text-[#696868] text-xs">Experto</div>
          </div>
        </div>
        <div className="flex items-center mt-4">
          <span className="text-sm text-[#434242] mr-4">Disponibilidad</span>
          <div className="border rounded-lg px-4 py-1.5 text-sm font-medium text-[#434242]">9:00hs a 14:00hs</div>
        </div>
        <div className="text-base text-[#696868] mt-4">
          Enseñar a pintar óleo desde cero, ya que me encanta enseñar. Pinto en óleo hace 10 años, por lo tanto tengo gran experiencia.
        </div>
      </div>
    </div>
  );

  return (
    <Layout
      title={isSubmitted ? "¡Felicidades has cargado tu primera habilidad!" : "¡Ya casi terminamos!"}
      description={isSubmitted ? "Puedes seguir cargando más si así lo deseas." : "Carga tu primera habilidad."}
      stepTitle="Paso 4"
      stepDescription="Nueva habilidad"
      onBackClick={onBackClick}
      onNextClick={onNextClick}
      steps={steps}
      currentStep={currentStep}
      showExtraContent={true}
      extraContent={exampleSkillContent}
      isSubmitted={isSubmitted}
    >
      {/* Contenedor principal */}
      <div className="ml-[-60px] w-[730px] h-[1000px] pl-4 pr-4 bg-[#f6f5f4]"> 
        <div className="mt-20 mb-4 text-[#434242] text-lg font-normal">¡Puedes añadir múltiples habilidades y siempre podrás cambiarlas o editarlas más tarde!</div>

        <div className="text-[#434242] text-2xl font-normal">Escribe el título de tu publicación</div>

        <TextInputWithCounter 
          className="mb-6"
          value={habilityData.title}
          onChange={(value) => handleInputChange("title", value)}
        />

        {/* Enlace para abrir el modal de ejemplos de título */}
        <div className="text-[#434242] text-base font-normal underline cursor-pointer mb-8" onClick={toggleTitleExampleModal}>
          Ejemplos para crear tu título
        </div>
        <TitleExampleModal isOpen={isTitleExampleModalOpen} onClose={toggleTitleExampleModal} />

        <div className="mb-4 text-[#434242] text-2xl font-normal">Nivel</div>
        <LevelRadioButtons 
          className="mb-8"
          value={habilityData.level}
          onChange={(value) => handleInputChange("level", value)} 
        />

        <div className="mb-4 text-[#434242] text-2xl font-normal">Modalidad</div>
        <ModalityRadioButtons 
          className="mb-8" 
          value={habilityData.mode}
          onChange={(value) => handleInputChange("mode", value)}
        />

        <div className="mb-4 text-[#434242] text-2xl font-normal">¿Qué ofreces?</div>

        <div className="relative w-full max-w-lg mt-6 p-4 border border-gray-300 rounded-md">
    
          {/* Etiqueta de "Descripción" */}
          <div className="absolute -top-3 left-6 bg-[#f6f5f4] px-1">
            <div className="text-[#696868] text-s font-normal leading-normal tracking-wide">Descripción</div>
          </div>

          {/* Textarea sin borde (el borde lo controla el contenedor) */}
          <textarea
            className="w-full h-[120px] p-2 text-[#696868] text-base font-normal tracking-tight resize-none bg-transparent outline-none"
            placeholder="Ej: Clases de pintura al óleo desde cero, Nivel inicial y avanzado"
            maxLength={255}
            style={{ border: 'none', outline: 'none' }}
            onChange={handleTextareaChange}
            value={habilityData.description}
          />

          {/* Contador de caracteres */}
          <div className="text-right text-[#b7b7b7] text-sm mt-1">{habilityData.description.length}/255</div>
        </div>
    
        {/*Modal para consejos de texto*/}
        <div
          className="w-[336px] text-[#434242] text-base font-normal font-['Roboto'] underline tracking-tight mt-4 cursor-pointer"
          onClick={toggleTitleTipsModal}
        >
          Consejos para generar un texto llamativo
        </div>
        <TitleTipsModal isOpen={isTitleTipsModalOpen} onClose={toggleTitleTipsModal} />

        {/* Nuevo Título para Categoría */}
        <div className="w-[503px] h-[34px] text-[#434242] text-2xl font-normal font-['Roboto'] mt-8">
          ¿Qué categoría se ajusta mejor a tu habilidad?
        </div>
        <DropdownCategories 
          options={categoryOptions} 
          value={habilityData.category}
          onChange={(value) => handleInputChange("category", value)}
        />

        {/* Botón Guardar con función onNextClick para avanzar */}
        <SaveButton onClick={handleSubmit} />
      </div>

      {/*Tarjeta final*/}
      <SkillsDisplay habilityData={habilityData} isSubmitted={isSubmitted}/>

    </Layout>
  );
};

export default UserRegistrationStep4;
