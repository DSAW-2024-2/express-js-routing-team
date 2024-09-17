const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send({ data: 'User route' });
});

router.post('/', (req, res) => {
  res.send({ data: 'User route' });
});

router.put('/', (req, res) => {
  res.send({ data: 'User route' });
});

router.delete('/', (req, res) => {
  res.send({ data: 'User route' });
});