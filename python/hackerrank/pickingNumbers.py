#!/bin/python3

import sys


n = int(input().strip())
a = [int(a_temp) for a_temp in input().strip().split(' ')]

nums = dict()
for i in a:
    if i in nums:
        nums[i] +=1

    else:
        nums[i] =1

prevKey = 0
currSum = 0
maxGroup = []
for j in nums:
    if(prevKey == 0):
        prevKey = j
        currSum = nums[j]
    if(prevKey == (j-1)):
        currSum += nums[j]
        maxGroup.append(currSum)
        currSum = nums[j]
    else:
        maxGroup.append(currSum)
        currSum = nums[j]
    prevKey = j

print(max(maxGroup))
