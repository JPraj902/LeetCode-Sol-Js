function rotate(nums, k) {
    k %= nums.length;
    nums.reverse();
    nums.splice(0, k, ...nums.slice(0, k).reverse());
    nums.splice(k, nums.length, ...nums.slice(k).reverse());
}