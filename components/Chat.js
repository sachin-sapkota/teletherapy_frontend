import { useEffect } from 'react';
const socketIo = require('socket.io-client')
const socket = socketIo.connect('http://localhost:5000');

export default function Chat() {
    useEffect(() => {
        const form = document.getElementById('send__container');
        const messageInput = document.getElementById('send__container__message')

        const messageContainer = document.querySelector('.messagearea')
        const add = (message, position) => {
            const messageElement = document.createElement('div')
            messageElement.innerHTML = message
            messageElement.classList.add('container__message')
            messageElement.classList.add(position)
            messageContainer.append(messageElement)
            messageContainer.scrollTop = messageContainer.scrollHeight;

        }

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            if (messageInput.value) {
                const message = messageInput.value;
                add(`You: ${message}`, 'container__right');
                socket.emit('send', message);
                messageInput.value = '';
            }
        })

        socket.on('user-joined', name => {
            add(`${name} joined the chat`, 'container__middle')
        })

        socket.on('receive', data => {
            console.log(data)
            add(`${data.name}: ${data.message}`, 'container__left')
        })

        socket.on('left', data => {
            if (data) {
                add(`${data} left the chat`, 'container__middle')
            }
        })
    }, [socket])

    useEffect(() => {
        const name = prompt('Enter your name to join:')
        if (name) {
            socket.emit('new-user-joined', name)
        }
    }, [])

    return (
        <>
            <div className='container'>
                <div className='container__header'>ImeSSages</div>
                <div className='messagearea'>
                </div>
            </div>
            <div className='send'>
                <form action='' id='send__container'>
                    <input type="text" name="message" id="send__container__message" />
                    <button className="btn" type='submit'>Enter</button>
                </form>
            </div>
        </>
    )
}