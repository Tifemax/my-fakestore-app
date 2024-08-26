import { TbBuildingStore, TbHandLoveYou } from "react-icons/tb";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
      <footer
        style={{
          backgroundColor: "black",
          color: "white",
          
          textAlign: "center",
          width: "100%",
        }}
      >
        {/* <h1>React App</h1>
        <p>&copy; TifeMaxi</p> */}
        <div className="container-fluid d-flex">
          <div style={{ marginTop: '60px'}}>
            <h2>Fake Store App <TbBuildingStore /> </h2>
            <h4>Made with <TbHandLoveYou /> by Tife</h4>
          </div>
          <div style={{ marginLeft: '250px'}}>
            <h1><b>Categories :</b></h1>
            <p><b>Electronics</b></p>
            <p><b>Jewerely</b></p>
            <p><b>MensClothing</b></p>
            <p><b>WomansClothing</b></p>
          </div>
          <div style={{ marginLeft: '200px', marginTop: '60px', overflow: 'hidden'}}>
            <input type="text" placeholder="Email" style={{borderRadius: '50px', border: '1px solid yellow'}}></input>
            <button type="button" class="btn btn-outline-danger">Subscribe</button>
          </div>
           
           
          
        
        </div>
      </footer>
    );
  };
  
  export default Footer;
  