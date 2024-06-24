import React, { useState } from "react";

/* 

Vous devez créer une application de gestion de fichiers qui permet de structurer 
un système de fichiers virtuel. Voici les fonctionnalités principales à implémenter :

1. **Ajout de fichier ou dossier :**
   - L'utilisateur peut ajouter un fichier ou un dossier à une structure existante.
   - Aucun fichier ni dossier ne doit avoir le même nom dans le chemin. En cas d'erreur, afficher une alerte.
   -- Les fichiers doivent suivre le format `nom.type`. Si le format n'est pas respecté lors de l'ajout afficher une alerte

2. **Renommer :**
   - Permet de renommer un fichier ou un dossier existant dans la structure.

3. **Afficher chemin :**
   - Affiche le chemin d'accès d'un fichier ou d'un dossier dans la structure.

4. **Déplacer :**
   - Déplace un fichier ou un dossier d'un emplacement à un autre dans la structure.

/* 
  avant                     après
 
 src
 package.json               src
                                components
                                  component1.tsx		
                                Common
                                  common1.tsx
                                  commonFolder
                                    common2.tsx
                            package.json */

const initialData = ["src", "package.json"];
function Test4() {
  const [fileSystem, setFileSystem] = useState(initialData);
  return (
    <div>
      <div> afficher structure ici </div>
      <div>afficher chemin component2.tsx ici </div>
      <div>
        <button>ajouter dossier components à src</button>
        <button>ajouter dossier common à src</button>
        <button>ajouter component1.tsx à components</button>
        <button>ajouter common1.tsx à common</button>
        <button>ajouter dossier CommonFolder à Common</button>
        <button>ajouter common2.tsx à commonFolder</button>
        <button>renommer common2.tsx à component2.tsx</button>
        <button>afficher le chemin de component2.tsx</button>
        <button>deplacer component2.tsx au fichier components</button>
      </div>
    </div>
  );
}

export default Test4;
