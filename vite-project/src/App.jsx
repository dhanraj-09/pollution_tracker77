import { useEffect, useState } from 'react';
import axios from 'axios';
import {StrictMode} from "react";
import Home from "./components/Home.jsx";
import Mapping from "./components/Mapping.jsx";
function App() {



  return (
   <StrictMode>
       <Home></Home>
       <Mapping></Mapping>
   </StrictMode>
  );
}

export default App
