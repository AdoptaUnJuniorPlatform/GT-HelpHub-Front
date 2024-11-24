import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAvilityContext } from "../context/AvilityContext";

function useBackButton() {
  const location = useLocation();
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const {setShowEditor} = useAvilityContext();
  const decodedPathname = decodeURIComponent(location.pathname);
  const isHability = decodedPathname.includes('crear-habilidades') || decodedPathname.includes('editar-habilidades/:id')

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

    if (decodedPathname.includes('nueva-contraseña')) {

      handleResetBack();
    } else if (location.pathname === ('/reseteo')){
      navigate('/')

    } else if (isHability){
      navigate('/profile')
      setShowEditor(false)
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