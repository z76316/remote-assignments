function twoSum (nums, target) {
	
	var map = {};
	var curtNum;
	var result = [-1, -1];

	for (var i = 0; i < nums.length; i++) {
		
		curtNum = nums[i];

		if(map[target - curtNum] >= 0) {
			result = [map[target - curtNum], i];
			return result;
		} else {
			map[curtNum] = i;
		}
	}

	return result;

};


console.log("=======Round 1: There is an answer=======");
var input = [2, 9, 23, 33];
var target = 42;
console.log(twoSum(input, target));
console.log("=======Round 2: There is no answer=======");
var input = [2, 9, 23, 33];
var target = 41;
console.log(twoSum(input, target));