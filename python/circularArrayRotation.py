#!/bin/python

import sys


n,k,q = raw_input().strip().split(' ')
n,k,q = [int(n),int(k),int(q)]
a = map(int,raw_input().strip().split(' '))
i = 0
lastNum,nextNum = a[0],a[0]
lastIndex,nextIndex = 0,0

for a0 in xrange(q):
    m = int(raw_input().strip())
    print(a[(m - k) % n])
