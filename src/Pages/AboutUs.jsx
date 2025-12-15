import React from 'react';
import { FaMapMarkedAlt, FaUsers, FaHeart, FaAward, FaGlobeAsia, FaHandshake, FaRocket, FaShieldAlt } from 'react-icons/fa';
import { MdTravelExplore, MdSupportAgent } from 'react-icons/md';

const AboutUs = () => {
    const stats = [
        { icon: FaUsers, number: '৫০,০০০+', label: 'সন্তুষ্ট ভ্রমণকারী' },
        { icon: FaMapMarkedAlt, number: '১০০+', label: 'গন্তব্যস্থল' },
        { icon: FaAward, number: '১৫+', label: 'পুরস্কার' },
        { icon: FaGlobeAsia, number: '২০+', label: 'বছরের অভিজ্ঞতা' }
    ];

    const values = [
        {
            icon: FaHeart,
            title: 'আবেগ',
            description: 'আমরা ভ্রমণকে ভালোবাসি এবং প্রতিটি যাত্রাকে বিশেষ করে তুলতে প্রতিশ্রুতিবদ্ধ'
        },
        {
            icon: FaShieldAlt,
            title: 'বিশ্বাসযোগ্যতা',
            description: 'আপনার নিরাপত্তা এবং সন্তুষ্টি আমাদের সর্বোচ্চ অগ্রাধিকার'
        },
        {
            icon: FaRocket,
            title: 'উদ্ভাবন',
            description: 'আধুনিক প্রযুক্তি ব্যবহার করে ভ্রমণ পরিকল্পনা সহজ করি'
        },
        {
            icon: MdSupportAgent,
            title: 'সেবা',
            description: '২৪/৭ গ্রাহক সহায়তা এবং ব্যক্তিগত পরিষেবা প্রদান'
        }
    ];

    const team = [
        {
            name: 'উৎস চন্দ্র রায়',
            position: 'প্রতিষ্ঠাতা ও সিইও',
            image: 'https://i.ibb.co.com/wZhBfP17/Whats-App-Image-2025-09-24-at-9-42-01-AM.jpg',
            description: 'ভ্রমণ শিল্পে ১৫+ বছরের অভিজ্ঞতা'
        },
        {
            name: 'ফরহাদ হোসেন লাম',
            position: 'ভ্রমণ পরিচালক',
            image: 'https://i.ibb.co.com/VpC4rdQy/lam.jpg',
            description: 'দেশ-বিদেশের ১০০+ গন্তব্যে ভ্রমণ অভিজ্ঞতা'
        },
        {
            name: 'মাহাবুব আলম জনি',
            position: 'কাস্টমার সাপোর্ট হেড',
            image: 'https://i.ibb.co.com/rG8Fjnsj/jony.jpg',
            description: 'গ্রাহক সেবায় বিশেষজ্ঞ'
        },
        {
            name: 'অন্তরীপ',
            position: 'মার্কেটিং ম্যানেজার',
            image: 'https://i.ibb.co.com/JwnrQSfN/antoreep-2.jpg',
            description: 'ডিজিটাল মার্কেটিং স্পেশালিস্ট'
        }
    ];

    const milestones = [
        { year: '২০০৫', event: 'Trip Haven প্রতিষ্ঠা' },
        { year: '২০১০', event: 'প্রথম ১০,০০০ ভ্রমণকারী সেবা প্রদান' },
        { year: '২০১৫', event: 'সেরা ভ্রমণ এজেন্সি পুরস্কার অর্জন' },
        { year: '২০২০', event: 'অনলাইন বুকিং সিস্টেম চালু' },
        { year: '২০২৫', event: '৫০,০০০+ সন্তুষ্ট গ্রাহক' }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="relative h-96 bg-gradient-to-r from-cyan-600 to-cyan-700 overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
                    <MdTravelExplore className="text-white text-6xl mb-4" />
                    <h1 className="text-5xl font-bold text-white mb-4">আমাদের সম্পর্কে</h1>
                    <p className="text-xl text-white max-w-3xl">
                        Trip Haven - বাংলাদেশের বিশ্বস্ত ভ্রমণ সঙ্গী। আমরা আপনার স্বপ্নের ভ্রমণকে বাস্তবে রূপ দিতে প্রতিশ্রুতিবদ্ধ
                    </p>
                </div>
            </div>

            {/* Stats Section */}
            <div className="max-w-7xl mx-auto px-4 -mt-16 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
                                <Icon className="mx-auto mb-3" size={40} style={{ color: '#00A4BB' }} />
                                <h3 className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</h3>
                                <p className="text-gray-600">{stat.label}</p>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Our Story Section */}
            <div className="max-w-7xl mx-auto px-4 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">আমাদের গল্প</h2>
                        <p className="text-gray-700 mb-4 leading-relaxed">
                            ২০০৫ সালে, একটি সাধারণ স্বপ্ন নিয়ে Trip Haven এর যাত্রা শুরু হয়েছিল - বাংলাদেশের মানুষের জন্য ভ্রমণকে আরও সহজ, নিরাপদ এবং আনন্দদায়ক করে তোলা। আমরা বিশ্বাস করি যে ভ্রমণ শুধু একটি গন্তব্যে পৌঁছানো নয়, এটি একটি অভিজ্ঞতা, একটি স্মৃতি যা সারাজীবন থেকে যায়।
                        </p>
                        <p className="text-gray-700 mb-4 leading-relaxed">
                            গত ২০ বছরে, আমরা ৫০,০০০+ ভ্রমণকারীকে তাদের স্বপ্নের গন্তব্যে পৌঁছাতে সাহায্য করেছি। কক্সবাজারের সূর্যাস্ত থেকে সাজেকের মেঘের রাজ্য - প্রতিটি যাত্রায় আমরা আপনার সাথে আছি।
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            আজ, Trip Haven শুধু একটি ভ্রমণ সংস্থা নয়, এটি হাজারো পরিবারের বিশ্বস্ত সঙ্গী যারা আমাদের সাথে তাদের জীবনের সবচেয়ে সুন্দর মুহূর্তগুলো তৈরি করেছে।
                        </p>
                    </div>
                    <div className="relative">
                        <img 
                            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80" 
                            alt="Travel Story"
                            className="rounded-2xl shadow-2xl"
                        />
                        <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl" style={{ borderLeft: '4px solid #00A4BB' }}>
                            <p className="text-2xl font-bold text-gray-900">২০+</p>
                            <p className="text-gray-600">বছরের সেবা</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Values Section */}
            <div className="py-16" style={{ backgroundColor: '#f0f9fa' }}>
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">আমাদের মূল্যবোধ</h2>
                    <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                        যে নীতি এবং বিশ্বাস আমাদের প্রতিটি কাজে প্রতিফলিত হয়
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => {
                            const Icon = value.icon;
                            return (
                                <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
                                    <div className="inline-block p-4 rounded-full mb-4" style={{ backgroundColor: '#e6f7f9' }}>
                                        <Icon size={32} style={{ color: '#00A4BB' }} />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                                    <p className="text-gray-600 text-sm">{value.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Timeline Section */}
            <div className="max-w-7xl mx-auto px-4 py-20">
                <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">আমাদের যাত্রাপথ</h2>
                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 hidden md:block" style={{ backgroundColor: '#00A4BB' }}></div>
                    
                    {milestones.map((milestone, index) => (
                        <div key={index} className={`flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                            <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                                    <h3 className="text-2xl font-bold mb-2" style={{ color: '#00A4BB' }}>{milestone.year}</h3>
                                    <p className="text-gray-700">{milestone.event}</p>
                                </div>
                            </div>
                            <div className="hidden md:flex w-2/12 justify-center">
                                <div className="w-6 h-6 rounded-full border-4 border-white shadow-lg" style={{ backgroundColor: '#00A4BB' }}></div>
                            </div>
                            <div className="hidden md:block w-5/12"></div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Team Section */}
            <div className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">আমাদের টিম</h2>
                    <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                        অভিজ্ঞ এবং নিবেদিত পেশাদারদের একটি দল যারা আপনার ভ্রমণকে অবিস্মরণীয় করে তুলতে প্রস্তুত
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {team.map((member, index) => (
                            <div key={index} className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                                <div className="relative h-64 overflow-hidden">
                                    <img 
                                        src={member.image} 
                                        alt={member.name}
                                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                                <div className="p-6 text-center">
                                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                                    <p className="font-semibold mb-2" style={{ color: '#00A4BB' }}>{member.position}</p>
                                    <p className="text-gray-600 text-sm">{member.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="py-20 px-4" style={{ backgroundColor: '#00A4BB' }}>
                <div className="max-w-4xl mx-auto text-center">
                    <FaHandshake className="text-white text-6xl mx-auto mb-6" />
                    <h2 className="text-4xl font-bold text-white mb-4">আমাদের সাথে যোগ দিন</h2>
                    <p className="text-xl text-white mb-8">
                        আপনার পরবর্তী অ্যাডভেঞ্চারের জন্য প্রস্তুত? আসুন একসাথে অবিস্মরণীয় স্মৃতি তৈরি করি!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors" style={{ color: '#00A4BB' }}>
                            যোগাযোগ করুন
                        </button>
                        <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-cyan-600 transition-colors">
                            গন্তব্য দেখুন
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;