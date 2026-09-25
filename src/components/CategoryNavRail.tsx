import React from 'react';
import { CategoryId, CATEGORIES, getWhatsAppUrl, WHATSAPP_NUMBER } from '../data/projects';
import { WhatsAppIcon } from './WhatsAppIcon';
import {
  LayoutGrid,
  Columns,
  ListFilter,
  Compass,
  CreditCard,
  Mail,
  Share2,
  Tv,
  Sparkles,
  FileText,
  Flag,
  Layout,
} from 'lucide-react';

interface CategoryNavRailProps {
  activeCategory: CategoryId;
  onSelectCategory: (id: CategoryId) => void;
  viewMode: 'columns' | 'grid' | 'index';
  onChangeViewMode: (mode: 'columns' | 'grid' | 'index') => void;
  totalProjects: number;
}

export const CategoryNavRail: React.FC<CategoryNavRailProps> = ({
  activeCategory,
  onSelectCategory,
  viewMode,
  onChangeViewMode,
  totalProjects,
}) => {
  const getCategoryIcon = (id: CategoryId) => {
    switch (id) {
      case 'logos':
        return Compass;
      case 'business-cards':
        return CreditCard;
      case 'invitation-cards':
        return Mail;
      case 'social-media-posts':
        return Share2;
      case 'thumbnail':
        return Tv;
      case 'branding-posts':
        return Sparkles;
      case 'posters':
        return FileText;
      case 'banner':
        return Flag;
      case 'facebook-banner':
        return Layout;
      default:
        return LayoutGrid;
    }
  };

  const activeCategoryObj = CATEGORIES.find((c) => c.id === activeCategory);
  const currentWhatsAppLink = getWhatsAppUrl(
    activeCategory === 'all' ? 'All Graphic Design Categories' : activeCategoryObj?.label
  );

  return (
    <div className="w-full bg-[#FAF9F6] border-y border-[#E8E6DF] py-3 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-3">
        {/* Top Row: Category Tabs */}
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1.5 scrollbar-none max-w-full">
            {CATEGORIES.map((cat) => {
              const Icon = getCategoryIcon(cat.id);
              const isActive = activeCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => onSelectCategory(cat.id)}
                  className={`whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#141413] text-[#F8F7F4] shadow-xs'
                      : 'text-[#615F57] hover:text-[#141413] hover:bg-[#EFECE5]'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#FAF9F6]' : 'text-[#85837A]'}`} />
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] font-mono-tabular px-1.5 py-0.2 rounded ${
                      isActive ? 'bg-[#292927] text-[#D8D6CE]' : 'bg-[#EAE7DF] text-[#7A786F]'
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Direct WhatsApp Drop Trigger for Selected Category */}
          <a
            href={currentWhatsAppLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-1.5 bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs font-semibold rounded-lg shadow-xs transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer shrink-0"
            title="Chat directly on WhatsApp"
          >
            <WhatsAppIcon className="w-3.5 h-3.5 fill-white" />
            <span>Drop on WhatsApp ({activeCategoryObj?.label || 'General'})</span>
          </a>
        </div>

        {/* Bottom Row: View mode toggles */}
        <div className="flex items-center justify-between pt-2 border-t border-[#ECEAE2] text-xs">
          <div className="text-[11px] font-mono-tabular text-[#7A7870] flex items-center gap-2">
            <span>SHOWING: {totalProjects} DESIGNS</span>
            <span aria-hidden="true">·</span>
            <span>WHATSAPP: {WHATSAPP_NUMBER}</span>
          </div>

          <div className="flex items-center p-0.5 bg-[#ECEAE3] rounded-lg border border-[#E0DED6]">
            <button
              onClick={() => onChangeViewMode('columns')}
              title="Separate Category Columns Layout (Logos, Cards, etc.)"
              className={`px-3 py-1 text-xs font-medium rounded-md flex items-center gap-1.5 transition-colors cursor-pointer ${
                viewMode === 'columns'
                  ? 'bg-white text-[#141413] shadow-xs font-semibold'
                  : 'text-[#615F58] hover:text-[#141413]'
              }`}
            >
              <Columns className="w-3.5 h-3.5" />
              <span>Category Columns</span>
            </button>

            <button
              onClick={() => onChangeViewMode('grid')}
              title="Curated Grid Layout"
              className={`px-3 py-1 text-xs font-medium rounded-md flex items-center gap-1.5 transition-colors cursor-pointer ${
                viewMode === 'grid'
                  ? 'bg-white text-[#141413] shadow-xs font-semibold'
                  : 'text-[#615F58] hover:text-[#141413]'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Grid</span>
            </button>

            <button
              onClick={() => onChangeViewMode('index')}
              title="Index Table Layout"
              className={`px-3 py-1 text-xs font-medium rounded-md flex items-center gap-1.5 transition-colors cursor-pointer ${
                viewMode === 'index'
                  ? 'bg-white text-[#141413] shadow-xs font-semibold'
                  : 'text-[#615F58] hover:text-[#141413]'
              }`}
            >
              <ListFilter className="w-3.5 h-3.5" />
              <span>Index</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
