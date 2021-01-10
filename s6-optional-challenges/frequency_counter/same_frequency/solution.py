def sameFrequency(n1, n2):
    s1 = str(n1)
    s2 = str(n2)

    if len(s1) != len(s2):
        return False

    lookup = {}
    for l in s1:
        if l in lookup:
            lookup[l] += 1
        else:
            lookup[l] = 1

    for l in s2:
        if l not in lookup or lookup[l] == 0:
            return False
        lookup[l] -= 1

    return True


print(sameFrequency(182, 281))  # true
print(sameFrequency(34, 14))  # false
print(sameFrequency(3589578, 5879385))  # true
print(sameFrequency(22, 222))  # false

