/**
 * Cet exercice de refactoring vise à évaluer la capacité du candidat à optimiser les performances des composants React et à utiliser efficacement les hooks pour éviter les rendus inutiles.
 * Le code suivant est un composant React qui affiche une liste d'utilisateurs récupérée depuis une API.
 * Le composant permet également de filtrer les utilisateurs par nom.
 * - Refactorer le composant pour améliorer ses performances.
 * - Apporter d'autres améliorations de performance et de lisibilité que vous jugez nécessaires.
 */

import React, { useState, useEffect } from "react";

type TUser = {
  id: string;
  name: string;
};

function Test2() {
  const [users, setUsers] = useState<TUser[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

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
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Test2;
