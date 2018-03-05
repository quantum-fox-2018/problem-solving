PSEUDOCODE
============

SET 7 as tanggal
SET 0 as days
SET resultArr as empty array

WHILE tanggal less then or equal to 31
SET '' as result 
	IF tanggal mod 5 is equal to zero
		SET result as 'Tempat Fitness Tutup'
	ELSE IF days is equal to 0
		SET result as 'Tono, Anton, Budi'
	ELSE 
		IF days mod 2 is equal to 0
			PUSH 'Tono' to resultArr
		IF days mod 4 is equal to 0
			PUSH 'Anton' to resultArr
		IF days mod 5 is equal to 0
			PUSH 'Budi' to resultArr
		IF resultArr.length is more then 1
			SET counter as 0
			WHILE counter is less than resultArr.length
				SET result as result add ',' add resultArr[counter]
				CALC counter add with 1
				STORE calculation result to counter
		ELSE
			SET result as resultArr[0]
			IF result is equal to undefined
				SET result as ''
	SHOW 'Tanggal ' add with tanggal add with ':' add with ' ' add with result

	CALC days add with 1
	STORE calculation result to days
	CALC tanggal add with 1
	STORE calculation result to tanggal
		
