# -*- coding: UTF-8 -*-

''' 字典 key value 互换，一行 code 实现 '''
# {'1': 10, '2': 20} => {'10': 1, '20': 2}

d_1 = {'1': 10, '2': 20}

d_2 = dict((str(v), int(k)) for k, v in d_1.items())

print d_2
'''
输出结果：
        {'10': 1, '20': 2}
        
'''
