let budget = 20;
const prijs = 3.2;
let aantalKoffies = 0;
while (budget >= prijs) {
  aantalKoffies++;
  if (aantalKoffies % 5 === 0) {
    console.log(`Koffie ${aantalKoffies}: gratis!`);
  } else {
    budget -= prijs;
    console.log(`Koffie ${aantalKoffies}: betaald, nog € ${budget.toFixed(2)}`);
  }
}
console.log(`Totaal: ${aantalKoffies} koffies, over: € ${budget.toFixed(2)}`);
