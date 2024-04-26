/*  Dans cet exercice vous devez affichez la valeur précédente générée sans utiliser un deuxième state (useState). */
import React, { useState } from "react";

function Test3() {
  const [value, setValue] = useState<number | null>(null);

  const handleClick = () => {
    const randomValue = Math.floor(Math.random() * 101);
    setValue(randomValue);
  };

  return (
    <div>
      <button onClick={handleClick}>Générer une valeur</button>
      <p>Valeur précédente :</p>
      <p>Valeur actuelle : {value}</p>
    </div>
  );
}

export default Test3;
