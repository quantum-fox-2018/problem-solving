# problem-solving
INISIALISASI var arrOutput = ['Tono',' Anton',' Budi']
LOOPING dari i=7 sampai i<=31,
  IF i===7, maka
    CETAK 'Tanggal'+ i + ': ' + arrOutput
    SET arrOutput = []
  ELSE IF i MODULUS 5 SAMADENGAN 0, maka
    CETAK 'Tanggal'+ i + ': Tempat Fitness Tutup
    SET arrOutput = []
  ELSE
    IF i MODULUS 2 SAMADENGAN 1
      arrOutput.push('Tono')
    IF i MODULUS 4 SAMADENGAN 3
      arrOutput.push('Anton')
    IF i MODULUS 5 SAMADENGAN 2
      arrOutput.push('Budi')
    CETAK 'Tanggal'+ i + ': ' + arrOutput
    SET arrOutput = []
