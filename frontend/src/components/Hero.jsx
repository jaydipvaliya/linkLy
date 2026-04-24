import { Link } from 'react-router-dom';
import { HiOutlineGlobeAlt } from 'react-icons/hi';

const Hero = () => {
  return (
    <section
      className="relative pt-32 pb-20 px-6 overflow-hidden md:pt-24 md:pb-14"
      id="hero-section"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/60 to-white pointer-events-none" />

      <div className="relative max-w-[1200px] mx-auto flex flex-col items-center gap-10 lg:flex-row lg:gap-16">
        {/* Left Content */}
        <div className="flex-1 max-w-full text-center lg:max-w-[520px] lg:text-left">
          <h1
            className="text-[3.8rem] font-extrabold leading-[1.05] tracking-[-0.03em] text-black mb-5 opacity-0 animate-fade-in-up md:text-[2.6rem] sm:text-[2rem]"
            id="hero-heading"
          >
            Revolutionized
            <br />
            Customer
            <br />
            Relationship
          </h1>

          <p
            className="text-base text-gray-500 leading-relaxed mb-8 opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.15s' }}
            id="hero-subtitle"
          >
            Streamline Operations, Boost Efficiency, and Drive Growth
          </p>

          <div
            className="flex items-center gap-3 mb-10 opacity-0 animate-fade-in-up justify-center lg:justify-start"
            style={{ animationDelay: '0.3s' }}
            id="hero-actions"
          >
            <Link
              to="/signup"
              className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold rounded-lg bg-black text-white no-underline transition-all duration-200 hover:bg-gray-800 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0"
              id="hero-cta-primary"
            >
              Get Started
            </Link>
            <Link
              to="#features"
              className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold rounded-lg border border-gray-300 text-black bg-white no-underline transition-all duration-200 hover:border-gray-400 hover:bg-gray-50 hover:-translate-y-0.5 active:translate-y-0"
              id="hero-cta-secondary"
            >
              Learn More
            </Link>
          </div>

          <p
            className="flex items-center gap-2 text-sm text-gray-400 opacity-0 animate-fade-in-up justify-center lg:justify-start"
            style={{ animationDelay: '0.45s' }}
            id="hero-social-proof"
          >
            Used and helping over more{' '}
            <span className="font-bold text-black">200+ Companies</span>
            <HiOutlineGlobeAlt className="text-gray-400 text-base" />
          </p>
        </div>

        {/* Right — Dashboard Image */}
        <div
          className="flex-1 w-full max-w-full opacity-0 animate-fade-in-up lg:max-w-[600px]"
          style={{ animationDelay: '0.35s' }}
          id="hero-dashboard"
        >
          <img
            src="/crm-dashboard.png"
            alt="LinkLy CRM Dashboard"
            className="w-full h-auto rounded-xl border border-gray-200 shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
