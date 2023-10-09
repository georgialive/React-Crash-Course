import React, { useState } from "react";

function Counter() {

  const [cart, setCart] = useState({ 
    item: " Apple", 
    quantity: 0,
  });

  function addApple() {
    setCart(prevCart => ({
      ...prevCart,
      quantity: prevCart.quantity + 1,
    }))
  }

  //1. Use a callback to get the previous value
  //2. Spread out all the properties of the previous state
  //3. Only change the properties that you need to change

  function subtractApple() {
    setCart(prevCart => ({
      ...prevCart,
      quantity: prevCart.quantity - 1,
    }))
  }

  // const [counter, setCounter] = useState(0);

  // function incrementCounter() {
  //   setCounter((prevCounter) => prevCounter + 1);
  //   setCounter((prevCounter) => prevCounter + 1);
  // }

  // function decrementCounter() {
  //   setCounter((prevCounter) => prevCounter - 1);
  //   setCounter((prevCounter) => prevCounter - 1);
  // }


  return (
    <>
      <button onClick={subtractApple}>-</button>
      {cart.quantity}
      {cart.item}
      <button onClick={addApple}>+</button>
    </>
  );
}

export default Counter;
