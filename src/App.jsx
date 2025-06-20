import React from 'react'
import Button from './components/button'
import Resbox from './components/Resbox'
import food1 from './assets/food1.png'
import food2 from './assets/food2.png'
import food3 from './assets/food3.png'
import food4 from './assets/food4.png'

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
        <Button />
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
          <div className="DeldecoImg">
            <img src="src/assets/decore.png" alt="" />
          </div>
          <div className="MainHeroDesText">
            Best cooks and best delivery guys all at your service. Hot tasty food will reach you in 60 minutes.
          </div>

          <div className="SearchBar">
            <img src="src/assets/search.png" alt="" />
            <input type="text" placeholder='Search for food' />
            <button><img src="src/assets/boxsearch.png" alt="" /></button>
          </div>

          <div className="HeroMedia">
            <Button />
            <button id='HeroMediaBtn2'><a href="#"><img src="src/assets/play button.png" alt="" /></a></button>
            <a href="#">Watch Video</a>
          </div>


        </div>



        <div className="Page1Right">
          <div className="fireChar">
            <img src="src/assets/emojione_fire.png" alt="" />
          </div>
          <div className="fooddishimg">
            <img src="src/assets/foodcard1.png" alt="" />
          </div>
          <div className="feedBack">
            <img src="src/assets/feedBack.png" alt="" />
          </div>
          <div className="MainCharacter">
            <img src="src/assets/maincharacter.png" alt="" />
          </div>
          <div className="MainCharElli">
            <img src="src/assets/ellipse.png" alt="" />
          </div>
          <div className="sizeMeals meal1">
            <img src="src/assets/meal1.png" alt="" />
          </div>
          <div className="sizeMeals meal2">
            <img src="src/assets/meal2.png" alt="" />
          </div>
          <div className=" meal3">
            <img src="src/assets/meal3.png" alt="" />
          </div>
          <div className=" meal4">
            <img src="src/assets/meal4.png" alt="" />
          </div>
          <div className="arrow1">
            <img src="src/assets/arrow1.png" alt="" />
          </div>


        </div>

        <div className="sliderDown">
          <img src="src/assets/slider.png" alt="" />
        </div>


      </div>

      <div className="Page2">
        <div className="page2HeroTxt">
          <h1>Today <span>special</span> offers</h1>
        </div>
        <div className="page2HeroTxt1">
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        </div>

        <div className="DownBox">
        <Resbox  imageSrc={food1} dishname={"Kebab"}  dishprice ={"20$"}/>
        <Resbox imageSrc={food2} dishname={"Chicken Tikka"} dishprice ={"40$"}/>
        <Resbox imageSrc={food3} dishname={"Desi Chowmein"} dishprice ={"30$"}/>
        <Resbox imageSrc={food4} dishname={"Chicken Chargha"} dishprice ={"50$"}/>

        </div>
        
        
      </div>



    </div>
  )
}

export default App