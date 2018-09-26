
def twoNumberSum(array,target):
  array.sort()
  left = 0
  right = len(array) - 1
  while left < right:
    num1 = array[left]
    num2 = array[right]
    total = num1 + num2
    if total == target:
      return [num1,num2]
    elif total > target:
      right = right - 1
    elif total < target:
      left = left = left + 1
  return []




print(twoNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9], 17))
print(twoNumberSum([-21, 301, 12, 4, 65, 56, 210, 356, 9, -47], 163))