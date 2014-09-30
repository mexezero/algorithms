
function mergesort(a) {
	if(a.length <= 1) {
		return a;
	}

	var left = [],
		right = [],
		mid = Math.floor(a.length / 2);

	for(var i = 0; i < mid; i++) {
		left.push(a[i]);
	}
	for(var i = mid; i < a.length; i++) {
		right.push(a[i]);
	}
	
	return merge(mergesort(left), mergesort(right));

}

function merge(left, right) {
	var result = [];

	while(left.length > 0 || right.length > 0) {
		if(left.length > 0 && right.length > 0) {
			if(left[0] <= right[0]) {
				result.push(left.shift());
			} else {
				result.push(right.shift());
			}
		} else if(left.length > 0) {
			result.push(left.shift());
		} else if(right.length > 0) {
			result.push(right.shift());
		}
	}
	return result;
}

console.log(mergesort([0, 3, 6, 1, 2, 8, 3, 6, 3, 0, 7, 9]))