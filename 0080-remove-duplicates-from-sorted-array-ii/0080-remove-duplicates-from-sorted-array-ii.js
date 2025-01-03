/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
    let j = 2;

    for (let i = 2; i < nums.length; i++){
        if (nums[i] != nums[j-2]){
            nums[j] = nums[i];
            j++;
        } 
    }
    return j;
};