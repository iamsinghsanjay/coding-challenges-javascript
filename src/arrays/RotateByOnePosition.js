/** Rotate an array left by 1 position
FUNCTION leftRotateByOne(arr):
    IF length(arr) = 0:
        RETURN arr

    first ← arr[0]

    FOR i FROM 0 TO length(arr) - 2:
        arr[i] ← arr[i + 1]

    arr[length(arr) - 1] ← first

    RETURN arr
 */

/** Rotate an array right by 1 position
FUNCTION leftRotateByOne(arr):
    IF length(arr) = 0:
        RETURN arr

    first ← arr[0]

    FOR i FROM 0 TO length(arr) - 2:
        arr[i] ← arr[i + 1]

    arr[length(arr) - 1] ← first

    RETURN arr
 */


const array = new Array(1, 2, 3, 4, 5)

function RotateLeftByOne(array) {
    if (array.length === 0) return array

    let first = array[0]

    for (let i = 0; i < array.length - 1; i++) {
        array[i] = array[i + 1]
    }
    array[array.length - 1] = first

    return array
}

function RotateRightByOne(array) {
    if (array.length === 0) return array

    let last = array[array.length - 1]

    for (let i = array.length - 1; i > 0; i--) {
        array[i] = array[i - 1]
    }
    array[0] = last

    return array
}

// console.log(RotateLeftByOne(array));
// console.log(RotateRightByOne(array));
