def twoNumberSum(array,target)
    #  array = array.sort
    #  left = 0
    #  right = array.length - 1 
    #   while left < right do 
    #     num1 = array[left]
    #     num2 = array[right]
    #     sum = num1 + num2
    
    #     if sum == target 
    #       return [num1,num2]
    #     elsif sum > target
    #       right -= 1 
    #     elsif sum < target
    #       left += 1
    #     end
    #   end 
    #   return []
    i = 0 
    while i < array.length - 1  do
      num1 = array[i]
      j = i + 1
      while j < array.length do 
      num2 = array[j]
      sum = num1 + num2
        if(sum == target)
          result = [num1, num2].sort
          return result
        end 
      j += 1
      end 
    i += 1
    end
    return []
    
    end 
    
    print twoNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9], 17)
    print twoNumberSum([-21, 301, 12, 4, 65, 56, 210, 356, 9, -47], 163)
    
    # [8, 9][-47, 210]