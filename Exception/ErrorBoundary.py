import asyncio


async def resolve_task(value):
    return value


async def reject_task(message):
    raise Exception(message)


async def run_all_tasks():
    tasks = [
        resolve_task("Task 1 succeeded"),
        reject_task("Task 2 failed"),
        resolve_task("Task 3 succeeded"),
        reject_task("Task 4 network error"),
    ]
    results = await asyncio.gather(*tasks, return_exceptions=True)

    for i, result in enumerate(results, 1):
        if isinstance(result, Exception):
            print(f"[X][{i}]: {result}")
        else:
            print(f"[OK][{i}]: {result}")


asyncio.run(run_all_tasks())
