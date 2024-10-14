import React from 'react';
import OfficialLogo from './OfficialLogo';

interface LeftColumnProps {
    title: string;
    description: string;
}

const LeftColumn: React.FC<LeftColumnProps> = ({ title, description }) => {
    return (
        <div className="relative w-full h-full bg-[#FBFBFF] p-5">
            {/* Logo */}
            <div className="absolute top-5 left-5">
                <OfficialLogo />
            </div>

            {/* Título */}
            <div className="absolute top-[180px] left-5 text-[#434242] text-[60px] font-light leading-[70px]">
                {title}
            </div>

            {/* Descripción */}
            <div className="absolute top-[450px] left-5 w-[421px] text-[#434242] text-[24px] font-normal">
                {description}
            </div>
        </div>
    );
};

export default LeftColumn;
