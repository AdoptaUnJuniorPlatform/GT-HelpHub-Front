import React, { useState} from 'react';
import Layout from './Layout';
import TextInputWithCounter from './TextInputWithCounter';
import NivelRadioButtons from './NivelRadioButtons';
import ModalidadRadioButtons from './ModalidadRadioButtons';

interface UserRegistrationStep4Props {
  onBackClick: () => void;
  onNextClick: () => void;
  steps: string[];
  currentStep: number;
}

const UserRegistrationStep4: React.FC<UserRegistrationStep4Props> = ({
  onBackClick,
  onNextClick,
  steps,
  currentStep,
}) => {
  const exampleSkillContent = (
    <div className="w-full bg-gray-50 p-8">
      {/* Título de ejemplo de habilidad */}
      <div className="text-[#434242] text-[24px] font-normal font-['Roboto'] tracking-tight mb-4 ml-[-21px]">
        Ejemplo de habilidad cargada
      </div>
      <div className="w-[332px] h-[360px] bg-[#fbfbff] rounded-md shadow flex-col justify-start items-start inline-flex ml-[-41px]">
        <div className="self-stretch px-[22px] pt-5 pb-2.5 justify-center items-start gap-2.5 inline-flex">
          <div className="w-[232px] text-[#434242] text-2xl font-normal font-['Roboto'] leading-normal tracking-wide">Pintar Óleo</div>
        </div>
        <div className="self-stretch h-[45px] px-[17px] py-[3px] justify-between items-center inline-flex">
          <div className="grow shrink basis-0 text-[#434242] text-sm font-normal font-['Roboto'] leading-normal">14011 Córdoba, Córdoba provincia</div>
        </div>
        <div className="h-[77px] pl-4 pr-[125px] py-[15px] border-t border-[#aeaeae]/5 flex-col justify-start items-start gap-[5px] flex">
          <div className="text-center text-[#434242] text-[13px] font-normal font-['Roboto'] leading-tight tracking-tight">Nivel</div>
          <div className="justify-start items-start gap-[7px] inline-flex">
            <div className="px-[11px] py-[9px] bg-[#aeaeae]/10 rounded-[30px] border justify-center items-center gap-1 flex">
              <div className="text-center text-[#696868] text-xs font-normal font-['Roboto'] leading-tight tracking-tight">Básico</div>
            </div>
            <div className="px-[11px] py-[9px] bg-[#496ceb] rounded-[30px] border justify-center items-center gap-1 flex">
              <div className="text-center text-[#fbfbff] text-xs font-normal font-['Roboto'] leading-tight tracking-tight">Medio</div>
            </div>
            <div className="px-[11px] py-[9px] bg-[#aeaeae]/10 rounded-[30px] border justify-center items-center gap-1 flex">
              <div className="text-center text-[#696868] text-xs font-normal font-['Roboto'] leading-tight tracking-tight">Experto</div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-[86px] px-[17px] py-[3px] justify-between items-center inline-flex">
          <div className="w-24 text-[#434242] text-sm font-normal font-['Roboto'] leading-normal tracking-wide">Disponibilidad</div>
          <div className="rounded-lg border border-[#696868] justify-center items-center flex">
            <div className="px-4 py-1.5 justify-center items-center gap-2 flex">
              <div className="text-center text-[#434242] text-sm font-medium font-['Roboto'] leading-tight tracking-tight">9:00hs a 14:00hs</div>
            </div>
          </div>
        </div>
        <div className="self-stretch px-[17px] pb-[11px] justify-center items-start gap-2.5 inline-flex">
          <div className="grow shrink basis-0 text-[#696868] text-base font-normal font-['Roboto'] tracking-tight">Enseñar a pintar óleo desde cero, ya que me encanta enseñar.<br/>Pinto en óleo hace 10 años, por lo tanto tengo gran experiencia.</div>
        </div>
      </div>
    </div>
  );

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <Layout
      title="¡Ya casi terminamos!"
      description="Carga tu primera habilidad."
      stepTitle="Paso 4"
      stepDescription="Nueva habilidad"
      onBackClick={onBackClick}
      onNextClick={onNextClick}
      steps={steps}
      currentStep={currentStep}
      showExtraContent={true}
      extraContent={exampleSkillContent}
    >
      {/*Contenido específico para el paso 4*/}
      <div className="relative w-[450px] h-14 left-[-40px] top-[80px] text-[#434242] text-m font-normal font-['Roboto']">En HelpHub, queremos facilitar a los usuarios la coordinación de horarios.</div>

      <div className=" relative w-[503px] h-[34px] left-[-40px] top-[90px] text-[#434242] text-2xl font-normal font-['Roboto']">Escribe el titulo de tu publicación</div>

      {/* Input con contador de caracteres */}
      <div className="relative left-[-40px] top-[100px]">
        <TextInputWithCounter />
      </div>

      {/* Botón que abre el modal */}
      <div className="relative w-[206px] text-[#434242] left-[-40px] top-[100px] text-base font-normal font-['Roboto'] underline tracking-tight cursor-pointer mt-4" onClick={toggleModal}>
        Ejemplos para crear tu título
      </div>

      {/* Modal emergente */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="w-[619px] h-80 bg-[#fbfbff] rounded-md shadow flex-col justify-start items-start gap-[25px] p-5">
            <div className="flex justify-between w-full">
              <div className="text-[#434242] text-[34px] font-normal font-['Roboto'] tracking-tight">
                Ejemplos para crear tu título
              </div>
              <button onClick={toggleModal} className="text-[#434242] text-xl">
                &times;
              </button>
            </div>

            <div className="pl-5 pr-[17px] mt-5 text-[#696868] text-2xl font-normal font-['Roboto'] leading-relaxed">
              • Sesión grupal de meditación al aire libre.<br/>
              • Revisión de currículum vitae.<br/>
              • Clases de cocina italiana tradicional.<br/>
              • Entrenamiento personal en gimnasio.
            </div>

            <div className="w-full flex justify-end border-t border-gray-300 pt-5 mt-5">
              <button onClick={toggleModal} className="text-center text-[#434242] text-sm font-normal font-['Roboto'] uppercase tracking-tight">
                Entiendo
              </button>
            </div>
          </div>
        </div>
      )}
      {/*Nivel*/}
      <div className="relative w-[503px] h-[34px] left-[-40px] top-[120px] text-[#434242] text-2xl font-normal font-['Roboto']">Nivel</div>

      {/* Radio buttons para Nivel */}
      <div className="relative left-[-40px] top-[130px]">
        <NivelRadioButtons />
      </div>

      {/* Título para Modalidad */}
      <div className="relative w-[503px] h-[34px] left-[-40px] top-[145px] text-[#434242] text-2xl font-normal font-['Roboto']">
        Modalidad
      </div>

      {/* Radio buttons para Modalidad */}
      <div className="relative left-[-40px] top-[150px]">
        <ModalidadRadioButtons />
      </div>

    </Layout>
  );
};

export default UserRegistrationStep4;
