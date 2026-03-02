import React from 'react';
import { BookOpen, Utensils, Users, Palette } from 'lucide-react';

const OurWork = () => {
  return (
    <div className="bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Work</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Comprehensive programs designed to nurture, educate, and empower intellectually disabled children
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Transforming Lives Through Dedicated Care
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            At Aai Cha Ghar, we provide holistic support to intellectually disabled children through carefully 
            structured programs that address their educational, nutritional, emotional, and developmental needs. 
            Our multi-faceted approach ensures every child receives personalized care and attention.
          </p>
        </div>
      </section>

      {/* Special Education Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-4 rounded-full mr-4">
                  <BookOpen className="h-8 w-8 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Special Education for Children Below 18 Years</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our specialized education program is carefully designed for children under 18 years, focusing on 
                individual learning needs and capabilities. We employ innovative teaching methodologies that make 
                learning accessible and enjoyable for children with intellectual disabilities.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Individualized Learning Plans</h4>
                    <p className="text-gray-600">Customized curriculum based on each child's learning pace and abilities</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Interactive Learning Methods</h4>
                    <p className="text-gray-600">Use of visual aids, hands-on activities, and sensory learning techniques</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Life Skills Development</h4>
                    <p className="text-gray-600">Focus on essential daily living skills and social interaction</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Education Highlights</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">100</div>
                  <div className="text-gray-600">Sanctioned capacity of children</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">96</div>
                  <div className="text-gray-600">Admitted students</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">4</div>
                  <div className="text-gray-600">Vacant Admissions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vocational Training Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <div className="flex items-center mb-6">
                <div className="bg-orange-100 p-4 rounded-full mr-4">
                  <Users className="h-8 w-8 text-orange-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Vocational Training for Children Above 18 Years</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our vocational training program prepares young adults for independent living and meaningful 
                employment. We focus on developing practical skills that enable them to contribute to their 
                communities and achieve financial independence.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-4"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Skill-Based Training</h4>
                    <p className="text-gray-600">Hands-on training in various crafts and practical skills</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-4"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Market-Ready Products</h4>
                    <p className="text-gray-600">Training focuses on creating products with commercial value</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-4"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Independence Building</h4>
                    <p className="text-gray-600">Emphasis on self-reliance and entrepreneurial skills</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:order-1 bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Training Programs</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">🎭 Ganpati Idol Making</h4>
                  <p className="text-gray-600 text-sm">Traditional clay modeling and artistic decoration</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">🏮 Decorative Lanterns</h4>
                  <p className="text-gray-600 text-sm">Colorful Akash Kandil crafting for festivals</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">🪔 Diwali Diyas</h4>
                  <p className="text-gray-600 text-sm">Traditional earthen lamp making and decoration</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">👡 Slipper Making</h4>
                  <p className="text-gray-600 text-sm">Practical footwear manufacturing skills</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">📑 Office File Making</h4>
                  <p className="text-gray-600 text-sm">Students creating office files and folders in our practical skills training program</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">🧼 Diwali Utne Making</h4>
                  <p className="text-gray-600 text-sm">Students preparing traditional Diwali Utne with dedication and joy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Care & Nutrition Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-green-100 p-4 rounded-full mr-4">
                  <Utensils className="h-8 w-8 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Care, Nutrition & Upbringing</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We provide comprehensive care that goes beyond education to ensure the physical, emotional, 
                and social well-being of our children. Our holistic approach creates a nurturing environment 
                that supports their overall development.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">🍽️ Nutritious Meals</h4>
                    <p className="text-gray-600 text-sm">Balanced diet planned by qualified nutritionists</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">🏠 Residential Care</h4>
                    <p className="text-gray-600 text-sm">Safe and comfortable living facilities</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">🏥 Medical Support</h4>
                    <p className="text-gray-600 text-sm">Regular health check-ups and medical care</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">💝 Emotional Support</h4>
                    <p className="text-gray-600 text-sm">Counseling and psychological well-being</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Daily Care Schedule</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Morning Activities</span>
                  <span className="font-semibold text-gray-800">6:00 - 9:00 AM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Education Sessions</span>
                  <span className="font-semibold text-gray-800">9:00 - 12:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Lunch & Rest</span>
                  <span className="font-semibold text-gray-800">12:00 - 2:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Vocational Training</span>
                  <span className="font-semibold text-gray-800">2:00 - 5:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600">Recreation & Dinner</span>
                  <span className="font-semibold text-gray-800">5:00 - 8:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Staff Support Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <div className="flex items-center mb-6">
                <div className="bg-purple-100 p-4 rounded-full mr-4">
                  <Palette className="h-8 w-8 text-purple-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Support from Trained Special Educators & Art Teachers</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our team of dedicated professionals brings specialized knowledge and compassionate care to 
                every aspect of our children's development. Each staff member is carefully selected and 
                continuously trained to provide the best possible support.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-4"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Certified Special Educators</h4>
                    <p className="text-gray-600">Professionals with specialized training in intellectual disability education</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-4"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Skilled Art Teachers</h4>
                    <p className="text-gray-600">Creative professionals who teach various arts and crafts</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-4"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Continuous Training</h4>
                    <p className="text-gray-600">Regular workshops to update skills and teaching methods</p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurWork;