import React from "react";
import { Book } from "../types";
import { 
  Atom, 
  FlaskConical, 
  Microscope, 
  Activity, 
  Phone, 
  Mail, 
  MapPin, 
  Sun, 
  Lightbulb, 
  Sparkles,
  Dna,
  Cpu,
  Monitor,
  Flame,
  Search,
  Hourglass,
  Rocket
} from "lucide-react";
import VidyatreeLogo from "./VidyatreeLogo";

interface BookCoverProps {
  book: Book;
  className?: string;
  viewMode?: "front" | "back" | "full";
}

export default function BookCover({ book, className = "", viewMode = "front" }: BookCoverProps) {
  const [imageError, setImageError] = React.useState(false);
  const classNumeral = book.classLevel.replace("Class ", "");

  const renderBannerFront = () => (
    <div className="relative w-full h-full overflow-hidden bg-slate-950 select-none group">
      <img
        src={book.bannerImageUrl}
        alt={`${book.title} - Front Cover`}
        className="absolute inset-y-0 right-0 h-full w-[202%] max-w-none object-cover object-right pointer-events-none select-none transition-transform duration-500 group-hover:scale-105"
        referrerPolicy="no-referrer"
        onError={() => setImageError(true)}
      />
      {/* Book spine depth shadow on left */}
      <div className="absolute inset-y-0 left-0 w-4 bg-gradient-to-r from-black/60 via-black/20 to-transparent pointer-events-none" />
      {/* Right edge paper crease */}
      <div className="absolute inset-y-0 right-0 w-1 bg-gradient-to-l from-black/25 to-transparent pointer-events-none" />
      {/* Class badge pill on top right */}
      <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full bg-slate-950/80 backdrop-blur-xs text-[10px] font-bold text-white shadow-md border border-white/20">
        {book.classLevel}
      </div>
    </div>
  );

  const renderBannerBack = () => (
    <div className="relative w-full h-full overflow-hidden bg-slate-950 select-none group">
      <img
        src={book.bannerImageUrl}
        alt={`${book.title} - Back Cover`}
        className="absolute inset-y-0 left-0 h-full w-[202%] max-w-none object-cover object-left pointer-events-none select-none transition-transform duration-500 group-hover:scale-105"
        referrerPolicy="no-referrer"
        onError={() => setImageError(true)}
      />
      {/* Book spine depth shadow on right */}
      <div className="absolute inset-y-0 right-0 w-4 bg-gradient-to-l from-black/60 via-black/20 to-transparent pointer-events-none" />
      {/* Left edge paper crease */}
      <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-r from-black/25 to-transparent pointer-events-none" />
      {/* MRP badge */}
      <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded bg-amber-400 text-slate-950 text-[10px] font-black shadow-md border border-amber-500">
        MRP {book.price}
      </div>
    </div>
  );

  // =========================================================================
  // 1. REAL SCIENCE LAB MANUAL COVER (CLASS IX & X)
  // Replicating the physical printed CBSE Lab Manual covers
  // =========================================================================
  
  const renderScienceFront = () => {
    const isIX = book.classLevel === "Class 9";
    const romanText = isIX ? "IX" : "X";
    
    // Exact colors from physical cover
    const bgBase = isIX ? "bg-[#3387d5]" : "bg-[#c98e44]";
    const stripeColor1 = isIX ? "bg-[#2b7bc5]" : "bg-[#b97e36]";
    const stripeColor2 = isIX ? "bg-[#4395e2]" : "bg-[#d89d53]";

    return (
      <div className={`relative w-full h-full ${bgBase} text-white flex flex-col justify-between overflow-hidden select-none font-sans`}>
        {/* Background Vertical Striped Texture */}
        <div className="absolute inset-0 flex justify-between pointer-events-none opacity-40">
          <div className={`w-[14%] h-full ${stripeColor1}`} />
          <div className={`w-[12%] h-full ${stripeColor2}`} />
          <div className={`w-[18%] h-full ${stripeColor1}`} />
          <div className={`w-[10%] h-full ${stripeColor2}`} />
          <div className={`w-[16%] h-full ${stripeColor1}`} />
          <div className={`w-[15%] h-full ${stripeColor2}`} />
        </div>

        {/* Ambient Bokeh Particles */}
        <div className="absolute top-12 left-10 w-16 h-16 rounded-full bg-white/10 blur-md pointer-events-none" />
        <div className="absolute bottom-24 right-8 w-24 h-24 rounded-full bg-white/15 blur-lg pointer-events-none" />
        <div className="absolute top-1/2 left-4 w-12 h-12 rounded-full bg-white/10 blur-sm pointer-events-none" />

        {/* TOP SECTION: Publisher Logo + Title */}
        <div className="relative z-10 p-3 pb-1">
          {/* Top Row: Vidyatree Circular Logo */}
          <div className="flex items-center gap-2 mb-1.5">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white shadow-md border-2 border-white/80 p-0.5 flex items-center justify-center shrink-0">
              <VidyatreeLogo className="w-full h-full" showText={false} />
            </div>
            <div className="leading-tight">
              <div className="text-[10px] sm:text-[11px] font-black font-serif text-white tracking-wide uppercase drop-shadow-md">
                VIDYATREE
              </div>
              <div className="text-[7.5px] font-bold text-amber-200 uppercase tracking-wider">
                PUBLICATION
              </div>
            </div>
          </div>

          {/* Large Stylized "SCIENCE" Header */}
          <div className="mt-1">
            <h1 
              className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black tracking-tight leading-none text-white drop-shadow-[0_4px_6px_rgba(0,0,0,0.4)]"
              style={{
                WebkitTextStroke: isIX ? "1.5px #1e40af" : "1.5px #78350f",
                textShadow: "0 3px 0 rgba(0,0,0,0.3), 0 0 10px rgba(255,255,255,0.4)"
              }}
            >
              SCIENCE
            </h1>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="text-sm sm:text-base font-black tracking-wider text-slate-950 uppercase font-sans drop-shadow-xs">
                LAB MANUAL
              </span>
              <span className="text-[8px] font-bold text-white/90 bg-black/30 px-1.5 py-0.5 rounded backdrop-blur-xs">
                CBSE Practical
              </span>
            </div>
          </div>
        </div>

        {/* MIDDLE SECTION: Yellow Hexagon Badge & Lab Apparatus Visuals */}
        <div className="relative z-10 px-3 my-auto py-1">
          <div className="grid grid-cols-12 gap-1.5 items-center">
            
            {/* Left: Prominent Yellow Hexagon Class Badge */}
            <div className="col-span-4 flex flex-col items-center justify-center relative">
              {/* Floating Wireframe Hexagons */}
              <div className="absolute -top-3 -left-1 opacity-60">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                  <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5" />
                </svg>
              </div>
              <div className="absolute -bottom-2 -right-1 opacity-50">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                  <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5" />
                </svg>
              </div>

              {/* Main Yellow Hexagon */}
              <div className="relative w-16 h-18 sm:w-20 sm:h-22 flex items-center justify-center filter drop-shadow-lg">
                <svg viewBox="0 0 100 115" className="w-full h-full">
                  <polygon 
                    points="50 0, 100 28.8, 100 86.6, 50 115.4, 0 86.6, 0 28.8" 
                    fill="#facc15" 
                    stroke="#ffffff" 
                    strokeWidth="7"
                  />
                  <polygon 
                    points="50 6, 94 31, 94 84, 50 109, 6 84, 6 31" 
                    fill="none" 
                    stroke="#ca8a04" 
                    strokeWidth="2" 
                    opacity="0.6"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center pt-0.5">
                  <span className="text-[7.5px] sm:text-[8.5px] font-black uppercase tracking-wider text-slate-800 leading-none">
                    CLASS
                  </span>
                  <span className="text-2xl sm:text-3xl font-black text-indigo-950 leading-none mt-0.5 font-serif">
                    {romanText}
                  </span>
                </div>
              </div>

              {/* Newton's Cradle & Hourglass below hexagon */}
              <div className="flex items-center gap-1.5 mt-2 bg-black/30 backdrop-blur-xs px-2 py-1 rounded-lg border border-white/20">
                <Hourglass className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
                <span className="text-[7.5px] font-mono font-bold text-white uppercase">Viva & Lab</span>
              </div>
            </div>

            {/* Right: Circular Student Aperture & Lab Stand */}
            <div className="col-span-8 relative">
              <div className="relative w-full aspect-square max-h-36 sm:max-h-40 rounded-full p-1 bg-gradient-to-tr from-white via-white/80 to-amber-200 shadow-2xl border-2 border-white/90 mx-auto overflow-hidden">
                {/* Lab Girl Photo Frame */}
                <img 
                  src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=600&q=80" 
                  alt="Student using microscope in chemistry laboratory"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-full"
                />
                
                {/* Floating Apparatus Indicators */}
                <div className="absolute bottom-2 right-2 bg-slate-900/85 text-white p-1 rounded-full border border-white/60 shadow-md">
                  <Microscope className="w-4 h-4 text-cyan-300" />
                </div>
                <div className="absolute top-2 left-2 bg-slate-900/85 text-white p-1 rounded-full border border-white/60 shadow-md">
                  <FlaskConical className="w-3.5 h-3.5 text-amber-300" />
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* BOTTOM SECTION: 7 Colored Discipline Badges (Salmon, Gold, Lime, Olive, Teal, Cyan, Lavender) */}
        <div className="relative z-10 p-2.5 pt-1">
          <div className="text-[7px] uppercase font-bold tracking-wider text-white/80 mb-1 px-1 flex justify-between">
            <span>Physics • Chemistry • Biology</span>
            <span className="text-amber-300 font-mono">Formative & Summative</span>
          </div>

          <div className="grid grid-cols-7 gap-1">
            {/* 1. Salmon: Atom */}
            <div className="bg-[#ea7e70] aspect-square rounded-lg flex items-center justify-center shadow-md border border-white/40">
              <Atom className="w-4 h-4 text-white drop-shadow-xs" />
            </div>

            {/* 2. Gold: Conical Flask */}
            <div className="bg-[#e5a643] aspect-square rounded-lg flex items-center justify-center shadow-md border border-white/40">
              <FlaskConical className="w-4 h-4 text-white drop-shadow-xs" />
            </div>

            {/* 3. Lime Green: Beakers */}
            <div className="bg-[#a6c953] aspect-square rounded-lg flex items-center justify-center shadow-md border border-white/40">
              <div className="flex -space-x-1">
                <FlaskConical className="w-3.5 h-3.5 text-white drop-shadow-xs" />
              </div>
            </div>

            {/* 4. Olive Green: Microscope */}
            <div className="bg-[#7ea859] aspect-square rounded-lg flex items-center justify-center shadow-md border border-white/40">
              <Microscope className="w-4 h-4 text-white drop-shadow-xs" />
            </div>

            {/* 5. Mint Teal: Dynamic Test Tube */}
            <div className="bg-[#4ca794] aspect-square rounded-lg flex items-center justify-center shadow-md border border-white/40">
              <Flame className="w-4 h-4 text-white drop-shadow-xs" />
            </div>

            {/* 6. Cyan Blue: Benzene Molecule */}
            <div className="bg-[#339eb2] aspect-square rounded-lg flex items-center justify-center shadow-md border border-white/40">
              <Sparkles className="w-4 h-4 text-white drop-shadow-xs" />
            </div>

            {/* 7. Lavender Indigo: DNA Strand */}
            <div className="bg-[#3d75ab] aspect-square rounded-lg flex items-center justify-center shadow-md border border-white/40">
              <Dna className="w-4 h-4 text-white drop-shadow-xs" />
            </div>
          </div>
        </div>
      </div>
    );
  };

  // =========================================================================
  // 2. REAL SCIENCE LAB MANUAL BACK COVER (CLASS IX & X)
  // Replicating physical back cover with glassware circle, floating apparatus & Vidyatree publisher card
  // =========================================================================
  const renderScienceBack = () => {
    const isIX = book.classLevel === "Class 9";
    const bgBase = isIX ? "bg-[#3387d5]" : "bg-[#c98e44]";
    const stripeColor1 = isIX ? "bg-[#2b7bc5]" : "bg-[#b97e36]";
    const stripeColor2 = isIX ? "bg-[#4395e2]" : "bg-[#d89d53]";

    return (
      <div className={`relative w-full h-full ${bgBase} text-white flex flex-col justify-between p-3 sm:p-3.5 overflow-hidden select-none font-sans`}>
        {/* Background Vertical Striped Pattern */}
        <div className="absolute inset-0 flex justify-between pointer-events-none opacity-40">
          <div className={`w-[14%] h-full ${stripeColor1}`} />
          <div className={`w-[12%] h-full ${stripeColor2}`} />
          <div className={`w-[18%] h-full ${stripeColor1}`} />
          <div className={`w-[10%] h-full ${stripeColor2}`} />
          <div className={`w-[16%] h-full ${stripeColor1}`} />
          <div className={`w-[15%] h-full ${stripeColor2}`} />
        </div>

        {/* Floating Science Graphics: Magnifying glass, Rocket, Hourglass, Molecules */}
        {/* Top Left: Molecule Model */}
        <div className="absolute top-4 left-4 z-10 opacity-85">
          <div className="flex items-center gap-1 bg-black/25 backdrop-blur-xs px-2 py-1 rounded-full border border-white/30">
            <Atom className="w-3.5 h-3.5 text-cyan-300" />
            <span className="text-[7px] font-mono text-cyan-100 uppercase">Chemical Bonding</span>
          </div>
        </div>

        {/* Top Right: Optical Magnifying Glass */}
        <div className="absolute top-4 right-4 z-10 opacity-90">
          <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-xs border-2 border-white flex items-center justify-center shadow-md">
            <Search className="w-4 h-4 text-white" />
          </div>
        </div>

        {/* Middle Left: Retro Space Rocket */}
        <div className="absolute top-28 left-3 z-10 opacity-90">
          <div className="w-8 h-8 rounded-xl bg-indigo-900/60 border border-white/30 flex items-center justify-center shadow-md">
            <Rocket className="w-4 h-4 text-amber-300 -rotate-45" />
          </div>
        </div>

        {/* Middle Right: Sand Hourglass */}
        <div className="absolute top-28 right-3 z-10 opacity-90">
          <div className="w-8 h-8 rounded-xl bg-indigo-900/60 border border-white/30 flex items-center justify-center shadow-md">
            <Hourglass className="w-4 h-4 text-yellow-300" />
          </div>
        </div>

        {/* CENTERPIECE: Circular Glassware Vignette */}
        <div className="relative z-10 my-auto py-2 flex flex-col items-center">
          <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full p-1 bg-white shadow-2xl border-2 border-white/90 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=500&q=80" 
              alt="Laboratory Glassware Chemistry Solutions"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover rounded-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end justify-center pb-2">
              <span className="text-[8px] font-black text-amber-300 uppercase tracking-wider font-mono">
                Practical Record
              </span>
            </div>
          </div>

          <div className="mt-2 text-center">
            <div className="text-[9px] font-bold text-white drop-shadow-md">
              Comprehensive Physics, Chemistry & Biology
            </div>
            <div className="text-[7.5px] text-white/80">
              Precautions • Observations • Tabular Calculations • Viva
            </div>
          </div>
        </div>

        {/* BOTTOM OFFICIAL PUBLISHER BLOCK (Matching the physical card exactly) */}
        <div className="relative z-10 bg-white text-slate-900 rounded-xl p-2.5 shadow-xl border-2 border-white/80">
          <div className="flex items-start justify-between gap-2">
            
            {/* Publisher Logo + Address Details */}
            <div className="flex-grow">
              <div className="flex items-center gap-1.5 mb-1">
                <div className="w-6 h-6 rounded-full bg-emerald-50 border border-emerald-300 flex items-center justify-center shrink-0">
                  <VidyatreeLogo className="w-full h-full" showText={false} />
                </div>
                <div>
                  <h4 className="text-[10px] sm:text-[11px] font-black font-serif text-emerald-900 tracking-tight leading-none">
                    VIDYATREE PUBLICATION
                  </h4>
                  <span className="text-[7px] text-emerald-700 font-bold uppercase tracking-wider">
                    Educational Excellence
                  </span>
                </div>
              </div>

              {/* Blue Phone/Email Pill Container (as on real cover) */}
              <div className="bg-sky-50 border border-sky-200 rounded-md p-1 my-1 space-y-0.5">
                <div className="text-[7.5px] text-sky-950 font-bold flex items-center gap-1 font-mono">
                  <Phone className="w-2.5 h-2.5 text-sky-700 shrink-0" />
                  <span>+91 9598632755, 9598532755</span>
                </div>
                <div className="text-[7.5px] text-sky-950 font-medium flex items-center gap-1">
                  <Mail className="w-2.5 h-2.5 text-sky-700 shrink-0" />
                  <span>vidyatreepublication@gmail.com</span>
                </div>
              </div>

              {/* Address */}
              <div className="text-[7px] text-slate-600 leading-tight flex items-start gap-1">
                <MapPin className="w-2.5 h-2.5 text-slate-500 shrink-0 mt-0.5" />
                <span>173/21, Dr. B.N. Verma Road, Aminabad, Lucknow - 226018</span>
              </div>
            </div>

            {/* M.R.P. Box */}
            <div className="bg-slate-50 border-2 border-slate-300 rounded-lg px-2 py-1 text-center shrink-0 self-end">
              <div className="text-[7px] font-bold text-slate-500 uppercase leading-none">M.R.P.</div>
              <div className="text-xs sm:text-sm font-black text-slate-950 font-mono mt-0.5">{book.price}</div>
            </div>

          </div>
        </div>
      </div>
    );
  };

  // =========================================================================
  // 3. PHYSICS PRACTICAL MANUAL (CLASS 11 & 12)
  // Yellow/Amber for 11, Sky/Navy for 12 with optics, radiation and atomic arches
  // =========================================================================
  const renderPhysicsFront = () => {
    const is11 = book.classLevel === "Class 11";
    const bgGradient = is11
      ? "from-amber-500 via-yellow-500 to-amber-600"
      : "from-sky-500 via-blue-600 to-indigo-800";

    return (
      <div className={`relative w-full h-full bg-gradient-to-b ${bgGradient} text-white flex flex-col justify-between p-3.5 sm:p-4 overflow-hidden select-none`}>
        {/* Top Header */}
        <div className="relative z-10">
          <div className="text-[9px] font-bold text-slate-900/90 tracking-wide uppercase">
            As per latest CBSE Syllabus
          </div>
          <div className="text-[10px] sm:text-[11px] font-serif font-bold text-slate-950 mt-0.5">
            Practical Manual of
          </div>
          <h3 className="text-2xl sm:text-3xl font-black font-sans tracking-tight text-white drop-shadow-[0_3px_4px_rgba(0,0,0,0.6)]">
            PHYSICS
          </h3>
        </div>

        {/* 3 Physical Arches: Optics, Radiation & Atomic */}
        <div className="relative z-10 my-auto py-1">
          <div className="grid grid-cols-3 gap-1.5 items-end">
            <div className="h-28 sm:h-32 rounded-t-full overflow-hidden border-2 border-white/70 shadow-md relative bg-slate-900">
              <img 
                src="https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?auto=format&fit=crop&w=400&q=80" 
                alt="Filament optics"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col items-center justify-end pb-1.5">
                <Lightbulb className="w-3.5 h-3.5 text-amber-300" />
                <span className="text-[7px] font-bold text-amber-200 uppercase font-mono">Optics</span>
              </div>
            </div>

            <div className="h-32 sm:h-36 rounded-t-full overflow-hidden border-2 border-white shadow-lg relative bg-slate-900">
              <img 
                src="https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=400&q=80" 
                alt="Solar radiation"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex flex-col items-center justify-end pb-1.5">
                <Sun className="w-3.5 h-3.5 text-yellow-300" />
                <span className="text-[7px] font-bold text-yellow-200 uppercase font-mono">Radiation</span>
              </div>
            </div>

            <div className="h-28 sm:h-32 rounded-t-full overflow-hidden border-2 border-white/70 shadow-md relative bg-indigo-950">
              <div className="w-full h-full flex flex-col items-center justify-center p-2 relative z-10">
                <Atom className="w-8 h-8 text-cyan-300 drop-shadow-[0_0_8px_#38bdf8]" />
                <span className="text-[7px] font-bold text-cyan-200 uppercase font-mono mt-1">Atomic</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Logo & Class Badge */}
        <div className="relative z-10 flex items-end justify-between pt-2 border-t border-white/30">
          <div className="flex items-center gap-1.5 bg-white px-2 py-1 rounded-lg shadow-sm">
            <VidyatreeLogo className="w-4 h-4 text-emerald-800" showText={false} />
            <span className="text-[9px] font-black font-serif text-slate-900 leading-none">
              VIDYATREE
            </span>
          </div>

          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-red-600 text-white border-2 border-white shadow-lg flex flex-col items-center justify-center">
            <span className="text-[7px] uppercase font-bold leading-none">Class</span>
            <span className="text-sm sm:text-base font-black leading-none">{classNumeral}</span>
          </div>
        </div>
      </div>
    );
  };

  // =========================================================================
  // 4. CHEMISTRY PRACTICAL MANUAL (CLASS 11 & 12)
  // Rose/Pink for 11, Purple for 12 with dripping wave header and titration glassware
  // =========================================================================
  const renderChemistryFront = () => {
    const is11 = book.classLevel === "Class 11";
    const headerBg = is11 ? "bg-rose-600" : "bg-purple-700";
    const bodyBg = is11 ? "bg-rose-50" : "bg-purple-50";

    return (
      <div className={`relative w-full h-full ${bodyBg} text-slate-900 flex flex-col justify-between p-3.5 sm:p-4 overflow-hidden select-none`}>
        {/* Dripping Wave Top Header */}
        <div className={`absolute top-0 left-0 right-0 ${headerBg} text-white p-3.5 sm:p-4 rounded-b-3xl shadow-lg z-10`}>
          <div className="text-[9px] font-bold text-white/80 uppercase tracking-wide">
            CBSE Practical Syllabus
          </div>
          <div className="text-[10px] font-serif text-white/90">
            Practical Manual of
          </div>
          <h3 className="text-2xl sm:text-3xl font-black font-sans tracking-tight text-white drop-shadow-md">
            CHEMISTRY
          </h3>
        </div>

        {/* Center Laboratory Titration Visual */}
        <div className="relative z-10 mt-20 sm:mt-24 my-auto py-1">
          <div className="relative rounded-2xl overflow-hidden shadow-lg border-2 border-white bg-slate-900 h-32 sm:h-36">
            <img 
              src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=500&q=80" 
              alt="Chemistry Glassware Titration"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent flex items-end justify-between p-2">
              <div className="flex items-center gap-1 text-[9px] font-bold text-amber-300">
                <FlaskConical className="w-3.5 h-3.5" />
                <span>Volumetric Analysis & Salt Tests</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative z-10 flex items-end justify-between pt-2 border-t border-slate-200">
          <div className="flex items-center gap-1.5 bg-white px-2 py-1 rounded-lg shadow-sm border border-slate-200">
            <VidyatreeLogo className="w-4 h-4 text-emerald-800" showText={false} />
            <span className="text-[9px] font-black font-serif text-slate-900 leading-none">
              VIDYATREE
            </span>
          </div>

          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-orange-600 text-white border-2 border-white shadow-md flex flex-col items-center justify-center">
            <span className="text-[7px] uppercase font-bold leading-none">Class</span>
            <span className="text-sm sm:text-base font-black leading-none">{classNumeral}</span>
          </div>
        </div>
      </div>
    );
  };

  // =========================================================================
  // 5. BIOLOGY PRACTICAL MANUAL (CLASS 11 & 12)
  // Coral for 11, Emerald for 12 with microscope, histology slide & botany flower
  // =========================================================================
  const renderBiologyFront = () => {
    const is11 = book.classLevel === "Class 11";
    const bgGradient = is11 
      ? "from-rose-500 via-red-600 to-rose-700" 
      : "from-emerald-500 via-green-600 to-teal-700";

    return (
      <div className={`relative w-full h-full bg-gradient-to-b ${bgGradient} text-white flex flex-col justify-between p-3.5 sm:p-4 overflow-hidden select-none`}>
        <div className="relative z-10">
          <div className="text-[9px] font-bold text-white/80 uppercase tracking-wide">
            CBSE Illustrated Manual
          </div>
          <div className="text-[10px] font-serif text-white/90">
            Practical Manual of
          </div>
          <h3 className="text-2xl sm:text-3xl font-black font-sans tracking-tight text-white drop-shadow-md">
            BIOLOGY
          </h3>
        </div>

        {/* 3 Botanical & Microscope Arches */}
        <div className="relative z-10 my-auto py-1">
          <div className="grid grid-cols-3 gap-1.5 items-end">
            <div className="h-28 sm:h-32 rounded-t-full overflow-hidden border-2 border-white/70 shadow-md relative bg-slate-900">
              <img 
                src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=400&q=80" 
                alt="Microscope student"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col items-center justify-end pb-1">
                <Microscope className="w-3.5 h-3.5 text-emerald-300" />
                <span className="text-[7px] font-bold text-white uppercase font-mono">Microscopy</span>
              </div>
            </div>

            <div className="h-32 sm:h-36 rounded-t-full overflow-hidden border-2 border-white shadow-lg relative bg-slate-900">
              <img 
                src="https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&w=400&q=80" 
                alt="Plant tissue histology"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col items-center justify-end pb-1">
                <Dna className="w-3.5 h-3.5 text-cyan-300" />
                <span className="text-[7px] font-bold text-white uppercase font-mono">Histology</span>
              </div>
            </div>

            <div className="h-28 sm:h-32 rounded-t-full overflow-hidden border-2 border-white/70 shadow-md relative bg-slate-900">
              <img 
                src="https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=400&q=80" 
                alt="Botany floral structure"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col items-center justify-end pb-1">
                <Sun className="w-3.5 h-3.5 text-yellow-300" />
                <span className="text-[7px] font-bold text-white uppercase font-mono">Botany</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative z-10 flex items-end justify-between pt-2 border-t border-white/30">
          <div className="flex items-center gap-1.5 bg-white px-2 py-1 rounded-lg shadow-sm">
            <VidyatreeLogo className="w-4 h-4 text-emerald-800" showText={false} />
            <span className="text-[9px] font-black font-serif text-slate-900 leading-none">
              VIDYATREE
            </span>
          </div>

          <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl ${is11 ? 'bg-red-800' : 'bg-green-800'} text-white border-2 border-white shadow-md flex flex-col items-center justify-center`}>
            <span className="text-[7px] uppercase font-bold leading-none">Class</span>
            <span className="text-sm sm:text-base font-black leading-none">{classNumeral}</span>
          </div>
        </div>
      </div>
    );
  };

  // =========================================================================
  // 6. MATHEMATICS LAB MANUAL (CLASS 9, 10, 11, 12)
  // =========================================================================
  const renderMathematicsFront = () => {
    let themeBg = "from-red-600 to-rose-900";
    if (book.classLevel === "Class 10") themeBg = "from-blue-600 to-cyan-900";
    else if (book.classLevel === "Class 11") themeBg = "from-emerald-600 to-teal-900";
    else if (book.classLevel === "Class 12") themeBg = "from-amber-600 to-orange-900";

    return (
      <div className={`relative w-full h-full bg-gradient-to-b ${themeBg} text-white flex flex-col justify-between p-3.5 sm:p-4 overflow-hidden select-none`}>
        <div className="relative z-10 text-center">
          <div className="text-[9px] uppercase tracking-widest font-bold text-amber-300">
            CBSE Activity Manual
          </div>
          <h3 className="text-xl sm:text-2xl font-black font-serif tracking-wider text-white drop-shadow-md mt-0.5">
            MATHEMATICS
          </h3>
          <div className="inline-block bg-white text-slate-900 px-3 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider shadow-sm mt-0.5">
            LAB MANUAL
          </div>
        </div>

        <div className="relative z-10 my-auto py-1">
          <div className="relative rounded-2xl overflow-hidden border-2 border-white/80 shadow-xl bg-slate-900 h-32 sm:h-36">
            <img 
              src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=500&q=80" 
              alt="Mathematics Geometry"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover opacity-85"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-white text-slate-900 border-4 border-amber-400 shadow-2xl flex flex-col items-center justify-center">
                <span className="text-[8px] font-bold uppercase leading-none text-slate-500">Class</span>
                <span className="text-xl font-black leading-none text-slate-900 font-serif">{classNumeral}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 flex items-end justify-between pt-2 border-t border-white/30">
          <div className="flex items-center gap-1.5 bg-white px-2 py-1 rounded-lg shadow-sm">
            <VidyatreeLogo className="w-4 h-4 text-emerald-800" showText={false} />
            <span className="text-[9px] font-black font-serif text-slate-900 leading-none">
              VIDYATREE
            </span>
          </div>

          <div className="text-[10px] font-bold text-amber-300 bg-black/40 px-2 py-1 rounded border border-white/20">
            20 Marks Internal Assessment
          </div>
        </div>
      </div>
    );
  };

  // =========================================================================
  // 7. PHYSICAL EDUCATION (CLASS 11 & 12)
  // =========================================================================
  const renderPhysicalEducationFront = () => {
    const isXI = book.classLevel === "Class 11";
    const bgGradient = isXI 
      ? "from-teal-600 via-emerald-700 to-green-900" 
      : "from-orange-500 via-amber-600 to-red-800";
    const romanNumeral = isXI ? "XI" : "XII";

    return (
      <div className={`relative w-full h-full bg-gradient-to-b ${bgGradient} text-white flex flex-col justify-between p-3.5 sm:p-4 overflow-hidden select-none`}>
        <div className="relative z-10">
          <div className="text-[9px] font-bold text-amber-300 uppercase tracking-wider">
            CBSE Health & Sports Curriculum
          </div>
          <h3 className="text-xl sm:text-2xl font-black font-sans tracking-tight text-white drop-shadow-md">
            PHYSICAL EDUCATION
          </h3>
          <div className="text-[10px] font-semibold text-white/90">
            Theory & Practical Manual
          </div>
        </div>

        <div className="relative z-10 my-auto py-1">
          <div className="grid grid-cols-2 gap-2 items-center">
            <div className="h-28 sm:h-32 rounded-2xl overflow-hidden border-2 border-white/80 shadow-md relative bg-slate-900">
              <img 
                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=400&q=80" 
                alt="Yoga posture"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-1.5">
                <span className="text-[8px] font-bold text-white uppercase">Yoga & Asanas</span>
              </div>
            </div>

            <div className="h-28 sm:h-32 rounded-2xl overflow-hidden border-2 border-white/80 shadow-md relative bg-slate-900">
              <img 
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=400&q=80" 
                alt="Fitness wellness"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-1.5">
                <span className="text-[8px] font-bold text-white uppercase">Fitness & SAI Tests</span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 flex items-end justify-between pt-2 border-t border-white/30">
          <div className="flex items-center gap-1.5 bg-white px-2 py-1 rounded-lg shadow-sm">
            <VidyatreeLogo className="w-4 h-4 text-emerald-800" showText={false} />
            <span className="text-[9px] font-black font-serif text-slate-900 leading-none">
              VIDYATREE
            </span>
          </div>

          <div className="w-10 h-10 rounded-full bg-white text-slate-900 border-2 border-amber-400 shadow-md flex flex-col items-center justify-center">
            <span className="text-[7px] uppercase font-bold leading-none text-slate-500">Class</span>
            <span className="text-sm font-black leading-none text-slate-900 font-serif">{romanNumeral}</span>
          </div>
        </div>
      </div>
    );
  };

  // =========================================================================
  // 8. COMPUTER NOTEBOOK (PRACTICAL RECORD)
  // =========================================================================
  const renderComputerFront = () => (
    <div className="relative w-full h-full bg-slate-900 text-white flex flex-col justify-between overflow-hidden select-none">
      <div className="bg-amber-400 text-blue-950 px-4 py-2.5 shadow-md flex items-center justify-between">
        <div>
          <span className="text-[8px] font-black tracking-wider uppercase block text-blue-900">Official Practical</span>
          <h3 className="text-base sm:text-lg font-black font-sans tracking-tight text-blue-950">
            COMPUTER NOTEBOOK
          </h3>
        </div>
        <div className="bg-blue-950 text-white px-2 py-0.5 rounded text-[9px] font-mono font-bold">
          IT & CS
        </div>
      </div>

      <div className="relative z-10 p-3 space-y-2 flex-grow flex flex-col justify-center">
        <div className="h-20 rounded-xl overflow-hidden border border-white/20 relative shadow-sm">
          <img 
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=400&q=80" 
            alt="Computer Programming Code"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-950/60 flex items-center justify-between px-3">
            <div className="text-[9px] font-mono text-cyan-300 font-bold">
              Algorithm • Flowchart • Code
            </div>
            <Monitor className="w-4 h-4 text-cyan-400" />
          </div>
        </div>

        <div className="h-20 rounded-xl overflow-hidden border border-white/20 relative shadow-sm">
          <img 
            src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=400&q=80" 
            alt="Robotic Technology"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-pink-950/60 flex items-center justify-between px-3">
            <div className="text-[9px] font-mono text-pink-300 font-bold">
              AI • Python • C++ • Java
            </div>
            <Cpu className="w-4 h-4 text-pink-400" />
          </div>
        </div>
      </div>

      <div className="bg-pink-600 px-4 py-2 flex items-center justify-between border-t border-pink-400/50">
        <div className="flex items-center gap-1.5 bg-white px-2 py-0.5 rounded shadow-sm">
          <VidyatreeLogo className="w-3.5 h-3.5 text-emerald-800" showText={false} />
          <span className="text-[8px] font-black font-serif text-slate-900 leading-none">
            VIDYATREE
          </span>
        </div>
        <span className="text-[9px] font-mono font-bold text-white bg-black/30 px-2 py-0.5 rounded">
          School & College
        </span>
      </div>
    </div>
  );

  // =========================================================================
  // 8. COMPETITIVE EXAM BOOKS COVER (NEET, JEE, CUET, NDA, SSC)
  // Sleek, high-impact entrance exam cover design with badge & PDF ebook seal
  // =========================================================================
  const renderCompetitiveExamFront = () => {
    return (
      <div className="relative w-full h-full bg-slate-950 text-white flex flex-col justify-between overflow-hidden select-none font-sans">
        {/* Dynamic Background Gradient & Pattern */}
        <div className={`absolute inset-0 opacity-40 ${book.colorScheme.bgGradient}`} />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:12px_12px] opacity-15 pointer-events-none" />

        {/* Ambient Top Glow */}
        <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-emerald-500/20 blur-2xl pointer-events-none" />
        <div className="absolute bottom-10 -left-10 w-32 h-32 rounded-full bg-blue-500/20 blur-2xl pointer-events-none" />

        {/* TOP HEADER: Vidyatree Branding & Exam Tag */}
        <div className="relative z-10 p-3 pb-1">
          <div className="flex items-center justify-between gap-2 border-b border-white/20 pb-1.5 mb-1.5">
            <div className="flex items-center gap-1.5 bg-white/95 rounded-lg px-2 py-0.5 shadow-xs">
              <VidyatreeLogo className="w-4 h-4" showText={false} />
              <div className="leading-none">
                <span className="text-[8px] font-black font-serif text-[#9E4835]">VIDYA</span>
                <span className="text-[8px] font-black font-serif text-[#15803D]">TREE</span>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <span className="text-[7.5px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-emerald-500/30 text-emerald-300 border border-emerald-500/40">
                {book.examType || "Entrance Series"}
              </span>
            </div>
          </div>

          {/* Golden/Cyan Solved Archive Badge */}
          {book.solvedYears && (
            <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-400/20 border border-amber-400/50 text-amber-300 text-[8px] font-bold mb-1">
              <Sparkles className="w-2.5 h-2.5" />
              <span>{book.solvedYears}</span>
            </div>
          )}

          {/* Main Book Title */}
          <h1 className="text-base sm:text-lg font-black font-serif text-white tracking-tight leading-tight drop-shadow-md line-clamp-3">
            {book.title}
          </h1>
          <p className="text-[8.5px] text-slate-300 font-medium mt-0.5">
            {book.curriculum}
          </p>
        </div>

        {/* MIDDLE SECTION: High Yield Bullets & E-Book Seal */}
        <div className="relative z-10 px-3 my-auto space-y-1.5">
          <div className="bg-white/10 backdrop-blur-xs rounded-lg p-2 border border-white/15">
            <div className="text-[8px] font-bold text-amber-300 uppercase tracking-wide mb-1 flex items-center gap-1">
              <Rocket className="w-2.5 h-2.5" /> Key Exam Weapons:
            </div>
            <ul className="text-[8px] text-slate-200 space-y-0.5 leading-tight">
              {book.highlights.slice(0, 3).map((h, i) => (
                <li key={i} className="truncate">• {h}</li>
              ))}
            </ul>
          </div>

          {/* PDF E-Book Callout */}
          <div className="flex items-center justify-between bg-gradient-to-r from-emerald-950/80 to-teal-950/80 border border-emerald-500/40 rounded-lg px-2.5 py-1 text-[8px]">
            <span className="font-bold text-emerald-300 flex items-center gap-1">
              📄 Read as PDF E-Book
            </span>
            <span className="text-amber-300 font-bold">
              Instant Access
            </span>
          </div>
        </div>

        {/* BOTTOM FOOTER STRIP */}
        <div className="relative z-10 bg-slate-900/90 border-t border-white/15 px-3 py-1.5 flex items-center justify-between text-white">
          <div className="leading-tight">
            <div className="text-[7.5px] font-bold text-slate-400 uppercase">
              Vidyatree Competitive
            </div>
            <div className="text-[8.5px] font-mono font-bold text-emerald-400">
              Aminabad, Lucknow
            </div>
          </div>

          <div className="text-right">
            <div className="text-[6.5px] text-slate-400 uppercase font-bold">M.R.P.</div>
            <div className="text-[10px] sm:text-xs font-black font-mono text-white">
              {book.price}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Dispatch Front Cover view by category (or real physical banner if available)
  const renderFrontCover = () => {
    if (book.bannerImageUrl && !imageError) {
      return renderBannerFront();
    }

    if (book.majorCategory === "competitive") {
      return renderCompetitiveExamFront();
    }

    switch (book.category) {
      case "Science":
        return renderScienceFront();
      case "Physics":
        return renderPhysicsFront();
      case "Chemistry":
        return renderChemistryFront();
      case "Biology":
        return renderBiologyFront();
      case "Mathematics":
        return renderMathematicsFront();
      case "Physical Education":
        return renderPhysicalEducationFront();
      case "Computer":
        return renderComputerFront();
      case "Medical & NEET":
      case "Engineering & JEE":
      case "CUET & Entrance":
      case "Defence & NDA":
      case "SSC & Government":
      case "Aptitude & Reasoning":
        return renderCompetitiveExamFront();
      default:
        return renderPhysicsFront();
    }
  };

  // Dispatch Back Cover (or real physical banner back half)
  const renderBackCover = () => {
    if (book.bannerImageUrl && !imageError) {
      return renderBannerBack();
    }

    if (book.category === "Science") {
      return renderScienceBack();
    }

    // Default Back Cover for Senior Secondary subjects
    return (
      <div className="relative w-full h-full bg-slate-900 text-white flex flex-col justify-between p-3.5 sm:p-4 overflow-hidden select-none font-sans">
        <div className={`absolute inset-0 opacity-25 ${book.colorScheme.bgGradient}`} />

        <div className="relative z-10 border-b border-white/20 pb-2 flex items-center justify-between">
          <div>
            <div className="text-[8px] uppercase font-bold tracking-wider text-emerald-400">
              Official CBSE Lab Manual
            </div>
            <h4 className="text-xs sm:text-sm font-bold font-serif text-white truncate max-w-[180px]">
              {book.title}
            </h4>
          </div>
          <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/10 text-white border border-white/20 shrink-0">
            {book.classLevel}
          </span>
        </div>

        <div className="relative z-10 my-auto py-2">
          <div className="bg-white/10 backdrop-blur-xs rounded-xl p-2.5 border border-white/15">
            <div className="text-[9px] font-bold text-amber-300 uppercase tracking-wide mb-1 flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> Core Practical Highlights:
            </div>
            <ul className="text-[8.5px] text-slate-200 space-y-0.5 leading-tight">
              {book.highlights.slice(0, 3).map((h, i) => (
                <li key={i} className="truncate">• {h}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Official Publisher Card */}
        <div className="relative z-10 bg-white text-slate-900 rounded-xl p-2.5 shadow-md border border-slate-200">
          <div className="flex items-start justify-between gap-2">
            <div>
              <div className="text-[10px] sm:text-xs font-black font-serif text-emerald-800 tracking-tight flex items-center gap-1">
                <VidyatreeLogo className="w-3.5 h-3.5 text-emerald-800 inline" showText={false} />
                VIDYATREE PUBLICATION
              </div>
              <div className="text-[8px] text-slate-600 leading-tight mt-1 flex items-center gap-1 font-mono">
                <Phone className="w-2.5 h-2.5 text-emerald-700 shrink-0" />
                <span>+91 9598632755, 9598532755</span>
              </div>
              <div className="text-[8px] text-slate-600 leading-tight mt-0.5 flex items-center gap-1">
                <Mail className="w-2.5 h-2.5 text-emerald-700 shrink-0" />
                <span>vidyatreepublication@gmail.com</span>
              </div>
              <div className="text-[7.5px] text-slate-500 mt-0.5 leading-tight flex items-start gap-1">
                <MapPin className="w-2.5 h-2.5 text-emerald-700 shrink-0 mt-0.5" />
                <span>173/21, Dr. B.N. Verma Road, Aminabad, Lucknow 226018</span>
              </div>
            </div>

            <div className="bg-slate-100 border border-slate-300 rounded px-1.5 py-1 text-center shrink-0 self-end">
              <div className="text-[7px] font-bold text-slate-500 uppercase">M.R.P.</div>
              <div className="text-[11px] sm:text-xs font-black text-slate-900 font-mono">{book.price}</div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Full Panoramic Spread (Back + Spine + Front)
  const renderFullSpread = () => {
    if (book.bannerImageUrl && !imageError) {
      return (
        <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border-2 border-slate-700 bg-slate-950 aspect-[16/10] select-none group">
          <img
            src={book.bannerImageUrl}
            alt={`${book.title} - Full Publisher Panoramic Spread`}
            className="w-full h-full object-contain bg-slate-950"
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
          />
          {/* Interactive spread zone indicators */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent px-4 py-2.5 flex items-center justify-between text-[11px] sm:text-xs text-white/90">
            <div className="flex items-center gap-1.5 font-bold text-emerald-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>◂ Back Cover (Publisher Address & MRP)</span>
            </div>
            <div className="px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-xs font-mono text-[10px] sm:text-[11px] text-amber-300 border border-white/20 font-bold">
              Central Spine
            </div>
            <div className="flex items-center gap-1.5 font-bold text-cyan-300">
              <span>Front Cover (Title & Experiments) ▸</span>
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="w-full grid grid-cols-12 rounded-2xl overflow-hidden shadow-2xl border-2 border-slate-300 bg-slate-950 aspect-[16/10]">
        {/* Back Cover (Left) */}
        <div className="col-span-5 relative h-full">
          {renderBackCover()}
        </div>

        {/* Central Book Spine (Middle) */}
        <div className="col-span-2 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-950 text-white flex flex-col items-center justify-between py-4 border-x border-white/20 shadow-inner relative select-none">
          <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-sm" />
          <div className="[writing-mode:vertical-rl] rotate-180 font-bold text-[9px] tracking-widest text-slate-300 uppercase truncate">
            {book.title}
          </div>
          <div className="text-[8px] font-mono font-bold text-amber-400 bg-black/50 px-1 py-0.5 rounded">
            {book.classLevel}
          </div>
        </div>

        {/* Front Cover (Right) */}
        <div className="col-span-5 relative h-full">
          {renderFrontCover()}
        </div>
      </div>
    );
  };

  if (viewMode === "full") {
    return (
      <div className={`w-full ${className}`}>
        {renderFullSpread()}
      </div>
    );
  }

  return (
    <div className={`relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border border-slate-200/80 ${className}`}>
      {viewMode === "back" ? renderBackCover() : renderFrontCover()}
    </div>
  );
}
