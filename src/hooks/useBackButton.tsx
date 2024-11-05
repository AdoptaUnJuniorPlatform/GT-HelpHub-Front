import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function useBackButton() {
  const location = useLocation();
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const decodedPathname = decodeURIComponent(location.pathname);

  useEffect(() => {
    if (decodedPathname.includes('nueva-contraseña')) {
      setShowForm(true);
      setShowAlert(true);
    } else {
      setShowForm(false);
      setShowAlert(false);
    }
  }, [decodedPathname]);

  const handleResetShow = () => {
    setShowForm(true);
    setShowAlert(true);
    navigate('/reseteo/nueva-contraseña');
  };

  const handleResetBack = () => {
    setShowForm(false);
    setShowAlert(false);
    navigate('/reseteo');
  };

  const handleBackButton = () => {
    console.log("handleBackButton triggered. decodedPathname:", decodedPathname);
    if (decodedPathname.includes('nueva-contraseña')) {
      console.log("Navegando a la ruta de inicio de restablecimiento");
      handleResetBack();
    } else if (location.pathname === ('/reseteo')){
      navigate('/')
      console.log("Navegando hacia atrás en el historial");
    } else {
      if (window.history.length > 1) {
        navigate(-1);
      } else {
        console.log("No hay historial para retroceder");
      }
    }
  };

  return { handleBackButton, handleResetShow, showForm, showAlert };
}

export default useBackButton;