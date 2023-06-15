const getColumnAndRowSum = function(table, row, col) {

    let colSum = table[row].reduce((sum, item) => sum += item);

    let rowSum = 0;

    for (let i=0; i< table.length; i++) {        

            rowSum += table[i][col];

    }

    return { colSum: colSum, rowSum: rowSum};




}




console.log(getColumnAndRowSum([[1, 2, 3], [3, 4, 5], [6, 7, 8]], 1, 2));