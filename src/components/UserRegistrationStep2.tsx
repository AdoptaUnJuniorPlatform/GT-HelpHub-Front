import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import UploadPhoto from '../assets/UploadPhoto.svg';
import InformationCircle from '../assets/InformationCircle.svg';
import Button from './Button';
import { ProfileData } from '../types/AuthServiceTypes';
import Avatar1 from '../assets/Avatar1.svg';
import Avatar2 from '../assets/Avatar2.svg';
import Avatar3 from '../assets/Avatar3.svg';
import { uploadProfileImage, fetchProfileImage } from '../services/apiClient';
import { useAuthContext } from '../context/AuthContext';

interface UserRegistrationStep2Props {
  onBackClick: () => void;
  onNextClick: () => void;
  steps: string[];
  currentStep: number;
  profileData: ProfileData;
  updateProfileData: (data: ProfileData) => void;
}

const UserRegistrationStep2: React.FC<UserRegistrationStep2Props> = ({
  onBackClick,
  onNextClick,
  steps,
  currentStep,
  profileData,
  updateProfileData,
}) => {
  const { userId } = useAuthContext();
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  
  useEffect(() => {
    const loadProfileImage = async () => {
      if (userId) {
        try {
          const imageUrl = await fetchProfileImage(userId);
          if (imageUrl) {
            setPreviewUrl(imageUrl); 
            setTimeout(() => {
              alert(
                "Ya tienes una imagen de perfil cargada. Puedes continuar con el proceso o modificarla más tarde desde tu perfil."
              );
            }, 500);
          }
        } catch (error) {
          console.error("Error obteniendo la imagen de perfil:", error);
        }
      }
    };
  
    loadProfileImage();
  }, [userId]);

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (previewUrl) {
      return;
    }
    const file = event.target.files?.[0];
    if (file && userId) {
      try {
        const simulatedUrl = URL.createObjectURL(file);
        setPreviewUrl(simulatedUrl);

        await uploadProfileImage(file, userId);

        const response = await fetchProfileImage(userId);
  
        if (response) {
          setPreviewUrl(response);
          updateProfileData({
            ...profileData,
            profilePicture: response, 
          });
          alert("Imagen subida y cargada exitosamente.");
        } else {
          throw new Error("No se pudo recuperar la imagen después de subirla.");
        }
      } catch (error) {
        console.error("Error manejando la imagen de perfil:", error);
        alert("Hubo un problema al subir o cargar la imagen. Intenta nuevamente.");
      }
    }
  };
 
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible); 
  };

  return (
    <Layout
      title="Una foto vale más que mil palabras"
      description="Ayuda a tus vecinos/as a reconocerte. Esta es la primera foto que van a ver los usuarios."
      stepTitle="Paso 2"
      stepDescription="Escoger una foto"
      onBackClick={onBackClick}
      onNextClick={() => {
        if (previewUrl) {
          onNextClick();
        } else {
          alert('Por favor, selecciona una imagen antes de continuar.');
        }
      }}  
      steps={steps}
      currentStep={currentStep}
    >
      {/* Contenido específico del paso 2 */}
      <div className="relative w-[450px] h-14 left-[-40px] top-[80px] text-[#434242] text-sm font-normal font-['Roboto']">
        En HelpHub, todas las personas deben tener una fotografía en donde se muestre claramente su rostro.
      </div>

      {/* Rectángulo para la imagen o el icono de subida */}
      <div className="relative w-[450px] h-[200px] rounded-[10px] left-[-40px] top-[80px] border border-dashed border-[#434242] flex flex-col justify-center items-center gap-4">
        <div className="w-full flex flex-col items-center">
          {!previewUrl ? (
            <>
              {/* Icono de subida y botón de subida */}
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                style={{ display: 'none' }}
                id="fileInput"
              />
              <label htmlFor="fileInput" className="cursor-pointer">
                <img src={UploadPhoto} alt="Subir foto" className="w-12 h-12" />
              </label>
              <div className="text-[#434242] text-1xl font-normal mb-2">Subir foto</div>
              <div className="text-[#696868] text-base font-normal">Selecciona una foto de perfil.</div>
            </>
          ) : (
            <>
              {/* Vista previa de la imagen cargada */}
              <img src={previewUrl} alt="Vista previa" className="w-[100px] h-[100px] rounded-full object-cover" />
              <div className="text-[#434242] text-l font-normal mt-1">Foto subida</div>
            </>
          )}

          {/* Botón "Subir foto" */}
          {!previewUrl && (
            <Button
              texto={"Subir foto"}
              color="text-white"
              className="h-8 px-3.5 py-2 bg-[#1945e3] rounded-lg shadow mt-3"
              onClick={() => document.getElementById('fileInput')?.click()}
            />
          )}

        </div>
      </div>

      {/* Texto y botón de información */}
      <div className="relative top-[90px] text-center left-[-115px]">
        <div className="w-[454px] h-[27px] text-[#434242] text-sm font-normal font-['Roboto']">
          Si no lo tienes claro, aquí tienes unos ejemplos:
        </div>
        <div className="w-6 h-6 relative left-[385px] top-[-30px] cursor-pointer" onClick={toggleModal}>
          <img src={InformationCircle} alt="Información" />
        </div>
      </div>

      {/* Contenedor para los avatares */}
      <div className="relative flex justify-center items-center gap-4 top-[70px] left-[-330px]">
        {/* Primer avatar */}
        <div className="relative w-[60px] h-[60px] rounded-full border-2 border-[#496ceb]">
          <img
            src={Avatar1}
            alt="Avatar 1"
            className="w-full h-full rounded-full object-cover"
          />
          {/* Círculo morado con check */}
          <div className="absolute bottom-10 left-10 w-[20px] h-[20px] bg-[#7166d2] rounded-full flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="white" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>

        {/* Segundo avatar */}
        <div className="relative w-[60px] h-[60px] rounded-full border-2 border-[#496ceb]">
          <img
            src={Avatar2}
            alt="Avatar 2"
            className="w-full h-full rounded-full object-cover"
          />
          {/* Círculo morado con check */}
          <div className="absolute bottom-10 left-10 w-[20px] h-[20px] bg-[#7166d2] rounded-full flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="white" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>

        {/* Tercer avatar */}
        <div className="w-[60px] h-[60px] rounded-full border-2 border-[#496ceb]">
          <img
            src={Avatar3}
            alt="Avatar 3"
            className="w-full h-full rounded-full object-cover"
          />
        </div>
      </div>

      {/* Modal (pantalla emergente) */}
      {isModalVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="w-[800px] h-[300px] bg-[#fbfbff] rounded-md shadow flex flex-col justify-start items-start p-5">
            <div className="w-full flex justify-between items-center">
              <div className="text-[#434242] text-2xl font-normal">
                Cómo escoger una gran foto
              </div>
              <button onClick={toggleModal} className="text-[#434242] text-2xl">&times;</button>
            </div>
            <div className="mt-5 text-[#696868] text-xl font-normal">
              <p>Preferentemente no escojas fotos donde tengas que recortar a otras personas.</p>
              <p>Tu cara debe estar en el centro y bien enfocada.</p>
              <p>Un fondo limpio y sin distracciones hará que te destaques más.</p>
              <p>Mantén la edición de la foto al mínimo.</p>
              <p>Asegúrate de que la foto sea reciente y refleje cómo te ves actualmente.</p>
            </div>
            <div className="mt-5 mr-15 w-full flex justify-end">
              <Button
                texto="Entendido"
                color="text-white"
                className="h-8 px-3.5 py-2 bg-[#1945e3] rounded-lg shadow"
                onClick={toggleModal}
              />
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default UserRegistrationStep2;