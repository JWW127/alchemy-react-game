import React, { useEffect, useState } from "react";
import { IconType } from "react-icons";
import {
  GiCampfire,
  GiGroundSprout,
  GiSteam,
  GiWaterDrop,
  GiIceCube,
} from "react-icons/gi";
import {  SiTailwindcss} from 'react-icons/si'

interface ingredient {
  name: string;
  isActive: boolean;
  icon?: IconType;
  color: string;
  mix?: string
}

const ingredientsArr: ingredient[] = [
  {
    name: "fire",
    icon: GiCampfire,
    color: "red",
    isActive: true,
  },
  {
    name: "water",
    icon: GiWaterDrop,
    color: "blue",
    isActive: true,
  },
  {
    name: "air",
    icon: SiTailwindcss,
    color: "white",
    isActive: true,
  },
  {
    name: "earth",
    icon: GiGroundSprout,
    color: "brown",
    isActive: true,
  },
  {
    name: "steam",
    icon: GiSteam,
    color: "white",
    mix: "firewater",
    isActive: false
  },
  {
    name: "ice",
    icon: GiIceCube,
    color: "blue",
    mix: "airwater",
    isActive: false
  }
];

const isActiveArr: ingredient[] = ingredientsArr.filter(
  (ingredient) => ingredient.isActive === true
);

// const notActiveArr: ingredient[] = ingredientsArr.filter(
//   (ingredient) => ingredient.isActive === false
// );

//! should we use active and not active and just pop from one to another?


export const Ingredient: React.FC = () => {
  const [currentIngredients, setIngredients] = useState(isActiveArr);
  const [combo, setCombo] = useState<string[] >([])

  //button click will update combo array
  function handleUpdate(data: ingredient) {
    if(combo.length < 2) {
     setCombo((combo) => [...combo, data.name])
    }
  }
 
  //checks combo vs ingredient.mix to see if valid ingredient
  useEffect(() => {
    if(combo.length === 2){
      let comboCheck = combo.join('')
      let comboCheckReverse = combo.reverse().join('')
        console.log(comboCheck, comboCheckReverse)
      ingredientsArr.forEach(item => {
          console.log(item.mix)
            //forward check ex. firewater
        if(item.mix === comboCheck) {
             return setIngredients([...currentIngredients, item])
        }
            //backwards check ex waterfire
        if(item.mix === comboCheckReverse){
             return setIngredients([...currentIngredients, item])
        }
      })
      setCombo([])
    }

  },[combo, currentIngredients])

  return (
    <>
      {currentIngredients.map((data: any) => (
        <div className="ingredient" key={data.name}>
          <button
            key={data.name}
            onClick={()=>handleUpdate(data)}
          >
            <data.icon key={data.name} className={data.color} />
          </button>
        </div>
      ))}
    </>
  );
};

export default Ingredient;
