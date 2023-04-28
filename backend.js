const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const app = express();
const port = 3000;

const secret = 'mysecretkey';

const users = [
  { username: 'user1', password: 'password1', role: 'user' },
  { username: 'user2', password: 'password2', role: 'admin' },
];

app.use(bodyParser.json());

// Authentication endpoint
app.post('/auth', (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username && u.password === password);
  if (user) {
    const token = jwt.sign({ username, role: user.role }, secret);
    res.json({ token });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

// Authorization middleware
function authorize(role) {
  return (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({ error: 'Missing token' });
    }
    try {
      const payload = jwt.verify(token, secret);
      if (payload.role !== role) {
        return res.status(403).json({ error: 'Unauthorized' });
      }
      next();
    } catch (err) {
      return res.status(401).json({ error: 'Invalid token' });
    }
  };
}

// Protected endpoint
app.get('/protected', authorize('admin'), (req, res) => {
  res.json({ message: 'You have access to this protected endpoint.' });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});
