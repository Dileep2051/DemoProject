
import './App.css';
// import Header from './components/Header/Header';
import Main from './components/ContextAPI-Task/Main';
// // import Header from './components/Context_task/Header';
// import Mainpage from './components/Demo1/Mainpage';
// import ReverseTextarea from './components/Demo1/ReverseTextarea';

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import New from './components/New/New';

// import Listgroup from './components/Listgroup/Listgroup';
// import Home from './components/Github/Home/Home';
// import Carousel from './components/Carousel/Carousel';
// import Login from './components/Forms/Login';
// import PaginationComp from './components/Pagination/PaginationComp';
// import ModalComp from './components/Modal/ModalComp';

import Header from './components/Routing/Header';
import Help from './components/Routing/Help';
import Home from './components/Routing/Home';
import Product from './components/Routing/Product';
import Profile from './components/Routing/Profile';
import Pagenotfound from './components/Routing/Pagenotfound';
import { Route, Routes, Navigate } from 'react-router-dom';
import Electronics from './components/Routing/Electronics';
import Jewellery from './components/Routing/Jewellery';
import ProductDetails from './components/Routing/ProductDetails';
import CountReducer from './components/CountReducer/CountReducer';
import InputComp from './components/Redux/component/InputComp';
import City from './components/Redux/component/City';
import Info from './components/Redux/component/Info';
import Cart from './components/Routing/Cart';

function App(){
  
  return(
    <div className="App" >
      <New />
      <Header />
      <InputComp />
      <City />
      <Info />
      
      <Routes> 
        <Route path="/" element={<Home />} />
    
        <Route path="/product" element={<Product />} > 
          <Route path="" element={<Navigate to="electronics" />} />
          <Route path="electronics" element={<Electronics />} />   
          <Route path="jewellery" element={<Jewellery />} />
        </Route>

        <Route path="/profile" element={<Profile />} />
        <Route path="/help" element={<Help />} />
        <Route path="/productdetails/:id/:price" element={<ProductDetails />} />

        <Route path="/countreducer" element={<CountReducer />} />
        <Route path="/cart" element={<Cart />} />
          
        <Route path="*" element={<Pagenotfound/>} /> 
      
      </Routes>
      
    </div>
  );
};

export default App;


