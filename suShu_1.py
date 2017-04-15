# -*- coding: UTF-8 -*-
import math
"""

质数（prime number）又称素数，有无限个。
质数定义为在大于1的自然数中，除了1和它本身以外不再有其他因数的数称为质数。

"""
# 1 - 100 以内的素数
def foo(m, n):
    box = []
    flag = True
    for x in range(m, n + 1):
        for y in range(2, int(math.sqrt(x)) + 1):
            if x % y is 0:
                flag = False
                break
        if flag:
            box.append(x)
        flag = True
    return box

print foo(2, 100)

'''
输出结果：
        [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]

'''
