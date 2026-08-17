import { 
  Phone, 
  Mail, 
  MapPin, 
  UserCheck, 
  MessageSquare, 
  Clock, 
  Send
} from "lucide-react";
import { BRANCH_CONTACTS, OFFICE_INFO } from "../data";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5" /> Direct Contact & Order Inquiries
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
            Get in Touch with Vidyatree
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            Reach out to our branch leadership in Lucknow for bulk orders, dealership inquiries, school partnerships, or sample inspection copies.
          </p>
        </div>

        {/* Branch Heads / Key Persons Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {BRANCH_CONTACTS.map((person) => (
            <div
              key={person.name}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-emerald-600/10 border border-emerald-600/20 flex items-center justify-center text-emerald-700 font-bold font-serif text-xl shrink-0">
                  {person.name.charAt(0)}
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full mb-1">
                    <UserCheck className="w-3 h-3" /> {person.designation}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 font-serif">
                    {person.name}
                  </h3>
                  <p className="text-sm font-mono font-medium text-slate-600 mt-0.5">
                    +91 {person.phone}
                  </p>
                </div>
              </div>

              <div className="flex sm:flex-col gap-2 w-full sm:w-auto">
                <a
                  href={`tel:+91${person.phone}`}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" /> Call Now
                </a>
                <a
                  href={`https://wa.me/91${person.whatsapp}?text=Hello%20${encodeURIComponent(
                    person.name
                  )},%20I%20am%20contacting%20you%20regarding%20Vidyatree%20Publication%20books.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-semibold transition-colors shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" /> WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* General Office & Address Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Address Card */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm flex items-start gap-4">
            <div className="p-3 rounded-xl bg-blue-50 text-blue-800 shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-base font-serif">Publication Office</h4>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed font-medium">
                {OFFICE_INFO.address}
              </p>
              <div className="mt-3 text-xs text-slate-400">
                Landmark: Near Kaiserbagh Bus Stand, Aminabad
              </div>
            </div>
          </div>

          {/* Phone Lines Card */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm flex items-start gap-4">
            <div className="p-3 rounded-xl bg-emerald-50 text-emerald-800 shrink-0">
              <Phone className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-slate-900 text-base font-serif">Support & Order Lines</h4>
              <div className="mt-2 space-y-1">
                {OFFICE_INFO.phoneNumbers.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone.replace(/[^0-9+]/g, "")}`}
                    className="block text-xs font-mono font-medium text-slate-700 hover:text-emerald-700 transition-colors"
                  >
                    {phone}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Email & Hours Card */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm flex items-start gap-4">
            <div className="p-3 rounded-xl bg-amber-50 text-amber-800 shrink-0">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-base font-serif">Email & Working Hours</h4>
              <a
                href={`mailto:${OFFICE_INFO.email}`}
                className="text-xs font-semibold text-emerald-700 hover:underline block mt-2 break-all"
              >
                {OFFICE_INFO.email}
              </a>
              <div className="flex items-center gap-1.5 mt-3 text-xs text-slate-500">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span>{OFFICE_INFO.businessHours}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
