// PSEUDOCODE
// STORE variable str equals to tempat fitness tutup in string
// STORE variable tanggal equals to 6
// STORE variable arrName as array with Tono, Anton, Budi in string inside
//
// FOR variable dateNum equals to 0 with condition dateNum smaller than equals to 24, dateNum add 1 for each loop
//  tanggal add equals to 1
//  STORE result as array
//   IF tanggal modulus 5 equals to 0 THEN
//     str add equals to Tempat Fitness Tutup
//     DISPLAY str
//   IF tanggal add equals to 2 THEN
//     insert Tono as string to result
//   IF tanggal add equals to 4 THEN
//     insert Anton as string to result
//   IF tanggal add equals to 5 THEN
//     insert Budi as string to result
//   DISPLAY Tanggal as string plus i plus : as string plus result
// END FOR

var str = "Tempat Fitness Tutup";
var tanggal = 6;
var arrName = ["Tono", "Anton", "Budi"]

for(var dateNum = 0; dateNum <= 24; dateNum++) {
  tanggal+=1;
  var result = [];
  if(tanggal % 5 === 0) {
    result.push(str);
  }
  if(dateNum % 2 === 0) {
    result.push(arrName[0]);
  }
  if(dateNum % 4 === 0) {
    result.push(arrName[1]);
  }
  if(dateNum % 5 === 0) {
    result.push(arrName[2]);
  }
  console.log("Tanggal " + tanggal + " : " + result);
}
