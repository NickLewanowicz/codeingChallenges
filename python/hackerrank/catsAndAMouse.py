#!/bin/python3

# Given the position of three objects on a line(x= Cat A, y= Cat B, and z= Mouse C)
# Find which cat is closer to the mouse and print it out.
# If they are the same distance then print Mouse C
import sys


q = int(input().strip())
result = []
for a0 in range(q):
    x,y,z = input().strip().split(' ')
    x,y,z = [int(x),int(y),int(z)]

    aDelta = abs(x-z)
    bDelta = abs(y-z)

    if(aDelta < bDelta):
        result.append('Cat A')
    elif(bDelta < aDelta):
        result.append('Cat B')
    else:
        result.append('Mouse C')

for i in result:
    print(i)
