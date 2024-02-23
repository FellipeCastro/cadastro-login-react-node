const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'cadastroelogin',
})

const PORT = 3001

app.use(express.json())
app.use(cors())

// Cadastro
app.post('/register', (req, res) => {
    const email = req.body.email
    const password = req.body.password

    db.query('SELECT * FROM usuarios WHERE email = ?', [email], (err, result) => {
        if (err) {
            res.send(err)
        }
        
        if (result.length == 0) {
            db.query('INSERT INTO usuarios (email, password) VALUES (?, ?)', [email, password], (err, result) => {
                if (err) {
                    res.send(err)
                }

                res.send({ msg: 'cadastrado com sucesso' })
            })
        } else {
            res.send({ msg: 'Usuários já cadastrado' })
        }
    })
})

// Login
app.post('/login', (req, res) => {
    const email = req.body.email
    const password = req.body.password

    db.query('SELECT * FROM usuarios WHERE email = ? AND password = ?', [email, password], (err, result) => {
        if (err) {
            res.send(err)
        }

        if (result.length > 0) {
            res.send({ msg: 'Usuários logado com sucesso' })
        } else {
            res.send({ msg: 'Conta não encontrada' })
        }
    })
})

app.listen(PORT, () => {
    console.log(`Servidor rodando em: http://localhost:${PORT}`)
})
