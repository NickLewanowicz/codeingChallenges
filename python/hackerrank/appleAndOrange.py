#!/bin/python

import sys


s,t = raw_input().strip().split(' ')
s,t = [int(s),int(t)]
a,b = raw_input().strip().split(' ')
a,b = [int(a),int(b)]
m,n = raw_input().strip().split(' ')
m,n = [int(m),int(n)]
apple = map(int,raw_input().strip().split(' '))
orange = map(int,raw_input().strip().split(' '))

aDelta = [s-a,t-a]
bDelta = [s-b,t-b]
samsApples = 0
samsOranges = 0

for i in apple:
    if(aDelta[0] <= i <= aDelta[1]):
        samsApples +=1

for i in orange:
    if(bDelta[0] <= i <= bDelta[1]):
        samsOranges +=1

print samsApples
print samsOranges
