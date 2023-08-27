import './App.css';
import {amountOfTvSold} from './constants/helperSoldTV.js'
import {amountOfTVBought} from "./constants/amountBought.js";



function App() {


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

          </div>
      </>
  )
}

export default App
