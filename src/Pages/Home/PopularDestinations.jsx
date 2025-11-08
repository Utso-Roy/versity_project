import React from "react";
import { motion } from "framer-motion";

const PopularDestinations = () => {
  const destinations = [
    {
      name: "Cox’s Bazar",
      image: "https://i.ibb.co.com/d0F3RKNM/coxbazar.jpg",
    },
    {
      name: "Sajek Valley",
      image: "https://i.ibb.co.com/PZWRmyZd/sajek-vellay.jpg",
    },
    {
      name: "Saint Martin",
      image: "https://i.ibb.co.com/FbGgWzGC/saint-martin.jpg",
    },
    {
      name: "Sundarban",
      image: "https://i.ibb.co.com/d0pDP1L7/sundorban.jpg",
    },
    {
      name: "Bandarban",
      image: "https://i.ibb.co.com/HpRM3Lkk/bandarban.jpg",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 via-white to-blue-100">
      <div className="w-full px-6 text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-12 text-[#00A4BB]"
        >
                  জনপ্রিয় গন্তব্য
                  
                  <motion.p
  initial={{ opacity: 0, y: 10 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  className="text-gray-600 max-w-2xl mx-auto text-sm mb-10"
>
  বাংলাদেশে ভ্রমণের জন্য সেরা গন্তব্যগুলো এখানে আবিষ্কার করুন। 
  অসাধারণ প্রকৃতি, শান্ত পরিবেশ, এবং স্মরণীয় অভিজ্ঞতা আপনার অপেক্ষায়।
</motion.p>
              </motion.h2>
              
              

        {/* Destination Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {destinations.map((dest, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative group h-64 rounded-2xl overflow-hidden shadow-lg cursor-pointer"
            >
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-all duration-500 group-hover:from-black/60 group-hover:via-black/30 flex items-end justify-center">
                <h3 className="text-white text-xl md:text-2xl font-semibold mb-4 opacity-90 group-hover:opacity-100 transition-opacity">
                  {dest.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12"
        >
          <button className="px-8 py-3 bg-[#00A4BB] text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform">
            সব গন্তব্য দেখুন
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default PopularDestinations;
