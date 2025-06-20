import React from 'react'

const Resbox = (props) => {
  return (
    
          <div className="resBox">
            <div className="resboximg1">
              <img src="src/assets/Ellipse1.png" alt="" />

            </div>
            <div className="resboximg2">
              <img src={props.imageSrc} alt="" />
            </div>
            <div className="resboximg3price">
              <h3>{props.dishprice}</h3>
            </div>
            <div className="resboxdes">
              <img src="src/assets/rating.png" alt="" />
              <h1>{props.dishname}</h1>
              <div className="resboxdesAb">

                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
              </div>
            </div>
            <div className="resboxbtn">
              <button>click me</button>
            </div>
          </div>
  )
}

export default Resbox