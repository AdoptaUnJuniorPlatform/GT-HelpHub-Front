import { ChangeEvent } from "react";
export interface Input {
  id?:string;
  type?: 'text'| 'password' | 'email' | 'checkbox' | 'tel';
  title?: string;
  placeholder?: string;
  name?: string;
  value?: string;
  checked?: boolean;
  style?: React.CSSProperties; 
  className?: string;
  positionStyles?: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}
export interface TitleProps {
  title: string;
  className?: string;
}

export interface showPasswordProps{
  showPassword: boolean;
  onClick: () => void;
  className: string;
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
  header?: string;
  info: string;
}

export interface SwitchProps {
  initialState?: boolean;
  onChange: (data: { optionCall: boolean; showPhone: boolean }) => void;
}
export interface Menu {
  name: string;
  link: string;
  position: string;
  icon: JSX.Element;
  onClick?: () => void; 
}
export interface ModalityProps {
  label: string;
  className: string;
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
  reviewsCount: number;
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

export interface LoginFormData {
  email: string;
  password: string;
}
export interface RegisterFormData extends LoginFormData {
  nameUser: string;
  surnameUser: string;
  phone: string;
  optionCall: boolean;
  showPhone: boolean;
  blockemailed: boolean;
}

export interface Notification {
  id: number;
  type: 'completed' | 'request'| 'rejectedExchange' | 'rejectedRequest' | 'accepted';
  user: string;
  message: string;
  date: string;
  imageUser: string;
}

export interface NotificationsProps {
  notifications: Notification[];
}

export interface ExchangeAcceptedProps {
  user: string;
  userImage: string;
  date: string;
  onSendMessage?: () => void;
}

export interface RejectedExchangeProps {
  user: string;
  userImage: string;
  date: string;
  onViewProfile?: () => void;
}

export interface RejectedRequestProps {
  user: string;
  userImage: string;
  date: string;
}

export interface RequestProps {
  user: string;
  userImage: string;
  onAccept?: () => void;
  onDecline?: () => void;
  date: string;
}

export interface CompletedProps {
  user: string;
  message: string;
  userImage: string;
  date: string;
}
