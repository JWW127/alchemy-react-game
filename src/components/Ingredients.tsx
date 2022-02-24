import React from 'react'
import { GiCampfire, GiWaterDrop, GiSteam, GiGroundSprout } from "react-icons/gi";

type jsxType = any

interface ingredient {
  name: string;
  isActive: boolean;
  icon?: jsxType;
  color: string;
}


let allIngredients: ingredient[] = [
  {
    name: 'fire',
    isActive: true,
    icon: GiCampfire,
    color: 'red'
  },
  {
    name: 'water',
    isActive: true,
    icon: GiWaterDrop,
    color: 'blue'
  },
  {
    name: 'air',
    isActive: true,
    icon: GiSteam,
    color: 'white'
  },
  {
    name: 'earth',
    isActive: true,
    icon: GiGroundSprout,
    color: 'brown'
  }
]

const isActiveArr: ingredient[] = allIngredients.filter((ingredient) => ingredient.isActive === true)

let water = isActiveArr.map((data:any):any => data)

console.log(water)



export const Ingredient: React.FC = () => {
  return (
<>
  {water.map((data:any) => <div className="ingredient" key={data.name}><button key={data.name}><data.icon key={data.name} className={data.color}/></button></div>)}
  </>
  )
};
