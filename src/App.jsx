import {Routes, Route} from 'react-router-dom';
import {Home} from'./pages/home';
import {About} from './pages/about';
import { Contact } from './pages/contact';
import { Services } from './pages/services';

import {NavBar} from "./components/navbar";
import {Products} from "./pages/Products";


function App() {
return (
  <>
  <NavBar/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/services" element={<Services/>}/>
    <Route path="/products/:productId" element ={<Products/>}/> 
</Routes>
</>
);
}

export default App
