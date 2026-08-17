import { useState, useEffect } from "react";
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ZoomIn, 
  ZoomOut, 
  Maximize2, 
  Minimize2, 
  BookOpen, 
  Download, 
  Share2, 
  CheckCircle2, 
  HelpCircle, 
  Eye, 
  Sparkles, 
  FileText, 
  Menu, 
  Moon, 
  Sun, 
  Coffee,
  MessageCircle,
  Award,
  Layers
} from "lucide-react";
import { Book, EbookPage } from "../types";
import { BANK_DETAILS, OFFICE_INFO } from "../data";
import VidyatreeLogo from "./VidyatreeLogo";
import { motion, AnimatePresence } from "motion/react";

interface EbookPdfReaderModalProps {
  book: Book | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function EbookPdfReaderModal({
  book,
  isOpen,
  onClose
}: EbookPdfReaderModalProps) {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [zoomLevel, setZoomLevel] = useState<number>(100);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [readingTheme, setReadingTheme] = useState<"light" | "sepia" | "dark">("light");
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
  const [revealedSolutions, setRevealedSolutions] = useState<Record<number, boolean>>({});
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [copiedLink, setCopiedLink] = useState(false);

  // Reset state when opening a new book
  useEffect(() => {
    if (isOpen) {
      setCurrentPageIndex(0);
      setRevealedSolutions({});
      setSelectedAnswers({});
    }
  }, [book, isOpen]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (isFullscreen) {
          setIsFullscreen(false);
        } else {
          onClose();
        }
      } else if (e.key === "ArrowRight" || e.key === "PageDown") {
        handleNextPage();
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        handlePrevPage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentPageIndex, isFullscreen]);

  if (!isOpen || !book || !book.samplePdf) return null;

  const samplePdf = book.samplePdf;
  const pages: EbookPage[] = samplePdf.previewPages || [];
  const currentPage = pages[currentPageIndex] || pages[0];
  const totalPages = pages.length;

  const handleNextPage = () => {
    if (currentPageIndex < totalPages - 1) {
      setCurrentPageIndex(prev => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPageIndex > 0) {
      setCurrentPageIndex(prev => prev - 1);
    }
  };

  const toggleSolution = (qIndex: number) => {
    setRevealedSolutions(prev => ({
      ...prev,
      [qIndex]: !prev[qIndex]
    }));
  };

  const handleOptionSelect = (questionKey: string, optionIndex: number) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionKey]: optionIndex
    }));
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const handleDownloadSample = () => {
    window.print();
  };

  // Theme styling definitions
  const themeStyles = {
    light: {
      bg: "bg-slate-900/90",
      pageBg: "bg-white text-slate-900 border-slate-200",
      sidebarBg: "bg-slate-900 border-slate-800 text-slate-200",
      cardBg: "bg-slate-50 border-slate-200 text-slate-800",
      highlightBox: "bg-emerald-50/80 border-emerald-200 text-emerald-950",
      formulaBox: "bg-blue-50/80 border-blue-200 text-blue-950",
      accentText: "text-emerald-700"
    },
    sepia: {
      bg: "bg-[#2d261e]/95",
      pageBg: "bg-[#fbf0d9] text-[#433422] border-[#e4d4b8]",
      sidebarBg: "bg-[#241e17] border-[#3d3326] text-[#e8dac7]",
      cardBg: "bg-[#f4e4c7] border-[#e2cead] text-[#433422]",
      highlightBox: "bg-[#eadebf] border-[#cbb88f] text-[#3b2d1c]",
      formulaBox: "bg-[#eeddbb] border-[#cebfa2] text-[#342718]",
      accentText: "text-[#8a4b16]"
    },
    dark: {
      bg: "bg-black/95",
      pageBg: "bg-slate-900 text-slate-100 border-slate-800",
      sidebarBg: "bg-slate-950 border-slate-800 text-slate-300",
      cardBg: "bg-slate-800/80 border-slate-700 text-slate-200",
      highlightBox: "bg-emerald-950/40 border-emerald-800 text-emerald-200",
      formulaBox: "bg-blue-950/40 border-blue-800 text-blue-200",
      accentText: "text-emerald-400"
    }
  };

  const activeTheme = themeStyles[readingTheme];

  return (
    <AnimatePresence>
      <div 
        className={`fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-2 md:p-4 backdrop-blur-md transition-colors ${activeTheme.bg}`}
        id="ebook-pdf-reader-modal"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.2 }}
          className="w-full h-full max-w-7xl max-h-[96vh] flex flex-col bg-slate-900 text-white rounded-none sm:rounded-2xl shadow-2xl border border-slate-700/60 overflow-hidden"
        >
          
          {/* ========================================================= */}
          {/* 1. TOP CONTROL BAR (PDF TOOLBAR) */}
          {/* ========================================================= */}
          <div className="h-14 bg-slate-950 border-b border-slate-800 px-3 sm:px-5 flex items-center justify-between gap-2 shrink-0 select-none">
            
            {/* Left Controls: Sidebar toggle & Title */}
            <div className="flex items-center gap-2 sm:gap-3 min-w-0">
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className={`p-2 rounded-lg transition-colors cursor-pointer text-slate-300 hover:text-white hover:bg-slate-800 ${isSidebarOpen ? "bg-slate-800 text-emerald-400" : ""}`}
                title="Toggle Table of Contents"
              >
                <Menu className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2 min-w-0">
                <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 text-[11px] font-bold tracking-wider border border-emerald-500/20 uppercase shrink-0">
                  <FileText className="w-3 h-3" /> PDF E-Book
                </span>
                <h3 className="text-xs sm:text-sm font-semibold text-slate-200 truncate max-w-[140px] sm:max-w-xs md:max-w-md">
                  {book.title}
                </h3>
              </div>
            </div>

            {/* Middle Controls: Page Navigation & Zoom */}
            <div className="flex items-center gap-1 sm:gap-2">
              <div className="flex items-center bg-slate-900 border border-slate-800 rounded-lg p-0.5">
                <button
                  onClick={handlePrevPage}
                  disabled={currentPageIndex === 0}
                  className="p-1.5 rounded-md hover:bg-slate-800 text-slate-300 disabled:opacity-30 disabled:hover:bg-transparent cursor-pointer"
                  title="Previous Page"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <span className="px-2 text-xs font-mono text-slate-300 whitespace-nowrap">
                  <strong className="text-white">{currentPageIndex + 1}</strong> / {totalPages}
                </span>

                <button
                  onClick={handleNextPage}
                  disabled={currentPageIndex === totalPages - 1}
                  className="p-1.5 rounded-md hover:bg-slate-800 text-slate-300 disabled:opacity-30 disabled:hover:bg-transparent cursor-pointer"
                  title="Next Page"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Zoom Controls */}
              <div className="hidden md:flex items-center bg-slate-900 border border-slate-800 rounded-lg p-0.5">
                <button
                  onClick={() => setZoomLevel(prev => Math.max(75, prev - 15))}
                  className="p-1.5 rounded-md hover:bg-slate-800 text-slate-300 cursor-pointer"
                  title="Zoom Out"
                >
                  <ZoomOut className="w-3.5 h-3.5" />
                </button>
                <span className="px-1.5 text-[11px] font-mono text-slate-400">
                  {zoomLevel}%
                </span>
                <button
                  onClick={() => setZoomLevel(prev => Math.min(135, prev + 15))}
                  className="p-1.5 rounded-md hover:bg-slate-800 text-slate-300 cursor-pointer"
                  title="Zoom In"
                >
                  <ZoomIn className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Controls: Reading Theme, Share, Buy & Close */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              
              {/* Theme Selector */}
              <div className="hidden sm:flex items-center bg-slate-900 border border-slate-800 rounded-lg p-0.5">
                <button
                  onClick={() => setReadingTheme("light")}
                  className={`p-1.5 rounded-md transition-colors ${readingTheme === "light" ? "bg-white text-slate-900 shadow-xs" : "text-slate-400 hover:text-white"}`}
                  title="Day Paper Mode"
                >
                  <Sun className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setReadingTheme("sepia")}
                  className={`p-1.5 rounded-md transition-colors ${readingTheme === "sepia" ? "bg-[#e4d4b8] text-[#433422] shadow-xs" : "text-slate-400 hover:text-white"}`}
                  title="Sepia Eye-Care Mode"
                >
                  <Coffee className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setReadingTheme("dark")}
                  className={`p-1.5 rounded-md transition-colors ${readingTheme === "dark" ? "bg-slate-800 text-emerald-400 shadow-xs" : "text-slate-400 hover:text-white"}`}
                  title="Night Mode"
                >
                  <Moon className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Print / Download Sample */}
              <button
                onClick={handleDownloadSample}
                className="hidden lg:flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold cursor-pointer border border-slate-700 transition-colors"
                title="Print or Save Sample PDF Chapter"
              >
                <Download className="w-3.5 h-3.5 text-emerald-400" />
                <span>Save Sample</span>
              </button>

              {/* Direct Order / WhatsApp */}
              <a
                href={`https://wa.me/91${BANK_DETAILS.upiNumber}?text=Hello%20Vidyatree%20Publication,%20I%20am%20reading%20the%20sample%20PDF%20of%20${encodeURIComponent(book.title)}%20and%20want%20to%20buy%20the%20full%20book%20/%20complete%20PDF.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold transition-all shadow-sm shrink-0"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Get Full E-Book</span>
                <span className="sm:hidden">Buy</span>
              </a>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors ml-1 cursor-pointer"
                title="Close Reader (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

          </div>

          {/* ========================================================= */}
          {/* 2. READER BODY (SIDEBAR + MAIN CANVAS) */}
          {/* ========================================================= */}
          <div className="flex-1 flex overflow-hidden relative">
            
            {/* LEFT SIDEBAR: Table of Contents & Thumbnails */}
            {isSidebarOpen && (
              <div className={`w-72 sm:w-80 shrink-0 border-r flex flex-col overflow-y-auto ${activeTheme.sidebarBg}`}>
                
                {/* Book Header Summary */}
                <div className="p-4 border-b border-slate-800/80">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 uppercase tracking-wider">
                      {book.examType || "Competitive Exam"}
                    </span>
                    <span className="text-[10px] text-slate-400">
                      {samplePdf.edition}
                    </span>
                  </div>
                  <h4 className="font-serif font-bold text-sm text-white leading-snug">
                    {book.title}
                  </h4>
                  <p className="text-[11px] text-slate-400 mt-1">
                    Complete Book: <strong>{samplePdf.totalBookPages} Pages</strong> • Sample PDF: <strong>{samplePdf.sampleAvailablePages} Pages</strong>
                  </p>
                </div>

                {/* Table of Contents Section */}
                <div className="p-4 border-b border-slate-800/80">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Table of Contents</span>
                  </div>
                  
                  <div className="space-y-2">
                    {samplePdf.chapters.map((ch, idx) => (
                      <div key={ch.id || idx} className="p-2.5 rounded-lg bg-slate-800/50 border border-slate-700/50 text-xs">
                        <div className="font-semibold text-slate-200">
                          {ch.title}
                        </div>
                        <div className="text-[11px] text-slate-400 mt-1">
                          Pages {ch.pageStart} - {ch.pageEnd}
                        </div>
                        <ul className="mt-2 space-y-1 text-[11px] text-slate-300 list-disc list-inside">
                          {ch.topics.map((t, tIdx) => (
                            <li key={tIdx} className="truncate">{t}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Live Page Thumbnails */}
                <div className="p-4 flex-1">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Sample Pages ({pages.length})</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {pages.map((p, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentPageIndex(idx)}
                        className={`text-left p-2 rounded-lg border transition-all cursor-pointer flex flex-col justify-between h-28 ${
                          currentPageIndex === idx
                            ? "bg-emerald-950/50 border-emerald-500 ring-1 ring-emerald-500"
                            : "bg-slate-800/60 border-slate-700/60 hover:border-slate-500"
                        }`}
                      >
                        <div className="text-[10px] font-bold text-slate-300 truncate">
                          P.{p.pageNumber}: {p.title}
                        </div>
                        <div className="text-[9px] text-slate-400 line-clamp-2">
                          {p.chapterName}
                        </div>
                        <div className="flex items-center justify-between text-[9px] text-slate-400 pt-1 border-t border-slate-700/40 mt-auto">
                          <span className="uppercase text-emerald-400 font-bold">{p.type}</span>
                          <span>#{p.pageNumber}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Publisher Trust & Buy CTA in Sidebar */}
                <div className="p-4 bg-slate-950/80 border-t border-slate-800 mt-auto">
                  <div className="text-[11px] text-slate-400 mb-2">
                    Need the complete textbook with all {samplePdf.totalBookPages} pages & answer keys?
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <span className="text-xs text-slate-400">Physical M.R.P:</span>
                      <div className="font-bold text-sm text-white">{book.price}</div>
                    </div>
                    {book.ebookPrice && (
                      <div className="text-right">
                        <span className="text-[10px] text-emerald-400 font-bold uppercase">PDF E-Book:</span>
                        <div className="font-bold text-sm text-emerald-300">{book.ebookPrice.split(' ')[0]}</div>
                      </div>
                    )}
                  </div>
                  <a
                    href={`https://wa.me/91${BANK_DETAILS.upiNumber}?text=Hello%20Vidyatree%20Publication,%20I%20want%20to%20order/buy%20the%20complete%20book%20${encodeURIComponent(book.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-md"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Order Full Book on WhatsApp</span>
                  </a>
                </div>

              </div>
            )}

            {/* MAIN PDF READING CANVAS */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 flex justify-center items-start">
              
              <div 
                style={{ transform: `scale(${zoomLevel / 100})`, transformOrigin: "top center" }}
                className={`w-full max-w-3xl transition-transform duration-150 rounded-lg shadow-2xl border p-6 sm:p-10 md:p-12 relative flex flex-col min-h-[850px] ${activeTheme.pageBg}`}
              >
                {/* PDF WATERMARK & HEADER */}
                <div className="border-b border-slate-200/80 pb-4 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                  <div className="flex items-center gap-2">
                    <VidyatreeLogo size="sm" showText={true} />
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-widest block">
                      {book.examType} COMPETITIVE EXAM SERIES
                    </span>
                    <span className="text-[11px] font-semibold text-emerald-700">
                      {currentPage.chapterName}
                    </span>
                  </div>
                </div>

                {/* PAGE TITLE & SUBTITLE */}
                <div className="mb-6">
                  <div className="inline-block text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-emerald-100 text-emerald-800 mb-2">
                    {currentPage.type === "theory" && "📘 NCERT High-Yield Theory Extract"}
                    {currentPage.type === "formula_sheet" && "⚡ Rapid Revision & Master Formulas"}
                    {currentPage.type === "solved_examples" && "🎯 Solved Past 15-Year Exam Questions"}
                    {currentPage.type === "mock_questions" && "⏱️ Speed Test & Timed Mock Drill"}
                  </div>
                  <h1 className="text-xl sm:text-2xl font-serif font-black tracking-tight leading-snug">
                    {currentPage.title}
                  </h1>
                  {currentPage.subtitle && (
                    <p className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">
                      {currentPage.subtitle}
                    </p>
                  )}
                </div>

                {/* PAGE CORE CONTENT SNIPPET */}
                <div className="text-sm leading-relaxed mb-6 font-serif">
                  <p className="text-justify">{currentPage.contentSnippet}</p>
                </div>

                {/* 1. KEY HIGHLIGHTS / BULLETS (IF THEORY) */}
                {currentPage.keyHighlights && (
                  <div className={`p-4 sm:p-5 rounded-xl border mb-6 space-y-2.5 ${activeTheme.highlightBox}`}>
                    <div className="font-sans font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 mb-2">
                      <Sparkles className="w-4 h-4 text-emerald-600" />
                      <span>Crucial Examiner Focus Points</span>
                    </div>
                    {currentPage.keyHighlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* 2. FORMULAS (IF FORMULA SHEET) */}
                {currentPage.formulas && (
                  <div className="space-y-4 mb-6">
                    {currentPage.formulas.map((form, idx) => (
                      <div key={idx} className={`p-4 rounded-xl border ${activeTheme.formulaBox}`}>
                        <div className="text-xs font-bold uppercase tracking-wider text-blue-900 mb-1">
                          {form.label}
                        </div>
                        <div className="p-3 rounded-lg bg-white/90 border border-blue-200 font-mono text-sm sm:text-base font-bold text-slate-900 overflow-x-auto my-2">
                          {form.formula}
                        </div>
                        {form.note && (
                          <div className="text-xs text-slate-600 italic">
                            💡 {form.note}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* 3. SOLVED & MOCK QUESTIONS (IF APPLICABLE) */}
                {currentPage.sampleQuestions && (
                  <div className="space-y-6 mb-6">
                    {currentPage.sampleQuestions.map((q, idx) => {
                      const isRevealed = revealedSolutions[q.qNumber] || false;
                      const selectedOpt = selectedAnswers[`${currentPage.pageNumber}-${q.qNumber}`];
                      const isAnswered = selectedOpt !== undefined;
                      const isCorrect = selectedOpt === q.correctOption;

                      return (
                        <div key={idx} className={`p-5 rounded-xl border ${activeTheme.cardBg}`}>
                          
                          {/* Question Tag */}
                          <div className="flex items-center justify-between gap-2 mb-2">
                            <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-800">
                              Question {q.qNumber} {q.examTag && `• ${q.examTag}`}
                            </span>
                            {isAnswered && (
                              <span className={`text-[11px] font-bold px-2 py-0.5 rounded ${isCorrect ? "bg-emerald-100 text-emerald-800" : "bg-rose-100 text-rose-800"}`}>
                                {isCorrect ? "✓ Correct (+4)" : "✗ Incorrect (-1)"}
                              </span>
                            )}
                          </div>

                          {/* Question Text */}
                          <div className="text-sm font-semibold text-slate-900 mb-3 leading-snug">
                            {q.question}
                          </div>

                          {/* Options Radio List */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
                            {q.options.map((opt, optIdx) => {
                              const isThisSelected = selectedOpt === optIdx;
                              let optClass = "bg-white border-slate-200 text-slate-800 hover:border-emerald-400";
                              if (isThisSelected) {
                                optClass = isCorrect 
                                  ? "bg-emerald-50 border-emerald-500 text-emerald-950 font-bold ring-1 ring-emerald-500" 
                                  : "bg-rose-50 border-rose-500 text-rose-950 font-bold ring-1 ring-rose-500";
                              }

                              return (
                                <button
                                  key={optIdx}
                                  onClick={() => handleOptionSelect(`${currentPage.pageNumber}-${q.qNumber}`, optIdx)}
                                  className={`p-2.5 rounded-lg border text-left text-xs transition-all cursor-pointer flex items-center justify-between ${optClass}`}
                                >
                                  <span>{opt}</span>
                                  {isThisSelected && (
                                    <span className="text-[10px] font-bold">
                                      {isCorrect ? "✓" : "✗"}
                                    </span>
                                  )}
                                </button>
                              );
                            })}
                          </div>

                          {/* Reveal Solution Toggle */}
                          <div className="flex items-center justify-between pt-2 border-t border-slate-200/60">
                            <button
                              onClick={() => toggleSolution(q.qNumber)}
                              className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 cursor-pointer"
                            >
                              <Eye className="w-3.5 h-3.5" />
                              <span>{isRevealed ? "Hide Detailed Solution" : "View Step-by-Step Solution & NCERT Citation"}</span>
                            </button>
                          </div>

                          {/* Expanded Solution Drawer */}
                          {isRevealed && (
                            <div className="mt-3 p-3.5 rounded-lg bg-emerald-50/90 border border-emerald-200 text-xs text-slate-800 space-y-1.5 animate-fadeIn">
                              <div className="font-bold text-emerald-900">
                                Verified Solution:
                              </div>
                              <p className="leading-relaxed">{q.solution}</p>
                              {q.trickOrTip && (
                                <div className="mt-2 pt-2 border-t border-emerald-200/60 text-emerald-800 font-medium italic">
                                  ⚡ Examiner Trick: {q.trickOrTip}
                                </div>
                              )}
                            </div>
                          )}

                        </div>
                      );
                    })}
                  </div>
                )}

                {/* 4. NOTES / TRAP ALERTS */}
                {currentPage.notes && (
                  <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-950 text-xs space-y-1 mb-6">
                    <div className="font-bold uppercase tracking-wider flex items-center gap-1 text-amber-800">
                      <HelpCircle className="w-3.5 h-3.5" /> Important Examiner Note / Common Student Pitfall
                    </div>
                    {currentPage.notes.map((note, nIdx) => (
                      <p key={nIdx} className="leading-relaxed">{note}</p>
                    ))}
                  </div>
                )}

                {/* AUTHENTIC PAGE FOOTER (WATERMARK & COPYRIGHT) */}
                <div className="mt-auto pt-6 border-t border-slate-200/80 flex items-center justify-between text-[11px] text-slate-400">
                  <span>© Vidyatree Publication • Aminabad, Lucknow</span>
                  <span className="font-mono font-bold text-slate-700">Page {currentPage.pageNumber}</span>
                  <span className="hidden sm:inline">Direct Order WhatsApp: {OFFICE_INFO.primaryWhatsApp}</span>
                </div>

              </div>

            </div>

          </div>

          {/* ========================================================= */}
          {/* 3. BOTTOM FLOATING BAR (PAGE JUMP & WHATSAPP PILL) */}
          {/* ========================================================= */}
          <div className="h-12 bg-slate-950 border-t border-slate-800 px-4 flex items-center justify-between text-xs text-slate-400 select-none">
            
            <div className="flex items-center gap-2">
              <span>Sample Pages Preview:</span>
              <div className="flex items-center gap-1">
                {pages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentPageIndex(idx)}
                    className={`w-5 h-5 rounded flex items-center justify-center text-[10px] font-bold cursor-pointer transition-colors ${
                      currentPageIndex === idx
                        ? "bg-emerald-500 text-slate-950"
                        : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                    }`}
                  >
                    {idx + 1}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="hidden md:inline text-slate-400">
                M.R.P. <strong>{book.price}</strong> {book.ebookPrice && `• ${book.ebookPrice}`}
              </span>
              <a
                href={`https://wa.me/91${BANK_DETAILS.upiNumber}?text=Hello%20Vidyatree%20Publication,%20I%20want%20to%20buy%20${encodeURIComponent(book.title)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:text-emerald-300 font-bold flex items-center gap-1"
              >
                <span>Direct WhatsApp Purchase</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
