import { ArrowRight, BookCheck, ShieldCheck, PhoneCall, Sparkles, CreditCard, Flame, FileText } from "lucide-react";
import { OFFICE_INFO, BOOKS } from "../data";

export default function HeroBanner() {
  const competitiveCount = BOOKS.filter(b => b.majorCategory === "competitive").length;
  const academicCount = BOOKS.filter(b => b.majorCategory === "academic").length;

  return (
    <div className="relative bg-slate-950 overflow-hidden border-b border-slate-800">
      {/* Background ambient lighting and pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:20px_20px] opacity-25" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
        {/* Top Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Official Publication Catalogue & Instant PDF E-Books</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black text-white tracking-tight leading-[1.15] max-w-4xl mx-auto">
          Academic Lab Manuals &{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
            Competitive Exam Books
          </span>
        </h1>

        <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
          Explore our complete catalogue across two major divisions: <strong className="text-white font-semibold">CBSE Academic Lab Manuals</strong> (Classes 9-12) with authentic printed covers, and <strong className="text-white font-semibold">Competitive Entrance Series</strong> (NEET, JEE, CUET, NDA, SSC) with interactive <strong className="text-emerald-400 font-semibold">Online PDF E-Book Reading</strong>.
        </p>

        {/* Quick CTAs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#catalogue"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl text-sm font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all shadow-lg shadow-emerald-950/50 hover:shadow-emerald-900/60 hover:-translate-y-0.5"
          >
            <span>Browse Full Catalogue</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>

          <a
            href="#catalogue"
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 transition-all"
          >
            <FileText className="mr-2 h-4 w-4 text-amber-400" />
            <span>Read PDF E-Books</span>
          </a>

          <a
            href="#payment-details"
            className="inline-flex items-center justify-center px-5 py-3.5 rounded-xl text-sm font-semibold text-slate-300 hover:text-white transition-colors"
          >
            <CreditCard className="mr-2 h-4 w-4 text-emerald-400" />
            <span>Bank & UPI Details</span>
          </a>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-2xl sm:text-3xl font-bold font-serif text-white">{academicCount}+</div>
            <div className="text-xs text-slate-400 mt-1">CBSE Lab Manuals</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold font-serif text-amber-400">{competitiveCount}+</div>
            <div className="text-xs text-slate-400 mt-1">Competitive E-Books</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold font-serif text-emerald-400">PDF Reader</div>
            <div className="text-xs text-slate-400 mt-1">Online Free Samples</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold font-serif text-cyan-400">Aminabad</div>
            <div className="text-xs text-slate-400 mt-1">Lucknow Publishing Hub</div>
          </div>
        </div>
      </div>
    </div>
  );
}
