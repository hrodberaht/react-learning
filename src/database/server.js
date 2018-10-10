const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router('./src/database/db.json');


function isAuthorized(req) {
  const { name, password } = req.body;
  if (name === 'rob' && password === 'rob') return true;
  return false;
}
server.use(jsonServer.bodyParser);
server.use((req, res) => {
  if (isAuthorized(req)) {
    res.sendStatus(200);
  } else {
    res.sendStatus(401);
  }
});
server.use(router);

server.listen(3004);
