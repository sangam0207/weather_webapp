const express=require('express');
const os=require('os');
const app=express();
const path=require('path')
const hbs=require('hbs')
const add=path.join(__dirname,'../public');
const newPath=path.join(`${__dirname}/../templates/partials`)
console.log(newPath)
hbs.registerPartials(newPath)
//console.log(add)
app.use(express.static('public'));
app.set('view engine','hbs');
app.set('views',path.join(`${__dirname}/../templates/views`));
app.get('/',(req,res)=>{
    res.render('index');
})
app.get('/about',(req,res)=>{
    res.render('about',{name:'Sangam-Temp'});
})
app.get('/weather',(req,res)=>{
    res.render('weather');
})
app.get('*',(req,res)=>{
    res.render('404',{errMessage:'Oops page is not found'})
})
console.log(os.version());

/*
/*
app.get('/weather',(req,res)=>{
    res.render('Welcome to weather page');
})
//app.get('*',(req,res)=>{
    res.render('404 error is found');
})
*/
app.listen(3000,'127.0.0.1',()=>{
    console.log(` Server is listening at port `);
})