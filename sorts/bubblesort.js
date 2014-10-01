
function bubblesort(a) {
	var l = a.length
	var swapped = true;
	while(swapped) {
		swapped = false;
		for(var i = 1; i < l; i++) {
			if(a[i-1] > a[i]) {
				var swap = a[i-1];
				a[i-1] = a[i];
				a[i] = swap;
				swapped = true;
			}
		}
		l--;
	}
	return a;
}

console.log(bubblesort([0, 3, 6, 1, 2, 8, 3, 6, 3, 0, 7, 9]));