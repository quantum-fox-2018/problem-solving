// /*
// 1. buat function dengan 3 parameter tono, anton dan budi
// 2. inisialisasi tanggal berakhir dengan nilai 31
// 3. inisialisasi tanggalPertama dengan nilai 7
// 4. inisialisasi libur dengan nilai 5
// 5. inisialisasi tonoCount dengan nilai tanggal pertama
// 6. inisialisasi antonCount dengan nilai tanggal pertama
// 7. inisialisasi budiCount dengan nilai tanggal pertama
// 8. lakukan loop sepanjang tanggal mulai dari tanggal pertama dan tambahkan satu di setiap iterasi
//     8.a. jika i sama dengan libur, tampilkan tanggal i dan "Tempat Fitness Libur".
//         8.a.1. jika libur sama dengan tonoCount, tambahkan tonoCount dengan 2
//         8.a.2. jika libur sama dengan antonCount, tambahkan antonCount dengan 4
//         8.a.3. jika libur sama dengan budiCount, tambahkan budiCount dengan 5
//         8.a.4. tambahkan 5 pada libur 
//     8.b. jika i sama dengan tonoCount dan i sama dengan antonCount dan i sama dengan budiCount, tampilkan tanggal i dan nama tono, anton, budi.
//     8.c. jika i sama dengan tonoCount dan i sama dengan antonCount, tampilkan tanggal i dan nama tono, anton
//     8.d. jika i sama dengan antonCount dan i sama dengan budiCount, tampilkan tanggal i dan nama anton, budi.   
//     8.e. jika i sama dengan tonoCount, tampilkan tanggal i dan nama tono dan tambahkan tonoCount dengan 2
//     8.f. jika i sama dengan antonCount, tampilkan tanggal i dan nama anton dan tambahkan antonCount dengan 4
//     8.g. jika i sama dengan budiCount, tampilkan tanggal i dan nama budi dan tambahkan budiCount dengan 5
//     8.h. lainnya tampilak tanggal i
// */

// function problemSolving(tono, anton, budi) {
//     var tanggal = 31;
//     var tanggalPertama = 7;
//     var libur = 10;
//     var tonoCount = tanggalPertama;
//     var antonCount = tanggalPertama;
//     var budiCount = tanggalPertama;

//     for (var i = tanggalPertama; i <= tanggal; i++) {
//         if (i === libur) {
//             console.log("Tanggal " + i + ": Tempat Fitness Tutup");
//             if (libur === tonoCount) {
//                 tonoCount += tono;
//             }

//             if (libur === antonCount) {
//                 antonCount += anton;
//             }

//             if (libur === budiCount) {
//                 budiCount += budi;
//             }
//             libur += 5;
//         } else {
//             if (i === tonoCount && i === antonCount && i === budiCount) {
//                 console.log("Tanggal " + i + ": Tono, Anton, Budi");
//                 tonoCount += tono;
//                 antonCount += anton;
//                 budiCount += budi;
//             } else {
//                 if (i === tonoCount && i === antonCount) {
//                     console.log("Tanggal " + i + ": Tono, Anton");
//                     tonoCount += tono;
//                     antonCount += anton;
//                 } else {
//                     if (i === tonoCount && i === budiCount) {
//                         console.log("Tanggal " + i + ": Tono, Budi");
//                         tonoCount += tono;
//                         budiCount += budi;
//                     } else {
//                         if (i === antonCount && i === budiCount) {
//                             console.log("Tanggal " + i + ": Anton, Budi");
//                             antonCount += anton;
//                             budiCount += budi;
//                         } else {
//                             if (i === tonoCount) {
//                                 console.log("Tanggal " + i + ": Tono");
//                                 tonoCount += tono;
//                             } else {
//                                 if (i === antonCount) {
//                                     console.log("Tanggal " + i + ": Anton");
//                                     antonCount += anton;
//                                 } else {
//                                     if (i === budiCount) {
//                                         console.log("Tanggal " + i + ": Budi");
//                                         budiCount += budi;
//                                     } else {
//                                         console.log("Tanggal " + i);
//                                     }
//                                 }
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }

// problemSolving(2, 4, 5);

/*
1. function memiliki satu parameter array multidimensi
2. inisialisasi firstDate dengan nilai 7 (tempat fitness dibuka pertama kali tanggal 7)
3. inisialisasi date dengan nilai 31
4. lakukan loop dari firstDate sampai dengan date dan tambahkan 1 pada setiap iterasi
    4.a. inisialisasi result dengan string kosong untuk memasukkan nama yang mempunyai jadwal pada tanggal ke i
    4.b. inisialisasi tempPersonResult untuk menampung nama-nama yang fitness pada currentDay
    4.c. inisialisasi currentDay dengan nilai i dikurang firstDate
    4.d. jika hasil bagi dari i dengan 5 sama dengan 0 maka munculkan tanggal i : Tempat Fitness Tutup
    4.e. jika tidak, lakukan loop dari 0 sampai panjang arrPerson dan tambahkan 1 pada setiap iterasi
        4.e.1. jika hasil bagi dari currentDay dengan jadwal fitness sama dengan 0, masukkan nama orang tersebut kedalam tempPersonResult
    4.f. ubah nilai result dengan nilai tempPersonResult. jadikan array tempPersonResult menjadi string dengan separator koma (,)
    4.g. tampilkan Tanggal ke i dan nama yang sudah menjadi string (result).
*/

function problemSolving(arrPerson) {
    var firstDate = 7;
    var date = 31;

    for (var i = firstDate; i <= date; i++) {
        var result = '';
        var tempPersonResult = [];
        var currentDay = i - firstDate;

        if (i % 5 === 0) {
            console.log(`Tanggal ${i}: Tempat Fitness Tutup`)
        } else {
            for (var j = 0; j < arrPerson.length; j++) {
                if (currentDay % arrPerson[j][1] === 0) {
                    tempPersonResult.push(arrPerson[j][0]);
                }
            }

            result = tempPersonResult.join(', ');
            console.log(`Tanggal ${i}: ${result}`);
        }
    }
}


problemSolving([
    ['Tono', 2],
    ['Anton', 4],
    ['Budi', 5],
    ['Mamat', 3]
]);