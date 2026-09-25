import React from 'react';
import { ArrowDown, ArrowUpRight, Compass } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { WHATSAPP_NUMBER, getWhatsAppUrl } from '../data/projects';

interface HeroProps {
  onOpenInquiry: () => void;
  onExploreWorks: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenInquiry, onExploreWorks }) => {
  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden border-b border-[#E8E6DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Unboxed category descriptor with typographic separator */}
            <div className="flex items-center gap-2 text-xs font-mono-tabular text-[#78766E] uppercase tracking-wider mb-4 flex-wrap">
              <span>Logos</span>
              <span aria-hidden="true">·</span>
              <span>Business Cards</span>
              <span aria-hidden="true">·</span>
              <span>Social Media &amp; Posters</span>
              <span aria-hidden="true">·</span>
              <span>Banners</span>
            </div>

            <h1 className="font-serif-display text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] leading-[1.08] text-[#141413] tracking-tight font-normal text-balance">
              Form, Space &amp; Reductive Clarity
            </h1>

            <p className="mt-6 text-base sm:text-lg text-[#525049] font-sans-clean leading-relaxed max-w-xl">
              I am <strong className="text-[#141413] font-semibold">M. Nasir</strong>, an independent graphic designer crafting minimalist logos, bespoke business cards, invitation suites, social media carousels, thumbnails, posters, and display banners.
            </p>

            {/* Direct WhatsApp Callout Banner */}
            <div className="mt-6 p-3.5 bg-white border border-[#E3E0D6] rounded-xl flex items-center justify-between gap-3 max-w-lg shadow-2xs">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#25D366] text-white flex items-center justify-center">
                  <WhatsAppIcon className="w-4 h-4 fill-white" />
                </div>
                <div>
                  <span className="text-[10px] font-mono-tabular uppercase tracking-wider text-[#78766F] block">
                    Direct Client Communication
                  </span>
                  <span className="text-xs font-mono-tabular font-bold text-[#141413]">
                    WhatsApp: {WHATSAPP_NUMBER}
                  </span>
                </div>
              </div>

              <a
                href={getWhatsAppUrl('Direct Hero Inquiry')}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs font-semibold rounded-md transition-colors flex items-center gap-1.5"
              >
                <span>Direct Drop</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Adjacent Quantitative Proof Points */}
            <div className="mt-8 pt-6 border-t border-[#E8E6DF] grid grid-cols-3 gap-6 max-w-lg">
              <div>
                <div className="font-serif-display text-2xl sm:text-3xl text-[#141413] font-medium tabular-nums">
                  9
                </div>
                <div className="text-xs text-[#78766E] font-sans-clean mt-0.5">
                  Design Categories
                </div>
              </div>
              <div>
                <div className="font-serif-display text-2xl sm:text-3xl text-[#141413] font-medium tabular-nums">
                  180+
                </div>
                <div className="text-xs text-[#78766E] font-sans-clean mt-0.5">
                  Bespoke Card Sets
                </div>
              </div>
              <div>
                <div className="font-serif-display text-2xl sm:text-3xl text-[#141413] font-medium tabular-nums">
                  100%
                </div>
                <div className="text-xs text-[#78766E] font-sans-clean mt-0.5">
                  Vector Precision
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreWorks}
                className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#141413] rounded-lg hover:bg-[#2B2B28] transition-all flex items-center gap-2 cursor-pointer shadow-xs"
              >
                <span>Browse Categories</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={onOpenInquiry}
                className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#141413] bg-white border border-[#DCDAD2] rounded-lg hover:bg-[#F3F1EA] transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Select Category &amp; Drop</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Hero Studio Visual with Framing */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#E3E0D6] bg-[#EDEBE4] shadow-[0_16px_40px_rgba(0,0,0,0.06)] group">
              <img
                src="/src/assets/images/hero_editorial_workspace_1790363685566.jpg"
                alt="M. Nasir Design Studio Workspace"
                referrerPolicy="no-referrer"
                className="w-full aspect-[4/3] object-cover transition-transform duration-700 ease-out group-hover:scale-103"
              />

              {/* Minimalist framing caption */}
              <div className="p-4 bg-[#FAF9F5] border-t border-[#E8E6DF] flex items-center justify-between text-xs font-mono-tabular text-[#75736B]">
                <span>STUDIO M. NASIR // DIRECT COMMISSIONS</span>
                <span>WHATSAPP · {WHATSAPP_NUMBER}</span>
              </div>
            </div>

            {/* Floating Subtle Quality Stamp */}
            <div className="hidden sm:flex absolute -bottom-5 -left-5 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-[#DFDDD4] shadow-md items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#FAF7F0] border border-[#D5D2C7] flex items-center justify-center text-[#141413]">
                <Compass className="w-4 h-4 text-[#8C5E35]" />
              </div>
              <div className="text-left">
                <div className="text-xs font-semibold text-[#141413]">
                  Swiss Geometric Grid
                </div>
                <div className="text-[11px] text-[#7A7870] font-mono-tabular">
                  9 Core Disciplines Available
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
