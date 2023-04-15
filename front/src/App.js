import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './Navbar';
import Register from './register';
import Serch from './serch';
import Patient from './patient_information';
import NavBar_login from './Navbar-login';
import { login_status } from './login';
import Login from './login';

function App() {
  const login = true;
  if(login){
    return (
      <div className="App">
        <BrowserRouter>
        <NavBar/>
        <div className="layout">
        <Routes>
          <Route path="/" element={<Serch/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/patient" element={<Patient/>}/>
        </Routes>
        </div>
      </BrowserRouter>
      </div>
      )
  }
  else{
    return(
      <div className="App">
        <BrowserRouter>
        <NavBar_login/>
        <div className="layout">
        <Routes>
          <Route path="/" element={<Login/>}/>
        </Routes>
        </div>
      </BrowserRouter>
      </div>
    )
  }
}
export default App;
