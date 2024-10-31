import React from 'react';

const programData = [
    {
        title: 'Therapy',
        description: 'Therapy offers a safe space to explore your thoughts, heal, and grow—because you deserve to feel your best.',
        image: 'https://via.placeholder.com/150',
    },
    {
        title: 'Fitness',
        description: 'Embrace the power of movement to uplift your mental health—getting active can reduce stress, boost your mood, and leave you feeling more resilient every day!',
        image: 'https://via.placeholder.com/150',
    },
    {
        title: 'Nutrition',
        description: 'Nourish your mind and body with balanced nutrition—discover how the right foods can boost your mood.',
        image: 'https://via.placeholder.com/150',
    },
    {
        title: 'Psychiatric Care',
        description: 'Professional psychiatric care is a powerful tool for mental wellness—find balance and the right support when you need it.',
        image: 'https://via.placeholder.com/150',
    },
    {
        title: 'Community',
        description: 'Join our mental wellness community and connect with others on the journey to better well-being—let’s grow, support, and thrive together!',
        image: 'https://via.placeholder.com/150',
    }
];


const ProgramItem = ({ title, description, image }) => (
  <div className="bg-white w-full h-full flex flex-col rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 text-center">
      <img
          src={image}
          alt={title}
          className="w-24 h-24 rounded-full mx-auto mb-4"
      />
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600 flex-grow">{description}</p>
  </div>
);

const BrightAsYou = () => {
  return (
      <section className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-200 to-indigo-300 flex flex-col items-center justify-center p-8 text-gray-800 space-y-8">
          <div className="text-center max-w-2xl mb-10">
              <h1 className="text-4xl md:text-5xl font-bold text-indigo-900 mb-4">BRIGHT AS YOU PROGRAM</h1>
              <p className="text-md md:text-lg text-gray-700 leading-relaxed">
                  At Better Together, we don’t believe in short-term solutions, but sustainable ones. The Bright As You Program brings a holistic balance between the mental, emotional, and physical.
              </p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {programData.map((item, index) => (
                  <ProgramItem key={index} {...item} />
              ))}
          </div>

          <button className="bg-indigo-700 hover:bg-indigo-800 text-white font-semibold py-3 px-6 mt-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
              KNOW MORE
          </button>
      </section>
  );
};

export default BrightAsYou;