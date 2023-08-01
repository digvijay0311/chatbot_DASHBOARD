import "./App.css";
import AdminLogin from "./components/pages/login/AdminLogin";
import Topbar from "./components/Topbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import { CakeContainer } from "./cakeContainer";
//import { Provider } from "react-redux";
//import store from "./redux/store";
//import { useState } from 'react';

function App() {
  let isAdmin = false;
  if (localStorage.getItem("adminToken")) isAdmin = true;
  return (
    <>
      { <BrowserRouter>
      {!isAdmin ? 
        (<Routes>
        <Route path='/' element={<AdminLogin/>}/>
      </Routes>):
      (<>
      <Topbar/>
      <div className='main-container'>
        <Sidebar/>
        <Content/>
      </div>
      </>)
      }
      </BrowserRouter> }
     
        <CakeContainer />

    </>
  );
}

export default App;
