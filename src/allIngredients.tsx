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
import { IoThunderstormSharp } from "react-icons/io5";
import { HiFire } from "react-icons/hi";
import { WiWindy } from "react-icons/wi";
import { BsWind } from "react-icons/bs";
import { FaMountain, FaTree } from "react-icons/fa";
import { IconType } from "react-icons";

export interface ingredient {
  name: string;
  isActive: boolean;
  icon?: IconType;
  color: string;
  mix?: string;
}

export const ingredientsArr: ingredient[] = [
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
    isActive: false,
  },
  {
    name: "ice",
    icon: GiIceCube,
    color: "blue",
    mix: "airwater",
    isActive: false,
  },
  {
    name: "mountain",
    icon: FaMountain,
    color: "blue-gray",
    mix: "earthearth",
    isActive: false,
  },
  {
    name: "rain",
    icon: GiHeavyRain,
    color: "raining",
    mix: "waterwater",
    isActive: false,
  },
  {
    name: "snow",
    icon: GiSnowing,
    color: "white",
    mix: "icerain",
    isActive: false,
  },
  {
    name: "wind",
    icon: BsWind,
    color: "windy",
    mix: "airair",
    isActive: false,
  },
  {
    name: "tornado",
    icon: GiTornado,
    color: "white",
    mix: "windwind",
    isActive: false,
  },
  {
    name: "campfire",
    icon: GiCampfire,
    color: "burning",
    mix: "firefire",
    isActive: false,
  },
  {
    name: "sun",
    icon: GiStripedSun,
    color: "sunny",
    mix: "firecampfire",
    isActive: false,
  },
  {
      name: "storm",
      icon: IoThunderstormSharp,
      color: "electric",
      mix: "rainrain",
      isActive: false,
  },
  {
      name: "tree",
      icon: FaTree,
      color: "trees",
      mix: "earthrain",
      isActive: false,
  }
];
