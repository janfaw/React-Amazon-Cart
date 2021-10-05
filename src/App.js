import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './Componenets/Header';
import CartItems from './Componenets/CartItems';
import CartTotal from './Componenets/CartTotal';
import Data from './Data';

function App() {
  const title ="Amazon Cart";

  const [cartItems,setCartItems]=useState(Data);
  
  return (
   
    <div className="App">
        <Header title={title}/>
        <div className="App-main">
         <CartItems items={cartItems} setCartItems={setCartItems}/>
         <CartTotal items={cartItems}/>
        </div>
    </div>
  );
}
export default App;
