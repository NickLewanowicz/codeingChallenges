#!/bin/python3

import sys


n = int(input().strip())
score = list(map(int, input().strip().split(' ')))
# your code goes here

max = [score[0]]
min = [score[0]]

for i in score:
    if (max[-1] < i):
        max.append(i)
    if (min[-1] > i):
        min.append(i)

print(str(len(max)-1) + " " + str(len(min)-1))
