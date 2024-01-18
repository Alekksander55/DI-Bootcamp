import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'tachyons'


// const arr = [
//   {id:1, name:'Iphone', price:700},
//   {id:2, name:'Samsung', price:600},
//   {id:3, name:'Xiaomi', price:200},
//   {id:4, name:'Oppo', price:400},
//   {id:5, name:'Google', price:500},
// ]


// const element = (
// <div>
//  {
//   arr.map(item => {
//     return (
//       <div>
//         <h1>
//         {item.name}   {item.price}
//         </h1>
//         <h2>{item.id}</h2>
//       </div>
//     )
//   })
//  }
// </div>)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
     <App /> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
