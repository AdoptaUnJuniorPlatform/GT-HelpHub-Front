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
export interface Menu {
  name: string;
  link: string;
  position: string;
  icon: JSX.Element;
}
export interface ModalityProps {
  label: string,
  className: string
}

export interface CardHeaderProps {
  photo: string;
  name: string;
}

export interface ServiceInfoProps {
  service: string;
  location: string;
}

export interface ExperienceLevelProps {
  levels: Array<{ name: string; active: boolean }>;
}

export interface AvailabilityProps {
  availability: string;
}

export interface DescriptionProps {
  description: string;
}

export interface SkillsProps {
  skills: string[];
}

export interface ProfileData {
  id: number,
  photo: string;
  name: string;
  service: string;
  location: string;
  rating: number;
  reviewsCount: number,
  levels: Array<{ name: string; active: boolean }>;
  reviews: Array<{ name: string; city: string; review: string; photo: string}>;
  availability: string;
  description: string;
  skills: string[];
}

export type PaginationProps = {
  totalPages?: number;
  currentPage: number;
};

export interface SeeMoreProps {
  isOpen: boolean;
  onClose: () => void;
}
