def fib(num):
    if num == 1 or num == 2:
        return 1
    return fib(num - 1) + fib(num - 2)


print(fib(4))
print(fib(10))
print(fib(28))
print(fib(35))
