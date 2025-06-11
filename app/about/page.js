
'use client'

// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';




const About = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
  

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://readdy.ai/api/search-image?query=modern%20architecture%20office%20building%20with%20team%20of%20diverse%20professionals%20in%20collaborative%20workspace%2C%20soft%20natural%20lighting%20streaming%20through%20large%20windows%2C%20elegant%20interior%20design%20with%20plants%20and%20wooden%20elements%2C%20professional%20corporate%20photography%20with%20neutral%20gradient%20background&width=1440&height=600&seq=hero-about&orientation=landscape" 
            alt="About Bravospace 294" 
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex items-center mb-6">
            <Link
              href="/"
              data-readdy="true"
              className="text-blue-600 hover:text-blue-700 flex items-center cursor-pointer"
            >
              <i className="fas fa-arrow-left mr-2"></i>
              <span>Back to Home</span>
            </Link>
          </div>
          <div className="flex flex-col items-start max-w-2xl">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Building Excellence Since 2010</h1>
            <p className="text-xl text-gray-700 mb-8">
              We're more than just a construction company. We're a team of passionate builders, designers, and problem-solvers dedicated to transforming spaces and creating lasting value for our clients.
            </p>
            <div className="flex space-x-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-colors !rounded-button whitespace-nowrap cursor-pointer">
                Our Services
              </button>
              <button className="bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-lg shadow-md hover:bg-blue-50 transition-colors !rounded-button whitespace-nowrap cursor-pointer">
                Meet Our Team
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
                <p className="text-xl font-medium text-gray-800">
                  "To create exceptional spaces that inspire, endure, and exceed expectations through innovation, quality craftsmanship, and unwavering integrity."
                </p>
              </div>
              <p className="text-gray-600 mb-6">
                Founded in 2010, Bravospace 294 began as a small residential construction company with a big vision. Our founder, Michael Ndlovu, started with just three employees and a commitment to quality that remains our cornerstone today.
              </p>
              <p className="text-gray-600 mb-6">
                Over the years, we've grown into one of Johannesburg's most respected construction firms, expanding our services to include commercial construction, renovations, and specialized design-build projects. Through economic ups and downs, we've maintained our commitment to excellence, building not just structures but lasting relationships with our clients.
              </p>
              <p className="text-gray-600">
                Today, with over 150 projects completed and a team of 75 dedicated professionals, we continue to push boundaries and set new standards in the construction industry across South Africa.
              </p>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <div className="text-blue-600 text-4xl font-bold mb-2">15+</div>
                <div className="text-gray-700 font-medium">Years of Experience</div>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <div className="text-blue-600 text-4xl font-bold mb-2">150+</div>
                <div className="text-gray-700 font-medium">Projects Completed</div>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <div className="text-blue-600 text-4xl font-bold mb-2">75</div>
                <div className="text-gray-700 font-medium">Team Members</div>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <div className="text-blue-600 text-4xl font-bold mb-2">98%</div>
                <div className="text-gray-700 font-medium">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Journey</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to industry leadership, explore the key milestones that have shaped our company's growth and success over the years.
            </p>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>

            {/* Timeline items */}
            <div className="relative z-10">
              {/* 2010 */}
              <div className="mb-16 flex justify-between items-center flex-col md:flex-row">
                <div className="md:w-5/12 mb-8 md:mb-0 md:text-right md:pr-10">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Company Founded</h3>
                    <p className="text-gray-600 mb-3">
                      Michael Ndlovu establishes Bravospace 294 with a focus on residential construction and a team of three employees.
                    </p>
                    <span className="text-blue-600 font-medium">2010</span>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-blue-600 border-4 border-white"></div>
                </div>
                <div className="md:w-5/12 md:pl-10"></div>
              </div>

              {/* 2013 */}
              <div className="mb-16 flex justify-between items-center flex-col md:flex-row">
                <div className="md:w-5/12 mb-8 md:mb-0"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-blue-600 border-4 border-white"></div>
                </div>
                <div className="md:w-5/12 md:pl-10">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">First Major Project</h3>
                    <p className="text-gray-600 mb-3">
                      Completed our first major commercial project, a retail complex in Rosebank that won a regional design award.
                    </p>
                    <span className="text-blue-600 font-medium">2013</span>
                  </div>
                </div>
              </div>

              {/* 2016 */}
              <div className="mb-16 flex justify-between items-center flex-col md:flex-row">
                <div className="md:w-5/12 mb-8 md:mb-0 md:text-right md:pr-10">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Expansion</h3>
                    <p className="text-gray-600 mb-3">
                      Expanded services to include renovation and interior design, growing our team to 25 professionals.
                    </p>
                    <span className="text-blue-600 font-medium">2016</span>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-blue-600 border-4 border-white"></div>
                </div>
                <div className="md:w-5/12 md:pl-10"></div>
              </div>

              {/* 2019 */}
              <div className="mb-16 flex justify-between items-center flex-col md:flex-row">
                <div className="md:w-5/12 mb-8 md:mb-0"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-blue-600 border-4 border-white"></div>
                </div>
                <div className="md:w-5/12 md:pl-10">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Sustainability Initiative</h3>
                    <p className="text-gray-600 mb-3">
                      Launched our green building initiative, committing to sustainable practices and eco-friendly construction methods.
                    </p>
                    <span className="text-blue-600 font-medium">2019</span>
                  </div>
                </div>
              </div>

              {/* 2022 */}
              <div className="mb-16 flex justify-between items-center flex-col md:flex-row">
                <div className="md:w-5/12 mb-8 md:mb-0 md:text-right md:pr-10">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">National Recognition</h3>
                    <p className="text-gray-600 mb-3">
                      Received the South African Construction Excellence Award for our work on the Sandton Gateway project.
                    </p>
                    <span className="text-blue-600 font-medium">2022</span>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-blue-600 border-4 border-white"></div>
                </div>
                <div className="md:w-5/12 md:pl-10"></div>
              </div>

              {/* 2025 */}
              <div className="flex justify-between items-center flex-col md:flex-row">
                <div className="md:w-5/12 mb-8 md:mb-0"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-blue-600 border-4 border-white"></div>
                </div>
                <div className="md:w-5/12 md:pl-10">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Today</h3>
                    <p className="text-gray-600 mb-3">
                      With 75 team members and operations across South Africa, we continue to innovate and lead in the construction industry.
                    </p>
                    <span className="text-blue-600 font-medium">2025</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Our Leadership Team</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our success is driven by our talented team of professionals who bring expertise, passion, and creativity to every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden group">
              <div className="h-80 overflow-hidden">
                <img 
                  src="https://readdy.ai/api/search-image?query=professional%20portrait%20of%20confident%20African%20male%20executive%20in%20business%20suit%2C%20architectural%20office%20background%2C%20natural%20lighting%2C%20professional%20corporate%20photography%20with%20neutral%20background%2C%2040%20years%20old&width=400&height=500&seq=team1&orientation=portrait" 
                  alt="Michael Ndlovu" 
                  className="w-full h-full object-cover object-top transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-1">Michael Ndlovu</h3>
                <p className="text-blue-600 font-medium mb-4">Founder & CEO</p>
                <p className="text-gray-600 mb-4">
                  With over 25 years of experience in construction, Michael founded Bravospace 294 with a vision to transform the industry through quality and innovation.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors cursor-pointer">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors cursor-pointer">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors cursor-pointer">
                    <i className="fas fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden group">
              <div className="h-80 overflow-hidden">
                <img 
                  src="https://readdy.ai/api/search-image?query=professional%20portrait%20of%20female%20architect%20in%20business%20casual%20attire%2C%20mixed%20race%2C%20architectural%20office%20background%2C%20natural%20lighting%2C%20professional%20corporate%20photography%20with%20neutral%20background%2C%2035%20years%20old&width=400&height=500&seq=team2&orientation=portrait" 
                  alt="Sarah Johnson" 
                  className="w-full h-full object-cover object-top transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-1">Sarah Johnson</h3>
                <p className="text-blue-600 font-medium mb-4">Chief Architect</p>
                <p className="text-gray-600 mb-4">
                  Sarah brings creative vision and technical expertise to every project, with a special focus on sustainable design and innovative solutions.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors cursor-pointer">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors cursor-pointer">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors cursor-pointer">
                    <i className="fas fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden group">
              <div className="h-80 overflow-hidden">
                <img 
                  src="https://readdy.ai/api/search-image?query=professional%20portrait%20of%20Indian%20male%20executive%20in%20business%20casual%20attire%2C%20architectural%20office%20background%2C%20natural%20lighting%2C%20professional%20corporate%20photography%20with%20neutral%20background%2C%2045%20years%20old&width=400&height=500&seq=team3&orientation=portrait" 
                  alt="Rajiv Patel" 
                  className="w-full h-full object-cover object-top transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-1">Rajiv Patel</h3>
                <p className="text-blue-600 font-medium mb-4">Operations Director</p>
                <p className="text-gray-600 mb-4">
                  Rajiv ensures our projects run smoothly, on time, and within budget, with a keen eye for detail and exceptional problem-solving skills.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors cursor-pointer">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors cursor-pointer">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors cursor-pointer">
                    <i className="fas fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden group">
              <div className="h-80 overflow-hidden">
                <img 
                  src="https://readdy.ai/api/search-image?query=professional%20portrait%20of%20blonde%20female%20executive%20in%20business%20attire%2C%20architectural%20office%20background%2C%20natural%20lighting%2C%20professional%20corporate%20photography%20with%20neutral%20background%2C%2038%20years%20old&width=400&height=500&seq=team4&orientation=portrait" 
                  alt="Emma Wilson" 
                  className="w-full h-full object-cover object-top transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-1">Emma Wilson</h3>
                <p className="text-blue-600 font-medium mb-4">Interior Design Director</p>
                <p className="text-gray-600 mb-4">
                  Emma leads our interior design team, creating functional and beautiful spaces that perfectly complement the architectural vision.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors cursor-pointer">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors cursor-pointer">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors cursor-pointer">
                    <i className="fas fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Team Member 5 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden group">
              <div className="h-80 overflow-hidden">
                <img 
                  src="https://readdy.ai/api/search-image?query=professional%20portrait%20of%20African%20male%20executive%20in%20business%20casual%20attire%2C%20architectural%20office%20background%2C%20natural%20lighting%2C%20professional%20corporate%20photography%20with%20neutral%20background%2C%2042%20years%20old&width=400&height=500&seq=team5&orientation=portrait" 
                  alt="David Mokoena" 
                  className="w-full h-full object-cover object-top transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-1">David Mokoena</h3>
                <p className="text-blue-600 font-medium mb-4">Project Management Director</p>
                <p className="text-gray-600 mb-4">
                  David oversees our project management team, ensuring seamless coordination between all stakeholders and successful project delivery.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors cursor-pointer">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors cursor-pointer">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors cursor-pointer">
                    <i className="fas fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Team Member 6 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden group">
              <div className="h-80 overflow-hidden">
                <img 
                  src="https://readdy.ai/api/search-image?query=professional%20portrait%20of%20Asian%20female%20executive%20in%20business%20attire%2C%20architectural%20office%20background%2C%20natural%20lighting%2C%20professional%20corporate%20photography%20with%20neutral%20background%2C%2036%20years%20old&width=400&height=500&seq=team6&orientation=portrait" 
                  alt="Grace Chen" 
                  className="w-full h-full object-cover object-top transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-1">Grace Chen</h3>
                <p className="text-blue-600 font-medium mb-4">Financial Director</p>
                <p className="text-gray-600 mb-4">
                  Grace manages our financial operations, ensuring fiscal responsibility and strategic investment in our growth and capabilities.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors cursor-pointer">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors cursor-pointer">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors cursor-pointer">
                    <i className="fas fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do, from how we work with clients to how we approach each project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-medal text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in every aspect of our work, from the smallest details to the overall vision, exceeding expectations at every turn.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-handshake text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Integrity</h3>
              <p className="text-gray-600">
                We conduct business with honesty, transparency, and ethical practices, building trust with our clients, partners, and community.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-lightbulb text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Innovation</h3>
              <p className="text-gray-600">
                We embrace new ideas, technologies, and approaches to deliver innovative solutions that address complex challenges and create value.
              </p>
            </div>

            {/* Value 4 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-users text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Collaboration</h3>
              <p className="text-gray-600">
                We believe in the power of teamwork, fostering a collaborative environment where diverse perspectives lead to better outcomes.
              </p>
            </div>

            {/* Value 5 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-leaf text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Sustainability</h3>
              <p className="text-gray-600">
                We are committed to environmentally responsible practices, creating buildings that are efficient, healthy, and minimize environmental impact.
              </p>
            </div>

            {/* Value 6 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-heart text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Client Focus</h3>
              <p className="text-gray-600">
                We put our clients at the center of everything we do, listening carefully to their needs and working tirelessly to exceed their expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about their experience working with Bravospace 294.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400 mr-2">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <span className="text-gray-600">5.0</span>
              </div>
              <p className="text-gray-700 italic mb-6">
                "Working with Bravospace 294 was a dream. From the initial design consultation to the final walkthrough, they were professional, responsive, and delivered exceptional quality. Our new office has transformed how we work."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://readdy.ai/api/search-image?query=professional%20headshot%20of%20business%20executive%2C%20neutral%20background%2C%20corporate%20portrait%2C%2045%20year%20old%20male&width=60&height=60&seq=client1&orientation=squarish" 
                  alt="Robert Khumalo" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-800">Robert Khumalo</h4>
                  <p className="text-gray-600 text-sm">CEO, TechSA Solutions</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400 mr-2">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <span className="text-gray-600">5.0</span>
              </div>
              <p className="text-gray-700 italic mb-6">
                "The team at Bravospace 294 turned our renovation project into a masterpiece. They understood our vision perfectly and executed it with precision. Their attention to detail is unmatched."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://readdy.ai/api/search-image?query=professional%20headshot%20of%20business%20woman%2C%20neutral%20background%2C%20corporate%20portrait%2C%2038%20year%20old%20female&width=60&height=60&seq=client2&orientation=squarish" 
                  alt="Jennifer Smith" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-800">Jennifer Smith</h4>
                  <p className="text-gray-600 text-sm">Owner, Smith Family Residence</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400 mr-2">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
                <span className="text-gray-600">4.5</span>
              </div>
              <p className="text-gray-700 italic mb-6">
                "As a developer, I've worked with many construction firms, but Bravospace 294 stands out. Their commitment to quality, timeline adherence, and budget management is exceptional. They're now our go-to partner."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://readdy.ai/api/search-image?query=professional%20headshot%20of%20real%20estate%20developer%2C%20neutral%20background%2C%20corporate%20portrait%2C%2050%20year%20old%20male&width=60&height=60&seq=client3&orientation=squarish" 
                  alt="Daniel van der Merwe" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-800">Daniel van der Merwe</h4>
                  <p className="text-gray-600 text-sm">Director, Urban Vision Properties</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Awards & Recognition</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence has been recognized by industry leaders and organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Award 1 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-6">
                <i className="fas fa-trophy text-4xl text-yellow-500"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 text-center mb-2">South African Construction Excellence Award</h3>
              <p className="text-gray-600 text-center mb-2">Commercial Category Winner</p>
              <p className="text-blue-600 font-medium text-center">2022</p>
            </div>

            {/* Award 2 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-6">
                <i className="fas fa-award text-4xl text-yellow-500"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 text-center mb-2">Green Building Council Recognition</h3>
              <p className="text-gray-600 text-center mb-2">Sustainable Design Excellence</p>
              <p className="text-blue-600 font-medium text-center">2021</p>
            </div>

            {/* Award 3 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-6">
                <i className="fas fa-medal text-4xl text-yellow-500"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 text-center mb-2">Johannesburg Business Excellence</h3>
              <p className="text-gray-600 text-center mb-2">Best Construction Company</p>
              <p className="text-blue-600 font-medium text-center">2020</p>
            </div>

            {/* Award 4 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-6">
                <i className="fas fa-certificate text-4xl text-yellow-500"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 text-center mb-2">African Property Awards</h3>
              <p className="text-gray-600 text-center mb-2">Best Residential Development</p>
              <p className="text-blue-600 font-medium text-center">2019</p>
            </div>

            {/* Award 5 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-6">
                <i className="fas fa-star text-4xl text-yellow-500"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 text-center mb-2">Construction Safety Excellence</h3>
              <p className="text-gray-600 text-center mb-2">National Safety Council</p>
              <p className="text-blue-600 font-medium text-center">2018</p>
            </div>

            {/* Certification */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-6">
                <i className="fas fa-check-circle text-4xl text-green-500"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 text-center mb-2">ISO 9001:2015 Certification</h3>
              <p className="text-gray-600 text-center mb-2">Quality Management Systems</p>
              <p className="text-blue-600 font-medium text-center">Since 2017</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Construction Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Contact us today for a free consultation and quote. Let's bring your vision to life with Bravospace 294.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition-colors text-lg font-medium !rounded-button whitespace-nowrap cursor-pointer">
              Get a Free Quote
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg shadow-lg hover:bg-white/10 transition-colors text-lg !rounded-button whitespace-nowrap cursor-pointer">
              View Our Projects
            </button>
          </div>
        </div>
      </section>


       <a
        href="https://wa.me/27123456789"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50 cursor-pointer"
      >
        <FaWhatsapp className="text-3xl" />
      </a>
    </div>
  );
};

export default About;
