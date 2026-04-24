import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TrustedBy from '../components/TrustedBy';
import Features from '../components/Features';

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col" id="landing-page">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TrustedBy />
        <Features />
      </main>
    </div>
  );
};

export default LandingPage;
