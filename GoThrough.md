*

*

***Express initialisation***
for json package file = npm init -y

**install Express** 
npm i express

**install nodemon** =  dev dependencies: easily restart server automatically
npm i --save-dev nodemon

Change scripts section to **"devstart": "......"**

to **start the server**: npm run devStart


require
app
app. get/post/put/delete/ => {
.log
.send **or**  .sendStatus(*most used*) **or**  .json(*to send json data*) **or**  .download('< filename >') (*to download files*) **or** .render(' < to render html files > ')
}
listen

**rendering HTML files**
view engines - Ejs / pug
npm i ejs
app.set('view engine', 'ejs')
text.render('index', {text: "workldsdfsdsafd")
<%=2+2%> 
or
<%=locals.text || 'defaultfgdd'%>.           *{just text can also be used, but sometimes when server.js is not passing tetx object then there can be a problem in the website showing an error message, here locals.text will print the text if it is present and passed from the server.. if not it will not. just n error}*

**Routers**

just putting all the routes to one differnt file to make it look clean
const express = require('express');
const router = express.Router()
and replace our names from app to get

module.export = router
const userRouter = require('./routes/users')
app.use('/users', userRouter)


**dynamic routing**

app.get('/:id',(req,res)=> {
res.send('get user with ${req.params.id}')
})


**advanced routing**





**middlewares**

between req and req
 takes req,res,next
 works exactly same as .get



