
/** Check if an array is a palindrome.
FUNCTION isPalindrome(arr):
    left ← 0
    right ← length(arr) - 1

    WHILE left < right:
        IF arr[left] ≠ arr[right]:
            RETURN false

        left ← left + 1
        right ← right - 1

    RETURN true
*/

let array = new Array(1, 2, 3, 2, 1)

function isArrayPalindrome(array) {
    let left = 0
    let right = array.length - 1

    while (left < right) {
        if (array[left] != array[right]) return false

        left++
        right--
    }

    return true
}

let isPalindrome = isArrayPalindrome(array)
console.log(isPalindrome);
