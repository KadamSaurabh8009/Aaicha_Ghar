import React from 'react';
import { MapPin, Phone, Mail, Clock, Users, Heart, Instagram, Facebook } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Get in touch with us to learn more about our work or to support our mission
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-teal-100 p-3 rounded-full mr-4 mt-1">
                    <MapPin className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Address</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Aai Cha Ghar - Sant Gadgebaba Orphanage<br />
                      Vasant Vihar, Opposite Nrusingh Mandir<br />
                      New Katpur Road<br />
                      Latur, Maharashtra, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-teal-100 p-3 rounded-full mr-4 mt-1">
                    <Instagram className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Follow Us</h3>
                
                    <div className="space-y-2">
                      <a
                        href="https://www.instagram.com/santgadgebabaorphan_home_latur?utm_source=qr&igsh=MWt5N2wyY2NsZTNlaw=="
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-600 hover:text-pink-600 transition-colors duration-200"
                      >
                        <Instagram className="h-5 w-5" />
                        Instagram
                      </a>
                
                      <a
                        href="https://www.facebook.com/santgadgebaba121"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
                      >
                        <Facebook className="h-5 w-5" />
                        Facebook
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-teal-100 p-3 rounded-full mr-4 mt-1">
                    <Mail className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Email</h3>
                    <p className="text-gray-600">
                      <a href="sgbammblatur@gmail.com" className="hover:text-teal-600 transition-colors duration-200">
                        sgbammblatur@gmail.com
                      </a>
                    </p>
                    <p className="text-sm text-gray-500 mt-1">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-teal-100 p-3 rounded-full mr-4 mt-1">
                    <Clock className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Visiting Hours</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>24/7</p>
                      {/* <p>Saturday: 10:00 AM - 3:00 PM</p>
                      <p>Sunday: By appointment only</p> */}
                    </div>
                    <p className="text-sm text-gray-500 mt-2">Please call ahead to schedule your visit</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="visit">Schedule a Visit</option>
                    <option value="volunteer">Volunteer Opportunities</option>
                    <option value="donation">Donations & Support</option>
                    <option value="partnership">Partnership</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                    placeholder="Please share your message or inquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-teal-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-teal-700 transition-colors duration-200 flex items-center justify-center"
                >
                  Send Message
                  <Mail className="ml-2 h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Find Us</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Located in the heart of Latur, our facility is easily accessible and welcomes visitors during designated hours.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="h-96 bg-gray-200 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-teal-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Interactive Map</h3>
                <p className="text-gray-600 mb-4">
                  Vasant Vihar, Opposite Nrusingh Mandir<br />
                  New Katpur Road, Latur
                </p>
                <a
                  href="https://www.google.com/maps/place/%E0%A4%B8%E0%A4%82%E0%A4%A4+%E0%A4%97%E0%A4%BE%E0%A4%A1%E0%A4%97%E0%A5%87%E0%A4%AC%E0%A4%BE%E0%A4%AC%E0%A4%BE+%E0%A4%85%E0%A4%A8%E0%A4%BE%E0%A4%A5+%E0%A4%AE%E0%A4%A4%E0%A4%BF%E0%A4%AE%E0%A4%82%E0%A4%A6+%E0%A4%AE%E0%A5%81%E0%A4%B2%E0%A4%BE%E0%A4%82%E0%A4%9A%E0%A5%87+%E0%A4%AC%E0%A4%BE%E0%A4%B2%E0%A4%97%E0%A5%83%E0%A4%B9,+%E0%A4%B2%E0%A4%BE%E0%A4%A4%E0%A5%82%E0%A4%B0/@18.3726926,76.5874876,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcf837fc8525afb:0xf6356a4e6d0a5976!8m2!3d18.3726875!4d76.5900625!16s%2Fg%2F11t090yq7m?entry=tts&g_ep=EgoyMDI1MDkyMi4wIPu8ASoASAFQAw%3D%3D&skid=06a36d5b-fd19-4585-98cf-639d80384b9a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors duration-200"
                >
                  View on Google Maps
                  <MapPin className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Ways to Support Us</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              There are many ways you can help us continue our mission of caring for and educating special children.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Volunteer</h3>
              <p className="text-gray-600 mb-6">
                Join our team of volunteers and contribute your time and skills to help our children grow and learn.
              </p>
              <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200">
                Learn More →
              </button>
            </div>

            <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Donate</h3>
              <p className="text-gray-600 mb-6">
                Your financial support helps us provide better facilities, education, and care for our children.
              </p>
              <button className="text-green-600 font-semibold hover:text-green-700 transition-colors duration-200">
                Donate Now →
              </button>
            </div>

            <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Partner</h3>
              <p className="text-gray-600 mb-6">
                Collaborate with us through corporate partnerships, sponsorships, or community initiatives.
              </p>
              <button className="text-orange-600 font-semibold hover:text-orange-700 transition-colors duration-200">
                Partner With Us →
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;