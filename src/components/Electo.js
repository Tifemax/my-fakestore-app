import React, { useContext } from "react";
import useFetch from "../components/useFetch";
import { truncateSentence } from "../helpers/helper";
import { FaDollarSign, FaStar } from "react-icons/fa";
import { CartContext } from "./CartContext";
import { Spinner } from "react-bootstrap";
import ele1 from '../images/ele1.jpeg'
import ele2 from '../images/ele2.jpeg'
import ele3 from '../images/ele3.jpeg'
import ele4 from '../images/ele4.jpeg'

function Electo() {
  const [data, error] = useFetch('https://fakestoreapi.com/products/category/electronics'); // custom hook
  const { addToCart } = useContext(CartContext);

  // Debugging: log data and error
  console.log("Data:", data);
  console.log("Error:", error);

  // if (error) {
  //   return <div>Error loading data.</div>;
  // }

  if (!data) {
    return (
      <div className="text-center my-5">
        <Spinner animation="border" variant="primary" /> {/* Spinner displayed while loading */}
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-lg-3">
           <img src={ele1}/>
          </div>
          <div className="col-md-3 col-lg-3">
           <img src={ele2}/>
          </div>
          <div className="col-md-3 col-lg-3">
           <img src={ele3}/>
          </div>
          <div className="col-md-3 col-lg-3">
           <img src={ele4}/>
          </div>
        </div>
      </div>
      <div className="row g-4 mb-5">
      <h2>Electronics</h2>
      {data.map(({ id, description, category, title, rating, image, price }) => (
        <div className="col-md-4 col-lg-4" key={id}>
          <div className="card h-100 d-flex flex-column" style={{ height: '550px' }}>
            <div className="card-img-top-wrapper" style={{ height: '300px', width: '100%' }}>
              <img
                src={image}
                className="card-img-top"
                alt={`Image of ${title}`}
                style={{ height: 'inherit', objectFit: 'fill' }}
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
              <button className="btn btn-primary mt-auto" onClick={() => addToCart({ id, title, price, image })}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
    
  );
}

export default Electo;
