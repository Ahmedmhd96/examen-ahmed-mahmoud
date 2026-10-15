const koffie = 3.2;
const aantal = 12;

let aantalKoffies = 12;
while (aantal >= koffie) {
  aantalKoffies++;
  if (aantalKoffies % 5 === 0) {
    console.log(`Koffie ${aantalKoffies}: gratis!`);
  } else {
    aantal -= koffie;
    console.log(`Koffie ${aantalKoffies}: betaald, nog € ${budget.toFixed(2)}`);
  }
}
console.log(`Totaal: ${aantalKoffies} koffies, over: € ${budget.toFixed(2)}`);
