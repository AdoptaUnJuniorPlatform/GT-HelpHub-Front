import  React, { useState } from  'react';
import Layout from './Layout';
import TimeRangeOption from './TimeRangeOption';
import DaySelector from './DaySelector';
import { RegistrationFormData } from '../types/RegistrationFormData';

interface UserRegistrationStep3Props{
  onBackClick: () => void;
  onNextClick: () => void;
  steps: string[];
  currentStep: number;
  registrationData: RegistrationFormData;
  updateRegistrationData: (data: Partial<RegistrationFormData>) => void;
}
  
const UserRegistrationStep3: React.FC<UserRegistrationStep3Props> = ({ 
  onBackClick,
  onNextClick,
  steps,
  currentStep,
  registrationData,
  updateRegistrationData,
}) => {

  const [selectedHorario, setSelectedHorario] = useState<string | null>(registrationData.profileData.preferredTimeRange || null);
  const [selectedDays, setSelectedDays] = useState<string[]>(registrationData.profileData.selectedDays || []);

  // Definimos los horarios aquí
  const availableTimeRanges = [
    { id: 1, timeRange: '08:00hs a 14:00hs' },
    { id: 2, timeRange: '17:00hs a 21:00hs' },
    { id: 3, timeRange: '08:00hs a 17:00hs' },
    { id: 4, timeRange: '15:00hs a 17:00hs' },
    { id: 5, timeRange: 'Flexible schedule' },
  ];


  const handleSelectHorario = (timeRange: string) => {
    setSelectedHorario(timeRange);
    updateRegistrationData({
      profileData: { ...registrationData.profileData, preferredTimeRange: timeRange },
    });
  };
  

  const handleDaySelect = (daysOfWeek: string[]) => {
    setSelectedDays(daysOfWeek);
    updateRegistrationData({
      profileData: { ...registrationData.profileData, selectedDays: daysOfWeek },
    });
  };

  return(
    <Layout
      title="Selecciona tus timeRange"
      description="Para que podamos ayudarte a coordinar horarios con nuestros otros usuarios, necesitaremos que nos brindes tu disponibilidad horaria y días disponiles."
      stepTitle="Paso 3"
      stepDescription="¿Qué día sestás disponible?"
      onBackClick={onBackClick}
      onNextClick={onNextClick}
      steps={steps}
      currentStep={currentStep}
    >

      {/*Contenido específico del Paso 3*/}
      <div className="relative w-[450px] h-14 left-[-40px] top-[80px] text-[#434242] text-m font-normal font-['Roboto']">En HelpHub, queremos facilitar a los usuarios la coordinación de horarios.</div>

      {/*Horarios*/}
      <div className="relative w-[83px] h-[21px] text-[#434242] left-[-40px] top-[80px] text-l font-medium font-['Roboto'] tracking-tight">Horarios</div>
      
      {/*Radio Buttons para seleccionar horario*/}
      <div className="relative w-[450px] h-auto left-[-40px] top-[100px]">
        <div className="flex flex-wrap gap-4 w-full justify-start items-start">
          {/* Mapeo de las opciones de horario usando el componente HorarioOption */}
          {availableTimeRanges.map((availableTimeTange) => (
            <TimeRangeOption
              key={availableTimeTange.id}
              text={availableTimeTange.timeRange}
              selected={availableTimeTange.timeRange === selectedHorario}
              onClick={() => handleSelectHorario(availableTimeTange.timeRange)}
            />
          ))}
        </div>
      </div>

      {/*Días*/}
      <div className="relative w-[83px] h-[21px] text-[#434242] left-[-40px] top-[120px] text-l font-medium font-['Roboto'] tracking-tight">Días</div>
      <div className="relative w-[324px] h-[29px] text-[#434242] left-[-40px] top-[130px] text-m font-normal font-['Roboto'] tracking-tight">Puedes seccionar más de un día.</div>
      <div className='relative left-[-40px] top-[140px]'>
        <DaySelector selectedDays={selectedDays} onDaySelect={handleDaySelect} />
      </div>
    </Layout>
  )};

export default UserRegistrationStep3;
