#!/bin/python3

import sys


n = int(input().strip())
types = list(map(int, input().strip().split(' ')))
# your code goes here
birds = dict()
birds[5] = 0
for i in types:
    if(i in birds):
        birds[i]+= 1
    else:
        birds[i] = 1

j=4
max = 5
while j!=0:
    if(j in birds and birds[max] <= birds[j]):
        max = j
    j-=1

print(max)
