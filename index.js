/*
PSEUDOCODE:
STORE 'member' with array value by member and schedule
STORE 'arrResult' with array no value
FOR STORE 'i' with 7, i <= 31, ADD i by 1
    STORE 'obj' with object no value
    STORE 'obj' keyname 'tanggal' index i with array no value
    PUSH 'arrResult' with 'obj'
FOR STORE 'j' with 0, j <= 'arrResult' length, ADD j by 1
    IF j+7 MOD 5 equal to 0
        PUSH 'arrResult' index j keyname 'tanggal' j+7 with 'Tempat Fitness Tutup'
    ELSE
        FOR STORE 'k' with 0, k <= 'member' length, ADD k by 1
            IF j MOD 'member' index k,1 equal to 0
                PUSH 'arrResult' index j keyname 'tanggal' j+7 with 'member' index k,0
DISPLAY 'arrResult'
*/

var member = [['Tono' , 2],['Anton' , 4], ['Budi' , 5]]
var arrResult = []

for (var i = 7; i <= 31; i++) {
  var obj = {}
  obj["Tanggal "+[i]] = []
  arrResult.push(obj)
}

for (var j = 0; j < arrResult.length; j++) {
  if ((j+7)%5 === 0 ) {
    arrResult[j]['Tanggal ' + (j+7)].push('Tempat Fitness Tutup')
  } else {
    for (var k = 0; k < member.length; k++) {
      if (j%member[k][1] === 0) {
        arrResult[j]['Tanggal ' + (j+7)].push(member[k][0])
      }
    }
  }
}

console.log(arrResult);
