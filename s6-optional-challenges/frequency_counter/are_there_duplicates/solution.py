def areThereDuplicates(*args):
    unique = {}
    for i in args:
        try:
            unique[i]
        except:
            unique[i] = 1
        else:
            return True
    return False


print(areThereDuplicates(1, 2, 3))  # false
print(areThereDuplicates(1, 2, 2))  # true
print(areThereDuplicates("a", "b", "c", "a"))  # true
