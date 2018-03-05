/*PSEUDOCODE PROBLEM SOLVING

STORE counterTanggal with 7
STORE outputSchedule with "Tanggal " plus counterTanggal plus ": "
STORE outputSchedule with outputSchedule plus Tono, Anton, Budi"
PRINT outputSchedule

STORE previousCounterTono with counterTanggal
STORE previousCounterAnton with counterTanggal
STORE previousCounterBudi with counterTanggal
STORE outputName with []

ADD counterTanggal by  1

WHILE counterTanggal less than equals 31

  SET outputSchedule with "Tanggal " + counterTanggal +": "
  SET outputName with []

  IF counterTanggal minus previousCounterTono equals 2
    STORE previousCounterTono with counterTanggal
    PUSH outputName with "Tono"

  IF counterTanggal minus previousCounterAnton equals 4
    STORE previousCounterAnton with counterTanggal
    PUSH outputName with "Anton"

  IF counterTanggal minus previousCounterBudi equals 5
    STORE previousCounterBudi with counterTanggal
    PUSH outputName with "Budi"

  STORE counter with 0
  WHILE counter less than outputName.length
    STORE outputSchedule with outputSchedule plus outputName[counter]
    IF counter == outputName.length-1
      STORE outputSchedule with outputSchedule
    ELSE
      STORe outputSchedule with outputSchedule plus ", "
    ADD counter by 1

  IF counterTanggal MOD by 5 equals 0
    STORE outputSchedule with "Tempat " plus counterTanggal plus ": "
    STORE outputSchedule with outputSchedule plus ": Tempat Fitness Tutup"


  PRINT outputSchedule
  ADD counterTanggal by 1*/

var counterTanggal = 7;
var outputSchedule = "Tanggal " + counterTanggal + ": ";
var outputSchedule = outputSchedule + "Tono, " + "Anton, " + "Budi"
var previousCounterBudi = counterTanggal;
var previousCounterTono = counterTanggal;
var previousCounterAnton = counterTanggal;
var outputName = [];

console.log(outputSchedule);

counterTanggal = counterTanggal +1;

while(counterTanggal <=31){

  outputSchedule = "Tanggal " + counterTanggal + ": ";
  outputName = [];

  if(counterTanggal - previousCounterTono == 2){
    previousCounterTono = counterTanggal;
    outputName.push("Tono");
  }

  if(counterTanggal - previousCounterAnton == 4){
    previousCounterAnton = counterTanggal;
    outputName.push("Anton");
  }

  if(counterTanggal - previousCounterBudi == 5){
    previousCounterBudi = counterTanggal;
    outputName.push("Budi");
  }

  for(var counter=0;counter<outputName.length;counter++){
    outputSchedule = outputSchedule + outputName[counter];
    if(counter==outputName.length-1){
      outputSchedule = outputSchedule;
    }
    else{
      outputSchedule = outputSchedule + ", "
    }
  }

  if(counterTanggal%5 == 0){
    outputSchedule = "Tanggal " + counterTanggal + ": ";
    outputSchedule = outputSchedule + "Tempat Fitness Tutup  ";
  }

  console.log(outputSchedule);
  counterTanggal++;
}
