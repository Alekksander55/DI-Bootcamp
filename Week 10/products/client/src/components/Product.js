import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const Product = (props) => {
  const [product, setProduct] = useState()
  const params = useParams();

  useEffect(()=>{
    info()
  }, [])
  const info = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/api/products/${params.id}`)
      setProduct(res.data)
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <>
      <h1> Product </h1>
      {product? product.map((item)=> {
        return (
          <div key={item.product_id}>
            <h1>{item.product_name}</h1>
            <h2>{item.price}</h2>
            <p>{item.description}</p>
          </div>
          
        ) 
      }) : null
    }
    <Link to='/'>Go back</Link>
    </>
  );
};

export default Product;
