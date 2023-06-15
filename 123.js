let a = [];
for (let i = 0; i < 3; i++) {
	a[i] = [];
	for (var j = 0; j < 3; j++) {
		matrix[i][j] = Math.floor(Math.random() * (200 - 100 + 1) + 100)
		document.write(a[i][j] + " ");
	}
}
function getSumRow(rowIndex)
for (var rowIndex = 0; rowIndex < arr.length; rowIndex += 1) {
	var row = matrix[rowIndex]
	// Суммируем все элементы массива
	arr.forEach((item) => (SumRow += item));
}

// Подсчет сумм колонок
var totalColumns = matrix[0].length
var columsSumms = []
for (var columnIndex = 0; columnIndex < totalColumns; columnIndex += 1) {
	var columnSumm = 0
	for (var rowIndex = 0; rowIndex < matrix.length; rowIndex += 1) {
		columnSumm += matrix[rowIndex][columnIndex]
	}
	columsSumms.push(columnSumm)
}