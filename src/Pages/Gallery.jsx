// import React, { useEffect, useMemo, useState } from "react";


// const IMAGES = [
//   { id: 1, url: "/src/assets/image/patenga-chittagong.jpg", title: "পতেঙ্গা সমুদ্র সৈকত", category: "Beach" },
//   { id: 2, url: "/src/assets/image/Saint_Martins_Island_with_boats_in_foreground.jpg", title: "সেন্ট মার্টিনস", category: "Beach" },
//   { id: 3, url: "/src/assets/image/Sunset_at_the_Inani_sea_beach_Cox's_bazar.jpg", title: "ইনানী বিচ - সূর্যাস্ত", category: "Beach" },
//   { id: 4, url: "/src/assets/image/coxbazar-1024x535.webp", title: "কক্সবাজার", category: "Beach" },
//   { id: 5, url: "/src/assets/image/258976_cox.jpg", title: "কক্স দৃশ্য", category: "Beach" },

//   { id: 6, url: "/src/assets/image/Zero_Point_at_Zuflong.jpg", title: "জাফলং (Zero Point)", category: "Famous Landmark" },
//   { id: 7, url: "/src/assets/image/Bisnakandi-6.jpg", title: "বিছানাকান্দি", category: "Mountain" },
//   { id: 8, url: "/src/assets/image/Nijhum_Dwip.jpg", title: "নিজহুম দ্বীপ", category: "Beach" },
//   { id: 9, url: "/src/assets/image/Kaptai_Lake_05.jpg", title: "কাপ্তাই লেক", category: "Mountain" },
//   { id: 10, url: "/src/assets/image/Nilgiri-How-To-Go.jpg.webp", title: "নিলগিরি", category: "Mountain" },

//   { id: 11, url: "/src/assets/image/Paharpur_Buddhist_Bihar.jpg", title: "পাহারপুর (সোমপুর মহাবিহার)", category: "Cultural Streets" },
//   { id: 12, url: "/src/assets/image/BD_Mahasthangarh1_without_people.jpg", title: "মহাস্থানগড়", category: "Cultural Streets" },

//   { id: 13, url: "/src/assets/image/Sundarban-Kotka-Sanctuary.jpg", title: "সুন্দরবন কটকা", category: "Famous Landmark" },
//   { id: 14, url: "/src/assets/image/পানিতে_নিমজ্জিত_রাতারগুল_জলাবনের_গাছ.jpg", title: "রাতারগুল জলাবন", category: "Famous Landmark" },

//   { id: 15, url: "/src/assets/image/ahsan-monjil.jpg", title: "আহসান মঞ্জিল", category: "City" },
//   { id: 16, url: "/src/assets/image/national-parliament-house.jpg", title: "জাতীয় সংসদ ভবন", category: "City" },
//   { id: 17, url: "/src/assets/image/national-memmorial-front.jpg", title: "জাতীয় স্মৃতিসৌধ", category: "City" },

//   { id: 18, url: "/src/assets/image/im-inneren-des-palastes.jpg", title: "ইতিহাসিক স্থাপনা", category: "Cultural Streets" },

//   { id: 19, url: "/src/assets/image/OIP.jpeg", title: "সাধারণ দৃশ্য", category: "Other" },

//   {
//     id: 20,
//     url: "/src/assets/image/7-vKqQdd8tMTp8mYxVHg-mlTwhJEKG5S9Bkmz1QafZfUwfN6-1e8718kWyxO8Glx6TWVbHXaL_Uba66vjEUl0lxBJ6HUZaVAgnE3RwDMCHSsIMyfoOvzarROK7qUvdOCM-DrahsEIfUGyKY-CNj3rw.jpeg",
//     title: "Random Landscape",
//     category: "Other",
//   },
// ];

// const CATEGORY_BN = {
//   All: "সব",
//   City: "শহর",
//   Mountain: "পর্বত",
//   Beach: "সমুদ্রতট",
//   "Cultural Streets": "ঐতিহ্য/সংস্কৃতি",
//   "Famous Landmark": "প্রসিদ্ধ স্থান",
//   Other: "অন্যান্য",
// };

// const styles = {
//   page: {
//     fontFamily: "'Noto Sans Bengali', Arial, sans-serif",
//     padding: 0,
//     maxWidth: "1200px",
//     margin: "0 auto",
//     color: "#111",
//   },
//   hero: {
//     background: "linear-gradient(90deg, #0b6b73 0%, #0f9aa6 100%)",
//     color: "#fff",
//     padding: "54px 20px",
//     textAlign: "center",
//     borderRadius: "0 0 12px 12px",
//     marginBottom: 28,
//   },
//   heroTitle: {
//     fontSize: "36px",
//     fontWeight: 800,
//     margin: 0,
//     lineHeight: 1.05,
//     letterSpacing: "0.5px",
//   },
//   heroSubtitle: {
//     fontSize: "16px",
//     marginTop: 10,
//     opacity: 0.92,
//   },

//   contentWrap: {
//     padding: "22px",
//     background: "#f6fffd",
//     borderRadius: 12,
//     marginBottom: 28,
//   },

//   title: { fontSize: 26, marginBottom: 6 },
//   subtitle: { fontSize: 14, marginBottom: 18, color: "#666" },

//   catBar: {
//     marginBottom: 18,
//     display: "flex",
//     justifyContent: "center",
//     flexWrap: "wrap",
//     gap: "10px",
//   },

//   catBtn: {
//     padding: "8px 14px",
//     marginRight: 10,
//     marginBottom: 10,
//     border: "1px solid #ccc",
//     background: "#fff",
//     borderRadius: 30,
//     cursor: "pointer",
//     fontSize: 14,
//     transition: "0.2s",
//     boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
//   },
//   catBtnActive: {
//     background: "rgb(2,98,119)",
//     color: "#fff",
//     borderColor: "rgb(2,98,119)",
//   },

//   grid: {
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
//     gap: 18,
//   },
//   card: {
//     border: "1px solid #ddd",
//     borderRadius: 8,
//     overflow: "hidden",
//     background: "#fff",
//     transition: "transform 180ms ease, box-shadow 180ms ease",
//   },
//   cardHover: {
//     transform: "scale(1.03)",
//     boxShadow: "0 10px 20px rgba(0,0,0,0.12)",
//   },
//   img: { width: "100%", height: 220, objectFit: "cover", display: "block" },
//   textBox: { padding: 10, fontSize: 14 },
//   overlay: {
//     position: "fixed",
//     inset: 0,
//     backgroundColor: "rgba(0,0,0,0.6)",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     zIndex: 9999,
//   },
//   lightboxInner: {
//     maxWidth: "90%",
//     maxHeight: "90%",
//     padding: 12,
//     borderRadius: 8,
//     background: "transparent",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//   },
//   lightboxImg: {
//     maxWidth: "100%",
//     maxHeight: "80vh",
//     objectFit: "contain",
//     borderRadius: 8,
//     boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
//   },
//   closeBtn: {
//     marginTop: 12,
//     padding: "6px 12px",
//     borderRadius: 6,
//     border: "none",
//     cursor: "pointer",
//     background: "#fff",
//   },
// };

// export default function SimpleGalleryBn() {
//   const [category, setCategory] = useState("All");
//   const [selected, setSelected] = useState(null);
//   const [hoveredId, setHoveredId] = useState(null);
//   const categories = useMemo(
//     () => ["All", ...new Set(IMAGES.map((i) => i.category))],
//     []
//   );

//   useEffect(() => {
//     function onKey(e) {
//       if (e.key === "Escape") setSelected(null);
//     }
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, []);

//   const filtered = useMemo(() => {
//     return category === "All"
//       ? IMAGES
//       : IMAGES.filter((img) => img.category === category);
//   }, [category]);

//   function openImage(img) {
//     setSelected(img);
//   }
//   function closeImage() {
//     setSelected(null);
//   }

//   return (
//     <div style={styles.page}>
//       {/* HERO / BANNER */}
//       <div className="bg-gradient-to-r from-[#007c94] to-[#005a6d] text-white py-20">
//                 <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
//                     <h1 className="text-5xl font-bold mb-4">বাংলাদেশের ভ্রমণ প্যাকেজ</h1>
//                     <p className="text-xl text-cyan-100 max-w-2xl mx-auto">
//                         বাংলাদেশের সবচেয়ে সুন্দর গন্তব্যে ভ্রমণ করুন আমাদের বাছাইকৃত প্যাকেজের সাথে
//                     </p>
//                 </div>
//             </div>

//       {/* CONTENT WRAP (holds gallery header + filters + grid) */}
//       <div style={styles.contentWrap}>
//         {/* Centered Filter Buttons */}
//         <div style={styles.catBar}>
//           {categories.map((c) => (
//             <button
//               key={c}
//               onClick={() => setCategory(c)}
//               className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
//                                 setCategory === category.id
//                                     ? 'bg-[#007c94] cursor-pointer text-white shadow-lg transform scale-105'
//                                     : 'bg-white text-gray-700 cursor-pointer hover:bg-gray-100 shadow-md'
//                             }`}
//               aria-pressed={c === category}
//             >
//               {CATEGORY_BN[c] || c}
//             </button>
//           ))}
//         </div>

//         {/* GRID */}
//         <div style={styles.grid}>
//           {filtered.map((img) => {
//             const isHover = hoveredId === img.id;
//             return (
//               <div
//                 key={img.id}
//                 style={
//                   isHover ? { ...styles.card, ...styles.cardHover } : styles.card
//                 }
//                 onMouseEnter={() => setHoveredId(img.id)}
//                 onMouseLeave={() => setHoveredId(null)}
//               >
//                 <button
//                   onClick={() => openImage(img)}
//                   style={{
//                     border: "none",
//                     padding: 0,
//                     display: "block",
//                     background: "transparent",
//                     width: "100%",
//                     textAlign: "left",
//                     cursor: "pointer",
//                   }}
//                   aria-label={`বড় করে দেখুন: ${img.title}`}
//                 >
//                   <img
//                     src={img.url}
//                     alt={img.title}
//                     style={styles.img}
//                     loading="lazy"
//                     draggable={false}
//                   />
//                   <div style={styles.textBox}>
//                     <strong>{img.title}</strong>
//                     <div style={{ marginTop: 6, color: "#666" }}>
//                       {CATEGORY_BN[img.category] || img.category}
//                     </div>
//                   </div>
//                 </button>
//               </div>
//             );
//           })}
//         </div>

//         <div style={{ marginTop: 18, color: "#555" }}>মোট ছবি: {filtered.length}</div>
//       </div>

//       {/* LIGHTBOX */}
//       {selected && (
//         <div
//           role="dialog"
//           aria-modal="true"
//           style={styles.overlay}
//           onClick={(e) => {
//             if (e.target === e.currentTarget) closeImage();
//           }}
//         >
//           <div style={styles.lightboxInner}>
//             <img
//               src={selected.url}
//               alt={selected.title}
//               style={styles.lightboxImg}
//             />
//             <div style={{ marginTop: 8, color: "#fff", textAlign: "center" }}>
//               <div style={{ fontWeight: 600 }}>{selected.title}</div>
//               <div style={{ marginTop: 6 }}>
//                 {CATEGORY_BN[selected.category] || selected.category}
//               </div>
//             </div>
//             <button
//               style={styles.closeBtn}
//               onClick={closeImage}
//               aria-label="বন্ধ করুন"
//             >
//               বন্ধ
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }




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
            image: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800&q=80',
            description: 'মেঘের রাজ্যে হারিয়ে যাওয়ার অনুভূতি'
        },
        {
            id: 3,
            title: 'সুন্দরবন বন',
            location: 'খুলনা',
            category: 'nature',
            image: 'https://images.unsplash.com/photo-1511497584788-876760111969?w=800&q=80',
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
            image: 'https://images.unsplash.com/photo-1563789031959-4c02bcb41319?w=800&q=80',
            description: 'সবুজ চা বাগানের মনোমুগ্ধকর দৃশ্য'
        },
        {
            id: 6,
            title: 'বান্দরবান পাহাড়',
            location: 'বান্দরবান',
            category: 'mountain',
            image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
            description: 'পাহাড়ি উপত্যকার প্রাকৃতিক সৌন্দর্য'
        },
        {
            id: 7,
            title: 'উপজাতীয় সংস্কৃতি',
            location: 'রাঙামাটি',
            category: 'culture',
            image: 'https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=800&q=80',
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
            image: 'https://images.unsplash.com/photo-1535338454770-e32b47f0c5ca?w=800&q=80',
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
            image: 'https://images.unsplash.com/photo-1560089000-7433a4ebbd64?w=800&q=80',
            description: 'বাংলার ঐতিহ্যবাহী নৌকা'
        },
        {
            id: 12,
            title: 'পাহাড়পুর বৌদ্ধবিহার',
            location: 'নওগাঁ',
            category: 'culture',
            image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80',
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