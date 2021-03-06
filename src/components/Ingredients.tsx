import { useEffect, useState, useCallback } from "react";
import { ingredientsArr, ingredient } from "../allIngredients";

const isActiveArr: ingredient[] = ingredientsArr.filter(
  (ingredient) => ingredient.isActive === true
);

export const Ingredient = () => {
  const [currentIngredients, setIngredients] = useState(isActiveArr);
  const [combo, setCombo] = useState<string[]>([]);
  //  const [modal, setModal] = useState<string>("modal");

  //button click will update combo array
  function handleUpdate(data: ingredient) {
    if (combo.length < 2) {
      setCombo((combo) => [...combo, data.name]);
    }
  }

  const checkForMatch = useCallback((): any => {
    if (combo.length === 2) {
      let comboCheck = combo.join("");
      let comboCheckReverse = combo.reverse().join("");
      console.log(comboCheck, comboCheckReverse);
      ingredientsArr.forEach((item, index) => {
        console.log(item.mix);
        //forward check ex. firewater
        if (item.mix === comboCheck) {
          ingredientsArr.splice(index, 1);
          console.log(ingredientsArr);
          return setIngredients([...currentIngredients, item]);
        }
        //backwards check ex waterfire
        if (item.mix === comboCheckReverse) {
          ingredientsArr.splice(index, 1);
          return setIngredients([...currentIngredients, item]);
        }
      });
      setCombo([]);
    }
  }, [combo, currentIngredients]);

  //checks combo vs ingredient.mix to see if valid ingredient
  useEffect((): void => {
    checkForMatch();
  }, [checkForMatch]);

  // takes the currentIngredients[] and maps over it to hydrate
  // our dom with <div><button><icon></button></div>
  return (
    <>
        {currentIngredients.map((data: any)  => (
        <div className="ingredient" key={data.name}>
          <button key={data.name} onClick={() => handleUpdate(data)}>
            <data.icon key={data.name} className={data.color} alt={data.name} />
          </button>
        </div>
      ))}
    </>
  );
};
