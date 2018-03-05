//pseudocode
/*
tanggalMulai = 7
tanggalSelesai = 31
listAttandance = [Tono, Anton, Budi]
listFreq = [2, 4, 5]

LOOPING: dari tanggalMasuk sampai tanggalSelesai
jika tanggal % 5 == 0; CETAK tempat fitness tutup

    LOOPING listFreq
    buat array kosong listIn = []
    Jika tanggal % listfreq == 0; listIn.push(listAttendance) 

    CETAK listIn

*/

function problemSolving(listAttendance, listFreq, startDate, finishDate) {
    
    for(let currentDate = startDate; currentDate <= finishDate; currentDate++) {
        if((currentDate)%5 == 0) {
            console.log(`Tanggal ${currentDate}: Tempat Fitness Tutup`)

        } else {
            let listIn = [];

            for(let i=0; i<listFreq.length; i++) {
                if((currentDate-startDate)%listFreq[i] == 0) {
                    listIn.push(listAttendance[i])
                }
            }
            console.log(`Tanggal ${currentDate}: ${listIn}`)
        }
    }
}

let startDate = 7;
let finishDate = 31;
let listAttendance = ['Tono', 'Anton', 'Budi'];
let listFreq = [2, 4, 5]

problemSolving(listAttendance, listFreq, startDate, finishDate);
