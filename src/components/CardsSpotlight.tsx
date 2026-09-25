import React from 'react';
import { InteractiveBusinessCard } from './InteractiveBusinessCard';
import { Sparkles, Layers, Box, CheckCircle2 } from 'lucide-react';

interface CardsSpotlightProps {
  onOpenInquiry: (topic?: string) => void;
}

export const CardsSpotlight: React.FC<CardsSpotlightProps> = ({ onOpenInquiry }) => {
  return (
    <section id="interactive-card" className="py-20 bg-[#F4F2EC] border-b border-[#E5E3DB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Tactile Print Craft narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono-tabular text-[#78766F] uppercase tracking-wider">
              <span>Discipline Deep Dive</span>
              <span aria-hidden="true">·</span>
              <span>Cards &amp; Stationery Craft</span>
            </div>

            <h2 className="font-serif-display text-3xl sm:text-4xl text-[#141413] font-normal tracking-tight text-balance">
              The Architecture of Tactile Business Cards
            </h2>

            <p className="text-sm sm:text-base text-[#525049] font-sans-clean leading-relaxed">
              In a digital-first world, physical cards must command immediate tactile gravity. Nasir engineers bespoke business cards and collateral utilizing ultra-heavy cotton stocks (up to 700gsm), deep letterpress blind impressions, custom dye cuts, and metallic foil edge gilding.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#141413] mt-2 shrink-0" />
                <p className="text-xs sm:text-sm text-[#47453F]">
                  <strong className="text-[#141413] font-medium">Curated Paper Stocks:</strong> G.F Smith Colorplan, Cotton 600gsm, and recycled greyboards selected for fiber density and hand-feel.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#141413] mt-2 shrink-0" />
                <p className="text-xs sm:text-sm text-[#47453F]">
                  <strong className="text-[#141413] font-medium">Print Finishes:</strong> Blind debossing (tactile indentation without ink), hot foil stamping in matte gold or silver, and bespoke painted bevel edges.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#141413] mt-2 shrink-0" />
                <p className="text-xs sm:text-sm text-[#47453F]">
                  <strong className="text-[#141413] font-medium">Typographic Restraint:</strong> Micro-type hierarchies aligned to strict baseline grids, allowing negative space to breathe.
                </p>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-3 flex-wrap">
              <a
                href="https://wa.me/923247626975?text=Hello%20M.%20Nasir%2C%20I%20want%20to%20order%20custom%20luxury%20business%20cards."
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-lg bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs font-semibold shadow-xs transition-colors flex items-center gap-2 cursor-pointer"
              >
                <span>WhatsApp: 0324-7626975</span>
              </a>

              <button
                onClick={() => onOpenInquiry('Custom Stationery & Business Cards')}
                className="px-5 py-2.5 rounded-lg bg-[#141413] text-[#FAF9F5] text-xs font-medium hover:bg-[#2B2B28] transition-colors cursor-pointer"
              >
                Select Category Drawer
              </button>
            </div>
          </div>

          {/* Right Column: Interactive 3D Card Simulator */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center p-6 sm:p-10 bg-[#FAF9F5] rounded-2xl border border-[#E3E0D6] shadow-[0_4px_24px_rgba(0,0,0,0.03)]">
            <div className="w-full flex items-center justify-between mb-6 pb-3 border-b border-[#ECEAE2] text-xs font-mono-tabular text-[#78766F]">
              <span>INTERACTIVE TACTILE SIMULATOR</span>
              <span>3D ROTATION &amp; FINISH</span>
            </div>

            <InteractiveBusinessCard />

            <p className="text-[11px] text-[#78766F] font-mono-tabular text-center mt-6">
              Interactive 3D Preview · Click card to flip front/back · Change paper stock below
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
