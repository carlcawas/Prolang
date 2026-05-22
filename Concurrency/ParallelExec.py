import asyncio
import time


async def simulate_fetch(url):
    await asyncio.sleep(0.5)
    return {"url": url, "timestamp": int(time.time() * 1000)}


async def fetch_parallel():
    urls = [
        "https://api.example.com/users",
        "https://api.example.com/posts",
        "https://api.example.com/comments",
    ]
    users, posts, comments = await asyncio.gather(*(simulate_fetch(url) for url in urls))
    return {"users": users, "posts": posts, "comments": comments}


async def main():
    print(await fetch_parallel())


asyncio.run(main())
