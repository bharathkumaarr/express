const { application } = require('express');
const express = require('express');

const router = express.Router();

router.get('/new', (req,res)=> {
    res.send('new post router');
})

router.get('/old', (req,res)=> {
    res.send('old post router');
})

module.exports = router