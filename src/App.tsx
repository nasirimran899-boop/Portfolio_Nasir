import React, { useState } from 'react';
import { PROJECTS, CATEGORIES, CategoryId, Project } from './data/projects';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { CategoryNavRail } from './components/CategoryNavRail';
import { CategoryColumnsView } from './components/CategoryColumnsView';
import { ArchiveIndexView } from './components/ArchiveIndexView';
import { ProjectCard } from './components/ProjectCard';
import { CardsSpotlight } from './components/CardsSpotlight';
import { PhilosophySection } from './components/PhilosophySection';
import { AboutSection } from './components/AboutSection';
import { ProjectModal } from './components/ProjectModal';
import { ContactDrawer } from './components/ContactDrawer';
import { Footer } from './components/Footer';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>('all');
  const [viewMode, setViewMode] = useState<'columns' | 'grid' | 'index'>('columns');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [inquiryTopic, setInquiryTopic] = useState('');

  const filteredProjects =
    activeCategory === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  const handleOpenInquiry = (topic?: string) => {
    setInquiryTopic(topic || '');
    setIsContactOpen(true);
  };

  const scrollToWorks = () => {
    const el = document.getElementById('works');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F8F7F4] text-[#141413] flex flex-col font-sans-clean antialiased selection:bg-[#141413] selection:text-[#FAF9F5]">
      {/* 3-Zone Navigation Header */}
      <Navigation onOpenInquiry={() => handleOpenInquiry('General Branding Inquiry')} />

      {/* Hero Section */}
      <Hero
        onOpenInquiry={() => handleOpenInquiry('New Project Commission')}
        onExploreWorks={scrollToWorks}
      />

      {/* Main Works Section */}
      <main id="works" className="flex-grow">
        {/* Category & Layout Switcher Rail */}
        <div id="categories" className="sticky top-18 z-30">
          <CategoryNavRail
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
            viewMode={viewMode}
            onChangeViewMode={setViewMode}
            totalProjects={filteredProjects.length}
          />
        </div>

        {/* Selected Category Summary if filtered */}
        {activeCategory !== 'all' && viewMode !== 'columns' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
            <div className="p-4 bg-[#EDEAE3] rounded-xl border border-[#DFDCD2] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-[10px] font-mono-tabular uppercase tracking-wider text-[#7B7971]">
                  Current Focus Filter
                </span>
                <h3 className="font-serif-display text-xl text-[#141413] font-medium">
                  {CATEGORIES.find((c) => c.id === activeCategory)?.label}
                </h3>
                <p className="text-xs text-[#5D5B53] mt-0.5 max-w-xl">
                  {CATEGORIES.find((c) => c.id === activeCategory)?.description}
                </p>
              </div>
              <button
                onClick={() => setActiveCategory('all')}
                className="self-start sm:self-auto text-xs font-mono-tabular text-[#141413] underline hover:opacity-70 transition-opacity cursor-pointer whitespace-nowrap"
              >
                Reset to All Works
              </button>
            </div>
          </div>
        )}

        {/* Portfolio Content Based on View Mode */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
          {viewMode === 'columns' ? (
            /* Dedicated Multi-Column Layout (User's specific requirement for separate columns for logos, cards, etc.) */
            <CategoryColumnsView
              projects={filteredProjects}
              onSelectProject={setSelectedProject}
            />
          ) : viewMode === 'grid' ? (
            /* Curated Bento Grid Mode */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onSelect={setSelectedProject}
                />
              ))}
            </div>
          ) : (
            /* Archive Index Table Mode */
            <ArchiveIndexView
              projects={filteredProjects}
              onSelectProject={setSelectedProject}
            />
          )}
        </div>

        {/* Dedicated Tactile Cards Spotlight & 3D Interactive Simulator */}
        <CardsSpotlight onOpenInquiry={handleOpenInquiry} />

        {/* Design Philosophy Section */}
        <PhilosophySection />

        {/* About M. Nasir Section */}
        <AboutSection onOpenInquiry={() => handleOpenInquiry('Art Direction Inquiry')} />
      </main>

      {/* Footer */}
      <Footer onOpenInquiry={() => handleOpenInquiry('Footer Inquiry')} />

      {/* Deep Case Study Modal / Lightbox */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenInquiry={handleOpenInquiry}
      />

      {/* Contact & Commission Drawer */}
      <ContactDrawer
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        initialTopic={inquiryTopic}
      />

      {/* Floating Direct WhatsApp Action Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <a
          href="https://wa.me/923247626975?text=Hello%20M.%20Nasir%2C%20I%20am%20interested%20in%20your%20graphic%20design%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-4 py-3 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full shadow-[0_8px_24px_rgba(37,211,102,0.35)] transition-all hover:scale-105 active:scale-95"
          title="Direct WhatsApp: 0324-7626975"
        >
          <span className="w-5 h-5 flex items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="currentColor"
              className="fill-white"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </span>
          <div className="flex flex-col text-left">
            <span className="text-[10px] uppercase tracking-wider font-semibold opacity-90 leading-tight">
              Chat on WhatsApp
            </span>
            <span className="text-xs font-mono-tabular font-bold leading-tight">
              0324-7626975
            </span>
          </div>
        </a>
      </div>
    </div>
  );
}
