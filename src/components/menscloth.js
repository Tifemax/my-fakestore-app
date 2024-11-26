import React, { useContext } from "react";
import useFetch from "../components/useFetch";
import { truncateSentence } from "../helpers/helper";
import { FaDollarSign, FaStar } from "react-icons/fa";
import { CartContext } from "./CartContext";
import Me1 from '../images/me1.jpg'
import Me2 from '../images/me2.jpeg'
import Me3 from '../images/me3.jpeg'
import Me4 from '../images/me4.jpeg'


function menscloth() {
  const [data, error] = useFetch("https://fakestoreapi.com/products/category/men's clothing"); // custom hook  women's clothing"
  const { addToCart } = useContext(CartContext);

  

  // if (error) {
  //   return <div>Error loading data.</div>;
  // }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="cointainer-fluid my-5">
        <div className="row">
          <div className="col-md-3 col-lg-3 ">
            <img src={Me3}/>
          </div>
          <div className="col-md-3 col-lg-3 ">
            <img src={Me4}/>
          </div>
          <div className="col-md-3 col-lg-3">
            <img src={Me2}/>
          </div>
          
        </div>
      </div>
      <div className="container my-5">
      <div className="row g-4">
        {data.map(
          ({ id, description, category, title, rating, image, price }) => (
            <div className="col-md-4 col-lg-3" key={id} >
              <div className="card h-100 d-flex flex-column" style={{height:'550px'}}>
                <div className="card-img-top-wrapper" style={{height:'300px', width:'100%'}}>
                  <img
                    src={image}
                    className="card-img-top"
                    alt={`Image of ${title}`} style={{
                       height:'inherit',
                       objectFit:'fill'
                    }}
                  />
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text fst-italic">
                    {truncateSentence(description)}
                  </p>
                  <p className="card-text text-italic">{category}</p>
                  <p className="card-text text-italic"><FaDollarSign />{price}</p>
                  <p className="card-text text-italic">
                    {rating.rate}
                    <FaStar color="yellow" />
                  </p>
                  {/* <button className="btn btn-primary mt-auto"> */}
                  <button className="btn btn-primary mt-auto" onClick={() => addToCart({ id, title, price, image })}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
    </div>
    
  );
}

export default menscloth;