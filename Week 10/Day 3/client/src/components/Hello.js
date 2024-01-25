import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const Hello = (props) => {
  const [product, setProduct] = useState()
  const params = useParams();

  useEffect(()=>{
    info()
  }, [])
  const info = async () => {
    try {
      const res = await axios.get(`http://localhost:3001/hello/`)
      setProduct(res.data)
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <>
      <h1>{product}</h1>
    </>
  );
};

export default Hello;
