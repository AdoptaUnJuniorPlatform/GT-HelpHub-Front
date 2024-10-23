import { BrowserRouter } from 'react-router-dom'
import RoutesIndex from './routes/Index'
import React from 'react';
// import RegistrationProcess from './components/RegistrationProcess';

const App: React.FC = () => {
  return (
    
    
  
    <>
      <BrowserRouter>
        <RoutesIndex />
      </BrowserRouter>
      {/* <div>
        <RegistrationProcess />
      </div> */}
    </>

  )
}

export default App;
