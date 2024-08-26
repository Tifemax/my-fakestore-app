import React from "react";
import useFetch from "../components/useFetch";
import { truncateSentence } from "../helpers/helper";
import { FaDollarSign, FaStar } from "react-icons/fa";
import Wo1 from '../images/wo1.jpeg'
import Wo2 from '../images/wo2.jpeg'
import Wo3 from '../images/wo3.jpeg'
import Wo4 from '../images/wo4.jpeg'

function WomansClothing() {
  const [data, error] = useFetch("https://fakestoreapi.com/products/category/women's clothing"); // custom hook  "

  // if (error) {
  //   return <div>Error loading data.</div>;
  // }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="container my-5">
      <div className="row">
        <div className="col-md-5 col-lg-5">
          <img src={Wo4} style= {{width: '70%', height: '100%'}}/>
        </div>
        <div className="col-md-4 col-lg-4 mx-auto">
          <img src={Wo4}/>
        </div>
        <div className="col-md-4 col-lg-4">
          <img src={Wo3}/>
        </div>
        <div className="col-md-4 col-lg-4 mx-auto">
          <img src={Wo2}/>
        </div>
        

      </div>
      </div>
      <div className="container my-5">
      <div className="row g-4">
        {data.map(
          ({ id, description, category, title, rating, image, price }) => (
            <div className="col-md-4 col-lg-4" key={id} >
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
                  <button className="btn btn-primary mt-auto">
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

export default WomansClothing