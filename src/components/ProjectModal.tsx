import React, { useState, useEffect } from 'react';
import { Project, getWhatsAppUrl, WHATSAPP_NUMBER } from '../data/projects';
import { LogoVectorRenderer } from './LogoVectorRenderer';
import { InteractiveBusinessCard } from './InteractiveBusinessCard';
import { WhatsAppIcon } from './WhatsAppIcon';
import { X, Copy, Check, Grid, ArrowRight } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenInquiry: (initialSubject?: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onOpenInquiry,
}) => {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [showGrid, setShowGrid] = useState(false);

  // Close on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const copyHex = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 1800);
  };

  const projectWhatsAppUrl = getWhatsAppUrl(`${project.title} (${project.categoryLabel})`);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 md:p-10 animate-in fade-in duration-200">
      {/* Click outside backdrop */}
      <div className="fixed inset-0 -z-10" onClick={onClose} />

      <div className="relative w-full max-w-4xl bg-[#FAF9F5] rounded-2xl border border-[#E8E6DF] shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Top Bar inside modal */}
        <div className="px-6 py-4 border-b border-[#ECEAE2] bg-[#FAF9F5] flex items-center justify-between sticky top-0 z-20">
          <div className="flex items-center gap-2 text-xs font-mono-tabular text-[#7B7972] uppercase tracking-wider">
            <span>{project.categoryLabel}</span>
            <span aria-hidden="true">·</span>
            <span>{project.year}</span>
            <span aria-hidden="true">·</span>
            <span>Case Study</span>
          </div>

          <div className="flex items-center gap-3">
            {project.svgIconType && (
              <button
                onClick={() => setShowGrid(!showGrid)}
                className={`px-3 py-1 rounded-md text-xs font-medium border flex items-center gap-1.5 transition-colors cursor-pointer ${
                  showGrid
                    ? 'bg-[#141413] text-[#FAF9F6] border-[#141413]'
                    : 'bg-white text-[#525049] border-[#DEDBD2] hover:text-[#141413]'
                }`}
              >
                <Grid className="w-3.5 h-3.5" />
                <span>{showGrid ? 'Hide Grid' : 'Construction Grid'}</span>
              </button>
            )}

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white border border-[#DEDBD2] flex items-center justify-center text-[#55534B] hover:text-[#141413] hover:bg-[#F2F0E8] transition-colors cursor-pointer"
              title="Close (Esc)"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 md:p-8 space-y-8">
          {/* Main Visual Showcase Area */}
          <div className="w-full bg-[#F2F0E9] rounded-xl overflow-hidden border border-[#E3E0D6] flex items-center justify-center relative min-h-[300px] md:min-h-[420px]">
            {project.svgIconType ? (
              <div className="w-full h-[360px] md:h-[420px]">
                <LogoVectorRenderer type={project.svgIconType} showGrid={showGrid} />
              </div>
            ) : project.hasInteractiveFlip ? (
              <div className="p-8 w-full flex flex-col items-center">
                <InteractiveBusinessCard
                  title={project.title}
                  client={project.client}
                  cardData={project.backCardText}
                />
              </div>
            ) : project.image ? (
              <img
                src={project.image}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-auto max-h-[540px] object-contain"
              />
            ) : (
              <div className="p-12 text-center">
                <h4 className="font-serif-display text-3xl italic text-[#47443E]">
                  {project.title}
                </h4>
              </div>
            )}
          </div>

          {/* Title and Metadata Header */}
          <div className="border-b border-[#ECEAE2] pb-6">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
              <div>
                <span className="text-[11px] font-mono-tabular uppercase tracking-widest text-[#828077]">
                  {project.client}
                </span>
                <h2 className="font-serif-display text-3xl md:text-4xl text-[#141413] mt-1 font-normal">
                  {project.title}
                </h2>
                <p className="text-sm font-sans-clean text-[#615F57] mt-1">
                  {project.subtitle}
                </p>
              </div>

              {/* Direct WhatsApp Call to Action */}
              <div className="flex items-center gap-3 flex-wrap">
                <a
                  href={projectWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-lg bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs font-semibold shadow-xs transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-white" />
                  <span>Drop on WhatsApp ({WHATSAPP_NUMBER})</span>
                </a>

                <button
                  onClick={() => {
                    onClose();
                    onOpenInquiry(`Inquiry about ${project.title}`);
                  }}
                  className="px-4 py-2.5 rounded-lg bg-[#141413] text-[#FAF9F5] text-xs font-medium hover:bg-[#2B2B28] transition-colors flex items-center gap-2 shadow-xs cursor-pointer"
                >
                  <span>Quick Inquiry</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* 2-Column Editorial Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Concept & Rationale (2 cols) */}
            <div className="md:col-span-2 space-y-6">
              <div>
                <h4 className="text-xs font-mono-tabular uppercase tracking-wider text-[#7B7971] mb-2">
                  Concept Narrative
                </h4>
                <p className="text-sm text-[#47453F] font-sans-clean leading-relaxed">
                  {project.concept}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono-tabular uppercase tracking-wider text-[#7B7971] mb-2">
                  Design Rationale &amp; Methodology
                </h4>
                <p className="text-sm text-[#47453F] font-sans-clean leading-relaxed">
                  Every curve, stroke weight, and spatial boundary is executed in strict vector formats to ensure crisp scaling from 16px micro-applications to large-format architectural signage.
                </p>
              </div>

              {/* Color Palette Swatches */}
              <div>
                <h4 className="text-xs font-mono-tabular uppercase tracking-wider text-[#7B7971] mb-3">
                  Color Specimen Palette (Click to Copy Hex)
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {project.palette.map((color, i) => (
                    <button
                      key={i}
                      onClick={() => copyHex(color.hex)}
                      className="group flex flex-col p-2.5 rounded-lg border border-[#E3E0D6] bg-white text-left hover:border-[#141413]/40 transition-colors cursor-pointer"
                    >
                      <div
                        className="w-full h-9 rounded mb-2 border border-black/10 shadow-2xs"
                        style={{ backgroundColor: color.hex }}
                      />
                      <span className="text-xs font-medium text-[#141413] truncate">
                        {color.name}
                      </span>
                      <div className="flex items-center justify-between text-[11px] font-mono-tabular text-[#7B7972] mt-0.5">
                        <span>{color.hex}</span>
                        {copiedHex === color.hex ? (
                          <Check className="w-3 h-3 text-emerald-600" />
                        ) : (
                          <Copy className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar Specifications (1 col) */}
            <div className="space-y-6 bg-white p-5 rounded-xl border border-[#E6E3D8]">
              <div>
                <h4 className="text-xs font-mono-tabular uppercase tracking-wider text-[#78766F] mb-2">
                  Typography Spec
                </h4>
                <p className="text-xs font-mono-tabular text-[#2B2B28] bg-[#F7F5EE] p-2.5 rounded border border-[#E3DFD3]">
                  {project.typography}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono-tabular uppercase tracking-wider text-[#78766F] mb-2">
                  Scope &amp; Deliverables
                </h4>
                <ul className="space-y-1.5 text-xs text-[#4F4D45]">
                  {project.deliverables.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#141413]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-[#EDEBE3] text-[11px] font-mono-tabular text-[#828078] space-y-1">
                <div>AUTHOR: M. NASIR</div>
                <div>DISCIPLINE: {project.categoryLabel.toUpperCase()}</div>
                <div>DELIVERY FORMAT: VECTOR / PRINT READY</div>
                <div>COMPLETED: {project.completionDate.toUpperCase()}</div>
              </div>
            </div>
          </div>

          {/* Technical Metadata Section */}
          <div className="border-t border-[#E5E3DB] pt-8">
            <div className="mb-4">
              <div className="flex items-center gap-2 text-xs font-mono-tabular uppercase tracking-widest text-[#7B7971]">
                <span>Technical Specifications</span>
                <span aria-hidden="true">·</span>
                <span>Production Pipeline</span>
              </div>
              <h3 className="font-serif-display text-2xl text-[#141413] mt-1 font-normal">
                Technical Metadata &amp; Tooling
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* 1. Design Tools Used */}
              <div className="bg-white p-5 rounded-xl border border-[#E6E3D8] flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-mono-tabular uppercase tracking-wider text-[#7A7870] mb-2 flex items-center justify-between">
                    <span>Design Tools Used</span>
                    <span className="text-[#141413] font-semibold">{project.toolsUsed.length}</span>
                  </div>
                  <div className="space-y-1.5">
                    {project.toolsUsed.map((tool, idx) => (
                      <div
                        key={idx}
                        className="text-xs text-[#2A2925] font-sans-clean bg-[#F8F7F2] px-2.5 py-1.5 rounded border border-[#EDEAE1] flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#8C5E35] shrink-0" />
                        <span className="font-medium">{tool}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-[#F2F0E8] text-[10px] font-mono-tabular text-[#88867E]">
                  PIPELINE: VECTOR &amp; ANALOG SPEC
                </div>
              </div>

              {/* 2. Completion Date */}
              <div className="bg-white p-5 rounded-xl border border-[#E6E3D8] flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-mono-tabular uppercase tracking-wider text-[#7A7870] mb-2">
                    Completion Date
                  </div>
                  <div className="font-serif-display text-2xl text-[#141413] font-medium tracking-tight">
                    {project.completionDate}
                  </div>
                  <p className="text-xs text-[#636159] mt-2 font-sans-clean leading-relaxed">
                    Final deliverables signed off, archived in master studio repository, and prepared for commercial release.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#F2F0E8] text-[10px] font-mono-tabular text-[#88867E]">
                  RELEASE STATUS: SIGNED &amp; ARCHIVED
                </div>
              </div>

              {/* 3. Project Duration */}
              <div className="bg-white p-5 rounded-xl border border-[#E6E3D8] flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-mono-tabular uppercase tracking-wider text-[#7A7870] mb-2">
                    Project Duration
                  </div>
                  <div className="font-serif-display text-2xl text-[#141413] font-medium tracking-tight">
                    {project.duration.split('(')[0].trim()}
                  </div>
                  <p className="text-xs font-mono-tabular text-[#8C5E35] mt-1">
                    {project.duration.includes('(') ? `(${project.duration.split('(')[1]}` : ''}
                  </p>
                  <p className="text-xs text-[#636159] mt-2 font-sans-clean leading-relaxed">
                    Encompassing research, geometric drafting, material proofing, and client revision cycles.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#F2F0E8] text-[10px] font-mono-tabular text-[#88867E]">
                  CYCLE: DESIGN STRATEGY TO ROLLOUT
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
