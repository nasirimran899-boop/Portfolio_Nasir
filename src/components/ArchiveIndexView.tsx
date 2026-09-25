import React from 'react';
import { Project } from '../data/projects';
import { ArrowUpRight } from 'lucide-react';

interface ArchiveIndexViewProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export const ArchiveIndexView: React.FC<ArchiveIndexViewProps> = ({
  projects,
  onSelectProject,
}) => {
  return (
    <div className="w-full bg-white rounded-2xl border border-[#E8E6DF] overflow-hidden shadow-xs">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-[#ECEAE3] bg-[#FAF9F5] text-[11px] font-mono-tabular uppercase tracking-wider text-[#7A7870]">
              <th className="py-3.5 px-6">Index / Year</th>
              <th className="py-3.5 px-6">Project Title & Scope</th>
              <th className="py-3.5 px-6">Discipline Column</th>
              <th className="py-3.5 px-6">Client & Region</th>
              <th className="py-3.5 px-6">Key Deliverables</th>
              <th className="py-3.5 px-6 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#F0EEE8] text-sm">
            {projects.map((p, index) => (
              <tr
                key={p.id}
                onClick={() => onSelectProject(p)}
                className="group cursor-pointer hover:bg-[#F9F8F4] transition-colors"
              >
                <td className="py-4 px-6 font-mono-tabular text-xs text-[#7B7972] whitespace-nowrap">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <span className="mx-2 text-[#C0BEB5]">/</span>
                  <span className="text-[#141413]">{p.year}</span>
                </td>
                <td className="py-4 px-6">
                  <div className="font-serif-display text-base md:text-lg text-[#141413] font-medium group-hover:text-[#8C5E35] transition-colors">
                    {p.title}
                  </div>
                  <div className="text-xs text-[#6B6962] line-clamp-1">{p.subtitle}</div>
                </td>
                <td className="py-4 px-6 whitespace-nowrap">
                  <span className="text-xs font-mono-tabular text-[#525049] uppercase tracking-wide">
                    {p.categoryLabel}
                  </span>
                </td>
                <td className="py-4 px-6 text-xs text-[#615F58] whitespace-nowrap">
                  {p.client}
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {p.deliverables.slice(0, 2).map((d, i) => (
                      <span
                        key={i}
                        className="text-[11px] text-[#696760] font-sans-clean bg-[#F1EFE8] px-2 py-0.5 rounded"
                      >
                        {d}
                      </span>
                    ))}
                    {p.deliverables.length > 2 && (
                      <span className="text-[10px] text-[#9A9890] font-mono-tabular">
                        +{p.deliverables.length - 2} more
                      </span>
                    )}
                  </div>
                </td>
                <td className="py-4 px-6 text-right whitespace-nowrap">
                  <div className="flex items-center justify-end gap-3">
                    <a
                      href={`https://wa.me/923247626975?text=${encodeURIComponent(`Hello M. Nasir, I am interested in ${p.title} (${p.categoryLabel}).`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-xs font-mono-tabular text-[#25D366] hover:underline"
                    >
                      WhatsApp
                    </a>
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-[#141413] group-hover:underline">
                      <span>Inspect</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
