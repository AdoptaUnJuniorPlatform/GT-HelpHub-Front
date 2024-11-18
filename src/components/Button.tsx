import React from 'react';

interface ButtonProps {
  texto: string;
  color: string; 
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ texto, color, onClick, className, disabled }) => {
  return (
    <button
      onClick={onClick}
      className={`text-center ${color} ${className} text-1xl font-normal font-['Roboto'] uppercase leading-tight tracking-tight ${
        disabled ? 'opacity-50 cursor-not-allowed' : '' }`}
      disabled={disabled}
    >
      {texto}
    </button>
  );
};

export default Button;
