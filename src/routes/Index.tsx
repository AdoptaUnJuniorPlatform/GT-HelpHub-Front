import { Routes, Route } from "react-router-dom"
import Login from "../pages/Login"
import Register from "../pages/Register"

function RoutesIndex() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}

export default RoutesIndex