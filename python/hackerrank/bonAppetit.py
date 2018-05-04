#!/bin/python3

import sys


n,k = input().strip().split(' ')
n,k = [int(n),int(k)]
a = [int(a_temp) for a_temp in input().strip().split(' ')]
b = int(input().strip())


shouldPay = (sum(a) - a[k])//2
if(b == shouldPay):
    print("Bon Appetit")
else:
    print(b-shouldPay)
