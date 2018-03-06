// PSEUDOCODE
// buat variabel namaMember untuk menampung nilai nama
// buat variabel temp dengan nilai 0 untuk seleksi angka
// Looping tanggal dari 7 sampai dengan 31
// Jika temp modulus 2 = 0, maka push namaMember = Tono
// Jika temp modulus 4 = 0, maka push namaMember = Anton
// Jika temp modulus 5 = 0, maka push namaMember = Budi
//
// kosongi dulu namaMember agar looping temp tidak masuk
// Jika tanggal modulus 5 = 0, maka push namaMember = Tempat Fitness Tutup
// 
// Print Tanggal + variabel tanggal + variabel namaMember
// setiap selesai perulangan tambah nilai temp dengan 1

var namaMember = []
var temp = 0

for (var tanggal=7; tanggal<=31; tanggal++) {

    if (temp % 2 === 0) {

        namaMember.push('Tono')
    }

    if (temp % 4 === 0) {

        namaMember.push('Anton')
    }

    if (temp % 5 === 0) {

        namaMember.push('Budi')
    }

    if (tanggal % 5 === 0) {
        
        namaMember = []
        namaMember.push('Tempat Fitness Tutup')
    }
    console.log('Tanggal '+tanggal+': '+namaMember)
    namaMember = []
    temp ++
}
