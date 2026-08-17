import { useState } from "react";
import { Menu, X, Phone, MessageCircle, CreditCard, BookOpen, Flame } from "lucide-react";
import VidyatreeLogo from "./VidyatreeLogo";
import { OFFICE_INFO, BANK_DETAILS } from "../data";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-slate-200/80 sticky top-0 z-50 transition-all">
      {/* Top Notification Strip with Contact & Location */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
              ✨ CBSE Lab Manuals & Competitive Exam Books (with PDF E-Books)
            </span>
            <span className="text-slate-400">
              Aminabad, Lucknow, U.P.
            </span>
          </div>
          <div className="flex items-center gap-4 font-mono">
            <a
              href={`tel:${OFFICE_INFO.primaryWhatsApp}`}
              className="hover:text-emerald-400 transition-colors flex items-center gap-1"
            >
              <Phone className="w-3 h-3 text-emerald-400" />
              <span>+91 {OFFICE_INFO.primaryWhatsApp}</span>
            </a>
            <span className="text-slate-600">|</span>
            <a
              href={`mailto:${OFFICE_INFO.email}`}
              className="hover:text-white transition-colors"
            >
              {OFFICE_INFO.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Authentic Logo */}
          <a href="#" className="flex items-center group">
            <VidyatreeLogo size="md" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7">
            <a
              href="#catalogue"
              className="text-slate-700 hover:text-emerald-700 font-semibold text-sm transition-colors flex items-center gap-1.5"
            >
              <BookOpen className="w-4 h-4 text-emerald-600" />
              Book Catalogue
            </a>
            <a
              href="#catalogue"
              onClick={() => {
                // If on page, let user jump directly
                const el = document.getElementById("catalogue");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-amber-800 hover:text-amber-900 font-semibold text-sm transition-colors flex items-center gap-1 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200/80"
            >
              <Flame className="w-3.5 h-3.5 text-amber-600" />
              <span>Competitive & PDF E-Books</span>
            </a>
            <a
              href="#payment-details"
              className="text-slate-700 hover:text-emerald-700 font-semibold text-sm transition-colors flex items-center gap-1.5"
            >
              <CreditCard className="w-4 h-4 text-emerald-600" />
              Bank & UPI Details
            </a>
            <a
              href="#about"
              className="text-slate-700 hover:text-emerald-700 font-semibold text-sm transition-colors"
            >
              About Vidyatree
            </a>
            <a
              href="#contact"
              className="text-slate-700 hover:text-emerald-700 font-semibold text-sm transition-colors"
            >
              Contact & Branches
            </a>
          </nav>

          {/* Right Action: WhatsApp Inquiry */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`https://wa.me/91${OFFICE_INFO.primaryWhatsApp}?text=Hello%20Vidyatree%20Publication,%20I%20am%20interested%20in%20your%20academic%20and%20competitive%20books%20catalogue.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Order</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:text-emerald-700 hover:bg-slate-100 focus:outline-none transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top duration-200">
          <a
            href="#catalogue"
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-base font-semibold text-slate-800 hover:bg-emerald-50 hover:text-emerald-700"
          >
            <BookOpen className="w-5 h-5 text-emerald-600" />
            Book Catalogue
          </a>
          <a
            href="#catalogue"
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-semibold text-amber-900 bg-amber-50 hover:bg-amber-100"
          >
            <Flame className="w-4 h-4 text-amber-600" />
            Competitive Exams & PDF E-Books
          </a>
          <a
            href="#payment-details"
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-base font-semibold text-slate-800 hover:bg-emerald-50 hover:text-emerald-700"
          >
            <CreditCard className="w-5 h-5 text-emerald-600" />
            Bank & UPI Details
          </a>
          <a
            href="#about"
            onClick={() => setIsMenuOpen(false)}
            className="block px-3 py-2.5 rounded-xl text-base font-semibold text-slate-800 hover:bg-emerald-50 hover:text-emerald-700"
          >
            About Vidyatree
          </a>
          <a
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="block px-3 py-2.5 rounded-xl text-base font-semibold text-slate-800 hover:bg-emerald-50 hover:text-emerald-700"
          >
            Contact Us & Branch Heads
          </a>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={`https://wa.me/91${OFFICE_INFO.primaryWhatsApp}?text=Hello%20Vidyatree%20Publication,%20I%20am%20interested%20in%20your%20academic%20and%20competitive%20books%20catalogue.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 text-white font-bold text-sm shadow-md"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              Chat on WhatsApp
            </a>
            <a
              href={`tel:${OFFICE_INFO.primaryWhatsApp}`}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-100 text-slate-800 font-semibold text-sm"
            >
              <Phone className="w-4 h-4 text-emerald-700" />
              Call +91 {OFFICE_INFO.primaryWhatsApp}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
