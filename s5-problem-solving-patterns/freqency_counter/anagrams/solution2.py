def validAnagram(word1, word2):
    if len(word1) != len(word2):
        return False

    lookup = {}
    for l in word1:
        if l in lookup.keys():
            lookup[l] += 1
        else:
            lookup[l] = 1

    for l in word2:
        if l not in lookup.keys() or lookup[l] == 0:
            return False
        lookup[l] -= 1
    return True


print(validAnagram("", ""))  # true
print(validAnagram("aaz", "zza"))  # false
print(validAnagram("rat", "car"))  # false
print(validAnagram("anagram", "nagaram"))  # true
print(validAnagram("awesome", "awesom"))  # false
print(validAnagram("qwerty", "qeywrt"))  # true
