const { Router } = require('express');
const router = Router();



const jwt = require('jsonwebtoken');

router.get('/', (req, res) => {
    res.send('hello')
});

