document.getElementById('register-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;

    try {
        const response = await fetch('http://localhost:3000/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });

        if (!response.ok) {
            throw new Error(`Network response was not ok. Status: ${response.status}`);
        }

        alert('Registration successful! You can now log in.');
    } catch (error) {
        console.error('Error during registration:', error);
        alert('An error occurred during registration. Please try again.');
    }
});

document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    try {
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });

        if (!response.ok) {
            throw new Error(`Network response was not ok. Status: ${response.status}`);
        }

        const data = await response.json();

        if (data.token) {
            localStorage.setItem('token', data.token);
            localStorage.setItem('username', username);
            alert('Login successful!');

            document.getElementById('auth-container').style.display = 'none';
            document.getElementById('chat-container').style.display = 'block';

            startWebSocket(data.token);
        } else {
            alert('Login failed. Please check your credentials.');
        }
    } catch (error) {
        console.error('Error during login:', error);
        alert('An error occurred during login. Please try again.');
    }
});

function startWebSocket(token) {
    const socket = new WebSocket(`ws://localhost:8080?token=${token}`);

    const chatWindow = document.getElementById('chat-window');
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');

    const currentUser = JSON.parse(localStorage.getItem('user'))?.username || '';

    socket.addEventListener('message', (event) => {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');

        const [username, ...messageParts] = event.data.split(': ');
        const messageText = messageParts.join(': ');

        if (username === currentUser) {
            messageElement.classList.add('message-you');
        } else {
            messageElement.classList.add('message-them');
        }

        messageElement.textContent = event.data;
        chatWindow.appendChild(messageElement);
        chatWindow.scrollTop = chatWindow.scrollHeight;
    });

    sendButton.addEventListener('click', () => {
        const message = messageInput.value;
        if (message) {
            socket.send(message);
            messageInput.value = '';
        }
    });

    messageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendButton.click();
        }
    });
}
