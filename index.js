/*
hari pertama tanggal 7
tempat fitenss tutup setiap tgl 5
Tono 2 hari sekali
Anton 4 hari sekali
Budi 5 hari sekali

PSEUDOCODE:

FOR sepanjang i dimana i adalah 1 sampai dengan 31
SIMPAN variable baru kosong sebagai absensi list hadir
JIKA i >= 7 MAKA
    JIKA i = 7 MAKA
        PUSH Tono,Anton,Budi ke dalam array kosong
    JIKA i habis dibagi 5 MAKA
        PUSH Tempat fitness tutup ke dalam array kosong
    JIKA (i - 7) % 2 MAKA
        PUSH Tono ke dalam array kosong
    JIKA (i - 7) % 4 MAKA
        PUSH Anton ke dalan array kosong
    JIKA (i - 7) % 5 MAKA
        PUSH Budi ke dalam array kosong
    END JIKA
END JIKA
PRINT Tanggal i : array
END FOR
*/
function generateReport(num) {
    let arrName = ['Tono','Anton','Budi'];
    let arrDayAttend = [2, 4, 5];
        for (let i = 1; i <= num; i++) {
            let arrAttendees =  [];
            if (i >= 7) {
                if (i == 7) {
                    for (let j = 0; j < arrName.length; j++) {
                        arrAttendees.push(`${arrName[j]}`);
                    }
                } else if (i % 5 == 0) {
                    arrAttendees.push('Tempat Fitness Tutup');
                } else {
                    for (let j = 0; j < arrDayAttend.length; j++) {
                        if ((i - 7) % arrDayAttend[j] == 0) {
                            arrAttendees.push(`${arrName[j]}`);
                        } 
                    }
                } 
            let arrSpace = arrAttendees.join(', ');
            console.log(`Tanggal ${i}: ${arrSpace}`);
            }
        }
    }
    
    generateReport(31);
    
    
    
    