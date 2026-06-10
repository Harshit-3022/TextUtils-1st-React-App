import logo from './logo.svg';
import './App.css';
import Navbar from './Components of React/Navbar';
import TextForm from './Components of React/TextForm';
import About from './Components of React/About';
import React, {useState} from 'react'
import Alert from './Components of React/Alert';
// import {
//    BrowserRouter, 
//    Routes,
//    Route,
//    Link
// }  from "react-router-dom";


function App() {
   const toggleMode=()=>{
      if(mode==='light')
      {
         setMode('dark');
         document.body.style.backgroundColor='#042743';
         showAlert("Dark mode enabled","success");
         // document.title='TextUtils - Dark Mode'
         // setInterval(()=>{
         // document.title='TextUtils is Amazing' ; 
         // },3000);
         //  setInterval(()=>{
         // document.title='Install Now' ; 
         // },1500);
      }
      else
      {
         setMode('light')
         document.body.style.backgroundColor='white';
         showAlert("Light mode enabled","success");
         // document.title='TextUtills - Light Mode'
      }
   }
   const showAlert=(message,type)=>{
      setAlert({
         message:message,
         type:type
      })
      setTimeout(() => {
         setAlert(null);
      }, 1250);
   }
   const [mode,setMode]=useState('light')
   const [alert,setAlert]=useState(null)

 return (
    <>
    {/* <BrowserRouter> */}
    <Navbar title="TextUtils" about="About Us" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
   <TextForm showAlert={showAlert} mode={mode}/>
    {/* <Routes>
     <Route path="/about" element={<About/>}/> */}
     {/* <Route path="/" element={
    {/* </Routes> */}
    </div>
    {/* </BrowserRouter> */}
    </>
 );
}
export default App;
