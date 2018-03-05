# problem-solving

SET variable member berisi array =
  Tono, 2 hari sekali
  Anton, 4 hari sekali
  Budi, 5 hari sekali

SET variable arr dengan array kosong

DO looping mulai dari tanggal 7 sebagai variable i hingga tanggal 31, setiap iterasi i +1
  SET variable obj dengan value:
    Tanggal (i) berisi data array kosong
  PUSH variable obj kedalam arr

DO looping mulai dari 0 sebagai variable i hingga panjang arr, setiap iterasi i +1
  IF i+7 mod 5 sama dengan 0 maka
    Masukan arr index i di object tanggal i +7 value 'Tempat Fitness Tutup'
  ELSE DO looping mulai dari 0 sebagai variable k hingga panjang member, setiap iterasi k +1
    IF i+7 mod member k index 1 sama dengan 0 maka
      Masukan arr index i di object tanggal i +7 value member k index 0

PRINT arr
