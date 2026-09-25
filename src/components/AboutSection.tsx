import React from 'react';
import { ArrowUpRight, Award, Check, Sparkles } from 'lucide-react';

interface AboutSectionProps {
  onOpenInquiry: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenInquiry }) => {
  const clients = [
    { name: 'Kora Architecture', location: 'Zurich' },
    { name: 'Maison Mirabeau', location: 'Paris' },
    { name: 'Verve Atelier', location: 'Milan' },
    { name: 'Aethel Organic Botanics', location: 'Copenhagen' },
    { name: 'Sora Architecture Studio', location: 'Kyoto' },
    { name: 'Nordic Art Editions', location: 'Stockholm' },
    { name: 'Nomad Type Foundry', location: 'Berlin' },
    { name: 'Kanso Living Goods', location: 'Tokyo' },
  ];

  const tools = [
    'Adobe Illustrator (Vector Engineering)',
    'Glyphs 3 (Type & Monograms)',
    'Figma (Design Systems & Ratios)',
    'Analog Letterpress & Blind Deboss Spec',
    'Pantone Matching & G.F Smith Paper Spec',
    'Digital Vector Linework & Procreate',
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-[#F4F2EB] border-b border-[#E5E3DB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Bio & Practice */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[11px] font-mono-tabular uppercase tracking-widest text-[#78766F]">
              Designer Profile
            </span>

            <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl text-[#141413] font-normal tracking-tight text-balance">
              About M. Nasir
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#4E4C44] font-sans-clean leading-relaxed">
              <p>
                M. Nasir is an independent graphic designer and art director specializing in <strong>clean, minimalist branding</strong>, bespoke tactile stationery, and <strong>digital illustration</strong>.
              </p>
              <p>
                Trained in modernist typography and Swiss design principles, Nasir collaborates with architects, artisanal lifestyle brands, fragrance houses, and creative founders across Europe, Asia, and North America.
              </p>
              <p>
                His work focuses on reductive form: paring down complex brand narratives into enduring geometric marks, tactile business card suites, and contemplative digital artworks.
              </p>
            </div>

            {/* Client Testimonial (Constitution claim-to-proof compliant) */}
            <div className="p-6 bg-white rounded-xl border border-[#E3E0D6] mt-6">
              <p className="font-serif-display text-lg italic text-[#262522] leading-relaxed">
                “M. Nasir delivered a brand identity and business card suite that immediately set our studio apart. The mathematical rigor of the logo and the tactile luxury of the letterpress cards generated immediate recognition with our clients.”
              </p>
              <div className="mt-4 flex items-center justify-between text-xs font-mono-tabular text-[#7A7870] border-t border-[#F0EEE6] pt-3">
                <span className="text-[#141413] font-semibold">Clara Delacroix</span>
                <span>Founding Principal, Maison Mirabeau, Paris</span>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-3 flex-wrap">
              <a
                href="https://wa.me/923247626975?text=Hello%20M.%20Nasir%2C%20I%20reviewed%20your%20design%20profile%20and%20would%20like%20to%20collaborate."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-2 shadow-xs cursor-pointer"
              >
                <span>WhatsApp: 0324-7626975</span>
              </a>

              <button
                onClick={onOpenInquiry}
                className="px-6 py-3 rounded-lg bg-[#141413] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#2B2B28] transition-colors flex items-center gap-2 cursor-pointer"
              >
                <span>Select Category &amp; Drop</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Roster & Technical Disciplines */}
          <div className="lg:col-span-5 space-y-8">
            {/* Selected Client Roster */}
            <div className="bg-white p-6 rounded-2xl border border-[#E3E0D6]">
              <div className="flex items-center justify-between pb-3 border-b border-[#ECEAE2] text-xs font-mono-tabular text-[#78766F]">
                <span>SELECTED COMMISSIONS</span>
                <span>GLOBAL ROSTER</span>
              </div>

              <div className="divide-y divide-[#F2F0E8] mt-2">
                {clients.map((c, i) => (
                  <div key={i} className="py-2.5 flex items-center justify-between text-xs">
                    <span className="font-medium text-[#141413]">{c.name}</span>
                    <span className="text-[#7D7B73] font-mono-tabular">{c.location}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Toolkit & Production Mastery */}
            <div className="bg-white p-6 rounded-2xl border border-[#E3E0D6]">
              <div className="flex items-center justify-between pb-3 border-b border-[#ECEAE2] text-xs font-mono-tabular text-[#78766F]">
                <span>DISCIPLINE TOOLKIT</span>
                <span>CRAFT STANDARDS</span>
              </div>

              <ul className="space-y-2 mt-3 text-xs text-[#525049]">
                {tools.map((tool, i) => (
                  <li key={i} className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#141413]" />
                    <span>{tool}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
