function prijsVanMaat(maat) {
  const maten = ["small", "large", "mega"];
  for (let i = 0; i < maten.length; i++) {
    console.log(maten[i]);
  }

  switch (maten) {
    case "small":
      return 2.5;
      break;
    case "medium":
      return 3.2;
      break;
    case " large":
      return 3.9;
      break;
    default:
      return null;
  }
}

console.log(`${maten[i]}: €${prijsVanMaat.toFixed(2)}`);
console.log(`${maten[i]}: €${prijsVanMaat.toFixed(2)}`);
console.log(`${maten[i]}: €${prijsVanMaat.toFixed(2)}`);
