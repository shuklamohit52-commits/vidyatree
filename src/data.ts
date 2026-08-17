import { Book, BankAccount, BranchContact } from "./types";

export const BANK_DETAILS: BankAccount = {
  accountHolder: "VIDYATREE PUBLICATION",
  accountNumber: "6055870834",
  ifscCode: "KKBK0005223",
  bankName: "Kotak Mahindra Bank Ltd",
  branchName: "LUCKNOW-AMINABAD-GWYNNE RD",
  branchAddress: "KOTAK MAHINDRA BANK LTD, UGF, 177-34, GALAXY COMMERCIAL CENTER, Lucknow 226018",
  upiId: "vikash.com1234@kotak",
  upiNumber: "9369532755"
};

export const BRANCH_CONTACTS: BranchContact[] = [
  {
    name: "Vikash Agrawal",
    designation: "Branch Head",
    phone: "9369532755",
    whatsapp: "9369532755"
  },
  {
    name: "Manoj Tiwari",
    designation: "Branch Head",
    phone: "9839310494",
    whatsapp: "9839310494"
  }
];

export const OFFICE_INFO = {
  name: "VIDYATREE PUBLICATION",
  tagline: "We Love Referrals!",
  subTagline: "Educational Excellence, CBSE Lab Manuals & Competitive Exam Series",
  address: "173/21, Dr. B.N. Verma Road, Aminabad (Near Kaiserbagh Bus Stand), Lucknow, U.P. - 226018",
  email: "vidyatreepublication@gmail.com",
  phoneNumbers: ["+91 9369532755", "+91 9839310494", "+91 9598632755", "+91 9598532755"],
  primaryWhatsApp: "9369532755",
  businessHours: "Mon - Sat: 9:30 AM - 7:30 PM (Sunday Closed)"
};

export const MAJOR_CATEGORIES = [
  {
    id: "all",
    label: "All Publications",
    description: "Browse entire academic and competitive book collection"
  },
  {
    id: "academic",
    label: "CBSE & Academic Lab Manuals",
    description: "Class 9 to 12 practical manuals, observation records & lab notebooks"
  },
  {
    id: "competitive",
    label: "Competitive Exam Books & E-Books (PDF)",
    description: "NEET, JEE, CUET, NDA, SSC, Banking with online PDF eBook reader"
  }
];

export const ACADEMIC_SUBJECTS = [
  "All Subjects",
  "Science",
  "Physics",
  "Chemistry",
  "Biology",
  "Mathematics",
  "Physical Education",
  "Computer"
];

export const COMPETITIVE_EXAM_TYPES = [
  "All Exams",
  "NEET Medical",
  "JEE Engineering",
  "CUET (UG)",
  "NDA / Defence",
  "SSC & Govt. Exams",
  "Quantitative & Reasoning"
];

export const COMPETITIVE_EXAM_BOOKS: Book[] = [
  // =========================================================================
  // COMPETITIVE EXAM BOOKS (WITH FULL PDF E-BOOK VIEWER SAMPLES)
  // =========================================================================
  {
    id: "comp-neet-bio",
    title: "Vidyatree NEET 360° Biology - 15-Year Chapterwise Solved & NCERT Extract",
    subject: "Biology & Life Sciences",
    majorCategory: "competitive",
    category: "Medical & NEET",
    classLevel: "Competitive / Entrance",
    curriculum: "NTA NEET (UG) & AIIMS Pattern",
    price: "₹650.00",
    ebookPrice: "₹199.00 (Instant PDF Access)",
    mrpNumeric: 650,
    ebookMrpNumeric: 199,
    examType: "NEET Medical",
    solvedYears: "2010 - 2026 Solved Papers",
    hasEbookPdf: true,
    samplePdf: {
      totalBookPages: 580,
      sampleAvailablePages: 4,
      edition: "2026-27 Golden Edition (NTA Updated)",
      targetExams: ["NEET-UG", "AIIMS", "JIPMER", "CUET-UG Biology"],
      chapters: [
        {
          id: "ch-1",
          title: "Chapter 1: Cell - The Unit of Life (High Yield)",
          pageStart: 1,
          pageEnd: 42,
          topics: ["Prokaryotic vs Eukaryotic Organelles", "Endomembrane System", "Plastids & Mitochondria DNA", "Cell Cycle Checkpoints"]
        },
        {
          id: "ch-2",
          title: "Chapter 2: Genetics & Principles of Inheritance",
          pageStart: 43,
          pageEnd: 98,
          topics: ["Mendel's Laws & Deviations", "Chromosomal Disorders", "Linkage & Recombination Frequency", "Pedigree Chart Decoders"]
        },
        {
          id: "ch-3",
          title: "Chapter 3: Human Physiology Master Review",
          pageStart: 99,
          pageEnd: 180,
          topics: ["Counter-Current Mechanism in Kidney", "Sliding Filament Theory", "Cardiac Cycle & ECG waves", "Endocrine Hormone Flowcharts"]
        }
      ],
      previewPages: [
        {
          pageNumber: 1,
          title: "Rapid NCERT Line-by-Line Revision: Cell Biology",
          subtitle: "Section 1 • High-Yield Cytology Summary & NEET Trap Alerts",
          chapterName: "Cell - The Unit of Life",
          type: "theory",
          contentSnippet: "Cell theory originally proposed by Schleiden and Schwann was modified by Rudolf Virchow (1855) through the doctrine 'Omnis cellula-e cellula'. The plasma membrane fluid mosaic model (Singer & Nicolson, 1972) establishes that lipids are arranged as a bilayer with polar heads facing the outer sides and hydrophobic hydrocarbon tails protected inside.",
          keyHighlights: [
            "Mesosomes in bacteria are extensions of plasma membrane serving in cell wall synthesis, DNA replication & respiration.",
            "70S ribosomes consist of 50S and 30S subunits (present in prokaryotes, chloroplasts & mitochondria matrix).",
            "Mitochondria and Chloroplasts are semi-autonomous organelles possessing their own circular dsDNA and 70S ribosomes.",
            "Cytoskeleton elements (microtubules made of tubulin, microfilaments made of actin) maintain mechanical cell architecture."
          ],
          notes: [
            "NEET Trap: Bacterial flagella are composed of flagellin protein with basal body, hook, and filament (no 9+2 microtubule array, which is exclusive to eukaryotes)."
          ]
        },
        {
          pageNumber: 2,
          title: "Genetics Shortcut Formulas & Pedigree Decoders",
          subtitle: "Section 2 • Recombination Frequency, Gamete Calculation & Dihybrid Shortcuts",
          chapterName: "Principles of Inheritance & Variation",
          type: "formula_sheet",
          contentSnippet: "Master calculating gamete varieties and phenotypic ratios in seconds during high-pressure entrance tests without writing out the complete Punnett square.",
          formulas: [
            {
              label: "Number of Types of Gametes",
              formula: "G = 2^n  (where n = number of heterozygous gene pairs / loci)",
              note: "Example: AaBbCc has 3 heterozygous pairs -> 2^3 = 8 gamete types."
            },
            {
              label: "Recombination Frequency (Map Distance in Centimorgans)",
              formula: "RF (%) = (Total Recombinant Offspring / Total Progeny) × 100",
              note: "1% Recombination = 1 map unit (cM) as established by Alfred Sturtevant."
            },
            {
              label: "Dihybrid Test Cross Ratio",
              formula: "AaBb × aabb -> 1 : 1 : 1 : 1 (independent assortment)",
              note: "Deviation from 1:1:1:1 indicates physical linkage on the same chromosome."
            }
          ],
          notes: [
            "Autosomal Dominant: Never skips generations; affected children always have at least one affected parent.",
            "X-Linked Recessive: High male prevalence; criss-cross inheritance from carrier mother to son."
          ]
        },
        {
          pageNumber: 3,
          title: "NEET Past 15-Year Solved MCQs with Detailed Rationale",
          subtitle: "Section 3 • Assertion-Reason & Critical Multiple Choice Questions",
          chapterName: "Genetics & Cell Biology PYQ Bank",
          type: "solved_examples",
          contentSnippet: "Step-by-step verified answers highlighting elimination strategy and NCERT page citations.",
          sampleQuestions: [
            {
              qNumber: 1,
              examTag: "NEET 2024 Re-Exam",
              question: "If a segment of double-stranded DNA has 20% Adenine, what will be the percentage of Cytosine and Guanine together in this DNA segment?",
              options: ["A) 40%", "B) 60%", "C) 30%", "D) 20%"],
              correctOption: 1,
              solution: "According to Chargaff's Equivalence Rule: %A = %T and %G = %C. Given %A = 20%, thus %T = 20%. Total A + T = 40%. The remaining (G + C) = 100% - 40% = 60%. Hence (G + C) together is 60% (G = 30%, C = 30%). Correct option is B.",
              trickOrTip: "Tip: (G + C)% = 100 - 2 × (%A). Don't calculate individual bases if the question asks for the combined sum."
            },
            {
              qNumber: 2,
              examTag: "NEET 2023",
              question: "Which of the following stages of meiosis involves the actual physical division of centromeres?",
              options: ["A) Metaphase I", "B) Anaphase I", "C) Anaphase II", "D) Telophase I"],
              correctOption: 2,
              solution: "In Anaphase I, homologous chromosomes separate while centromeres remain intact. The actual splitting/division of centromeres and sister chromatid separation occurs during Anaphase II. Correct option is C.",
              trickOrTip: "Remember: Anaphase I separates homologs; Anaphase II splits centromeres (just like mitotic anaphase)."
            }
          ]
        },
        {
          pageNumber: 4,
          title: "Full Mock Test Drill: Human Physiology & Neuro-Endocrine",
          subtitle: "Section 4 • Time-Bound Mock Examination Paper (45 MCQs / 45 Min)",
          chapterName: "Human Physiology Practice Drill",
          type: "mock_questions",
          contentSnippet: "Practice timed questions under authentic exam conditions with negative marking (+4 / -1).",
          sampleQuestions: [
            {
              qNumber: 3,
              examTag: "Vidyatree NEET Mock Drill",
              question: "Which hormone is released by the juxtaglomerular cells in response to a fall in glomerular blood pressure/GFR?",
              options: ["A) Renin", "B) ANF (Atrial Natriuretic Factor)", "C) Aldosterone", "D) ADH / Vasopressin"],
              correctOption: 0,
              solution: "A fall in GFR activates JG cells to release Renin, which converts angiotensinogen into angiotensin I and subsequently angiotensin II, restoring GFR. Correct option is A.",
              trickOrTip: "ANF is the only antagonist hormone in this loop; it causes vasodilation when blood pressure is too high."
            },
            {
              qNumber: 4,
              examTag: "Vidyatree NEET Mock Drill",
              question: "During skeletal muscle contraction, which of the following bands/zones shortens or disappears?",
              options: ["A) A-band only", "B) I-band and H-zone", "C) Z-line only", "D) M-line only"],
              correctOption: 1,
              solution: "During sarcomere contraction, the actin thin filaments slide past the thick myosin filaments towards the center. As a result, the I-band shortens and the central H-zone disappears, while the A-band length remains constant (Correct: B).",
              trickOrTip: "A-Band is 'Always constant'; I-band and H-zone shrink."
            }
          ]
        }
      ]
    },
    colorScheme: {
      primary: "from-emerald-700 via-teal-800 to-slate-950",
      secondary: "bg-emerald-900",
      accent: "text-amber-300",
      bgGradient: "bg-gradient-to-br from-emerald-800 via-teal-900 to-slate-950"
    },
    highlights: [
      "100% NCERT Word-to-Word Extract with Diagram Highlights",
      "15 Years (2010-2026) Chapterwise & Topicwise Solved NEET MCQs",
      "Pedigree Analysis, Recombination & Numerical Shortcut Decoders",
      "Includes Digital PDF E-Book with Interactive Fullscreen Reading"
    ],
    description: "The definitive Biology preparation book for NEET-UG aspirants. Combines line-by-line NCERT mastery with 15 years of solved questions, mnemonics, and assertion-reason modules. Available in premium physical print and instant PDF E-Book format.",
    externalLink: "https://wa.me/919369532755?text=Hello%20Vidyatree%20Publication,%20I%20want%20to%20order/access%20the%20NEET%20360%20Biology%20Book/PDF%20Ebook.",
    whatsappMessage: "Hello Vidyatree Publication, I want to order/access the NEET 360 Biology Book / PDF E-Book."
  },

  {
    id: "comp-jee-phy",
    title: "Vidyatree JEE Main & Advanced Physics - Concept Booster & Formula Handbook",
    subject: "Physics & Engineering Mechanics",
    majorCategory: "competitive",
    category: "Engineering & JEE",
    classLevel: "Competitive / Entrance",
    curriculum: "JEE Main, JEE Advanced & BITSAT",
    price: "₹680.00",
    ebookPrice: "₹199.00 (Instant PDF Access)",
    mrpNumeric: 680,
    ebookMrpNumeric: 199,
    examType: "JEE Engineering",
    solvedYears: "2012 - 2026 Solved Archive",
    hasEbookPdf: true,
    samplePdf: {
      totalBookPages: 640,
      sampleAvailablePages: 3,
      edition: "2026-27 Engineering Master Edition",
      targetExams: ["JEE Main", "JEE Advanced", "BITSAT", "VITEEE", "State CETs"],
      chapters: [
        {
          id: "ch-1",
          title: "Chapter 1: Mechanics & Rotational Dynamics",
          pageStart: 1,
          pageEnd: 74,
          topics: ["Moment of Inertia Theorems", "Rolling without Slipping", "Angular Momentum Conservation", "Variable Mass Systems"]
        },
        {
          id: "ch-2",
          title: "Chapter 2: Electrodynamics & Maxwell Laws",
          pageStart: 75,
          pageEnd: 152,
          topics: ["Gauss Law Applications", "Capacitor Networks with Dielectrics", "LC Oscillations & AC Phasors", "Electromagnetic Induction"]
        },
        {
          id: "ch-3",
          title: "Chapter 3: Wave Optics & Modern Physics",
          pageStart: 153,
          pageEnd: 220,
          topics: ["YDSE with Thin Mica Sheets", "Photoelectric Quantum Cutoffs", "Bohr Atomic Orbit Calculations", "Radioactive Decay Series"]
        }
      ],
      previewPages: [
        {
          pageNumber: 1,
          title: "Rotational Dynamics & Rolling Master Cheat Sheet",
          subtitle: "Section 1 • Instant Formulae, Moment of Inertia Matrix & Acceleration Formulas",
          chapterName: "Rotational Mechanics",
          type: "formula_sheet",
          contentSnippet: "High-density equation sheet designed for JEE Advanced problem-solving without derivation overhead.",
          formulas: [
            {
              label: "Pure Rolling on Rough Incline (Angle θ)",
              formula: "a_cm = (g sin θ) / (1 + I_cm / (M R^2))",
              note: "Friction required for pure rolling: f = M g sin θ / (1 + M R^2 / I_cm) ≤ μ N."
            },
            {
              label: "Parallel Axis Theorem",
              formula: "I = I_cm + M d^2",
              note: "Only valid when the reference axis passes strictly through the Center of Mass."
            },
            {
              label: "Perpendicular Axis Theorem (Planar Lamina)",
              formula: "I_z = I_x + I_y",
              note: "Valid exclusively for two-dimensional planar bodies in the x-y plane."
            }
          ],
          notes: [
            "In pure rolling, the instantaneous velocity of the point of contact with the ground is strictly zero (v_contact = 0).",
            "Work done by static friction in pure rolling on a stationary surface is always 0."
          ]
        },
        {
          pageNumber: 2,
          title: "JEE Advanced Challenging Solved Problems with Vector Diagrams",
          subtitle: "Section 2 • Multi-Concept & Numerical Integer Type Questions",
          chapterName: "Electrodynamics & Induction",
          type: "solved_examples",
          contentSnippet: "Rigorous step-by-step solutions for multi-concept numerical problems.",
          sampleQuestions: [
            {
              qNumber: 1,
              examTag: "JEE Advanced Pattern",
              question: "A uniform rod of mass M and length L is hinged freely at one end. It is released from a horizontal position. What is the angular acceleration α of the rod at the instant of release?",
              options: ["A) 3g / (2L)", "B) 2g / (3L)", "C) g / L", "D) 3g / L"],
              correctOption: 0,
              solution: "Torque about the hinge: τ = M g × (L / 2). Moment of inertia about one end: I = (1/3) M L^2. Using τ = I α -> M g (L / 2) = (1/3 M L^2) α -> α = (3 g) / (2 L). Correct option: A.",
              trickOrTip: "Shortcut: For uniform distributed loads, center of gravity sits at L/2 from hinge."
            }
          ]
        },
        {
          pageNumber: 3,
          title: "JEE Main Rapid Fire Mock Test (25 Questions)",
          subtitle: "Section 3 • Section A (20 MCQs) + Section B (5 Numerical Value Questions)",
          chapterName: "Full Mechanics & Thermal Physics Test",
          type: "mock_questions",
          contentSnippet: "Timed test series mirroring NTA computer-based exam platform.",
          sampleQuestions: [
            {
              qNumber: 2,
              examTag: "JEE Main 2024 Shift-1",
              question: "Two point charges +q and -q are placed at a distance d apart. The electric flux passing through a spherical surface of radius 2d enclosing both charges is:",
              options: ["A) 0", "B) 2q / ε0", "C) q / ε0", "D) -q / ε0"],
              correctOption: 0,
              solution: "According to Gauss's Law, Total Electric Flux Φ = Q_enclosed / ε0. Since the sphere encloses both +q and -q, Q_enclosed = (+q) + (-q) = 0. Therefore, flux Φ = 0. (Option A).",
              trickOrTip: "Regardless of internal charge separation, net enclosed zero charge yields zero total flux."
            }
          ]
        }
      ]
    },
    colorScheme: {
      primary: "from-blue-700 via-indigo-900 to-slate-950",
      secondary: "bg-blue-950",
      accent: "text-cyan-300",
      bgGradient: "bg-gradient-to-br from-blue-900 via-indigo-950 to-slate-950"
    },
    highlights: [
      "Master Formula Bank across Mechanics, Electrodynamics & Optics",
      "Previous 14 Years Solved JEE Main & Advanced Multi-Choice & Numerical",
      "Shortcuts, Calculus Tricks & Dimensional Analysis Elimination",
      "Includes Read Online PDF E-Book with Searchable Table of Contents"
    ],
    description: "Engineered for maximum velocity in solving JEE physics numericals. Packed with conceptual visual breakdowns, trick methods, and NTA computer-based mock tests. Read freely online as PDF eBook or order physical dispatch.",
    externalLink: "https://wa.me/919369532755?text=Hello%20Vidyatree%20Publication,%20I%20want%20to%20order/access%20JEE%20Physics%20Handbook/Ebook.",
    whatsappMessage: "Hello Vidyatree Publication, I want to order/access JEE Physics Handbook / PDF E-Book."
  },

  {
    id: "comp-cuet-gt",
    title: "Vidyatree CUET (UG) Section III - General Test & Language Complete Masterguide",
    subject: "General Awareness, Reasoning & Numerical Aptitude",
    majorCategory: "competitive",
    category: "CUET & Entrance",
    classLevel: "Competitive / Entrance",
    curriculum: "NTA CUET (UG) Central Universities Entrance",
    price: "₹495.00",
    ebookPrice: "₹149.00 (Instant PDF Access)",
    mrpNumeric: 495,
    ebookMrpNumeric: 149,
    examType: "CUET (UG)",
    solvedYears: "2022 - 2026 NTA Papers",
    hasEbookPdf: true,
    samplePdf: {
      totalBookPages: 440,
      sampleAvailablePages: 3,
      edition: "2026-27 NTA CUET Revised Pattern",
      targetExams: ["CUET-UG (General Test)", "DU, BHU, JNU, AMU Admissions", "IPMAT", "NPAT"],
      chapters: [
        {
          id: "ch-1",
          title: "Module 1: Quantitative Reasoning & Speed Math",
          pageStart: 1,
          pageEnd: 85,
          topics: ["Percentages & Profit-Loss Tricks", "Time & Work Short-methods", "Ratio & Mixtures", "Data Interpretation Charts"]
        },
        {
          id: "ch-2",
          title: "Module 2: Logical & Analytical Reasoning",
          pageStart: 86,
          pageEnd: 160,
          topics: ["Coding-Decoding Matrix", "Blood Relations & Family Trees", "Direction Sense Tests", "Seating Arrangements"]
        },
        {
          id: "ch-3",
          title: "Module 3: General Knowledge & Current Affairs Yearbook",
          pageStart: 161,
          pageEnd: 240,
          topics: ["Indian Constitution & Fundamental Rights", "Geography & National Parks", "Awards, Summits & Sports 2025-26", "Static Science Pointers"]
        }
      ],
      previewPages: [
        {
          pageNumber: 1,
          title: "Speed Math & Arithmetic Shortcuts for CUET",
          subtitle: "Module 1 • Quick 10-Second Calculation Techniques",
          chapterName: "Quantitative Aptitude",
          type: "formula_sheet",
          contentSnippet: "Solve arithmetic problems in under 30 seconds using Vedic math multiplication, percentage fraction conversions, and chain rule shortcuts.",
          formulas: [
            {
              label: "Percentage to Fraction Equivalents",
              formula: "16.66% = 1/6 | 14.28% = 1/7 | 12.5% = 1/8 | 11.11% = 1/9 | 9.09% = 1/11",
              note: "Memorize these 5 fractions to eliminate decimal calculations in profit and loss."
            },
            {
              label: "Compound Interest Difference (2 Years)",
              formula: "Difference (CI - SI) = P × (R / 100)^2",
              note: "Applicable for 2-year tenure with annual compounding."
            }
          ],
          notes: [
            "Time & Work: If A completes work in 'x' days and B in 'y' days, together they take (x × y) / (x + y) days."
          ]
        },
        {
          pageNumber: 2,
          title: "Analytical Reasoning & Syllogism Venn Diagram Shortcuts",
          subtitle: "Module 2 • Deductive Logic & Pattern Identification",
          chapterName: "Logical Reasoning",
          type: "solved_examples",
          contentSnippet: "Master 100% accurate syllogisms using minimum overlapping circles.",
          sampleQuestions: [
            {
              qNumber: 1,
              examTag: "CUET (UG) Official PYQ",
              question: "Statements: 1. All Books are Pens. 2. Some Pens are Erasers. Conclusions: I. Some Books are Erasers. II. Some Pens are Books.",
              options: ["A) Only conclusion I follows", "B) Only conclusion II follows", "C) Both I and II follow", "D) Neither follows"],
              correctOption: 1,
              solution: "Since 'All Books are Pens', the subset of Books is inside Pens, which implies 'Some Pens are Books' is unconditionally TRUE (Conclusion II). However, the overlap between Pens and Erasers does not necessarily touch Books, so Conclusion I is not definite. Hence, Only Conclusion II follows (B).",
              trickOrTip: "Rule: 'All A are B' always gives valid conversion 'Some B are A'."
            }
          ]
        },
        {
          pageNumber: 3,
          title: "CUET General Test High-Probability Mock Drill",
          subtitle: "Module 3 • 60 Questions Practice Set",
          chapterName: "Mock Test Series",
          type: "mock_questions",
          contentSnippet: "Complete timed section test covering Current Affairs, General Science, and Quantitative Ability.",
          sampleQuestions: [
            {
              qNumber: 2,
              examTag: "CUET 2024 NTA",
              question: "Who was the chairman of the Drafting Committee of the Constituent Assembly of India?",
              options: ["A) Dr. Rajendra Prasad", "B) Dr. B. R. Ambedkar", "C) Jawaharlal Nehru", "D) Sardar Vallabhbhai Patel"],
              correctOption: 1,
              solution: "Dr. Bhimrao Ramji Ambedkar served as the Chairman of the Drafting Committee set up on 29 August 1947. Correct Option: B.",
              trickOrTip: "Dr. Rajendra Prasad was the President of the Constituent Assembly, not the Drafting Committee Chairman."
            }
          ]
        }
      ]
    },
    colorScheme: {
      primary: "from-amber-600 via-orange-700 to-slate-950",
      secondary: "bg-amber-800",
      accent: "text-yellow-200",
      bgGradient: "bg-gradient-to-br from-amber-700 via-orange-900 to-slate-950"
    },
    highlights: [
      "Complete Coverage of Numerical Ability, Reasoning & General GK",
      "5 Full-Length NTA Pattern Mock Test Papers with OMR / Online Keys",
      "Current Affairs 2025-26 Digest & High Frequency Static GK Bulletins",
      "Interactive Digital PDF eBook Reader with Sample Chapters"
    ],
    description: "The all-in-one preparation guide for CUET (UG) General Test Section III. Designed for undergraduate admissions to top Central and State universities with speed shortcuts and solved papers.",
    externalLink: "https://wa.me/919369532755?text=Hello%20Vidyatree%20Publication,%20I%20want%20to%20order/access%20CUET%20General%20Test%20Book/Ebook.",
    whatsappMessage: "Hello Vidyatree Publication, I want to order/access CUET General Test Book / PDF E-Book."
  },

  {
    id: "comp-nda-cds",
    title: "Vidyatree NDA & CDS Mathematics & GAT Explorer - Pathfinder Edition",
    subject: "Defence Mathematics, English & General Ability",
    majorCategory: "competitive",
    category: "Defence & NDA",
    classLevel: "Competitive / Entrance",
    curriculum: "UPSC NDA / NA & CDS Examination",
    price: "₹620.00",
    ebookPrice: "₹189.00 (Instant PDF Access)",
    mrpNumeric: 620,
    ebookMrpNumeric: 189,
    examType: "NDA / Defence",
    solvedYears: "2015 - 2026 UPSC Papers",
    hasEbookPdf: true,
    samplePdf: {
      totalBookPages: 520,
      sampleAvailablePages: 2,
      edition: "2026-27 UPSC Defence Edition",
      targetExams: ["UPSC NDA / NA", "CDS", "AFCAT", "Indian Coast Guard (Navik)"],
      chapters: [
        {
          id: "ch-1",
          title: "Section A: NDA Mathematics Rapid Calculus & Trigonometry",
          pageStart: 1,
          pageEnd: 140,
          topics: ["Matrices & Determinants Speed Tricks", "Trigonometric Identities & Heights", "Definite Integrals by Inspection", "Vector 3D Geometry"]
        },
        {
          id: "ch-2",
          title: "Section B: General Ability Test (GAT) - English & Science",
          pageStart: 141,
          pageEnd: 290,
          topics: ["Synonyms, Antonyms & Idioms", "Defence Physics & Chemistry", "Indian History & Freedom Struggle", "World Geography & Ocean Currents"]
        }
      ],
      previewPages: [
        {
          pageNumber: 1,
          title: "NDA Mathematics 300-Mark Booster Formulas",
          subtitle: "Section A • Matrices, Determinants & Vector Properties",
          chapterName: "Mathematics Strategy",
          type: "formula_sheet",
          contentSnippet: "High-speed formulas to crack the 120 mathematics questions in 150 minutes.",
          formulas: [
            {
              label: "Determinant of Skew-Symmetric Matrix of Odd Order",
              formula: "det(A) = 0 (Always zero for any odd order n × n)",
              note: "Instant 2.5 marks question frequently tested by UPSC."
            },
            {
              label: "Angle Between Two 3D Vectors",
              formula: "cos θ = (a · b) / (|a| |b|)",
              note: "If a · b = 0 -> Vectors are perpendicular; if a × b = 0 -> Vectors are parallel."
            }
          ]
        },
        {
          pageNumber: 2,
          title: "UPSC NDA Solved Question Analysis",
          subtitle: "Section B • General Science & History Questions",
          chapterName: "GAT Solved Archive",
          type: "solved_examples",
          contentSnippet: "Past NDA papers decoded with official UPSC answer keys.",
          sampleQuestions: [
            {
              qNumber: 1,
              examTag: "UPSC NDA 2024 (I)",
              question: "Which of the following rays has the shortest wavelength and maximum penetrating power in the electromagnetic spectrum?",
              options: ["A) Microwaves", "B) Ultraviolet Rays", "C) Gamma Rays", "D) X-Rays"],
              correctOption: 2,
              solution: "Gamma rays have the highest frequency, maximum photon energy, and shortest wavelength (< 10^-12 m) in the EM spectrum, granting them the highest penetrating power. Correct Option: C.",
              trickOrTip: "Spectrum mnemonic: Radio, Micro, Infrared, Visible, UV, X-ray, Gamma (Increasing energy/penetration)."
            }
          ]
        }
      ]
    },
    colorScheme: {
      primary: "from-teal-800 via-emerald-900 to-slate-950",
      secondary: "bg-teal-950",
      accent: "text-amber-400",
      bgGradient: "bg-gradient-to-br from-teal-900 via-emerald-950 to-slate-950"
    },
    highlights: [
      "Strictly follows UPSC NDA & CDS latest examination pattern",
      "300-Mark Mathematics shortcut methods with 10-year topic trend analysis",
      "English grammar rules, vocabulary flashcards & GAT General Science",
      "Includes instant downloadable PDF eBook version"
    ],
    description: "Comprehensive guidebook for defence entrance aspirants preparing for National Defence Academy (NDA), Naval Academy (NA), and Combined Defence Services (CDS). Covers paper 1 Mathematics and paper 2 General Ability Test.",
    externalLink: "https://wa.me/919369532755?text=Hello%20Vidyatree%20Publication,%20I%20want%20to%20order/access%20NDA%20Defence%20Book/Ebook.",
    whatsappMessage: "Hello Vidyatree Publication, I want to order/access NDA Defence Book / PDF E-Book."
  },

  {
    id: "comp-ssc-gs",
    title: "Vidyatree General Studies & General Science Booster for SSC CGL / CHSL & State PCS",
    subject: "Static GK, Science, Polity & History",
    majorCategory: "competitive",
    category: "SSC & Government",
    classLevel: "Competitive / Entrance",
    curriculum: "SSC CGL, CHSL, MTS, CPO & State PSC (UPPSC, BPSC, MPPSC)",
    price: "₹450.00",
    ebookPrice: "₹129.00 (Instant PDF Access)",
    mrpNumeric: 450,
    ebookMrpNumeric: 129,
    examType: "SSC & Govt. Exams",
    solvedYears: "2016 - 2026 SSC TCS Questions",
    hasEbookPdf: true,
    samplePdf: {
      totalBookPages: 410,
      sampleAvailablePages: 2,
      edition: "2026-27 TCS Pattern Edition",
      targetExams: ["SSC CGL (Tier 1 & Tier 2)", "SSC CHSL", "UPPSC / RO-ARO", "Railway RRB NTPC"],
      chapters: [
        {
          id: "ch-1",
          title: "Indian Polity & Constitutional Articles One-Liner Digest",
          pageStart: 1,
          pageEnd: 90,
          topics: ["Important Articles 1 to 395", "Schedules & Amendments", "President & Supreme Court Powers", "Panchayati Raj 73rd Amendment"]
        },
        {
          id: "ch-2",
          title: "Everyday Science & Technology Pointers",
          pageStart: 91,
          pageEnd: 175,
          topics: ["Human Diseases & Vitamins", "Periodic Elements & Common Chemical Names", "Units, Inventions & Discoveries", "Space & Defence Missions"]
        }
      ],
      previewPages: [
        {
          pageNumber: 1,
          title: "High-Frequency Indian Constitution Articles & Schedules",
          subtitle: "Polity Section • 50 Most Repeated SSC TCS Articles",
          chapterName: "Indian Polity",
          type: "theory",
          contentSnippet: "One-liner factual pointers compiled from 150+ shifts of SSC CGL, CHSL, and State PCS examinations.",
          keyHighlights: [
            "Article 14: Equality before law and equal protection of laws.",
            "Article 21: Protection of life and personal liberty (Includes Right to Privacy).",
            "Article 21A: Right to free and compulsory education for children (6 to 14 years) added by 86th Constitutional Amendment 2002.",
            "Article 32: Right to Constitutional Remedies (Called the 'Heart and Soul of the Constitution' by Dr. B. R. Ambedkar).",
            "Article 51A: Fundamental Duties (11 duties, recommended by Swaran Singh Committee, added by 42nd Amendment 1976)."
          ]
        },
        {
          pageNumber: 2,
          title: "SSC CGL TCS Solved General Awareness MCQs",
          subtitle: "Practice Set • With High-Yield Elimination Explanations",
          chapterName: "Solved Question Bank",
          type: "solved_examples",
          contentSnippet: "Actual SSC computer-based exam questions with subject context.",
          sampleQuestions: [
            {
              qNumber: 1,
              examTag: "SSC CGL Tier-1 2024",
              question: "Deficiency of which of the following vitamins causes Rickets (soft and weak bones in children)?",
              options: ["A) Vitamin A", "B) Vitamin B12", "C) Vitamin C", "D) Vitamin D"],
              correctOption: 3,
              solution: "Vitamin D (Calciferol) aids calcium and phosphorus absorption; its deficiency causes Rickets in children and Osteomalacia in adults. Correct: D.",
              trickOrTip: "Vitamin A -> Night blindness; Vitamin C -> Scurvy; Vitamin B1 -> Beriberi."
            }
          ]
        }
      ]
    },
    colorScheme: {
      primary: "from-rose-800 via-red-900 to-slate-950",
      secondary: "bg-rose-950",
      accent: "text-amber-300",
      bgGradient: "bg-gradient-to-br from-rose-900 via-red-950 to-slate-950"
    },
    highlights: [
      "High-Yield Static GK One-Liners & Tabular Summaries",
      "5000+ TCS Pattern Questions categorized by History, Geography, Polity & Science",
      "Memory Mnemonics and Yearbooks for Rapid Recall",
      "Instant PDF E-Book with Bookmark Support"
    ],
    description: "Engineered specifically for SSC CGL Tier 1 & 2, CHSL, Railway NTPC, and State PCS exams. Eliminates information overload and focuses purely on high-yield, frequently asked concepts and current static GK.",
    externalLink: "https://wa.me/919369532755?text=Hello%20Vidyatree%20Publication,%20I%20want%20to%20order/access%20SSC%20General%20Studies%20Book/Ebook.",
    whatsappMessage: "Hello Vidyatree Publication, I want to order/access SSC General Studies Book / PDF E-Book."
  }
];

export const ACADEMIC_LAB_MANUAL_BOOKS: Book[] = [
  // =========================================================================
  // ACADEMIC & CBSE PRACTICAL LAB MANUALS (PRINTED EDITIONS WITH REAL COVERS)
  // =========================================================================
  {
    id: "sci-9",
    title: "Science Lab Manual - Class IX",
    subject: "Science (Physics, Chemistry, Biology)",
    majorCategory: "academic",
    category: "Science",
    classLevel: "Class 9",
    curriculum: "CBSE Practical Curriculum",
    price: "₹445.00",
    mrpNumeric: 445,
    bannerImageUrl: "https://cdn.jsdelivr.net/gh/luckymohittiwari52-oss/quiz-assets@main/images/image7.png",
    hasEbookPdf: false,
    colorScheme: {
      primary: "from-blue-600 to-cyan-900",
      secondary: "bg-blue-800",
      accent: "text-amber-300",
      bgGradient: "bg-gradient-to-br from-blue-700 via-sky-900 to-cyan-950"
    },
    highlights: [
      "Physics: laws of reflection, Archimedes principle, sound wave velocity",
      "Chemistry: mixture vs compound, true solution, suspension & colloid",
      "Biology: plant cell vs animal cell slides, onion peel & cheek cells",
      "Practical skills questions (MCQs) for formative and summative assessment"
    ],
    description: "Unified Science Laboratory Manual for Class 9 combining Physics, Chemistry, and Biology practicals with step-by-step guidance, authentic striped blue cover, and vivid illustrations.",
    externalLink: "https://wa.me/919369532755?text=Hello%20Vidyatree%20Publication,%20I%20want%20to%20order/enquire%20about%20Science%20Lab%20Manual%20Class%209%20(MRP%20₹445).",
    whatsappMessage: "Hello Vidyatree Publication, I want to order/enquire about Science Lab Manual Class 9 (MRP ₹445)."
  },
  {
    id: "sci-10",
    title: "Science Lab Manual - Class X",
    subject: "Science (Physics, Chemistry, Biology)",
    majorCategory: "academic",
    category: "Science",
    classLevel: "Class 10",
    curriculum: "CBSE Practical Curriculum",
    price: "₹445.00",
    mrpNumeric: 445,
    bannerImageUrl: "https://cdn.jsdelivr.net/gh/luckymohittiwari52-oss/quiz-assets@main/images/image8.png",
    hasEbookPdf: false,
    colorScheme: {
      primary: "from-amber-600 to-blue-950",
      secondary: "bg-amber-700",
      accent: "text-cyan-300",
      bgGradient: "bg-gradient-to-br from-amber-700 via-sky-900 to-blue-950"
    },
    highlights: [
      "Physics: Ohm's law, focal length of lenses/mirrors, refraction through prism",
      "Chemistry: pH of samples, chemical reactions of acids/bases, reactivity series",
      "Biology: Stomata temporary mount, respiration in seeds, budding/binary fission",
      "High-scoring viva question-answer bank for 10th CBSE practicals"
    ],
    description: "Top-tier Class 10 Science practical guide prepared specifically for CBSE board exam requirements with tan/ochre striped cover, well-labeled apparatus diagrams, and viva support.",
    externalLink: "https://wa.me/919369532755?text=Hello%20Vidyatree%20Publication,%20I%20want%20to%20order/enquire%20about%20Science%20Lab%20Manual%20Class%2010%20(MRP%20₹445).",
    whatsappMessage: "Hello Vidyatree Publication, I want to order/enquire about Science Lab Manual Class 10 (MRP ₹445)."
  },
  {
    id: "phy-11",
    title: "Practical Manual of Physics - Class 11",
    subject: "Physics",
    majorCategory: "academic",
    category: "Physics",
    classLevel: "Class 11",
    curriculum: "As per latest CBSE Syllabus",
    price: "₹465.00",
    mrpNumeric: 465,
    bannerImageUrl: "https://cdn.jsdelivr.net/gh/luckymohittiwari52-oss/quiz-assets@main/images/image16.png",
    hasEbookPdf: false,
    colorScheme: {
      primary: "from-blue-600 to-indigo-900",
      secondary: "bg-blue-900",
      accent: "text-amber-400",
      bgGradient: "bg-gradient-to-br from-blue-900 via-indigo-950 to-slate-900"
    },
    highlights: [
      "Strictly aligned with latest CBSE curriculum",
      "Step-by-step experiment procedures & viva-voce",
      "High-precision ray diagrams and tabular observation columns",
      "Graph plotting guidelines and error calculation methods"
    ],
    description: "Comprehensive practical manual for Class 11 Physics students. Features all prescribed NCERT/CBSE experiments, activities, observational records, precautions, and frequently asked viva questions.",
    externalLink: "https://wa.me/919369532755?text=Hello%20Vidyatree%20Publication,%20I%20want%20to%20order/enquire%20about%20Practical%20Manual%20of%20Physics%20Class%2011%20(MRP%20₹465).",
    whatsappMessage: "Hello Vidyatree Publication, I want to order/enquire about Practical Manual of Physics Class 11 (MRP ₹465)."
  },
  {
    id: "phy-12",
    title: "Practical Manual of Physics - Class 12",
    subject: "Physics",
    majorCategory: "academic",
    category: "Physics",
    classLevel: "Class 12",
    curriculum: "As per latest CBSE Syllabus",
    price: "₹465.00",
    mrpNumeric: 465,
    bannerImageUrl: "https://cdn.jsdelivr.net/gh/luckymohittiwari52-oss/quiz-assets@main/images/image17.png",
    hasEbookPdf: false,
    colorScheme: {
      primary: "from-blue-700 to-slate-900",
      secondary: "bg-blue-950",
      accent: "text-cyan-400",
      bgGradient: "bg-gradient-to-br from-blue-900 via-blue-950 to-purple-950"
    },
    highlights: [
      "Covers all Section A and Section B CBSE Experiments",
      "Investigatory project ideas & documentation formats",
      "Circuit diagrams for optics, semiconductors, and galvanometers",
      "Comprehensive viva-voce bank with conceptual answers"
    ],
    description: "Standard practical textbook and record manual for Senior Secondary Class 12 Physics CBSE practical exams. Designed for maximum scoring in board practical assessment.",
    externalLink: "https://wa.me/919369532755?text=Hello%20Vidyatree%20Publication,%20I%20want%20to%20order/enquire%20about%20Practical%20Manual%20of%20Physics%20Class%2012%20(MRP%20₹465).",
    whatsappMessage: "Hello Vidyatree Publication, I want to order/enquire about Practical Manual of Physics Class 12 (MRP ₹465)."
  },
  {
    id: "chem-11",
    title: "Practical Manual of Chemistry - Class 11",
    subject: "Chemistry",
    majorCategory: "academic",
    category: "Chemistry",
    classLevel: "Class 11",
    curriculum: "As per latest CBSE Syllabus",
    price: "₹465.00",
    mrpNumeric: 465,
    bannerImageUrl: "https://cdn.jsdelivr.net/gh/luckymohittiwari52-oss/quiz-assets@main/images/image3.png",
    hasEbookPdf: false,
    colorScheme: {
      primary: "from-pink-600 to-rose-900",
      secondary: "bg-pink-700",
      accent: "text-amber-300",
      bgGradient: "bg-gradient-to-br from-pink-700 via-rose-900 to-purple-950"
    },
    highlights: [
      "Volumetric analysis & titration techniques",
      "Qualitative analysis of salt radicals (cations & anions)",
      "Chemical preparation protocols with safety warnings",
      "Structured observation and calculation tables"
    ],
    description: "Detailed laboratory manual for Class 11 Chemistry students. Contains fundamental lab operations, volumetric estimation, pH determination, and systematic salt analysis.",
    externalLink: "https://wa.me/919369532755?text=Hello%20Vidyatree%20Publication,%20I%20want%20to%20order/enquire%20about%20Practical%20Manual%20of%20Chemistry%20Class%2011%20(MRP%20₹465).",
    whatsappMessage: "Hello Vidyatree Publication, I want to order/enquire about Practical Manual of Chemistry Class 11 (MRP ₹465)."
  },
  {
    id: "chem-12",
    title: "Practical Manual of Chemistry - Class 12",
    subject: "Chemistry",
    majorCategory: "academic",
    category: "Chemistry",
    classLevel: "Class 12",
    curriculum: "As per latest CBSE Syllabus",
    price: "₹465.00",
    mrpNumeric: 465,
    bannerImageUrl: "https://cdn.jsdelivr.net/gh/luckymohittiwari52-oss/quiz-assets@main/images/image4.png",
    hasEbookPdf: false,
    colorScheme: {
      primary: "from-purple-600 to-rose-950",
      secondary: "bg-purple-900",
      accent: "text-amber-400",
      bgGradient: "bg-gradient-to-br from-purple-800 via-rose-900 to-slate-950"
    },
    highlights: [
      "Complete Titrimetric & Redox titrations (KMnO4 & Mohr's Salt)",
      "Systematic qualitative salt identification charts",
      "Organic functional group detection tests with reactions",
      "Surface chemistry, chemical kinetics & chromatography experiments"
    ],
    description: "The definitive Class 12 Chemistry practical guide for CBSE board examinations. Fully structured with neat reaction equations, observation tables, and viva questions.",
    externalLink: "https://wa.me/919369532755?text=Hello%20Vidyatree%20Publication,%20I%20want%20to%20order/enquire%20about%20Practical%20Manual%20of%20Chemistry%20Class%2012%20(MRP%20₹465).",
    whatsappMessage: "Hello Vidyatree Publication, I want to order/enquire about Practical Manual of Chemistry Class 12 (MRP ₹465)."
  },
  {
    id: "bio-11",
    title: "Practical Manual of Biology - Class 11",
    subject: "Biology",
    majorCategory: "academic",
    category: "Biology",
    classLevel: "Class 11",
    curriculum: "As per latest CBSE Syllabus",
    price: "₹465.00",
    mrpNumeric: 465,
    bannerImageUrl: "https://cdn.jsdelivr.net/gh/luckymohittiwari52-oss/quiz-assets@main/images/image5.png",
    hasEbookPdf: false,
    colorScheme: {
      primary: "from-red-600 to-rose-950",
      secondary: "bg-red-800",
      accent: "text-emerald-300",
      bgGradient: "bg-gradient-to-br from-red-700 via-rose-900 to-amber-950"
    },
    highlights: [
      "Microscope slide preparation & staining methods",
      "Anatomy of plant and animal tissues with labeled diagrams",
      "Physiological experiments on respiration and transpiration",
      "Spotting exercises with clear specimen descriptions"
    ],
    description: "An illustrated Biology practical manual for Class 11. Includes high-resolution botanical and zoological drawings, mounting techniques, and observation points.",
    externalLink: "https://wa.me/919369532755?text=Hello%20Vidyatree%20Publication,%20I%20want%20to%20order/enquire%20about%20Practical%20Manual%20of%20Biology%20Class%2011%20(MRP%20₹465).",
    whatsappMessage: "Hello Vidyatree Publication, I want to order/enquire about Practical Manual of Biology Class 11 (MRP ₹465)."
  },
  {
    id: "bio-12",
    title: "Practical Manual of Biology - Class 12",
    subject: "Biology",
    majorCategory: "academic",
    category: "Biology",
    classLevel: "Class 12",
    curriculum: "As per latest CBSE Syllabus",
    price: "₹465.00",
    mrpNumeric: 465,
    bannerImageUrl: "https://cdn.jsdelivr.net/gh/luckymohittiwari52-oss/quiz-assets@main/images/image6.png",
    hasEbookPdf: false,
    colorScheme: {
      primary: "from-rose-700 to-amber-950",
      secondary: "bg-rose-900",
      accent: "text-yellow-300",
      bgGradient: "bg-gradient-to-br from-rose-800 via-red-950 to-orange-950"
    },
    highlights: [
      "Pollen germination, mitosis in onion root tip & meiosis slides",
      "Pedigree analysis & Mendelian inheritance charts",
      "Ecology experiments: soil pH, moisture & water turbidity",
      "Board practical spotting specimen questions & answers"
    ],
    description: "Complete practical manual for Class 12 Biology CBSE students. Includes detailed laboratory experiments, slide preparations, spotting guide, and project reporting.",
    externalLink: "https://wa.me/919369532755?text=Hello%20Vidyatree%20Publication,%20I%20want%20to%20order/enquire%20about%20Practical%20Manual%20of%20Biology%20Class%2012%20(MRP%20₹465).",
    whatsappMessage: "Hello Vidyatree Publication, I want to order/enquire about Practical Manual of Biology Class 12 (MRP ₹465)."
  },
  {
    id: "math-9",
    title: "Mathematics Lab Manual - Class 9",
    subject: "Mathematics",
    majorCategory: "academic",
    category: "Mathematics",
    classLevel: "Class 9",
    curriculum: "CBSE Lab Activity Manual",
    price: "₹445.00",
    mrpNumeric: 445,
    bannerImageUrl: "https://cdn.jsdelivr.net/gh/luckymohittiwari52-oss/quiz-assets@main/images/image12.jpg",
    hasEbookPdf: false,
    colorScheme: {
      primary: "from-teal-600 to-cyan-900",
      secondary: "bg-teal-800",
      accent: "text-amber-300",
      bgGradient: "bg-gradient-to-br from-teal-700 via-cyan-900 to-slate-900"
    },
    highlights: [
      "Hands-on geometric paper folding & cutting activities",
      "Algebraic identities verification through geometric models",
      "Coordinate geometry and probability practical concepts",
      "Project work suggestions & internal assessment guidelines"
    ],
    description: "Activity-oriented Mathematics lab manual designed for Class 9 students to make abstract math concepts visual, intuitive, and enjoyable.",
    externalLink: "https://wa.me/919369532755?text=Hello%20Vidyatree%20Publication,%20I%20want%20to%20order/enquire%20about%20Mathematics%20Lab%20Manual%20Class%209%20(MRP%20₹445).",
    whatsappMessage: "Hello Vidyatree Publication, I want to order/enquire about Mathematics Lab Manual Class 9 (MRP ₹445)."
  },
  {
    id: "math-10",
    title: "Mathematics Lab Manual - Class 10",
    subject: "Mathematics",
    majorCategory: "academic",
    category: "Mathematics",
    classLevel: "Class 10",
    curriculum: "CBSE Lab Activity Manual",
    price: "₹445.00",
    mrpNumeric: 445,
    bannerImageUrl: "https://cdn.jsdelivr.net/gh/luckymohittiwari52-oss/quiz-assets@main/images/image13.jpg",
    hasEbookPdf: false,
    colorScheme: {
      primary: "from-cyan-600 to-blue-900",
      secondary: "bg-cyan-800",
      accent: "text-yellow-300",
      bgGradient: "bg-gradient-to-br from-cyan-700 via-blue-900 to-slate-900"
    },
    highlights: [
      "Arithmetic progression & linear equations lab activities",
      "Trigonometric ratios & height-distance clinometer projects",
      "Surface area & volume comparison activities",
      "Full internal assessment activity sheets"
    ],
    description: "CBSE Class 10 Mathematics practical manual packed with visual aids, activity demonstrations, and practice exercises for maximum internal score.",
    externalLink: "https://wa.me/919369532755?text=Hello%20Vidyatree%20Publication,%20I%20want%20to%20order/enquire%20about%20Mathematics%20Lab%20Manual%20Class%2010%20(MRP%20₹445).",
    whatsappMessage: "Hello Vidyatree Publication, I want to order/enquire about Mathematics Lab Manual Class 10 (MRP ₹445)."
  },
  {
    id: "math-11",
    title: "Mathematics Lab Manual - Class 11",
    subject: "Mathematics",
    majorCategory: "academic",
    category: "Mathematics",
    classLevel: "Class 11",
    curriculum: "CBSE Lab Activity Manual",
    price: "₹445.00",
    mrpNumeric: 445,
    bannerImageUrl: "https://cdn.jsdelivr.net/gh/luckymohittiwari52-oss/quiz-assets@main/images/image14.jpg",
    hasEbookPdf: false,
    colorScheme: {
      primary: "from-emerald-600 to-teal-950",
      secondary: "bg-emerald-800",
      accent: "text-amber-400",
      bgGradient: "bg-gradient-to-br from-emerald-800 via-teal-900 to-slate-900"
    },
    highlights: [
      "Set theory, relations and functions model verifications",
      "Trigonometric graphs & periodicity activities",
      "Conic sections (ellipse, parabola, hyperbola) constructions",
      "Vectors and 3D geometry intuitive models"
    ],
    description: "Engaging laboratory manual for Class 11 Mathematics exploring higher algebra, geometry, and calculus principles through practical activities.",
    externalLink: "https://wa.me/919369532755?text=Hello%20Vidyatree%20Publication,%20I%20want%20to%20order/enquire%20about%20Mathematics%20Lab%20Manual%20Class%2011%20(MRP%20₹445).",
    whatsappMessage: "Hello Vidyatree Publication, I want to order/enquire about Mathematics Lab Manual Class 11 (MRP ₹445)."
  },
  {
    id: "math-12",
    title: "Mathematics Lab Manual - Class 12",
    subject: "Mathematics",
    majorCategory: "academic",
    category: "Mathematics",
    classLevel: "Class 12",
    curriculum: "CBSE Lab Activity Manual",
    price: "₹445.00",
    mrpNumeric: 445,
    bannerImageUrl: "https://cdn.jsdelivr.net/gh/luckymohittiwari52-oss/quiz-assets@main/images/image15.jpg",
    hasEbookPdf: false,
    colorScheme: {
      primary: "from-sky-700 to-indigo-950",
      secondary: "bg-sky-900",
      accent: "text-amber-300",
      bgGradient: "bg-gradient-to-br from-sky-800 via-indigo-900 to-slate-950"
    },
    highlights: [
      "Equivalence relations and bijective function mappings",
      "Rate of change and tangent/normal geometric demos",
      "Definite integrals as limit of a sum visualization",
      "3D lines, planes and shortest distance models"
    ],
    description: "Class 12 Mathematics Lab Manual covering all official CBSE 20-mark internal assessment requirements, activity records, and viva questions.",
    externalLink: "https://wa.me/919369532755?text=Hello%20Vidyatree%20Publication,%20I%20want%20to%20order/enquire%20about%20Mathematics%20Lab%20Manual%20Class%2012%20(MRP%20₹445).",
    whatsappMessage: "Hello Vidyatree Publication, I want to order/enquire about Mathematics Lab Manual Class 12 (MRP ₹445)."
  },
  {
    id: "pe-11",
    title: "Physical Education - Class XI",
    subject: "Physical Education",
    majorCategory: "academic",
    category: "Physical Education",
    classLevel: "Class 11",
    curriculum: "As per latest CBSE Syllabus",
    price: "₹445.00",
    mrpNumeric: 445,
    bannerImageUrl: "https://cdn.jsdelivr.net/gh/luckymohittiwari52-oss/quiz-assets@main/images/image10.jpg",
    hasEbookPdf: false,
    colorScheme: {
      primary: "from-emerald-600 to-green-950",
      secondary: "bg-emerald-800",
      accent: "text-orange-400",
      bgGradient: "bg-gradient-to-br from-green-700 via-emerald-900 to-teal-950"
    },
    highlights: [
      "Olympism, fitness, wellness & lifestyle modules",
      "Yoga asanas, pranayama and lifestyle disease prevention",
      "Physical fitness test guidelines (SAI Khelo India tests)",
      "Major games rules, court measurements & record files"
    ],
    description: "Comprehensive textbook and practical manual for Class 11 Physical Education according to the modernized CBSE curriculum and sports education standards.",
    externalLink: "https://wa.me/919369532755?text=Hello%20Vidyatree%20Publication,%20I%20want%20to%20order/enquire%20about%20Physical%20Education%20Class%2011%20(MRP%20₹445).",
    whatsappMessage: "Hello Vidyatree Publication, I want to order/enquire about Physical Education Class 11 (MRP ₹445)."
  },
  {
    id: "pe-12",
    title: "Physical Education - Class XII",
    subject: "Physical Education",
    majorCategory: "academic",
    category: "Physical Education",
    classLevel: "Class 12",
    curriculum: "As per latest CBSE Syllabus",
    price: "₹445.00",
    mrpNumeric: 445,
    bannerImageUrl: "https://cdn.jsdelivr.net/gh/luckymohittiwari52-oss/quiz-assets@main/images/image11.jpg",
    hasEbookPdf: false,
    colorScheme: {
      primary: "from-orange-600 to-emerald-900",
      secondary: "bg-orange-700",
      accent: "text-emerald-300",
      bgGradient: "bg-gradient-to-br from-orange-600 via-green-800 to-emerald-950"
    },
    highlights: [
      "Management of sporting events & fixture preparation",
      "Children & women in sports, biomechanics & psychology",
      "Practical record book for athletics & specialized team sports",
      "Board practical exam questions, fitness index calculation & viva"
    ],
    description: "Highly rated Class 12 Physical Education textbook and lab practical manual for CBSE board candidates, complete with athletic event rules and viva questions.",
    externalLink: "https://wa.me/919369532755?text=Hello%20Vidyatree%20Publication,%20I%20want%20to%20order/enquire%20about%20Physical%20Education%20Class%2012%20(MRP%20₹445).",
    whatsappMessage: "Hello Vidyatree Publication, I want to order/enquire about Physical Education Class 12 (MRP ₹445)."
  },
  {
    id: "comp-nb",
    title: "Computer Notebook (Analytics, Development, Coding)",
    subject: "Computer Science & IT",
    majorCategory: "academic",
    category: "Computer",
    classLevel: "General",
    curriculum: "School & College Practical Record",
    price: "₹210.00",
    mrpNumeric: 210,
    bannerImageUrl: "https://cdn.jsdelivr.net/gh/luckymohittiwari52-oss/quiz-assets@main/images/image9.jpg",
    hasEbookPdf: false,
    colorScheme: {
      primary: "from-amber-500 to-indigo-900",
      secondary: "bg-amber-600",
      accent: "text-teal-300",
      bgGradient: "bg-gradient-to-br from-yellow-600 via-blue-900 to-indigo-950"
    },
    highlights: [
      "Specially designed ruled and blank page layout for coding outputs",
      "Sections for Algorithm, Flowchart, Source Code & Screen Output",
      "High-grade bleed-resistant paper suitable for ink and ballpoint",
      "Ideal for Python, C++, Java, Web Development & Data Analytics records"
    ],
    description: "Essential laboratory and practical recording notebook for Computer Science, Information Technology, and coding practicals across schools and colleges.",
    externalLink: "https://wa.me/919369532755?text=Hello%20Vidyatree%20Publication,%20I%20want%20to%20order/enquire%20about%20Computer%20Notebook%20(MRP%20₹210).",
    whatsappMessage: "Hello Vidyatree Publication, I want to order/enquire about Computer Notebook (MRP ₹210)."
  }
];

// Combine all publications with Academic Lab Manuals prioritized at the start
export const BOOKS: Book[] = [
  ...ACADEMIC_LAB_MANUAL_BOOKS,
  ...COMPETITIVE_EXAM_BOOKS
];
