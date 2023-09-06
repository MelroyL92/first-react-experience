import './App.css';
import {amountOfTvSold} from './constants/helperSoldTV.js'
import {amountOfTVBought} from "./constants/amountBought.js";
import {amountToBeSold} from "./constants/amountToBeSold.js";
import {allTV, tvName} from "./constants/helperTVString.js";
import {priceOfTV} from "./constants/tvPrice.js";
import {tvSize} from "./constants/tvSize.js";
import {tvImage} from "./constants/tvImage.js";
import checkImage from './assets/check.png';
import minusImage from './assets/minus.png';
import {comparePrice, compareRefresh, compareSoldItems} from "./constants/assets/calculations.js";


function App() {

    function meestVerkocht() {
        const sortedItems = [...allTV].sort(compareSoldItems);
        console.log(sortedItems);
    }

    function goedkoopste() {
        const sortedItems = [...allTV].sort(comparePrice);
        console.log(sortedItems)
    }

    function sport() {
        const sortedItems = [...allTV].sort(compareRefresh);
        console.log(sortedItems);
    }

    function checkAndMinus(array) {
        const availableOptions = allTV[array].options.map((option) => {
            if (option.applicable === true) {
                switch (option.name) {
                    case "wifi":
                    case "speech":
                    case "hdr":
                    case "bluetooth":
                    case "ambilight":
                        return (
                            <div key={`${option.name}-${allTV[array].type}` }>
                                <img src={checkImage} alt="Check Image" />
                                {option.name}
                            </div>
                        );
                    default:
                        return null; // Return null for unhandled options
                }
            } else {
                return (
                    <div key={`${option.name}-${allTV[array].type}`}>
                        <img src={minusImage} alt="Minus Image" />
                         {option.name.toLowerCase()}
                    </div>
                );
            }
        });

        return (
            <div className={"options-class"}>
                {availableOptions}
            </div>
        );
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
          <div className={"main-container"}>
              <div className={"product-picture"}>
                  <img src={tvImage(0)} alt="image-of-a-tv" className={"picture-size"}/>
              </div>
              <div className={"product-information"}>
                  <h3>{tvName(0)}</h3>
                  <p>{priceOfTV(0)}</p>
                  <p>{tvSize(0)}</p>
                  <div>{checkAndMinus(0)}</div>
              </div>
          </div>
          <div>
              <h2>Alle tv's</h2>
              <div className={"button-container"}>
                  <button type= "button" className={"button-class"} onClick={() => meestVerkocht("")}>Meest verkocht eerst</button>
                  <button type= "button" className={"button-class"} onClick={() => goedkoopste("")}>Goedkoopste eerst</button>
                  <button type= "button" className={"button-class"} onClick={() => sport("")}>meest geschikt voor sport</button>
              </div>
              <div className={"main-container"}>
                  <div className={"product-picture"}>
                      <img src={tvImage(1)} alt="image-of-a-tv" className={"picture-size"}/>
                  </div>
                  <div className={"product-information"}>
                      <h3>{tvName(1)}</h3>
                      <p>{priceOfTV(1)}</p>
                      <p>{tvSize(1)}</p>
                      <div>{checkAndMinus(1)}</div>
                  </div>
              </div>
              <div className={"main-container"}>
                  <div className={"product-picture"}>
                      <img src={tvImage(2)} alt="image-of-a-tv" className={"picture-size"}/>
                  </div>
                  <div className={"product-information"}>
                      <h3>{tvName(2)}</h3>
                      <p>{priceOfTV(2)}</p>
                      <p>{tvSize(2)}</p>
                      <div>{checkAndMinus(2)}</div>
                  </div>
              </div>
              <div className={"main-container"}>
                  <div className={"product-picture"}>
                      <img src={tvImage(3)} alt="image-of-a-tv" className={"picture-size"}/>
                  </div>
                  <div className={"product-information"}>
                      <h3>{tvName(3)}</h3>
                      <p>{priceOfTV(3)}</p>
                      <p>{tvSize(3)}</p>
                      <div>{checkAndMinus(3)}</div>
                  </div>
              </div>
              <div className={"main-container"}>
                  <div className={"product-picture"}>
                      <img src={tvImage(4)} alt="image-of-a-tv" className={"picture-size"}/>
                  </div>
                  <div className={"product-information"}>
                      <h3>{tvName(4)}</h3>
                      <p>{priceOfTV(4)}</p>
                      <p>{tvSize(4)}</p>
                      <div>{checkAndMinus(4)}</div>
                  </div>
              </div>
              <div className={"main-container"}>
                  <div className={"product-picture"}>
                      <img src={tvImage(5)} alt="image-of-a-tv" className={"picture-size"}/>
                  </div>
                  <div className={"product-information"}>
                      <h3>{tvName(5)}</h3>
                      <p>{priceOfTV(5)}</p>
                      <p>{tvSize(5)}</p>
                      <div>{checkAndMinus(5)}</div>
                  </div>
              </div>
              <div className={"main-container"}>
                  <div className={"product-picture"}>
                      <img src={tvImage(6)} alt="image-of-a-tv" className={"picture-size"}/>
                  </div>
                  <div className={"product-information"}>
                      <h3>{tvName(6)}</h3>
                      <p>{priceOfTV(6)}</p>
                      <p>{tvSize(6)}</p>
                      <div>{checkAndMinus(6)}</div>
                  </div>
              </div>
              <div className={"main-container"}>
                  <div className={"product-picture"}>
                      <img src={tvImage(7)} alt="image-of-a-tv" className={"picture-size"}/>
                  </div>
                  <div className={"product-information"}>
                      <h3>{tvName(7)}</h3>
                      <p>{priceOfTV(7)}</p>
                      <p>{tvSize(7)}</p>
                      <div>{checkAndMinus(7)}</div>
                  </div>
              </div>
              <div className={"main-container"}>
                  <div className={"product-picture"}>
                      <img src={tvImage(8)} alt="image-of-a-tv" className={"picture-size"}/>
                  </div>
                  <div className={"product-information"}>
                      <h3>{tvName(8)}</h3>
                      <p>{priceOfTV(8)}</p>
                      <p>{tvSize(8)}</p>
                      <div>{checkAndMinus(8)}</div>
                  </div>
              </div>
          </div>
      </>
  )
}

export default App
