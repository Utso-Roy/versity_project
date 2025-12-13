import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { MdLocalOffer } from "react-icons/md";
import Container from "../../Container/Container";

const SpecialOffers = () => {
  const offers = [
    {
      title: "সাজেক ভ্যালির কুয়াশাচ্ছন্ন সকাল",
      image: "https://i.ibb.co.com/PZWRmyZd/sajek-vellay.jpg",
      price: "৳১০,৫০০",
      discount: "৩০% ছাড়",
      date: "৫ ডিসেম্বর - ১০ ডিসেম্বর",
    },
    {
      title: "সিলেটের চা বাগান ট্যুর",
      image: "https://i.ibb.co.com/DDQBpVrd/syllhet.jpg",
      price: "৳৮,০০০",
      discount: "২৫% ছাড়",
      date: "১২ ডিসেম্বর - ১৬ ডিসেম্বর",
    },
    {
      title: "বান্দরবানের পাহাড়ি শীত সফর",
      image: "https://i.ibb.co.com/HpRM3Lkk/bandarban.jpg",
      price: "৳১১,০০০",
      discount: "৩০% ছাড়",
      date: "২০ ডিসেম্বর - ২৫ ডিসেম্বর",
    },
    {
      title: "কক্সবাজার সমুদ্র ভিউ",
      image: "https://i.ibb.co.com/d0F3RKNM/coxbazar.jpg",
      price: "৳১২,০০০",
      discount: "২০% ছাড়",
      date: "২৮ ডিসেম্বর - ৩১ ডিসেম্বর",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <Container>


        <div className="w-full px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#00A4BB]  mb-4">
           <span className="text-[#00A4BB]">শীতকালীন প্যাকেজে</span> পাচ্ছেন{" "}
          <span className="text-[#007C94]">৩০% ছাড়!</span>
        </h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          শীতের সকালে পাহাড়, নদী আর কুয়াশার রোমাঞ্চ উপভোগ করুন দারুণ ছাড়ে। 
          সীমিত সময়ের অফার — মিস করবেন না!
        </p>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {offers.map((offer, i) => (
            <div
              key={i}
              className="relative bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Discount Badge */}
                <span className="absolute top-3 left-3 bg-gradient-to-r from-[#00A4BB] to-[#007C94] text-white text-sm font-semibold px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                  <MdLocalOffer /> {offer.discount}
                </span>
              </div>

              {/* Content */}
              <div className="p-5 text-left">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {offer.title}
                </h3>

                <div className="flex items-center text-gray-500 text-sm mb-3 gap-2">
                  <FaCalendarAlt className="text-[#00A4BB]" />
                  <span>{offer.date}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-[#007C94]">
                    {offer.price}
                  </span>
                  <button className="px-4 py-2 bg-[#00A4BB] text-white rounded-lg font-semibold hover:bg-[#0092A7] transition-all duration-300">
                    এখনই বুক করুন
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </Container>
    </section>
  );
};

export default SpecialOffers;
