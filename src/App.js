import { Route, Routes } from 'react-router-dom';

import LandingPage from './LandingPage/landingPage';
import NavBar from './Components/NavBar/NavBar';
import './App.css'
import SignupLoginForm from './Login/SignUpLoginForm';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar></NavBar>
      </header>

      <div className="back">
     

      <Routes>
      <Route path="/" element={<LandingPage></LandingPage>}></Route>
      <Route path="/Login" element={<SignupLoginForm/>}></Route>
     
      

      </Routes>
      </div>

      <link rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossOrigin="anonymous"
      />
      
      
    </div>


  );
}

export default App;
