import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { AuthLayout } from './layouts/AuthLayout';
import { Login } from "./pages/Login";
import { Registrasi } from "./pages/Registrasi";

function App() {

  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<AuthLayout/>}> 
        <Route index element={<Login/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="register" element={<Registrasi/>}/>
      </Route>
    </Routes>
  </BrowserRouter> 
  )
}

export default App
