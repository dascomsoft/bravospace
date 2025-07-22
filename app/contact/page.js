


'use client'

import { useState, useEffect } from 'react';
import { FaPhoneAlt, FaBars, FaChevronRight, FaQuoteLeft, FaStar, FaStarHalfAlt, FaMapMarkerAlt, FaEnvelope, FaClock, FaPaperPlane, FaPaintRoller, FaBath, FaDoorOpen, FaPaintBrush, FaProjectDiagram, FaLightbulb, FaTools, FaUsers, FaClipboardCheck, FaCheckCircle, FaArchway } from 'react-icons/fa';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will contact you shortly.');
        e.target.reset();
    };

    return (
        <div>

            {/* Contact Section */}
            <section id="contact" className="pt-40 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
                        <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
                        <p className="text-gray-600 max-w-2xl mx-auto">We will love to hear about your project. Get in touch with us using the form below or contact us directly.</p>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-12">
                        <div className="lg:w-1/2" data-aos="fade-right">
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
                                        <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Your name" required />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                                        <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Your email" required />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                                    <input type="tel" id="phone" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Your phone number" required />
                                </div>
                                <div>
                                    <label htmlFor="service" className="block text-gray-700 font-medium mb-2">Service Interested In</label>
                                    <select id="service" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                        <option value="">Select a service</option>
                                        <option value="ceiling">Ceiling Designs</option>
                                        <option value="tiling">Bathroom Tiling</option>
                                        <option value="painting">Interior/Exterior Painting</option>
                                        <option value="doors">Handmade Doors</option>
                                        <option value="rhinolite">Rhinolite Application</option>
                                        <option value="other">Other Construction</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Project Details</label>
                                    <textarea id="message" rows="5" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Tell us about your project"></textarea>
                                </div>
                                <div>
                                    <button type="submit" className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold transition duration-300">
                                        Submit Request
                                    </button>
                                </div>
                            </form>
                        </div>

                        <div className="lg:w-1/2" data-aos="fade-left">
                            <div className="bg-gray-50 p-8 rounded-lg shadow-md h-full">
                                <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>

                                <div className="space-y-6">
                                    <div className="flex items-start">
                                        <div className="bg-blue-100 p-3 rounded-full mr-4">
                                            <FaMapMarkerAlt className="text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-800 mb-1">Our Address</h4>
                                            <p className="text-gray-600">123 Construction Street<br />Johannesburg, 2000<br />South Africa</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="bg-blue-100 p-3 rounded-full mr-4">
                                            <FaPhoneAlt className="text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-800 mb-1">Phone Numbers</h4>
                                            <p className="text-gray-600 mb-1">Main: +27 11 123 4567</p>
                                            <p className="text-gray-600">Mobile: +27 82 123 4567</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="bg-blue-100 p-3 rounded-full mr-4">
                                            <FaEnvelope className="text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-800 mb-1">Email Address</h4>
                                            <p className="text-gray-600">info@bravospace294.co.za</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="bg-blue-100 p-3 rounded-full mr-4">
                                            <FaClock className="text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-800 mb-1">Working Hours</h4>
                                            <p className="text-gray-600">Monday - Friday: 8:00 AM - 5:00 PM</p>
                                            <p className="text-gray-600">Saturday: 8:00 AM - 1:00 PM</p>
                                            <p className="text-gray-600">Sunday: Closed</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <h4 className="font-semibold text-gray-800 mb-4">Follow Us</h4>
                                    <div className="flex space-x-4">
                                        <Link href="#" className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition">
                                            <FaFacebookF />
                                        </Link>
                                        <Link href="#" className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition">
                                            <FaInstagram />
                                        </Link>
                                        <Link href="#" className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition">
                                            <FaLinkedinIn />
                                        </Link>
                                        <Link href="#" className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition">
                                            <FaTwitter />
                                        </Link>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
                 <div className="mt-[10rem] mb-0 h-[30rem]  overflow-hidden">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.1927248984847!2d28.04346161502925!3d-26.19367818344374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950c1f09128709%3A0x4a5524e0c3ece1ca!2sJohannesburg%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1623253890437!5m2!1sen!2sus" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
                </div>
            </section>
        </div>
    )
}

export default Contact