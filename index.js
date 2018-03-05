/*
initiate start value 7
initiate end equals value 31
initiate tgl open value 7
initiate hari value 0
  looping [var tgl= start; tgl<=end;tgl add 1 every iteration]
    initaite listmember as empty array
    if[tgl mod 5 equals 0]
        push value to listmember [tanggal + array ke tgl + tempat fitnes tutup]
    else
      initiate member with string value tanggal + index ke tgl
      if[hari mod 2 equals 0 ]
          member+= tono
      if[hari mod 4 equals 0 ]
          member+= anton
      if[hari mod 5 equals 0 ]
          member+= budi
  push listMember with value listMember
  angka add by 1 each iteration
*/

var start=7
var end =31
var tglOpen=7
var hari = 0
  for (var tgl = start; tgl <= end  ; tgl++) {
    var listMember=[];
    if(tgl % 5 ==0){
      listMember.push('tanggal '+tgl+': tempat fitnes tutup')
    }else{
      var member = 'tanggal '+tgl+': '
      if(hari%2==0){
        member +='tono '
      }
      if(hari%4==0){
        member+='anton '
      }
      if(hari%5==0){
        member+='budi'
      }
      listMember.push(member)
      hari++
    }
    console.log(listMember.join());
  }

console.log('ubah data agar masuk ke git')
