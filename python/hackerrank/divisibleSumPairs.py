#!/bin/python3

import sys


n,k = input().strip().split(' ')
n,k = [int(n),int(k)]
a = [int(a_temp) for a_temp in input().strip().split(' ')]

comps = dict()
pairs = 0
for i in a:
    comp = (k-i%k)%k
    if(i%k in comps):
        pairs += comps[i%k]

    if(comp in comps):
        comps[comp]+= 1
    else:
        comps[comp] = 1
print(pairs)
