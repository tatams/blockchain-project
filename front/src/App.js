import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './Navbar';
import Register from './register';
import Serch from './serch';
import Patient from './patient_information';

function App() {
  let login = false;
  if(login){

  }
  else{

  }

  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <div className="layout">
      <Routes>
        <Route path="/" element={<Serch/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/patient" element={<Patient/>}/>
        <Route path="/patient/Profile" element={''}/>
        <Route path="/patient/HomeAddress" element={''}/>
        <Route path="/patient/ListDocter" element={''}/>
        <Route path="/patient/Note" element={''}/>

      </Routes>
      </div>
    </BrowserRouter>
    </div>
    )
}
export default App;
