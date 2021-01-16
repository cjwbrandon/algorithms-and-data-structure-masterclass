def capitalize_first(arr):
    word = arr[0]
    word = word[0].capitalize() + word[1:]

    if len(arr) == 1:
        return [word]

    return [word] + capitalize_first(arr[1:])


print(capitalize_first(["car", "taco", "banana"]))
