// backend/server.js
const express = require('express');
const fs = require('fs');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;
const DATA_FILE = path.join(__dirname, 'users.txt');

app.use(cors());
app.use(express.json());

app.post('/api/register', (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios.' });
    }
    const entry = `Email: ${email} | Password: ${password}\n`;
    fs.appendFile(DATA_FILE, entry, (err) => {
        if (err) {
            return res.status(500).json({ message: 'Error al guardar los datos.' });
        }
        res.json({ message: '¡Datos guardados correctamente!' });
    });
});

app.listen(PORT, () => {
    console.log(`Servidor backend escuchando en http://localhost:${PORT}`);
});
