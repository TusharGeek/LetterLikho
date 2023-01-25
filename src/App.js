import Home from "../src/Components/Home";
import Header from "../src/Components/Header";
import Letter from "../src/Components/Letter";
import Footer from "../src/Components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';


function App() {

  return (
    <div className="App m-0 px-5 py-5 max-w-3xl m-auto ">
      <Header/>
    
  
      <Routes>
        <Route path="/" element={  <Home/>}></Route>
        <Route path="/FeeConcession" element={<Letter/>}></Route>
      </Routes>

    
    
   
     <Footer/>

    </div>
  );
}

export default App;
