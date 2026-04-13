const TacticalMap = () => {
  return (
    <div className="relative w-full aspect-[16/9] overflow-hidden border border-[#e4e2dd]/10">
      {/* Tactical overlay corners */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#8c1c13]/40 z-10" />
      <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#8c1c13]/40 z-10" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#8c1c13]/40 z-10" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#8c1c13]/40 z-10" />
      
      <div className="absolute top-2 left-4 font-['Space_Mono'] text-[9px] tracking-[0.3em] text-[#8c1c13]/50 z-10">
        SAT-FEED // LIVE
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2440.5!2d20.5584!3d52.2684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDE2JzA2LjIiTiAyMMKwMzMnMzAuMiJF!5e0!3m2!1sen!2spl!4v1"
        className="w-full h-full border-0 invert-[0.93] hue-rotate-180 brightness-[0.7] contrast-[1.3] saturate-[0.3]"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Mission Location"
      />
    </div>
  );
};

export default TacticalMap;
