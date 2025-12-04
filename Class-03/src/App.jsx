//* SO aaj ki class me hum seekhne wale react-router-dom :)
//* jab bh me react router dom ka use krooga mujhe hamesha phele isko install krna lazmi hai   
//* ab hum react router dom ka use karte kyu hen? Do you know jab hum html ke through work karte the tw ultiple files create karte the means contact.html, about.html tww jese hi me link pe click karta tha about.html ke link pe tww me us page pe shift ho jata tha right tww isii tarah react me ye hota hai ke app files create nh karte balke app use karte ho react router dom ka app isko install kro gay !

//* then iske andar hamare pass hote hen BrowserRouter, Routes & Route isko hum import karte hen kaha se? react router dom se ok ! ab app yaha pe:
//* BrowserRouter: parent hai <Routes></Routes> ka OK!
//* Routes: parent hai <Route/> ka OK !!
//* Route: ko consider kro gay ke ye apki wo file hai means jaha app path pass kro gay html me kiya path hota tha? about.html app react me yuh pass kro <Route path="/about" element={<About />} /> path samj agaya apko? element kiya hai element ap yaha pe ju bh component call krwao gay wo broswer pe show ho jai kis path pe? jab me likho ga localhost:5173/about got it !! 

//* Ab then hamare pass hota hai link jese hum html me link and href likhte the yaha hum 
//* {/* <link rel="stylesheet" href="" />  react me is tarah link ko use nh kar sakta ho  */}


import {BrowserRouter, Route, Routes} from "react-router-dom"
import './App.css'
import Contact from "./Contact/contact"
import Home from "./Home/home"
import About from "./About/about"

function App() {

  return (
  <>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/about" element={<About />} />
  </Routes>
  </BrowserRouter>
  </>
  )
}

export default App
