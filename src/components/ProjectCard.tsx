import React from 'react';
import { Project, getWhatsAppUrl } from '../data/projects';
import { LogoVectorRenderer } from './LogoVectorRenderer';
import { WhatsAppIcon } from './WhatsAppIcon';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
  compact?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onSelect,
  compact = false,
}) => {
  const waUrl = getWhatsAppUrl(`${project.title} (${project.categoryLabel})`);

  return (
    <article
      onClick={() => onSelect(project)}
      className="group cursor-pointer flex flex-col justify-between bg-white rounded-xl border border-[#E8E6DF] overflow-hidden transition-all duration-300 hover:border-[#141413]/30 hover:shadow-[0_12px_30px_rgba(0,0,0,0.04)]"
    >
      {/* Visual Asset Container */}
      <div className={`relative w-full overflow-hidden bg-[#F2F0E9] ${compact ? 'aspect-[4/3]' : 'aspect-[16/11]'}`}>
        {project.svgIconType ? (
          <div className="w-full h-full relative">
            <LogoVectorRenderer type={project.svgIconType} showGrid={false} />
            <div className="absolute bottom-3 right-3 text-[10px] font-mono-tabular text-[#828077] bg-white/80 px-2 py-1 rounded backdrop-blur-xs">
              SPECIMEN
            </div>
          </div>
        ) : project.image ? (
          <div className="w-full h-full relative">
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-[#ECE9E0]">
            <span className="font-serif-display text-2xl italic text-[#4A4740]">
              {project.title}
            </span>
            <span className="text-xs font-mono-tabular text-[#828077] mt-2">
              {project.categoryLabel}
            </span>
          </div>
        )}

        {/* Hover quick overlay indicator */}
        <div className="absolute top-3 right-3 flex items-center gap-1.5 opacity-0 translate-y-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xs hover:scale-105 transition-transform"
            title="Inquire directly on WhatsApp"
          >
            <WhatsAppIcon className="w-4 h-4 fill-white" />
          </a>

          <div className="w-8 h-8 rounded-full bg-white/95 text-[#141413] flex items-center justify-center shadow-xs">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Content Metadata Area */}
      <div className="p-4 sm:p-5 flex flex-col justify-between flex-grow">
        <div>
          {/* Zero-Pill Unboxed Metadata */}
          <div className="flex items-center gap-2 text-[11px] font-mono-tabular text-[#78766F] uppercase tracking-wider mb-1.5">
            <span>{project.categoryLabel}</span>
            <span aria-hidden="true">·</span>
            <span>{project.year}</span>
            <span aria-hidden="true">·</span>
            <span>{project.client.split(',')[0]}</span>
          </div>

          <h3 className="font-serif-display text-lg sm:text-xl text-[#141413] tracking-tight group-hover:text-[#8C5E35] transition-colors leading-snug">
            {project.title}
          </h3>

          <p className="text-xs text-[#636159] mt-1 line-clamp-2 leading-relaxed font-sans-clean">
            {project.summary}
          </p>
        </div>

        {/* Palette Swatches and Actions Footer */}
        <div className="mt-4 pt-3 border-t border-[#F0EFEA] flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5">
            {project.palette.slice(0, 3).map((c, i) => (
              <span
                key={i}
                className="w-2.5 h-2.5 rounded-full border border-black/10 inline-block"
                style={{ backgroundColor: c.hex }}
                title={`${c.name}: ${c.hex}`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-[11px] font-mono-tabular text-[#128C7E] hover:text-[#075E54] flex items-center gap-1 font-medium"
            >
              <WhatsAppIcon className="w-3 h-3 fill-current" />
              <span>WhatsApp</span>
            </a>
            <span className="text-[#D0CEC6]">·</span>
            <span className="text-[11px] text-[#85837A] font-sans-clean font-medium group-hover:translate-x-0.5 transition-transform">
              Inspect
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};
