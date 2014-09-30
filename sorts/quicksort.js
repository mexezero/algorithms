
function quicksort(a) {
	if(a.length == 0) {
		return [];
	}

	var left = [],
		right = [],
		pivot = a[0];

	for(var i = 1; i < a.length; i++) {
		a[i] < pivot? left.push(a[i]) : right.push(a[i]);
	}

	return quicksort(left).concat(pivot, quicksort(right));
}

console.log(quicksort([0, 3, 6, 1, 2, 8, 3, 6, 3, 0, 7, 9]));