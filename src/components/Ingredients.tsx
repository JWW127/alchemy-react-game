import React, { useEffect, useState, useCallback } from "react";
import { IconType } from "react-icons";
import {
  GiCampfire,
  GiGroundSprout,
  GiStripedSun,
  GiSteam,
  GiWaterDrop,
  GiIceCube,
  GiHeavyRain,
  GiTornado,
  GiSnowing,
} from "react-icons/gi";
import { HiFire } from "react-icons/hi";
import { WiWindy } from "react-icons/wi";
import { BsWind } from "react-icons/bs";
//import {  SiTailwindcss} from 'react-icons/si'
import { FaMountain } from "react-icons/fa"

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
    icon: HiFire,
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
    icon: WiWindy,
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
    },
    {
    name: "mountain",
    icon: FaMountain,
    color: "blue-gray",
    mix: "earthearth",
    isActive: false
    },
    {
    name: "rain",
    icon: GiHeavyRain,
    color: "raining",
    mix: "waterwater",
    isActive: false
    },
    {
    name: "snow",
    icon: GiSnowing,
    color: "white",
    mix: "icerain",
    isActive: false
    },
    {
    name: "wind",
    icon: BsWind,
    color: "windy",
    mix: "airair",
    isActive: false
    },
    {
    name: "tornado",
    icon: GiTornado,
    color: "white",
    mix: "windwind",
    isActive: false
    },
    {
    name: "campfire",
    icon: GiCampfire,
    color: "burning",
    mix: "firefire",
    isActive: false
    },
    {
    name: "sun",
    icon: GiStripedSun,
    color: "sunny",
    mix: "firecampfire",
    isActive: false
    }
];

const isActiveArr: ingredient[] = ingredientsArr.filter(
  (ingredient) => ingredient.isActive === true
);

//todo: need to create a copy of ingredientsArr, "play agian" will require unmutated refrence

 export const Ingredient: React.FC = () => {
  const [currentIngredients, setIngredients] = useState(isActiveArr);
  const [combo, setCombo] = useState<string[] >([])

  //button click will update combo array
  function handleUpdate(data: ingredient) {
    if(combo.length < 2) {
     setCombo((combo) => [...combo, data.name])
    }
  }

  const checkForMatch = useCallback(() : any => {
    if(combo.length === 2){
      let comboCheck = combo.join('')
      let comboCheckReverse = combo.reverse().join('')
        console.log(comboCheck, comboCheckReverse)
      ingredientsArr.forEach((item,index) => {
          console.log(item.mix)
            //forward check ex. firewater
        if(item.mix === comboCheck) {
            ingredientsArr.splice(index, 1)
            console.log(ingredientsArr)
             return setIngredients([...currentIngredients, item])
        }
            //backwards check ex waterfire
        if(item.mix === comboCheckReverse){
            ingredientsArr.splice(index, 1)
             return setIngredients([...currentIngredients, item])
        }
      })
      setCombo([])
    }
  }, [combo, currentIngredients])
 
  //checks combo vs ingredient.mix to see if valid ingredient
  useEffect(() => {
    checkForMatch()
  },[checkForMatch])


  // takes the currentIngredients[] and maps over it to hydrate
  // our dom with <div><button><icon></button></div>
  // considering removing div and adjusting css accordingly
  return (
    <>
      {currentIngredients.map((data: any) => (
        <div className="ingredient" key={data.name}>
          <button
            key={data.name}
            onClick={()=>handleUpdate(data)}
          >
            <data.icon key={data.name} className={data.color} alt={data.name} />
          </button>
        </div>
      ))}
    </>
  );
};

