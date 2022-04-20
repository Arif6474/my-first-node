const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.Port || 5000;
app.use(express.json());
app.use(cors());
app.get('/', (req, res) => {
    res.send('i am learning node js . i have to practice node js seriously');
})



const users =[
    {id: 1, name: 'shahid', email: 'shahid@gmail.com', phone: 0176622155},
    {id: 2, name: 'nayeem', email: 'nayeem@gmail.com', phone: 0176252155},
    {id: 3, name: 'jobair', email: 'jobair@gmail.com', phone: 017236622155},
    {id: 4, name: 'emon', email: 'emon@gmail.com', phone: 017632622155},
    {id: 5, name: 'jonayet', email: 'jonayet@gmail.com', phone: 017612622155},
    {id: 6, name: 'maruf', email: 'maruf@gmail.com', phone: 017662452155},
    {id: 7, name: 'shoaib', email: 'shoaib@gmail.com', phone: 01765666221}
]

app.get('/users', (req, res) =>{
    res.send(users)
})
app.post('/user', (req, res) => {
    console.log('request' , req.body);
    const user = req.body;
    user.id = users.length + 1
    users.push(user)
    res.send('user')
})
app.get('/user/:id', (req, res) =>{
    const id = req.params.id;
    const user = users[id];
    res.send(user);
})




app.listen(port, () => {
    console.log('welcome to express', port);
});