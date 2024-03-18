/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function(nums) {
  let arrayWithoutDuplicated = [...new Set([...nums])]
  const k = arrayWithoutDuplicated.length

  for (let i = 0; i < k; i++) {
      nums[i] = arrayWithoutDuplicated[i]
  }

  nums.splice(k)

  return k
};
