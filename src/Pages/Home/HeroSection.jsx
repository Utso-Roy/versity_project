import React from "react";
import CountUp from "react-countup";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200/20 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200/20 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>

      {/* Main Container */}
      <div className="relative w-full px-5 lg:px-6 py-12 sm:py-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 max-w-7xl mx-auto">
        {/* Left Column */}
        <div className="lg:w-1/2 flex flex-col justify-center space-y-8 lg:space-y-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 shadow-sm w-fit">
            <div className="w-2 h-2 bg-[#00A4BB] rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700">
              বাংলাদেশের লুকানো সৌন্দর্য আবিষ্কার করুন
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl font-bold text-gray-700 leading-tight">
            আবিষ্কার করুন{" "}
                      <span className="text-[#00A4BB]">
                      সৌন্দর্য
                      </span> 
{" "}
            বাংলাদেশে
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-lg sm:text-xl md:text-xl max-w-2xl leading-relaxed">
            অসাধারণ প্রাকৃতিক দৃশ্য, সমৃদ্ধ সংস্কৃতি, এবং স্মরণীয় অভিজ্ঞতার
            সঙ্গে নিজেকে নিমজ্জিত করুন। বাংলাদেশের লুকানো রত্নের মধ্য দিয়ে
            আপনার যাত্রা এখান থেকে শুরু।
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 sm:gap-5">
            <button className="group relative px-8 sm:px-10 py-3.5 bg-[#00A4BB] text-white rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden">
              <div className="absolute inset-0 bg-[#00A4BB] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative flex items-center gap-2">
                ট্যুর বুক করুন
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
            </button>
            <button className="group px-8 sm:px-10 py-3.5 bg-white/80 backdrop-blur-sm border border-gray-300 text-gray-800 rounded-xl font-semibold hover:bg-white hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2">
              গল্প দেখুন
              <svg
                className="w-4 h-4 group-hover:scale-110 transition-transform"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>

          {/* Stats Cards */}
          <div className="flex flex-wrap gap-6 pt-4 ">
            <div className="flex-1 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200 flex flex-col items-center transition-transform hover:scale-105 duration-300">
              <div className="text-3xl sm:text-4xl font-bold text-gray-900">
                <CountUp end={500} duration={2} separator="," />+
              </div>
              <div className="text-gray-600 text-sm mt-2 text-center">
                সম্পন্ন ট্যুর
              </div>
            </div>
            <div className="flex-1 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200 flex flex-col items-center transition-transform hover:scale-105 duration-300">
              <div className="text-3xl sm:text-4xl font-bold text-gray-900">
                <CountUp end={98} duration={2} suffix="%" />
              </div>
              <div className="text-gray-600 text-sm mt-2 text-center">
                সন্তুষ্ট ভ্রমণকারী
              </div>
            </div>
            <div className="flex-1 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200 flex flex-col items-center transition-transform hover:scale-105 duration-300">
              <div className="text-3xl sm:text-4xl font-bold text-gray-900">
                <CountUp end={50} duration={2} />+
              </div>
              <div className="text-gray-600 text-sm mt-2 text-center">
                গন্তব্য
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:w-2/5 w-full relative">
          {/* Main Hero Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-3xl blur-xl opacity-70"></div>
            <img
              src="https://i.ibb.co/Kx0XWmvf/julien-gaud-MFsc-Wuh40-Kg-unsplash.jpg"
              alt="Beautiful landscape of Bangladesh"
              className="relative w-full h-[300px] sm:h-[400px] lg:h-[450px] xl:h-[500px] rounded-2xl shadow-2xl object-cover z-10"
            />

            {/* Floating card 1 */}
            <div className="absolute -top-6 -left-6 z-50 bg-white/70 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-gray-200 max-w-[180px] transform -rotate-6 hover:rotate-0 transition-transform duration-300">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    প্রফেশনাল গাইড
                  </div>
                  <div className="text-xs text-gray-600">স্থানীয় বিশেষজ্ঞ</div>
                </div>
              </div>
            </div>

            {/* Floating card 2 */}
            <div className="absolute -top-6 -right-6 bg-white/70 backdrop-blur-md z-50 rounded-2xl p-4 shadow-xl border border-gray-200 max-w-[180px] transform rotate-6 hover:rotate-0 transition-transform duration-300">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    নিরাপদ ভ্রমণ
                  </div>
                  <div className="text-xs text-gray-600">
                    আপনার নিরাপত্তা প্রথমে
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image Gallery Grid */}
          <div className="grid grid-cols-3 gap-4 mt-8">
            {[
              "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=400&q=80",
              "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&q=80",
              "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80",
            ].map((src, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <img
                  src={src}
                  alt={`Tour ${index + 1}`}
                  className="w-full h-20 sm:h-24 md:h-28 rounded-xl object-cover shadow-lg group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
