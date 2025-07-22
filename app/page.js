


'use client'

import { useState, useEffect } from 'react';
import { FaChevronRight, FaQuoteLeft, FaStar, FaStarHalfAlt, FaPaintRoller, FaBath, FaDoorOpen, FaPaintBrush, FaProjectDiagram, FaLightbulb, FaTools, FaUsers, FaClipboardCheck, FaCheckCircle, FaArchway } from 'react-icons/fa';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter , FaWhatsapp } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';
import { servicesData } from '@/helper/servicesData';
import { projectsData } from '@/helper/projectsData';









const App = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true
    });

    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          document.querySelectorAll('nav a').forEach(link => {
            link.classList.remove('text-blue-600');
            if (link.getAttribute('href') === '#' + sectionId) {
              link.classList.add('text-blue-600');
            }
          });
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will contact you shortly.');
    e.target.reset();
  };

  const scrollToSection = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <div className="bg-gray-50">


      {/* Hero Section */}
      <section
        id="home"
        className="hero-image flex items-center justify-center text-center text-white pt-16"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
          height: "60vh",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "relative"
        }}
        data-aos="fade"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">The Art of Construction</h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">Transform your space with style and precision. Our expert team is ready to bring your vision to life.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold transition duration-300">Get a Free Quote</Link>
              <Link href="/services" className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 rounded-lg text-white font-semibold transition duration-300">Our Services</Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2" data-aos="fade-right">
              <img src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Construction team" className="rounded-lg shadow-xl w-full h-auto" />
            </div>
            <div className="lg:w-1/2" data-aos="fade-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Building Spaces You'll Love</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Bravospace 294 is a multi-service construction company based in Johannesburg, dedicated to creating and improving residential and commercial spaces according to your needs and specifications. Our expert team is ready to transform your space with style and precision.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <FaLightbulb className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Innovative Designs</h3>
                    <p className="text-gray-600 text-sm">Unique, customized solutions for every project</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <FaTools className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Quality Craftsmanship</h3>
                    <p className="text-gray-600 text-sm">Expert artisanship evident in every detail</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <FaUsers className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Client Focus</h3>
                    <p className="text-gray-600 text-sm">Building lasting relationships with every client</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <FaClipboardCheck className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Project Management</h3>
                    <p className="text-gray-600 text-sm">Reliable timelines and communication</p>
                  </div>
                </div>
              </div>
              <Link href="/about" className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold transition duration-300">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>










      {/* Services Section */}


<section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Specialized Services</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">We offer a comprehensive range of construction services to meet all your residential and commercial needs.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div 
              key={service.id}
              className="service-card bg-white rounded-lg shadow-md overflow-hidden transition duration-300 hover:-translate-y-2.5 hover:shadow-xl" 
              data-aos="fade-up" 
              data-aos-delay={index * 100}
            >
              <div className="h-48 overflow-hidden">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link  key={index} href={`/services/${index}`} className="text-blue-600 font-medium hover:text-blue-800 flex items-center">
                  Learn more <FaChevronRight className="ml-1 text-sm" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
      
      {/* <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Specialized Services</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">We offer a comprehensive range of construction services to meet all your residential and commercial needs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="service-card bg-white rounded-lg shadow-md overflow-hidden transition duration-300 hover:-translate-y-2.5 hover:shadow-xl" data-aos="fade-up">
              <div className="h-48 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Ceiling design" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <FaArchway className="text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Intricate Ceiling Designs</h3>
                <p className="text-gray-600 mb-4">Artistic and detailed ceilings that elevate your interior spaces with unique visual appeal.</p>
                <Link href="/about" className="text-blue-600 font-medium hover:text-blue-800 flex items-center">
                  Learn more <FaChevronRight className="ml-1 text-sm" />
                </Link>
              </div>
            </div>

            <div className="service-card bg-white rounded-lg shadow-md overflow-hidden transition duration-300 hover:-translate-y-2.5 hover:shadow-xl" data-aos="fade-up" data-aos-delay="100">
              <div className="h-48 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Bathroom tiling" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <FaBath className="text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Bathroom Tiling & Seamless Showers</h3>
                <p className="text-gray-600 mb-4">Elegant tiling solutions including seamless shower designs for a modern, easy-to-maintain bathroom.</p>
                <Link href="#" className="text-blue-600 font-medium hover:text-blue-800 flex items-center">
                  Learn more <FaChevronRight className="ml-1 text-sm" />
                </Link>
              </div>
            </div>

            <div className="service-card bg-white rounded-lg shadow-md overflow-hidden transition duration-300 hover:-translate-y-2.5 hover:shadow-xl" data-aos="fade-up" data-aos-delay="200">
              <div className="h-48 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1600585152915-d208bec867a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Interior painting" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <FaPaintRoller className="text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Interior & Exterior Painting</h3>
                <p className="text-gray-600 mb-4">Professional painting services that provide both protection and aesthetic enhancement for your property.</p>
                <Link href="#" className="text-blue-600 font-medium hover:text-blue-800 flex items-center">
                  Learn more <FaChevronRight className="ml-1 text-sm" />
                </Link>
              </div>
            </div>

            <div className="service-card bg-white rounded-lg shadow-md overflow-hidden transition duration-300 hover:-translate-y-2.5 hover:shadow-xl" data-aos="fade-up">
              <div className="h-48 overflow-hidden">
                <img src="/images/house.jpg" alt="Handmade door" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <FaDoorOpen className="text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Handmade Doors & Italian Cornices</h3>
                <p className="text-gray-600 mb-4">Exquisite artisanal doors and decorative Italian cornices that add a distinctive touch of elegance.</p>
                <Link href="#" className="text-blue-600 font-medium hover:text-blue-800 flex items-center">
                  Learn more <FaChevronRight className="ml-1 text-sm" />
                </Link>
              </div>
            </div>

            <div className="service-card bg-white rounded-lg shadow-md overflow-hidden transition duration-300 hover:-translate-y-2.5 hover:shadow-xl" data-aos="fade-up" data-aos-delay="100">
              <div className="h-48 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1606744837616-56c9a5c6a6eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Rhinolite application" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <FaPaintBrush className="text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Rhinolite Application</h3>
                <p className="text-gray-600 mb-4">Premium decorative coatings that create a sophisticated finish for walls and architectural elements.</p>
                <Link href="#" className="text-blue-600 font-medium hover:text-blue-800 flex items-center">
                  Learn more <FaChevronRight className="ml-1 text-sm" />
                </Link>
              </div>
            </div>

            <div className="service-card bg-white rounded-lg shadow-md overflow-hidden transition duration-300 hover:-translate-y-2.5 hover:shadow-xl" data-aos="fade-up" data-aos-delay="200">
              <div className="h-48 overflow-hidden">
                <img src="/images/house1.webp" alt="Construction planning" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <FaProjectDiagram className="text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Custom Construction Projects</h3>
                <p className="text-gray-600 mb-4">Complete bespoke construction solutions tailored to your specific vision and requirements.</p>
                <Link href="#" className="text-blue-600 font-medium hover:text-blue-800 flex items-center">
                  Learn more <FaChevronRight className="ml-1 text-sm" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section> */}








      {/* Stats Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6" data-aos="fade-up">
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-lg font-medium">Projects Completed</div>
            </div>
            <div className="p-6" data-aos="fade-up" data-aos-delay="100">
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-lg font-medium">Years Experience</div>
            </div>
            <div className="p-6" data-aos="fade-up" data-aos-delay="200">
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-lg font-medium">Client Satisfaction</div>
            </div>
            <div className="p-6" data-aos="fade-up" data-aos-delay="300">
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-lg font-medium">Expert Workers</div>
            </div>
          </div>
        </div>
      </section>

























      {/* Projects Section */}








           {/* Featured Projects */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Explore our portfolio of exceptional construction projects that showcase our commitment to quality and innovation.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, index) => (
              <Link key={index} href={`/projects/${index}`}>
                <div className="bg-card text-card-foreground rounded-lg border shadow-sm overflow-hidden transition-all hover:shadow-xl cursor-pointer">
                  <div className="h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                      <span className="bg-primary/10 text-primary text-xs font-medium px-2.5 py-1 rounded">{project.category}</span>
                    </div>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <svg className="w-4 h-4 text-muted-foreground mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-muted-foreground text-sm">{project.location}</span>
                      </div>
                      <div className="flex items-center text-primary">
                        <span className="font-medium mr-1">View Project</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          </div>
          </section>







{/* 
      <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Recent Projects</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">Explore some of our recent construction projects showcasing our craftsmanship and attention to detail.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="project-item rounded-lg overflow-hidden shadow-lg relative group" data-aos="fade-up">
              <img src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Modern living room" className="w-full h-64 object-cover" />
              <div className="project-overlay absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center p-5">
                <h3 className="text-xl font-bold mb-2">Modern Living Space</h3>
                <p className="mb-4">Complete interior renovation with custom ceiling design and seamless tiling</p>
                <button className="px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-gray-900 transition">View More</button>
              </div>
            </div>

            <div className="project-item rounded-lg overflow-hidden shadow-lg relative group" data-aos="fade-up" data-aos-delay="100">
              <img src="https://images.unsplash.com/photo-1600121848594-d8644e57abab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Bathroom renovation" className="w-full h-64 object-cover" />
              <div className="project-overlay absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center p-5">
                <h3 className="text-xl font-bold mb-2">Luxury Bathroom</h3>
                <p className="mb-4">Premium bathroom renovation with seamless shower enclosure</p>
                <button className="px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-gray-900 transition">View More</button>
              </div>
            </div>

            <div className="project-item rounded-lg overflow-hidden shadow-lg relative group" data-aos="fade-up" data-aos-delay="200">
              <img src="/images/house2.webp" alt="Office space" className="w-full h-64 object-cover" />
              <div className="project-overlay absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center p-5">
                <h3 className="text-xl font-bold mb-2">Commercial Office</h3>
                <p className="mb-4">Complete office space construction with custom lighting solutions</p>
                <button className="px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-gray-900 transition">View More</button>
              </div>
            </div>

            <div className="project-item rounded-lg overflow-hidden shadow-lg relative group" data-aos="fade-up">
              <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Kitchen renovation" className="w-full h-64 object-cover" />
              <div className="project-overlay absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center p-5">
                <h3 className="text-xl font-bold mb-2">Modern Kitchen</h3>
                <p className="mb-4">Complete kitchen renovation with custom cabinetry and countertops</p>
                <button className="px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-gray-900 transition">View More</button>
              </div>
            </div>

            <div className="project-item rounded-lg overflow-hidden shadow-lg relative group" data-aos="fade-up" data-aos-delay="100">
              <img src="https://images.unsplash.com/photo-1565538810643-b5bdb714032a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Restaurant construction" className="w-full h-64 object-cover" />
              <div className="project-overlay absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center p-5">
                <h3 className="text-xl font-bold mb-2">Restaurant Build</h3>
                <p className="mb-4">Complete restaurant construction from ground up with custom features</p>
                <button className="px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-gray-900 transition">View More</button>
              </div>
            </div>

            <div className="project-item rounded-lg overflow-hidden shadow-lg relative group" data-aos="fade-up" data-aos-delay="200">
              <img src="/images/house3.jpeg" alt="Exterior renovation" className="w-full h-64 object-cover" />
              <div className="project-overlay absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center p-5">
                <h3 className="text-xl font-bold mb-2">Residential Exterior</h3>
                <p className="mb-4">Complete exterior renovation with new facade and landscaping</p>
                <button className="px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-gray-900 transition">View More</button>
              </div>
            </div>
          </div>

          <div className="text-center mt-12" data-aos="fade-up">
            <Link href="#" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold transition duration-300 inline-block">
              View All Projects
            </Link>
          </div>
        </div>
      </section>  */}
















      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">Hear from our satisfied customers about their experience working with Bravospace 294.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="testimonial-card bg-white p-8 rounded-lg shadow-md transition duration-300 hover:scale-103" data-aos="fade-up">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 rounded-full overflow-hidden">
                  <img src="https://randomuser.me/api/portraits/women/43.jpg" alt="Client portrait" className="w-full h-full object-cover" />
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-800">Sarah Johnson</h4>
                  <p className="text-sm text-gray-600">Homeowner, Sandton</p>
                </div>
              </div>
              <div className="text-gray-600 mb-4">
                <FaQuoteLeft className="text-blue-500 mr-2 inline" />
                Bravospace 294 transformed our outdated home into a modern masterpiece. Their attention to detail on our ceiling designs and custom doors was unparalleled. The team was professional, timely, and a pleasure to work with throughout the entire process.
              </div>
              <div className="flex text-yellow-400 text-sm">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="testimonial-card bg-white p-8 rounded-lg shadow-md transition duration-300 hover:scale-103" data-aos="fade-up" data-aos-delay="100">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 rounded-full overflow-hidden">
                  <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Client portrait" className="w-full h-full object-cover" />
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-800">David Muller</h4>
                  <p className="text-sm text-gray-600">Business Owner, Rosebank</p>
                </div>
              </div>
              <div className="text-gray-600 mb-4">
                <FaQuoteLeft className="text-blue-500 mr-2 inline" />
                We hired Bravospace 294 to completely renovate our office space, and they exceeded all our expectations. Their Rhinolite wall finishes gave our space a premium look, and the custom built-ins were exactly what we envisioned. Their project management skills kept everything on schedule.
              </div>
              <div className="flex text-yellow-400 text-sm">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="testimonial-card bg-white p-8 rounded-lg shadow-md transition duration-300 hover:scale-103" data-aos="fade-up" data-aos-delay="200">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 rounded-full overflow-hidden">
                  <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Client portrait" className="w-full h-full object-cover" />
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-800">Nombuso Dlamini</h4>
                  <p className="text-sm text-gray-600">Restaurant Owner, Melville</p>
                </div>
              </div>
              <div className="text-gray-600 mb-4">
                <FaQuoteLeft className="text-blue-500 mr-2 inline" />
                The Bravospace 294 team built our restaurant from the ground up. Their expertise in both the structural elements and finishing details like our Italian corniches made all the difference. They were transparent about timelines and costs, and delivered exceptional quality that has our customers constantly complimenting the space.
              </div>
              <div className="flex text-yellow-400 text-sm">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2" data-aos="fade-left">
              <img src='/images/house14.jpg' alt="Construction team working" className="rounded-lg shadow-xl w-full h-auto" />
            </div>
            <div className="lg:w-1/2" data-aos="fade-right">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Mission & Values</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our mission at Bravospace 294 is to build solid, beautiful, and functional spaces while establishing lasting trust relationships with our clients. We commit to projects that showcase our expertise and leave a lasting impression.
              </p>
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Why Choose Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <FaCheckCircle className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-600"><strong className="text-gray-800">Experienced Team:</strong> Our skilled professionals have years of hands-on experience in all aspects of construction.</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-600"><strong className="text-gray-800">Quality Materials:</strong> We only use premium materials from trusted suppliers to ensure longevity and satisfaction.</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-600"><strong className="text-gray-800">Attention to Detail:</strong> Precision in every cut, every measurement, and every installation is our hallmark.</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-600"><strong className="text-gray-800">Transparent Process:</strong> Clear communication and honest pricing with no hidden costs or surprises.</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-600"><strong className="text-gray-800">Guaranteed Satisfaction:</strong> We stand behind our work with comprehensive warranties and follow-up service.</span>
                  </li>
                </ul>
              </div>
              <Link href="/contact" className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold transition duration-300">
                Get in Touch
              </Link>
            </div>
          </div>

          {/* Team Section */}
          <div className="mt-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center" data-aos="fade-up">Meet Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Team Member 1 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden" data-aos="fade-up">
                <div className="h-64 overflow-hidden">
                  <img src="https://randomuser.me/api/portraits/men/41.jpg" alt="Team member" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">Michael Baloyi</h3>
                  <p className="text-blue-600 font-medium mb-3">Founder & CEO</p>
                  <p className="text-gray-600 text-sm mb-4">With over 18 years in the construction industry, Michael ensures every project meets Bravospace 294's high standards.</p>
                  <div className="flex space-x-4 text-gray-500">
                    <Link href="#"><FaLinkedinIn className="hover:text-blue-600" /></Link>
                    <Link href="#"><FaTwitter className="hover:text-blue-400" /></Link>
                  </div>
                </div>
              </div>

              {/* Team Member 2 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden" data-aos="fade-up" data-aos-delay="100">
                <div className="h-64 overflow-hidden">
                  <img src="https://randomuser.me/api/portraits/women/34.jpg" alt="Team member" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">Nomvula Khumalo</h3>
                  <p className="text-blue-600 font-medium mb-3">Lead Designer</p>
                  <p className="text-gray-600 text-sm mb-4">Nomvula brings an artistic eye and technical expertise to create innovative, functional designs for our clients.</p>
                  <div className="flex space-x-4 text-gray-500">
                    <Link href="#"><FaLinkedinIn className="hover:text-blue-600" /></Link>
                    <Link href="#"><FaInstagram className="hover:text-blue-600" /></Link>
                  </div>
                </div>
              </div>

              {/* Team Member 3 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden" data-aos="fade-up" data-aos-delay="200">
                <div className="h-64 overflow-hidden">
                  <img src="https://randomuser.me/api/portraits/men/65.jpg" alt="Team member" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">Jabulani Mokoena</h3>
                  <p className="text-blue-600 font-medium mb-3">Construction Manager</p>
                  <p className="text-gray-600 text-sm mb-4">Jabulani oversees all projects, ensuring timelines are met and quality standards are consistently achieved.</p>
                  <div className="flex space-x-4 text-gray-500">
                    <Link href="#"><FaLinkedinIn className="hover:text-blue-600" /></Link>
                  </div>
                </div>
              </div>

              {/* Team Member 4 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden" data-aos="fade-up" data-aos-delay="300">
                <div className="h-64 overflow-hidden">
                  <img src="https://randomuser.me/api/portraits/women/47.jpg" alt="Team member" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">Thandiwe Ndlovu</h3>
                  <p className="text-blue-600 font-medium mb-3">Client Relations</p>
                  <p className="text-gray-600 text-sm mb-4">Thandiwe ensures seamless communication between our team and clients throughout the project lifecycle.</p>
                  <div className="flex space-x-4 text-gray-500">
                    <Link href="#"><FaLinkedinIn className="hover:text-blue-600" /></Link>
                    <Link href="#"><FaFacebookF className="hover:text-blue-600" /></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" data-aos="fade-up">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">Whether you have a small renovation or a major construction project, we're here to help bring your vision to life.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4" data-aos="fade-up" data-aos-delay="200">
            <Link href="/contact" className="px-8 py-3 bg-white hover:bg-gray-100 rounded-lg text-blue-600 font-semibold transition duration-300">
              Get a Free Quote
            </Link>
            <Link href="/projects" className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 rounded-lg text-white font-semibold transition duration-300">
              View our projects
            </Link>
          </div>
        </div>
      </section>
  {/* WhatsApp Floating Button */}
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

export default App;
