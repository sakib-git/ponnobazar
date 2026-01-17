"use client"
import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How long does the delivery take?",
      answer: "We offer super-fast delivery! Typically, your groceries will reach your doorstep within 30 to 60 minutes depending on your location."
    },
    {
      question: "Is there a minimum order amount?",
      answer: "No, there is no minimum order amount. However, we offer free delivery for all orders above $50!"
    },
    {
      question: "What if the products are not fresh?",
      answer: "Quality is our priority. If you receive anything that isn't fresh, you can return it instantly to our delivery person or contact our support for a full refund."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept Cash on Delivery (COD), Credit/Debit Cards, and popular mobile banking options like bKash or Nagad."
    },
    {
      question: "Can I schedule a delivery for later?",
      answer: "Yes! During checkout, you can choose a specific time slot that is convenient for you."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 mt-3 text-lg">
            Quick answers to some of our most common questions
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-2xl transition-all duration-300 ${
                openIndex === index ? 'border-orange-500 shadow-md' : 'border-gray-200'
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
              >
                <span className={`text-lg font-semibold ${
                  openIndex === index ? 'text-orange-600' : 'text-gray-800'
                }`}>
                  {faq.question}
                </span>
                
                {/* Arrow Icon */}
                <span className={`transform transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180 text-orange-600' : 'text-gray-400'
                }`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>

              {/* Answer with Smooth Transition */}
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-5 pt-0 text-gray-600 leading-relaxed border-t border-gray-100 mt-2">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions? */}
        <div className="mt-12 text-center p-8 bg-orange-50 rounded-3xl">
          <h4 className="text-xl font-bold text-gray-800 mb-2">Still have questions?</h4>
          <p className="text-gray-600 mb-6">We're here to help you 24/7!</p>
          <button className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition shadow-lg">
            Contact Support
          </button>
        </div>

      </div>
    </section>
  );
};

export default FAQ;