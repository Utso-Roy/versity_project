import React, { useState } from 'react';
import { FaSearch, FaMapMarkerAlt, FaStar, FaUsers, FaCalendarAlt, FaChartLine, FaUmbrellaBeach, FaMountain, FaTree, FaWater, FaHiking, FaCompass } from 'react-icons/fa';
import { MdTravelExplore } from 'react-icons/md';
import ratar from '../assets/ratar.jpg'
const Destination = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');

    const destinations = [
        {
            id: 1,
            name: 'কক্সবাজার',
            location: 'বাংলাদেশ',
            image: 'https://i.ibb.co.com/d0F3RKNM/coxbazar.jpg',
            rating: 4.8,
            reviews: 1520,
            category: 'beach',
            price: '১২০ টাকা থেকে',
            description: 'বিশ্বের দীর্ঘতম প্রাকৃতিক সমুদ্র সৈকত এবং অসাধারণ সূর্যাস্তের দৃশ্য'
        },
        {
            id: 2,
            name: 'সুন্দরবন',
            location: 'বাংলাদেশ',
            image: 'https://i.ibb.co.com/d0pDP1L7/sundorban.jpg',
            rating: 4.7,
            reviews: 890,
            category: 'nature',
            price: '২০০ টাকা থেকে',
            description: 'ইউনেস্কো ওয়ার্ল্ড হেরিটেজ সাইট এবং বিশ্বের বৃহত্তম ম্যানগ্রোভ বন'
        },
        {
            id: 3,
            name: 'সাজেক ভ্যালি',
            location: 'রাঙামাটি, বাংলাদেশ',
            image: 'https://i.ibb.co.com/PZWRmyZd/sajek-vellay.jpg',
            rating: 4.9,
            reviews: 2100,
            category: 'mountain',
            price: '১৫০ টাকা থেকে',
            description: 'পাহাড়ের রানী, মেঘ ছোঁয়া অসাধারণ দৃশ্য সহ'
        },
        {
            id: 4,
            name: 'সেন্টমার্টিন দ্বীপ',
            location: 'বাংলাদেশ',
            image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
            rating: 4.6,
            reviews: 1350,
            category: 'beach',
            price: '১৮০ টাকা থেকে',
            description: 'বাংলাদেশের একমাত্র প্রবাল দ্বীপ এবং স্বচ্ছ নীল জলরাশি'
        },
        {
            id: 5,
            name: 'শ্রীমঙ্গল',
            location: 'সিলেট, বাংলাদেশ',
            image: 'https://i.ibb.co.com/DDQBpVrd/syllhet.jpg',
            rating: 4.7,
            reviews: 980,
            category: 'nature',
            price: '১০০ টাকা থেকে',
            description: 'চা রাজধানী, সবুজ বাগান এবং রেইনফরেস্ট সহ'
        },
        {
            id: 6,
            name: 'বান্দরবান',
            location: 'বাংলাদেশ',
            image: 'https://i.ibb.co.com/HpRM3Lkk/bandarban.jpg',
            rating: 4.8,
            reviews: 1680,
            category: 'mountain',
            price: '১৪০ টাকা থেকে',
            description: 'পাহাড়ি জেলা যেখানে রয়েছে ঝর্ণা, হ্রদ এবং উপজাতীয় সংস্কৃতি'
        },
        {
            id: 7,
            name: 'কুয়াকাটা সমুদ্র সৈকত',
            location: 'পটুয়াখালী, বাংলাদেশ',
            image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
            rating: 4.5,
            reviews: 765,
            category: 'beach',
            price: '১১০ টাকা থেকে',
            description: 'অনন্য সৈকত যেখানে সূর্যোদয় এবং সূর্যাস্ত উভয়ই দেখা যায়'
        },
        {
            id: 8,
            name: 'রাতারগুল সোয়াম্প ফরেস্ট',
            location: 'সিলেট, বাংলাদেশ',
            image: 'https://i.ibb.co.com/1YLjmhv5/ratar.jpg',
            rating: 4.6,
            reviews: 620,
            category: 'nature',
            price: '৯০ টাকা থেকে',
            description: 'মিঠা পানির জলাবন এবং মনোমুগ্ধকর নৌকা ভ্রমণ'
        },
        {
            id: 9,
            name: 'নীলগিরি পাহাড়',
            location: 'বান্দরবান, বাংলাদেশ',
            image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
            rating: 4.7,
            reviews: 1240,
            category: 'mountain',
            price: '১৬০ টাকা থেকে',
            description: 'সড়ক পথে যাওয়া যায় এমন সর্বোচ্চ চূড়া এবং প্যানোরামিক দৃশ্য'
        }
    ];

    const categories = [
        { id: 'all', name: 'সব গন্তব্য', icon: FaCompass },
        { id: 'beach', name: 'সমুদ্র সৈকত', icon: FaUmbrellaBeach },
        { id: 'mountain', name: 'পাহাড়', icon: FaMountain },
        { id: 'nature', name: 'প্রকৃতি', icon: FaTree }
    ];

    const filteredDestinations = destinations.filter(dest => {
        const matchesSearch = dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            dest.location.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || dest.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="relative h-96 bg-gradient-to-r from-cyan-600 to-cyan-700 overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
                    <MdTravelExplore className="text-white text-6xl mb-4" />
                    <h1 className="text-5xl font-bold text-white mb-4">গন্তব্যস্থল অন্বেষণ করুন</h1>
                    <p className="text-xl text-white mb-8 max-w-2xl">
                        বাংলাদেশের অসাধারণ সব জায়গা আবিষ্কার করুন এবং অবিস্মরণীয় স্মৃতি তৈরি করুন
                    </p>
                    
                    {/* Search Bar */}
                    <div className="w-full max-w-2xl">
                        <div className="relative">
                            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="text"
                                placeholder="গন্তব্য খুঁজুন..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-4 rounded-full border-2 border-white text-white shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                style={{ borderColor: '#00A4BB' }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Category Filter */}
            <div className="bg-white shadow-sm sticky top-0 z-20">
                <div className="max-w-7xl mx-auto px-4 py-4">
                    <div className="flex gap-4 overflow-x-auto">
                        {categories.map(category => {
                            const Icon = category.icon;
                            return (
                                <button
                                    key={category.id}
                                    onClick={() => setSelectedCategory(category.id)}
                                    className={`flex items-center gap-2 px-6 py-2 rounded-full whitespace-nowrap transition-all ${
                                        selectedCategory === category.id
                                            ? 'text-white shadow-md'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                                    style={selectedCategory === category.id ? { backgroundColor: '#00A4BB' } : {}}
                                >
                                    <Icon size={18} />
                                    <span className="font-medium">{category.name}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
                        <FaMapMarkerAlt className="mx-auto mb-3" size={32} style={{ color: '#00A4BB' }} />
                        <h3 className="text-3xl font-bold text-gray-900 mb-1">১০০+</h3>
                        <p className="text-gray-600">গন্তব্যস্থল</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
                        <FaUsers className="mx-auto mb-3" size={32} style={{ color: '#00A4BB' }} />
                        <h3 className="text-3xl font-bold text-gray-900 mb-1">৫০,০০০+</h3>
                        <p className="text-gray-600">সন্তুষ্ট ভ্রমণকারী</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
                        <FaChartLine className="mx-auto mb-3" size={32} style={{ color: '#00A4BB' }} />
                        <h3 className="text-3xl font-bold text-gray-900 mb-1">৪.৮/৫</h3>
                        <p className="text-gray-600">গড় রেটিং</p>
                    </div>
                </div>

                {/* Destinations Grid */}
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                    {selectedCategory === 'all' ? 'সব গন্তব্যস্থল' : `${categories.find(c => c.id === selectedCategory)?.name}`}
                </h2>
                
                {filteredDestinations.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredDestinations.map(destination => (
                            <div key={destination.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                <div className="relative h-64 overflow-hidden">
                                    <img 
                                        src={destination.image} 
                                        alt={destination.name}
                                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                                    />
                                    <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold" style={{ color: '#00A4BB' }}>
                                        {destination.price}
                                    </div>
                                    <div className="absolute top-4 left-4">
                                        {destination.category === 'beach' && <FaUmbrellaBeach className="text-white text-2xl" />}
                                        {destination.category === 'mountain' && <FaMountain className="text-white text-2xl" />}
                                        {destination.category === 'nature' && <FaTree className="text-white text-2xl" />}
                                    </div>
                                </div>
                                
                                <div className="p-6">
                                    <div className="flex items-center gap-2 text-gray-600 mb-2">
                                        <FaMapMarkerAlt size={16} />
                                        <span className="text-sm">{destination.location}</span>
                                    </div>
                                    
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{destination.name}</h3>
                                    
                                    <p className="text-gray-600 mb-4 text-sm">{destination.description}</p>
                                    
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <FaStar size={18} fill="#FFC107" color="#FFC107" />
                                            <span className="font-semibold text-gray-900">{destination.rating}</span>
                                            <span className="text-gray-500 text-sm">({destination.reviews} রিভিউ)</span>
                                        </div>
                                    </div>
                                    
                                    <button 
                                        className="w-full mt-4 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                                        style={{ backgroundColor: '#00A4BB' }}
                                    >
                                        <FaHiking size={18} />
                                        বিস্তারিত দেখুন
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <FaMapMarkerAlt size={64} className="mx-auto mb-4 text-gray-300" />
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">কোনো গন্তব্য পাওয়া যায়নি</h3>
                        <p className="text-gray-600">অনুগ্রহ করে আপনার সার্চ বা ফিল্টার পরিবর্তন করুন</p>
                    </div>
                )}
            </div>

            {/* CTA Section */}
            <div className="py-16 px-4" style={{ backgroundColor: '#00A4BB' }}>
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-white mb-4">আপনার যাত্রা শুরু করতে প্রস্তুত?</h2>
                    <p className="text-xl text-white mb-8">
                        আজই আপনার স্বপ্নের গন্তব্য বুক করুন এবং চিরস্মরণীয় স্মৃতি তৈরি করুন
                    </p>
                    <button className="bg-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors flex items-center gap-3 mx-auto" style={{ color: '#00A4BB' }}>
                        <FaCalendarAlt size={20} />
                        আপনার ট্রিপ পরিকল্পনা করুন
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Destination;