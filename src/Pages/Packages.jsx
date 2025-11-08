import React, { useState } from 'react';
import { FaMapMarkerAlt, FaClock, FaStar, FaUsers, FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router';

const Packages = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const packages = [
        {
            id: 1,
            title: "কক্সবাজার সি-বিচ ট্যুর",
            location: "কক্সবাজার, চট্টগ্রাম",
            duration: "৫ দিন / ৪ রাত",
            price: 18000,
            rating: 4.8,
            reviews: 312,
            image: "https://i.ibb.co.com/d0F3RKNM/coxbazar.jpg",
            category: "beach",
            features: ["৩-স্টার হোটেল", "সী-ভিউ রুম", "ব্রেকফাস্ট", "ইনানী বিচ ট্যুর"]
        },
        {
            id: 2,
            title: "সেন্ট মার্টিন আইল্যান্ড গেটওয়ে",
            location: "সেন্ট মার্টিন, টেকনাফ",
            duration: "৪ দিন / ৩ রাত",
            price: 22000,
            rating: 4.9,
            reviews: 268,
            image: "https://i.ibb.co.com/FbGgWzGC/saint-martin.jpg",
            category: "beach",
            features: ["লাক্সারি রিসোর্ট", "সীফুড ডিনার", "স্পিডবোট ট্রান্সফার", "ব্লু লেগুন ভ্রমণ"]
        },
        {
            id: 3,
            title: "সিলেট চা-বাগান ট্যুর",
            location: "সিলেট, বাংলাদেশ",
            duration: "৩ দিন / ২ রাত",
            price: 14000,
            rating: 4.7,
            reviews: 187,
            image: "https://i.ibb.co.com/DDQBpVrd/syllhet.jpg",
            category: "hill",
            features: ["গাইডেড ট্যুর", "মালনিচেরা চা বাগান", "জাফলং ভ্রমণ", "টোকিও পয়েন্ট"]
        },
        {
            id: 4,
            title: "বান্দরবান অ্যাডভেঞ্চার ট্যুর",
            location: "বান্দরবান, চট্টগ্রাম",
            duration: "৪ দিন / ৩ রাত",
            price: 17000,
            rating: 4.9,
            reviews: 203,
            image: "https://i.ibb.co.com/HpRM3Lkk/bandarban.jpg",
            category: "mountain",
            features: ["নীলগিরি হিল", "চিম্বুক পাহাড়", "শৈল প্রপাত", "গাইডেড হাইকিং"]
        },
        {
            id: 5,
            title: "সুন্দরবন জঙ্গল ক্রুজ",
            location: "খুলনা, বাংলাদেশ",
            duration: "৩ দিন / ২ রাত",
            price: 19500,
            rating: 4.8,
            reviews: 254,
            image: "https://i.ibb.co.com/d0pDP1L7/sundorban.jpg",
            category: "forest",
            features: ["বোট হাউজ", "টাইগার পয়েন্ট ভ্রমণ", "ফুলারটন দ্বীপ", "খাবারসহ প্যাকেজ"]
        },
        {
            id: 6,
            title: "ঢাকা হেরিটেজ সিটি ট্যুর",
            location: "ঢাকা, বাংলাদেশ",
            duration: "২ দিন / ১ রাত",
            price: 8500,
            rating: 4.6,
            reviews: 175,
            image: "https://i.ibb.co.com/CKb9Cm1Q/dhaka.jpg",
            category: "city",
            features: ["লালবাগ কেল্লা", "আহসান মঞ্জিল", "সদরঘাট ক্রুজ", "ঢাকাই খাবার টেস্টিং"]
        }
    ];

    const categories = [
        { id: 'all', name: 'সকল প্যাকেজ' },
        { id: 'beach', name: 'সমুদ্র সৈকত' },
        { id: 'mountain', name: 'পাহাড়' },
        { id: 'hill', name: 'চা-বাগান' },
        { id: 'forest', name: 'জঙ্গল/সুন্দরবন' },
        { id: 'city', name: 'শহর' }
    ];

    const filteredPackages = selectedCategory === 'all' 
        ? packages 
        : packages.filter(pkg => pkg.category === selectedCategory);

    return (
        <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-teal-50">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-[#007c94] to-[#005a6d] text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl font-bold mb-4">বাংলাদেশের ভ্রমণ প্যাকেজ</h1>
                    <p className="text-xl text-cyan-100 max-w-2xl mx-auto">
                        বাংলাদেশের সবচেয়ে সুন্দর গন্তব্যে ভ্রমণ করুন আমাদের বাছাইকৃত প্যাকেজের সাথে
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map(category => (
                        <button
                            key={category.id}
                            onClick={() => setSelectedCategory(category.id)}
                            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                                selectedCategory === category.id
                                    ? 'bg-[#007c94] cursor-pointer text-white shadow-lg transform scale-105'
                                    : 'bg-white text-gray-700 cursor-pointer hover:bg-gray-100 shadow-md'
                            }`}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>

                {/* Packages Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPackages.map(pkg => (
                        <div
                            key={pkg.id}
                            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                        >
                            {/* Image */}
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={pkg.image}
                                    alt={pkg.title}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                />
                                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-lg">
                                    <span className="text-yellow-500 font-bold flex items-center gap-1">
                                        <FaStar className="w-4 h-4" />
                                        {pkg.rating}
                                    </span>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                                    <h3 className="text-white text-2xl font-bold">{pkg.title}</h3>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-4 text-gray-600">
                                    <div className="flex items-center gap-2">
                                        <FaMapMarkerAlt className="w-4 h-4 text-[#007c94]" />
                                        <span className="text-sm">{pkg.location}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FaClock className="w-4 h-4 text-[#007c94]" />
                                        <span className="text-sm">{pkg.duration}</span>
                                    </div>
                                </div>

                                <div className="mb-4 grid grid-cols-2 gap-2">
                                    {pkg.features.map((feature, index) => (
                                        <div key={index} className="flex items-center gap-1 text-sm text-gray-600">
                                            <FaCheckCircle className="w-4 h-4 text-green-500" />
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex items-center gap-2 mb-4 text-gray-500 text-sm">
                                    <FaUsers className="w-4 h-4" />
                                    <span>{pkg.reviews} রিভিউ</span>
                                </div>

                                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                    <div>
                                        <p className="text-gray-500 text-sm">শুরু হচ্ছে</p>
                                        <p className="text-3xl font-bold text-[#007c94]">
                                            ৳{pkg.price.toLocaleString('bn-BD')}
                                        </p>
                                    </div>
                                    <button className="bg-[#007c94] cursor-pointer text-white px-6 py-3 rounded-full font-semibold hover:bg-[#005a6d] hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                                        বুক করুন
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredPackages.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-2xl text-gray-500">এই ক্যাটাগরিতে কোনো প্যাকেজ পাওয়া যায়নি</p>
                    </div>
                )}

                <div className="mt-20 bg-gradient-to-r from-[#007c94] to-[#005a6d] rounded-3xl p-12 text-center text-white">
                    <h2 className="text-4xl font-bold mb-4">পছন্দমতো প্যাকেজ খুঁজে পাচ্ছেন না?</h2>
                    <p className="text-xl mb-8 text-cyan-100">
                        আপনার জন্য আমরা কাস্টম ভ্রমণ প্যাকেজ তৈরি করতে পারি!
                    </p>
                    <Link to='/contact'>
                    
                    
                    <button className="bg-white cursor-pointer text-[#007c94] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl">
                        কাস্টম প্যাকেজের জন্য যোগাযোগ করুন
                    </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Packages;
