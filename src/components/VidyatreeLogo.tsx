import React from "react";

interface VidyatreeLogoProps {
  className?: string;
  showText?: boolean;
  textColor?: string;
  taglineColor?: string;
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  lightModeText?: boolean;
}

export default function VidyatreeLogo({
  className = "",
  showText = true,
  textColor,
  taglineColor,
  size = "md",
  lightModeText = false
}: VidyatreeLogoProps) {
  const iconSizes = {
    sm: "h-8 w-8",
    md: "h-11 w-11",
    lg: "h-14 w-14",
    xl: "h-18 w-18",
    "2xl": "h-24 w-24"
  };

  const titleSizes = {
    sm: "text-base tracking-tight",
    md: "text-xl tracking-tight",
    lg: "text-2xl tracking-tight",
    xl: "text-3xl tracking-tight",
    "2xl": "text-4xl tracking-tight"
  };

  const pubSizes = {
    sm: "text-[7.5px] tracking-[0.25em]",
    md: "text-[9.5px] tracking-[0.28em]",
    lg: "text-xs tracking-[0.3em]",
    xl: "text-sm tracking-[0.32em]",
    "2xl": "text-base tracking-[0.35em]"
  };

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Official Vidyatree Tree & Open Book Emblem */}
      <div className={`relative shrink-0 flex items-center justify-center ${iconSizes[size]}`}>
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full drop-shadow-xs"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* 1. BOTTOM OPEN BOOK */}
          {/* Bottom Layer - Royal Indigo / Purple Pages */}
          <path
            d="M28 140 C58 132, 85 142, 100 152 C115 142, 142 132, 172 140 C175 140.8, 175 148, 172 153 C142 143, 115 155, 100 162 C85 155, 58 143, 28 153 C25 148, 25 140.8, 28 140 Z"
            fill="#3730A3"
          />

          {/* Top Layer - Lush Green Pages */}
          <path
            d="M32 126 C60 118, 86 128, 100 138 C114 128, 140 118, 168 126 C171 127, 170 134, 166 138 C140 128, 114 140, 100 147 C86 140, 60 128, 34 138 C30 134, 29 127, 32 126 Z"
            fill="#15803D"
          />

          {/* 2. 'V' SHAPED TREE TRUNK (Warm Terracotta / Brown) */}
          <path
            d="M93 145 C93 130, 85 110, 74 95 C78 93, 85 96, 90 102 C96 112, 98 126, 100 145 C102 126, 104 112, 110 102 C115 96, 122 93, 126 95 C115 110, 107 130, 107 145 C103 148, 97 148, 93 145 Z"
            fill="#9E4835"
          />

          {/* Central Stem connection */}
          <path
            d="M97 145 L100 149 L103 145 Z"
            fill="#803828"
          />

          {/* 3. LEAF CANOPY - Pointed Leaf / Almond Shapes */}
          {/* Top Central Crown Leaves */}
          <path d="M100 18 C105 28, 105 38, 100 45 C95 38, 95 28, 100 18 Z" fill="#15803D" />
          <path d="M90 28 C97 34, 98 42, 94 48 C88 44, 86 36, 90 28 Z" fill="#16A34A" />
          <path d="M110 28 C114 36, 112 44, 106 48 C102 42, 103 34, 110 28 Z" fill="#16A34A" />

          {/* Upper Tier Left */}
          <path d="M78 34 C86 40, 87 49, 83 55 C76 52, 73 43, 78 34 Z" fill="#15803D" />
          <path d="M66 48 C75 52, 78 60, 74 67 C66 65, 62 57, 66 48 Z" fill="#16A34A" />
          <path d="M54 64 C64 67, 68 76, 64 83 C55 82, 50 73, 54 64 Z" fill="#15803D" />
          <path d="M48 84 C58 84, 64 92, 61 99 C51 100, 44 93, 48 84 Z" fill="#16A34A" />

          {/* Upper Tier Right */}
          <path d="M122 34 C127 43, 124 52, 117 55 C113 49, 114 40, 122 34 Z" fill="#15803D" />
          <path d="M134 48 C138 57, 134 65, 126 67 C122 60, 125 52, 134 48 Z" fill="#16A34A" />
          <path d="M146 64 C150 73, 145 82, 136 83 C132 76, 136 67, 146 64 Z" fill="#15803D" />
          <path d="M152 84 C156 93, 149 100, 139 99 C136 92, 142 84, 152 84 Z" fill="#16A34A" />

          {/* Mid-Canopy Fill Leaves */}
          <path d="M100 48 C106 56, 105 65, 100 70 C95 65, 94 56, 100 48 Z" fill="#22C55E" />
          <path d="M88 56 C95 62, 95 70, 90 75 C84 72, 83 63, 88 56 Z" fill="#16A34A" />
          <path d="M112 56 C117 63, 116 72, 110 75 C105 70, 105 62, 112 56 Z" fill="#16A34A" />
          
          <path d="M78 68 C87 72, 88 81, 84 87 C77 85, 74 76, 78 68 Z" fill="#15803D" />
          <path d="M122 68 C126 76, 123 85, 116 87 C112 81, 113 72, 122 68 Z" fill="#15803D" />
          
          {/* Outer Radiating Accent Leaves */}
          <path d="M68 86 C77 88, 79 97, 75 103 C67 102, 63 94, 68 86 Z" fill="#22C55E" />
          <path d="M132 86 C137 94, 133 102, 125 103 C121 97, 123 88, 132 86 Z" fill="#22C55E" />
          
          <path d="M100 74 C104 80, 104 87, 100 91 C96 87, 96 80, 100 74 Z" fill="#15803D" />
          <path d="M94 85 C98 90, 97 96, 93 99 C89 96, 89 91, 94 85 Z" fill="#16A34A" />
          <path d="M106 85 C111 91, 111 96, 107 99 C103 96, 102 90, 106 85 Z" fill="#16A34A" />
        </svg>
      </div>

      {/* Official Typography Match: VIDYA (Brown) TREE (Green) PUBLICATION (Indigo/Purple) */}
      {showText && (
        <div className="flex flex-col justify-center leading-none">
          <div className={`font-sans font-black flex items-center ${titleSizes[size]}`}>
            <span className={lightModeText ? "text-amber-300" : (textColor || "text-[#9E4835]")}>
              VIDYA
            </span>
            <span className={lightModeText ? "text-emerald-400" : (textColor || "text-[#15803D]")}>
              TREE
            </span>
          </div>
          <div className={`font-sans font-black uppercase mt-1 ${pubSizes[size]} ${lightModeText ? "text-indigo-200" : (taglineColor || "text-[#3730A3]")}`}>
            PUBLICATION
          </div>
        </div>
      )}
    </div>
  );
}
