import React from 'react'
import ele1 from '../images/ele1.jpeg'
import ele2 from '../images/ele2.jpeg'
import ele3 from '../images/ele3.jpeg'
import ele4 from '../images/ele4.jpeg'
import Me2 from '../images/me2.jpeg'
import Me3 from '../images/me3.jpeg'
import Me4 from '../images/me4.jpeg'
import Wo2 from '../images/wo2.jpeg'
import Wo3 from '../images/wo3.jpeg'
import Wo4 from '../images/wo4.jpeg'
import Jewe2 from "../images/jewe2.jpeg"
import Jewe3 from "../images/jewe3.jpeg"
import Jewe4 from "../images/jewe4.jpeg"

function Wearables() {
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
      <div className="cointainer my-5">
        <div className="row">
          {/* <div className="col-md-3 col-lg-3">
           <img src={Jewe1}/>
          </div> */}
          <div className="col-md-4 col-lg-3">
           <img src={Jewe2}/>
          </div>
          <div className="col-md-3 col-lg-3">
           <img src={Jewe3}/>
          </div>
          <div className="col-md-3 col-lg-3">
           <img src={Jewe4}/>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Wearables