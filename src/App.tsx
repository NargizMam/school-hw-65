import React from 'react';
import './App.css';
import Toolbars from "./components/Toolbar/Toolbars";
import {Route, Routes} from "react-router-dom";
import Home from "./container/Home/Home";
import Admin from './components/Admin/Admin';

function App() {


  return (
   <>
       <header>
           <Toolbars/>
       </header>
       <main>
           <Routes>
               <Route path="/" element={(<Home/>)}/>
               <Route path="/schools" element={(<Home/>)}>
                   <Route path="/schools/:id" element={(<Home/>)}/>
               </Route>
               <Route path="/schools/admin" element={(<Admin/>)}/>
               <Route path="*" element={(
                   <h1>Not Found!</h1>
               )}/>
           </Routes>
       </main>

   </>
  );
}

export default App;
