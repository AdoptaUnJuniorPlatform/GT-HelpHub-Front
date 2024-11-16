import { ChangeEvent, ReactNode } from "react";
export interface Input {
  id?:string;
  type?: 'text'| 'password' | 'email' | 'checkbox' | 'tel' | 'number' | 'button';
  title?: string;
  placeholder?: string;
  maxLength?: number;
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
  onClick?: () => void
}

export interface CardBtnBorderProps {
  onClick?: (id?: string) => void;
  id?: string;
  className: string;
  label: string;
};
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
}
export interface BorderButtonProps {
  label: string;
  className: string;
  active: boolean;
  onClick: () => void;
  variant?: 'home' | 'profile'
}

export interface CardHeaderProps {
  photo: string;
  name: string;
}

export interface ServiceInfoProps {
  service: string;
  location: string;
  mode:string;
}

export interface CardLevelProps {
  levels: string[] 
  activeLevel: string;
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

export interface InterestSkillsProps {
  interestSkills: string[];
  isEditing: boolean;
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
  reviews: Array<{ 
    name: string; 
    city: string; 
    review: string; 
    givenSkill?: string; 
    recivedSkill?: string; 
    photo: string}
  >;
  availability: string;
  description: string;
  skills: string[];
  interestSkills?: string[];
}

export type PaginationProps = {
  totalPages?: number;
  currentPage: number;
};

export interface SeeMoreProps {
  isOpen: boolean;
  onClose: () => void;
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

export interface SecondayButtonProps {
  label: string;
  onClick: () => void;
}

export interface Review {
  name: string;
  city: string;
  review: string;
  givenSkill?: string;
  recivedSkill?: string;
  photo: string;
}

export interface ReviewsCardProps {
  review: Review
  showSkills: boolean;
}

export interface MyReviewsProps {
  reviews: Review[];
}

export interface AuthLayoutProps {
  children: [ReactNode, ReactNode];
}
export interface BackNextButtonProps {
  type: 'submit' | 'button'
  onClick?: () => void;
  disabled?: boolean;
  label?: string
  className?: string; 
}

export interface  LoginCardProps {
  name: string;
  occupation: string;
  location?: string;
  availability: string;
  description: string;
  tags: string[];
}

export interface GreenAlertProps {
  title: string,
  text: string
}
export interface CharacterCountTextAreaProps {
  id: string;
  name: string;
  value:string;
  className?: string;
  placeholder: string;
  showLabel: boolean;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

export interface FilterDropProps {
  id?: string;
  type?: 'select'
  name?: string;
  value?: string;
  options: string[];
  placeholder: string;
  className?: string;
  onSelect: (option: string) => void;
  selectedOption?: string[] | string | null;
}