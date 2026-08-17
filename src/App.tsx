import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import BookCatalog from "./components/BookCatalog";
import PaymentDetails from "./components/PaymentDetails";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import { MessageCircle } from "lucide-react";
import { OFFICE_INFO } from "./data";

export default function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-slate-800 selection:bg-emerald-200 selection:text-emerald-950">
      <Header />
      <main className="flex-grow">
        <HeroBanner />
        <BookCatalog />
        <PaymentDetails />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />

      {/* Persistent Floating WhatsApp Quick Contact Button */}
      <a
        href={`https://wa.me/91${OFFICE_INFO.primaryWhatsApp}?text=Hello%20Vidyatree%20Publication,%20I%20want%20to%20enquire%20about%20your%20books/catalog.`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 p-3.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center gap-2 group border-2 border-white/80"
        title="Chat with Vidyatree on WhatsApp"
        aria-label="WhatsApp Chat"
      >
        <MessageCircle className="w-6 h-6 fill-white" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out text-xs font-bold px-0 group-hover:px-1">
          WhatsApp Order
        </span>
      </a>
    </div>
  );
}
