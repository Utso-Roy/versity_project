import React, { useState } from 'react';
import { FaCamera, FaMapMarkerAlt, FaTimes, FaChevronLeft, FaChevronRight, FaSearch, FaFilter } from 'react-icons/fa';
import { MdPhotoLibrary } from 'react-icons/md';

const Gallery = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedImage, setSelectedImage] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    const categories = [
        { id: 'all', name: 'সব ছবি', icon: MdPhotoLibrary },
        { id: 'beach', name: 'সমুদ্র সৈকত', icon: FaCamera },
        { id: 'mountain', name: 'পাহাড়', icon: FaCamera },
        { id: 'nature', name: 'প্রকৃতি', icon: FaCamera },
        { id: 'culture', name: 'সংস্কৃতি', icon: FaCamera }
    ];

    const galleryImages = [
        {
            id: 1,
            title: 'কক্সবাজার সূর্যাস্ত',
            location: 'কক্সবাজার',
            category: 'beach',
            image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
            description: 'বিশ্বের দীর্ঘতম সমুদ্র সৈকতে অপরূপ সূর্যাস্ত'
        },
        {
            id: 2,
            title: 'সাজেক ভ্যালি মেঘ',
            location: 'রাঙামাটি',
            category: 'mountain',
            image: 'https://i.ibb.co.com/PZWRmyZd/sajek-vellay.jpg',
            description: 'মেঘের রাজ্যে হারিয়ে যাওয়ার অনুভূতি'
        },
        {
            id: 3,
            title: 'সুন্দরবন বন',
            location: 'খুলনা',
            category: 'nature',
            image: 'https://i.ibb.co.com/d0pDP1L7/sundorban.jpg',
            description: 'ম্যানগ্রোভ বনের রহস্যময় সৌন্দর্য'
        },
        {
            id: 4,
            title: 'সেন্টমার্টিন দ্বীপ',
            location: 'কক্সবাজার',
            category: 'beach',
            image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
            description: 'প্রবাল দ্বীপের স্বচ্ছ নীল জল'
        },
        {
            id: 5,
            title: 'শ্রীমঙ্গল চা বাগান',
            location: 'সিলেট',
            category: 'nature',
            image: 'https://i.ibb.co.com/DDQBpVrd/syllhet.jpg',
            description: 'সবুজ চা বাগানের মনোমুগ্ধকর দৃশ্য'
        },
        {
            id: 6,
            title: 'বান্দরবান পাহাড়',
            location: 'বান্দরবান',
            category: 'mountain',
            image: 'https://i.ibb.co.com/HpRM3Lkk/bandarban.jpg',
            description: 'পাহাড়ি উপত্যকার প্রাকৃতিক সৌন্দর্য'
        },
        {
            id: 7,
            title: 'উপজাতীয় সংস্কৃতি',
            location: 'রাঙামাটি',
            category: 'culture',
            image: 'https://i.ibb.co.com/WN5bPj1s/bb-1737465789.jpg',
            description: 'পাহাড়ি জনগোষ্ঠীর ঐতিহ্য'
        },
        {
            id: 8,
            title: 'কুয়াকাটা সৈকত',
            location: 'পটুয়াখালী',
            category: 'beach',
            image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
            description: 'সূর্যোদয় ও সূর্যাস্তের সৈকত'
        },
        {
            id: 9,
            title: 'রাতারগুল বন',
            location: 'সিলেট',
            category: 'nature',
            image: 'https://i.ibb.co.com/1YLjmhv5/ratar.jpg',
            description: 'জলাবনের অপার সৌন্দর্য'
        },
        {
            id: 10,
            title: 'নীলগিরি পাহাড়',
            location: 'বান্দরবান',
            category: 'mountain',
            image: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800&q=80',
            description: 'মেঘের উপরে দাঁড়িয়ে থাকার অভিজ্ঞতা'
        },
        {
            id: 11,
            title: 'ঐতিহ্যবাহী নৌকা',
            location: 'বাংলাদেশ',
            category: 'culture',
            image: 'https://i.ibb.co.com/mFGH0F5k/no-2-2103111047.jpg',
            description: 'বাংলার ঐতিহ্যবাহী নৌকা'
        },
        {
            id: 12,
            title: 'পাহাড়পুর বৌদ্ধবিহার',
            location: 'নওগাঁ',
            category: 'culture',
            image: 'https://i.ibb.co.com/v63Y78hb/paharpur-buddhist-vihara.jpg',
            description: 'প্রাচীন বৌদ্ধ স্থাপত্য'
        }
    ];

    const filteredImages = galleryImages.filter(img => {
        const matchesCategory = selectedCategory === 'all' || img.category === selectedCategory;
        const matchesSearch = img.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            img.location.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const openLightbox = (image) => {
        setSelectedImage(image);
    };

    const closeLightbox = () => {
        setSelectedImage(null);
    };

    const navigateImage = (direction) => {
        const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
        let newIndex;
        
        if (direction === 'next') {
            newIndex = (currentIndex + 1) % filteredImages.length;
        } else {
            newIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
        }
        
        setSelectedImage(filteredImages[newIndex]);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="relative h-96 bg-gradient-to-r from-cyan-600 to-cyan-700 overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
                    <FaCamera className="text-white text-6xl mb-4" />
                    <h1 className="text-5xl font-bold text-white mb-4">ফটো গ্যালারি</h1>
                    <p className="text-xl text-white max-w-2xl">
                        বাংলাদেশের সৌন্দর্য ক্যামেরার লেন্সে - আমাদের ভ্রমণকারীদের তোলা অসাধারণ সব মুহূর্ত
                    </p>
                </div>
            </div>

            {/* Search and Filter Section */}
            <div className="max-w-7xl mx-auto px-4 -mt-8 relative z-10">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                    <div className="flex flex-col md:flex-row gap-4 items-center">
                        <div className="relative flex-1 w-full">
                            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="ছবি খুঁজুন..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            />
                        </div>
                        <div className="flex items-center gap-2">
                            <FaFilter style={{ color: '#00A4BB' }} />
                            <span className="text-gray-700 font-semibold">ফিল্টার:</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Category Filter */}
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="flex flex-wrap gap-4 justify-center">
                    {categories.map(category => {
                        const Icon = category.icon;
                        return (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
                                    selectedCategory === category.id
                                        ? 'text-white shadow-lg transform scale-105'
                                        : 'bg-white text-gray-700 shadow-md hover:shadow-lg hover:scale-105'
                                }`}
                                style={selectedCategory === category.id ? { backgroundColor: '#00A4BB' } : {}}
                            >
                                <Icon size={18} />
                                <span>{category.name}</span>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Stats */}
            <div className="max-w-7xl mx-auto px-4 mb-12">
                <div className="bg-white p-6 rounded-xl shadow-md text-center">
                    <div className="flex flex-col md:flex-row justify-around items-center gap-6">
                        <div>
                            <p className="text-4xl font-bold" style={{ color: '#00A4BB' }}>{filteredImages.length}</p>
                            <p className="text-gray-600">ছবি পাওয়া গেছে</p>
                        </div>
                        <div>
                            <p className="text-4xl font-bold" style={{ color: '#00A4BB' }}>১০০+</p>
                            <p className="text-gray-600">গন্তব্যস্থল</p>
                        </div>
                        <div>
                            <p className="text-4xl font-bold" style={{ color: '#00A4BB' }}>১০০০+</p>
                            <p className="text-gray-600">মোট ছবি</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Gallery Grid */}
            <div className="max-w-7xl mx-auto px-4 pb-20">
                {filteredImages.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredImages.map((image) => (
                            <div
                                key={image.id}
                                className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105"
                                onClick={() => openLightbox(image)}
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={image.image}
                                        alt={image.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <div className="absolute top-4 right-4 bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <FaCamera style={{ color: '#00A4BB' }} size={20} />
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-bold text-gray-900 mb-1">{image.title}</h3>
                                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                                        <FaMapMarkerAlt size={14} style={{ color: '#00A4BB' }} />
                                        <span>{image.location}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <FaCamera size={64} className="mx-auto mb-4 text-gray-300" />
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">কোনো ছবি পাওয়া যায়নি</h3>
                        <p className="text-gray-600">অনুগ্রহ করে অন্য ক্যাটাগরি বা সার্চ চেষ্টা করুন</p>
                    </div>
                )}
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4">
                    <button
                        onClick={closeLightbox}
                        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
                    >
                        <FaTimes size={32} />
                    </button>

                    <button
                        onClick={() => navigateImage('prev')}
                        className="absolute left-4 text-white hover:text-gray-300 transition-colors"
                    >
                        <FaChevronLeft size={40} />
                    </button>

                    <button
                        onClick={() => navigateImage('next')}
                        className="absolute right-4 text-white hover:text-gray-300 transition-colors"
                    >
                        <FaChevronRight size={40} />
                    </button>

                    <div className="max-w-6xl w-full">
                        <img
                            src={selectedImage.image}
                            alt={selectedImage.title}
                            className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                        />
                        <div className="bg-white mt-4 p-6 rounded-lg">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedImage.title}</h3>
                            <div className="flex items-center gap-2 mb-3" style={{ color: '#00A4BB' }}>
                                <FaMapMarkerAlt />
                                <span className="font-semibold">{selectedImage.location}</span>
                            </div>
                            <p className="text-gray-600">{selectedImage.description}</p>
                        </div>
                    </div>
                </div>
            )}

            {/* CTA Section */}
            <div className="py-16 px-4" style={{ backgroundColor: '#00A4BB' }}>
                <div className="max-w-4xl mx-auto text-center">
                    <FaCamera className="text-white text-6xl mx-auto mb-6" />
                    <h2 className="text-4xl font-bold text-white mb-4">আপনার ভ্রমণের ছবি শেয়ার করুন</h2>
                    <p className="text-xl text-white mb-8">
                        আপনার অসাধারণ ভ্রমণের স্মৃতি আমাদের সাথে শেয়ার করুন এবং অন্যদের অনুপ্রাণিত করুন!
                    </p>
                    <button className="bg-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors flex items-center gap-2 mx-auto" style={{ color: '#00A4BB' }}>
                        <FaCamera />
                        ছবি আপলোড করুন
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Gallery;