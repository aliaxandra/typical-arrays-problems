
exports.min = function min(array) {

    if (array === undefined || !array.length) {
		return 0;
	}

	let min = 0;
	let minTemp = 0;

	for (let item of array) {
		minTemp = Math.min(item, minTemp);
		if (minTemp < min) min = minTemp;
	}

	return min;
}

exports.max = function max(array) {

    if (array === undefined || !array.length) {
		return 0;
	}

	let max = 0;
	let maxTemp = 0;

	for (let item of array) {
		maxTemp = Math.max(item, maxTemp);
		if (maxTemp > max) max = maxTemp;
	}

	return max;
}

exports.avg = function avg(array) {

	if (array === undefined|| !array.length) {
		return 0;
	}

	let sum = 0;
	let avg = 0;

	for (let value of array) {
		sum += value;
	}

	avg = sum / array.length;

	return avg;
}
