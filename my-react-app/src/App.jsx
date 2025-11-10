import { Routes, Route } from "react-router-dom";
import Login from "./authentication/Login";
import Signup from "./authentication/Signup";
import Layout from "./layout/Layout";
// import Tanstack from "./api/Tanstack";
// import OpenResource from "./api/OpenResource";
// import PostsCrud from "./api/PostsCrud";
// import Practice from "./api/Practice";
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />  
        <Route path="login" element={<Login />} />  
        <Route path="signup" element={<Signup />} /> 
        {/* <Route path="tanstack" element={<Tanstack />} /> 
        <Route path="open-resource" element={<OpenResource />} /> 
        <Route path="crud" element={<PostsCrud />} />
         <Route path="practice" element={<Practice />} /> */}
      </Route>
    </Routes>
  );
}

function Home() {
  return <h1>Welcome Home!</h1>;
}

