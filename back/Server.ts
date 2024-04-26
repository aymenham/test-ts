import express, { Request, Response } from "express";

interface User {
  name: string;
  age: number;
  salary: { month: string; salary: number }[];
}

const users: User[] = [
  {
    name: "Alice",
    age: 25,
    salary: [
      { month: "January", salary: 4500 },
      { month: "February", salary: 4700 },
      { month: "March", salary: 4900 },
    ],
  },
  {
    name: "Bob",
    age: 35,
    salary: [
      { month: "January", salary: 6000 },
      { month: "February", salary: 6200 },
      { month: "March", salary: 5900 },
    ],
  },
  {
    name: "Charlie",
    age: 40,
    salary: [
      { month: "January", salary: 7000 },
      { month: "February", salary: 7200 },
      { month: "March", salary: 7100 },
    ],
  },
  {
    name: "David",
    age: 28,
    salary: [
      { month: "January", salary: 5500 },
      { month: "February", salary: 5300 },
      { month: "March", salary: 5200 },
    ],
  },
  {
    name: "Eva",
    age: 30,
    salary: [
      { month: "January", salary: 5000 },
      { month: "February", salary: 4800 },
      { month: "March", salary: 5100 },
    ],
  },
  {
    name: "Frank",
    age: 45,
    salary: [
      { month: "January", salary: 8000 },
      { month: "February", salary: 7900 },
      { month: "March", salary: 8100 },
    ],
  },
  {
    name: "Grace",
    age: 32,
    salary: [
      { month: "January", salary: 6500 },
      { month: "February", salary: 6700 },
      { month: "March", salary: 6600 },
    ],
  },
  {
    name: "Helen",
    age: 27,
    salary: [
      { month: "January", salary: 4800 },
      { month: "February", salary: 4600 },
      { month: "March", salary: 4900 },
    ],
  },
  {
    name: "Ian",
    age: 38,
    salary: [
      { month: "January", salary: 7200 },
      { month: "February", salary: 7400 },
      { month: "March", salary: 7300 },
    ],
  },
  {
    name: "Julia",
    age: 33,
    salary: [
      { month: "January", salary: 6700 },
      { month: "February", salary: 6800 },
      { month: "March", salary: 6900 },
    ],
  },
];

const app = express();
app.use(express.json());

//refacto le code si besoin dans tout les cas

/*  Endpoint pour affficher uutlisateurs, filtrer les utilisateurs par age ,
    salaire ou combainison entre les deux */

app.post("/getUsers", (req: Request, res: Response) => {});

// Endpoint le mois avec le salaire le plus élevé
// example de réponse {month : January , totalSalary : 12345 }
app.get(
  "/users/statistics/highestSalaryMonth",
  (req: Request, res: Response) => {}
);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
