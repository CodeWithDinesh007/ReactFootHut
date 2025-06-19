import React from 'react'

const App = () => {
  return (
    <div id="Main">
      <nav>
        <div className="Logo">
          <img src="src/assets/logo.png" alt="Company Logo" />
        </div>
        <div className="Menu">
          <a href="#">Today special offers</a>
          <a href="#">Why FoodHut</a>
          <a href="#">Our Menu</a>
          <a href="#">Our Popular food</a>
        </div>
        <div className="btn">
          <button>Download App</button>
        </div>
      </nav>

      <div className="Arrowimg">
        <img src="src/assets/arrow.png" alt="Arrow" />
      </div>
      <div className="Page1">
        <div className="Page1Left">
            <div className="smallBoxPeopleTrustUs">
              <img src="src/assets/hearticon.png" alt="" />
              <p>People trust us</p>
            </div>
            <div className="MainHeroTxt">
            <h1>We're <span>Serious</span>  For</h1>
            <h1><span>Food</span> & Delivery.</h1>
            </div>
            <div className="MainHeroDesText">
            Best cooks and best delivery guys all at your service. Hot tasty food will reach you in 60 minutes.
            </div>
        </div>
        <div className="Page1Right">

        </div>
      </div>
    </div>
  )
}

export default App