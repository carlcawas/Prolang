# Python equivalent of web workers using a process pool.
from concurrent.futures import ProcessPoolExecutor


def heavy_computation(data):
    return sum(n ** 2 for n in data)


def main():
    with ProcessPoolExecutor() as executor:
        future = executor.submit(heavy_computation, [1, 2, 3, 4, 5])
        print("Result from worker:", future.result())


if __name__ == "__main__":
    main()
