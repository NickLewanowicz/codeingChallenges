#!/bin/python
#Description:
#Round up grades to nearest 5 multiple IF:
#   1.grade is 38 or higher
#   2.it ends in 3,4,8,9
# Return the answer
import sys


n = int(raw_input().strip())
for a0 in xrange(n):
    grade = int(raw_input().strip())
    print (grade/5)*5+5 if grade > 37 and grade%5 > 2 else grade
