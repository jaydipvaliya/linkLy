import { HiStar } from 'react-icons/hi';

const testimonials = [
  {
    stars: 4,
    text: 'This CRM has transformed how we interact with our customers. The marketing automation and customer segmentation tools are incredibly powerful.',
    name: 'Tyra Dhillon',
    role: 'Software Tester',
  },
  {
    stars: 4,
    text: 'I was looking for a CRM that was easy to use and could adapt to my business. This CRM has exceeded my expectations in every way.',
    name: 'Courtney Henry',
    role: 'UI/UX Designer',
  },
  {
    stars: 4,
    text: 'The sales pipeline and automation tools have been a massive time-saver. We can now manage leads and deals effortlessly.',
    name: 'Marvin Stone',
    role: 'Marketing Lead',
  },
  {
    stars: 4,
    text: 'The ability to segment customers and personalize our marketing campaigns has led to a significant increase in conversions and revenue.',
    name: 'Floyd Miles',
    role: 'Business Development Manager',
  },
  {
    stars: 4,
    text: 'Our customer support has become more organized and efficient with this CRM. The ticketing system and knowledge base are top-notch.',
    name: 'Lauralee Quintero',
    role: 'Team Leader',
  },
  {
    stars: 5,
    text: 'The collaboration features in this CRM have greatly improved how our teams work together. Sharing information across departments is seamless.',
    name: 'Kylea Danford',
    role: 'Product Manager',
  },
  {
    stars: 4,
    text: 'Amazed how we streamlined our operations. The customer management tools have made everything so much easier.',
    name: 'Sarah Johnson',
    role: 'Operations Director',
  },
  {
    stars: 5,
    text: 'Since implementing this CRM, our sales have increased by 30% in just three months. It\'s become an integral part of our daily workflow.',
    name: 'Marx Hershey',
    role: 'Project Manager',
  },
  {
    stars: 5,
    text: 'The sales pipeline and automation tools have been a massive time-saver. We can now manage leads and deals efficiently.',
    name: 'Marvin McKinney',
    role: 'Team Leader',
  },
];

const StarRating = ({ count }) => (
  <div className="flex items-center gap-0.5 mb-3">
    {[...Array(5)].map((_, i) => (
      <HiStar
        key={i}
        className={`text-base ${i < count ? 'text-black' : 'text-gray-200'}`}
      />
    ))}
  </div>
);

const Testimonials = () => {
  return (
    <section className="py-24 px-6 bg-white overflow-hidden" id="testimonials-section">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-[2.2rem] font-bold text-black leading-[1.15] tracking-[-0.02em] mb-3 md:text-[1.8rem]">
            Used by more than 10K+ Business
          </h2>
          <p className="text-[15px] text-gray-500 leading-relaxed">
            Hear what they say about LinkLy and why you should choose LinkLy
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-3 gap-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="rounded-xl border border-gray-200 bg-white p-6 flex flex-col justify-between transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
              id={`testimonial-${i}`}
            >
              <div>
                <StarRating count={t.stars} />
                <p className="text-[13px] text-gray-600 leading-relaxed mb-5 line-clamp-3">
                  {t.text}
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center text-[13px] font-bold text-gray-500 shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-black leading-tight">{t.name}</p>
                  <p className="text-[11px] text-gray-400 leading-tight">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
