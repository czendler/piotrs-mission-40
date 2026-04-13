const TacticalMap = () => {
  return (
    <div className="relative w-full aspect-[16/9] overflow-hidden border border-[#e4e2dd]/10">
      {/* Tactical overlay corners */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#b8860b]/40 z-10" />
      <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#b8860b]/40 z-10" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#b8860b]/40 z-10" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#b8860b]/40 z-10" />
      
      <div className="absolute top-2 left-4 font-['Space_Mono'] text-[9px] tracking-[0.3em] text-[#b8860b]/50 z-10">
        PRZEKAZ SAT // NA ŻYWO
      </div>

      <a
        href="https://maps.app.goo.gl/G4peTYTon9AsBe2FA"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 z-20"
        title="Otwórz w Google Maps"
      />
      <iframe
        src="https://maps.google.com/maps?q=Wiejca%2074,%2005-085%20Wiejca&t=m&z=14&output=embed"
        className="w-full h-full border-0 invert-[0.93] hue-rotate-180 brightness-[0.7] contrast-[1.3] saturate-[0.3]"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Lokalizacja Misji"
      />
    </div>
  );
};

export default TacticalMap;
