/*
1. buat variabel nama untuk menampung string berisi array kosong serta buat satu variabel 'loopingKe' yang berisi number 0
2. kita loop mulai dari i = 7 sampai i sama dengan 31
  2.a. jika variabel loopingKe kita jika dimodulus 2 sama dengan 0, maka push 'Tono' ke dalam variabel nama yang berisi array kosong kita
  2.b. jika variabel loopingKe kita jika dimodulus 5 sama dengan 0, maka push 'Budi' ke dalam variabel nama array kita
  2.c. jika variabel loopingKe kita dimodulus dengan 4 sama dengan 0, maka push 'Anton' ke dalam variabel nama array kita
  2.d. jika i di modulus dengan 5 sama dengan 0, maka kosongkan variabel namaArray kita dan push string 'Tempat Fitness Tutup' ke dalamnya
  2.e. lalu kita tambahkan loopingKe dengan 1
  2.f. kita tampilkan ke log 'Tanggal ' + looping ke i + ': ' + variabel namaArray kita yang sudah dijoin dengan ', '
  2.g. lalu kosongkan variabel namaArray kita kembali
*/

  var namaArray = [];
  var loopingKe = 0;
  for (var i = 7; i <= 31; i++) {
    if (loopingKe % 2 === 0) {
      namaArray.push('Tono');
    }
    if (loopingKe % 5 === 0) {
      namaArray.push('Budi');
    }
    if (loopingKe % 4 === 0) {
      namaArray.push('Anton');
    }
    if (i % 5 === 0) {
      namaArray = []
      namaArray.push('Tempat Fitness Tutup')
    }
    loopingKe += 1;
    console.log('Tanggal ' + i + ': ' + namaArray.join(', '))
    namaArray = []
  }
