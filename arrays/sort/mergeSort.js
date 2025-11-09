const mergeSort = (nums, low, high) => {
    if(low >= high) return;
    const mid = Math.floor((low + high) / 2);
    mergeSort(nums, low, mid);       // left half
    mergeSort(nums, mid + 1, high);  // right half
    merge(nums, low, mid, high);
    return nums
}

const merge = (nums, low, mid, high) => {
    const temp = [];
    let left = low; // pointer at the start of left arr
    let right = mid + 1; // pointer at the start of right arr
    
    // store elements from left and right arrays in sorted manner
    while(left <= mid && right <= high) {
        if(nums[left] <= nums[right]) {
            temp.push(nums[left]);
            left++;
        } else {
            temp.push(nums[right]);
            right++;
        }
    }

    // if elements on the left arr are still left
    while(left <= mid) {
        temp.push(nums[left]);
        left++;
    }

    // if elements on the right arr are still left
    while(right <= high) {
        temp.push(nums[right]);
        right++;
    }

    // transfer all elements from temp arr to nums arr
    for(let i = low; i <= high; i++) {
        nums[i] = temp[i - low];
    }
} 
console.log(mergeSort([5,1,9,11], 0, 3)) // TC: O(n logn)
