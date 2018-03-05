/* PSEUDOCODE

  START
  CREATE VARIABLE tanggalPertama, SET AS 7
  CREATE VARIABLE tanggalBuka, SET AS 7
  CREATE VARIABLE tanggalTerakhir, SET AS 31
  CREATE OBJECT tono, WITH name: Tono, jadwal: 2
  CREATE OBJECT anton, WITH name: Anton, jadwal: 4
  CREATE OBJECT budi, WITH name: Budi, jadwal: 5
  CREATE VARIABLE output

  F0R tanggal TO tanggalTerakhir
    CREATE EMPTY ARRAY memberToday
    CREATE VARIABLE kelipatanTanggal SET AS tanggal - tanggalPertama

    IF tanggal MOD 5 EQUALS TO 0
      SET output AS 'Tempat Fitness Tutup'
      PRINT 'Tanggal ' + tanggal + ': ' + output
    ELSE
      FOR n TO memberList ARRAY LENGTH
        IF kelipatanTanggal MOD memberList[n] EQUALS TO 0
          PUSH memberList[n].name TO memberToday
    SET OUTPUT AS memberToday JOIN ARRAY (', ')
    PRINT OUTPUT

*/

var tanggalPertama = 7;
var tanggalBuka = 7;
var tanggalTerakhir = 31;
var memberList = [
    {name: 'Tono', jadwal: 2},
    {name: 'Anton', jadwal: 4},
    {name: 'Budi', jadwal: 5}
  ];
var output;

for (var tanggal = tanggalPertama; tanggal <= tanggalTerakhir; tanggal++) {
  var memberToday = [];
  var kelipatanTanggal = tanggal - tanggalPertama;

  if (tanggal % 5 === 0) {
    output = 'Tempat Fitness Tutup';
    console.log('Tanggal ' + tanggal + ': ' + output);
  } else {
    for (var n in memberList) {
      if (kelipatanTanggal % memberList[n].jadwal === 0) {
        memberToday.push(memberList[n].name);
      }
    }

    output = memberToday.join(', ')
    console.log('Tanggal ' + tanggal + ': ' + output);
  }
}
