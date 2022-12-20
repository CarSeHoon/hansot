const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const mysql = require('mysql')

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'Project',
});

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/api/get', (req,res)=> {
    const sqlSelect = "SELECT * FROM menu"
    db.query(sqlSelect, (err, result)=> {
        res.send(result);
    });
})

app.get('/api2/get', (req,res)=> {
    const sqlSelect = "SELECT * FROM menu WHERE category_id = 1"
    db.query(sqlSelect, (err, result)=> {
        res.send(result);
    });
})

app.get('/api3/get', (req,res)=> {
    const sqlSelect = "SELECT * FROM menu WHERE category_id = 2"
    db.query(sqlSelect, (err, result)=> {
        res.send(result);
    });
})

app.get('/api4/get', (req,res)=> {
    const sqlSelect = "SELECT * FROM menu WHERE category_id = 3"
    db.query(sqlSelect, (err, result)=> {
        res.send(result);
    });
})

app.get('/api5/get', (req,res)=> {
    const sqlSelect = "SELECT * FROM menu WHERE category_id = 4"
    db.query(sqlSelect, (err, result)=> {
        res.send(result);
    });
})

app.post('/api/insert', (req,res) => {

    const name = req.body.name
    const price = req.body.price
    const category_id = req.body.category_id
    const img_url = req.body.img_url


    const sqlInsert = "INSERT INTO menu (name, price, category_id, img_url) VALUES (?,?,?,?)"
    db.query(sqlInsert, [name, price, category_id, img_url], (err, result)=> {
        console.log(result);
    });
});

app.listen(3001, () => {
    console.log('running on port 3001');
});