import { Link } from 'react-router-dom';

const features = [
  {
    title: 'Smart Contact Management & Organization',
    description:
      'Seamlessly organize, track, and access all customer information, interactions, and relationships in one user-friendly platform with LinkLy.',
    image: '/feature-contact.png',
    imageAlt: 'LinkLy Contact Management Dashboard',
    reverse: false,
  },
  {
    title: 'Seamless Email Integration & Tracking',
    description:
      'Simplify your workflow with seamless email integration. Send, track, schedule follow-ups and insightful interactions for business expansion.',
    image: '/feature-email.png',
    imageAlt: 'LinkLy Email Integration Dashboard',
    reverse: true,
  },
  {
    title: 'Enhanced Team Collaboration & Task Management',
    description:
      'Foster teamwork and seamless collaboration with LinkLy\'s CRM-integrated hub for task assignment, project tracking, and real-time updates.',
    image: '/feature-collab.png',
    imageAlt: 'LinkLy Team Collaboration Board',
    reverse: false,
  },
  {
    title: 'Data-Driven Insights & Sales Analytics',
    description:
      'Unlock your data\'s full potential. Track, measure, and extract valuable CRM insights to optimize your business strategies and drive revenue growth.',
    image: '/feature-analytics.png',
    imageAlt: 'LinkLy Analytics Dashboard',
    reverse: true,
  },
];

const Features = () => {
  return (
    <section className="py-24 px-6 bg-white" id="features-section">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-28">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex flex-col items-center gap-12 lg:gap-16 ${
              feature.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
            }`}
            id={`feature-${index}`}
          >
            {/* Image */}
            <div className="flex-1 w-full lg:max-w-[55%]">
              <img
                src={feature.image}
                alt={feature.imageAlt}
                className="w-full h-auto rounded-xl border border-gray-200 shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
              />
            </div>

            {/* Text */}
            <div className="flex-1 w-full lg:max-w-[45%]">
              <h3 className="text-[2.2rem] font-bold text-black leading-[1.15] tracking-[-0.02em] mb-5 md:text-[1.8rem]">
                {feature.title}
              </h3>
              <p className="text-[15px] text-gray-500 leading-relaxed mb-7 max-w-[420px]">
                {feature.description}
              </p>
              <Link
                to="#"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-lg border border-black text-black bg-white no-underline transition-all duration-200 hover:bg-black hover:text-white hover:-translate-y-0.5"
              >
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
