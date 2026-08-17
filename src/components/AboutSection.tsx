import { 
  Award, 
  BookCheck, 
  GraduationCap, 
  Users, 
  MapPin, 
  HeartHandshake, 
  Truck
} from "lucide-react";
import { OFFICE_INFO } from "../data";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Story & Philosophy */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-4">
              <Award className="w-4 h-4 text-emerald-600" /> Trusted Academic Publishers
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 leading-tight">
              Empowering Students & Teachers with <span className="text-emerald-700">Precision Lab Manuals</span>
            </h2>

            <p className="mt-5 text-slate-600 text-base sm:text-lg leading-relaxed">
              <strong>Vidyatree Publication</strong> is a premier educational publishing house based in Lucknow, Uttar Pradesh. We specialize in authoring high-precision practical lab manuals, student activity workbooks, and subject notebooks designed strictly according to the latest CBSE and NCERT curriculum guidelines.
            </p>

            <p className="mt-4 text-slate-600 text-base leading-relaxed">
              Every manual is meticulously organized with well-labeled apparatus diagrams, step-by-step procedural workflows, structured tabular observation records, and an extensive question bank for viva-voce examinations.
            </p>

            {/* Key Value Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3.5">
                <div className="p-2 bg-blue-100 text-blue-800 rounded-lg shrink-0">
                  <BookCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">CBSE & NCERT Aligned</h4>
                  <p className="text-xs text-slate-500 mt-1">
                    Updated annually to match current syllabus, marking criteria, and practical formats.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3.5">
                <div className="p-2 bg-emerald-100 text-emerald-800 rounded-lg shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Practical & Viva Focus</h4>
                  <p className="text-xs text-slate-500 mt-1">
                    Equips students with comprehensive viva-voce questions and lab safety rules.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3.5">
                <div className="p-2 bg-amber-100 text-amber-800 rounded-lg shrink-0">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">"We Love Referrals!"</h4>
                  <p className="text-xs text-slate-500 mt-1">
                    We partner closely with schools, educators, and book distributors across India.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3.5">
                <div className="p-2 bg-purple-100 text-purple-800 rounded-lg shrink-0">
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Bulk Supply & Dispatch</h4>
                  <p className="text-xs text-slate-500 mt-1">
                    Prompt bulk dispatch for schools and institutional book supply demands.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Branch & Distribution Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-blue-900 to-slate-900 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/20 rounded-full blur-2xl" />

            <h3 className="text-xl font-bold font-serif mb-2">Aminabad Branch, Lucknow</h3>
            <p className="text-xs text-blue-200 mb-6">
              Central hub for curriculum publishing and distributor supply in Uttar Pradesh & nationwide.
            </p>

            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-semibold text-blue-200 uppercase tracking-wide">
                      Head Office Address
                    </span>
                    <p className="text-sm font-medium text-white mt-1 leading-snug">
                      {OFFICE_INFO.address}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-semibold text-blue-200 uppercase tracking-wide">
                      Institutional & School Inquiries
                    </span>
                    <p className="text-xs text-slate-300 mt-1">
                      Are you a school principal, lab in-charge, or bookstore distributor? Contact our branch heads directly for institutional catalogues and sample manuals.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/15 flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold font-serif text-amber-400">100%</div>
                <div className="text-[11px] text-blue-200">CBSE Syllabus Aligned</div>
              </div>
              <div className="h-8 w-px bg-white/20" />
              <div>
                <div className="text-2xl font-bold font-serif text-emerald-400">Classes 9-12</div>
                <div className="text-[11px] text-blue-200">Science & Arts Labs</div>
              </div>
              <div className="h-8 w-px bg-white/20" />
              <div>
                <div className="text-2xl font-bold font-serif text-cyan-400">Lucknow</div>
                <div className="text-[11px] text-blue-200">Aminabad Hub</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
