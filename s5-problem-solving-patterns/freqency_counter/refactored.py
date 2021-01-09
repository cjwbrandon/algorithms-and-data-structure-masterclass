def same(arr1, arr2):
    if len(arr2) != len(arr2):
        return False

    frequency_counter1 = {}
    frequency_counter2 = {}

    for val in arr1:
        if val not in frequency_counter1:
            frequency_counter1[val] = 1
        else:
            frequency_counter1[val] += 1
    for val in arr2:
        if val not in frequency_counter2:
            frequency_counter2[val] = 1
        else:
            frequency_counter2[val] += 1

    for key, count in frequency_counter1.items():
        if key ** 2 not in frequency_counter2:
            return False
        if frequency_counter2[key ** 2] != count:
            return False

    print(frequency_counter1)
    print(frequency_counter2)

    return True


print(same([1, 2, 3], [9, 1, 4]))
print(same([1, 2, 3, 2], [9, 4, 1, 4]))
