function fitness(){
  var anggota=[
    {
      hari:2,
      nama:'Tono'
    },
    {
      hari:4,
      nama:'Anton'
    },
    {
      hari:5,
      nama:'Budi'
    }
  ]
  var begin=0
  var arr=[]
  for (var i = 7; i <= 31; i++) {
    for (var j = 0; j < anggota.length; j++) {
      if(i%5!==0){
        if(begin%anggota[j].hari===0 || i===7){
          arr.push(anggota[j].nama)
        }
      }
    }
    if(i%5===0){
      arr.push('Tempat Fitness Tutup')
    }
    console.log('Tanggal '+i+':'+arr);
    begin++
    arr=[]
  }

}

fitness();
