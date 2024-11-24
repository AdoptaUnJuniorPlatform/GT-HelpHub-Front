interface UserIdMapping {
  _id?: string;      
  id_user?: string;  
  userId?: string;   
  user_id?: string;  
}
  
/**
   * Mapea el campo del ID de usuario entre colecciones.
   * @param data Un objeto con campos de diferentes colecciones.
   * @returns Un objeto con el campo `userId` normalizado o `null` si no se encontró.
   */
export const mapUserId = (data: UserIdMapping | null): { userId: string } | null => {
  if (!data) {
    console.warn("El objeto proporcionado es nulo o indefinido.");
    return null;
  }
    
  // Encuentra el primer campo que no sea undefined o null
  const userId =
      typeof data._id === "string" ? data._id :
        typeof data.id_user === "string" ? data.id_user :
          typeof data.userId === "string" ? data.userId :
            typeof data.user_id === "string" ? data.user_id :
              null;
  
  if (!userId) {
    console.warn("No se encontró un ID válido en el objeto proporcionado:", data);
    return null;
  }
    
  return { userId }; 
};
  