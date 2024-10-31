import React, { useState } from "react";

const faqs = [
  {
    question: "What is this application about?",
    answer: "This application helps users find answers to their questions.",
  },
  {
    question: "How can I create an account?",
    answer: "To create an account, click on the 'Sign Up' button and follow the instructions.",
  },
  {
    question: "Is there a mobile version available?",
    answer: "Yes, our application is mobile-friendly and can be used on any device.",
  },
];

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg shadow-md"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full p-4 text-left font-medium bg-gray-100 hover:bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {faq.question}
            </button>
            {openIndex === index && (
              <div className="p-4 bg-white text-gray-700">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQAccordion;
