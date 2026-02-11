import React from 'react'
import { Aperture, Zap } from "lucide-react";

const Navbar = () => {
  return (
    <div>
           <nav className="fixed  top-0 left-0 right-0 z-50 flex justify-center p-3">
<div className="bg-black/60 w-[80vw] md:w-[60vw] backdrop-blur-md border border-primary/30 rounded-full px-8 py-3 flex items-center gap-12 shadow-neon">

<div className="md:justify-between justify-around w-full flex items-center gap-8 text-sm font-medium tracking-widest uppercase">

<a
  className="flex items-center gap-2 text-primary text-[#f2a60d] font-bold tracking-widest text-lg neon-text uppercase"
  href="/"
>
  <Aperture size={22} />
  Snappin
</a>
<a
  className="flex items-center gap-2 hover:text-[#f2a60d] whitespace-nowrap hover:scale-105 transition-transform duration-300"
  href="/random-chat"
>
  <Zap size={18} />
  Start Now
</a></div>
</div>
</nav>

    </div>
  )
}

export default Navbar