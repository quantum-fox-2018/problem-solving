//PSEUDOCODE
/*
Membuat fungsi bernama problemSolving yang menerima parameter multidimensional array bernama member dan number bernama tglMulai
  setiap item member berisi array yang memiliki item nama yang bertipe string dan hari datang bertipe number
Melakukan looping for dengan limit awal yaitu variable i sama dengan tglMulai dan limit akhir 31
  Medifine dan initialize variable string kosong bernama hadir
  Dalam looping pertama, melakukan looping lagi dengan limit awal yaitu variable x sama dengan 0 dan limit akhir lebih kecil dari panjang array member
    Dalam looping melakukan pengecekan, jika i adalah kelipatan 5 maka hadir sama dengan 'Tempat Fitness Tutup'
      Jika tidak maka akan mengecek, jika i sama dengan 0 atau i dikurang tglMulai lalu dimodulus member
        Jika iya, akan mengecek lagi jika panjang hadir lebih kecil dari 1
          Jika iya, maka hadir akan ditambahkan dengan nama member
          Jika tidak, maka hadir akan ditambahkan dengan nama member beserta koma di belakangnya
  Pada akhir looping pertama, melakukan console log string hadir 
*/


function problemSolving (member, tglMulai) {
  for (var i = tglMulai; i <= 31; i++) {
    var hadir = '';
    for (var x = 0; x < member.length; x++) {
      if (i % 5 === 0) {
        hadir = 'Tempat Fitness Tutup';
      }else if (i === 0 || (i - tglMulai) % member[x][1] === 0) {
        if (hadir.length < 1) {
          hadir = hadir + member[x][0];
        } else {
          hadir = hadir + ', ' + member[x][0];
        }
      }
    }
    console.log('Tanggal ' + i + ': ' + hadir);
  }
}

problemSolving([['Tono', 2], ['Anton', 4], ['Budi', 5]], 7);
