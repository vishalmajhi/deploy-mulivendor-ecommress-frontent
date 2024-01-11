import React, { useEffect } from 'react'
import {useSelector} from 'react-redux'
import Store from '../src/redux/store'
import {LoginPage,SignupPage,Homepage ,ActivationPage, ProductPage, ProductDetailpage, ProfilePage,Shoploginpage, CreateSellershopPage} from './Routes/Route'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { loadUser } from './redux/action/user';
function App() {
  const {loading , isAuthenticated}=useSelector((state)=>state.user);
  useEffect(()=>{
    Store.dispatch(loadUser());
  },[]);
  return (
    <>
    <BrowserRouter>
    
    <Routes>
     
        <Route path="/login" element={<LoginPage />} />
        <Route path="/Signup" element={<SignupPage />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/product/:name" element={<ProductDetailpage />} />
        <Route path="/profilepage" element={<ProfilePage/>} />
        <Route path="/SellershopPage" element={< CreateSellershopPage />}/>
        <Route path="/shop-login" element={<Shoploginpage/>} />
        <Route
          path="/activation/:activation_token"
          element={<ActivationPage />}
        />
        </Routes>
    
    </BrowserRouter>
     
    </>
  )
}

export default App