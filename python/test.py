import asyncio
import websockets
import random
import json

async def send_data(websocket, path):
    while True:
        topics = ['just_data', 'find_ball']
        data = {
            'topic': random.choice(topics),
            'payload': {'value': random.randint(1, 100)}
        }
        await websocket.send(json.dumps(data))
        await asyncio.sleep(1)

start_server = websockets.serve(send_data, "localhost", 8765)

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()