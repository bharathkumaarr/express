const express = require('express');

const app = express();

app.set('view engine', 'ejs')

app.get('/',(req,res) => {
 console.log('here');
//  res.sendStatus(500);
//  res.send('hi')
//  res.status(500).send('hi')
//  res.status(500).json({message1: 'rgrgs', secMessage: 'dfsgdsg'})
//  res.download('server.js')
    res.render("index", {text2345:'world'});
})



const userRouter = require('./routes/users')
const postRouter = require('./routes/posts')

app.use('/users', userRouter)
app.use('/posts', postRouter)
app.use(logger)
// middlewares

function logger(req,res,next) {
    console.log(req.originalUrl)
    next()
}




app.listen(3000)