const express = require("express");
const cookieParser =require('cookie-parser');
const {data} = require("../portfolio/data.json");
const {projects} = data.projects;


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/static',express.static('public'));



app.set('view engine', 'pug');
const mainRoutes = require('./routes');
const projectRoutes = require('./routes/projects')
const errorHandler = require('./routes/errorHandlers')

app.use(mainRoutes)

app.use('/project',projectRoutes)

// app.get('/',(req,res)=>{
//     res.locals.projects = req.projects;
//     res.render('index',{projects})
   
// });

app.get('/about',(req,res)=>{
    res.render("about")
})

// app.get('/project/:id',(req,res)=>{
//     const projectId = req.params.id;
//     const project = projects.find(({id})=>id === +projectId)

//     res.render('index',{project})
// })


app.use(errorHandler)

app.listen(3000, ()=>{
    console.log("this server is running on localhost:3000")
})