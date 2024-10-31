
export interface RegistrationFormData {

  description?: string;
  location?: string;
  
  photo?: File;
  
  availableDays?: string[]; // Días disponibles seleccionados
  availableTimes?: string[]; // Horarios disponibles seleccionados

  offerTitle?: string;
  level?: string;
  modality?: string;
  offerDescription?: string;
  
  categories?: string[]; // Varias categorías seleccionables
  
  verificationCode?: string;
}
  