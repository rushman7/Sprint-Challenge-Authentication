const axios = require('axios');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const db = require('../database/dbConfig');
const { authenticate, generateToken } = require('./middlewares');

module.exports = server => {
  server.post('/api/register', register);
  server.post('/api/login', login);
  server.get('/api/jokes', authenticate, getJokes);
};

function register(req, res) {
  // implement user registration
  const user = req.body;
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash; 
    db('users')
        .insert(user)
        .then(response => {
            const id = response[0];
            db('users')
                .where({ id })
                .first()
                .then(user => {
                    const token = generateToken(user);
                    res.status(201).json(token);
                });
        })
        .catch(err => {
            res.status(500)
            .send(`${err}`);
        });       
}


function login(req, res) {
  // implement user login
  const credentials = req.body;
    db('users')
        .where({ username: credentials.username })
        .first()
        .then(function(user) {
            if (user && bcrypt.compareSync(credentials.password, user.password)) {
                const token = generateToken(user);
                res.send(token);
            } else {
                return res.status(401).json({ error: 'Incorrect credentials' });
            }
        })
        .catch(error => {
            res.status(500).json({ error });
        })
}

function getJokes(req, res) {
  axios
    .get(
      'https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten'
    )
    .then(response => {
      res.status(200).json(response.data);
    })
    .catch(err => {
      res.status(500).json({ message: 'Error Fetching Jokes', error: err });
    });
}