/*

SET variable member berisi array =
  Tono, 2 hari sekali
  Anton, 4 hari sekali
  Budi, 5 hari sekali

SET variable arr dengan array kosong

DO looping mulai dari tanggal 7 sebagai variable i hingga tanggal 31, setiap iterasi i +1
  SET variable obj dengan value:
    Tanggal (i) berisi data array kosong
  PUSH variable obj kedalam arr

DO looping mulai dari 0 sebagai variable i hingga panjang arr, setiap iterasi i +1
  IF i+7 mod 5 sama dengan 0 maka
    Masukan arr index i di object tanggal i +7 value 'Tempat Fitness Tutup'
  ELSE DO looping mulai dari 0 sebagai variable k hingga panjang member, setiap iterasi k +1
    IF i+7 mod member k index 1 sama dengan 0 maka
      Masukan arr index i di object tanggal i +7 value member k index 0

PRINT arr
*/

var member = [['Tono' , 2],['Anton' , 4], ['Budi' , 5]]
var arr = []

for (var i = 7; i <= 31; i++) {
  var obj = {}
  obj["Tanggal "+[i]] = []

  arr.push(obj)

}

for (var i = 0; i < arr.length; i++) {
  if ((i+7)%5 === 0 ) {
    arr[i]['Tanggal ' + (i+7)].push('Tempat Fitness Tutup')
  } else {
    for (var k = 0; k < member.length; k++) {
      if (i%member[k][1] === 0) {
        arr[i]['Tanggal ' + (i+7)].push(member[k][0])
      }
    }
  }
}
console.log(arr);
