import React, { useState} from 'react';
import DropdownIconTemp from '../assets/DropdownIconTemp.svg'

interface DaySelectorProps {
  selectedDays: string[];
  onDaySelect: (selectedDays: string[]) => void;
}

const DaySelector: React.FC<DaySelectorProps> = ({ selectedDays, onDaySelect }) => {

    const daysOfWeek = [
        { id: 1, name: 'Lunes' },
        { id: 2, name: 'Martes' },
        { id: 3, name: 'Miércoles' },
        { id: 4, name: 'Jueves' },
        { id: 5, name: 'Viernes' },
        { id: 6, name: 'Sábado' },
        { id: 7, name: 'Domingo' }
      ];

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Manejador para seleccionar/deseleccionar días
  const toggleDaySelection = (day: string) => {
    const isSelected = selectedDays.includes(day);
    if (isSelected) {
      onDaySelect(selectedDays.filter(selectedDay => selectedDay !== day));
    } else {
      onDaySelect([...selectedDays, day]);
    }
  };


  return (
    <div className="relative">
      {/* Contenedor del botón que abre el desplegable */}
      <div
        className="w-[326px] h-[59px] bg-[#fbfbff] rounded-md border border-[#aeaeae]/10 flex items-center justify-between px-4 cursor-pointer"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        {/* Texto de "Seleccionar días" */}
        <div className="text-[#696868] text-sm font-normal font-['Roboto'] leading-normal tracking-wide">
          {selectedDays.length > 0 ? selectedDays.join(', ') : 'Seleccionar días'}
        </div>
        {/* Ícono de Dropdown */}
        <div className="w-5 h-5">
          <img src={DropdownIconTemp} alt="Dropdown" />
        </div>
      </div>

    {/* Menú desplegable */}
{isDropdownOpen && (
  <div className="absolute top-[70px] left-0 w-[326px] bg-white rounded-md border border-[#d6d6d6] shadow-md">
    {/* Lista de días de la semana */}
    {daysOfWeek.map((day) => (
      <div
        key={day.id}
        className={`w-[314px] h-11 flex items-center justify-center cursor-pointer
          ${selectedDays.includes(day.name) ? 'bg-[#496ceb]/20 border-[#496ceb]/20' : 'bg-white border-[#d6d6d6]'} 
          border rounded-md my-1`}
        onClick={() => toggleDaySelection(day.name)}
      >
        <div
          className={`text-center text-base font-normal font-['Roboto'] tracking-tight ${
            selectedDays.includes(day.name) ? 'text-[#496ceb]' : 'text-[#1d192b]'
          }`}
        >
          {day.name}
        </div>
      </div>
    ))}
  </div>
)}
  </div>
)
}

export default DaySelector;
