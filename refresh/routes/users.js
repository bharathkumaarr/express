const { application } = require('express')
const express = require('express')
const router = express.Router()

app.use(express.static('public'))

router.get('/', (req, res) => {
    res.send('useer ')
})

router.get('/new', (req, res) => {
    res.send('user neew ')
})

router.post('/', (req, res) => {
    res.send('create user')
})

router.route('/:id').get((req, res) => {
    storeId = req.params.id
    res.send(`anythign numebr: ${storeId}`)
}).put((req, res) => {
    storeId = req.params.id
    res.send(`update numebr: ${storeId}`)

}).delete((req, res) => {
    storeId = req.params.id
    res.send(`delete numebr: ${storeId}`)

})

router.param('id', (req,res,next, id)=>{
    console.log(id)
    next()
})



module.exports = router