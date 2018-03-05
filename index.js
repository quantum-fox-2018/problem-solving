/* PSEUDOCODE
MEMBUAT ARRAY YANG BERISI DATA MEMBER
MENDEFINISIKAN WAKTU PADA SETIAP MEMBER
MEMBUAT VARIABEL START DENGAN DIISI ANGKA 7
LOOPING UNTUK CEK TANGGAL, SEBANYAK 31 KURANG START
JIKA SETIAP TANGGAL DITAMBAH 5 SAMA DENGAN LIBUR
DAN JIKA BUKAN,
LOOPING ISI ARAY MEMBER CEK MEMBER DAN JADWAL TANGGAL
JIKA SETIAP TANGGAL DITAMBAH 2 ADALAH JADWAL TONO
JIKA SETIAP TANGGAL DITAMBAH 4 ADALAH JADWAL ANTON
JIKA SETIAP TANGGAL DITAMBAH 5 ADALAH JADWAL BUDI
*/

var member = [['Tono',2], ['Anton',4],['Budi',5]]

function checkJadwal(member){
    let start = 7

    for(let i=0; i<31-start; i++){
        let day = start+i
        // console.log(today)
        let today = 'Tanggal ' +day+': '
        if(day % 5 == 0){
            today += 'Tempat Fitnes Tutup'
            console.log(today) 
        }
        else{
            for(let j=0; j<member.length; j++){
                if(i % member[j][1] == 0){
                    today += member[j][0] +', '
                }
            }
            console.log(today.slice(0, today.length-2)) 
        }
    }
}

checkJadwal(member)