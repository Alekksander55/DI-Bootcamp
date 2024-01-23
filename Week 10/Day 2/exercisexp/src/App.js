import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary.js";
import PostList from "./components/PostList.js";
import Example1 from "./components/Example1.js";
import Example2 from "./components/Example2.js";
import Example3 from "./components/Example3.js";

// Exercise 1
// const Home =(props)=>{
//   return <h1>Home</h1>
// }

// const Profile =(props)=>{
//   return <h1>Profile</h1>
// }
// const Shop =(props)=>{
//   throw new Error('An error has occured')
//   return <h1>Shop</h1>
// }

const fetchFunc = async () => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      key1: "myusername",
      email: "mymail@gmail.com",
      name: "Isaac",
      lastname: "Doe",
      age: 27,
    }),
  };
  const response = await fetch(
    "https://webhook.site/ef947cf3-79a3-4043-9de2-d34acbc7b83a",
    requestOptions
  );
  const data = await response.text();
   console.log(data)
};

function App() {
  return (
    <div className="App">

      <button onClick={fetchFunc}>FETCH POST</button>
      <PostList />
      <Example1 />
      <Example2 />
      <Example3 />

      {/* Exercise 1 */}
      {/*<nav>
      <Link to={'/'}>Home</Link> &nbsp;
      <Link to={'/profile'}>Profile</Link> &nbsp;
      <Link to={'/shop'}>Shop</Link>
     </nav>

     <Routes>
     <Route path='/' element={
        <ErrorBoundary fallback={<p>Oups.. Something went wrong !</p>}>
        <Home/>
        </ErrorBoundary>
        } />

        <Route path='/profile' element={
        <ErrorBoundary fallback={<p>Oups.. Something went wrong !</p>}>
        <Profile/>
        </ErrorBoundary>
        } />
        
        <Route path='/shop' element={
        <ErrorBoundary fallback={<p>Oups.. Something went wrong !</p>}>
        <Shop/>
        </ErrorBoundary>
        } />
        
      </Routes> */}
    </div>
  );
}

export default App;
