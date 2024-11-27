// import { FaCircleDot } from "react-icons/fa6";
// import { TbBuildingStore, TbHandLoveYou } from "react-icons/tb";
// import { Link } from "react-router-dom";

// const Footer = () => {
//     return (
//       <footer
//         style={{
//           backgroundColor: "black",
//           color: 'whitesmoke'
//         }}
//       >
        
       
//         <div className="footer_cointainer">
//            <div className="row">
//             <div className="col-lg-4 col-xl-4" style={{marginTop: '20px'}}>
//             <h2><b>Fake Store App</b> <TbBuildingStore /> </h2>
//             </div>
//             <div className="col-lg-4 col-lg-3" style={{marginTop: '20px'}}>
//             <h1 style={{color: 'red'}}><b>Categories :</b></h1>
//             <p ><b>Electronics</b></p>
//             <p><b>Jewerely</b></p>
//             <p><b>MensClothing</b></p>
//             <p><b>WomansClothing</b></p>
//             </div>

//             <div className="col-lg-4 col-xl-3" style={{marginTop: '20px'}}>
//             <p>Subscribe to our newletter to stay Updated</p>
//             <input type="text" placeholder="Email" style={{borderRadius: '50px', border: '1px solid yellow'}}></input>
//             <button type="button" class="btn btn-outline-danger">Subscribe</button>
//             </div>
//            </div>
//         </div>
//         <div className="footer_bottom" style={{backgroundColor: 'lightblack', textAlign: 'center'}}>
//          <p><FaCircleDot />A Fake Store App <FaCircleDot />  Made by Tife</p>
//         </div>
//       </footer>
//     );
//   };
  
//   export default Footer;
  
import React from 'react';
import { FaCircleDot } from "react-icons/fa6"; 
import { TbBuildingStore, TbHandLoveYou } from "react-icons/tb"; 
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "black",
        color: 'whitesmoke'
      }}
    >
      <div className="footer_container">
        <div className="row">
          <div className="col-lg-4 col-xl-4" style={{marginTop: '20px'}}>
            <h2><b>Fake Store App</b> <TbBuildingStore /> </h2>
          </div>
          <div className="col-lg-4 col-lg-3" style={{marginTop: '20px'}}>
            <h1 style={{color: 'Yellow'}}><b>Categories :</b></h1>
            <Link to="/electronics" style={{textDecoration: 'none', color: 'red'}}>
              <p><b>Electronics</b></p>
            </Link>
            <Link to="/jewelry" style={{textDecoration: 'none', color: 'red'}}>
              <p><b>Jewelry</b></p>
            </Link>
            <Link to="/MensClothing" style={{textDecoration: 'none', color: 'red'}}>
              <p><b>Men's Clothing</b></p>
            </Link>
            <Link to="/womens-clothing" style={{textDecoration: 'none', color: 'red'}}>
              <p><b>Women's Clothing</b></p>
            </Link>
          </div>
          <div className="col-lg-4 col-xl-3" style={{marginTop: '20px'}}>
            <p>Subscribe to our newsletter to stay Updated</p>
            <input 
              type="text" 
              placeholder="Email" 
              style={{
                borderRadius: '50px', 
                border: '1px solid yellow',
                padding: '5px 15px',
                width: '100%',
                marginBottom: '10px'
              }}
            />
            <button type="button" className="btn btn-outline-danger">Subscribe</button>
          </div>
        </div>
      </div>
      <div 
        className="footer_bottom" 
        style={{
          backgroundColor: 'lightblack', 
          textAlign: 'center',
          padding: '10px 0'
        }}
      >
        <p>
          <FaCircleDot /> A Fake Store App <FaCircleDot /> Made by Tife
        </p>
      </div>
    </footer>
  );
};

export default Footer;