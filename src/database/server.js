const jsonServer = require('json-server');
const bcrypt = require('bcrypt');
const shortid = require('shortid');

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

function hashPassword(password) {
  return bcrypt.hash(password, 10);
}

async function registerUser(req) {
  const { login, email, password } = req.body;
  const passwordHash = await hashPassword(password);
  const user = await router.db.get('users')
    .push({
      id: shortid.generate(),
      login,
      email,
      passwordHash,
    })
    .write();
  return user;
}

async function checkUser(req) {
  const { login } = req.body;
  const taken = await router.db.get('users').find({ login }).value();
  return taken;
}


server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use(async (req, res, next) => {
  if (req.originalUrl === '/registration') {
    const registered = await registerUser(req);
    if (registered) return res.send({ message: 'user added' });
    return res.send({ message: 'not register' });
  }
  if (req.originalUrl === '/check') {
    const checked = await checkUser(req);
    if (checked) return res.send({ message: 'That login is taken' });
    return res.send({ message: 'ok' });
  }
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

server.use(router);

server.listen(3004);
