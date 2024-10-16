import React from 'react';
import OfficialLogo from './OfficialLogo';

interface LeftColumnProps {
    title: string;
    description: string;
}

const LeftColumn: React.FC<LeftColumnProps> = ({ title, description }) => {
    return (
        <>
        <div className="w-1/3 p-10 bg-gray-50 flex items-start justify-start relative bg-[#FBFBFF] p-5">
            {/* Logo */}
            <div className="absolute top-[100px] left-[100px]">
                    <OfficialLogo />
                </div>

            {/* Título */}
            <div className="absolute top-[200px] left-20 text-[#434242] text-[50px] font-light leading-[70px] max-w-[350px]">
                {title}
            </div>

            {/* Descripción */}
            <div className="absolute top-[450px] left-20 w-[421px] text-[#434242] text-[20px] font-normal max-w-[350px]">
                {description}
            </div>
            </div>
        </>
    );
};

export default LeftColumn;
