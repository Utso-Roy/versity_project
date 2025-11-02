import React, { useState } from 'react';
import { FaEnvelope, FaPaperPlane, FaCheckCircle, FaGift } from 'react-icons/fa';
import { MdOutlineTravelExplore, MdDiscount } from 'react-icons/md';
import { IoAirplaneSharp, IoNotifications } from 'react-icons/io5';
import { BiSolidOffer } from 'react-icons/bi';

const NewsletterSubscribeSection = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 3000);
    }
  };

  const benefits = [
    {
      icon: <BiSolidOffer />,
      title: "বিশেষ অফার",
      description: "এক্সক্লুসিভ ডিসকাউন্ট পান"
    },
    {
      icon: <IoNotifications />,
      title: "আপডেট নোটিফিকেশন",
      description: "নতুন প্যাকেজের খবর পান"
    },
    {
      icon: <FaGift />,
      title: "ফ্রি গিফট",
      description: "বিশেষ উপহার পাওয়ার সুযোগ"
    }
  ];

  return (
    <div className="bg-gray-50 py-20 px-4 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-10 right-20 opacity-5">
          <IoAirplaneSharp className="text-[#00A4BB] text-8xl rotate-45" />
        </div>
        <div className="absolute bottom-10 left-20 opacity-5">
          <MdOutlineTravelExplore className="text-[#00A4BB] text-8xl" />
        </div>
        <div className="absolute top-1/2 left-10 opacity-5">
          <FaEnvelope className="text-[#00A4BB] text-7xl" />
        </div>
      </div>

      <div className="w-full  relative z-10">
        {/* Main Content Card */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-gray-200">
          <div className="grid md:grid-cols-2 gap-0">
            
            {/* Left Side - Info */}
            <div className="bg-[#00A4BB] p-8 md:p-12 text-white relative">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                  <FaEnvelope className="text-3xl text-white" />
                </div>

                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  নিউজলেটার সাবস্ক্রাইব করুন
                </h2>

                {/* Description */}
                <p className="text-white/90 mb-8 text-lg leading-relaxed">
                  আমাদের নিউজলেটার সাবস্ক্রাইব করে পান সর্বশেষ ট্রাভেল অফার, ডিসকাউন্ট এবং গন্তব্য সম্পর্কিত তথ্য।
                </p>

                {/* Benefits */}
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <div className="text-2xl text-white">
                          {benefit.icon}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">{benefit.title}</h4>
                        <p className="text-white/80 text-sm">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="mt-8 pt-8 border-t border-white/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-3xl font-bold">৫০০০+</div>
                      <div className="text-white/80 text-sm">সাবস্ক্রাইবার</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold">২০%</div>
                      <div className="text-white/80 text-sm">ডিসকাউন্ট পর্যন্ত</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="p-8 md:p-12 bg-white">
              <div className="h-full flex flex-col justify-center">
                
                {/* Form Header */}
                <div className="mb-8">
                  <div className="inline-block mb-4">
                    <span className="text-[#00A4BB] text-sm font-semibold tracking-wider uppercase bg-[#00A4BB]/10 px-4 py-2 rounded-full inline-flex items-center gap-2">
                      <MdDiscount className="text-lg" />
                      বিশেষ অফার
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    এখনই সাবস্ক্রাইব করুন
                  </h3>
                  <p className="text-gray-600">
                    আপনার ইমেইল দিয়ে সাবস্ক্রাইব করুন এবং পান ২০% পর্যন্ত ডিসকাউন্ট
                  </p>
                </div>

                {/* Subscription Form */}
                {!subscribed ? (
                  <div className="space-y-4">
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                        <FaEnvelope className="text-lg" />
                      </div>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="আপনার ইমেইল এড্রেস"
                        className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-[#00A4BB] focus:outline-none transition-colors duration-300 text-gray-800"
                      />
                    </div>

                    <button
                      onClick={handleSubmit}
                      className="w-full bg-[#00A4BB] text-white py-4 rounded-xl font-semibold hover:bg-[#008a9e] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
                    >
                      <span>সাবস্ক্রাইব করুন</span>
                      <FaPaperPlane className="text-lg group-hover:translate-x-1 transition-transform duration-300" />
                    </button>

                    <p className="text-xs text-gray-500 text-center">
                      সাবস্ক্রাইব করে আপনি আমাদের{' '}
                      <a href="#" className="text-[#00A4BB] hover:underline">
                        প্রাইভেসি পলিসি
                      </a>{' '}
                      এবং{' '}
                      <a href="#" className="text-[#00A4BB] hover:underline">
                        শর্তাবলী
                      </a>{' '}
                      মেনে নিচ্ছেন
                    </p>
                  </div>
                ) : (
                  <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaCheckCircle className="text-3xl text-green-500" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">
                      সফলভাবে সাবস্ক্রাইব হয়েছে!
                    </h4>
                    <p className="text-gray-600">
                      ধন্যবাদ! আপনার ইমেইল চেক করুন।
                    </p>
                  </div>
                )}

                {/* Trust Badges */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <div className="flex items-center justify-center gap-6 text-gray-400 text-sm">
                    <div className="flex items-center gap-2">
                      <FaCheckCircle className="text-[#00A4BB]" />
                      <span>নিরাপদ</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCheckCircle className="text-[#00A4BB]" />
                      <span>স্প্যাম ফ্রি</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCheckCircle className="text-[#00A4BB]" />
                      <span>যেকোনো সময় আনসাবস্ক্রাইব</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-[#00A4BB] transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#00A4BB]/10 rounded-lg flex items-center justify-center">
                <MdDiscount className="text-2xl text-[#00A4BB]" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">সাপ্তাহিক অফার</h4>
                <p className="text-sm text-gray-600">নতুন প্যাকেজ আপডেট</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-[#00A4BB] transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#00A4BB]/10 rounded-lg flex items-center justify-center">
                <MdOutlineTravelExplore className="text-2xl text-[#00A4BB]" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">ট্রাভেল গাইড</h4>
                <p className="text-sm text-gray-600">বিশেষজ্ঞ পরামর্শ</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-[#00A4BB] transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#00A4BB]/10 rounded-lg flex items-center justify-center">
                <FaGift className="text-2xl text-[#00A4BB]" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">এক্সক্লুসিভ ডিল</h4>
                <p className="text-sm text-gray-600">শুধুমাত্র সাবস্ক্রাইবারদের জন্য</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSubscribeSection;