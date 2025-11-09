// Union of two sorted arrays

// Given two sorted arrays nums1 and nums2, return an array that contains the union of these two arrays. The elements in the union must be in ascending order.
// The union of two arrays is an array where all values are distinct and are present in either the first array, the second array, or both.

// Examples:
// Input: nums1 = [1, 2, 3, 4, 5], nums2 = [1, 2, 7]
// Output: [1, 2, 3, 4, 5, 7]
// Explanation:
// The elements 1, 2 are common to both, 3, 4, 5 are from nums1 and 7 is from nums2

// Input: nums1 = [3, 4, 6, 7, 9, 9], nums2 = [1, 5, 7, 8, 8]
// Output: [1, 3, 4, 5, 6, 7, 8, 9]
// Explanation:
// The element 7 is common to both, 3, 4, 6, 9 are from nums1 and 1, 5, 8 is from nums2

// BRUTE FORCE WAY
const unionBrute = (nums1, nums2) => {
    return [ ...new Set([...nums1, ...nums2])]
}

// OPTIMAL WAY
const unionOptimal = (nums1, nums2) => {
    let i = 0, j = 0;         // pointers for nums1 and nums2
    let result = [];

    // Traverse both arrays while neither pointer has reached the end
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] === nums2[j]) {
            // If both elements are equal, add only once
            if (result[result.length - 1] !== nums1[i]) {
                result.push(nums1[i]);
            }
            i++;
            j++;
        } else if (nums1[i] < nums2[j]) {
            // nums1[i] is smaller → add it if not duplicate
            if (result[result.length - 1] !== nums1[i]) {
                result.push(nums1[i]);
            }
            i++;
        } else {
            // nums2[j] is smaller → add it if not duplicate
            if (result[result.length - 1] !== nums2[j]) {
                result.push(nums2[j]);
            }
            j++;
        }
    }

    // Add remaining elements from nums1 (if any)
    while (i < nums1.length) {
        if (result[result.length - 1] !== nums1[i]) {
            result.push(nums1[i]);
        }
        i++;
    }

    // Add remaining elements from nums2 (if any)
    while (j < nums2.length) {
        if (result[result.length - 1] !== nums2[j]) {
            result.push(nums2[j]);
        }
        j++;
    }

    return result;
};

// console.log(unionBrute([1, 2, 3, 4, 5], [1, 2, 7]));
console.log( unionOptimal([1, 1, 2, 3, 4, 5], [1, 2, 7]) )
