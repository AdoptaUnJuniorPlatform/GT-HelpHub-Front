import { Country, InfoProps } from "../types/types";

export const countries: Country[] = [
  { name: "España", code: "ES", dialCode: "+34" },
  { name: "Argentina", code: "AR", dialCode: "+54" },
  { name: "Uruguay", code: "UY", dialCode: "+598" },
  { name: "Chile", code: "CL", dialCode: "+56" },
  { name: "Rusia", code: "RU", dialCode: "+7" },
  { name: "El Salvador", code: "SV", dialCode: "+503" },
  { name: "México", code: "MX", dialCode: "+52" },
  { name: "EE. UU.", code: "US", dialCode: "+1" },
  { name: "Canadá", code: "CA", dialCode: "+1" },
];

export const Information: InfoProps[] = [
  {
    header: "Coordinar directamente por llamada",
    info: "No te preocupes, tu teléfono no está visible para todos los usuarios. Solo estará visible para la persona con la que solicites un intercambio."
  }
];