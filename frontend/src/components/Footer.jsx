import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const footerLinks = {
  Pages: ['About Us', 'Features', 'Product', 'Pricing'],
  Company: ['Careers', 'Guide', 'Startup Program'],
  Support: ['Help Center', 'Customer Support', 'API Docs', 'System Status'],
  Resources: ['FAQ', 'Blog', 'Privacy Policy', 'Terms of Service'],
};

const socialIcons = [
  { Icon: FaInstagram, label: 'Instagram' },
  { Icon: FaFacebookF, label: 'Facebook' },
  { Icon: FaLinkedinIn, label: 'LinkedIn' },
  { Icon: FaTwitter, label: 'Twitter' },
];

const Footer = () => {
  return (
    <footer className="pt-16 pb-8 px-6 bg-white border-t border-gray-200" id="footer">
      <div className="max-w-[1200px] mx-auto">
        {/* Top section: logo + links in one row */}
        <div className="flex gap-20 mb-14 flex-wrap">
          {/* Logo & Social */}
          <div className="shrink-0">
            <Link
              to="/"
              className="flex items-center gap-2.5 text-[1.2rem] font-bold text-black tracking-[-0.02em] no-underline mb-6 group"
            >
              <svg
                className="transition-transform duration-250 group-hover:scale-105"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="28" height="28" rx="8" fill="#0a0a0a" />
                <path
                  d="M12 16C12 16 10 18 8 18C5.79086 18 4 16.2091 4 14C4 11.7909 5.79086 10 8 10C10 10 12 12 12 12"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 12C16 12 18 10 20 10C22.2091 10 24 11.7909 24 14C24 16.2091 22.2091 18 20 18C18 18 16 16 16 16"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 14H18"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>LinkLy</span>
            </Link>

            <div className="flex items-center gap-3">
              {socialIcons.map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 transition-all duration-200 hover:bg-black hover:text-white hover:border-black"
                  aria-label={label}
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns — all 4 in a single row */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading} className="min-w-[130px]">
              <h4 className="text-sm font-bold text-black mb-4">{heading}</h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      to="#"
                      className="text-[13px] text-gray-500 no-underline transition-colors duration-200 hover:text-black"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-gray-100 text-center">
          <p className="text-[13px] text-gray-400">
            ©2024. LinkLy Ltd. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
