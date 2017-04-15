# -*- coding: utf-8 -*-
import math
"""

质数（prime number）又称素数，有无限个。
质数定义为在大于1的自然数中，除了1和它本身以外不再有其他因数的数称为质数。

"""
# 1 - 100 以内的素数
for x in range(2, 100):
    temp = [n for n in range(2, int(math.sqrt(x)) + 1) if x % n is 0]
    if len(temp) is 0:
        print x,
        # print (x, '是  ' if len(temp) is 0 else "不是", "素数")
'''
输出结果：
          2 3 5 7 11 13 17 19 23 29 31 37 41 43 47 53 59 61 67 71 73 79 83 89 97

'''
