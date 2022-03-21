import React, { useState } from "react";
import { IngredientsContainer } from "./components/IngredientsContainer";
import { Dash } from "./components/dash";

function App() {

  const [modal, setModal] = useState<string>("modal");
  const [clock, setClock] = useState<boolean>(false);
  const clickStart = ():void => {
      setModal("no-modal")
      setClock(true)
  }

    
  return (
    <div className="App">
      <div className="background">
        <main>
        <button className={modal} onClick={clickStart}>CLICK TO START</button>
         <IngredientsContainer />
          <div className="dash-container">
             <Dash startClock={clock}/>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
