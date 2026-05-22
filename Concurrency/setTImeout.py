import asyncio


async def main():
    print("1: Synchronous start")

    loop = asyncio.get_running_loop()
    loop.call_later(0, lambda: print("3: Timeout callback"))

    async def microtask():
        print("2: Microtask (Promise)")

    asyncio.create_task(microtask())

    print("4: Synchronous end")
    await asyncio.sleep(0.01)


asyncio.run(main())
