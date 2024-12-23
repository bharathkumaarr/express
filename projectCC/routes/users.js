const express = require('express');
const router = express.Router()


router.get('/', (req,res)=> {
    res.send('user list');
})
router.get('/new',(req,res)=> {
    res.send('user new list')
})

router.post('/', (req,res)=> {
    res.send('fds')
})
router.get('/:id',(req,res)=> {
    // req.params.id
    res.send(`get user with id ${req.params.id}`)
})




module.exports = router