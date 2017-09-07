#!/bin/python3

import sys


n = int(input().strip())
c = [int(c_temp) for c_temp in input().strip().split(' ')]

pairs = dict()
counter = 0
for i in c:
    if(i in pairs):
        counter += 1
        pairs.pop(i)
    else:
        pairs[i] = 1

print(counter)
