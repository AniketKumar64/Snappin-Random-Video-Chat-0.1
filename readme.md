# 🔥 Snappin — Random Video Chat Platform

Snappin is a real-time random video chatting platform that connects users instantly with strangers across the globe.

The platform is built using a scalable architecture combining Next.js, Node.js, Socket.IO, Redis, and ZEGOCLOUD for high-quality video communication.

---
## 🔗 Links

- Live Demo: https://snappin-random-video-chat-0-1.vercel.app/
- Frontend Repository: https://github.com/AniketKumar64/Snappin-Random-Video-Chat-0.1
- Backend Repository: https://github.com/AniketKumar64/Snappin-Random-Video-Chat-0.1

---

## 🚀 Tech Stack

### Frontend
- Next.js
- React.js
- Socket.IO Client
- Tailwind CSS

### Backend
- Node.js
- Express.js
- Socket.IO


### Video Infrastructure
- ZEGOCLOUD (for real-time video/audio streaming)

---

## 🏗 System Architecture

## 🏗 System Architecture

User  
↓  
Next.js Client  
↓  
Socket.IO Server (Node.js)  
 
↓  
ZEGOCLOUD (Video Streaming)
                            

- Socket.IO handles signaling and matching
- ZEGOCLOUD provides low-latency video communication

---

## ⚙️ Core Features

### 🎲 Random User Matching
- Users are placed into a waiting queue
- Automatic pairing using Redis-based queue logic
- Real-time match notification via Socket.IO

### 🔁 Skip / Next Functionality
- Users can instantly leave current partner
- Room cleanup and re-queue handled safely
- Prevents race conditions


### 📡 Real-Time Communication
- Socket.IO used for:
  - Match events
  - Skip events
  - Disconnect handling
  - Signaling events

### 🎥 Video Calling
- ZEGOCLOUD SDK integration
- Reliable low-latency video
- Scalable video infrastructure
- Reduced backend bandwidth cost

---

## 🔐 Safety & Stability

- Proper disconnect handling
- Queue cleanup on user leave
- Basic rate limiting for spam prevention
- Structured modular backend architecture
- Production-ready folder separation

---


## 📈 Scalability Considerations

- Supports horizontal scaling with Redis
- Avoids in-memory state dependency
- WebRTC load offloaded to ZEGOCLOUD
- Suitable for deployment behind load balancers

---

## 🧩 Future Improvements

- Interest-based matching
- Geo-based pairing
- AI moderation
- Reporting & banning system
- Mobile optimization

---

## 💡 What I Learned

- Real-time system design
- Distributed state management
- WebSocket architecture
- Signaling flow for video applications
- Handling race conditions in live systems
- Designing scalable backend infrastructure

---

## 🏁 Conclusion

Snappin demonstrates a production-oriented real-time architecture for random video chatting applications, combining scalable backend design with reliable third-party video infrastructure.