import { useState } from "react";
import { 
  Building2, 
  CreditCard, 
  Copy, 
  Check, 
  QrCode, 
  Smartphone, 
  ShieldCheck, 
  MapPin,
  ExternalLink,
  MessageCircle
} from "lucide-react";
import { BANK_DETAILS, OFFICE_INFO } from "../data";

export default function PaymentDetails() {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, fieldId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldId);
    setTimeout(() => {
      setCopiedField(null);
    }, 2000);
  };

  // UPI deep link for mobile users
  const upiDeepLink = `upi://pay?pa=${encodeURIComponent(BANK_DETAILS.upiId)}&pn=${encodeURIComponent(
    BANK_DETAILS.accountHolder
  )}&cu=INR`;

  return (
    <section id="payment-details" className="py-16 md:py-20 bg-slate-900 text-slate-100 relative overflow-hidden">
      {/* Background glowing gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-4 h-4" /> Official Bank & Direct Payment
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
            Account & Payment Details
          </h2>
          <p className="mt-3 text-slate-400 text-base">
            For school orders, bulk distribution, or direct book purchases, please use our verified official Kotak Mahindra Bank account or UPI credentials below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Bank Account Details Card */}
          <div className="lg:col-span-7 bg-slate-800/80 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-slate-700/80 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-700/60 mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white leading-tight">
                      {BANK_DETAILS.bankName}
                    </h3>
                    <p className="text-xs text-slate-400 font-medium">
                      Current Account
                    </p>
                  </div>
                </div>
                <span className="text-xs font-mono font-semibold px-2.5 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-full">
                  Verified Business
                </span>
              </div>

              {/* Detail Items */}
              <div className="space-y-4">
                {/* Account Holder */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 rounded-xl bg-slate-900/50 border border-slate-700/40 gap-2">
                  <div>
                    <span className="text-xs font-medium text-slate-400 uppercase tracking-wider block">
                      Account Holder Name
                    </span>
                    <span className="text-base font-bold text-white tracking-wide">
                      {BANK_DETAILS.accountHolder}
                    </span>
                  </div>
                  <button
                    onClick={() => copyToClipboard(BANK_DETAILS.accountHolder, "holder")}
                    className="self-start sm:self-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors border border-slate-700"
                    title="Copy Account Holder"
                  >
                    {copiedField === "holder" ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Account Number */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 rounded-xl bg-slate-900/50 border border-slate-700/40 gap-2">
                  <div>
                    <span className="text-xs font-medium text-slate-400 uppercase tracking-wider block">
                      Account Number
                    </span>
                    <span className="text-lg font-mono font-bold text-emerald-400 tracking-wider">
                      {BANK_DETAILS.accountNumber}
                    </span>
                  </div>
                  <button
                    onClick={() => copyToClipboard(BANK_DETAILS.accountNumber, "acc")}
                    className="self-start sm:self-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 transition-colors border border-emerald-500/30"
                    title="Copy Account Number"
                  >
                    {copiedField === "acc" ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Account No</span>
                      </>
                    )}
                  </button>
                </div>

                {/* IFSC Code */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 rounded-xl bg-slate-900/50 border border-slate-700/40 gap-2">
                  <div>
                    <span className="text-xs font-medium text-slate-400 uppercase tracking-wider block">
                      Branch IFSC Code
                    </span>
                    <span className="text-base font-mono font-bold text-amber-400 tracking-wider">
                      {BANK_DETAILS.ifscCode}
                    </span>
                  </div>
                  <button
                    onClick={() => copyToClipboard(BANK_DETAILS.ifscCode, "ifsc")}
                    className="self-start sm:self-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors border border-slate-700"
                    title="Copy IFSC Code"
                  >
                    {copiedField === "ifsc" ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy IFSC</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Branch Name & Address */}
                <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-700/40">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-medium text-slate-400 uppercase tracking-wider block">
                        Branch & Location
                      </span>
                      <p className="text-sm font-semibold text-slate-200 mt-0.5">
                        {BANK_DETAILS.branchName}
                      </p>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                        {BANK_DETAILS.branchAddress}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-700/60 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <CreditCard className="w-4 h-4 text-emerald-400" /> NEFT / RTGS / IMPS / NetBanking Accepted
              </span>
              <span>Need invoice? Contact branch heads</span>
            </div>
          </div>

          {/* Right Column: Instant UPI & QR Code Card */}
          <div className="lg:col-span-5 bg-gradient-to-b from-slate-800 to-slate-850 rounded-2xl p-6 sm:p-8 border border-slate-700/80 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 pb-6 border-b border-slate-700/60 mb-6">
                <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-400">
                  <Smartphone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white leading-tight">
                    Instant UPI Payment
                  </h3>
                  <p className="text-xs text-slate-400 font-medium">
                    Google Pay / PhonePe / Paytm / BHIM
                  </p>
                </div>
              </div>

              {/* UPI QR Display Card */}
              <div className="bg-white rounded-xl p-5 text-slate-900 shadow-md flex flex-col items-center text-center">
                <div className="w-44 h-44 bg-slate-50 p-2 rounded-lg border-2 border-slate-200 flex items-center justify-center relative group">
                  {/* Clean SVG QR Code Representation */}
                  <svg viewBox="0 0 100 100" className="w-full h-full text-slate-900">
                    <rect width="100" height="100" fill="#ffffff" />
                    {/* Corner 1 */}
                    <rect x="5" y="5" width="30" height="30" fill="#0f172a" rx="4" />
                    <rect x="9" y="9" width="22" height="22" fill="#ffffff" rx="2" />
                    <rect x="13" y="13" width="14" height="14" fill="#0f172a" rx="1" />
                    {/* Corner 2 */}
                    <rect x="65" y="5" width="30" height="30" fill="#0f172a" rx="4" />
                    <rect x="69" y="9" width="22" height="22" fill="#ffffff" rx="2" />
                    <rect x="73" y="13" width="14" height="14" fill="#0f172a" rx="1" />
                    {/* Corner 3 */}
                    <rect x="5" y="65" width="30" height="30" fill="#0f172a" rx="4" />
                    <rect x="9" y="69" width="22" height="22" fill="#ffffff" rx="2" />
                    <rect x="13" y="73" width="14" height="14" fill="#0f172a" rx="1" />
                    {/* Pattern Matrix */}
                    <rect x="42" y="10" width="6" height="6" fill="#059669" />
                    <rect x="52" y="10" width="6" height="6" fill="#0f172a" />
                    <rect x="42" y="22" width="16" height="6" fill="#0f172a" />
                    <rect x="10" y="42" width="80" height="6" fill="#0f172a" />
                    <rect x="42" y="32" width="6" height="16" fill="#059669" />
                    <rect x="52" y="36" width="6" height="6" fill="#0f172a" />
                    <rect x="62" y="52" width="12" height="12" fill="#059669" />
                    <rect x="42" y="52" width="8" height="8" fill="#0f172a" />
                    <rect x="52" y="65" width="10" height="6" fill="#0f172a" />
                    <rect x="42" y="75" width="16" height="6" fill="#059669" />
                    <rect x="70" y="75" width="20" height="20" fill="#0f172a" rx="2" />
                    <rect x="76" y="81" width="8" height="8" fill="#ffffff" />
                  </svg>
                  <div className="absolute inset-0 bg-slate-950/80 rounded-lg flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity p-2 text-white">
                    <QrCode className="w-8 h-8 text-emerald-400 mb-1" />
                    <span className="text-[11px] font-semibold">Scan to Pay via any UPI App</span>
                  </div>
                </div>
                <div className="mt-3">
                  <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                    Scan to Pay
                  </span>
                  <span className="text-[11px] text-slate-500 font-medium">
                    {BANK_DETAILS.accountHolder}
                  </span>
                </div>
              </div>

              {/* UPI ID Info & Copy */}
              <div className="mt-4 space-y-3">
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/70 border border-slate-700/50">
                  <div>
                    <span className="text-[11px] text-slate-400 uppercase font-medium block">UPI ID</span>
                    <span className="text-sm font-mono font-bold text-white">{BANK_DETAILS.upiId}</span>
                  </div>
                  <button
                    onClick={() => copyToClipboard(BANK_DETAILS.upiId, "upiId")}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                    title="Copy UPI ID"
                  >
                    {copiedField === "upiId" ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/70 border border-slate-700/50">
                  <div>
                    <span className="text-[11px] text-slate-400 uppercase font-medium block">UPI Number / Phone</span>
                    <span className="text-sm font-mono font-bold text-white">{BANK_DETAILS.upiNumber}</span>
                  </div>
                  <button
                    onClick={() => copyToClipboard(BANK_DETAILS.upiNumber, "upiNum")}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                    title="Copy UPI Number"
                  >
                    {copiedField === "upiNum" ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Notification after payment */}
            <div className="mt-6 pt-4 border-t border-slate-700/60">
              <a
                href={`https://wa.me/91${OFFICE_INFO.primaryWhatsApp}?text=Hello%20Vidyatree%20Publication,%20I%20have%20transferred%20payment.%20Here%20is%20the%20screenshot/UTR.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-colors shadow-lg shadow-emerald-900/40"
              >
                <MessageCircle className="w-4 h-4" />
                Send Payment Screenshot on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
