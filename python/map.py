import asyncio
import websockets
import random



async def send_data(websocket, path):
    counter1=1
    counter2=1
    counter3=1
    counter4=1
    counter5=1
    counter6=1
    while True:
        #words = ['apple', 'banana', 'orange']
        # 1- latitude 2-longitude 3- altitude 4-speed-x 5-speed-y 6-speed-z
        # 7-lat_ball 8-lon-ball 9-alt_ball 10-color_ball 11-counter_ball
        #data = ["Ford", random.choice(words), "BMW"]
        data = [47.397751+counter1, 8.545607+counter2, 488.060000+counter3, 1.5+counter4, 2.5+counter5, 3.5+counter6,23,24,25,"blue",1]
        counter1+=1
        counter2+=1
        counter3+=1
        counter4+=1
        counter5+=1
        counter6+=1
        data_as_str = [str(val) for val in data]  
        await websocket.send(','.join(data_as_str)) 
        await asyncio.sleep(1)  

start_server = websockets.serve(send_data, "localhost", 8765)

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()

