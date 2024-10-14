import { BrowserRouter } from 'react-router-dom'
import RoutesIndex from './routes/Index'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <RoutesIndex />
      </BrowserRouter>
    </>
  )
}

export default App
