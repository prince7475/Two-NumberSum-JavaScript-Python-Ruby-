const twoNumberSum = (array,target) => {
    // array.sort((a,b)=>  a - b )
    // let left = 0
    // let right = array.length - 1;
    // while(left < right){
    //     let l = array[left]
    //     let r = array[right]
    //     let sum = l + r 
    //     if(sum === target){
    //         return [l,r]
    //     }else if(sum < target){
    //         left++;
    //         //left = left + 1
    //     }else if(sum > target){
    //         right--;
    //     } 
    // }
    // return []

    for(let i = 0; i < array.length - 1; i ++){
        let num1 = array[i]
        for(let j = i + 1; j < array.length; j ++){
            let num2 = array[j]
            let sum = num1 + num2
            if(sum === target) return [num1, num2].sort((a,b)=> a - b )
        }
    }
    return []
}
exports.twoNumberSum = twoNumberSum