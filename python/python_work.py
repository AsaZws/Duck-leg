# 学习打印
# print("Hello Python world!")
# message = "Hello world";
# print(message)

# 学习字符串转大小写
# name = "ada lovelace"
# print(name.title())
# print(name.upper())
# print(name.lower())

# 字符串拼接
# first_name = "ada"
# last_name = "lovelace"
# full_name = first_name + " " + last_name
# print(full_name.title())

# 换行
# print("Languages:\n\tpython\nC")

# 删除空白
# favorite_language = 'python '
# favorite = 'python'
# print(favorite_language == favorite)  # false
# favorite_language = favorite_language.rstrip()
# print(favorite_language == favorite)  # true

# 数字  python一样会出现浮点数精度问题 
# aa = 0.1
# bb = 0.2
# cc = aa + bb
# dd = 0.1 + 0.2
# print(cc)
# print(cc == dd)

# 转字符串
# age = 23
# # message = "Happy" + age. # 会报错
# message = "Happy" + str(age)
# print(message)

# 除法  python2中会等于1，因为会自动去掉小数点后面的数，除非除数中任意一个为浮点数
# print(3.0 / 2)
# print(3 / 2)

# 列表
# motorcycles = ['honda', 'yamaha', 'suzuki']
# print(motorcycles)
# poped_motorcycles = motorcycles.pop()
# print(motorcycles)
# print(poped_motorcycles)
# 排序
motorcycles = ['honda', 'yamaha', 'suzuki']
motorcycles.sort(reverse = True)
print(motorcycles)

































