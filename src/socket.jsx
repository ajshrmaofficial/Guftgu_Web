import { io } from "socket.io-client";

const URL = import.meta.env.VITE_SERVER_IP

const chatSocket = io(URL + '/chat', {autoConnect: false})

chatSocket.onAny((event)=>{
    console.log(`Log from chatSocket(event): ${event}`)
})

export default chatSocket