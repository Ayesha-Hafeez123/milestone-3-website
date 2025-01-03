import React from 'react';

interface Testimonial {
  id: number;
  name: string;
  text: string;
  designation: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "John Doe",
    text: "This is the best service I have ever used. Highly recommend!",
    designation: "Software Engineer",
  },
  {
    id: 2,
    name: "Jane Smith",
    text: "Amazing experience! The team is incredibly professional and helpful.",
    designation: "Product Manager",
  },
  {
    id: 3,
    name: "Alice Johnson",
    text: "I love their products. Excellent quality and fast delivery!",
    designation: "Entrepreneur",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-14 px-6">
      <h2 className="text-4xl font-extrabold text-center text-blue-800 mb-10">
        What Our Customers Say
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white shadow-lg p-8 rounded-lg transition-transform transform hover:scale-105"
          >
            <p className="italic text-gray-700 text-lg mb-6">
              {testimonial.text}
            </p>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                {testimonial.name[0]}
              </div>
              <h3 className="text-xl font-semibold text-gray-800">{testimonial.name}</h3>
              <p className="text-sm text-gray-500">{testimonial.designation}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;