const permutations = (nums) => {
    const res = [];
    function fn (ind) {
        if(ind === nums.length) {
            res.push([...nums]);
            return;
        }

        for(let i = ind; i < nums.length; i++) {
            [nums[i], nums[ind]] = [nums[ind], nums[i]]

            fn(ind + 1);

            [nums[ind], nums[i]] = [nums[i], nums[ind]]
        }
    }

    fn(0);
    return res;
}

console.log({ permutations: permutations( [1, 2, 3] )})
