import  React, { useState } from  'react';
import Layout from './Layout';
import TimeRangeOption from './TimeRangeOption';
import DaySelector from './DaySelector';
import { ProfileData } from '../types/AuthServiceTypes';

interface UserRegistrationStep3Props{
  onBackClick: () => void;
  onNextClick: () => void;
  steps: string[];
  currentStep: number;
  profileData: ProfileData;
  updateProfileData: (data: ProfileData) => void;
}
  
const UserRegistrationStep3: React.FC<UserRegistrationStep3Props> = ({ 
  onBackClick,
  onNextClick,
  steps,
  currentStep,
  profileData,
  updateProfileData,
}) => {

  const [selectedHorario, setSelectedHorario] = useState<string | null>(profileData.preferredTimeRange || null);
  const [selectedDays, setSelectedDays] = useState<string[]>(profileData.selectedDays || []);

  // Definimos los horarios aquí
  const availableTimeRanges = [
    { id: 1, timeRange: '08:00 a 14:00' },
    { id: 2, timeRange: '17:00 a 21:00' },
    { id: 3, timeRange: '08:00 a 17:00' },
    { id: 4, timeRange: '15:00 a 17:00' },
    { id: 5, timeRange: 'Flexibilidad Horaria' },
  ];

  const handleSelectHorario = (timeRange: string) => {
    setSelectedHorario(timeRange);
    updateProfileData({
      ...profileData,
      preferredTimeRange: timeRange, 
    });
  };

  const handleDaySelect = (daysOfWeek: string[]) => {
    setSelectedDays(daysOfWeek);
    updateProfileData({
      ...profileData,
      selectedDays: daysOfWeek, 
    });
  };

  const isNextButtonDisabled = !selectedHorario || selectedDays.length === 0;

  return(
    <Layout
      title="Selecciona tus horarios"
      description="Para que podamos ayudarte a coordinar horarios con nuestros otros usuarios, necesitaremos que nos brindes tu disponibilidad horaria y días disponiles."
      stepTitle="Paso 3"
      stepDescription="¿Qué día sestás disponible?"
      onBackClick={onBackClick}
      onNextClick={() => {
        if (!isNextButtonDisabled) {
          onNextClick();
        } else {
          alert('Por favor, completa todos los campos requeridos antes de continuar.');
        }
      }}
      steps={steps}
      currentStep={currentStep}
    >

      {/*Contenido específico del Paso 3*/}
      <div className="relative w-[450px] h-14 left-[-40px] top-[80px] text-[#434242] text-m font-normal font-['Roboto']">En HelpHub, queremos facilitar a los usuarios la coordinación de horarios.</div>

      {/*Horarios*/}
      <div className="relative w-[83px] h-[21px] text-[#434242] left-[-40px] top-[80px] text-l font-medium font-['Roboto'] tracking-tight">Horarios</div>
      
      {/*Radio Buttons para seleccionar horario*/}
      <div className="relative w-[400px] h-auto left-[-40px] top-[100px]">
        <div className="flex flex-wrap gap-4 w-full justify-start items-start">
          {/* Mapeo de las opciones de horario usando el componente HorarioOption */}
          {availableTimeRanges.map((availableTimeRange) => (
            <TimeRangeOption
              key={availableTimeRange.id}
              text={availableTimeRange.timeRange}
              selected={availableTimeRange.timeRange === selectedHorario}
              onClick={() => handleSelectHorario(availableTimeRange.timeRange)}
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
