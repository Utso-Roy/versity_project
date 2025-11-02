import React, { useState } from 'react';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { IoAirplaneSharp } from 'react-icons/io5';
import { FaMapLocationDot } from 'react-icons/fa6';
import CountUp from 'react-countup';

const CustomerTestimonials = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const testimonials = [
    {
      id: 1,
      name: "সারা আক্তার",
      role: "পরিবার ভ্রমণকারী",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      text: "এই ট্রাভেল এজেন্সির সাথে আমাদের কক্সবাজার ট্যুর ছিল অসাধারণ। তাদের পরিকল্পনা এবং সেবা মনোমুগ্ধকর ছিল। প্রতিটি মুহূর্ত ছিল স্মরণীয়।",
      rating: 5
    },
    {
      id: 2,
      name: "রাফি হোসেন",
      role: "একক ভ্রমণকারী",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      text: "সুন্দরবন ট্যুর প্যাকেজটি ছিল নিখুঁত। গাইড থেকে শুরু করে থাকার ব্যবস্থা সবকিছুই ছিল অত্যন্ত পেশাদার এবং আরামদায়ক।",
      rating: 5
    },
    {
      id: 3,
      name: "নাজমা বেগম",
      role: "হানিমুন ট্রাভেলার",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      text: "সিলেটের হানিমুন প্যাকেজ ছিল স্বপ্নের মতো। তাদের বিশেষ যত্ন এবং রোমান্টিক পরিকল্পনা আমাদের মুগ্ধ করেছে।",
      rating: 5
    },
    {
      id: 4,
      name: "কামরুল ইসলাম",
      role: "অ্যাডভেঞ্চার ট্রাভেলার",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      text: "বান্দরবানের পাহাড়ি ট্রেকিং ট্যুর ছিল অবিস্মরণীয়। তাদের নিরাপত্তা এবং সার্ভিস মান ছিল প্রশংসনীয়।",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4 overflow-hidden relative">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 opacity-5">
        <IoAirplaneSharp className="text-[#00A4BB] text-8xl rotate-45" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-5">
        <FaMapLocationDot className="text-[#00A4BB] text-8xl" />
      </div>

      <div className="w-full  relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-[#00A4BB] text-sm font-semibold tracking-wider uppercase bg-[#00A4BB]/10 px-4 py-2 rounded-full inline-flex items-center gap-2">
              <MdOutlineTravelExplore className="text-lg" />
              ভ্রমণকারীদের মতামত
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            আমাদের ভ্রমণকারীরা
            <span className="text-[#00A4BB]"> যা বলেন</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            হাজারো সন্তুষ্ট ভ্রমণকারীদের অভিজ্ঞতা। তাদের স্মৃতিকথা থেকে জানুন কেন আমরা বাংলাদেশের সেরা ট্রাভেল পার্টনার।
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`group relative transition-all duration-500 cursor-pointer ${
                activeIndex === index ? 'transform scale-105' : ''
              }`}
              onMouseEnter={() => setActiveIndex(index)}
            >
              {/* Content Container */}
              <div className="relative bg-white rounded-2xl p-6 h-full border-2 border-gray-200 hover:border-[#00A4BB] transition-all duration-300 shadow-md hover:shadow-xl">
                {/* Quote Icon */}
                <div className="absolute -top-3 -left-3 bg-[#00A4BB] rounded-xl p-2.5 shadow-lg">
                  <FaQuoteLeft className="w-4 h-4 text-white" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4 mt-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="w-4 h-4 text-[#00A4BB]" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 text-sm mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-200">
                  <div className="relative">
                    <div className="absolute -inset-0.5 bg-[#00A4BB] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="relative w-12 h-12 rounded-full object-cover border-2 border-white"
                    />
                  </div>
                  <div>
                    <h4 className="text-gray-800 font-semibold text-base">{testimonial.name}</h4>
                    <p className="text-[#00A4BB] text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {[
            { value: 500, suffix: "+", label: "সন্তুষ্ট ভ্রমণকারী" },
            { value: 98, suffix: "%", label: "সন্তুষ্টির হার" },
            { value: 50, suffix: "+", label: "ভ্রমণ গন্তব্য" },
            { value: 4.9, suffix: "/5", label: "গড় রেটিং", decimal: 1 }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gray-50 border-2 border-gray-200 rounded-xl p-6 hover:border-[#00A4BB] transition-all duration-300 hover:bg-white hover:shadow-lg">
                <div className="text-4xl font-bold text-[#00A4BB] mb-2">
                  <CountUp 
                    end={stat.value} 
                    duration={2.5}
                    decimals={stat.decimal || 0}
                    decimal="."
                  />
                  {stat.suffix}
                </div>
                <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerTestimonials;