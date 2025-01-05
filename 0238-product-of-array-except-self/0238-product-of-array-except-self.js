function productExceptSelf(nums) {
    let n = nums.length;
    let result = new Array(n);
    let left = 1, right = 1;

    for (let i = 0; i < n; i++){
        result[i] = left;
        left *= nums[i]; 
    }
    for(let i = n - 1; i >= 0; i--){
        result[i] *= right;
        right *= nums[i];
    }
    return result;
}