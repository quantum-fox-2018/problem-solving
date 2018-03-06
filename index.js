//1. buatlah sebuah function yang terdiri dari first dan close
//2. first diisi dari tanggal tempat fitness tersebut buka
//3. second diisi dengan tanggal tempat fitness tersebut tutup
//4. setelah itu buatlah tiga variabel untuk nama penjaga
//5. setelah itu buatlah sebuah variabel array kosong
//6. buat variabel untuk menampung hari agar dapat dimasukan tanggal jaga
//7. buatlah sebuah looping dimulai dari first, kemudian di tutup dengan close looping bertambah
//  7a. jika looping sama dengan first maka semua member dimasukan kedalam variabel array kosong
//  7b. jika looping di modulus 5 sama dengan 0 push tempat fitness tutup ke dalam array kosong
//  7c. else buat variabel string yang diisi dengan tanggal dan index looping
//  7d. jika hari di modulus 2 sama dengan 0 tambahkan variabel string dengan memberTono
//  7e. jika hari di modulus 4 sama dengan 0 tambahkan variabel string dengan memberAnton
//  7f. jika hari di modulus 5 sama dengan 0 tambahkan variabel string dengan memberBudi
//  7g. jika bukan ketiga di atas munculkan variabel string saja
//  7h. push variabel array kosong dengan variabel string
//  8. tambahkan hari dengan 1
//  9. return variabel array


function tanggalJaga(first, close) {
  var memberTono = "Tono ";
  var memberAnton = "Anton ";
  var memberBudi = "Budi ";

  var newArr = [];
  var hari = 0;

  for(var i = first ; i <= close ; i++){
    if(i===first){
      newArr.push("Tanggal" + i +" : " + memberTono + memberAnton + memberBudi);
    } else if(i%5===0){
      newArr.push("Tanggal" + i +" : Tempat Fitness Tutup");
    } else {
      var member_absence = "Tanggal" + i +" : ";
      if(hari%2 === 0 ){
        member_absence += memberTono;
      }
      if (hari%4 === 0) {
        member_absence += memberAnton;
      }
      if(hari%5===0){
        member_absence += memberBudi;
      }

      else{
        member_absence = member_absence;
      }
      newArr.push(member_absence);
    }
    hari++;
  }
return newArr;
}

console.log(tanggalJaga(7, 31));
