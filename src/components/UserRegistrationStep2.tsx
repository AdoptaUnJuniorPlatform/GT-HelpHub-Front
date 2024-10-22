import React, { useState } from 'react';
import Layout from './Layout';
import UploadPhoto from '../assets/UploadPhoto.svg';
import InformationCircle from '../assets/InformationCircle.svg';
import Button from './Button';

interface UserRegistrationStep2Props {
  onBackClick: () => void;
  onNextClick: () => void;
  steps: string[];
  currentStep: number;
}

const UserRegistrationStep2: React.FC<UserRegistrationStep2Props> = ({
  onBackClick,
  onNextClick,
  steps,
  currentStep,
}) => {
  // Estado para almacenar el archivo seleccionado
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  // Manejador del cambio del archivo
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file)); // Crear una URL temporal de la imagen seleccionada
    }
  };

  return (
    <Layout
      title="Una foto vale más que mil palabras"
      description="Ayuda a tus vecinos/as a reconocerte. Esta es la primera foto que van a ver los usuarios."
      stepTitle="Paso 2"
      stepDescription="Escoger una foto"
      onBackClick={onBackClick}
      onNextClick={() => {
        if (selectedFile) {
          onNextClick(); // Solo avanza si hay un archivo seleccionado
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
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </label>
            <div className="text-[#434242] text-1xl font-normal mb-2">Subir foto</div>
            <div className="text-[#696868] text-base font-normal">
              Selecciona una foto de perfil de tu equipo.
            </div>
          </>
        ) : (
          <>
            {/* Vista previa de la imagen cargada */}
            <img src={previewUrl} alt="Vista previa" className="w-[100px] h-[100px] rounded-full object-cover" />
            <div className="text-[#434242] text-l font-normal mt-1">Foto subida</div>
          </>
        )}

        {/* Botón "Subir foto" o "Cambiar foto" */}
        <Button
          texto={previewUrl ? 'Cambiar foto' : 'Subir foto'}
          color="text-white"
          className="h-8 px-3.5 py-2 bg-[#1945e3] rounded-lg shadow mt-3"
          onClick={() => document.getElementById('fileInput')?.click()} // Activar el input de archivo
        />
      </div>
      </div>

      {/* Texto y ejemplos */}
      <div className="relative top-[90px] text-center left-[-115px]">
        <div className="w-[454px] h-[27px] text-[#434242] text-sm font-normal font-['Roboto']">
          Si no lo tienes claro, aquí tienes unos ejemplos:
        </div>
        <div className="w-6 h-6 relative left-[385px] top-[-30px]">
          <img src={InformationCircle} alt="Información" />
        </div>
      </div>

      {/* Contenedor para los avatares */}
      <div className="relative flex justify-center items-center gap-4 top-[70px] left-[-330px]">
        {/* Primer avatar */}
        <div className="relative w-[60px] h-[60px] rounded-full border-2 border-[#496ceb]">
          <img
            src="https://s3-alpha-sig.figma.com/img/2f09/4793/05ddb2118e0012df1f640008804acdeb?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IPy6RNPgUG1m8EUAjeAtl51Zwi9VD2FL8wgreuoOY0uZBWhuO1FFEKAXBxGGCSF5ANHgwBwNg8TIubS8YO-008uXVLqKsuwnOCDDLujAVEPY7hVd1bby2DpFjy7I9xabG3gKFZpgwjlEdhtYFkSzfkgoERmc3DHmduUtEURc1EwsJ7romgXPTC9vppHyx4MXCQG5OBZT0bEdhuUZmjbJXAkhgnUl9HXKLdWyS72~oQlJfdtW9yH6aK9NqKFvfyjrQ1E3hnJhIkzK2BmoHOIy1R-VsBZL5610rFOIoQu42Ek~Ww3uo9aGP-MYePeunRG~Q4opeKtyazy172qHJKJWdg_"
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
            src="https://s3-alpha-sig.figma.com/img/0dc8/9a80/811ce0ee0838d47c79b082f9baa874bd?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O81av02qPwthy3fD77xgQ0NEGD3fsOtXYEGks4KMyMz2OE4ceJ9tOKPb~4EHNRLO-7ptEbDOHGlw4uCVNbqX1ndjDmJ86cAxTYnM9j-2HmauD93fy32vLJlxGcl3eqsoygCaG~mPm5CpjUp6EkjbXxNB07CkIm9amFTvmIU9lWR1o31iIr~m8cez-JADkESBtq8310SzFMvSq6Eo2hkNnnG9u5yLvAsSv7RWvUZmHHPa~O8KJ1iiB1ZddcTVZLWx5OJNlvPFPadqTY0Rv47NV-2WbGfHmTNXiRXcXmsO42gqP52n~Qhwf0Xk8wyaGVsMjh-~IQWGQQrQaFafgGtgSQ__"
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
            src="https://s3-alpha-sig.figma.com/img/4e48/68d4/f2f351ec4ec52e031ccb2baf501b04b9?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WAX3APoi9eZSXeAZPdMr662dpzNACHxnlwL2ER7AfQbMteYztItBoGNOobTTndVHsPVTneBjwsndE64l4sXZQkGmTHVqtBJ2dcJ8iEPyo8MMmtP94HXaKvDDpZWZ0ambO59lEbled0cYHToKofYsqfI8A4XSYND84c-7GsXM-Eirx3txMkZ8o~~4wVq2a9ksQHA3FQ~UE1tzLUGbcxwRXct8kcQ982p~JpERX-2AFioLSkgEkbLFfpdD-v~~bSWjqJHuCrv6hn4idefZ~ZOBhJpLnLdNiSEj7-UwdiLFwGUx1iAJqh6cOE7eVmk09Ce35qV3sR-3J0BizkolWsaG5Q__"
            alt="Avatar 3"
            className="w-full h-full rounded-full object-cover"
          />
        </div>
      </div>
    </Layout>
  );
};

export default UserRegistrationStep2;
