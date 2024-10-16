import React from 'react';

interface BotonProps {
  texto: string;
  color: string; 
  onClick: () => void;
  className?: string;
}

const Boton: React.FC<BotonProps> = ({ texto, color, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`text-center ${color} ${className} text-2xl font-normal font-['Roboto'] uppercase leading-tight tracking-tight`}
    >
      {texto}
    </button>
  );
};

export default Boton;
