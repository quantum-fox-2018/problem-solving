/*
STORE 'jadwalPelanggan' with array value
STORE 'tanggalBuka' with number value <= 31

FOR from 'i' = 0 to 31-'tanggalBuka'
  STORE list with null string
  IF 'i' plus 'tanggalBuka' mod 5 equals 0 THEN
  STORE 'list' with 'Tempat Fitness Tutup'
  ELSE
    FOR from 'j' = 0 to length of 'jadwalPelanggan'
      IF 'i' mod jadwalPelanggan[j][1] equals 0 THEN
        STORE 'list' with jadwalPelanggan[j][0] +', '
      END IF
    END FOR
  END IF

  STORE 'keterangan' with 'Tanggal' + (i+tanggalBuka) +': ' +list
  STORE 'result' with
    IF (i+tanggalBuka) % 5 == 0
      result equal 'keterangan'
    ELSE
      result equal 'keterangan' from index 0 to index length of 'keterangan' minus 2
    END IF

  DISPLAY 'result'

END FOR
*/
const jadwalPelanggan = [['Tono', 2], ['Anton', 4], ['Budi', 5]]
const tanggalBuka = 7

for (let i = 0; i <= 31-tanggalBuka; i++) {

  let list = ''

  if ((i+tanggalBuka) % 5 == 0) {

    list = 'Tempat Fitness Tutup'

  }else {

    for (let j = 0; j < jadwalPelanggan.length; j++) {

      if (i % jadwalPelanggan[j][1] == 0) {

        list += jadwalPelanggan[j][0] +', '

      }

    }

  }

  let keterangan = 'Tanggal ' +(i+tanggalBuka) + ': ' +list
  let result = (i+tanggalBuka) % 5 == 0 ? keterangan : keterangan.slice(0, keterangan.length-2)

console.log(result);

}
