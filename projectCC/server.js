const express = require('express');

const app = express();

app.get('/',(req,res) => {
 console.log('here');
//  res.sendStatus(500);
//  res.send('hi')
//  res.status(500).send('hi')
//  res.status(500).json({message1: 'rgrgs', secMessage: 'dfsgdsg'})
//  res.download('server.js')
    res.render("index");
})

app.listen(3000)