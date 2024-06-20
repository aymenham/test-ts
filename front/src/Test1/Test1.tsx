import React, { useState } from "react";

/*  Dans cet exercice vous devez affichez la valeur précédente générée sans 
    utiliser un deuxième state (useState). */

const Test1: React.FC = () => {
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
};

export default Test1;
