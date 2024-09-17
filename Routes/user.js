const express = require('express');
const router = express.Router();

const users = [
    { id: 1, name: 'Alexander Gomez', email: 'alexanderg@gmail.com', age: 30 },
    { id: 2, name: 'Tomas Pérez', email: 'tomas.pe@gmail.com', age: 25 },
    { id: 3, name: 'Carlos Pinzon', email: 'pinzon.carlos@gmail.com', age: 40 },
    { id: 4, name: 'John Silva', email: 'j.silvas@gmail.com', age: 76 },
    { id: 5, name: 'Ximena Rodiguez', email: 'ximenarodriguez89@gmail.com', age: 32 }
  ];

router.get('/:id', (req, res) => {
    const userId = parseInt(req.params.id, 10);
    const user = users.find(u => u.id === userId); 
  
    if (user) {
      res.status(200).json({ data: user }); 
    } else {
      res.status(404).json({ error: 'User not found' });
    }
});

router.post('/', (req, res) => {
  res.send({ data: 'User route' });
});

router.put('/', (req, res) => {
  res.send({ data: 'User route' });
});

router.delete('/:id', (req, res) => {
    const userId = parseInt(req.params.id, 10);
    const user = users.find(u => u.id === userId); 
  
    if (user) {
        users = users.filter(u => u.id !== userId);
        res.status(200).json({ message: 'Deleted User', data: user });
    } else {
      res.status(404).json({ error: 'User was not found' });
    }
  });