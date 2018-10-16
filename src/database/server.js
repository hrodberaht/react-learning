const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router('./src/database/db.json');
const middlewares = jsonServer.defaults();

function isAuthorized(req) {
  const { login, password } = req.body;
  if (login === 'rob' && password === 'rob') return true;
  return false;
}
server.use(middlewares);
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
