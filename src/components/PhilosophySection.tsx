import React from 'react';

export const PhilosophySection: React.FC = () => {
  const principles = [
    {
      num: '01',
      title: 'Reductive Clarity',
      subtitle: 'Form stripped to its indelible core',
      text: 'True sophistication lives in what you choose to remove. By eliminating ornamental excess, each remaining line, typographic curve, and whitespace margin holds absolute authority.',
    },
    {
      num: '02',
      title: 'Mathematical Proportion',
      subtitle: 'Rooted in golden ratios & isometric grids',
      text: 'Every logomark and digital illustration begins on a structured geometric coordinate grid. This geometric rigor ensures flawless visual harmony whether viewed at 16 pixels or on architectural signage.',
    },
    {
      num: '03',
      title: 'Tactile Materiality',
      subtitle: 'Bridging digital vectors to physical weight',
      text: 'Design must transcend pixels. From custom die-cut business cards on unbleached cotton to museum-grade archival screenprints, Nasir prioritizes sensory haptic engagement and enduring craft.',
    },
  ];

  return (
    <section id="philosophy" className="py-20 md:py-28 bg-[#FAF9F5] border-b border-[#E8E6DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-[11px] font-mono-tabular uppercase tracking-widest text-[#7B7971]">
            Methodology &amp; Standards
          </span>
          <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl text-[#141413] mt-2 font-normal tracking-tight text-balance">
            The Three Tenets of M. Nasir’s Design Practice
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#5C5A52] font-sans-clean leading-relaxed">
            A disciplined philosophy honed across eight years of independent brand design and visual art direction.
          </p>
        </div>

        {/* 3 Editorial Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {principles.map((item) => (
            <div
              key={item.num}
              className="flex flex-col justify-between border-t border-[#141413] pt-6"
            >
              <div>
                <div className="text-xs font-mono-tabular tracking-widest text-[#828078] mb-4">
                  PRINCIPLE // {item.num}
                </div>
                <h3 className="font-serif-display text-2xl text-[#141413] font-medium tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs font-mono-tabular text-[#9E7B24] mt-1 mb-3">
                  {item.subtitle}
                </p>
                <p className="text-sm text-[#54524B] font-sans-clean leading-relaxed">
                  {item.text}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#ECEAE2] text-[11px] font-mono-tabular text-[#78766F]">
                STANDARD SPECIFICATION
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
