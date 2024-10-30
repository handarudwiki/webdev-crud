const express = require('express');
const db = require('./db/db_service.js');

const app = express();

app.use(express.json())

app.post('/students',async (req, res)=>{
    const {name, nrp, birth_date, address} = req.body;

    if(!name || !nrp || !birth_date || !address){
        return res.status(400).json({
            message: "name, nrp, birth_date, address field must be filled"
        })
    }

    const query = 'INSERT INTO students (name, nrp,birth_date, address ) VALUES (?, ?, ?, ?)';
    
    await db.query(query,[name,nrp ,birth_date, address])

    return res.json({
        message: "success create student",
    })
})


app.listen(3000, function () {
    console.log('Server is running on http://127.0.0.1:3000');
});
