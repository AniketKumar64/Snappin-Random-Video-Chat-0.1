import React from 'react'

const Footer = () => {
  return (
    <footer id='footer' className="bg-[#0c0a06] p-12 border-t-2 border-white/10">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
<div className="md:col-span-2">
<div className="bg-[#f2a60d] text-[#0c0a06] p-4 inline-block font-marker text-3xl mb-6">Snappin</div>
<p className="text-white/40 max-w-sm mb-6 leading-relaxed">
                We started this for the ones who don't fit in. The unfiltered. The real. The ones who crave human connection without the corporate polish.
            </p>
<div className="flex gap-6">
<a className="text-white hover:text-[#f2a60d] transition-colors" href="#"><span className="material-icons">share</span></a>
<a className="text-white hover:text-[#f2a60d] transition-colors" href="#"><span className="material-icons">alternate_email</span></a>
</div>
</div>
<div className="grid grid-cols-2 ">
    <div >
<h6 className="font-marker text-[#f2a60d] text-xl mb-6">EXPLORE</h6>
<ul className="space-y-3 text-sm font-bold uppercase tracking-tight">
<li><a className="hover:underline" href="#">Video Stream</a></li>
<li><a className="hover:underline" href="#">Text Channel</a></li>
<li><a className="hover:underline" href="#">The Fringe</a></li>
</ul>
</div>
<div>
<h6 className="font-marker text-[#f2a60d] text-xl mb-6">BORING STUFF</h6>
<ul className="space-y-3 text-sm font-bold uppercase tracking-tight">
<li><a className="hover:underline" href="#">Privacy Wall</a></li>
<li><a className="hover:underline" href="#">The Pact</a></li>
<li><a className="hover:underline" href="#">Support Us</a></li>
</ul>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 opacity-30">
<p className="text-xs">© {new Date().getFullYear()} Aniket Kumar. All rights reserved.</p>
<p className="text-xs font-marker italic">STAY REBELLIOUS.</p>
</div>
</footer>
  )
}

export default Footer