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
       
        <div className="footer_cointainer">
           <div className="row">
            <div className="col-lg-4 col-xl-4" style={{marginTop: '20px'}}>
            <h2><b>Fake Store App</b> <TbBuildingStore /> </h2>
            </div>
            <div className="col-lg-4 col-lg-3" style={{marginTop: '20px'}}>
            <h1 style={{color: 'red'}}><b>Categories :</b></h1>
            <p><b>Electronics</b></p>
            <p><b>Jewerely</b></p>
            <p><b>MensClothing</b></p>
            <p><b>WomansClothing</b></p>
            </div>

            <div className="col-lg-4 col-xl-3" style={{marginTop: '20px'}}>
            <p>Subscribe to our newletter to stay Updated</p>
            <input type="text" placeholder="Email" style={{borderRadius: '50px', border: '1px solid yellow'}}></input>
            <button type="button" class="btn btn-outline-danger">Subscribe</button>
            </div>
           </div>
        </div>
        <div className="footer_bottom" style={{backgroundColor: 'lightblack', textAlign: 'center'}}>
         <p><FaCircleDot />A Fake Store App <FaCircleDot />  Made by Tife</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  