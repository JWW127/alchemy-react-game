import React from "react";
import {IngredientsContainer} from "./components/IngredientsContainer";
import {Dash} from "./components/dash";

function App() {
  return (
    <div className="App">
      <div className="background">
        <main>
         <IngredientsContainer/>
          <div className="dash-container">
              <Dash />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
