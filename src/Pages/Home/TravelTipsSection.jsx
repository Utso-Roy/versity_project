import React, { useState } from 'react';
import { FaPassport, FaUmbrellaBeach, FaFirstAid, FaCamera, FaMoneyBillWave, FaMapMarkedAlt } from 'react-icons/fa';
import { MdOutlineTravelExplore, MdLuggage } from 'react-icons/md';
import { IoAirplaneSharp } from 'react-icons/io5';

const TravelTipsSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tips = [
    {
      icon: <FaPassport />,
      title: "ডকুমেন্ট প্রস্তুতি",
      description: "ভ্রমণের আগে পাসপোর্ট, ভিসা এবং সকল প্রয়োজনীয় কাগজপত্র যাচাই করুন।",
      details: [
        "পাসপোর্টের মেয়াদ কমপক্ষে ৬ মাস থাকা জরুরি",
        "ভিসা আবেদন সময়মতো করুন",
        "সকল ডকুমেন্টের ফটোকপি রাখুন",
        "ডিজিটাল কপি ক্লাউডে সংরক্ষণ করুন"
      ]
    },
    {
      icon: <MdLuggage />,
      title: "স্মার্ট প্যাকিং",
      description: "প্রয়োজনীয় জিনিস নিয়ে হালকা ব্যাগ প্যাক করুন এবং অপ্রয়োজনীয় জিনিস এড়িয়ে চলুন।",
      details: [
        "আবহাওয়া অনুযায়ী পোশাক নির্বাচন করুন",
        "ওষুধপত্র এবং ফার্স্ট এইড কিট রাখুন",
        "চার্জার এবং পাওয়ার ব্যাংক নিতে ভুলবেন না",
        "হালকা এবং আরামদায়ক জুতা নিন"
      ]
    },
    {
      icon: <FaMoneyBillWave />,
      title: "বাজেট পরিকল্পনা",
      description: "ভ্রমণের খরচ আগে থেকে হিসাব করুন এবং জরুরি খরচের জন্য অতিরিক্ত টাকা রাখুন।",
      details: [
        "দৈনিক খরচের একটি বাজেট তৈরি করুন",
        "স্থানীয় মুদ্রায় কিছু নগদ টাকা রাখুন",
        "ক্রেডিট/ডেবিট কার্ড সাথে রাখুন",
        "ভ্রমণ বীমা নিন"
      ]
    },
    {
      icon: <FaFirstAid />,
      title: "স্বাস্থ্য সতর্কতা",
      description: "ভ্রমণের সময় স্বাস্থ্যবিধি মেনে চলুন এবং প্রয়োজনীয় ওষুধ সাথে রাখুন।",
      details: [
        "প্রয়োজনীয় টিকা নিয়ে নিন",
        "পানিবাহিত রোগ থেকে সাবধান থাকুন",
        "নিয়মিত হাত ধোয়ার অভ্যাস করুন",
        "জরুরি নম্বর সংরক্ষণ করুন"
      ]
    },
    {
      icon: <FaCamera />,
      title: "স্মৃতি সংরক্ষণ",
      description: "সুন্দর মুহূর্তগুলো ক্যামেরায় ধরে রাখুন এবং নিরাপদে সংরক্ষণ করুন।",
      details: [
        "ক্যামেরা বা ফোনের ব্যাটারি ফুল চার্জ রাখুন",
        "মেমরি কার্ডে পর্যাপ্ত স্পেস রাখুন",
        "ক্লাউড ব্যাকআপ চালু রাখুন",
        "গুরুত্বপূর্ণ স্থানে ছবি তুলুন"
      ]
    },
    {
      icon: <FaMapMarkedAlt />,
      title: "স্থানীয় সংস্কৃতি",
      description: "স্থানীয় সংস্কৃতি এবং রীতিনীতি সম্মান করুন এবং মানিয়ে নিতে চেষ্টা করুন।",
      details: [
        "স্থানীয় ভাষার কিছু শব্দ শিখুন",
        "পোশাক পরিচ্ছদ সংস্কৃতি অনুযায়ী হওয়া উচিত",
        "স্থানীয় খাবার চেষ্টা করুন",
        "ধর্মীয় স্থানে শিষ্টাচার মেনে চলুন"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white py-20 px-4 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-10 right-10 opacity-5">
        <IoAirplaneSharp className="text-[#00A4BB] text-9xl rotate-12" />
      </div>
      <div className="absolute bottom-10 left-10 opacity-5">
        <MdOutlineTravelExplore className="text-[#00A4BB] text-9xl" />
      </div>

      <div className="w-full relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-[#00A4BB] text-sm font-semibold tracking-wider uppercase bg-[#00A4BB]/10 px-4 py-2 rounded-full inline-flex items-center gap-2">
              <FaUmbrellaBeach className="text-lg" />
              ভ্রমণ টিপস
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            সফল ভ্রমণের জন্য
            <span className="text-[#00A4BB]"> গুরুত্বপূর্ণ টিপস</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            আপনার ভ্রমণকে আরও সহজ, নিরাপদ এবং উপভোগ্য করতে আমাদের বিশেষজ্ঞদের পরামর্শ অনুসরণ করুন
          </p>
        </div>

        {/* Tips Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="group bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-[#00A4BB] transition-all duration-300 hover:shadow-xl cursor-pointer"
              onMouseEnter={() => setActiveTab(index)}
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-[#00A4BB]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#00A4BB] transition-all duration-300">
                <div className="text-3xl text-[#00A4BB] group-hover:text-white transition-colors duration-300">
                  {tip.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#00A4BB] transition-colors duration-300">
                {tip.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {tip.description}
              </p>

              {/* Details List */}
              <ul className="space-y-2">
                {tip.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-700 text-sm">
                    <span className="text-[#00A4BB] mt-1 flex-shrink-0">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>

              {/* Hover Arrow */}
              <div className="mt-4 flex items-center gap-2 text-[#00A4BB] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-sm font-semibold">আরও জানুন</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8 md:p-12 border-2 border-gray-200">
          <div className="text-center max-w-3xl mx-auto">
            <div className="w-20 h-20 bg-[#00A4BB] rounded-full flex items-center justify-center mx-auto mb-6">
              <MdOutlineTravelExplore className="text-4xl text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              আপনার স্বপ্নের ভ্রমণ শুরু করুন
            </h3>
            <p className="text-gray-600 mb-6 text-lg">
              আমাদের বিশেষজ্ঞ টিম আপনার ভ্রমণকে স্মরণীয় করে তুলতে সর্বদা প্রস্তুত
            </p>
            <button className="bg-[#00A4BB] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#008a9e] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              এখনই বুকিং করুন
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelTipsSection;