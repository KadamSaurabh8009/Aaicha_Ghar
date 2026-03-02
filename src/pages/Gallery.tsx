import React, { useState } from 'react';
import { Image, Camera, Users, GraduationCap, Lightbulb, FlameKindling } from 'lucide-react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Images', icon: Image },
    { id: 'videos', label: 'Videos', icon: Camera },
    { id: 'activities', label: 'Children Activities', icon: Users },
    { id: 'training', label: 'Vocational Training', icon: GraduationCap },
    { id: 'ganpati', label: 'Ganpati Stalls', icon: Camera },
    { id: 'lanterns', label: 'Diwali Lanterns', icon: Lightbulb },
    { id: 'events', label: 'Special Events', icon: FlameKindling },
    
  ];

  const galleryItems = [
    {
      id: 1,
      category: 'activities',
      title: 'Children in Art Class',
      caption: 'Our children learning painting and drawing skills with dedicated art teachers',
      placeholder: '/1.jpeg'
    },
    {
      id: 2,
      category: 'training',
      title: 'Clay Modeling Session',
      caption: 'Children practicing clay molding techniques for Ganpati idol making',
      placeholder: '/2.jpeg'
    },
    {
      id: 3,
      category: 'ganpati',
      title: 'Ganpati Idol ',
      caption: 'Handcrafted Ganpati idols made with love by our talented children ',
      placeholder: '/ganpati_idol_exhibition.jpeg'
    },
    {
      id: 4,
      category: 'activities',
      title: 'Group Learning Session',
      caption: 'Interactive learning session with special educators focusing on life skills',
      placeholder: '/gp_learning.jpeg'
    },
    {
      id: 5,
      category: 'lanterns',
      title: 'Colorful Akash Kandil',
      caption: 'Vibrant decorative lanterns handcrafted by our vocational training students',
      placeholder: '/3.jpeg'
    },
    {
      id: 6,
      category: 'training',
      title: 'Slipper Making Workshop',
      caption: 'Students learning practical skills in our footwear manufacturing program',
      placeholder: '/slipper.jpeg'
    },
    {
      id: 7,
      category: 'events',
      title: 'Annual Day Celebration',
      caption: 'Children performing cultural programs during our annual day celebration',
      placeholder: '/annual_day.jpeg'
    },
    {
      id: 8,
      category: 'ganpati',
      title: 'Ganpati Market Stall',
      caption: 'Our children proudly selling their handmade Ganpati idols at the local market',
      placeholder: '/ganpati_stall.jpeg'
    },
    {
      id: 9,
      category: 'activities',
      title: 'Tree Plantation',
      caption: 'Children planting trees and growing a love for nature and sustainability.',
      placeholder: '/tree_plantation.jpeg'
    },
    {
      id: 10,
      category: 'training',
      title: 'File Making Workshop',
      caption: 'Students creating office files and folders in our practical skills training program',
      placeholder: '/file_making.jpeg'
    },
    {
      id: 11,
      category: 'lanterns',
      title: 'Diwali Preparation',
      caption: 'Children preparing beautiful diyas and lanterns for Diwali celebrations',
      placeholder: '/diya.jpeg'
    },
    {
      id: 12,
      category: 'events',
      title: 'Recognition Ceremony',
      caption: 'Award ceremony recognizing the achievements of our students and their progress',
      placeholder: '/recognition.jpeg'
    },
    {
     id: 13,
     category: 'videos', // 👈 choose which category you want it under
     title: 'Ganpati Celebration',
     caption: 'Where devotion meets happiness — Ganpati Celebration at Aai Cha Ghar',
     placeholder: '/ganpati_celeberation.mp4',
     type: 'video'
    },
    {
     id: 14,
     category: 'videos', // 👈 choose which category you want it under
     title: 'Complete School Video',
     caption: 'A space designed for learning, development, and holistic growth.',
     placeholder: '/school_vdo.mp4',
     type: 'video'
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Gallery</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Capturing moments of joy, learning, and achievement at Aai Cha Ghar
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Explore Our Journey</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Browse through our collection of images showcasing the various activities, training programs, and achievements of our children.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-purple-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-purple-50 hover:text-purple-600 shadow-md'
                  }`}
                >
                  <IconComponent className="h-5 w-5 mr-2" />
                  {category.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div key={item.id} className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-64 bg-gray-200 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {item.type === 'video' ? (
                    <div
                      className="relative w-full h-full cursor-pointer"
                      onClick={() => setSelectedVideo(item.placeholder)}
                    >
                      <video className="w-full h-full object-cover">
                        <source src={item.placeholder} type="video/mp4" />
                      </video>
                  
                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                        <span className="text-white text-4xl">▶</span>
                      </div>
                    </div>
                  ) : (
                    <img
                      src={item.placeholder}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                  )}
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Impact in Numbers</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">150+</div>
              <div className="text-gray-600">Children Served</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">1000+</div>
              <div className="text-gray-600">Training Hours</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="h-8 w-8 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">50+</div>
              <div className="text-gray-600">Events Organized</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FlameKindling className="h-8 w-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">100+</div>
              <div className="text-gray-600">Success Stories</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Be Part of Our Story
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Your support helps us create more moments of joy and achievement for our children. Join us in making a difference.
          </p>
          <div className="space-x-4">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Visit Our Center
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors duration-200">
              Support Us
            </button>
          </div>
        </div>
      </section>
      {/* Video Modal */}
{selectedVideo && (
  <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">

    <button
      onClick={() => setSelectedVideo(null)}
      className="absolute top-6 right-6 text-white text-3xl"
    >
      ✕
    </button>

    <video
      src={selectedVideo}
      controls
      autoPlay
      className="max-h-[90%] max-w-[90%] rounded-lg"
    />

  </div>
)}
    </div>
    
  );
  
};

export default Gallery;
