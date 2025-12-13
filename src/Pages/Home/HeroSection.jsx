import React from "react";
import CountUp from "react-countup";
import { Link } from "react-router";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Container from "../../Container/Container";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-[#00A4BB]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>


      <Container>
        

         <div className="relative  px-4 sm:px-6 lg:px-8 py-20 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-[#00A4BB]/10 px-4 py-2 rounded-full border border-[#00A4BB]/20">
              <svg className="w-4 h-4 text-[#00A4BB]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium text-[#00A4BB]">
                বিশ্বস্ত ট্যুর প্ল্যাটফর্ম
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-gray-900">আবিষ্কার করুন</span>
                <br />
                <span className="text-[#00A4BB]">বাংলাদেশের</span>
                <br />
                <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
                  অপরূপ সৌন্দর্য
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-lg sm:text-xl leading-relaxed max-w-xl">
              প্রাকৃতিক সৌন্দর্য, ঐতিহ্যবাহী সংস্কৃতি এবং অবিস্মরণীয় অভিজ্ঞতার মাধ্যমে বাংলাদেশের লুকানো রত্নগুলি আবিষ্কার করুন।
            </p>

            {/* Features List */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", text: "সার্টিফাইড গাইড" },
                { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "ফ্লেক্সিবল বুকিং" },
                { icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z", text: "সেরা মূল্য গ্যারান্টি" },
                { icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z", text: "২৪/৭ সাপোর্ট" },
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-xl bg-white/60 border border-gray-100 hover:border-[#00A4BB]/30 hover:bg-white transition-all duration-300">
                  <div className="w-8 h-8 bg-[#00A4BB]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-[#00A4BB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-gray-700">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/tour">
                <button className="group px-8 py-4 bg-[#00A4BB] text-white rounded-xl font-semibold hover:bg-[#008fa3] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2">
                  <span className="text-lg">ট্যুর এক্সপ্লোর করুন</span>
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </Link>

              <Link to="/tourStory">
                <button className="group px-8 py-4 bg-white border-2 border-gray-200 text-gray-800 rounded-xl font-semibold hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 shadow-md flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#00A4BB]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  <span className="text-lg">ভ্রমণ গল্প</span>
                </button>
              </Link>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              {[
                { end: 500, label: "সফল ট্যুর", suffix: "+" },
                { end: 98, label: "সন্তুষ্টির হার", suffix: "%" },
                { end: 50, label: "গন্তব্যস্থল", suffix: "+" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-gray-900 mb-1">
                    <CountUp end={stat.end} duration={2.5} separator="," />
                    {stat.suffix}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image Section */}
          <div className="relative w-full">
            {/* Main Image with Modern Frame */}
            <div className="relative w-full">
              {/* Decorative Border */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#00A4BB]/20 to-purple-500/20 rounded-3xl blur-xl"></div>
              
              {/* Image Container */}
              <div className="relative bg-white p-3 rounded-2xl shadow-xl w-full">
                <div className="relative rounded-2xl overflow-hidden w-full aspect-[4/5]">
                  <LazyLoadImage
                    src="https://i.ibb.co/Kx0XWmvf/julien-gaud-MFsc-Wuh40-Kg-unsplash.jpg"
                    alt="Beautiful landscape of Bangladesh"
                    effect="blur"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay Info Bar */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6">
                    <div className="flex items-center justify-between text-white">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-semibold text-lg">কক্সবাজার</div>
                          <div className="text-sm text-white/80">বিশ্বের দীর্ঘতম সমুদ্র সৈকত</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-1 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-lg">
                        <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="font-semibold">4.9</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Gallery Grid */}
            <div className="grid grid-cols-3 gap-3 mt-6 w-full">
              {[
                { src: "https://i.ibb.co.com/d0pDP1L7/sundorban.jpg", label: "সুন্দরবন" },
                { src: "https://i.ibb.co.com/DDQBpVrd/syllhet.jpg", label: "সিলেট" },
                { src: "https://i.ibb.co.com/HpRM3Lkk/bandarban.jpg", label: "বান্দরবান" },
              ].map((item, index) => (
                <div key={index} className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer aspect-[4/3]">
                  <LazyLoadImage
                    src={item.src}
                    alt={item.label}
                    effect="blur"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-3">
                    <span className="text-white text-sm font-semibold">{item.label}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center gap-8 mt-8 pt-6 border-t border-gray-200">
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="text-sm font-semibold text-gray-900">2,547+ রিভিউ</div>
              </div>
              
              <div className="w-px h-10 bg-gray-200"></div>
              
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-semibold text-gray-900">ভেরিফাইড</span>
                </div>
                <div className="text-xs text-gray-600">লাইসেন্সড অপারেটর</div>
              </div>
            </div>
          </div>

        </div>
      </div>
     </Container>
     
    </div>
  );
};

export default HeroSection;