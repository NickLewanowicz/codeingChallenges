#!/bin/python3

import sys


n = int(input().strip())
p = int(input().strip())

print(min(p//2,(n-p)//2))
