const WebSocket = require('ws');

const ws = new WebSocket('ws://localhost:8765');

ws.on('open', function open() {
  setInterval(() => {
    const data = {
      topic: 'cars',
      payload: {
        brand: 'Ford',
        model: 'Focus',
        year: 2020
      }
    };
    ws.send(JSON.stringify(data));
  }, 1000);
});