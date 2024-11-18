import React, { useState } from 'react';

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
    { id: 7, name: 'Domingo' },
  ];

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Manejador para seleccionar/deseleccionar días
  const toggleDaySelection = (day: string) => {
    const isSelected = selectedDays.includes(day);
    if (isSelected) {
      onDaySelect(selectedDays.filter((selectedDay) => selectedDay !== day));
    } else {
      onDaySelect([...selectedDays, day]);
    }
  };

  return (
    <div className="relative w-[300px]">
      {/* Contenedor del botón que abre el desplegable */}
      <div
        className="h-[40px] bg-[#fbfbff] rounded-md border border-[#aeaeae]/10 flex items-center justify-between px-4 cursor-pointer"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}  // Toggle del dropdown
      >
        {/* Texto de "Seleccionar días" */}
        <div className="text-[#696868] text-sm font-normal font-['Roboto'] leading-normal tracking-wide">
          {selectedDays.length > 0 ? selectedDays.join(', ') : 'Seleccionar días'}
        </div>
        {/* Ícono de Dropdown como símbolo */}
        <span className="text-gray-500">▼</span>
      </div>

      {/* Menú desplegable */}
      {isDropdownOpen && (
        <div className="absolute top-[45px] left-0 w-full bg-white rounded-md border border-[#d6d6d6] shadow-md z-50">
          {/* Lista de días de la semana */}
          {daysOfWeek.map((day) => (
            <div
              key={day.id}
              className={`w-full h-9 flex items-center justify-between px-4 cursor-pointer border ${
                selectedDays.includes(day.name)
                  ? 'border-[#496ceb]/20 bg-[#496ceb]/20'  
                  : 'border-[#d6d6d6] bg-white'
              }`}
              onClick={() => toggleDaySelection(day.name)}
            >
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={selectedDays.includes(day.name)}
                  onChange={() => toggleDaySelection(day.name)}
                  className="form-checkbox h-5 w-5 text-[#7166d2] focus:ring-[#7166d2]"  
                />
                <span className="ml-2 text-sm">{day.name}</span>
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DaySelector;
