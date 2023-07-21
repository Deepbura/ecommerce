import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Login from "./pages/Login";
import Register from './pages/Register';
import {BrowserRouter , Route , Routes} from "react-router-dom";
import Productscat from './pages/Productscat';


function App() {
  return (
   <>
   <div>
    <Header/>
    <BrowserRouter>
       
       <Routes>
       <Route path='/login' element={<Login/>} /> 
       <Route path='/Register' element={<Register/>} />
       <Route path='/Productscat/:id' element={<Productscat/>} /> 
       <Route path='/' element={<Home/>}/>
       
       
    
       </Routes>
      
      </BrowserRouter>
    <Footer/>
   </div>

   </>
  );
}

export default App;