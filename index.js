/*
initiate start value 7
initiate end equals value 31
initiate tgl open value 7
initiate hari value 0
  looping [var tgl= start; tgl<=end;tgl add 1 every iteration]
    initaite listmember as empty array
    if[tgl mod 5 equals 0]
        push value to listmember [tanggal + array ke tgl + tempat fitnes tutup]
    else
      initiate member with string value tanggal + index ke tgl
      if[hari mod 2 equals 0 ]
          member+= tono
      if[hari mod 4 equals 0 ]
          member+= anton
      if[hari mod 5 equals 0 ]
          member+= budi
  push listMember with value listMember
  angka add by 1 each iteration
*/

function problemSolving(listJadwal) {
    var hariPertama = 7;
    var end = 31;

    for (var i = hariPertama; i <= end; i++) {
        var hasil = '';
        var peserta = [];
        var jadwalPeserta = i - hariPertama;

        if (i % 5 === 0) {
            console.log('Tanggal '+ i+': Tempat Fitness Tutup')
        } else {
            for (var j = 0; j < listJadwal.length; j++) {
              //console.log(jadwalPeserta)
                if (jadwalPeserta % listJadwal[j][1] === 0) {

                    peserta.push(listJadwal[j][0]);
                }
            }

            hasil = peserta.join(', ');
            console.log('Tanggal '+i+':'+hasil);
        }
    }
}


problemSolving([
    ['Tono', 2],
    ['Anton', 4],
    ['Budi', 5],
    ['Mamat', 3]
]);
