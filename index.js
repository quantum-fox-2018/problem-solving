var days = 0;

for(var tanggal =7; tanggal<=31; tanggal++){
    var result = '';
    var resultArr = [];

    if(days === 0) result = 'Tono, Anton, Budi';
    else if(tanggal%5 === 0) result = 'Tempat Fitness Tutup';

    else{
        if(days%2 === 0) resultArr.push('Tono');
        if(days%4 === 0) resultArr.push('Anton');
        if(days%5 === 0) resultArr.push('Budi');

        if(resultArr.length>1){
            for(var counter = 0; counter<resultArr.length; counter++){
                if(counter === 0) result+=resultArr[counter];
                else{result = result + ', ' + resultArr[counter]}
            }
        }else{
            result = resultArr[0];
            if(result === undefined) result = '';
        }
    }
    

    console.log('Tanggal ' + tanggal + ':' + result);
    days++;
}