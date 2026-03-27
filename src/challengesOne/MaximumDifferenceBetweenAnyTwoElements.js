/** Find the maximum difference between any two elements
FUNCTION maxDifference(arr):
    IF length(arr) < 2:
        RETURN 0   // or error

    minElement ← arr[0]
    maxDiff ← arr[1] - arr[0]

    FOR i FROM 1 TO length(arr) - 1:
        currentDiff ← arr[i] - minElement

        IF currentDiff > maxDiff:
            maxDiff ← currentDiff

        IF arr[i] < minElement:
            minElement ← arr[i]

    RETURN maxDiff
*/

let array = new Array(11, 2, 3, 4, 10, 20, 80, 99)

function MaximumDifference(array) {
    if (array.length < 2) return 0

    let minElement = array[0]
    let maxDifference = array[1] - array[0]

    for (let i = 1; i < array.length; i++) {
        let currentDifference = array[i] - minElement

        if (currentDifference > maxDifference) maxDifference = currentDifference
        if (array[i] < minElement) minElement = array[i]
    }
    return maxDifference
}

const maxDifference = MaximumDifference(array)
console.log(maxDifference)
