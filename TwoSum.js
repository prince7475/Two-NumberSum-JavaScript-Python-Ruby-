const twoNumberSum = (array,target) => {
    array.sort((a,b)=>  a - b )
    let left = 0
    let right = array.length - 1;
    while(left < right){
        let l = array[left]
        let r = array[right]
        let sum = l + r 
        if(sum === target){
            return [l,r]
        }else if(sum < target){
            left++;
            //left = left + 1
        }else if(sum > target){
            right--;
        } 
    }
    return []
}
exports.twoNumberSum = twoNumberSum