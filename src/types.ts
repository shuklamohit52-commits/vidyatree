export interface EbookChapter {
  id: string;
  title: string;
  pageStart: number;
  pageEnd: number;
  topics: string[];
}

export interface EbookFormula {
  label: string;
  formula: string;
  note?: string;
}

export interface EbookQuestion {
  qNumber: number;
  examTag?: string;
  question: string;
  options: string[];
  correctOption: number;
  solution: string;
  trickOrTip?: string;
}

export interface EbookPage {
  pageNumber: number;
  title: string;
  subtitle?: string;
  chapterName: string;
  type: "theory" | "formula_sheet" | "solved_examples" | "mock_questions" | "mind_map" | "key_takeaways";
  contentSnippet: string;
  formulas?: EbookFormula[];
  sampleQuestions?: EbookQuestion[];
  notes?: string[];
  keyHighlights?: string[];
}

export interface SampleEbookData {
  totalBookPages: number;
  sampleAvailablePages: number;
  edition: string;
  targetExams: string[];
  chapters: EbookChapter[];
  previewPages: EbookPage[];
}

export interface Book {
  id: string;
  title: string;
  subject: string;
  majorCategory: "academic" | "competitive";
  category: 
    | "Physics" 
    | "Chemistry" 
    | "Biology" 
    | "Mathematics" 
    | "Science" 
    | "Physical Education" 
    | "Computer" 
    | "Medical & NEET" 
    | "Engineering & JEE" 
    | "CUET & Entrance" 
    | "Defence & NDA" 
    | "SSC & Government" 
    | "Aptitude & Reasoning";
  classLevel: 
    | "Class 9" 
    | "Class 10" 
    | "Class 11" 
    | "Class 12" 
    | "Competitive / Entrance" 
    | "General";
  curriculum: string;
  price: string;
  ebookPrice?: string;
  mrpNumeric: number;
  ebookMrpNumeric?: number;
  examType?: string;
  solvedYears?: string;
  hasEbookPdf: boolean;
  samplePdf?: SampleEbookData;
  colorScheme: {
    primary: string;
    secondary: string;
    accent: string;
    bgGradient: string;
  };
  highlights: string[];
  description: string;
  externalLink: string;
  whatsappMessage: string;
  bannerImageUrl?: string;
}

export interface BankAccount {
  accountHolder: string;
  accountNumber: string;
  ifscCode: string;
  bankName: string;
  branchName: string;
  branchAddress: string;
  upiId: string;
  upiNumber: string;
}

export interface BranchContact {
  name: string;
  designation: string;
  phone: string;
  whatsapp: string;
}
