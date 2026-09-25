import React, { useState, useEffect } from 'react';
import { X, Mail, Copy, Check, Send, Phone } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { WHATSAPP_NUMBER, getWhatsAppUrl, CATEGORIES } from '../data/projects';

interface ContactDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  initialTopic?: string;
}

export const ContactDrawer: React.FC<ContactDrawerProps> = ({
  isOpen,
  onClose,
  initialTopic = '',
}) => {
  const [copiedNumber, setCopiedNumber] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [name, setName] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Logos');
  const [projectBrief, setProjectBrief] = useState(initialTopic ? `Inquiring regarding ${initialTopic}.` : '');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialTopic) {
      setProjectBrief(`Inquiring regarding ${initialTopic}.`);
    }
  }, [initialTopic]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const copyNumber = () => {
    navigator.clipboard.writeText(WHATSAPP_NUMBER);
    setCopiedNumber(true);
    setTimeout(() => setCopiedNumber(false), 2000);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('nasirimran899@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const categoriesList = [
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

  const handleDropWhatsApp = () => {
    const message = `Hello M. Nasir, my name is ${name || 'a prospective client'}. I would like to inquire about your ${selectedCategory} design services.${
      projectBrief ? ` Project details: ${projectBrief}` : ''
    }`;
    const url = `https://wa.me/923247626975?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/50 backdrop-blur-xs flex justify-end">
      {/* Click outside to close */}
      <div className="flex-1" onClick={onClose} />

      {/* Slide-over panel */}
      <div className="w-full max-w-lg bg-[#FAF9F5] border-l border-[#E5E3DB] h-full overflow-y-auto p-6 sm:p-8 flex flex-col justify-between shadow-2xl animate-in slide-in-from-right duration-300">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-5 border-b border-[#ECEAE2]">
            <div>
              <span className="text-[11px] font-mono-tabular uppercase tracking-widest text-[#7D7B74]">
                Direct Commission · WhatsApp &amp; Email
              </span>
              <h3 className="font-serif-display text-2xl sm:text-3xl text-[#141413] mt-1 font-normal">
                Direct WhatsApp Inquiries
              </h3>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white border border-[#DEDBD2] flex items-center justify-center text-[#55534B] hover:text-[#141413] transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* WhatsApp Direct Highlight Box */}
          <div className="mt-6 p-4 sm:p-5 bg-[#25D366]/10 border border-[#25D366]/30 rounded-xl space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-[#25D366] text-white flex items-center justify-center shadow-xs">
                  <WhatsAppIcon className="w-5 h-5 fill-white" />
                </div>
                <div>
                  <span className="text-[10px] font-mono-tabular uppercase tracking-wider text-[#128C7E] font-semibold block">
                    Official WhatsApp
                  </span>
                  <span className="text-sm font-mono-tabular font-bold text-[#141413]">
                    {WHATSAPP_NUMBER}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={copyNumber}
                  className="px-2.5 py-1 text-xs font-mono-tabular bg-white hover:bg-[#F3F1EA] text-[#2B2B28] rounded-md border border-[#DCDAD0] transition-colors flex items-center gap-1 cursor-pointer"
                  title="Copy WhatsApp Number"
                >
                  {copiedNumber ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-600" />
                      <span className="text-emerald-700">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>

                <a
                  href={`https://wa.me/923247626975?text=${encodeURIComponent('Hello M. Nasir, I would like to inquire about your design services.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 text-xs font-semibold text-white bg-[#25D366] hover:bg-[#20BD5A] rounded-md transition-colors flex items-center gap-1"
                >
                  <span>Chat</span>
                </a>
              </div>
            </div>
            <p className="text-xs text-[#3E5246] font-sans-clean leading-relaxed">
              Select your desired category below to immediately drop your project requirements into Nasir’s WhatsApp.
            </p>
          </div>

          {/* Category Selector to Direct WhatsApp Drop */}
          <div className="mt-6 space-y-4">
            <div>
              <label className="block text-[11px] font-mono-tabular uppercase tracking-wider text-[#7A7870] mb-2 font-medium">
                1. Select Design Category *
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {categoriesList.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`py-2 px-2.5 rounded-lg text-xs font-sans-clean text-left transition-all cursor-pointer ${
                      selectedCategory === cat
                        ? 'bg-[#141413] text-white shadow-xs font-semibold'
                        : 'bg-white border border-[#DCDAD0] text-[#55534B] hover:text-[#141413] hover:border-[#141413]/40'
                    }`}
                  >
                    <span className="truncate block">{cat}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-mono-tabular uppercase tracking-wider text-[#7A7870] mb-1.5">
                2. Your Name or Brand (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g. Clara, Maison Studio"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg border border-[#DCDAD0] bg-white text-xs text-[#141413] focus:outline-none focus:border-[#141413] transition-colors"
              />
            </div>

            <div>
              <label className="block text-[11px] font-mono-tabular uppercase tracking-wider text-[#7A7870] mb-1.5">
                3. Short Brief or Concept (Optional)
              </label>
              <textarea
                rows={3}
                placeholder="Share any preferred timeline, dimensions, or references..."
                value={projectBrief}
                onChange={(e) => setProjectBrief(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg border border-[#DCDAD0] bg-white text-xs text-[#141413] focus:outline-none focus:border-[#141413] transition-colors resize-none leading-relaxed"
              />
            </div>

            {/* Direct WhatsApp Drop Button */}
            <button
              onClick={handleDropWhatsApp}
              className="w-full py-3.5 rounded-lg bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white" />
              <span>Drop Directly to WhatsApp ({WHATSAPP_NUMBER})</span>
            </button>
          </div>

          {/* Quick Email Fallback (No pricing anywhere) */}
          <div className="mt-6 pt-5 border-t border-[#ECEAE2] flex items-center justify-between text-xs">
            <div className="flex items-center gap-2 text-[#78766F] font-mono-tabular">
              <Mail className="w-3.5 h-3.5 text-[#141413]" />
              <span>nasirimran899@gmail.com</span>
            </div>
            <button
              onClick={copyEmail}
              className="text-[11px] font-mono-tabular text-[#55534B] hover:text-[#141413] underline cursor-pointer"
            >
              {copiedEmail ? 'Copied!' : 'Copy Email'}
            </button>
          </div>
        </div>

        {/* Footer info inside drawer */}
        <div className="pt-6 mt-6 border-t border-[#ECEAE2] text-[11px] font-mono-tabular text-[#828077] flex items-center justify-between">
          <span>WHATSAPP: {WHATSAPP_NUMBER}</span>
          <span>RESPONSE: INSTANT / &lt; 24H</span>
        </div>
      </div>
    </div>
  );
};
