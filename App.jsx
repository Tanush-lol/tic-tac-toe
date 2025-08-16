import React from 'react';
import { useState } from 'react';
import './App.css';
import myImage from './assets/me.jpg';

function Lol(){
  return(
    <>
    <p>This is a react comp</p>
    </>
  )
}

  let integer = 5;
// This will increment the integer by 1

function MyButton() {
  const[count, setCount] = React.useState(integer);

    function checkOddEven(num){
    if(num % 2 === 0){
      return 'Even';
    } else {
      return 'Odd';
    }
  }
  

  return (
    <>
    <p>{count}</p>
     <p>{checkOddEven(count)}</p>  
    <button onClick={() => {setCount(count + 1);turn();}}>
         
      Click me</button>
    </>
    
  );
}
console.log({integer});

  integer= integer + 1; 

function App() {
  <Lol />



  return (
    <>
    <Lol />
    <p>{integer}</p>
    <p>My name's Tanush</p>

    </>
  )
}



const user = {
  name: 'Hedy Lamarr',
  imageUrl: myImage,
  imageSize: 90,
};
function LogForm(){
  return(
    <form>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <br />
      <label>
        Password:
        <input type="password" name="password" />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}



function Loggedin(){
  return(
    <p>Logged in</p>
  )
}
  const products = [
    { id: 1, name: '1', price: 1000 },
    { id: 2, name: '2', price: 500 },
    { id: 4, name: '4', price: 500 },
    { id: 3, name: '3', price: 300 },
  ];

function List(){
  const ListItems=products.map(product =>
    <li key={product.id}>
      {product.name}
      </li>
  )
  return (
    <ul>
      {ListItems}
    </ul>
  );

}

export default function MyApp(){

    const [isLoggedIn, setIsLoggedIn] = React.useState(false);

function turn(){
  setIsLoggedIn(true);
}

  let content = isLoggedIn ? <Loggedin /> : <LogForm />;

    return (
    <div>
      <MyButton />
      <App />
            <h1>{user.name}</h1>
      <img className="avatar" src={user.imageUrl} alt={'Photo of ' + user.name}/>
      {content}
      <List />

    </div>
  );
}
