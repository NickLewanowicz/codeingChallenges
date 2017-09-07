#!/bin/python3

import sys


n = int(input().strip())
scores = [int(scores_temp) for scores_temp in input().strip().split(' ')]
m = int(input().strip())
alice = [int(alice_temp) for alice_temp in input().strip().split(' ')]

# your code goes here

aPos = len(alice)-1
sPos = 0
posArr = []
place = 1

while(len(posArr)<m):
    if(sPos == n-1):
        posArr.append(place+1) if scores[sPos] > alice[aPos] else posArr.append(place)
    elif(scores[sPos]<=alice[aPos]):
        posArr.append(place)
        aPos -= 1
    elif(scores[sPos]>alice[aPos]):
        if(scores[sPos] > scores[sPos+1]):
            place +=1
        sPos += 1

for i in reversed(posArr):
    print(i)
