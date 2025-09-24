import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, GraduationCap, Heart, Award } from 'lucide-react';


const Home = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      
     <section className="relative bg-[url('/school.jpeg')] bg-cover bg-center text-white h-screen">

        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <div className=" bg-opacity-55 p-6 rounded-lg w-full">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Aai Cha Ghar
            </h1>
            <p className="text-xl md:text-2xl mb-4 font-medium opacity-90">
              Sant Gadgebaba Anath Matimanda Mulanche Balgruha
            </p>
            <p className="text-lg md:text-xl mb-8 opacity-80 max-w-3xl mx-auto">
              Nurturing minds, building futures, and creating opportunities for special children in Latur through education, care, and vocational training.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Support Our Mission
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              About Our Organization
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Established under the Shri Gajanan Bahauuddeshiya Sanstha, Aai Cha Ghar is a recognized institution 
              dedicated to the care, education, and rehabilitation of intellectually disabled children. We are proudly 
              recognized by the Divyang Welfare Department and Zilla Parishad Latur.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Special Care</h3>
              <p className="text-gray-600">Comprehensive care and nurturing for intellectually disabled children</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Education</h3>
              <p className="text-gray-600">Specialized education programs tailored for different age groups</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Vocational Training</h3>
              <p className="text-gray-600">Skill development programs for self-reliance and independence</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Recognition</h3>
              <p className="text-gray-600">Officially recognized by government welfare departments</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Explore Our Work
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover how we're making a difference in the lives of special children through our various programs and initiatives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link
              to="/about"
              className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
                About Us
              </h3>
              <p className="text-gray-600 mb-4">
                Learn about our mission, vision, and the dedicated team behind our organization.
              </p>
              <span className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-700">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
              </span>
            </Link>

            <Link
              to="/our-work"
              className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
                Our Work
              </h3>
              <p className="text-gray-600 mb-4">
                Explore our comprehensive programs including special education, care, and support services.
              </p>
              <span className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-700">
                Discover More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
              </span>
            </Link>

            <Link
              to="/vocational-training"
              className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
                Vocational Training
              </h3>
              <p className="text-gray-600 mb-4">
                Discover our skill development programs that prepare children for independent living.
              </p>
              <span className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-700">
                View Programs
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Us in Making a Difference
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Your support can help us continue providing quality care, education, and opportunities for special children.
          </p>
          <div className="space-x-4">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Get In Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;