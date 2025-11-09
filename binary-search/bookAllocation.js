// Book Allocation Problem

// Given an array nums of n integers, where nums[i] represents the number of pages in the i-th book, and an integer m representing the number of students, allocate all the books to the students so that each student gets at least one book, each book is allocated to only one student, and the allocation is contiguous.

// Allocate the books to m students in such a way that the maximum number of pages assigned to a student is minimized. If the allocation of books is not possible, return -1.


// Examples:
// Input: nums = [12, 34, 67, 90], m=2
// Output: 113
// Explanation: The allocation of books will be 12, 34, 67 | 90. One student will get the first 3 books and the other will get the last one.

// Input: nums = [25, 46, 28, 49, 24], m=4
// Output: 71
// Explanation: The allocation of books will be 25, 46 | 28 | 49 | 24.

const bookAllocation = (pages, students) => {
    // O(n) - Find max pages (minimum possible allocation) and total pages (maximum)
    let [ low, high ] = maxAndsum(pages);
    let ans = 0;

    // O(log(sum - max)) - binary search space
    while(low <= high) {
        const mid = Math.floor( (low + high) / 2 );
        let noOfStudents = 1, pagesAllocated = 0;

        // O(n) - Calculate students needed with current maximum pages limit
        for(let i = 0; i < pages.length; i++) {
            // If adding cuurent book doesnt exceed limit, allocate to current student
            if(pages[i] + pagesAllocated <= mid) {
                pagesAllocated += pages[i];
            } else {
                // Allocate to new student
                noOfStudents++;
                pagesAllocated = pages[i];
            }
        }
        if(noOfStudents <= students) {
            ans = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return ans;
}

const maxAndsum = (nums) => {
    let max = sum = nums[0];
    for(let i = 1; i < nums.length; i++) {
        max = Math.max(max, nums[i]);
        sum += nums[i]
    }
    return [max, sum];
}

console.log(bookAllocation( [25, 46, 28, 49, 24], 4 )) // TC: O(n log(sum(pages) - max(pages)))
console.log(bookAllocation( [12, 34, 67, 90], 2 ))
