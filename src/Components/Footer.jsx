import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { MdOutlineTravelExplore } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <MdOutlineTravelExplore className="text-4xl text-[#00A4BB]" />
              <h3 className="text-2xl font-bold">Trip Haven</h3>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              বাংলাদেশের সেরা ট্রাভেল এজেন্সি। আমরা আপনার স্বপ্নের ভ্রমণকে বাস্তবে পরিণত করি।
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-[#00A4BB] rounded-full flex items-center justify-center transition-all duration-300">
                <FaFacebookF className="text-lg" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-[#00A4BB] rounded-full flex items-center justify-center transition-all duration-300">
                <FaTwitter className="text-lg" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-[#00A4BB] rounded-full flex items-center justify-center transition-all duration-300">
                <FaInstagram className="text-lg" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-[#00A4BB] rounded-full flex items-center justify-center transition-all duration-300">
                <FaYoutube className="text-lg" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#00A4BB]">দ্রুত লিংক</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-[#00A4BB] transition-colors duration-300">হোম</a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-[#00A4BB] transition-colors duration-300">আমাদের সম্পর্কে</a>
              </li>
              <li>
                <a href="/packages" className="text-gray-400 hover:text-[#00A4BB] transition-colors duration-300">ট্যুর প্যাকেজ</a>
              </li>
              <li>
                <a href="/gallery" className="text-gray-400 hover:text-[#00A4BB] transition-colors duration-300">গ্যালারি</a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-[#00A4BB] transition-colors duration-300">যোগাযোগ</a>
              </li>
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#00A4BB]">জনপ্রিয় গন্তব্য</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-[#00A4BB] transition-colors duration-300">কক্সবাজার</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#00A4BB] transition-colors duration-300">সুন্দরবন</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#00A4BB] transition-colors duration-300">সিলেট</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#00A4BB] transition-colors duration-300">বান্দরবান</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#00A4BB] transition-colors duration-300">সেন্ট মার্টিন</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#00A4BB]">যোগাযোগ করুন</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-[#00A4BB] mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  ১২৩/এ, মতিঝিল সি/এ<br />
                  ঢাকা-১০০০, বাংলাদেশ
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-[#00A4BB] flex-shrink-0" />
                <span className="text-gray-400 text-sm">+৮৮০ ১৭১২-৩৪৫৬৭৮</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-[#00A4BB] flex-shrink-0" />
                <span className="text-gray-400 text-sm">info@triphaven.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Trip Haven. সর্বস্বত্ব সংরক্ষিত।
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-[#00A4BB] transition-colors duration-300">
                প্রাইভেসি পলিসি
              </a>
              <a href="#" className="text-gray-400 hover:text-[#00A4BB] transition-colors duration-300">
                শর্তাবলী
              </a>
              <a href="#" className="text-gray-400 hover:text-[#00A4BB] transition-colors duration-300">
                রিফান্ড পলিসি
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;