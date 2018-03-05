/*
SET counter = 0

DO LOOP from i = 7 to 31 with incremenus one
  SET arr to []
  IF i%5 = 0
    INSERT "Tempat Fitness Tutup" to arr
  ELSE
    IF counter%2 = 0
      INSERT "Tono" to arr
    IF counter%4 = 0
      INSERT "Anton" to arr
    IF counter%5 = 0
      INSERT "Budi" to arr
  SHOW "Tanggal " + i + ": " + join arr with ", "
  counter + 1
*/

let counter = 0;

for(let i = 7; i <= 31; i++) {
  let arr = [];
  if(i%5 === 0) {
    arr.push("Tempat Fitness Tutup");
  } else {
    if(counter%2 === 0) {
      arr.push("Tono");
    }
    if(counter%4 === 0) {
      arr.push("Anton");
    }
    if(counter%5 === 0) {
      arr.push("Budi");
    }
  }
  console.log("Tanggal " + i + ": " + arr.join(", "));
  counter++;
}
