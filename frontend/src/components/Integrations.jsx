import { Link } from 'react-router-dom';
import {
  SiFacebook,
  SiSlack,
  SiGooglemeet,
  SiGmail,
  SiNotion,
  SiZendesk,
  SiIntercom,
  SiMailchimp,
  SiWordpress,
  SiAsana,
  SiDropbox,
  SiTrello,
  SiGithub,
} from 'react-icons/si';
import { HiShieldCheck } from 'react-icons/hi';

const appIcons = [
  { Icon: SiFacebook, color: '#1877F2' },
  { Icon: SiSlack, color: '#4A154B' },
  { Icon: SiGooglemeet, color: '#00897B' },
  { Icon: SiGmail, color: '#EA4335' },
  { Icon: SiNotion, color: '#000000' },
  { Icon: SiMailchimp, color: '#FFE01B' },
  { Icon: SiZendesk, color: '#03363D' },
  { Icon: SiIntercom, color: '#6AFDEF' },
  { Icon: SiAsana, color: '#F06A6A' },
  { Icon: SiWordpress, color: '#21759B' },
  { Icon: SiDropbox, color: '#0061FF' },
  { Icon: SiTrello, color: '#0052CC' },
  { Icon: SiGithub, color: '#181717' },
];

const certifications = [
  { label: 'Verified\nSecure', icon: '🛡️' },
  { label: 'CCPA\nREADY', icon: '🔒' },
  { label: 'GDPR\nREADY', icon: '🔐' },
  { label: 'ISO 9001', icon: '✅' },
];

const Integrations = () => {
  return (
    <section className="py-24 px-6 bg-white" id="integrations-section">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Integrated with 60+ Apps */}
        <div
          className="rounded-2xl border border-gray-200 bg-white p-8 flex flex-col"
          id="integrations-card"
        >
          <h3 className="text-[1.5rem] font-bold text-black mb-2 tracking-[-0.01em]">
            Integrated with 60+ Apps
          </h3>
          <p className="text-[14px] text-gray-500 leading-relaxed mb-5 max-w-[360px]">
            Embark on a transformative journey with LinkLy. Over 60 powerful tools to make your work
            more efficient and effective.
          </p>
          <Link
            to="#"
            className="inline-flex items-center justify-center self-start px-5 py-2.5 text-[13px] font-semibold rounded-lg border border-black text-black bg-white no-underline transition-all duration-200 hover:bg-black hover:text-white mb-6"
            id="integrations-cta"
          >
            View All App Integration
          </Link>

          {/* App icons grid */}
          <div className="flex flex-wrap gap-4 mt-auto">
            {appIcons.map(({ Icon, color }, i) => (
              <div
                key={i}
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-transform duration-200 hover:scale-110 hover:-translate-y-0.5"
              >
                <Icon size={22} style={{ color }} />
              </div>
            ))}
          </div>
        </div>

        {/* We're Aware with Security */}
        <div
          className="rounded-2xl border border-gray-200 bg-white p-8 flex flex-col"
          id="security-card"
        >
          <h3 className="text-[1.5rem] font-bold text-black mb-2 tracking-[-0.01em]">
            We're Aware with Security
          </h3>
          <p className="text-[14px] text-gray-500 leading-relaxed mb-5 max-w-[360px]">
            LinkLy is audited and certified by key industry leaders that have been leading in
            Security Third Party standards.
          </p>
          <Link
            to="#"
            className="inline-flex items-center justify-center self-start px-5 py-2.5 text-[13px] font-semibold rounded-lg bg-black text-white no-underline transition-all duration-200 hover:bg-gray-800 hover:-translate-y-0.5 mb-6"
            id="security-cta"
          >
            Discover More
          </Link>

          {/* Certification badges */}
          <div className="grid grid-cols-2 gap-4 mt-auto sm:grid-cols-4">
            {certifications.map((cert, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-2 p-4 rounded-xl border border-gray-100 bg-gray-50/50 transition-all duration-200 hover:border-gray-200 hover:bg-gray-50"
              >
                <HiShieldCheck className="text-2xl text-gray-700" />
                <span className="text-[11px] font-bold text-gray-700 text-center whitespace-pre-line leading-tight">
                  {cert.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
