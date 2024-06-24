/**
 * Cet exercice de refactoring vise à évaluer la capacité du candidat à optimiser les performances des composants React et à utiliser efficacement les hooks pour éviter les rendus inutiles.
 * Le code suivant est un composant React qui affiche une liste d'utilisateurs récupérée depuis une API.
 * Le composant permet également de filtrer les utilisateurs par nom.
 * - Refactorer le composant UserList pour améliorer ses performances.
 * - Apporter d'autres améliorations de performance et de lisibilité que vous jugez nécessaires.
 */ /**
 * Cet exercice de refactoring vise à évaluer la capacité du candidat à optimiser les performances des composants React et à utiliser efficacement les hooks pour éviter les rendus inutiles.
 * Le code suivant est un composant React qui affiche une liste d'utilisateurs récupérée depuis une API.
 * Le composant permet également de filtrer les utilisateurs par nom.
 * - Refactorer le composant UserList pour améliorer ses performances.
 * - Apporter d'autres améliorations de performance et de lisibilité que vous jugez nécessaires.
 */

import { useEffect, useState } from "react";

type TUser = {
  id: string;
  name: string;
};

function Test1() {
  const [users, setUsers] = useState<TUser[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getUserJob = (user: TUser) => {
    if (user.name === "Leanne Graham") {
      return "scientist";
    }
    if (user.name === "Ervin Howell") {
      return "developer";
    }
    if (user.name === "Clementine Bauch") {
      return "designer";
    }

    if (user.name === "Patricia Lebsack") {
      return "manager";
    }

    if (user.name === "Chelsey Dietrich") {
      return "engineer";
    }

    if (user.name === "Mrs. Dennis Schulist") {
      return "teacher";
    }

    if (user.name === "Kurtis Weissnat") {
      return "doctor";
    }

    if (user.name === "Nicholas Runolfsdottir V") {
      return "artist";
    }
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>
            {user.name} | {getUserJob(user)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Test1;
