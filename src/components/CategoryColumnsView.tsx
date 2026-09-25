import React from 'react';
import { Project, CATEGORIES, CategoryId, getWhatsAppUrl, WHATSAPP_NUMBER } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import { WhatsAppIcon } from './WhatsAppIcon';
import {
  Compass,
  CreditCard,
  Mail,
  Share2,
  Tv,
  Sparkles,
  FileText,
  Flag,
  Layout,
  MessageCircle,
} from 'lucide-react';

interface CategoryColumnsViewProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export const CategoryColumnsView: React.FC<CategoryColumnsViewProps> = ({
  projects,
  onSelectProject,
}) => {
  const columnDefs: {
    id: CategoryId;
    index: string;
    title: string;
    tagline: string;
    icon: React.ComponentType<{ className?: string }>;
    description: string;
  }[] = [
    {
      id: 'logos',
      index: '01',
      title: 'Logos',
      tagline: 'Vector Geometry & Monograms',
      icon: Compass,
      description: 'Architectural marks, mathematical ratios, and reductive symbols built for longevity.',
    },
    {
      id: 'business-cards',
      index: '02',
      title: 'Business Cards',
      tagline: 'Tactile Weight & Paper Finishes',
      icon: CreditCard,
      description: 'Bespoke 600–700gsm cotton business cards, blind debossing, and metallic edge gilding.',
    },
    {
      id: 'invitation-cards',
      index: '03',
      title: 'Invitation Cards',
      tagline: 'Bespoke Gala & Wedding Suites',
      icon: Mail,
      description: 'Blind debossed cotton invitations, wax seal matrices, and hand-addressed envelopes.',
    },
    {
      id: 'social-media-posts',
      index: '04',
      title: 'Social Media Posts',
      tagline: 'Editorial Carousel & Grid Kits',
      icon: Share2,
      description: 'Minimalist Instagram squares, storytelling carousels, and aesthetic typography templates.',
    },
    {
      id: 'thumbnail',
      index: '05',
      title: 'Thumbnail',
      tagline: 'High-Retention Video Covers',
      icon: Tv,
      description: 'Surgical crop geometry, stark silhouette contrast, and high-impact title frameworks.',
    },
    {
      id: 'branding-posts',
      index: '06',
      title: 'Branding Posts',
      tagline: 'Campaign & Brand Manifestos',
      icon: Sparkles,
      description: 'High-impact product launch graphics, brand reveal slides, and narrative carousels.',
    },
    {
      id: 'posters',
      index: '07',
      title: 'Posters',
      tagline: 'Gallery Exhibition Wall Art',
      icon: FileText,
      description: 'Swiss-inspired typographic exhibition posters and museum archival screenprints.',
    },
    {
      id: 'banner',
      index: '08',
      title: 'Banner',
      tagline: 'Roll-Up & Large Format Displays',
      icon: Flag,
      description: 'Large-scale modular exhibition roll-up banners and web hero billboards.',
    },
    {
      id: 'facebook-banner',
      index: '09',
      title: 'Facebook Banner',
      tagline: 'Ultra-Wide Cover Headers',
      icon: Layout,
      description: 'Safe-zone optimized Facebook profile banners conveying discreet European luxury.',
    },
  ];

  return (
    <div className="w-full">
      {/* Editorial intro banner */}
      <div className="mb-8 pb-4 border-b border-[#E5E3DC] flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-[11px] font-mono-tabular uppercase tracking-widest text-[#7D7B74]">
            Client Category Directory · 9 Specialized Disciplines
          </span>
          <h2 className="font-serif-display text-2xl md:text-3xl text-[#141413] mt-1 font-normal">
            Layout Categories &amp; Direct WhatsApp Inquiries
          </h2>
        </div>
        <div className="flex items-center gap-3">
          <a
            href={getWhatsAppUrl('Graphic Design Portfolio Inquiry')}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs font-semibold rounded-lg shadow-xs transition-colors flex items-center gap-2"
          >
            <WhatsAppIcon className="w-4 h-4 fill-white" />
            <span>Chat on WhatsApp: {WHATSAPP_NUMBER}</span>
          </a>
        </div>
      </div>

      {/* 9 Category Columns Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
        {columnDefs.map((col) => {
          const colProjects = projects.filter((p) => p.category === col.id);
          const Icon = col.icon;
          const waUrl = getWhatsAppUrl(col.title);

          return (
            <div
              key={col.id}
              className="flex flex-col bg-[#FDFDFB] rounded-2xl border border-[#E8E6E0] p-4 lg:p-5 shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-all hover:border-[#141413]/30"
            >
              {/* Column Header */}
              <div className="pb-4 mb-4 border-b border-[#ECEAE3]">
                <div className="flex items-center justify-between text-xs font-mono-tabular text-[#828077] mb-2">
                  <span className="tracking-widest">{col.index} / COL</span>
                  <span className="bg-[#EFECE4] text-[#42403A] px-2 py-0.5 rounded-full text-[11px] font-medium">
                    {colProjects.length} Works
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-md bg-[#F0EEE7] flex items-center justify-center text-[#141413]">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="font-serif-display text-xl text-[#141413] font-medium tracking-tight">
                    {col.title}
                  </h3>
                </div>

                <p className="text-[11px] font-mono-tabular text-[#9E7B24] mt-1">
                  {col.tagline}
                </p>

                <p className="text-xs text-[#6E6C65] mt-2 font-sans-clean leading-relaxed">
                  {col.description}
                </p>

                {/* Direct WhatsApp drop button for this category */}
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3.5 w-full py-2 px-3 bg-[#FAF9F5] hover:bg-[#25D366] hover:text-white text-[#2B2B28] border border-[#DDD9CE] hover:border-[#25D366] rounded-lg text-xs font-medium transition-all flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 fill-current text-[#25D366] group-hover:text-white group-hover:fill-white" />
                  <span>Drop on WhatsApp ({col.title})</span>
                </a>
              </div>

              {/* Column Project Cards Stack */}
              <div className="space-y-4">
                {colProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onSelect={onSelectProject}
                    compact={true}
                  />
                ))}

                {colProjects.length === 0 && (
                  <div className="py-6 text-center text-xs text-[#8C8A82] border border-dashed border-[#E0DED7] rounded-xl">
                    New commissions in progress
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
