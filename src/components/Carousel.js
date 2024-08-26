import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import st1 from '../images/ele1.jpeg'
import st2 from '../images/st2.png'
import st3 from '../images/ele3.jpeg'
import st4 from '../images/me3.jpeg'

function Carousel() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products?limit=5');
        const resJson = await response.json();
        setProducts(resJson);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='homepage container-fluid'>
      <div className="carousel-container">
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className='tyyt'>
            <img src={product.image} alt={product.title} />
          </div>
        ))}
      </Slider>
    </div>
    <div className='container my-5'>
      <div className='row'>
        <div className='col-md-4 col-lg-3'>
         <img src= {st1}></img>
        </div>
        <div className='col-md-4 col-lg-3'>
         <img src= {st2}></img>
        </div>
        <div className='col-md-4 col-lg-3'>
         <img src= {st3}></img>
        </div>
        <div className='col-md-4 col-lg-3'>
         <img src= {st4}></img>
        </div>
      </div>
     
    </div>
    </div>
    
  );
}

export default Carousel;
