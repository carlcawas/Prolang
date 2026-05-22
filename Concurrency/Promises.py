import asyncio


async def fetch_data(url):
    await asyncio.sleep(1)
    if url.startswith("https"):
        return {"data": "Secure data from " + url}
    raise ValueError("Insecure URL")


async def main():
    try:
        result = await fetch_data("https://api.example.com")
        print(result["data"])
    except ValueError as err:
        print(str(err))
    finally:
        print("Done")


asyncio.run(main())
