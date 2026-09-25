import React, { useState, useEffect } from 'react';
import { ArrowUp, Mail, Copy, Check } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { WHATSAPP_NUMBER, getWhatsAppUrl } from '../data/projects';

interface FooterProps {
  onOpenInquiry: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenInquiry }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText('nasirimran899@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(WHATSAPP_NUMBER);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const categoryLinks = [
    'Logos',
    'Business cards',
    'Invitation cards',
    'Social media posts',
    'Thumbnail',
    'Branding posts',
    'Posters',
    'Banner',
    'Facebook banner',
  ];

  return (
    <footer className="bg-[#141413] text-[#FAF9F5] pt-16 pb-12 border-t border-[#292926]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-[#2B2B28]">
          {/* Brand & Direct WhatsApp Contact */}
          <div className="md:col-span-5 space-y-4">
            <h2 className="font-serif-display text-3xl md:text-4xl text-[#FAF9F5] font-normal tracking-tight">
              M. Nasir
            </h2>
            <p className="text-xs text-[#9E9C94] max-w-sm font-sans-clean leading-relaxed">
              Independent graphic designer specializing in minimalist logos, business cards, invitation suites, social media assets, posters, thumbnails, and banners.
            </p>

            <div className="pt-2 flex flex-col gap-2.5">
              <a
                href={getWhatsAppUrl('Footer Direct Inquiries')}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono-tabular text-[#25D366] hover:text-[#45e07e] transition-colors flex items-center gap-2"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current" />
                <span>WhatsApp: {WHATSAPP_NUMBER}</span>
              </a>

              <button
                onClick={copyEmail}
                className="text-xs font-mono-tabular text-[#C4C2BA] hover:text-white transition-colors flex items-center gap-2 cursor-pointer text-left"
              >
                <Mail className="w-4 h-4" />
                <span>nasirimran899@gmail.com</span>
                {copiedEmail && <span className="text-[10px] text-emerald-400 font-sans-clean">(copied)</span>}
              </button>
            </div>
          </div>

          {/* 9 Design Categories */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-[11px] font-mono-tabular uppercase tracking-widest text-[#78766F] block">
              9 Design Categories
            </span>
            <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs text-[#BCBAB0]">
              {categoryLinks.map((cat) => (
                <a
                  key={cat}
                  href={`https://wa.me/923247626975?text=${encodeURIComponent(`Hello M. Nasir, I want to inquire about: ${cat}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#25D366] transition-colors truncate"
                  title={`Drop on WhatsApp for ${cat}`}
                >
                  {cat}
                </a>
              ))}
            </div>
          </div>

          {/* Direct Drop CTA */}
          <div className="md:col-span-3 space-y-4">
            <span className="text-[11px] font-mono-tabular uppercase tracking-widest text-[#78766F] block">
              Direct Communication
            </span>
            <div className="text-xs text-[#BCBAB0] space-y-1 font-mono-tabular">
              <div>STATUS: OPEN FOR WORK</div>
              <div>LOCAL TIME: {time || '12:00:00'}</div>
              <div>NUMBER: {WHATSAPP_NUMBER}</div>
            </div>

            <div className="pt-1 flex flex-col gap-2">
              <a
                href={getWhatsAppUrl('Direct Commission Request')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-lg bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs font-semibold transition-colors flex items-center justify-center gap-2 shadow-xs"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white" />
                <span>Drop on WhatsApp</span>
              </a>

              <button
                onClick={onOpenInquiry}
                className="w-full py-2 px-4 rounded-lg bg-[#FAF9F5] text-[#141413] text-xs font-medium hover:bg-[#EFECE4] transition-colors cursor-pointer"
              >
                Select Category Drawer
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-tabular text-[#75736C]">
          <div>
            © {new Date().getFullYear()} M. Nasir · WhatsApp: {WHATSAPP_NUMBER}
          </div>

          <div className="flex items-center gap-6">
            <span>DIRECT CLIENT WHATSAPP INTEGRATION</span>
            <button
              onClick={scrollToTop}
              className="hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
