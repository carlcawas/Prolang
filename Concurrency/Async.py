import asyncio
import time


async def simulate_fetch(url):
    await asyncio.sleep(0.5)
    return {"url": url, "timestamp": int(time.time() * 1000)}


async def get_user_data(user_id):
    try:
        user = await simulate_fetch(f"/users/{user_id}")
        profile = await simulate_fetch(f"/profiles/{user_id}")
        return {**user, **profile}
    except Exception as error:
        print("Failed:", str(error))


async def main():
    data = await get_user_data(1)
    print(data)


asyncio.run(main())
