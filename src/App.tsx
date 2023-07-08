import React from 'react';
import './App.css';
import Toolbars from "./components/Toolbar/Toolbars";
import {Route, Routes} from "react-router-dom";
import Home from "./container/Home/Home";

function App() {
  return (
   <>
       <header>
           <Toolbars/>
       </header>
       <main>
           <Routes>
               <Route path="/" element={(
                   <Home/>
               )}/>
               <Route path="/home" element={(<Home/>)}/>
               <Route path="/scheme" element={(<Home />)}/>
               <Route path="/position" element={(<Home/>)}/>
                   <Route path="/employees" element={(<Home/>)}/>

               <Route path="*" element={(
                   <h1>Not Found!</h1>
               )}/>
           </Routes>
       </main>

   </>
  );
}

export default App;
