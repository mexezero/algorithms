
function insertionsort(a) {
	for(var i = 1; i < a.length; i++) {
		var x = a[i];
		var j = i;
		while(j > 0 && a[j-1] > x) {
			a[j] = a[j-1];
			j--;
		}
		a[j] = x;
	}
	return a;
}

console.log(insertionsort([0, 3, 6, 1, 2, 8, 3, 6, 3, 0, 7, 9]));