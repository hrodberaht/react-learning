const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router('./src/database/db.json');
const middlewares = jsonServer.defaults();

function checkToken(token) {
  if (token.includes('1234')) return true;
  return false;
}

function isAuthorized(req) {
  const { login, password } = req.body;
  if (login === 'rob' && password === 'rob') return true;
  return false;
}
server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
  if (req.headers.authorization) {
    const token = (req.headers.authorization.split(' ')[6]);
    if (checkToken(token)) {
      next();
    }
  }
  if (isAuthorized(req)) {
    res.send({ token: 1234 });
  } else {
    res.sendStatus(401);
  }
});

server.get('/', (req, res) => {
  res.json({
    body: res.locals.data,
  });
});
server.use(router);

server.listen(3004);
