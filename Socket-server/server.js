import http from 'http';
import { Server } from 'socket.io';
import dotenv from 'dotenv';
import { v4 as uuid } from 'uuid';

dotenv.config();
const server = http.createServer();
const PORT = process.env.PORT ;



const io = new Server(server, {cors: {origin: '*'}});
const waitingQueue =[];
const activePairs = new Map();

io.on('connection', (socket) => {
    socket.on('start',()=>{
        if(waitingQueue.includes(socket.id)){
            return;
        }
        if(waitingQueue.length > 0){
            const partner = waitingQueue.shift();
            const roomId =uuid();
            activePairs.set(socket.id, partner);
            activePairs.set(partner, socket.id);

            socket.emit("matched", {roomId});
            socket.to(partner).emit("matched", {roomId});
       }else{
            waitingQueue.push(socket.id);
            socket.emit("searching");

        }

    })

    socket.on('next',()=>{
        handleLeave(socket.id);
    })

    socket.on('disconnect',()=>{
        handleLeave(socket.id);
    })

  const handleLeave = (id) => {
    const index = waitingQueue.indexOf(id);
    if (index !== -1) {
      waitingQueue.splice(index, 1);

    }
    const partnerId = activePairs.get(id);
    if (partnerId) 
    {
      io.to(partnerId).emit("partner_left");
      activePairs.delete(id);
      activePairs.delete(partnerId);
    }

  }



   
});




server.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});