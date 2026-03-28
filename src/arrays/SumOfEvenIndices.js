/** Find the sum of elements at even indices only.
FUNCTION sumEvenIndices(arr):
    sum ← 0

    FOR i FROM 0 TO length(arr) - 1 STEP 2:
        sum ← sum + arr[i]

    RETURN sum
*/

let array = new Array(1, 2, 3, 4, 5, 6)

function SumOfEvenIndices(array) {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        if (i % 2 == 0)
            sum = sum + array[i]
    }
    return sum
}

function SumOfOddIndices(array) {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        if (i % 2 != 0)
            sum = sum + array[i]
    }
    return sum
}

const sumEven = SumOfEvenIndices(array)
console.log(sumEven)
const sumOdd = SumOfOddIndices(array)
console.log(sumOdd)
