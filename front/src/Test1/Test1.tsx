import React, { useState } from "react";

/*  En plus d'afficher la valeur actuelle, le composant doit également afficher la valeur précédente
     en utilisant une autre méthode sur React que useState pour stocker l'ancienne valeur */

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
