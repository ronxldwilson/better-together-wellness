import React from 'react';

function ContactForm() {
    return (
        <div className="section-contact-us p-8 bg-gradient-to-r from-indigo-300 to-purple-400 rounded-lg shadow-xl">
            <div className="flex flex-col lg:flex-row">
                {/* Message Section */}
                <div className="flex-1 m-4 p-6 bg-white rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-103">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Have Questions? We’re an email away!</h2>
                    <p className="text-gray-600 mb-2">
                        Reach us at{' '}
                        <a href="mailto:query.bettertogether@gmail.com" className="text-blue-600 hover:underline">
                            query.bettertogether@gmail.com
                        </a>{' '}
                        for questions, queries, or collaborations.
                    </p>
                    <p className="text-gray-600">Or send us a message on our social media!</p>
                    
                    <div className="flex space-x-4 justify-center p-4  rounded-md ">
                        {/* YouTube */}
                        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-110">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-red-600">
                                <path d="M10 15V9l5 3-5 3zm12-8.3c0-1.6-1.3-2.8-2.9-2.8H4.9C3.3 4 2 5.2 2 6.7v10.6c0 1.6 1.3 2.8 2.9 2.8h14.1c1.6 0 2.9-1.3 2.9-2.8V6.7z"></path>
                            </svg>
                        </a>

                        {/* LinkedIn */}
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-110">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-blue-700">
                                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                            </svg>
                        </a>

                        {/* Instagram */}
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-110">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-pink-500">
                                <path d="M12 2.2c2.9 0 3.2 0 4.3.1 1.1.1 1.7.2 2.1.4.5.2.9.5 1.3.9.4.4.7.8.9 1.3.2.5.3 1 .4 2.1.1 1.1.1 1.4.1 4.3s0 3.2-.1 4.3c-.1 1.1-.2 1.7-.4 2.1-.2.5-.5.9-.9 1.3-.4.4-.8.7-1.3.9-.5.2-1 .3-2.1.4-1.1.1-1.4.1-4.3.1s-3.2 0-4.3-.1c-1.1-.1-1.7-.2-2.1-.4-.5-.2-.9-.5-1.3-.9-.4-.4-.7-.8-.9-1.3-.2-.5-.3-1-.4-2.1-.1-1.1-.1-1.4-.1-4.3s0-3.2.1-4.3c.1-1.1.2-1.7.4-2.1.2-.5.5-.9.9-1.3.4-.4.8-.7 1.3-.9.5-.2 1-.3 2.1-.4 1.1-.1 1.4-.1 4.3-.1z"></path>
                                <circle cx="12" cy="12" r="3.2"></circle>
                                <circle cx="17.5" cy="6.5" r="1.5"></circle>
                            </svg>
                        </a>

                        {/* Facebook */}
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-110">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-blue-600">
                                <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2v-3h2v-1.9c0-2 1.2-3.1 3-3.1.9 0 1.9.1 1.9.1v2.1h-1.1c-1 0-1.3.6-1.3 1.2v1.6h2.3l-.4 3h-1.9v7A10 10 0 0022 12z"></path>
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Iframe Section */}
                <div className="flex-1 m-4 p-4 flex justify-center">
                    <iframe
                        src="https://docs.google.com/forms/d/e/1FAIpQLSdJpvzpYXjgWVIlExDLQ8dZ__pMB0czHGuSIdl8cPRKQo1H-Q/viewform?embedded=true"
                        className="w-full h-[800px] md:h-[800px] lg:h-[800px] rounded-lg shadow-lg border border-gray-300"
                        loading="lazy"
                        title="Contact Form"
                    >
                        Loading…
                    </iframe>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;
