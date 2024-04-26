/**
 * considérons un exemple de système de paiement où vous pouvez choisir différentes méthodes de paiement (par exemple, carte de crédit, PayPal, etc.)
 * Comment peut on refactor ce code pour être plus flexible et ouvert à l'extension(ajout de nouvelles méthodes de paiement par exemple)
 * tout en étant fermé à la modification (pas besoin de modifier le code existant pour ajouter de nouvelles méthodes)
 */


export class PaymentSystem {
    pay(method: string, amount: number) {
      if (method === "creditCard") {
        console.log(`Paying $${amount} with Credit Card`);
        // Logique de paiement par carte de crédit
      } else if (method === "paypal") {
        console.log(`Paying $${amount} with PayPal`);
        // Logique de paiement par PayPal
      }
      // D'autres méthodes de paiement
    }
  }