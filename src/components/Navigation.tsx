import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { WHATSAPP_NUMBER, getWhatsAppUrl } from '../data/projects';

interface NavigationProps {
  onOpenInquiry: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onOpenInquiry }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#F8F7F4]/95 backdrop-blur-md border-b border-[#E8E6DF] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="font-serif-display text-2xl font-medium tracking-tight text-[#141413] hover:opacity-80 transition-opacity whitespace-nowrap shrink-0"
        >
          M. Nasir
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-xs uppercase tracking-wider font-medium text-[#5E5C54]">
          <a
            href="#works"
            className="hover:text-[#141413] hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0"
          >
            Works
          </a>
          <a
            href="#categories"
            className="hover:text-[#141413] hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0"
          >
            Categories
          </a>
          <a
            href="#interactive-card"
            className="hover:text-[#141413] hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0"
          >
            Business Cards
          </a>
          <a
            href="#philosophy"
            className="hover:text-[#141413] hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0"
          >
            Philosophy
          </a>
          <a
            href="#about"
            className="hover:text-[#141413] hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0"
          >
            About
          </a>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-2.5">
          {/* WhatsApp Direct Header Link */}
          <a
            href={getWhatsAppUrl('General Design Inquiry')}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#25D366]/10 text-[#128C7E] hover:bg-[#25D366] hover:text-white transition-all text-xs font-mono-tabular font-medium whitespace-nowrap shrink-0 border border-[#25D366]/30"
            title="Chat directly on WhatsApp"
          >
            <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
            <span>{WHATSAPP_NUMBER}</span>
          </a>

          <button
            onClick={onOpenInquiry}
            className="px-3.5 py-1.5 text-xs font-medium text-[#FAF9F5] bg-[#141413] rounded-lg hover:bg-[#2E2E2B] transition-colors whitespace-nowrap shrink-0 cursor-pointer shadow-xs"
          >
            Select Category &amp; Drop
          </button>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-[#5E5C54] hover:text-[#141413] hover:bg-[#EFECE5] transition-colors cursor-pointer"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#E8E6DF] bg-[#FAF9F5] px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3 text-sm font-medium text-[#5E5C54]">
            <a
              href="#works"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#141413] transition-colors"
            >
              Selected Works
            </a>
            <a
              href="#categories"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#141413] transition-colors"
            >
              9 Design Categories
            </a>
            <a
              href="#interactive-card"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#141413] transition-colors"
            >
              Business Cards Craft
            </a>
            <a
              href="#philosophy"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#141413] transition-colors"
            >
              Design Philosophy
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#141413] transition-colors"
            >
              About M. Nasir
            </a>
          </nav>
          <div className="pt-4 border-t border-[#ECEAE2] flex flex-col gap-2.5">
            <a
              href={getWhatsAppUrl('Mobile Menu Inquiry')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-3 bg-[#25D366] text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-2"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white" />
              <span>WhatsApp: {WHATSAPP_NUMBER}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
