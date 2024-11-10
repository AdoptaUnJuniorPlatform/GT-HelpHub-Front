import React from 'react';

interface ButtonProps {
  texto: string;
  color: string; 
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ texto, color, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`text-center ${color} ${className} text-1xl font-normal font-['Roboto'] uppercase leading-tight tracking-tight`}
    >
      {texto}
    </button>
  );
};

export default Button;
