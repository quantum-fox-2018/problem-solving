/* PSEUDOCODE
SET tampung

DO LOOPING from i = 7 TO i <= 31 with increment i + 1
  SET tampung with Tanggal i :

  IF i modulus 5 = 0
    CONCAT tampung with Tempat fitness tutup

  IF i = 7
    CONCAT tampung with Tono, Anton, Budi

  IF i NOT EQUAL 7 AND i modulus 5 NOT EQUAL 0 AND i - 7 modulus 2 = 0
    CONCAT tampung with Tono

  IF i NOT EQUAL 7 AND i modulus 5 NOT EQUAL 0 AND i - 7 modulus 4 = 0
    CONCAT tampung with Anton

  IF i NOT EQUAL 7 AND i modulus 5 NOT EQUAL 0 AND i - 7 modulus 5 = 0
    CONCAT tampung with Budi

  DISPLAY tampung

*/

var tampung;
// var members = [
//   {
//     name: 'tono',
//     interval: 2
//   },{
//     name: 'tono',
//     interval: 2
//   },{
//     name: 'tono',
//     interval: 2
//   }
// ]

function schedule(){
  for(var i = 7; i <=31; i++){
    tampung = 'Tanggal '+i+': ';

    if(i === 7){
      tampung += 'Tono, Anton, Budi';
    } else if(i%5===0){
      tampung += 'Tempat Fitness Tutup';
    } else {
      if((i-7)%2 === 0){
        tampung += 'Tono, ';
      }
      if((i-7)%4 === 0){
        tampung += 'Anton, ';
      }
      if((i-7)%5 === 0){
        tampung += 'Budi';
      }
    }
    console.log(tampung);
  }
}
schedule();
