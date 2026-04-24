import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section
      className="relative py-24 px-6 bg-black overflow-hidden"
      id="cta-section"
    >
      {/* Grid background pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      {/* Perspective lines */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background:
            'radial-gradient(ellipse at 50% 100%, rgba(255,255,255,0.15) 0%, transparent 60%)',
        }}
      />

      <div className="relative max-w-[700px] mx-auto text-center">
        <h2 className="text-[2.8rem] font-bold text-white leading-[1.1] tracking-[-0.02em] mb-5 md:text-[2rem]">
          Take Your Business to the Next Level
        </h2>
        <p className="text-[15px] text-gray-400 leading-relaxed mb-10">
          Dive into the advantages of our CRM platform and witness the impact on your business.
        </p>

        <div className="flex items-center justify-center gap-6">
          <Link
            to="/signup"
            className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold rounded-lg bg-white text-black no-underline transition-all duration-200 hover:bg-gray-100 hover:-translate-y-0.5 hover:shadow-lg"
            id="cta-get-started"
          >
            Get Started
          </Link>
          <Link
            to="#"
            className="inline-flex items-center justify-center text-sm font-semibold text-white no-underline underline underline-offset-4 decoration-gray-500 transition-all duration-200 hover:decoration-white"
            id="cta-request-demo"
          >
            Request a Demo
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
