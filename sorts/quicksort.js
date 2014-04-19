
function quicksort_simple(array) {
	if (array.length <= 1) {
		return array;
	}
	var pivot = array[0];
	var less = [];
	var greater = [];
	for (var x = 0; x < array.length; x++) {
		if (array[x] <= pivot) {
			less.push(array[x]);
		}
		else {
			greater.push(array[x]);
		}
	}
	return concat(less, [pivot], greater);
}