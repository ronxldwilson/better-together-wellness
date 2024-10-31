import React from 'react';

function ContactForm() {
    return (
        <div className="section-contact-us p-8 bg-gradient-to-r from-indigo-300 to-purple-400 rounded-lg shadow-xl">
            <div className="flex flex-col lg:flex-row">
                {/* Message Section */}
                <div className="flex-1 m-4 p-6 bg-white rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Have Questions? We’re an email away!</h2>
                    <p className="text-gray-600 mb-2">
                        Reach us at{' '}
                        <a href="mailto:query.bettertogether@gmail.com" className="text-blue-600 hover:underline">
                            query.bettertogether@gmail.com
                        </a>{' '}
                        for questions, queries, or collaborations.
                    </p>
                    <p className="text-gray-600">Or send us a message on our social media!</p>
                </div>

                {/* Iframe Section */}
                <div className="flex-1 m-4 p-4 flex justify-center">
                    <iframe
                        src="https://docs.google.com/forms/d/e/1FAIpQLSdJpvzpYXjgWVIlExDLQ8dZ__pMB0czHGuSIdl8cPRKQo1H-Q/viewform?embedded=true"
                        className="w-full h-[600px] md:h-[800px] lg:h-[600px] rounded-lg shadow-lg border border-gray-300"
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
