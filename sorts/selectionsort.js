
function insertionsort(a) {
	for(var i = 0; i < a.length - 1; i++) {
		var min = i;
		for(var j = i + 1; j < a.length; j++) {
			if(a[j] < a[min]) {
				min = j;
			}
		}

		if(min != i) {
			var swap = a[i];
			a[i] = a[min];
			a[min] = swap;
		}
	}
	return a;
}

console.log(insertionsort([0, 3, 6, 1, 2, 8, 3, 6, 3, 0, 7, 9]))