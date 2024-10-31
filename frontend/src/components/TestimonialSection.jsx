import React from 'react';

const testimonials = [
    {
        name: 'John Doe',
        text: 'This product changed my life! I have never been so satisfied with a purchase.',
    },
    {
        name: 'Jane Smith',
        text: 'Excellent service and amazing quality. Highly recommended!',
    },
    {
        name: 'Mike Johnson',
        text: 'A fantastic experience from start to finish. Five stars!',
    },
    {
        name: 'Emily Davis',
        text: 'Unparalleled support and incredible results. Will definitely come back!',
    },
];

const TestimonialCard = ({ testimonial }) => {
    return (
        <div className="w-72 h-36 bg-white text-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4 relative group overflow-hidden">
            {/* Default View */}
            <div className="flex items-center justify-center h-full font-semibold text-lg group-hover:hidden">
                {testimonial.name}
            </div>
            {/* Hover View */}
            <div className="absolute inset-0 bg-indigo-600 text-white flex items-center justify-center p-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {testimonial.text}
            </div>
        </div>
    );
};

const TestimonialSection = () => {
    return (
        <div className="p-10 bg-gradient-to-r from-purple-500 to-indigo-500 text-white">
            <h2 className="text-3xl font-bold text-center mb-6">What Our Clients Say</h2>
            <div className="flex flex-wrap justify-center gap-4">
                {testimonials.map((testimonial, index) => (
                    <TestimonialCard key={index} testimonial={testimonial} />
                ))}
            </div>
        </div>
    );
};

export default TestimonialSection;
