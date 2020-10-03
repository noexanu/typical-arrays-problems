exports.min = function min (array) {
	if (arguments.length === 0 || array.length === 0) {
		return 0;
	} else {
		let minimum = array[0];
		for (element of array) {
			if (element < minimum) {
				minimum = element
			}
		}
		return minimum;
	}
}



exports.max = function max (array) {
	if (arguments.length === 0 || array.length === 0) {
		return 0;
	} else {
		let maximum = array[0];
		for (element of array) {
			if (element > maximum) {
				maximum = element
			}
		}
		return maximum;
	}
}



exports.avg = function avg (array) {
	if (arguments.length === 0 || array.length === 0) {
		return 0;
	} else {
		let average = 0;
		for (element of array) {
			average += element;
		}
		average /= array.length;
		return average;
	}
}