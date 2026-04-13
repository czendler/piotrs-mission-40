import { motion } from "framer-motion";
import NoiseOverlay from "@/components/NoiseOverlay";
import CustomCursor from "@/components/CustomCursor";
import CountdownTimer from "@/components/CountdownTimer";
import TextScramble from "@/components/TextScramble";
import MagneticButton from "@/components/MagneticButton";
import TacticalMap from "@/components/TacticalMap";
import { downloadICS, getGoogleCalendarUrl } from "@/lib/calendar";

const ease = [0.22, 1, 0.36, 1];

const Index = () => {
  return (
    <div className="relative min-h-screen bg-[#070709] cursor-none overflow-hidden selection:bg-[#8c1c13]/30 selection:text-[#e4e2dd]">
      <NoiseOverlay />
      <CustomCursor />

      {/* Light leaks */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div
          className="absolute w-[60vw] h-[60vw] rounded-full opacity-[0.04] blur-[120px]"
          style={{
            background: "radial-gradient(circle, #8c1c13 0%, transparent 70%)",
            top: "10%",
            right: "-10%",
            animation: "drift1 25s ease-in-out infinite alternate",
          }}
        />
        <div
          className="absolute w-[50vw] h-[50vw] rounded-full opacity-[0.03] blur-[100px]"
          style={{
            background: "radial-gradient(circle, #e4e2dd 0%, transparent 70%)",
            bottom: "5%",
            left: "-15%",
            animation: "drift2 30s ease-in-out infinite alternate",
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 px-[clamp(1.5rem,6vw,8rem)] py-[clamp(3rem,8vh,6rem)]">
        
        {/* Classified header bar */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease, delay: 0.3 }}
          className="flex items-center gap-4 mb-[clamp(4rem,12vh,8rem)]"
        >
          <div className="w-2 h-2 rounded-full bg-[#8c1c13] animate-pulse" />
          <span className="font-['Space_Mono'] text-[10px] tracking-[0.4em] text-[#e4e2dd]/25 uppercase">
            Classified // Eyes Only // MI6-PL Division
          </span>
        </motion.div>

        {/* Hero section — asymmetric */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-[clamp(2rem,4vw,5rem)] mb-[clamp(4rem,10vh,8rem)]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, ease, delay: 0.6 }}
            >
              <p className="font-['Space_Mono'] text-[10px] tracking-[0.5em] text-[#8c1c13] mb-4 uppercase">
                Mission Briefing №040
              </p>
              <h1
                className="font-['Cormorant_Garamond'] text-[clamp(3.5rem,10vw,9rem)] leading-[0.85] text-[#e4e2dd] font-light"
                style={{ transform: "rotate(-0.5deg)" }}
              >
                <TextScramble text="PIOTR" delay={1200} />
              </h1>
              <div className="flex items-baseline gap-4 mt-4" style={{ transform: "rotate(0.3deg)" }}>
                <span className="font-['Cormorant_Garamond'] text-[clamp(1.2rem,3vw,2.5rem)] text-[#e4e2dd]/40 font-light italic">
                  achieves
                </span>
                <span className="font-['Space_Mono'] text-[clamp(3rem,8vw,7rem)] text-[#8c1c13] leading-none font-bold">
                  <TextScramble text="LVL 40" delay={1800} />
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, ease, delay: 1.5 }}
              className="origin-left h-[1px] bg-gradient-to-r from-[#e4e2dd]/20 to-transparent mt-10 mb-8 max-w-md"
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2 }}
              className="font-['Cormorant_Garamond'] text-[clamp(1rem,2vw,1.4rem)] text-[#e4e2dd]/50 leading-relaxed max-w-lg italic"
            >
              Your presence is requested for a classified gathering. 
              Formal attire recommended. Prepare for an evening of 
              unparalleled sophistication.
            </motion.p>
          </div>

          {/* Right side — countdown */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease, delay: 1.2 }}
            className="flex flex-col justify-center lg:items-end"
            style={{ transform: "rotate(0.5deg)" }}
          >
            <p className="font-['Space_Mono'] text-[9px] tracking-[0.4em] text-[#e4e2dd]/20 mb-6 uppercase">
              Time to deployment
            </p>
            <CountdownTimer />
          </motion.div>
        </div>

        {/* Bento grid — event details */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease, delay: 2.2 }}
          className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-[1px] bg-[#e4e2dd]/5 mb-[clamp(3rem,6vh,5rem)]"
          style={{ transform: "rotate(-0.3deg)" }}
        >
          {/* Left — Details */}
          <div className="bg-[#0a0a0d] p-[clamp(1.5rem,3vw,3rem)] space-y-8">
            <div>
              <span className="font-['Space_Mono'] text-[9px] tracking-[0.4em] text-[#8c1c13]/60 uppercase block mb-2">
                Date
              </span>
              <span className="font-['Cormorant_Garamond'] text-[clamp(1.5rem,3vw,2.2rem)] text-[#e4e2dd] font-light">
                25 April 2026
              </span>
            </div>
            <div>
              <span className="font-['Space_Mono'] text-[9px] tracking-[0.4em] text-[#8c1c13]/60 uppercase block mb-2">
                Time
              </span>
              <span className="font-['Cormorant_Garamond'] text-[clamp(1.5rem,3vw,2.2rem)] text-[#e4e2dd] font-light">
                17:30 CET
              </span>
            </div>
            <div>
              <span className="font-['Space_Mono'] text-[9px] tracking-[0.4em] text-[#8c1c13]/60 uppercase block mb-2">
                Location
              </span>
              <span className="font-['Cormorant_Garamond'] text-[clamp(1rem,2vw,1.4rem)] text-[#e4e2dd]/80 font-light leading-relaxed block">
                Sala pod Kasztanowcami
              </span>
              <span className="font-['Space_Mono'] text-[10px] text-[#e4e2dd]/30 leading-relaxed block mt-1">
                Wiejca 74, 05-085 Wiejca
                <br />
                (Trasa Kampinos – Leszno)
              </span>
            </div>
          </div>

          {/* Right — Map */}
          <div className="bg-[#0a0a0d] p-[clamp(0.5rem,1vw,1rem)]">
            <TacticalMap />
          </div>
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.8 }}
          className="flex flex-wrap gap-4 mb-[clamp(4rem,10vh,8rem)]"
          style={{ transform: "rotate(0.2deg)" }}
        >
          <MagneticButton onClick={downloadICS}>
            ↓ Download .ICS
          </MagneticButton>
          <MagneticButton href={getGoogleCalendarUrl()}>
            + Google Calendar
          </MagneticButton>
        </motion.div>

        {/* Footer line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3.2 }}
          className="flex items-center justify-between border-t border-[#e4e2dd]/5 pt-8"
        >
          <span className="font-['Space_Mono'] text-[9px] tracking-[0.3em] text-[#e4e2dd]/15 uppercase">
            This message will self-destruct
          </span>
          <span className="font-['Space_Mono'] text-[9px] tracking-[0.3em] text-[#e4e2dd]/15">
            007 // PL
          </span>
        </motion.div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,700;1,300;1,400&family=Space+Mono:wght@400;700&display=swap');
        
        @keyframes drift1 {
          0% { transform: translate(0, 0) scale(1); }
          100% { transform: translate(-5vw, 8vh) scale(1.15); }
        }
        @keyframes drift2 {
          0% { transform: translate(0, 0) scale(1); }
          100% { transform: translate(8vw, -5vh) scale(1.1); }
        }
      `}</style>
    </div>
  );
};

export default Index;
