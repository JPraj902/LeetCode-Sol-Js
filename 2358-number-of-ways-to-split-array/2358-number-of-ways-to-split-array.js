/**
 * @param {number[]} nums
 * @return {number}
 */
function waysToSplitArray(nums) {
    let totalSum = nums.reduce((a,b) => a + b, 0)
    let leftSum = 0;
    let count = 0;

    for (let i = 0; i < nums.length - 1; i++){
        leftSum += nums[i];
        let rightSum = totalSum - leftSum;
        if (leftSum >= rightSum){
            count++;
        }
    }    
    return count;
};