import React from 'react';

interface LogoVectorProps {
  type?: 'kora' | 'verve' | 'solene' | 'nomad' | 'thumbnail' | 'banner' | 'zenith' | 'poster' | 'invitation' | 'facebook';
  className?: string;
  showGrid?: boolean;
}

export const LogoVectorRenderer: React.FC<LogoVectorProps> = ({
  type = 'kora',
  className = 'w-full h-full',
  showGrid = false,
}) => {
  return (
    <div className={`relative flex items-center justify-center overflow-hidden bg-[#FAF9F6] ${className}`}>
      {/* Precision architectural grid lines if toggled */}
      {showGrid && (
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none opacity-25"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="grid-pattern" width="24" height="24" patternUnits="userSpaceOnUse">
              <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#A3A199" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          <line x1="0" y1="0" x2="100%" y2="100%" stroke="#C28448" strokeWidth="0.5" strokeDasharray="3 3" />
          <line x1="100%" y1="0" x2="0" y2="100%" stroke="#C28448" strokeWidth="0.5" strokeDasharray="3 3" />
          <circle cx="50%" cy="50%" r="60" fill="none" stroke="#C28448" strokeWidth="0.5" strokeDasharray="2 2" />
          <circle cx="50%" cy="50%" r="100" fill="none" stroke="#A3A199" strokeWidth="0.5" strokeDasharray="4 4" />
        </svg>
      )}

      {/* 1. KORA ARCHITECTURAL MARK */}
      {type === 'kora' && (
        <svg
          viewBox="0 0 240 240"
          className="w-3/5 h-3/5 text-[#141413] transition-transform duration-500 hover:scale-105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 50 190 L 50 70 A 50 50 0 0 1 150 70 L 150 190"
            stroke="currentColor"
            strokeWidth="14"
            strokeLinecap="square"
          />
          <path
            d="M 100 190 L 100 110 A 30 30 0 0 1 160 110 L 190 110"
            stroke="currentColor"
            strokeWidth="14"
            strokeLinecap="square"
          />
          <circle cx="165" cy="65" r="7" fill="#C28448" />
        </svg>
      )}

      {/* 2. VERVE ATELIER LIGATURE */}
      {type === 'verve' && (
        <svg
          viewBox="0 0 240 240"
          className="w-3/5 h-3/5 text-[#141413] transition-transform duration-500 hover:scale-105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 45 65 L 105 175 L 165 65"
            stroke="currentColor"
            strokeWidth="12"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M 125 175 L 185 65"
            stroke="currentColor"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <path
            d="M 80 135 L 170 135"
            stroke="currentColor"
            strokeWidth="4"
            strokeDasharray="4 4"
          />
          <circle cx="120" cy="50" r="5" fill="#BA9B65" />
        </svg>
      )}

      {/* 3. SOLÈNE BOTANICAL CREST */}
      {type === 'solene' && (
        <svg
          viewBox="0 0 240 240"
          className="w-3/5 h-3/5 text-[#211D1A] transition-transform duration-500 hover:scale-105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="120" cy="120" r="78" stroke="currentColor" strokeWidth="2.5" />
          <circle cx="120" cy="120" r="72" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" />
          <path
            d="M 120 52 C 120 85 100 105 90 130 C 80 155 90 185 120 188 C 150 185 160 155 150 130 C 140 105 120 85 120 52 Z"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
          />
          <line x1="120" y1="65" x2="120" y2="175" stroke="currentColor" strokeWidth="1.5" />
          <path d="M 120 110 Q 135 100 145 108" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M 120 130 Q 105 120 95 128" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M 120 150 Q 135 140 145 148" stroke="currentColor" strokeWidth="1.5" fill="none" />
        </svg>
      )}

      {/* 4. NOMAD MONOLITHIC N */}
      {type === 'nomad' && (
        <svg
          viewBox="0 0 240 240"
          className="w-3/5 h-3/5 text-[#0A0A0A] transition-transform duration-500 hover:scale-105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="55" y="55" width="30" height="130" fill="currentColor" />
          <rect x="155" y="55" width="30" height="130" fill="currentColor" />
          <polygon points="85,55 155,160 155,185 85,80" fill="currentColor" />
          <rect x="62" y="62" width="6" height="6" fill="#E03616" />
        </svg>
      )}

      {/* 5. ZENITH SOUND LABS */}
      {type === 'zenith' && (
        <svg
          viewBox="0 0 240 240"
          className="w-3/5 h-3/5 text-[#141413] transition-transform duration-500 hover:scale-105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="120" cy="120" r="80" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" />
          <line x1="60" y1="120" x2="60" y2="120" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
          <line x1="80" y1="95" x2="80" y2="145" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
          <line x1="100" y1="75" x2="100" y2="165" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
          <line x1="120" y1="55" x2="120" y2="185" stroke="#C28448" strokeWidth="7" strokeLinecap="round" />
          <line x1="140" y1="75" x2="140" y2="165" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
          <line x1="160" y1="95" x2="160" y2="145" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
          <line x1="180" y1="120" x2="180" y2="120" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
        </svg>
      )}

      {/* 6. YOUTUBE THUMBNAIL LAYOUT */}
      {type === 'thumbnail' && (
        <svg
          viewBox="0 0 320 180"
          className="w-4/5 h-4/5 text-[#141413] transition-transform duration-500 hover:scale-105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="10" y="10" width="300" height="160" rx="8" fill="#141413" />
          <rect x="25" y="25" width="120" height="130" fill="#252422" rx="4" />
          <polygon points="65,65 105,90 65,115" fill="#E03616" />
          <rect x="160" y="40" width="130" height="16" fill="#FAF9F5" rx="2" />
          <rect x="160" y="65" width="95" height="14" fill="#FAF9F5" rx="2" />
          <rect x="160" y="90" width="120" height="10" fill="#888680" rx="2" />
          <rect x="160" y="125" width="60" height="18" fill="#E03616" rx="4" />
        </svg>
      )}

      {/* 7. ROLL-UP BANNER SPECIMEN */}
      {type === 'banner' && (
        <svg
          viewBox="0 0 160 280"
          className="w-3/5 h-4/5 text-[#141413] transition-transform duration-500 hover:scale-105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="15" y="15" width="130" height="250" rx="4" fill="#F4F2EC" stroke="#141413" strokeWidth="2" />
          <line x1="25" y1="40" x2="135" y2="40" stroke="#141413" strokeWidth="2" />
          <rect x="25" y="55" width="65" height="14" fill="#141413" />
          <circle cx="80" cy="140" r="38" stroke="#D63E20" strokeWidth="4" fill="none" />
          <line x1="42" y1="140" x2="118" y2="140" stroke="#141413" strokeWidth="1.5" />
          <line x1="80" y1="102" x2="80" y2="178" stroke="#141413" strokeWidth="1.5" />
          <rect x="25" y="210" width="110" height="8" fill="#141413" />
          <rect x="25" y="225" width="80" height="6" fill="#888680" />
        </svg>
      )}

      {/* 8. TYPOGRAPHIC POSTER SPECIMEN */}
      {type === 'poster' && (
        <svg
          viewBox="0 0 200 280"
          className="w-3/5 h-4/5 text-[#141413] transition-transform duration-500 hover:scale-105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="10" y="10" width="180" height="260" rx="4" fill="#FAF9F5" stroke="#141413" strokeWidth="1.5" />
          <text x="25" y="45" fontFamily="serif" fontSize="24" fontStyle="italic" fill="#141413">SWISS</text>
          <text x="25" y="70" fontFamily="sans-serif" fontSize="28" fontWeight="bold" fill="#141413">GRID 04</text>
          <line x1="25" y1="85" x2="175" y2="85" stroke="#141413" strokeWidth="1" />
          <rect x="25" y="100" width="70" height="70" fill="#141413" />
          <circle cx="140" cy="135" r="35" fill="#C28448" />
          <line x1="25" y1="190" x2="175" y2="190" stroke="#A3A199" strokeWidth="0.5" strokeDasharray="3 3" />
          <rect x="25" y="205" width="150" height="6" fill="#666" />
          <rect x="25" y="218" width="120" height="6" fill="#999" />
          <rect x="25" y="231" width="90" height="6" fill="#ccc" />
        </svg>
      )}

      {/* 9. INVITATION CARD SPECIMEN */}
      {type === 'invitation' && (
        <svg
          viewBox="0 0 220 220"
          className="w-3/5 h-3/5 text-[#141413] transition-transform duration-500 hover:scale-105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="20" y="20" width="180" height="180" rx="6" fill="#FBF9F4" stroke="#DCD6C8" strokeWidth="1.5" />
          <rect x="30" y="30" width="160" height="160" rx="4" fill="none" stroke="#DCD6C8" strokeWidth="0.5" strokeDasharray="3 3" />
          <circle cx="110" cy="80" r="24" fill="#FAF6EE" stroke="#C29B38" strokeWidth="1" />
          <text x="110" y="86" textAnchor="middle" fontFamily="serif" fontSize="16" fontStyle="italic" fill="#876D4B">N&amp;B</text>
          <line x1="50" y1="120" x2="170" y2="120" stroke="#C29B38" strokeWidth="1" />
          <rect x="60" y="135" width="100" height="8" fill="#24221E" rx="1" />
          <rect x="75" y="152" width="70" height="6" fill="#78766F" rx="1" />
          <rect x="85" y="166" width="50" height="5" fill="#A8A59C" rx="1" />
        </svg>
      )}

      {/* 10. FACEBOOK BANNER SPECIMEN */}
      {type === 'facebook' && (
        <svg
          viewBox="0 0 320 120"
          className="w-4/5 h-4/5 text-[#141413] transition-transform duration-500 hover:scale-105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="10" y="10" width="300" height="100" rx="6" fill="#191918" />
          <circle cx="60" cy="60" r="28" fill="#292826" stroke="#444" strokeWidth="1" />
          <text x="60" y="66" textAnchor="middle" fontFamily="serif" fontSize="18" fill="#C29B38">K</text>
          <rect x="105" y="38" width="120" height="12" fill="#FAF9F5" rx="2" />
          <rect x="105" y="56" width="180" height="7" fill="#8A8881" rx="1" />
          <rect x="105" y="68" width="140" height="7" fill="#8A8881" rx="1" />
          <rect x="250" y="38" width="45" height="14" fill="#25D366" rx="3" />
        </svg>
      )}
    </div>
  );
};
