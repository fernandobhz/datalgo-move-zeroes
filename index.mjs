const moveZeroes = (nums) => {
  for (let index = 0; index < nums.length; index++) {
    const value = nums[index];

    if (value === 0) {
      nums.splice(index, 1);
      nums.push(0);
    }
  }

  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
