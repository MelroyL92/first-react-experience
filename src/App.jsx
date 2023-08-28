import './App.css';
import {amountOfTvSold} from './constants/helperSoldTV.js'
import {amountOfTVBought} from "./constants/amountBought.js";
import {amountToBeSold} from "./constants/amountToBeSold.js";
import {tvName} from "./constants/helperTVString.js";
import {priceOfTV} from "./constants/tvPrice.js";
import {tvSize} from "./constants/tvSize.js";
import {tvImage} from "./constants/tvImage.js";
import checkImage from './assets/check.png'
import minusImage from './assets/minus.png'


function App() {


    function meestVerkocht(meeste) {
        console.log("deze wordt het" + meeste + " verkocht")
    }

    function goedkoopste(goedkoopste) {
        console.log("deze zijn het " + goedkoopste)
    }

    function sport(sport) {
        console.log("deze wordt het meeste gebruikt voor " + sport)
    }

    return (
      <>
      <h1>Verkoopoverzicht tv!</h1>
          <div className={"parentContainer"}>
              <div className={"green-container"}>
                  <h2>Numbers Sold</h2>
                  <p>{amountOfTvSold()}</p>
              </div>
              <div className={"blue-container"}>
                  <h2>Numbers Stocked</h2>
                  <p>{amountOfTVBought()}</p>
              </div>
              <div className={"orange-container"}>
                  <h2>Numbers to sale</h2>
                  <p>{amountToBeSold()}</p>
              </div>
          </div>

      <h2>Best selling tv</h2>
          <div className={"best-selling-tv"}>
              <div className={"product-picture"}>
                  <img src={tvImage(0)} alt="image-of-a-tv" className={"picture-size"}/>
              </div>
              <div className={"product-information"}>
                  <p>{tvName(0)}</p>
                  <p>{priceOfTV(0)}</p>
                  <p>{tvSize(0)}</p>
                  <div className={"specs-class"}>
                  <div>
                      <img src={checkImage} alt="Check Image" />
                      wifi</div>
                  <div>
                      <img src={minusImage} alt="unchecked Image" />
                      speech
                  </div>
                  <div >
                      <img src={checkImage} alt="Check Image" />
                      HDR</div>
                  <div >
                      <img src={checkImage} alt="Check Image" />
                      bluetooth</div>
                  <div>
                      <img src={minusImage} alt="unchecked Image" />
                      ambilight</div>
                  </div>
              </div>
          </div>
          <div>
              <h2>Alle tv's</h2>
              <div className={"button-class"}>
                  <button type= "button" onClick={() => meestVerkocht("meeste")}>Meest verkocht eerst</button>
                  <button type= "button" onClick={() => goedkoopste("goedkoopste")}>Goedkoopste eerst</button>
                  <button type= "button" onClick={() => sport("sport")}>meest geschikt voor sport</button>
              </div>
              <div className={"best-selling-tv"}>
                  <div className={"product-picture"}>
                      <img src={tvImage(1)} alt="image-of-a-tv" className={"picture-size"}/>
                  </div>
                  <div className={"product-information"}>
                      <p>{tvName(1)}</p>
                      <p>{priceOfTV(1)}</p>
                      <p>{tvSize(1)}</p>
                      <div className={"specs-class"}>

                          <div>
                              <img src={checkImage} alt="Check Image" />
                              wifi</div>
                          <div>
                              <img src={minusImage} alt="unchecked Image" />
                              speech
                          </div>
                          <div >
                              <img src={checkImage} alt="Check Image" />
                              HDR</div>
                          <div >
                              <img src={checkImage} alt="Check Image" />
                              bluetooth</div>
                          <div>
                              <img src={minusImage} alt="unchecked Image" />
                              ambilight</div>
                      </div>
                  </div>
              </div>
              <div className={"best-selling-tv"}>
                  <div className={"product-picture"}>
                      <img src={tvImage(2)} alt="image-of-a-tv" className={"picture-size"}/>
                  </div>
                  <div className={"product-information"}>
                      <p>{tvName(2)}</p>
                      <p>{priceOfTV(2)}</p>
                      <p>{tvSize(2)}</p>
                      <div className={"specs-class"}>
                          <div>
                              <img src={checkImage} alt="Check Image" />
                              wifi</div>
                          <div>
                              <img src={minusImage} alt="unchecked Image" />
                              speech
                          </div>
                          <div >
                              <img src={checkImage} alt="Check Image" />
                              HDR</div>
                          <div >
                              <img src={checkImage} alt="Check Image" />
                              bluetooth</div>
                          <div>
                              <img src={minusImage} alt="unchecked Image" />
                              ambilight</div>
                      </div>
                  </div>
              </div>
              <div className={"best-selling-tv"}>
                  <div className={"product-picture"}>
                      <img src={tvImage(3)} alt="image-of-a-tv" className={"picture-size"}/>
                  </div>
                  <div className={"product-information"}>
                      <p>{tvName(3)}</p>
                      <p>{priceOfTV(3)}</p>
                      <p>{tvSize(3)}</p>
                      <div className={"specs-class"}>
                          <div>
                              <img src={checkImage} alt="Check Image" />
                              wifi</div>
                          <div>
                              <img src={minusImage} alt="unchecked Image" />
                              speech
                          </div>
                          <div >
                              <img src={checkImage} alt="Check Image" />
                              HDR</div>
                          <div >
                              <img src={checkImage} alt="Check Image" />
                              bluetooth</div>
                          <div>
                              <img src={minusImage} alt="unchecked Image" />
                              ambilight</div>
                      </div>
                  </div>
              </div>
              <div className={"best-selling-tv"}>
                  <div className={"product-picture"}>
                      <img src={tvImage(4)} alt="image-of-a-tv" className={"picture-size"}/>
                  </div>
                  <div className={"product-information"}>
                      <p>{tvName(4)}</p>
                      <p>{priceOfTV(4)}</p>
                      <p>{tvSize(4)}</p>
                      <div className={"specs-class"}>
                          <div>
                              <img src={checkImage} alt="Check Image" />
                              wifi</div>
                          <div>
                              <img src={minusImage} alt="unchecked Image" />
                              speech
                          </div>
                          <div >
                              <img src={checkImage} alt="Check Image" />
                              HDR</div>
                          <div >
                              <img src={checkImage} alt="Check Image" />
                              bluetooth</div>
                          <div>
                              <img src={minusImage} alt="unchecked Image" />
                              ambilight</div>
                      </div>
                  </div>
              </div>






          </div>
      </>
  )
}

export default App
