const express = require('express')
const app = express();
const port = 9000

app.set('view engine', 'ejs')

app.get('/',(req,res,next)=>{
    console.log('here');
    // res.send('hello ')
    // res.status(500).json({message: 'whatever'})
    // res.download('server.js')
    res.render('index', {texnbt: 'word'})
} )

const userRouter = require('./routes/users');

app.use('/users', userRouter)


app.listen(port, ()=>{
    console.log('port runnug on port: ', port)
})