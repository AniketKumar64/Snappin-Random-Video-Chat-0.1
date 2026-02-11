"use client"
import { Button } from "@/components/ui/button";
import { Loader2, MessageCircle, SkipForward } from "lucide-react";
import VideoRoom from '@/components/VideoRoom'
import React, { useEffect, useState } from 'react'
import { io } from 'socket.io-client'
import Navbar from "@/components/Navbar";

const socket = io(process.env.NEXT_PUBLIC_SOCKET_URL ,{
  transports: ['websocket'],
})

const page = () => {

  const [status, setstatus] = useState("idle")
  const [roomId, setroomId] = useState("")

  const startChat = () => {
    socket.emit("start" )
    setstatus("searching")
  }
  const next = () => {
    socket.emit("next" )
    window.location.reload()
  }

  useEffect(() => {
    socket.on("matched", ({roomId}) => {
      setroomId(roomId)
      setstatus("chatting")
    })
    socket.on("searching", () => {
      setstatus("searching")
    })

    socket.on("partner_left", () => {
      window.location.reload()
    } )


    return () => {
      socket.off();
      
    };
  }, [])



  return (
<section className="scroll-snap-section flex items-center justify-center relative">
  <Navbar/>

      {/* Background */}
      <div className="absolute inset-0 bg-chat-black" />

      <div className="relative z-10 w-full max-w-4xl px-6 text-center">

        {/* ================= IDLE ================= */}
        {status === "idle" && (
          <>
            <h1 className="text-7xl md:text-[10rem] leading-[0.85] distressed mb-6">
              READY?
            </h1>

            <p className="text-lg md:text-2xl mb-10 bg-chat-black/80 p-4 inline-block">
              FACE TO FACE. NO FILTERS. ENTER THE STREAM.
            </p>

            <button
              onClick={startChat}
              className="bg-[#f2a60d] text-[#0c0a06] px-12 py-6 font-marker text-4xl hover:scale-110 transition-transform shadow-[8px_8px_0px_0px_white]">
             
            
              START CHATTING
            </button>

            <div className="mt-6 flex justify-center gap-4 text-[10px]">
              <span className="bg-chat-white/10 px-3 py-2">VIDEO_ON</span>
              <span className="bg-chat-white/10 px-3 py-2">GLOBAL_LOC</span>
            </div>
          </>
        )}

        {/* ================= SEARCHING ================= */}
        {status === "searching" && (
          <div className="flex flex-col items-center space-y-8">
            <Loader2
              size={80}
              className="animate-spin text-[#f2a60d] text-primary"
              strokeWidth={1.5}
            />

            <h1 className="text-6xl md:text-8xl leading-none">
              MATCHING...
            </h1>

            <p className="text-sm border-l-4 border-[#f2a60d] pl-4 text-left max-w-md">
              // SCANNING_GLOBAL_STREAM <br />
              // VERIFYING_SIGNAL <br />
              // CONNECTING_REALITY
            </p>
          </div>
        )}

        {/* ================= CHATTING ================= */}
        {status === "chatting" && (
          <>
            <div className="flex mt-15 md:mt-16 justify-between items-center mb-6 md:mb-2">
              <span className="text-xs bg-red-600 px-3 py-1 font-bold">
                LIVE
              </span>

              <button
                onClick={next}
                className="border-2 border-[#f2a60d] px-6 py-2 font-headline 
                           hover:bg-[#f2a60d] hover:text-[#0c0a06] transition-all flex items-center gap-2"
              >
                <SkipForward size={18} />
                NEXT
              </button>
            </div>

            <div className="border border-[#fcb72d98] md:h-[80vh] h-full w-full flex items-center justify-center  mx-auto mt-2  ">
              <VideoRoom roomId={roomId} />
            </div>
          </>
        )}
      </div>
    </section>

  )
}

export default page