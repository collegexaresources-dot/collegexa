import React from 'react';
import { StarIcon } from './icons/StarIcon';

const testimonialsData = [
  {
    quote: "CollegeXcel helped me find a $10,000 scholarship and connect with a Stanford professor for my research project. Game changer!",
    name: "Aanya Patel",
    details: "Admitted to MIT '28",
  },
  {
    quote: "The project ideas gave me the inspiration I needed. I launched a nonprofit that's now in 5 schools. Thank you, CollegeXcel!",
    name: "Sally Carpenter",
    details: "Yale University '27",
  },
  {
    quote: "Found my passion through the EC database. The email templates helped me land an internship at NASA. Incredible resource!",
    name: "Joseph Chen",
    details: "UC Berkeley '29",
  },
];

interface TestimonialCardProps {
  quote: string;
  name: string;
  details: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, details }) => (
  <div className="bg-[#13111C]/60 backdrop-blur-md border border-purple-500/30 rounded-2xl p-8 flex flex-col h-full transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-2 shadow-[0_0_15px_rgba(139,92,246,0.1)] hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:border-purple-400/60 footer-brand-glow">
    <StarIcon className="w-6 h-6 text-yellow-400 mb-4 drop-shadow-[0_0_5px_rgba(250,204,21,0.8)]" />
    <blockquote className="text-purple-200/80 italic mb-6 flex-grow">"{quote}"</blockquote>
    <footer>
      <p className="font-bold text-white">{name}</p>
      <p className="text-sm text-purple-200/60">{details}</p>
    </footer>
  </div>
);


const Testimonials: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight drop-shadow-lg">
            Student{' '}
            <span className="bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(192,38,211,0.5)]">
              Success
            </span>{' '}
            Stories
          </h2>
          <p className="mt-4 text-base md:text-lg text-purple-200/70">
            Real students, real achievements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 max-w-7xl mx-auto">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              details={testimonial.details}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
