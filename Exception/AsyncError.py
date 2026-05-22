import asyncio
import json
from urllib import request, error


class NetworkError(Exception):
    def __init__(self, message, status_code):
        super().__init__(message)
        self.status_code = status_code


async def load_user(user_id):
    if not user_id:
        raise ValueError("ID is required")

    url = f"https://jsonplaceholder.typicode.com/users/{user_id}"

    def fetch_user():
        try:
            with request.urlopen(url, timeout=10) as response:
                if response.status != 200:
                    raise NetworkError("User not found", response.status)
                return json.loads(response.read().decode("utf-8"))
        except error.URLError:
            raise NetworkError("Failed to reach server", 503)

    return await asyncio.to_thread(fetch_user)


async def main():
    try:
        user = await load_user(1)
        print(user.get("name"))
    except Exception as e:
        print(f"[{e.__class__.__name__}] {e}")


asyncio.run(main())


async def _demo_invalid():
    try:
        await load_user(None)
    except Exception as e:
        print(e)


asyncio.run(_demo_invalid())
