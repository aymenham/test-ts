/**
 * - Ajouter un input et un bouton pour ajouter une nouvelle tache
 * - implémenter la logique d'ajout de tache
 * - ajouter une liste pour afficher la liste des taches
 */

import React from "react";

interface Task {
  id: number;
  text: string;
}

const initialTasks: Task[] = [
  { id: 1, text: "Faire les courses" },
  { id: 2, text: "Rendez-vous chez le médecin à 14h" },
];

const Test1: React.FC = () => {
  return <div>test</div>;
};

export default Test1;
