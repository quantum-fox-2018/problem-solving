//Problem Solving
/*
Summary
-Tono, 2 hari sekali
-anton, 4 hari sekali
-Budi 5 hari sekali

tanggal mulai dari 7 sampai maksimal 31 hari dalam 1 bulan
libur tiap 5 hari sekali
*/

/*Pseudocode
SET 'tglAwal' with 7
SET 'libur' with 5

SET 'i' with 'tglAwal'
FOR 'i' TO 31 DO
    SET 'temp' with empty array
    IF 'i' equals with 'tglAwal' THEN
        STORE 'temp' with "Tono, Anton, Budi"
    ELSE IF 'i' modulo 'libur' equals with 0 THEN
        STORE 'temp' with "Tempat Fitness Tutup"
    ELSE
        SET 'tglAwal' with 7
        WHILE 'tglAwal' less than equals with 31 DO
            IF current 'tglAwal' equals with 'i' THEN
                STORE 'temp' with "Tono"
                STOP WHILE LOOP
            END IF
            'tglAwal' increase by 2
        END WHILE

        SET 'tglAwal' with 7
        WHILE 'tglAwal' less than equals with 31 DO
            IF current 'tglAwal' equals with 'i' THEN
                STORE 'temp' with "Anton"
                STOP WHILE LOOP
            END IF
            'tglAwal' increase by 4
        END WHILE

        SET 'tglAwal' with 7
        WHILE 'tglAwal' less than equals with 31 DO
            IF current 'tglAwal' equals with 'i' THEN
                STORE 'temp' with "Budi"
                STOP WHILE LOOP
            END IF
            'tglAwal' increase by 5
        END WHILE

    END IF
    SET 'joinTemp' with array 'temp' join with ','
    DISPLAY "Tanggal "+'i'+": "+'joinTemp'
END FOR

*/

let tglAwal = 7;
let libur = 5;

for(let i = tglAwal; i <= 31; i++){
    let temp = [];
    if(i === tglAwal){
        temp.push('Tono');
        temp.push('Anton');
        temp.push('Budi');
    }else if (i % libur === 0) {
        temp.push('Tempat Fitness Tutup');
    }else {
        tglAwal = 7;
        while(tglAwal <= 31){
            if(tglAwal === i){
                temp.push('Tono');
                break;
            }
            tglAwal += 2;
        }
        tglAwal = 7;
        while(tglAwal <= 31){
            if(tglAwal === i){
                temp.push('Anton');
                break;
            }
            tglAwal += 4;
        }
        tglAwal = 7;
        while(tglAwal <= 31){
            if(tglAwal === i){
                temp.push('Budi');
                break;
            }
            tglAwal += 5;
        }
    }

    let joinTemp = temp.join(',');
    console.log("Tanggal "+i+": "+joinTemp);
}





















//
