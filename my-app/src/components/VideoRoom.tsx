"use client"
import React, {   useEffect, useRef } from 'react'

const VideoRoom = ({ roomId }: { roomId: string }) => {

  const zpRef = useRef<any>(null)
  const ContainerRef = useRef<HTMLDivElement>(null)

  const startVideoChat = async () => {
  const { ZegoUIKitPrebuilt } = await import("@zegocloud/zego-uikit-prebuilt");
  const userId = crypto.randomUUID();
 const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(
    Number(process.env.NEXT_PUBLIC_ZEGOQ_APPID),
     process.env.NEXT_PUBLIC_ZEGOQ_APPSECRET!,
    roomId,  
    userId, 
     'stranger');
     const zp = ZegoUIKitPrebuilt.create(kitToken);
      zpRef.current = zp
       zpRef.current.joinRoom({
        container: ContainerRef.current,
        scenario: {
         mode: ZegoUIKitPrebuilt.OneONoneCall,
         showPreJoinView: false,
         showTextChat: true,
         maxUsers: 2,
        },
   });


  } 

useEffect(() => {
  startVideoChat()

  return () => {
    if (zpRef.current) {
      try{
        zpRef.current.leaveRoom();
        zpRef.current.destroy();

      }
      catch(err){
        console.error("Error leaving room:", err);
      }
     
    }
  }

}, [roomId])








  return (
    <div ref={ContainerRef}
      className="w-full  h-full bg-black  "
    >
      
    </div>
  )
}

export default VideoRoom