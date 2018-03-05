
/*
Jadwal :
Tono 2hari sekali
Anton 4hari sekali
Budi 5hari sekali

Buka tanggal 7
tutup pada tanggal kelipatan 5
Member = [{nama : Tono, jadwal : 2},
          {nama : Anton, jadwal : 4},
          {nama : Budi, jadwal : 5}]


FOR i=7 TO 31
  STORE arr TO empty array
  FOR j=0 TO less than member length
    IF member j name equals 'TONO' AND member j jadwal equals 2
      PUSH member j name TO arr
      INSERT member j jadwal TO 1
    ELSE IF member j name equals 'Anton' AND member j jadwal equals 4
      PUSH member j name TO arr
      INSERT member j jadwal TO 1
    ELSEI F member j name equals 'Budi' AND member j jadwal equals 5
      PUSH member j name TO arr
      INSERT member j jadwal TO 1
    ELSE
      member j jadwal plus 1
    END IF
  NEXT j

  Join array arr with ','
  IF i modulus 5 equals 0
    DISPLAY Tanggal i: Tempat Fitness Tutup
  ELSE
    DISPLAY Tanggal i : arr
  END IF
  
NEXT i


*/
var member = [{name : 'Tono', jadwal : 2},
          {name : 'Anton', jadwal : 4},
          {name : 'Budi', jadwal : 5}];
for(let i = 7; i <= 31; i++){
  var arr=[];
    for(let j = 0;  j< member.length; j++){
      if(member[j].name === 'Tono' && member[j].jadwal === 2){
        arr.push(member[j].name);
        member[j].jadwal = 1;
      }else if(member[j].name === 'Anton' && member[j].jadwal === 4){
        arr.push(member[j].name);
        member[j].jadwal = 1;
      }else if(member[j].name === 'Budi' && member[j].jadwal === 5){
        arr.push(member[j].name);
        member[j].jadwal = 1;
      }else {
        member[j].jadwal +=1;
      }
    }
    arr.join(", ");
    if(i%5 === 0){
      console.log('Tanggal '+i+': Tempat Fitness Tutup');
    }else{
    console.log('Tanggal ' + i + ': ' + arr);
  }
}
