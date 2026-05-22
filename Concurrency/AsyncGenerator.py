import asyncio


async def stream_data(items):
    for item in items:
        await asyncio.sleep(0.3)
        yield item * 2


async def main():
    async for value in stream_data([1, 2, 3, 4, 5]):
        print(value)


asyncio.run(main())
