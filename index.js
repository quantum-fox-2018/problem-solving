// 1. buat member isinya nama sama hari dia datang
// 2. buat looping dari 0 sampe 24 (karena mulainya dari tanggal 7)
//   2a. bikin varibel pengumumannya
//   2b. setiap perulangan tanggal 5, tempat fitness tutup
//   2c. bikin lagi buat selain perulangan tanggal 5
//     2ca. bikin looping buat variabel member
//       2caa. kalo i dimodulus day dari member adalah 0, tambahin nama member
//     2cb. console log hasil


function fitnessSchedule(input){
  for(let i=0; i<=24; i++){
    let announce = `Tanggal ${i+7}: `;
    if((i+7)%5==0){
      console.log(announce + `Tempat Fitness Tutup`);
    } else {
      for(let j=0; j<member.length; j++){
        if(i%member[j].day==0){
          announce += member[j].name + ', ';
        }
      }
      console.log(announce.slice(0,announce.length-2));
    }
  }
}

var member = [{name:'Tono',day:2},{name:'Anton',day:4},{name:'Budi',day:5}];

fitnessSchedule(member);
