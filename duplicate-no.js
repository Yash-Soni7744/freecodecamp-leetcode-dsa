//given an array return true if the number is repeated and false if not
//ex: nums = [1,2,3,4]  false
//[1,2,1] true
//[0] false

var containsDuplicate = function(nums) {
    const s = new Set(nums); return s.size !== nums.length
};
