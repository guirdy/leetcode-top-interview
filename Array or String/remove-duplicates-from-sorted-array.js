/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function(nums) {
  for (let i = 0; i < nums.length; i++) {
      let duplicatedItems = 0

      for (let j=i; j < nums.length; j++) {
          if (nums[j] === nums[i]) {
              duplicatedItems++

              if(duplicatedItems > 2) {
                  nums.splice(j, 1)
                  i--
                  j--   
              }
          }
      }
  }

  return nums.length
};
