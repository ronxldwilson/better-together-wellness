import React from 'react';
import '../App.css';  // Assuming this is where custom CSS will be added

const LandingSection = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-100 to-purple-200 flex flex-col items-center justify-center p-8 text-gray-800 font-sans">
            {/* Main Content */}
            <div className="max-w-3xl text-center bg-white/90 p-8 md:p-10 rounded-lg shadow-md transform transition-transform hover:scale-105 duration-500">
                <h1 className="text-4xl md:text-5xl font-bold text-indigo-800 mb-4 md:mb-6 font-poppins">
                    Holistic Mental Wellness For Everyone
                </h1>
                <p className="text-md md:text-lg text-gray-600 mb-6 leading-relaxed font-montserrat">
                    We are your trusted destination for mental health. Our tailored wellness programs, expert guidance, and supportive community help you thrive.
                </p>
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    Contact Us
                </button>
            </div>
        </div>
    );
};

export default LandingSection;
