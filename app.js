const express = require('express');
const bodyParser = require("body-parser");
const sequelize = require('./utils/database');
const User = require('./models/user');
const Note = require('./models/note');
const noteRoute = require('./routes/route');
const PORT = 3000;

const app = express();

//setting view
app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({extended: false}));

//register user in req
app.use((req, res, next)=>{
    User.findByPk(1)
    .then(user=>{
        req.user = user;
        next()
    })
    .catch(err=>console.log(err))
})

// registering routes
app.use(noteRoute);

//stating Relationships
User.hasMany(Note);
Note.belongsTo(User, { constraints: true, onDelete: "CASCADE" });

//syncing and checking for users available
sequelize
    .sync({force: true})
    .then(result=>{
        return User.findByPk(1)
    })
    .then(user=>{
        if(!user){
            return User.create({name: "Awwal", email: "Oharwarl@gmail.com"})
        }
        return user
    })
    .then(user=>{
        console.log('STARTING SERVER...');
        app.listen(PORT, (err)=>{
            if(err){
                console.log(err);
            }
            console.log("Server is running on Port: ", PORT);
        });
    })
    .catch(err=>concole.log(err));
