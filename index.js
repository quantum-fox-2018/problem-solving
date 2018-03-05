// pertama kali buka tgl 7
// Tono, Anton, Budi masuk dihari pertama secara bersamaan
// Tono masuk, 2 hari sekali
// Anton masuk 4 hari sekali
// Budi 5 hari sekali
// kelipatan 5 tempat fitnes tutup (10, 15, 20, 25, 30, 350)
// kalender hanya sampai 31

// PSEUDOCODE
/*

1. loop data dari tgl 7 sampai 31
    1.1. di index kelipatan 5 (i % 5), Tempat fitnes tutup
    1.2. di index ke 0 (i-7), (Tono, Anton, Budi masuk bersamaan)
    1.3. di index kelipatan 2 (Tono masuk)
    1.4. di index kelipatan 4 (Anton masuk)
    1.5. di index kelipatan 5 (Budi masuk)
*/

function fitnesSchedul(value){
    for(let i=7; i<=31; i++){
        if(i % 5 == 0){
            console.log('Tanggal ' + i + ' : Tempat Fitnes Tutup')
        } else {
            let person = []
            for(let j=0; j<value.length; j++){
                if((i-7) % value[j].schedule == 0){
                    person.push(value[j].name)
                }
            }
            console.log('Tanggal ' + i + ' : ' + person)
        }
    }
}

let objSchedule = [
    {name: 'Tono', schedule: 2},
    {name: 'Anton', schedule: 4},
    {name: 'Budi', schedule: 5},
    {name: 'Yosa', schedule: 3}
];

fitnesSchedul(objSchedule)