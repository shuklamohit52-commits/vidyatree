import { 
  Building2, 
  Mail, 
  Phone, 
  MapPin, 
  Heart, 
  CreditCard, 
  BookOpen, 
  ShieldCheck, 
  ArrowUp,
  FileText,
  Flame
} from "lucide-react";
import VidyatreeLogo from "./VidyatreeLogo";
import { OFFICE_INFO, BANK_DETAILS, BRANCH_CONTACTS } from "../data";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand & Referral Philosophy (Span 4) */}
          <div className="lg:col-span-4">
            <VidyatreeLogo
              size="md"
              textColor="text-white"
              taglineColor="text-emerald-400"
            />
            <p className="mt-4 text-xs text-slate-400 leading-relaxed max-w-sm">
              Dedicated to publishing high-accuracy CBSE & NCERT practical lab manuals, workbooks, and competitive entrance examination books with online PDF E-Book access across India.
            </p>

            <div className="mt-5 p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-3">
              <span className="text-xl">🤝</span>
              <div>
                <div className="text-xs font-bold text-emerald-400">"{OFFICE_INFO.tagline}"</div>
                <div className="text-[11px] text-slate-400">We appreciate school & distributor referrals</div>
              </div>
            </div>
          </div>

          {/* Column 2: Subjects & Classes (Span 2) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Our Publications
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#catalogue" className="hover:text-emerald-400 transition-colors">NEET 360° Biology (PDF E-Book)</a></li>
              <li><a href="#catalogue" className="hover:text-emerald-400 transition-colors">JEE Physics Booster (PDF E-Book)</a></li>
              <li><a href="#catalogue" className="hover:text-emerald-400 transition-colors">CUET General Test (PDF E-Book)</a></li>
              <li><a href="#catalogue" className="hover:text-emerald-400 transition-colors">Physics Lab Manual (11-12)</a></li>
              <li><a href="#catalogue" className="hover:text-emerald-400 transition-colors">Chemistry Lab Manual (11-12)</a></li>
              <li><a href="#catalogue" className="hover:text-emerald-400 transition-colors">Biology Lab Manual (11-12)</a></li>
              <li><a href="#catalogue" className="hover:text-emerald-400 transition-colors">Mathematics Manual (9-12)</a></li>
            </ul>
          </div>

          {/* Column 3: Quick Bank Details Summary (Span 3) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-1.5">
              <CreditCard className="w-3.5 h-3.5 text-emerald-400" /> Official Bank Account
            </h4>
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs space-y-1.5">
              <div className="text-slate-200 font-bold">{BANK_DETAILS.accountHolder}</div>
              <div className="font-mono text-emerald-400 text-[11px]">A/C: {BANK_DETAILS.accountNumber}</div>
              <div className="font-mono text-amber-400 text-[11px]">IFSC: {BANK_DETAILS.ifscCode}</div>
              <div className="text-slate-400 text-[11px]">{BANK_DETAILS.bankName}</div>
              <div className="pt-1.5 border-t border-slate-800 font-mono text-[11px] text-cyan-400">
                UPI: {BANK_DETAILS.upiId}
              </div>
            </div>
            <a
              href="#payment-details"
              className="inline-block mt-2 text-[11px] font-semibold text-emerald-400 hover:underline"
            >
              View Full Bank & QR Code →
            </a>
          </div>

          {/* Column 4: Aminabad Office & Branch Heads (Span 3) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Lucknow Office
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="leading-snug">{OFFICE_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`mailto:${OFFICE_INFO.email}`} className="hover:text-white transition-colors">
                  {OFFICE_INFO.email}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  {BRANCH_CONTACTS.map((c) => (
                    <div key={c.name} className="text-[11px]">
                      <span className="text-slate-300 font-medium">{c.name}:</span> +91 {c.phone}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Strip */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} {OFFICE_INFO.name}. All rights reserved. Registered Educational Publishers.
          </p>
          <div className="flex items-center gap-4">
            <span>Aminabad, Lucknow, Uttar Pradesh</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
              title="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
