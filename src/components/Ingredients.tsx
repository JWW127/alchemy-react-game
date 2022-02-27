import React, { useEffect, useState } from "react";
import { IconType } from "react-icons";
import {
  GiCampfire,
  GiGroundSprout,
  GiSteam,
  GiWaterDrop,
} from "react-icons/gi";
import {  SiTailwindcss} from 'react-icons/si'

interface ingredient {
  name: string;
  isActive: boolean;
  icon?: IconType;
  color: string;
  combo?: string
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
    combo: "firewater",
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

  function handleUpdate(data: ingredient) {
    if(combo.length < 2) {
     setCombo((combo) => [...combo, data.name])
    }
  }
  
  useEffect(() => {
    if(combo.length === 2){
      let comboCheck = combo.join('')
      ingredientsArr.forEach(item => {
        if(item.combo === comboCheck) {
          setIngredients([...currentIngredients, item])
          setCombo(() => [])
          console.log(combo)
        }
      })
      // setIngredients([...currentIngredients, data]);
    }

  },[combo])

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
