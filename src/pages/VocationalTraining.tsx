import React from 'react';
import { Hammer, Lightbulb, FlameKindling, Footprints, FileText, Award } from 'lucide-react';

const VocationalTraining = () => {
  return (
    <div className="bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Vocational Training</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Empowering intellectually disabled children through skill development and rehabilitation programs
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Building Skills for Independence
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Our vocational training program is designed to provide intellectually disabled children above 18 years 
            with practical skills that promote self-reliance, boost confidence, and prepare them for meaningful 
            participation in their communities. Through hands-on learning and professional guidance, we help our 
            children develop marketable skills while preserving traditional crafts.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Rehabilitation</h3>
              <p className="text-gray-600">Structured programs that build confidence and life skills</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Self-Reliance</h3>
              <p className="text-gray-600">Developing independence through practical skill training</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💼</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Professional Skills</h3>
              <p className="text-gray-600">Market-ready skills for sustainable livelihoods</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ganpati Idol Making */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-red-100 p-4 rounded-full mr-4">
                  <Hammer className="h-8 w-8 text-red-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Ganpati Idol Making</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our flagship program teaches the traditional art of Ganpati idol making, combining cultural 
                heritage with practical skills. Children learn clay modeling, sculpting techniques, and 
                artistic decoration methods that allow them to create beautiful idols for festivals and 
                commercial purposes.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-4"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Clay Preparation & Molding</h4>
                    <p className="text-gray-600">Learning to prepare eco-friendly clay and basic molding techniques</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-4"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Sculpting & Detailing</h4>
                    <p className="text-gray-600">Advanced techniques for creating detailed features and expressions</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-4"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Painting & Decoration</h4>
                    <p className="text-gray-600">Artistic finishing with colors, ornaments, and traditional designs</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-4"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Marketing & Sales</h4>
                    <p className="text-gray-600">Business skills for selling idols during festival seasons</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[url('https://www.konkan.me/wp-content/uploads/2024/01/Manache-5-Ganpati-Temples.jpg')] bg-cover bg-center p-8 rounded-2xl shadow-lg">
              <div className='bg-white bg-opacity-55 p-6 rounded-lg mb-6'>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Program Highlights</h3>
              <div className="space-y-4">
                <div className="bg-red-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <span className="text-red-600 text-2xl mr-2">🎨</span>
                    <h4 className="font-semibold text-gray-800">Traditional Art Preservation</h4>
                  </div>
                  <p className="text-gray-600 text-sm">Keeping alive the ancient craft of idol making</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <span className="text-red-600 text-2xl mr-2">🌱</span>
                    <h4 className="font-semibold text-gray-800">Eco-Friendly Approach</h4>
                  </div>
                  <p className="text-gray-600 text-sm">Using natural clay and biodegradable materials</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <span className="text-red-600 text-2xl mr-2">💰</span>
                    <h4 className="font-semibold text-gray-800">Income Generation</h4>
                  </div>
                  <p className="text-gray-600 text-sm">Seasonal business opportunity during festivals</p>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Lanterns */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <div className="flex items-center mb-6">
                <div className="bg-yellow-100 p-4 rounded-full mr-4">
                  <Lightbulb className="h-8 w-8 text-yellow-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Decorative Lanterns (Akash Kandil)</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Children learn to create beautiful Akash Kandil (decorative lanterns) used during various 
                festivals and celebrations. This training combines creativity with practical skills, teaching 
                them to work with different materials and create stunning decorative pieces.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 mr-4"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Design & Planning</h4>
                    <p className="text-gray-600">Learning to create unique designs and plan construction</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 mr-4"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Material Handling</h4>
                    <p className="text-gray-600">Working with bamboo, paper, fabric, and decorative elements</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 mr-4"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Assembly Techniques</h4>
                    <p className="text-gray-600">Proper construction methods for durable and beautiful lanterns</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:order-1 bg-[url('https://t4.ftcdn.net/jpg/04/66/52/01/360_F_466520126_xEjKqQfw9vM1RcKmDsZa6mQ5UH7AeCCX.jpg')] bg-cover bg-center rounded-2xl">
            <div className='bg-white bg-opacity-55 p-6 rounded-lg m-8'>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Lantern Types</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border-l-4 border-yellow-500">
                  <h4 className="font-semibold text-gray-800 mb-2">🏮 Traditional Round Lanterns</h4>
                  <p className="text-gray-600 text-sm">Classic spherical designs for Diwali and Gudi Padwa</p>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-4 border-orange-500">
                  <h4 className="font-semibold text-gray-800 mb-2">⭐ Star-Shaped Kandils</h4>
                  <p className="text-gray-600 text-sm">Multi-pointed decorative pieces for special occasions</p>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
                  <h4 className="font-semibold text-gray-800 mb-2">🌸 Floral Pattern Lanterns</h4>
                  <p className="text-gray-600 text-sm">Nature-inspired designs with intricate patterns</p>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-4 border-purple-500">
                  <h4 className="font-semibold text-gray-800 mb-2">🎊 Custom Celebration Pieces</h4>
                  <p className="text-gray-600 text-sm">Personalized lanterns for weddings and events</p>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diwali Diyas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-amber-100 p-4 rounded-full mr-4">
                  <FlameKindling className="h-8 w-8 text-amber-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Diwali Diyas</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                The art of making traditional earthen lamps (diyas) is an integral part of Indian culture. 
                Our children learn this ancient craft, creating beautiful oil lamps that are in high demand 
                during Diwali and other festivals, providing them with a sustainable source of income.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">🏺 Clay Preparation</h4>
                    <p className="text-gray-600 text-sm">Learning to work with different types of clay</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">🔥 Firing Techniques</h4>
                    <p className="text-gray-600 text-sm">Traditional kiln firing and modern methods</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">🎨 Decorative Patterns</h4>
                    <p className="text-gray-600 text-sm">Creating beautiful designs and patterns</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">📦 Packaging & Sales</h4>
                    <p className="text-gray-600 text-sm">Professional presentation and marketing</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 bg-[url('https://www.bombaygreens.com/cdn/shop/articles/Diwali_24_Blog-05.png?v=1741870697')]   rounded-2xl shadow-lg">
              <div className='bg-white bg-opacity-90 bg-opacity-65 p-6 rounded-lg mb-6'>
              <h3 className=" text-2xl font-semibold text-gray-800 mb-6">Production Statistics</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-black mb-2">5000+</div>
                  <div className="text-gray-600 text-sm">Diyas Made Annually</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-black mb-2">15</div>
                  <div className="text-gray-600 text-sm">Different Designs</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-black mb-2">100%</div>
                  <div className="text-gray-600 text-sm">Eco-Friendly</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-black mb-2">₹50K+</div>
                  <div className="text-gray-600 text-sm">Annual Revenue</div>
                </div>
              </div>
              </div>
              <div className="mt-6 p-4 bg-amber-50 rounded-lg">
                <p className="text-amber-800 text-center italic">
                  "Our diyas bring light and joy to thousands of homes during festivals"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slipper Making */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-4 rounded-full mr-4">
                  <Footprints className="h-8 w-8 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Slipper Making</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our practical footwear manufacturing program teaches children to create comfortable and 
                durable slippers using various materials. This skill provides them with knowledge of basic 
                manufacturing processes and creates opportunities for regular income generation.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Pattern Making</h4>
                    <p className="text-gray-600">Creating templates for different sizes and styles</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Material Selection</h4>
                    <p className="text-gray-600">Understanding different materials and their properties</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Assembly Process</h4>
                    <p className="text-gray-600">Step-by-step manufacturing and quality control</p>
                  </div>
                </div>
              </div>
            </div>
<div
  className="lg:order-1 bg-cover bg-center p-8 rounded-2xl"
  style={{ backgroundImage: "url('/slipper_making.jpg')" }}
>              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Product Range</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">👡 Basic Rubber Slippers</h4>
                  <p className="text-gray-600 text-sm">Everyday comfortable footwear for all ages</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">🌺 Decorative Chappals</h4>
                  <p className="text-gray-600 text-sm">Fashion footwear with traditional designs</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">👶 Children's Footwear</h4>
                  <p className="text-gray-600 text-sm">Colorful and comfortable shoes for kids</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">🏥 Medical Slippers</h4>
                  <p className="text-gray-600 text-sm">Specialized footwear for healthcare needs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office File Making */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-green-100 p-4 rounded-full mr-4">
                  <FileText className="h-8 w-8 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Office File Making</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                This program teaches children to create professional office files, folders, and stationery 
                items. The skills acquired help them understand basic business needs and provide opportunities 
                for consistent income through bulk orders from offices and educational institutions.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-4"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Paper Handling & Cutting</h4>
                    <p className="text-gray-600">Precision cutting and paper preparation techniques</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-4"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Binding & Assembly</h4>
                    <p className="text-gray-600">Various binding methods and professional assembly</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-4"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Quality Standards</h4>
                    <p className="text-gray-600">Meeting commercial quality requirements</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-4"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Bulk Production</h4>
                    <p className="text-gray-600">Efficient methods for large order fulfillment</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[url('https://tiimg.tistatic.com/fp/1/007/678/hard-wood-material-box-type-office-files--466.jpg')] bg-cover bg-center p-8 rounded-2xl shadow-lg">
            <div className='bg-blue-400 bg-opacity-55 p-6 rounded-lg m-8'>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Product Catalog</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-green-50 p-3 rounded-lg text-center">
                  <div className="text-2xl mb-2">📁</div>
                  <div className="text-sm font-semibold text-gray-800">File Folders</div>
                </div>
                <div className="bg-green-50 p-3 rounded-lg text-center">
                  <div className="text-2xl mb-2">📋</div>
                  <div className="text-sm font-semibold text-gray-800">Clipboards</div>
                </div>
                <div className="bg-green-50 p-3 rounded-lg text-center">
                  <div className="text-2xl mb-2">📚</div>
                  <div className="text-sm font-semibold text-gray-800">Notebooks</div>
                </div>
                <div className="bg-green-50 p-3 rounded-lg text-center">
                  <div className="text-2xl mb-2">📄</div>
                  <div className="text-sm font-semibold text-gray-800">Document Sleeves</div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Regular Clients</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Government Offices</li>
                  <li>• Schools & Colleges</li>
                  <li>• Private Companies</li>
                  <li>• NGOs & Organizations</li>
                </ul>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default VocationalTraining;