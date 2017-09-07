# Enter your code here. Read input from STDIN. Print output to STDOUT
i = 20
j = 23
k = 6
print i,j,k

nums = ['20','23','6']
print nums

#i,j,k = map(int,raw_input().split())
i,j,k = map(int,nums)
print sum([1 for x in xrange(i,j+1) if ((x - int(str(x)[::-1]))%k == 0)])
