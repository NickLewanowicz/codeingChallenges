#!/bin/python

import sys


h = map(int,raw_input().strip().split(' '))
word = raw_input().strip()
height = []
for l in word:
    height.append(h[ord(l) - 97])
max = max(height)

print(max*len(height))
