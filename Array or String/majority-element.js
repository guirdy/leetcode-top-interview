/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const map = new Map()

  const times = nums.length / 2

  for (let i = 0; i < nums.length; i++) {
      if (!map.has(nums[i])) {
          map.set(nums[i], 1)
      } else {
          map.set(nums[i], map.get(nums[i]) + 1)
      }
  }
  
  let result = 0

  Array.from(map, ([name, value]) => {
      if (value > times) {
          result = Number(name)
      }

      return
  })

  return result
};
