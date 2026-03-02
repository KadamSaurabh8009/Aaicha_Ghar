import React from 'react';
import { Award, Target, Eye, MessageCircle } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Aai Cha Ghar</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            A sanctuary of hope and opportunity for intellectually disabled children in Latur
          </p>
        </div>
      </section>

      {/* Organization Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Organization</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                “Aai Cha Ghar,” operated by Shri Gajanan Bahuddeshiya Sanstha, Bori, under the Divyang Welfare Department, Zilla Parishad Latur, runs Sant Gadgebaba Orphan Home for Intellectually Disabled Children in Latur. The home is approved for 100 orphaned intellectually disabled children, with 95 currently residing there. Children are admitted through orders of the Honorable Child Welfare Committee from various parts of Maharashtra, including Pune and Mumbai. The institution provides complete care, nourishment, education, and rehabilitation. Children below 18 years receive special education under the certified DISHA Abhiyan curriculum of the Divyang Welfare Commissionerate, while those above 18 years are provided structured vocational training by qualified and trained special educators.

The vocational programs focus on rehabilitation and self-reliance, teaching skills such as Ganpati idol making, decorative lantern and Diwali lamp making, slipper making, and office file production. For the past 8–9 years, children have been crafting and painting Ganpati idols, which are sold through stalls in Latur city, with the proceeds used entirely for their welfare. The institution functions under the valuable guidance of Founder President Shri Annasaheb Nilkanthrao Kadam and remains committed to empowering children to stand independently and lead dignified lives.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We are proud to be officially recognized and supported by the Divyang Welfare Department 
                and Zilla Parishad Latur, which validates our commitment to maintaining the highest 
                standards of care and service delivery.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Recognition & Support</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Award className="h-6 w-6 text-blue-600 mr-3" />
                  <span className="text-gray-700">Divyang Welfare Department Recognition</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-6 w-6 text-blue-600 mr-3" />
                  <span className="text-gray-700">Zilla Parishad Latur Approval</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-6 w-6 text-blue-600 mr-3" />
                  <span className="text-gray-700">Under Shri Gajanan Multipurpose Organization</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Our Mission & Vision
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To provide comprehensive care, specialized education, and vocational training to intellectually 
                disabled children, empowering them to achieve their maximum potential and lead dignified, 
                independent lives. We strive to create an inclusive environment that nurtures their physical, 
                emotional, and intellectual development while preparing them for meaningful participation in society.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <Eye className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To be a leading institution in Maharashtra that transforms the lives of intellectually disabled 
                children through innovative care practices, quality education, and sustainable vocational training. 
                We envision a society where every special child has equal opportunities to grow, learn, and 
                contribute meaningfully to their communities with dignity and respect.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Message */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 lg:p-12">
            <div className="text-center mb-8">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="h-10 w-10 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Founder's Message</h2>
              <h3 className="text-xl font-semibold text-blue-600 mb-6">
                Shri Annasaheb Nilkanthrao Kadam
              </h3>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <blockquote className="text-lg text-gray-700 leading-relaxed italic text-center">
                When we established Aai Cha Ghar, our vision was simple yet profound — to create a home away from home for children who needed special care and attention. Every child, regardless of their abilities, deserves love, education, and the opportunity to realize their potential. Our mission also focuses on the rehabilitation of every child, helping them develop life skills, confidence, and independence so they can lead dignified and self-reliant lives in society.
                <br /><br />
                Over the years, we have witnessed incredible transformations in our children. Through dedicated 
                care, specialized education, and vocational training, we have seen them develop skills that not 
                only make them self-reliant but also valuable contributors to society. Our children create 
                beautiful Ganpati idols, decorative lanterns, and other handicrafts that bring joy to our 
                community during festivals.
                <br /><br />
                This institution stands as a testament to what can be achieved when compassion meets action. 
                We are grateful to the Divyang Welfare Department, Zilla Parishad Latur, and all our supporters 
                who have made this journey possible. Together, we continue to build a brighter future for our 
                special children."
              </blockquote>
              <div className="text-center mt-8">
                <div className="text-lg font-semibold text-gray-800">Shri Annasaheb Nilkanthrao Kadam</div>
                <div className="text-gray-600">Founder & President</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These fundamental principles guide our approach to caring for and educating our children.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">❤️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Compassion</h3>
              <p className="text-gray-600">Treating every child with love, understanding, and dignity</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌟</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Excellence</h3>
              <p className="text-gray-600">Maintaining the highest standards in care and education</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Inclusion</h3>
              <p className="text-gray-600">Creating an environment where every child belongs</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💪</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Empowerment</h3>
              <p className="text-gray-600">Building confidence and independence in our children</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;