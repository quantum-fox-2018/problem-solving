/*psuedocode

declare variable tono equals 2
declare variable anton equals 4
declare variable budi equals 5
declare variable result as array

for loop with variable i equals 7, i smaller or equals 31, i increment by 1

  if i%5 equals to 0
    result equals "Tempat Fitness Tutup"
  end if
  if tono equals to 2
    result push new value "Tono"
    tono equals 0
  end if
  if anton equals to 4
    result push new value "Anton"
    anton equals 0
  end if
  if budi equals to 5
    result push new value "Budi"
    budi equals 0
  end if

  tono increment by 1
  anton increment by 1
  budi increment by 1

  if result at index 0 equals "Tempat Fitness Tutup"
    then print console log tanggal i : + result at index 0
  end if
  else
    then print console log tanggal i : + result join with (", ");
  end else
end loop
*/

var tono = 2;
var anton = 4;
var budi = 5;

for (var i = 7; i <=31; i++) {
  var result = [];

  if (i%5 === 0) {
    result.push("Tempat Fitness Tutup");
  }
  if (tono === 2) {
    result.push("Tono");
    tono = 0;
  }
  if (anton === 4) {
    result.push("Anton");
    anton = 0;
  }
  if (budi === 5) {
    result.push("Budi");
    budi = 0;
  
  }

  tono++;
  anton++;
  budi++;
  if (result[0] === "Tempat Fitness Tutup" ) {
    console.log("tanggal " + i + " : " + result[0]);
  }else{
      console.log("tanggal " + i + " : " + result.join(", "))
  }

}
