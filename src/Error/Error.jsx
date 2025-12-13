import React from 'react';
import { FaHome, FaMapMarkedAlt, FaPhone, FaCompass, FaExclamationTriangle } from 'react-icons/fa';
import { MdTravelExplore } from 'react-icons/md';

const Error = () => {
    const quickLinks = [
        {
            icon: FaHome,
            title: 'হোম পেজ',
            description: 'মূল পাতায় ফিরে যান',
            link: '/',
            color: '#00A4BB'
        },
        {
            icon: FaMapMarkedAlt,
            title: 'গন্তব্যস্থল',
            description: 'জনপ্রিয় গন্তব্য দেখুন',
            link: '/destinations',
            color: '#00A4BB'
        },
        {
            icon: MdTravelExplore,
            title: 'গ্যালারি',
            description: 'ভ্রমণের ছবি দেখুন',
            link: '/gallery',
            color: '#00A4BB'
        },
        {
            icon: FaPhone,
            title: 'যোগাযোগ',
            description: 'আমাদের সাথে যোগাযোগ করুন',
            link: '/contact',
            color: '#00A4BB'
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
            <div className="max-w-4xl w-full">
                {/* Main Error Content */}
                <div className="text-center mb-12">
                    {/* Animated 404 */}
                    <div className="relative mb-8">
                        <h1 className="text-9xl md:text-[12rem] font-bold text-gray-200 select-none">
                            404
                        </h1>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <FaExclamationTriangle 
                                className="text-6xl md:text-8xl animate-bounce" 
                                style={{ color: '#00A4BB' }}
                            />
                        </div>
                    </div>

                    {/* Error Message */}
                    <div className="mb-8">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            পেজটি খুঁজে পাওয়া যায়নি!
                        </h2>
                        <p className="text-xl text-gray-600 mb-2">
                            দুঃখিত! আপনি যে পেজটি খুঁজছেন সেটি পাওয়া যায়নি।
                        </p>
                        <p className="text-lg text-gray-500">
                            হতে পারে পেজটি সরিয়ে ফেলা হয়েছে, বা আপনি ভুল URL লিখেছেন।
                        </p>
                    </div>

                    {/* Compass Illustration */}
                    <div className="mb-8">
                        <FaCompass 
                            className="text-6xl mx-auto animate-spin-slow" 
                            style={{ color: '#00A4BB', animationDuration: '8s' }}
                        />
                        <p className="text-gray-500 mt-4 font-medium">
                            চিন্তা করবেন না, আমরা আপনাকে সঠিক পথ দেখাবো!
                        </p>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="mb-12">
                    <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">
                        আপনি যেতে পারেন...
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {quickLinks.map((link, index) => {
                            const Icon = link.icon;
                            return (
                                <a
                                    key={index}
                                    href={link.link}
                                    className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
                                >
                                    <div className="flex items-start gap-4">
                                        <div 
                                            className="p-4 rounded-lg group-hover:scale-110 transition-transform duration-300"
                                            style={{ backgroundColor: '#e6f7f9' }}
                                        >
                                            <Icon size={28} style={{ color: link.color }} />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-cyan-600 transition-colors">
                                                {link.title}
                                            </h4>
                                            <p className="text-gray-600 text-sm">
                                                {link.description}
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            );
                        })}
                    </div>
                </div>

                {/* Back to Home Button */}
                <div className="text-center">
                    <a
                        href="/"
                        className="inline-flex items-center gap-3 text-white px-8 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-opacity shadow-lg"
                        style={{ backgroundColor: '#00A4BB' }}
                    >
                        <FaHome size={24} />
                        হোম পেজে ফিরে যান
                    </a>
                </div>

                {/* Support Message */}
                <div className="mt-12 text-center">
                    <div className="bg-white p-6 rounded-xl shadow-md inline-block">
                        <p className="text-gray-700 mb-2">
                            এখনও সমস্যা হচ্ছে? আমাদের সাথে যোগাযোগ করুন
                        </p>
                        <div className="flex items-center justify-center gap-6 text-sm">
                            <a 
                                href="tel:+8801712345678" 
                                className="flex items-center gap-2 hover:opacity-80 transition-opacity font-semibold"
                                style={{ color: '#00A4BB' }}
                            >
                                <FaPhone size={16} />
                                +৮৮০ ১৭১২-৩৪৫৬৭৮
                            </a>
                            <span className="text-gray-300">|</span>
                            <a 
                                href="mailto:support@triphaven.com" 
                                className="hover:opacity-80 transition-opacity font-semibold"
                                style={{ color: '#00A4BB' }}
                            >
                                support@triphaven.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating Elements */}
            <div className="fixed top-20 left-10 opacity-20 animate-float hidden lg:block">
                <MdTravelExplore size={80} style={{ color: '#00A4BB' }} />
            </div>
            <div className="fixed bottom-20 right-10 opacity-20 animate-float-delayed hidden lg:block">
                <FaMapMarkedAlt size={60} style={{ color: '#00A4BB' }} />
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }
                @keyframes float-delayed {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-15px); }
                }
                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
                .animate-float-delayed {
                    animation: float-delayed 4s ease-in-out infinite;
                }
                .animate-spin-slow {
                    animation: spin 8s linear infinite;
                }
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    );
};

export default Error;