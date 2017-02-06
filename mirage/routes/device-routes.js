import server from '../Server';
import Response from '../Response';

server.setNamespace('http://192.168.4.1');
server.setDelay(Math.random() * 3000);
server.get('/config', (db, req) => {
  const config = db.devices.find(1);

  if(config) {
    return new Response({ name: config.name, ssid: config.ssid });
  } else {
    return new Response({}, {}, 404);
  }
});

server.post('/config', (db, req) => {
  const { name, ssid, pass } = req.parsedBody;

  if(name && ssid && pass) {
    db.devices.create({ name, ssid });
    return new Response({}, {}, 201);
  } else {
    return new Response({}, {}, 422);
  }
});
server.setNamespace('');
server.setDelay(0);

export default server;