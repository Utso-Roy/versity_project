import React, { useState } from 'react';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaGoogle, FaFacebook, FaUser, FaPlane } from 'react-icons/fa';
import { MdTravelExplore } from 'react-icons/md';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        rememberMe: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isLogin) {
            console.log('Login:', { email: formData.email, password: formData.password });
        } else {
            console.log('Sign Up:', formData);
        }
    };

    const toggleForm = () => {
        setIsLogin(!isLogin);
        setFormData({
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            rememberMe: false
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-50 flex items-center justify-center px-4 py-12">
            <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Left Side - Branding */}
                <div className="hidden lg:block">
                    <div className="text-center mb-8">
                        <MdTravelExplore className="text-8xl mx-auto mb-6 animate-bounce" style={{ color: '#00A4BB' }} />
                        <h1 className="text-5xl font-bold text-gray-900 mb-4">
                            Trip Haven
                        </h1>
                        <p className="text-xl text-gray-600 mb-8">
                            আপনার স্বপ্নের ভ্রমণ শুরু করুন
                        </p>
                    </div>
                    
                    <div className="bg-white p-8 rounded-2xl shadow-lg">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">কেন Trip Haven?</h3>
                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg" style={{ backgroundColor: '#e6f7f9' }}>
                                    <FaPlane style={{ color: '#00A4BB' }} size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-1">১০০+ গন্তব্যস্থল</h4>
                                    <p className="text-gray-600 text-sm">বাংলাদেশের সেরা ভ্রমণ স্থানগুলো</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg" style={{ backgroundColor: '#e6f7f9' }}>
                                    <FaUser style={{ color: '#00A4BB' }} size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-1">৫০,০০০+ ভ্রমণকারী</h4>
                                    <p className="text-gray-600 text-sm">সন্তুষ্ট গ্রাহকদের বিশাল পরিবার</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg" style={{ backgroundColor: '#e6f7f9' }}>
                                    <MdTravelExplore style={{ color: '#00A4BB' }} size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-1">সহজ বুকিং</h4>
                                    <p className="text-gray-600 text-sm">কয়েক ক্লিকেই আপনার ট্রিপ বুক করুন</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side - Login/Signup Form */}
                <div className="bg-white p-8 md:p-12 rounded-2xl shadow-2xl">
                    {/* Mobile Logo */}
                    <div className="lg:hidden text-center mb-8">
                        <MdTravelExplore className="text-6xl mx-auto mb-4" style={{ color: '#00A4BB' }} />
                        <h1 className="text-3xl font-bold text-gray-900">Trip Haven</h1>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">
                            {isLogin ? 'স্বাগতম!' : 'একাউন্ট তৈরি করুন'}
                        </h2>
                        <p className="text-gray-600">
                            {isLogin ? 'আপনার একাউন্টে লগইন করুন' : 'নতুন একাউন্ট তৈরি করে শুরু করুন'}
                        </p>
                    </div>

                    {/* Social Login */}
                    <div className="space-y-3 mb-6">
                        <button className="w-full flex items-center justify-center gap-3 px-4 py-3 border-2 border-gray-300 rounded-lg hover:border-gray-400 transition-colors font-semibold text-gray-700">
                            <FaGoogle className="text-red-500" size={20} />
                            Google দিয়ে {isLogin ? 'লগইন' : 'সাইন আপ'} করুন
                        </button>
                        <button className="w-full flex items-center justify-center gap-3 px-4 py-3 border-2 border-gray-300 rounded-lg hover:border-gray-400 transition-colors font-semibold text-gray-700">
                            <FaFacebook className="text-blue-600" size={20} />
                            Facebook দিয়ে {isLogin ? 'লগইন' : 'সাইন আপ'} করুন
                        </button>
                    </div>

                    <div className="relative mb-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-4 bg-white text-gray-500">অথবা</span>
                        </div>
                    </div>

                    {/* Login/Signup Form */}
                    <div>
                        {!isLogin && (
                            <div className="mb-4">
                                <label className="block text-gray-700 font-semibold mb-2">
                                    <FaUser className="inline mr-2" size={16} />
                                    পূর্ণ নাম
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                    placeholder="আপনার নাম লিখুন"
                                />
                            </div>
                        )}

                        <div className="mb-4">
                            <label className="block text-gray-700 font-semibold mb-2">
                                <FaEnvelope className="inline mr-2" size={16} />
                                ইমেইল
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                placeholder="your@email.com"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-semibold mb-2">
                                <FaLock className="inline mr-2" size={16} />
                                পাসওয়ার্ড
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                    placeholder="••••••••"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                >
                                    {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                                </button>
                            </div>
                        </div>

                        {!isLogin && (
                            <div className="mb-4">
                                <label className="block text-gray-700 font-semibold mb-2">
                                    <FaLock className="inline mr-2" size={16} />
                                    পাসওয়ার্ড নিশ্চিত করুন
                                </label>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                    placeholder="••••••••"
                                />
                            </div>
                        )}

                        {isLogin && (
                            <div className="flex items-center justify-between mb-6">
                                <label className="flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        name="rememberMe"
                                        checked={formData.rememberMe}
                                        onChange={handleChange}
                                        className="mr-2 w-4 h-4"
                                        style={{ accentColor: '#00A4BB' }}
                                    />
                                    <span className="text-gray-700 text-sm">আমাকে মনে রাখুন</span>
                                </label>
                                <a href="#" className="text-sm font-semibold hover:underline" style={{ color: '#00A4BB' }}>
                                    পাসওয়ার্ড ভুলে গেছেন?
                                </a>
                            </div>
                        )}

                        <button
                            onClick={handleSubmit}
                            className="w-full text-white py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-opacity shadow-lg mb-6"
                            style={{ backgroundColor: '#00A4BB' }}
                        >
                            {isLogin ? 'লগইন করুন' : 'সাইন আপ করুন'}
                        </button>

                        <p className="text-center text-gray-600">
                            {isLogin ? 'নতুন ব্যবহারকারী? ' : 'ইতিমধ্যে একাউন্ট আছে? '}
                            <button
                                onClick={toggleForm}
                                className="font-bold hover:underline"
                                style={{ color: '#00A4BB' }}
                            >
                                {isLogin ? 'সাইন আপ করুন' : 'লগইন করুন'}
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;