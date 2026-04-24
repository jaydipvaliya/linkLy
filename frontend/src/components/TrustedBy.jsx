import { SiCoinbase, SiDropbox, SiGoogle, SiSlack, SiSquare, SiZoom } from 'react-icons/si';

const TrustedBy = () => {
  return (
    <section className="py-20 px-6 border-t border-gray-100 bg-white" id="trusted-by-section">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
        
        {/* Left Side: Text */}
        <div className="max-w-[450px]">
          <h2 className="text-[2.5rem] leading-[1.1] font-bold text-black mb-4 tracking-[-0.02em] md:text-[2rem]">
            Trusted by Many<br />Established Companies
          </h2>
          <p className="text-[15px] text-gray-500 leading-relaxed">
            20+ Businesses and Companies uses LinkLy<br />for their CRM Platform
          </p>
        </div>

        {/* Right Side: Logos Grid */}
        <div className="flex-1 grid grid-cols-3 gap-x-12 gap-y-10 items-center justify-items-center sm:grid-cols-2 sm:gap-x-8 sm:gap-y-8">
          <div className="flex items-center gap-2 text-gray-400 hover:text-gray-600 transition-colors">
            <SiCoinbase className="text-3xl" />
            <span className="font-bold text-xl tracking-tight">coinbase</span>
          </div>
          
          <div className="flex items-center gap-2 text-gray-400 hover:text-gray-600 transition-colors">
            <SiDropbox className="text-3xl" />
            <span className="font-bold text-xl tracking-tight">Dropbox</span>
          </div>
          
          <div className="flex items-center gap-2 text-gray-400 hover:text-gray-600 transition-colors">
            <SiGoogle className="text-3xl" />
            <span className="font-semibold text-xl tracking-tight">Google</span>
          </div>
          
          <div className="flex items-center gap-2 text-gray-400 hover:text-gray-600 transition-colors">
            <SiSlack className="text-3xl" />
            <span className="font-bold text-xl tracking-tight">slack</span>
          </div>
          
          <div className="flex items-center gap-2 text-gray-400 hover:text-gray-600 transition-colors">
            <SiSquare className="text-3xl" />
            <span className="font-bold text-xl tracking-tight">Square</span>
          </div>
          
          <div className="flex items-center gap-2 text-gray-400 hover:text-gray-600 transition-colors">
            <SiZoom className="text-3xl" />
            <span className="font-bold text-2xl tracking-tighter">zoom</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TrustedBy;
