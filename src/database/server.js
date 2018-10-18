const jsonServer = require('json-server');
const bcrypt = require('bcrypt');

const server = jsonServer.create();
const router = jsonServer.router('./src/database/db.json');
const middlewares = jsonServer.defaults();

async function isAuthorized(req) {
  const { login, password } = req.body;
  const user = await router.db.get('users').find({ login }).value();
  if (!user) {
    return false;
  }
  if (login === user.login) {
    const match = await bcrypt.compare(password, user.passwordHash);
    return match;
  }

  return false;
}

function checkToken(token) {
  if (token === '1234') return true;
  return false;
}

server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use(async (req, res, next) => {
  if (req.headers.authorization) {
    const token = (req.headers.authorization.split(' ')[1]);
    if (checkToken(token)) {
      return next();
    }
  }
  const auth = await isAuthorized(req);
  if (auth) return res.send({ token: 1234 });
  return res.sendStatus(401);
});

server.get('/', (req, res) => {
  res.json({
    body: res.locals.data,
  });
});
server.use(router);

server.listen(3004);
