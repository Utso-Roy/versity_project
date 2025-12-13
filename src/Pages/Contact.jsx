import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaPaperPlane, FaUser, FaComments } from 'react-icons/fa';
import { MdSupportAgent } from 'react-icons/md';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            });
        }, 3000);
    };

    const contactInfo = [
        {
            icon: FaPhone,
            title: 'ফোন',
            details: ['+৮৮০ ১৭১২-৩৪৫৬৭৮', '+৮৮০ ১৯১২-৩৪৫৬৭৮'],
            color: '#00A4BB'
        },
        {
            icon: FaEnvelope,
            title: 'ইমেইল',
            details: ['info@triphaven.com', 'support@triphaven.com'],
            color: '#00A4BB'
        },
        {
            icon: FaMapMarkerAlt,
            title: 'ঠিকানা',
            details: ['১২৩ গুলশান এভিনিউ', 'ঢাকা ১২১২, বাংলাদেশ'],
            color: '#00A4BB'
        },
        {
            icon: FaClock,
            title: 'কার্যসময়',
            details: ['সোম - শুক্র: ৯:০০ - ৬:০০', 'শনি: ১০:০০ - ৪:০০'],
            color: '#00A4BB'
        }
    ];

    const socialMedia = [
        { icon: FaFacebook, name: 'Facebook', link: '#', color: '#1877F2' },
        { icon: FaInstagram, name: 'Instagram', link: '#', color: '#E4405F' },
        { icon: FaTwitter, name: 'Twitter', link: '#', color: '#1DA1F2' },
        { icon: FaWhatsapp, name: 'WhatsApp', link: '#', color: '#25D366' }
    ];

    const faqs = [
        {
            question: 'কিভাবে বুকিং করবো?',
            answer: 'আমাদের ওয়েবসাইটে গিয়ে আপনার পছন্দের গন্তব্য নির্বাচন করুন এবং বুকিং ফর্ম পূরণ করুন।'
        },
        {
            question: 'পেমেন্ট পদ্ধতি কি কি?',
            answer: 'আমরা ক্যাশ, বিকাশ, নগদ, রকেট এবং ক্রেডিট/ডেবিট কার্ড গ্রহণ করি।'
        },
        {
            question: 'ক্যান্সেলেশন পলিসি কি?',
            answer: 'ভ্রমণের ৭ দিন আগে ক্যান্সেল করলে ৮০% রিফান্ড পাবেন।'
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="relative h-80 bg-gradient-to-r from-cyan-600 to-cyan-700 overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
                    <MdSupportAgent className="text-white text-6xl mb-4" />
                    <h1 className="text-5xl font-bold text-white mb-4">যোগাযোগ করুন</h1>
                    <p className="text-xl text-white max-w-2xl">
                        আমরা আপনার সেবায় সর্বদা প্রস্তুত। যেকোনো প্রশ্ন বা সহায়তার জন্য আমাদের সাথে যোগাযোগ করুন
                    </p>
                </div>
            </div>

            {/* Contact Info Cards */}
            <div className="max-w-7xl mx-auto px-4 -mt-16 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {contactInfo.map((info, index) => {
                        const Icon = info.icon;
                        return (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
                                <div className="inline-block p-4 rounded-full mb-4" style={{ backgroundColor: '#e6f7f9' }}>
                                    <Icon size={32} style={{ color: info.color }} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{info.title}</h3>
                                {info.details.map((detail, idx) => (
                                    <p key={idx} className="text-gray-600 text-sm mb-1">{detail}</p>
                                ))}
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">মেসেজ পাঠান</h2>
                        <p className="text-gray-600 mb-6">আপনার প্রশ্ন বা মন্তব্য জানাতে ফর্মটি পূরণ করুন</p>
                        
                        {submitted && (
                            <div className="mb-6 p-4 rounded-lg text-white" style={{ backgroundColor: '#00A4BB' }}>
                                <p className="flex items-center gap-2">
                                    <FaPaperPlane />
                                    আপনার মেসেজ সফলভাবে পাঠানো হয়েছে! আমরা শীঘ্রই আপনার সাথে যোগাযোগ করবো।
                                </p>
                            </div>
                        )}

                        <div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-semibold mb-2">
                                    <FaUser className="inline mr-2" size={16} />
                                    নাম *
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

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">
                                        <FaEnvelope className="inline mr-2" size={16} />
                                        ইমেইল *
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
                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">
                                        <FaPhone className="inline mr-2" size={16} />
                                        ফোন
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                        placeholder="০১৭xxxxxxxx"
                                    />
                                </div>
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 font-semibold mb-2">
                                    <FaComments className="inline mr-2" size={16} />
                                    বিষয় *
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                    placeholder="মেসেজের বিষয়"
                                />
                            </div>

                            <div className="mb-6">
                                <label className="block text-gray-700 font-semibold mb-2">
                                    বার্তা *
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="5"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none"
                                    placeholder="আপনার মেসেজ লিখুন..."
                                ></textarea>
                            </div>

                            <button
                                onClick={handleSubmit}
                                className="w-full text-white py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                                style={{ backgroundColor: '#00A4BB' }}
                            >
                                <FaPaperPlane />
                                মেসেজ পাঠান
                            </button>
                        </div>
                    </div>

                    {/* Map and Additional Info */}
                    <div>
                        {/* Map */}
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
                            <div className="h-64 bg-gray-200">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.0977736793545!2d90.40744531498186!3d23.78077938457908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a8ffffffff%3A0x6d3e556dd78a44f!2sGulshan%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1234567890"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    title="Trip Haven Location"
                                ></iframe>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">আমাদের অফিস</h3>
                                <p className="text-gray-600">১২৩ গুলশান এভিনিউ, ঢাকা ১২১২, বাংলাদেশ</p>
                            </div>
                        </div>

                        {/* FAQ Section */}
                        <div className="bg-white p-6 rounded-2xl shadow-lg">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">সচরাচর জিজ্ঞাসা</h3>
                            <div className="space-y-4">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="border-b border-gray-200 pb-4 last:border-0">
                                        <h4 className="font-bold text-gray-900 mb-2" style={{ color: '#00A4BB' }}>
                                            প্র: {faq.question}
                                        </h4>
                                        <p className="text-gray-600 text-sm">উ: {faq.answer}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Social Media Section */}
            <div className="py-16" style={{ backgroundColor: '#f0f9fa' }}>
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">সোশ্যাল মিডিয়ায় আমরা</h2>
                    <p className="text-gray-600 mb-8">আমাদের সাথে সংযুক্ত থাকুন এবং সর্বশেষ আপডেট পান</p>
                    <div className="flex justify-center gap-6">
                        {socialMedia.map((social, index) => {
                            const Icon = social.icon;
                            return (
                                <a
                                    key={index}
                                    href={social.link}
                                    className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow transform hover:scale-110 duration-200"
                                    style={{ color: social.color }}
                                >
                                    <Icon size={28} />
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="py-16 px-4" style={{ backgroundColor: '#00A4BB' }}>
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-white mb-4">জরুরি সহায়তা প্রয়োজন?</h2>
                    <p className="text-xl text-white mb-8">
                        আমাদের ২৪/৭ হেল্পলাইনে কল করুন
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="tel:+8801712345678"
                            className="bg-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
                            style={{ color: '#00A4BB' }}
                        >
                            <FaPhone />
                            +৮৮০ ১৭১২-৩৪৫৬৭৮
                        </a>
                        <a
                            href="https://wa.me/8801712345678"
                            className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-cyan-600 transition-colors flex items-center justify-center gap-2"
                        >
                            <FaWhatsapp />
                            WhatsApp করুন
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;