/** Reverse an array without using reverse().
FUNCTION reverseArray(arr):
    left ← 0
    right ← length(arr) - 1

    WHILE left < right:
        temp ← arr[left]
        arr[left] ← arr[right]
        arr[right] ← temp

        left ← left + 1
        right ← right - 1

    RETURN arr
*/

const array = new Array(1, 2, 3, 4, 5)

function ReverseAnArrayWithoutusingReverse(array) {
    let left = 0
    let right = array.length - 1

    while (left < right) {
        let temp = array[left]
        array[left] = array[right]
        array[right] = temp

        left++
        right--
    }
    return array
}

const output = ReverseAnArrayWithoutusingReverse(array)
console.log(output)
