import { useState, useRef } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const advantages = [
  {
    title: 'Effortless Data Management',
    description:
      'Simplify centralizing customer data for easy access, updates, and analysis, providing a comprehensive clientele overview.',
    image: '/advantage-data.png',
  },
  {
    title: 'Contact Management',
    description:
      'Easily organize and track all contacts in one place, with categorized and updated details for top-notch customer service.',
    image: '/advantage-contacts.png',
  },
  {
    title: 'Enhanced Customer Insight',
    description:
      'Enhance customer understanding with analytics, delving deeper into preferences and behavior patterns for personalized engagement.',
    image: '/advantage-insights.png',
  },
  {
    title: 'Sales Pipeline Tracking',
    description:
      'Visualize and manage your entire sales funnel from lead to close, with real-time updates and stage-by-stage progress tracking.',
    image: '/advantage-data.png',
  },
  {
    title: 'Automated Reporting',
    description:
      'Generate comprehensive reports automatically, saving time while gaining actionable insights to drive strategic decisions.',
    image: '/advantage-contacts.png',
  },
];

const Advantages = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  const scroll = (direction) => {
    const el = scrollRef.current;
    if (!el) return;
    const scrollAmount = 380;
    el.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
    setTimeout(checkScroll, 350);
  };

  return (
    <section
      className="py-24 px-6 bg-[#f8f9fb]"
      id="advantages-section"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-[2.5rem] font-bold text-black leading-[1.1] tracking-[-0.02em] mb-3 md:text-[2rem]">
              Advantage of LinkLy as Your
              <br />
              CRM Platform
            </h2>
            <p className="text-[15px] text-gray-500 leading-relaxed">
              Here are some reasons about why you should choose LinkLy as your CRM.
            </p>
          </div>

          {/* Navigation arrows */}
          <div className="flex items-center gap-2 shrink-0 ml-8">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-200 ${
                canScrollLeft
                  ? 'border-gray-300 text-gray-600 hover:bg-gray-100 hover:border-gray-400 cursor-pointer'
                  : 'border-gray-200 text-gray-300 cursor-not-allowed'
              }`}
              aria-label="Scroll left"
              id="advantage-scroll-left"
            >
              <HiChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-200 ${
                canScrollRight
                  ? 'border-gray-300 text-gray-600 hover:bg-gray-100 hover:border-gray-400 cursor-pointer'
                  : 'border-gray-200 text-gray-300 cursor-not-allowed'
              }`}
              aria-label="Scroll right"
              id="advantage-scroll-right"
            >
              <HiChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Scrollable cards */}
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          id="advantages-carousel"
        >
          {advantages.map((item, index) => (
            <div
              key={index}
              className="min-w-[340px] max-w-[340px] bg-white rounded-xl border border-gray-200 overflow-hidden shrink-0 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
              id={`advantage-card-${index}`}
            >
              {/* Card image */}
              <div className="p-4 pb-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[200px] object-cover object-top rounded-lg border border-gray-100"
                />
              </div>

              {/* Card content */}
              <div className="p-5 pt-4">
                <h4 className="text-base font-bold text-black mb-2">{item.title}</h4>
                <p className="text-[13px] text-gray-500 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
