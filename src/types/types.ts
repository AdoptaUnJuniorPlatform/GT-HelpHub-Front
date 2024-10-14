export interface Input {
  type?: 'text'| 'password' | 'email' | 'checkbox';
  title?: string;
  placeholder?: string;
  style?: React.CSSProperties; 
  className?: string,
  positionStyles?: string
}
export interface TitleProps {
  title: string;
  className?: string;
}

export interface showPasswordProps{
  showPassword: boolean,
  onClick: () => void,
  className: string
}
export interface ButtonProps {
  label: string; 
  className?: string; 
  disabled?: boolean; 
}
export interface Country {
  name: string;
  code: string;
  dialCode: string;
}
export interface InfoProps {
  header?: string
  info: string
}

export interface SwitchProps {
  initialState?: boolean;
}
