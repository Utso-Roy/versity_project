import React from "react";
import { FaClock, FaPlane, FaMoneyBillWave, FaShieldAlt } from "react-icons/fa";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaShieldAlt className="text-[#00A4BB] w-10 h-10" />,
      title: "Trusted Travel Agency",
      description: "আপনার যাত্রা নিরাপদ এবং নিশ্চিন্তে সম্পন্ন করার জন্য আমাদের অভিজ্ঞতা।",
    },
    {
      icon: <FaClock className="text-[#00A4BB] w-10 h-10" />,
      title: "24/7 Customer Support",
      description: "যেকোনো সময় সাহায্য করুন আমাদের দক্ষ সাপোর্ট টিম।",
    },
    {
      icon: <FaPlane className="text-[#00A4BB] w-10 h-10" />,
      title: "Customizable Packages",
      description: "আপনার প্রয়োজন অনুযায়ী ভ্রমণ প্যাকেজ সাজান।",
    },
    {
      icon: <FaMoneyBillWave className="text-[#00A4BB] w-10 h-10" />,
      title: "Affordable Prices",
      description: "বাজেটের মধ্যে দারুণ ভ্রমণ অভিজ্ঞতা নিশ্চিত।",
    },
  ];

  return (
    <section className="py-16 bg-sky-50 relative">
      {/* Optional Background Blur Shapes */}
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-10 -right-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>

      <div className="w-full px-6 text-center relative z-10">
       <h2 className="text-4xl md:text-5xl font-extrabold text-gray-700 mb-4">
  কেন আমাদের <span className="text-[#00A4BB]">নির্বাচন করবেন?</span>
</h2>
<p className="text-gray-600 max-w-2xl mx-auto text-lg mb-12">
  আমাদের অভিজ্ঞতা, নিরাপদ সেবা, এবং কাস্টমাইজড প্যাকেজের মাধ্যমে আপনি পাবেন 
  অসাধারণ ভ্রমণ অভিজ্ঞতা, যা বাজেটের মধ্যে থাকবে এবং আপনার সময় বাঁচাবে।
</p>


        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
