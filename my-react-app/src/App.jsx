import { Routes, Route } from "react-router-dom";
import Login from "./authentication/Login";
import Signup from "./authentication/Signup";
import Layout from "./layout/Layout";
import Tanstack from "./apis/Tanstack";
import OpenResource from "./apis/OpenResource";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />  
        <Route path="login" element={<Login />} />  
        <Route path="signup" element={<Signup />} /> 
        <Route path="tanstack" element={<Tanstack />} /> 
        <Route path="open-resource" element={<OpenResource />} /> 
      </Route>
    </Routes>
  );
}

function Home() {
  return <h1>Welcome Home!</h1>;
}

