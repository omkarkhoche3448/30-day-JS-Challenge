const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const WebSocket = require('ws');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const users = [];

// Register route
app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ username, password: hashedPassword });
    res.status(201).send('User registered');
});

// Login route
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username);
    if (user && await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({ username: user.username }, 'Omkar123');
        return res.json({ token });
    }
    res.status(401).send('Invalid credentials');
});

// WebSocket Server setup
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws, req) => {
    const token = req.url.split('?token=')[1];
    if (!token) {
        ws.close(1008, 'Token missing');
        return;
    }

    jwt.verify(token, 'Omkar123', (err, user) => {
        if (err) {
            ws.close(1008, 'Invalid token');
            return;
        }

        console.log('Client connected:', user.username);

        ws.on('message', message => {
            console.log(`Received from ${user.username}: ${message}`);
            wss.clients.forEach(client => {
                if (client.readyState === WebSocket.OPEN) {
                    client.send(`${user.username}: ${message}`);
                }
            });
        });

        ws.on('close', () => {
            console.log(`${user.username} disconnected`);
        });
    });
});

app.listen(3000, () => console.log('Server running on port 3000'));
console.log('WebSocket server running on ws://localhost:8080');
