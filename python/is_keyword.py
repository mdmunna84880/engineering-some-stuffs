a = [1, 2, 3, 4]
b = a
c = [1, 2, 3, 4]
b.append(6)
print(a is b)
print(a is c)
print(b is c)
print(b)
print(a)