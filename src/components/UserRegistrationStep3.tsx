import  React, { useState } from  'react';
import Layout from './Layout';
import HorarioOption from './HorarioOption';


interface UserRegistrationStep3Props{
  onBackClick: () => void;
  onNextClick: () => void;
  steps: string[];
  currentStep: number;  
}
  
  const UserRegistrationStep3: React.FC<UserRegistrationStep3Props> = ({ 
    onBackClick,
    onNextClick,
    steps,
    currentStep,
   }) => {

    const [selectedHorario, setSelectedHorario] = useState<number | null>(null);

    const horarios = [
      { id: 1, text: '8:00 a 14:00' },
      { id: 2, text: '17:00 a 21:00' },
      { id: 3, text: '8:00 a 17:00' },
      { id: 4, text: '15:00 a 17:00' },
      { id: 5, text: 'Flexibilidad horaria' },
    ];

    const handleSelectHorario = (id: number) => {
      setSelectedHorario(id);
    };
  
    return(
      <Layout
      title="Selecciona tus horarios"
      description="Para que podamos ayudarte a coordinar horarios con nuestros otros usuarios, necesitaremos que nos brindes tu disponibilidad horaria y días disponiles."
      stepTitle="Paso 3"
      stepDescription="¿Qué día sestás disponible?"
      onBackClick={onBackClick}
      onNextClick={onNextClick}
      steps={steps}
      currentStep={currentStep}
    >

    {/*Contenido específico del Paso 3*/}
    <div className="relative w-[450px] h-14 left-[-40px] top-[80px] text-[#434242] text-sm font-normal font-['Roboto']">
        En HelpHub, queremos facilitar a los usuarios la coordinación de horarios.
      </div>

      {/*Horarios*/}
      <div className="relative w-[83px] h-[21px] text-[#434242] left-[-40px] top-[80px] text-l font-medium font-['Roboto'] tracking-tight">Horarios</div>
      
      {/*Radio Buttons para seleccionar horario*/}
      <div className="relative w-[450px] h-auto left-[-40px] top-[100px]">
        <div className="flex flex-wrap gap-4 w-full justify-start items-start">
          {/* Mapeo de las opciones de horario usando el componente HorarioOption */}
          {horarios.map((horario) => (
            <HorarioOption
              key={horario.id}
              text={horario.text}
              selected={horario.id === selectedHorario}
              onClick={() => handleSelectHorario(horario.id)}
            />
          ))}
        </div>
      </div>
      </Layout>
    )};

export default UserRegistrationStep3;