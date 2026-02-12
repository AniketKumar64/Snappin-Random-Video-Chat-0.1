"use client";
import { Aperture, Zap } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { delay, motion } from "framer-motion";

export default function HomePage() {
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
      delay: 2,
      ease: "easeInOut",
      staggerChildren: 0.3
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 }
}

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      className="bg-[#0c0a06] relative text-[#ffffff]"
    >
      <motion.div
        className="absolute w-[600px] h-[600px] bg-amber-500/30 rounded-full blur-3xl opacity-20"
        animate={{ y: [0, -30, 0] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <Navbar />

      <motion.header
    initial={{ opacity: 0, y: -50 }}animate={{ opacity: 1, y: 0 }} transition={{ duration: 1,delay: 0.5, ease: "easeInOut" }}
        
        className="relative z-50 p-6 hidden md:flex flex-wrap justify-between items-start gap-4"
      >
        <div className="bg-[#f2a60d] text-[#0c0a06] p-4 -rotate-2 border-2 border-[#0c0a06] shadow-xl">
          <h1 className="font-marker text-4xl leading-none">
            NO RULES. <br />
            JUST CHAT.
          </h1>
        </div>
        <div className="flex flex-col items-end gap-2">
          <div className="bg-white text-[#0c0a06] font-bold px-4 py-1 rotate-1 text-xs uppercase tracking-tighter">
            12,403 souls tried
          </div>
          <div className="flex gap-2">
            <a
              href="#footer"
              className="bg-[#0c0a06] border-2 border-[#f2a60d] text-[#f2a60d] px-6 py-2 font-marker hover:bg-[#f2a60d] hover:text-[#0c0a06] transition-all"
            >
              JOIN US
            </a>
          </div>
        </div>
      </motion.header>

      <motion.main
initial={{ opacity: 0, y: 50 }}animate={{ opacity: 1, y: 0 }} transition={{ duration: 1,delay: 1, ease: "easeInOut" }}
       className="relative max-w-7xl mx-auto px-4 py-12 mt-16 md:mt-0 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0">
        <div className="lg:col-span-7 z-20 flex flex-col gap-8">
          <div className="relative group">
            <motion.div
initial={{ opacity: 0, scale: 0.8 }}animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5,delay: 1.5, ease: "easeInOut" }}
             className="absolute -top-6 -left-4 tape-effect px-8 py-2 text-[#0c0a06] font-bold z-10">
              URGENT
            </motion.div>
            <motion.div
initial={{ opacity: 0  }}animate={{ opacity: 1  }}   transition={{ duration: 1,delay: 2, ease: "easeInOut" }}
             className="bg-[#1a160f] p-8 border-4 border-white/10 rotate-1 shadow-2xl">
              <h2 className="font-marker text-6xl md:text-8xl text-[#f2a60d] leading-none mb-4">
                BREAK THE SCREEN.
              </h2>
              <h2 className="font-marker text-5xl md:text-7xl text-white leading-none">
                FIND YOUR TRIBE.
              </h2>
              <p className="mt-8 text-xl max-w-md border-l-4 border-[#f2a60d] pl-4 italic text-white/80">
                The internet is a prison. This is your escape. Talk to anyone,
                anywhere, about anything.
              </p>
            </motion.div>
          </div>
          <div className="bg-white text-[#0c0a06] p-8 -rotate-1 self-start shadow-xl max-w-sm">
            <h3 className="font-marker text-3xl mb-4">CONFORMITY IS CRINGE.</h3>
            <p className="font-bold mb-4 uppercase text-sm tracking-widest">
              Chat is free. No profiles. No tracking. No filters.
            </p>
            <div className="flex flex-col gap-4">
              <Link href={"/random-chat"}>
                <button className="w-full bg-[#f2a60d] p-4 font-marker text-3xl border-2 border-[#0c0a06] hover:translate-x-1 hover:-translate-y-1 transition-transform shadow-[4px_4px_0px_0px_rgba(12,10,6,1)]">
                  START CHATTING
                </button>
              </Link>
              <div className="flex gap-2">
                <button className="flex-1 bg-[#0c0a06] text-white p-2 font-bold text-xs uppercase">
                  Video Only
                </button>
                <button className="flex-1 bg-[#0c0a06] text-white p-2 font-bold text-xs uppercase border-2 border-[#f2a60d]">
                  Text Only
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-5 relative min-h-[600px]">
          <div className="absolute top-0 right-0 w-64 h-64 rotate-6 border-4 border-white z-10 shadow-xl overflow-hidden">
            <img
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzBHT0wKd7mTiDLUj0v1REWWnTWZJeEdtFVWW_QtrWE15GTK7Oy3QhIwYsU9KxPEa5oUjzLPcU8adHKfLVi6tPsyn7jovhgOoDiwLutSdMbAOZZTxay_xrK7TX_kVxlvGps0BGhnIwlozT0hexVqLzDfjJVpsFkTW0lZToKVbGAwp_ekwyK6Hglan-Gr6FwGHe1MHyJPKAzucVNLJqLgTGC0bECQRkkQ47u9sNB98mQEoVUMRYuevJ8Wj1n4wf6YkRfWHjtrhAuew"
            />
          </div>
          <div className="absolute top-20 left-10 w-72 h-48 -rotate-12 border-4 border-[#f2a60d] z-20 shadow-xl overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_vAUtH6FTMq-61TSXaVWiH5wqQgrTvlJbrapwqd9ttoZIe6V7AM2g59CopP2z9fi8cCmBqaz-fAYBw2ckziDK8YeNGDbZJCIm4S9z-VI1rb504q1P-sPk32xduRFBkjvsskHvgHdLGCSyJ_cYItzQHW-sPG8oD0hlE3i4bK-5gjG_-vpNJO3IgMdtYqE9_xtspBl3XLxevdsyaaOYNMyb0594XuuUG2EEsnoGm8L3VDwfSZpNKksxHcOrtV_X5Qi9MZfKxzCEgPs"
            />
          </div>
          <div className="absolute bottom-20 right-10 w-80 h-64 rotate-3 border-8 border-[#0c0a06] z-10 shadow-2xl overflow-hidden">
            <img
              className="w-full h-full object-cover brightness-75"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2KyPvCvBi-TtQffC9xXcypNQepl2LUdhI41NXW5WxdL8SsZX8S44QLy7bJzjQHENyZWM8ibnSc-wFO5b2uxLV0oky7OrwUvbQ_vXrs96edo-MEFSWlEjz62MQV9tq53qJlYs90_pYBCeiiLfh-VjIhaguR_222Ba70JXFUUjJEoCQFtXzHeEr4lmecqVSrGvMP6Yk4dCveSjYXf4VCqOU1IeRnkT0NE6lmzM9WXY72g27MhwmubqJW1Gn5wCFIz58fHJXKEkviUA"
            />
          </div>
          <div className="absolute bottom-0 left-0 w-56 h-72 -rotate-6 border-4 border-white z-30 shadow-xl overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtPK8YthkBXHrhN0g-nmOF6xxNY89w230fp6gGBRzJgAL1Kjbx42C4VSrf3bvY3lWXPeL9abYlwGeA2ea6N4mVLvZyzNspTCMhP3YuwoVBpsqhzwXPLJ-hh_8gEsI7cJqjQ56_2Knyhr1MHLfpEGHc5Q0haUB0BzWRmb1CVhL2eGgNze9c7Ovw0qTKYE1jF1cwVcU64GF3zvD3QaZEcy-RbPETg7h3EWzOsDrl7fAMJmHunB8966A8sx2xFC71B0E86Gm-jBNAzso"
            />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-marker text-[#f2a60d] text-9xl opacity-20 pointer-events-none select-none">
            CHAOS
          </div>
        </div>
      </motion.main>

      <section className="py-24 bg-[#f2a60d] text-[#0c0a06] overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-8 bg-[#0c0a06] -skew-y-1 origin-left"></div>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
          <div className="relative group">
            <div className="bg-[#0c0a06] text-white p-8 rotate-1 paper-stack h-full">
              <span className="material-icons text-[#f2a60d] text-5xl mb-4">
                bolt
              </span>
              <h4 className="font-marker text-3xl mb-2">ZERO FRICTION</h4>
              <p className="text-sm">
                Don't sign your life away. Enter. Chat. Leave. No history, no
                trail, no regrets.
              </p>
            </div>
          </div>
          <div className="relative group">
            <div className="bg-white p-8 -rotate-2 paper-stack h-full border-2 border-[#0c0a06]">
              <span className="material-icons text-[#0c0a06] text-5xl mb-4">
                public
              </span>
              <h4 className="font-marker text-3xl mb-2">GLOBAL CHAOS</h4>
              <p className="text-sm text-[#0c0a06]/70">
                Connect with the fringes of the world. Find people who actually
                get it. No geographical walls.
              </p>
            </div>
          </div>
          <div className="relative group">
            <div className="bg-[#0c0a06] text-white p-8 rotate-2 paper-stack h-full">
              <span className="material-icons text-[#f2a60d] text-5xl mb-4">
                verified_user
              </span>
              <h4 className="font-marker text-3xl mb-2">RADICAL SAFETY</h4>
              <p className="text-sm">
                We protect the vibe. Toxic energy is incinerated by our AI. Your
                privacy is non-negotiable.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-[#1a160f] relative">
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="absolute -top-20 left-0 text-[#f2a60d] font-marker text-9xl opacity-10 select-none">
            ACT NOW
          </div>
          <h2 className="font-marker text-7xl md:text-9xl mb-12 leading-none">
            DON'T BE <br />A GHOST.
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <button className="bg-[#f2a60d] text-[#0c0a06] px-12 py-6 font-marker text-4xl hover:scale-110 transition-transform shadow-[8px_8px_0px_0px_white]">
              <a href="/random-chat">JOIN THE CHAOS</a>
            </button>
          </div>
          <p className="mt-12 text-white/40 font-bold uppercase tracking-widest text-xs">
            JOIN 500K+ REBELS WORLDWIDE
          </p>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
}
