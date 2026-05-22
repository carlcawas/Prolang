count = 0
while count < 3:
    print("while:", count)
    count += 1

num = 10
while True:
    print("do-while:", num)
    num += 1
    if not (num < 3):
        break
