import React from 'react';
import { HabilityData, ProfileData } from '../types/AuthServiceTypes';

interface SkillsDisplayProps {
  habilityData: HabilityData;
  isSubmitted: boolean;
  profileData: ProfileData;
}

const SkillsDisplay: React.FC<SkillsDisplayProps> = ({ habilityData, isSubmitted, profileData }) => {
  return (
    
    <div className="ml-[-60px] w-[730px] h-auto px-[30px] py-[17px] bg-[#f6f5f4] mt-8 flex-col justify-start items-start gap-3.5 inline-flex">
      <div className="self-stretch h-[24px] text-[#434242] text-[25px] font-medium font-['Roboto'] tracking-tight">Mis habilidades</div>
      <div className="self-stretch border-t border-[#aeaeae]/30 mt-1 mb-1"></div>
      {isSubmitted ? (
        <>
          <div className="self-stretch text-[#434242] text-[17px] font-sm font-['Roboto']">
            ¡Felicitaciones! Ya tienes tu primera habilidad asociada a tu cuenta.
            <br /> Puedes editarla o borrar en cualquier momento desde tu perfil.
          </div>
          <div className="w-full h-auto bg-[#fbfbff] rounded-md shadow-md flex flex-col items-start p-5">
            <div className="w-full flex justify-between items-center">
              <div className="text-[#434242] text-[20px] font-medium font-['Roboto']">{habilityData.title}</div>
              <button className="w-[34px] h-[31px] bg-[#496ceb] rounded-[5px] flex items-center justify-center text-white">
                ✏️
              </button>
            </div>
            <div className="w-full border-t border-[#aeaeae]/10 mt-3 py-1">
              <div className="text-left text-[#434242] text-[16px] font-normal">Nivel</div>
              <div className="flex gap-2 mt-2">
                <div className={`px-3 py-1 rounded-full border ${habilityData.level === 'Básico' ? 'bg-[#496ceb] text-white' : 'bg-neutral-50 text-[#696868]'}`}>
                  Básico
                </div>
                <div className={`px-3 py-1 rounded-full border ${habilityData.level === 'Medio' ? 'bg-[#496ceb] text-white' : 'bg-neutral-50 text-[#696868]'}`}>
                  Medio
                </div>
                <div className={`px-3 py-1 rounded-full border ${habilityData.level === 'Avanzado' ? 'bg-[#496ceb] text-white' : 'bg-neutral-50 text-[#696868]'}`}>
                  Experto
                </div>
              </div>
            </div>
            <div className="w-full border-t border-[#aeaeae]/10 mt-3 py-1">
              <div className="text-left text-[#434242] text-[16px] font-normal">Modalidad</div>
              <div className="flex gap-2 mt-2">
                <div className="text-[#434242] text-[16px] mt-2">
                  {habilityData.mode === 'Presencial' ? (
                    <span>{profileData.location}</span>
                  ) : (
                    <span>Online</span>
                  )}
                </div>
              </div>
            </div>
            <div className="w-full border-t border-[#aeaeae]/10 mt-2 py-1">
              <div className="text-left text-[#434242] text-[16px] font-normal">Categoría</div>
              <div className="flex gap-2 mt-2">
                <div className="px-4 py-1 rounded-full border border-[#496ceb] bg-[#496ceb]/10 text-[#496ceb] text-m font-medium tracking-tight">
                  {habilityData.category}
                </div>
              </div>
            </div>
          </div>
        
        </>
      ) : (
        <div className="self-stretch text-[#434242] text-xl font-normal font-['Roboto']">
          Aún no tiene habilidades cargadas. Carga tu primera habilidad para continuar.
        </div>
      )}
    </div>
  );
};

export default SkillsDisplay;
