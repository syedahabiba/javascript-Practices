function is13(nums) {
    if (nums.indexOf(1) == -1 && nums.indexOf(3) == -1){
        return true;
    } else {
        return false;
    }
  }
  
  console.log(is13([7, 8]));
  console.log(is13([3, 2]));
  console.log(is13([0, 1])); 
  