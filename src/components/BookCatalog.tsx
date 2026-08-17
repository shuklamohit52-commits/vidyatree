import React, { useState, useMemo } from "react";
import { 
  Search, 
  Filter, 
  MessageCircle, 
  CheckCircle2, 
  X, 
  BookOpen, 
  ArrowUpDown,
  RotateCw,
  Eye,
  Sparkles,
  PhoneCall,
  Layers,
  LayoutGrid,
  FileText,
  Flame,
  Download,
  Award,
  GraduationCap
} from "lucide-react";
import { BOOKS, MAJOR_CATEGORIES, ACADEMIC_SUBJECTS, COMPETITIVE_EXAM_TYPES } from "../data";
import { Book } from "../types";
import BookCover from "./BookCover";
import EbookPdfReaderModal from "./EbookPdfReaderModal";
import { motion, AnimatePresence } from "motion/react";

export default function BookCatalog() {
  const [activeMajorCategory, setActiveMajorCategory] = useState<string>("all");
  const [selectedSubject, setSelectedSubject] = useState("All Subjects");
  const [selectedExamType, setSelectedExamType] = useState("All Exams");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"default" | "price-asc" | "price-desc">("default");
  const [globalViewMode, setGlobalViewMode] = useState<"front" | "back" | "full">("front");
  
  // Modals state
  const [activeModalBook, setActiveModalBook] = useState<Book | null>(null);
  const [activePdfReaderBook, setActivePdfReaderBook] = useState<Book | null>(null);
  const [flippedBookIds, setFlippedBookIds] = useState<Record<string, boolean>>({});
  const [modalViewSide, setModalViewSide] = useState<"front" | "back" | "full">("front");

  // Toggle individual card flip
  const toggleCardFlip = (bookId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFlippedBookIds(prev => ({
      ...prev,
      [bookId]: !prev[bookId]
    }));
  };

  // Filter and sort logic
  const filteredBooks = useMemo(() => {
    let list = BOOKS.filter((book) => {
      // 1. Major Category Filter
      if (activeMajorCategory !== "all" && book.majorCategory !== activeMajorCategory) {
        return false;
      }

      // 2. Sub-Category / Subject Filter
      if (book.majorCategory === "academic" && selectedSubject !== "All Subjects") {
        if (book.category !== selectedSubject) return false;
      }

      if (book.majorCategory === "competitive" && selectedExamType !== "All Exams") {
        if (book.examType !== selectedExamType) return false;
      }

      // 3. Search Query
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        book.title.toLowerCase().includes(q) ||
        book.subject.toLowerCase().includes(q) ||
        book.description.toLowerCase().includes(q) ||
        book.curriculum.toLowerCase().includes(q) ||
        (book.examType && book.examType.toLowerCase().includes(q));

      return matchesSearch;
    });

    if (sortBy === "price-asc") {
      list = [...list].sort((a, b) => a.mrpNumeric - b.mrpNumeric);
    } else if (sortBy === "price-desc") {
      list = [...list].sort((a, b) => b.mrpNumeric - a.mrpNumeric);
    }

    return list;
  }, [activeMajorCategory, selectedSubject, selectedExamType, searchQuery, sortBy]);

  // Real banner books for the upwards showcase
  const bannerBooks = useMemo(() => {
    return BOOKS.filter(b => b.bannerImageUrl);
  }, []);

  return (
    <section id="catalogue" className="py-16 md:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <GraduationCap className="w-4 h-4 text-blue-700" /> CBSE Practical Manuals & Entrance Series
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-slate-900 tracking-tight">
            Official Book & E-Book Catalogue
          </h2>
          <p className="mt-3 text-slate-600 text-base leading-relaxed">
            Starting with our authentic <strong>CBSE Academic Lab Manuals</strong> (Classes 9-12 with genuine publisher wrap jackets) and comprehensive <strong>Competitive Exam Books</strong> (NEET, JEE, CUET, NDA, SSC) with online PDF E-Book reading.
          </p>
        </div>

        {/* ========================================================= */}
        {/* UPWARDS REAL BANNER & WRAP SHOWCASE */}
        {/* ========================================================= */}
        <div className="mb-10 bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950 rounded-3xl p-6 sm:p-8 text-white shadow-xl border border-slate-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" /> Authentic Publisher Wraps & Covers
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mt-1">
                  CBSE Lab Manuals Jacket Wraps
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
                  Click any book banner to view its high-resolution Front Cover, Central Spine, and Publisher Back Cover with MRP & Address.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-400 bg-white/10 px-3 py-1.5 rounded-full font-mono">
                  15 Official Books
                </span>
              </div>
            </div>

            {/* Horizontal Scrollable Real Banners Reel */}
            <div className="flex gap-4 overflow-x-auto pb-4 pt-2 snap-x scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-900">
              {bannerBooks.map((b) => (
                <div
                  key={`banner-thumb-${b.id}`}
                  onClick={() => {
                    setActiveModalBook(b);
                    setModalViewSide("full");
                  }}
                  className="shrink-0 w-64 sm:w-72 bg-slate-900/90 hover:bg-slate-800/90 border border-slate-700/80 hover:border-cyan-400/60 rounded-2xl p-3 cursor-pointer transition-all duration-200 group hover:-translate-y-1 shadow-lg snap-start"
                >
                  <div className="relative rounded-xl overflow-hidden bg-slate-950 aspect-[16/10] mb-3 border border-slate-800">
                    <img
                      src={b.bannerImageUrl}
                      alt={b.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2.5">
                      <span className="text-[11px] font-bold text-cyan-300 flex items-center gap-1">
                        <Eye className="w-3.5 h-3.5" /> Inspect Full Spread
                      </span>
                    </div>
                    <span className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-slate-950/80 backdrop-blur-xs text-[10px] font-bold text-white border border-white/10">
                      {b.classLevel}
                    </span>
                  </div>
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <h4 className="text-xs font-bold text-white truncate group-hover:text-cyan-300 transition-colors">
                        {b.title}
                      </h4>
                      <p className="text-[11px] text-slate-400 truncate mt-0.5">
                        {b.subject}
                      </p>
                    </div>
                    <span className="text-xs font-mono font-bold text-emerald-400 shrink-0">
                      {b.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 1. THREE MAJOR CATEGORIES SELECTOR TABS */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
          <button
            onClick={() => {
              setActiveMajorCategory("all");
              setSelectedSubject("All Subjects");
              setSelectedExamType("All Exams");
            }}
            className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between ${
              activeMajorCategory === "all"
                ? "bg-slate-900 text-white border-slate-900 shadow-md ring-2 ring-emerald-500/20"
                : "bg-white text-slate-700 hover:bg-slate-100/80 border-slate-200"
            }`}
          >
            <div>
              <div className="font-bold text-sm flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-emerald-400" />
                <span>All Publications</span>
              </div>
              <p className={`text-xs mt-1 ${activeMajorCategory === "all" ? "text-slate-300" : "text-slate-500"}`}>
                Browse entire collection ({BOOKS.length} books)
              </p>
            </div>
            <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${activeMajorCategory === "all" ? "bg-emerald-500 text-slate-950" : "bg-slate-100 text-slate-700"}`}>
              {BOOKS.length}
            </span>
          </button>

          <button
            onClick={() => {
              setActiveMajorCategory("academic");
              setSelectedSubject("All Subjects");
            }}
            className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between ${
              activeMajorCategory === "academic"
                ? "bg-blue-900 text-white border-blue-900 shadow-md ring-2 ring-blue-500/20"
                : "bg-white text-slate-700 hover:bg-slate-100/80 border-slate-200"
            }`}
          >
            <div>
              <div className="font-bold text-sm flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-cyan-400" />
                <span>Academic Lab Manuals</span>
              </div>
              <p className={`text-xs mt-1 ${activeMajorCategory === "academic" ? "text-blue-200" : "text-slate-500"}`}>
                Classes 9, 10, 11 & 12 CBSE records ({BOOKS.filter(b => b.majorCategory === "academic").length} books)
              </p>
            </div>
            <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${activeMajorCategory === "academic" ? "bg-cyan-400 text-slate-950" : "bg-slate-100 text-slate-700"}`}>
              {BOOKS.filter(b => b.majorCategory === "academic").length}
            </span>
          </button>

          <button
            onClick={() => {
              setActiveMajorCategory("competitive");
              setSelectedExamType("All Exams");
            }}
            className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between ${
              activeMajorCategory === "competitive"
                ? "bg-emerald-900 text-white border-emerald-900 shadow-md ring-2 ring-emerald-500/20"
                : "bg-white text-slate-700 hover:bg-slate-100/80 border-slate-200"
            }`}
          >
            <div>
              <div className="font-bold text-sm flex items-center gap-2">
                <Flame className="w-4 h-4 text-amber-400" />
                <span>Competitive Exam Books & PDF E-Books</span>
              </div>
              <p className={`text-xs mt-1 ${activeMajorCategory === "competitive" ? "text-emerald-200" : "text-slate-500"}`}>
                NEET, JEE, CUET, NDA, SSC with PDF Reader
              </p>
            </div>
            <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${activeMajorCategory === "competitive" ? "bg-amber-400 text-slate-950" : "bg-slate-100 text-slate-700"}`}>
              {BOOKS.filter(b => b.majorCategory === "competitive").length}
            </span>
          </button>
        </div>

        {/* Global View Mode Switcher (for Academic Covers) */}
        {activeMajorCategory !== "competitive" && (
          <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-1 flex items-center gap-1">
              <LayoutGrid className="w-3.5 h-3.5" /> Book Cover Display:
            </span>
            <button
              onClick={() => setGlobalViewMode("front")}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                globalViewMode === "front"
                  ? "bg-emerald-700 text-white shadow-md"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              Front Covers
            </button>
            <button
              onClick={() => setGlobalViewMode("back")}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                globalViewMode === "back"
                  ? "bg-emerald-700 text-white shadow-md"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              Back Covers & Publisher Info
            </button>
            <button
              onClick={() => setGlobalViewMode("full")}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
                globalViewMode === "full"
                  ? "bg-emerald-700 text-white shadow-md"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Full Panoramic Spreads</span>
            </button>
          </div>
        )}

        {/* ========================================================= */}
        {/* 2. FILTERS & SEARCH CONTROL BAR */}
        {/* ========================================================= */}
        <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200 shadow-sm mb-10 space-y-4">
          
          {/* Top Row: Search and Sort */}
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            {/* Search Input */}
            <div className="relative w-full md:max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Search className="w-4 h-4" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by exam, subject, class, title (e.g. NEET Biology, Physics 12, CUET)..."
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Sort Dropdown & Results Counter */}
            <div className="flex items-center justify-between w-full md:w-auto gap-4">
              <div className="text-xs font-semibold text-slate-500">
                Showing <span className="text-emerald-700 font-bold">{filteredBooks.length}</span> of {BOOKS.length} books
              </div>

              <div className="flex items-center gap-2">
                <ArrowUpDown className="w-4 h-4 text-slate-400" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="text-xs font-semibold bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer"
                >
                  <option value="default">Default Order</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>

          {/* Sub-Filters based on Active Major Category */}
          {(activeMajorCategory === "all" || activeMajorCategory === "academic") && (
            <div className="pt-2 border-t border-slate-100">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Filter className="w-3.5 h-3.5 text-blue-600" /> Academic Subjects:
              </div>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {ACADEMIC_SUBJECTS.map((subj) => (
                  <button
                    key={subj}
                    onClick={() => setSelectedSubject(subj)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                      selectedSubject === subj
                        ? "bg-blue-900 text-white shadow-sm"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {subj}
                  </button>
                ))}
              </div>
            </div>
          )}

          {(activeMajorCategory === "all" || activeMajorCategory === "competitive") && (
            <div className="pt-2 border-t border-slate-100">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 text-amber-500" /> Competitive Entrance Exams:
              </div>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {COMPETITIVE_EXAM_TYPES.map((exam) => (
                  <button
                    key={exam}
                    onClick={() => setSelectedExamType(exam)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                      selectedExamType === exam
                        ? "bg-emerald-800 text-white shadow-sm"
                        : "bg-emerald-50 text-emerald-900 hover:bg-emerald-100 border border-emerald-200/60"
                    }`}
                  >
                    {exam}
                  </button>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* ========================================================= */}
        {/* 3. BOOK CARDS GRID */}
        {/* ========================================================= */}
        {filteredBooks.length > 0 ? (
          <div className={`grid gap-6 ${
            globalViewMode === "full" && activeMajorCategory !== "competitive"
              ? "grid-cols-1 md:grid-cols-2"
              : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          }`}>
            <AnimatePresence>
              {filteredBooks.map((book) => {
                const isFlipped = !!flippedBookIds[book.id];
                const cardView = globalViewMode === "full" 
                  ? "full" 
                  : (isFlipped ? (globalViewMode === "front" ? "back" : "front") : globalViewMode);

                const isCompetitive = book.majorCategory === "competitive";

                return (
                  <motion.div
                    key={book.id}
                    layout
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className={`bg-white rounded-3xl border overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group ${
                      isCompetitive ? "border-emerald-200/80 ring-1 ring-emerald-500/10" : "border-slate-200"
                    }`}
                  >
                    {/* Book Visual Display Area */}
                    <div className="p-4 bg-slate-100/90 group-hover:bg-slate-200/70 transition-colors relative">
                      <div 
                        onClick={() => {
                          if (isCompetitive && book.hasEbookPdf) {
                            setActivePdfReaderBook(book);
                          } else {
                            setModalViewSide(cardView);
                            setActiveModalBook(book);
                          }
                        }}
                        className="cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
                      >
                        <BookCover 
                          book={book} 
                          viewMode={cardView}
                          className="w-full shadow-md rounded-xl"
                        />
                      </div>

                      {/* Floating Badge (E-Book or Class) */}
                      <div className="absolute top-6 left-6 flex flex-col gap-1">
                        {isCompetitive && (
                          <span className="px-2 py-1 rounded-md bg-emerald-600/90 text-white font-bold text-[10px] tracking-wide shadow-md backdrop-blur-xs flex items-center gap-1">
                            <FileText className="w-3 h-3 text-amber-300" /> PDF E-Book
                          </span>
                        )}
                        {!isCompetitive && (
                          <span className="px-2.5 py-0.5 rounded-full bg-slate-950/80 text-white font-mono text-[10px] font-bold tracking-wider shadow-sm backdrop-blur-xs">
                            {book.classLevel}
                          </span>
                        )}
                      </div>

                      {/* Floating Quick Action Buttons */}
                      <div className="absolute top-6 right-6 flex flex-col gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity">
                        {/* E-Book PDF Direct Open Button */}
                        {isCompetitive && book.hasEbookPdf && (
                          <button
                            onClick={() => setActivePdfReaderBook(book)}
                            className="p-2 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg transition-transform hover:scale-110 cursor-pointer"
                            title="Read Sample PDF E-Book"
                          >
                            <FileText className="w-4 h-4 text-amber-300" />
                          </button>
                        )}

                        {/* Flip Card Button */}
                        <button
                          onClick={(e) => toggleCardFlip(book.id, e)}
                          className="p-2 rounded-full bg-white/90 hover:bg-white text-slate-800 shadow-md transition-transform hover:scale-110 cursor-pointer"
                          title="Flip Cover (Front / Back)"
                        >
                          <RotateCw className="w-4 h-4" />
                        </button>

                        {/* Full Detail Modal Trigger */}
                        <button
                          onClick={() => {
                            setModalViewSide(cardView);
                            setActiveModalBook(book);
                          }}
                          className="p-2 rounded-full bg-white/90 hover:bg-white text-slate-800 shadow-md transition-transform hover:scale-110 cursor-pointer"
                          title="Inspect Details"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                      </div>

                    </div>

                    {/* Book Metadata & Pricing Body */}
                    <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                      
                      <div>
                        {/* Subject & Category Pill */}
                        <div className="flex items-center justify-between text-[11px] text-slate-500 font-bold uppercase tracking-wider mb-1.5">
                          <span className={isCompetitive ? "text-emerald-700 font-extrabold" : "text-blue-700"}>
                            {book.examType || book.subject}
                          </span>
                          <span className="text-slate-400 font-medium">
                            {book.classLevel}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="font-serif font-bold text-slate-900 text-base leading-snug line-clamp-2 group-hover:text-emerald-800 transition-colors">
                          {book.title}
                        </h3>

                        {/* Short Curriculum note */}
                        <p className="text-xs text-slate-500 mt-1 line-clamp-1">
                          {book.curriculum}
                        </p>

                        {/* Key Highlights list */}
                        <div className="mt-3 space-y-1.5 pt-3 border-t border-slate-100">
                          {book.highlights.slice(0, 2).map((highlight, idx) => (
                            <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-600">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                              <span className="line-clamp-1">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Price Strip & Actions */}
                      <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                              Physical M.R.P.
                            </span>
                            <div className="text-lg font-black text-slate-900 font-mono">
                              {book.price}
                            </div>
                          </div>

                          {book.ebookPrice && (
                            <div className="text-right">
                              <span className="text-[10px] uppercase font-bold text-emerald-600 tracking-wider">
                                PDF E-Book
                              </span>
                              <div className="text-xs font-bold text-emerald-800">
                                {book.ebookPrice.split(' ')[0]}
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Action Buttons: Read PDF (if competitive) + WhatsApp Order */}
                        <div className="grid grid-cols-2 gap-2">
                          {isCompetitive && book.hasEbookPdf ? (
                            <button
                              onClick={() => setActivePdfReaderBook(book)}
                              className="w-full inline-flex items-center justify-center gap-1 py-2 px-2.5 rounded-xl text-xs font-bold text-slate-900 bg-amber-400 hover:bg-amber-300 transition-all shadow-xs cursor-pointer"
                            >
                              <FileText className="w-3.5 h-3.5" />
                              <span>Read Sample</span>
                            </button>
                          ) : (
                            <button
                              onClick={() => {
                                setModalViewSide(cardView);
                                setActiveModalBook(book);
                              }}
                              className="w-full inline-flex items-center justify-center gap-1 py-2 px-2.5 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-all cursor-pointer"
                            >
                              <Eye className="w-3.5 h-3.5" />
                              <span>View Cover</span>
                            </button>
                          )}

                          <a
                            href={book.externalLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full inline-flex items-center justify-center gap-1 py-2 px-2.5 rounded-xl text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 transition-all shadow-xs"
                          >
                            <MessageCircle className="w-3.5 h-3.5" />
                            <span>Order</span>
                          </a>
                        </div>

                      </div>

                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        ) : (
          /* Empty Search State */
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8 max-w-md mx-auto">
            <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-3">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900">No books found</h3>
            <p className="text-xs text-slate-500 mt-1">
              Try adjusting your search terms or selecting "All Publications".
            </p>
            <button
              onClick={() => {
                setActiveMajorCategory("all");
                setSelectedSubject("All Subjects");
                setSelectedExamType("All Exams");
                setSearchQuery("");
              }}
              className="mt-4 px-4 py-2 rounded-xl text-xs font-bold bg-emerald-700 text-white hover:bg-emerald-800 cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* ========================================================= */}
        {/* 4. MODAL: DETAILED BOOK COVER & SPECS INSPECTION */}
        {/* ========================================================= */}
        <AnimatePresence>
          {activeModalBook && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className={`bg-white rounded-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200 overflow-hidden flex flex-col transition-all duration-300 ${
                  modalViewSide === "full" ? "max-w-5xl md:flex-col lg:flex-row" : "max-w-4xl md:flex-row"
                }`}
              >
                {/* Left/Top Side: Book Cover High Res View */}
                <div className={`p-6 bg-slate-100 flex flex-col items-center justify-between border-b md:border-b-0 md:border-r border-slate-200 ${
                  modalViewSide === "full" ? "w-full lg:w-3/5" : "md:w-1/2"
                }`}>
                  <div className="w-full flex justify-between items-center mb-4">
                    <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                      {activeModalBook.classLevel} • {activeModalBook.subject}
                    </span>
                    <div className="flex gap-1.5 bg-slate-200/80 p-1 rounded-xl">
                      <button
                        onClick={() => setModalViewSide("front")}
                        className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                          modalViewSide === "front" ? "bg-emerald-700 text-white shadow-xs" : "text-slate-700 hover:bg-white/60"
                        }`}
                      >
                        Front Cover
                      </button>
                      <button
                        onClick={() => setModalViewSide("back")}
                        className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                          modalViewSide === "back" ? "bg-emerald-700 text-white shadow-xs" : "text-slate-700 hover:bg-white/60"
                        }`}
                      >
                        Back Cover
                      </button>
                      <button
                        onClick={() => setModalViewSide("full")}
                        className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                          modalViewSide === "full" ? "bg-emerald-700 text-white shadow-xs" : "text-slate-700 hover:bg-white/60"
                        }`}
                      >
                        Full Jacket Wrap
                      </button>
                    </div>
                  </div>

                  <div className={`w-full my-auto ${modalViewSide === "full" ? "max-w-2xl py-2" : "max-w-xs"}`}>
                    <BookCover book={activeModalBook} viewMode={modalViewSide} className="w-full shadow-2xl rounded-2xl" />
                  </div>

                  <p className="text-[11px] text-slate-500 mt-4 text-center">
                    {activeModalBook.bannerImageUrl 
                      ? "Official publication wrap jacket (front, spine, and back) printed by Vidyatree Publication."
                      : "Official layout as designed and printed by Vidyatree Publication, Lucknow."}
                  </p>
                </div>

                {/* Right Side: Detailed Info & Ordering */}
                <div className={`p-6 flex flex-col justify-between space-y-6 ${
                  modalViewSide === "full" ? "w-full lg:w-2/5" : "md:w-1/2"
                }`}>
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 uppercase">
                        {activeModalBook.curriculum}
                      </span>
                      <button
                        onClick={() => setActiveModalBook(null)}
                        className="p-1.5 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 cursor-pointer"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>

                    <h2 className="text-2xl font-serif font-black text-slate-900 mt-3 leading-tight">
                      {activeModalBook.title}
                    </h2>

                    <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                      {activeModalBook.description}
                    </p>

                    <div className="mt-5 space-y-2">
                      <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                        Key Features & Curriculum Coverage:
                      </h4>
                      <ul className="space-y-1.5">
                        {activeModalBook.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-slate-700 leading-normal">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* PDF Ebook Callout if competitive */}
                    {activeModalBook.hasEbookPdf && (
                      <div className="mt-4 p-3 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-between">
                        <div>
                          <div className="text-xs font-bold text-amber-950 flex items-center gap-1">
                            <FileText className="w-3.5 h-3.5 text-amber-700" /> Digital PDF E-Book Available
                          </div>
                          <div className="text-[11px] text-amber-800 mt-0.5">
                            Read sample chapters online or purchase full instant PDF.
                          </div>
                        </div>
                        <button
                          onClick={() => {
                            const b = activeModalBook;
                            setActiveModalBook(null);
                            setActivePdfReaderBook(b);
                          }}
                          className="px-3 py-1.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-bold transition-all cursor-pointer shrink-0"
                        >
                          Read E-Book
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Ordering & MRP Strip */}
                  <div className="pt-4 border-t border-slate-200">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-xs text-slate-400 uppercase font-bold">Standard M.R.P.</span>
                        <div className="text-2xl font-black text-slate-900 font-mono">{activeModalBook.price}</div>
                      </div>
                      <span className="text-xs text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full font-semibold border border-emerald-200">
                        In Stock & Ready for Dispatch
                      </span>
                    </div>

                    <a
                      href={activeModalBook.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold text-white bg-emerald-700 hover:bg-emerald-800 shadow-md hover:shadow-lg transition-all"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Order on WhatsApp with Publication</span>
                    </a>
                  </div>

                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* ========================================================= */}
        {/* 5. INTERACTIVE PDF E-BOOK VIEWER MODAL */}
        {/* ========================================================= */}
        <EbookPdfReaderModal
          book={activePdfReaderBook}
          isOpen={!!activePdfReaderBook}
          onClose={() => setActivePdfReaderBook(null)}
        />

      </div>
    </section>
  );
}
