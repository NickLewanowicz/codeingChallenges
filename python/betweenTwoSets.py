#!/bin/python3
#Find the greast common factor of set 'b'
#Find the lowest common multiple of set 'a'
#Find the cross section of set 'a' and 'b'
#Return length of cross section

import sys
from functools import reduce

def gcd(a,b):
    while b:
        a,b = b, a%b
    return a

def lcm(a,b):
    return a*b//gcd(a,b)


n,m = input().strip().split(' ')
n,m = [int(n),int(m)]
a = [int(a_temp) for a_temp in input().strip().split(' ')]
b = [int(b_temp) for b_temp in input().strip().split(' ')]

lcmA = reduce(lcm, a)
gcdB = reduce(gcd, b)

temp = lcmA
counter = 0
while temp <= gcdB:
    if(gcdB % temp == 0):
        counter+=1
    temp += lcmA

print(counter)
