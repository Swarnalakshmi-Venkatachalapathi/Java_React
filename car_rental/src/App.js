import React from "react";
import './App.css';

import SRoutes from "./Route/SRoutes";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () =>
{


  return(<>
  
     <SRoutes/>
   

     <ToastContainer />
  </>)
}
export default App;