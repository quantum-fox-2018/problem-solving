var arrOutput = ['Tono',' Anton',' Budi']
for(var i=7; i<=31; i++){
  if(i===7){
    console.log('Tanggal '+i+': '+arrOutput)
    arrOutput = []
  }
  else if(i%5===0){
    console.log('Tanggal '+i+': Tempat Fitness Tutup')
    arrOutput = []
  }
  else{
    if(i%2===1){
      arrOutput.push('Tono')
    }
    if(i%4===3){
      arrOutput.push('Anton')
    }
    if(i%5===2){
      arrOutput.push('Budi')
    }
    console.log('Tanggal '+i+': '+arrOutput)
    arrOutput = []
  }
}
