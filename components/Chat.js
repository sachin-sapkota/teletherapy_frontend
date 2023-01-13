import { useEffect, useRef, useState } from 'react';
import Layout from './Layout/Layout';
const socketIo = require('socket.io-client')
const socket = socketIo.connect('http://localhost:5000');

import axios from 'axios';
import { useRouter } from 'next/router';

export default function Chat() {
    const router = useRouter()
    const send_container = useRef(null)

    const [schedule, setSchedule] = useState(false)
    const [zoomData, setZoomData] = useState(null)
    const [online, setOnline] = useState(false)

    var user = {
        email: 'roshanneupane54321@gmail.com',
        type: 1
    };

    const scheduleMeeting = async () => {
        try {
            const data = await axios.post(process.env.BACKEND + "/user/schedule-meeting", user, { withCredentials: true })
            setZoomData(data?.data?.data)
            console.log(data.data)
            setSchedule(true)
        } catch (e) {
            console.log(e)
        }
    }

    const sendMeeting = () => {
        socket.emit('meeting', zoomData);
        setSchedule(false)
    }

    useEffect(() => {
        const form = send_container.current
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
            // add(`${name} joined the chat`, 'container__middle')
        })

        socket.on('receive', data => {
            add(`${data.name}: ${data.message}`, 'container__left')
        })

        socket.on('left', data => {
            if (data) {
                // add(`${data.name} left the chat`, 'container__middle')
            }
        })

        socket.on('meetingReceive', data => {
            const data1 = data?.message
            if (data1) {
                add(`${data.name}: <div class="flex flex-col gap-1"><div>Meeting Url:&nbsp;<a class="text-blue-400" target="__blank" href="${data1.join_url}">${data1.join_url}</a></div><div>Password: ${data1.password}</div></div>`, 'container__left')
            }
        })
    }, [socket])

    useEffect(() => {
        if (router.query.name) {
            socket.emit('new-user-joined', { name: router.query.name, user1: router.query.id1, user2: router.query.id2 })
        }
    }, [router])

    return (
        <Layout>
            <div className='mt-20 relative'>
                {schedule ?
                    <div className='absolute top-0 bottom-0 w-[440px] rounded-lg m-auto left-0 right-0 h-[170px] p-5 bg-yellow-500'>
                        <div className='flex flex-col text-sm gap-1'>
                            <div>Meeting Topic: {zoomData?.topic}</div>
                            <div>Meeting Url:&nbsp;<span className='text-blue-600'>{zoomData?.join_url}</span></div>
                            <div>Password: {zoomData?.password}</div>
                        </div>
                        <div className='flex justify-between'>
                            <button onClick={() => setSchedule(false)} className='my-4 text-sm float-right bg-blue-300 p-1 rounded-md'>Cancel</button>
                            <button onClick={sendMeeting} className='my-4 text-sm float-right bg-blue-300 p-1 rounded-md'>Send</button>
                        </div>
                    </div>
                    :
                    <></>
                }
                <div className='container'>
                    <div className='pt-16 bg-blue-900'>
                        <div className='text-white cursor-pointer hover:text-blue-100 hover:underline' onClick={scheduleMeeting}>Schedule Meeting</div>
                    </div>
                    <div className='messagearea'>
                    </div>
                </div>
                <div className='send'>
                    <form ref={send_container} className='flex w-[900px] m-auto'>
                        <input id='send__container__message' type="text" name="message" className='bg-blue-200 w-full rounded-bl-md' />
                        <button className="bg-gray-200 rounded-br-md p-1" type='submit'>Enter</button>
                    </form>
                </div>
            </div>
        </Layout>
    )
}