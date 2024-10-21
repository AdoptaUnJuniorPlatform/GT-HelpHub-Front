import React, {useState} from  'react';
import Layout from './Layout';
import UploadPhoto from '../assets/UploadPhoto.svg';
import InformationCircle from '../assets/InformationCircle.svg';
import Button from './Button';

interface UserRegistrationStep2Props{
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

    // Manejador del cambio del archivo
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) {
        setSelectedFile(file);
        console.log("Archivo seleccionado:", file.name);
      }
    };
  

    return(
      <Layout
      title="Una foto vale más que mil palabras"
      description="Ayuda a tus vecinos/as a reconocerte. Esta esla primera foto que van a ver los usuarios."
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
      {/* Texto explicativo debajo del subtítulo */}
      <div className=" relative w-[450px] h-14 left-[-40px] top-[80px] text-[#434242] text-sm font-normal font-['Roboto'] ">
        En HelpHub, todas las personas deben tener una fotografía en donde se muestre claramente su rostro.
      </div>
      
      {/* Rectángulo */}
      <div className="relative w-[500px] h-[200px] rounded-[10px] left-[-40px] top-[80px] border border-dashed border-[#434242] flex flex-col justify-center items-center gap-4">
      <div className="w-full flex flex-col items-center">
  
      {/* Input para subir la foto */}
      <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            style={{ display: 'none' }}
            id="fileInput"
          />

      {/* Icono de subir foto */}
      <label htmlFor="fileInput" className="cursor-pointer"></label>
      <div className="w-[57px] h-[57px]">
      <img src={UploadPhoto} alt="Icono de subir foto" className="w-full h-full" />
      </div>

  {/* Texto "Subir foto" y descripción */}
  <div className="text-center">
    <div className="text-[#434242] text-2xl font-normal mb-2">Subir foto</div>
    <div className="text-[#696868] text-base font-normal">
      Selecciona una foto de perfil.
    </div>
  </div>

  {/* Botón "Subir foto" */}
  <div className="mt-2 h-9 px-3.5 py-2 bg-[#1945e3] rounded-lg shadow flex justify-center items-center gap-2 cursor-pointer">
  <Button
  texto="Subir foto"
  color="text-white"
  className="text-xs font-bold uppercase"
  onClick={(e) => {
    e.preventDefault(); // Evita que avance al siguiente paso
    document.getElementById('fileInput')?.click(); // Activa el input de archivo
  }}
/>    
  </div>
  </div>
</div>

{/* Mostrar el nombre del archivo si se ha seleccionado */}
{selectedFile && (
        <div className="text-sm text-gray-700 mt-2">
          Archivo seleccionado: {selectedFile.name}
        </div>
      )}

{/* Texto y ejemplos */}
<div className="relative top-[90px] text-center left-[-115px]">
        <div className="w-[454px] h-[27px] text-[#434242] text-sm font-normal font-['Roboto']">
          Si no lo tienes claro, aquí tienes unos ejemplos:
        </div>
        <div className="w-6 h-6 relative left-[385px] top-[-30px]">
        <img 
        src={InformationCircle}/>
        </div>
</div>

{/* Contenedor para los avatares */}
<div className="relative flex justify-center items-center gap-4 top-[70px] left-[-330px] ">
  {/* Cada avatar */}
  <div className="w-[60px] h-[60px] rounded-full border-2 border-[#496ceb]">
    <img
      src="https://s3-alpha-sig.figma.com/img/2f09/4793/05ddb2118e0012df1f640008804acdeb?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IPy6RNPgUG1m8EUAjeAtl51Zwi9VD2FL8wgreuoOY0uZBWhuO1FFEKAXBxGGCSF5ANHgwBwNg8TIubS8YO-008uXVLqKsuwnOCDDLujAVEPY7hVd1bby2DpFjy7I9xabG3gKFZpgwjlEdhtYFkSzfkgoERmc3DHmduUtEURc1EwsJ7romgXPTC9vppHyx4MXCQG5OBZT0bEdhuUZmjbJXAkhgnUl9HXKLdWyS72~oQlJfdtW9yH6aK9NqKFvfyjrQ1E3hnJhIkzK2BmoHOIy1R-VsBZL5610rFOIoQu42Ek~Ww3uo9aGP-MYePeunRG~Q4opeKtyazy172qHJKJWdg_"
      alt="Avatar 1"
      className="w-full h-full rounded-full object-cover "
    />
  </div>

  <div className="w-[60px] h-[60px] rounded-full border-2 border-[#496ceb]">
    <img
      src="https://s3-alpha-sig.figma.com/img/0dc8/9a80/811ce0ee0838d47c79b082f9baa874bd?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O81av02qPwthy3fD77xgQ0NEGD3fsOtXYEGks4KMyMz2OE4ceJ9tOKPb~4EHNRLO-7ptEbDOHGlw4uCVNbqX1ndjDmJ86cAxTYnM9j-2HmauD93fy32vLJlxGcl3eqsoygCaG~mPm5CpjUp6EkjbXxNB07CkIm9amFTvmIU9lWR1o31iIr~m8cez-JADkESBtq8310SzFMvSq6Eo2hkNnnG9u5yLvAsSv7RWvUZmHHPa~O8KJ1iiB1ZddcTVZLWx5OJNlvPFPadqTY0Rv47NV-2WbGfHmTNXiRXcXmsO42gqP52n~Qhwf0Xk8wyaGVsMjh-~IQWGQQrQaFafgGtgSQ__"
      alt="Avatar 2"
      className="w-full h-full rounded-full object-cover"
    />
  </div>

  <div className="w-[60px] h-[60px] rounded-full border-2 border-[#496ceb]">
    <img
      src="https://s3-alpha-sig.figma.com/img/4e48/68d4/f2f351ec4ec52e031ccb2baf501b04b9?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WAX3APoi9eZSXeAZPdMr662dpzNACHxnlwL2ER7AfQbMteYztItBoGNOobTTndVHsPVTneBjwsndE64l4sXZQkGmTHVqtBJ2dcJ8iEPyo8MMmtP94HXaKvDDpZWZ0ambO59lEbled0cYHToKofYsqfI8A4XSYND84c-7GsXM-Eirx3txMkZ8o~~4wVq2a9ksQHA3FQ~UE1tzLUGbcxwRXct8kcQ982p~JpERX-2AFioLSkgEkbLFfpdD-v~~bSWjqJHuCrv6hn4idefZ~ZOBhJpLnLdNiSEj7-UwdiLFwGUx1iAJqh6cOE7eVmk09Ce35qV3sR-3J0BizkolWsaG5Q__"
      alt="Avatar 3"
      className="w-full h-full rounded-full object-cover"
    />
  </div>
</div>
      </Layout>
    )};

export default UserRegistrationStep2;


