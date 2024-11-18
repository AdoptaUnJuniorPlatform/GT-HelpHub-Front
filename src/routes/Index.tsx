import { Routes, Route } from "react-router-dom"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Home from "../pages/Home"
import RegistrationProcess from "../components/RegistrationProcess"
import Profile from "../pages/Profile"
import Auth2Fa from "../pages/Auth2Fa"
import ResetPassword from "../pages/ResetPassword"
import NewPassword from "../components/NewPassword"
import Ability from "../components/Ability"
import MySkills from "../components/MySkills"
import MyReviews from "../components/MyReviews"
import ProtectedRoutes from "./ProtectedRoutes"

function RoutesIndex() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/codigo-seguridad" element={<Auth2Fa />}/> 
      <Route path="/home" element={<ProtectedRoutes element={<Home />} />} />
      <Route path="/register/personal-data" element={<ProtectedRoutes element={<RegistrationProcess />} />} /> 
      <Route path="/profile" element={<ProtectedRoutes element={<Profile />} />}>
        <Route path="habilidades" element={<ProtectedRoutes element={<MySkills />} />} />
        <Route path="valoraciones" element={<ProtectedRoutes element={<MyReviews />} />} />
        <Route path="crear-habilidades" element={<ProtectedRoutes element={<Ability />} />}/>
        <Route path="editar-habilidades/:id" element={<ProtectedRoutes element={<Ability />} />} />
      </Route>
      <Route path="/reseteo" element={<ResetPassword />}>
        <Route path="nueva-contraseña" element={<NewPassword />} />      
      </Route>
    </Routes>
  )
}

export default RoutesIndex