import React, { useState } from 'react';
import { RotateCw, Check, Sparkles } from 'lucide-react';

interface InteractiveBusinessCardProps {
  initialPaper?: 'cotton' | 'basalt' | 'greyboard';
  title?: string;
  client?: string;
  cardData?: {
    name: string;
    role: string;
    email: string;
    studio: string;
    address: string;
  };
}

export const InteractiveBusinessCard: React.FC<InteractiveBusinessCardProps> = ({
  initialPaper = 'cotton',
  title = 'M. Nasir Creative Direction',
  cardData = {
    name: 'M. Nasir',
    role: 'Graphic Designer & Art Director',
    email: 'nasirimran899@gmail.com',
    studio: 'Studio Nasir · Visual Systems',
    address: 'Branding & Digital Illustration',
  },
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [paper, setPaper] = useState<'cotton' | 'basalt' | 'greyboard'>(initialPaper);

  const paperStyles = {
    cotton: {
      frontBg: 'bg-[#F6F4EE]',
      backBg: 'bg-[#FAF8F2]',
      border: 'border-[#E3DFD4]',
      textColor: 'text-[#1C1C1A]',
      mutedColor: 'text-[#7D7B74]',
      foilColor: 'border-[#C29B38] text-[#9E7B24]',
      shadow: 'shadow-[0_20px_40px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.04)]',
      label: '600gsm Cotton Alabaster',
      finish: 'Blind Impression & Gold Hot Foil',
    },
    basalt: {
      frontBg: 'bg-[#151515]',
      backBg: 'bg-[#181817]',
      border: 'border-[#2D2D2B]',
      textColor: 'text-[#ECEAE5]',
      mutedColor: 'text-[#8E8D87]',
      foilColor: 'border-[#C0C0BA] text-[#D8D8D2]',
      shadow: 'shadow-[0_20px_40px_rgba(0,0,0,0.3),0_1px_3px_rgba(0,0,0,0.2)]',
      label: '700gsm Basalt Triplex',
      finish: 'Silver Foil & Matte Edge Painting',
    },
    greyboard: {
      frontBg: 'bg-[#C5C0B6]',
      backBg: 'bg-[#C9C4BA]',
      border: 'border-[#A8A295]',
      textColor: 'text-[#24221E]',
      mutedColor: 'text-[#5A564E]',
      foilColor: 'border-[#FFFFFF] text-[#FFFFFF]',
      shadow: 'shadow-[0_20px_40px_rgba(0,0,0,0.08)]',
      label: '550gsm Raw Greyboard',
      finish: 'Silkscreen White & Micro-Perforations',
    },
  };

  const current = paperStyles[paper];

  return (
    <div className="w-full flex flex-col items-center">
      {/* 3D Perspective Card Container */}
      <div
        className="w-full max-w-[420px] aspect-[1.75/1] cursor-pointer group select-none"
        style={{ perspective: '1200px' }}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div
          className="relative w-full h-full transition-transform duration-700 ease-out"
          style={{
            transformStyle: 'preserve-3d',
            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          }}
        >
          {/* Card Front */}
          <div
            className={`absolute inset-0 p-8 flex flex-col justify-between rounded-xl border ${current.frontBg} ${current.border} ${current.shadow} transition-colors duration-300`}
            style={{ backfaceVisibility: 'hidden' }}
          >
            {/* Subtle tactile texture grain overlay */}
            <div
              className="absolute inset-0 opacity-[0.03] pointer-events-none rounded-xl"
              style={{
                backgroundImage:
                  'radial-gradient(#000 1px, transparent 1px), radial-gradient(#000 1px, transparent 1px)',
                backgroundSize: '8px 8px',
              }}
            />

            <div className="flex justify-between items-start">
              <div className="flex items-center gap-1.5 text-xs font-mono-tabular tracking-wider uppercase opacity-60">
                <span>01</span>
                <span>/</span>
                <span>COL</span>
              </div>
              <span className={`text-[10px] uppercase tracking-widest font-mono-tabular border px-2 py-0.5 rounded-sm ${current.foilColor}`}>
                {current.finish.split('&')[0]}
              </span>
            </div>

            {/* Central Monogram */}
            <div className="my-auto text-center flex flex-col items-center justify-center">
              <div className="w-14 h-14 rounded-full border border-dashed border-current/25 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-300">
                <span className="font-serif-display text-2xl italic tracking-tight font-medium">MN</span>
              </div>
              <h4 className="font-serif-display text-xl tracking-tight font-medium">
                {title}
              </h4>
              <p className={`text-xs mt-1 ${current.mutedColor} tracking-wide`}>
                Bespoke Design & Art Direction
              </p>
            </div>

            <div className="flex justify-between items-end text-[11px] font-mono-tabular opacity-75">
              <span>EST. 2018</span>
              <div className="flex items-center gap-1 text-[11px] group-hover:translate-x-0.5 transition-transform">
                <RotateCw className="w-3 h-3 animate-pulse" />
                <span>Click to Flip</span>
              </div>
            </div>
          </div>

          {/* Card Back */}
          <div
            className={`absolute inset-0 p-8 flex flex-col justify-between rounded-xl border ${current.backBg} ${current.border} ${current.shadow} transition-colors duration-300`}
            style={{
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
            }}
          >
            <div className="flex justify-between items-start border-b pb-3 border-current/10">
              <div>
                <h5 className="font-sans-clean font-semibold text-sm tracking-tight text-current">
                  {cardData.name}
                </h5>
                <p className={`text-xs mt-0.5 ${current.mutedColor}`}>
                  {cardData.role}
                </p>
              </div>
              <span className="font-serif-display italic text-lg font-light text-current/80">
                Nasir
              </span>
            </div>

            <div className="space-y-1.5 text-xs py-2">
              <p className="font-mono-tabular tracking-tight text-current/90">
                {cardData.email}
              </p>
              <p className={`${current.mutedColor} text-[11px]`}>
                {cardData.studio}
              </p>
              <p className={`${current.mutedColor} text-[11px]`}>
                {cardData.address}
              </p>
            </div>

            <div className="flex justify-between items-center pt-3 border-t border-current/10 text-[10px] font-mono-tabular opacity-70">
              <span>{current.label}</span>
              <div className="flex items-center gap-1">
                <RotateCw className="w-2.5 h-2.5" />
                <span>Front Side</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tactile Paper Selector Bar */}
      <div className="mt-5 flex items-center gap-2 p-1.5 bg-[#EDEBE4] rounded-lg text-xs">
        <span className="px-2 text-[11px] text-[#7A7870] font-mono-tabular uppercase">Stock:</span>
        {(['cotton', 'basalt', 'greyboard'] as const).map((key) => (
          <button
            key={key}
            onClick={() => setPaper(key)}
            className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${
              paper === key
                ? 'bg-white text-[#141413] shadow-sm font-semibold'
                : 'text-[#615F57] hover:text-[#141413]'
            }`}
          >
            {key === 'cotton' && 'Cotton 600g'}
            {key === 'basalt' && 'Basalt 700g'}
            {key === 'greyboard' && 'Greyboard 550g'}
          </button>
        ))}
      </div>
    </div>
  );
};
