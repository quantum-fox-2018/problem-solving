/* Pseudocode
Tono, 2 hari sekali
Anton, 4 hari sekali
Budi, 5 hari sekali

setiap kelipatan 5 fitness libur
fitness buka tanggal 7.
tiap bulan asumsi 31 hari

1. Buat variable tanggal buka = 7
2. Buat variable tanggal akhir = 31
3. Buat variable nama member = [Tono, Anton, Budi]
4. Buat variable counter = 0;
5  Buat variable hasilSementara;
6. Buat variable tonoPresent sama dengan 2
7. Buat varible antonPresent sama dengan 4
8. Buat varible budiPresence Sama dengan 5

9. LOOP index i sama dengan tanggal buka, index i kurang dari tanggal akhir, pertambahan index i  sama dengan 1
  10. jika index i modulus 5 sama dengan nol maka
    11. TAMPILKAN 'tanggal' + 'index i' + ';' + ' Tempat Fitness Tutup'
  12. jika index i sama dengan tanggal buka maka
    13. TAMPILKAN 'tanggal' + 'index i' + ';' + namaMember
  14. jika bukan kondisi diatas maka
    15. jika counter bukan sama dengan nol maka
      16. jika counter modulus tonoPresent  sama dengan nol maka
          17. MASUKAN 'Tono' ke hasilSementara
      18.jika counter modulus antonPresent sama dengan nol maka
    ``````19. MASUKAN 'Anton' ke hasilSementara
      20.jika counter modulus 4 sama dengan nol maka
  ``      21. MASUKAN 'Budi' ke hasilSementara
      22. TAMPILKAN 'tanggal' + 'index i' + ';' + hasilSementara
      23. hasilSementara sama dengan array kosong
    24 counter tambah satu
  25 end LOOP

*/

var tanggalBuka = 7;
var tanggalTutup = 31;
var namaMember = ['Tono', 'Anton', 'Budi'];
var hasilSementara = [];
var counter = 0;
var tonoPresent = 2;
var antonPresent = 4;
var budiPresence = 5;


for (var i = tanggalBuka; i <= tanggalTutup; i++) {
  if (i % 5 === 0) {
    console.log('Tanggal ' + i + ';' + ' Tempat Fitness Tutup');
  } else if (i === tanggalBuka) {
    console.log(('Tanggal ' + i + ';' + namaMember));
  } else {
    if (counter != 0) {
      if (counter % tonoPresent === 0) {
        hasilSementara.push('Tono');
      }
      if (counter % antonPresent === 0) {
        hasilSementara.push('Anton');
      }
      if (counter % budiPresence === 0) {
        hasilSementara.push('Budi');
      }
    }

    console.log('tanggal ' + i + ';' + hasilSementara);
    hasilSementara = [];
  }
  counter++;
}
