




'use client'

import { useState } from 'react';
import react from 'react';
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';
// import WhatsAppButton from '@/components/WhatsAppButton';
import Link from 'next/link';
import { projectsData } from "@/helper/projectsData";
import Image from 'next/image';




const Projects = () => {
    const [filter, setFilter] = useState('All');

    const categories = ['All', 'Residential', 'Commercial', 'Renovation'];

    const filteredProjects = filter === 'All'
        ? projectsData
        : projectsData.filter(project => project.category === filter);

    // Extended projects for demonstration
    const allProjects = [
        ...projectsData,
        {
            title: "Melrose Apartment Complex",
            category: "Residential",
            description: "Modern 40-unit apartment complex with sustainable design features and community amenities.",
            location: "Melrose, Johannesburg",
            image: "https://readdy.ai/api/search-image?query=modern%20apartment%20complex%20with%20balconies%2C%20contemporary%20residential%20architecture%2C%20landscaped%20courtyard%2C%20professional%20real%20estate%20photography&width=400&height=300&seq=project4&orientation=landscape"
        },
        {
            title: "CBD Shopping Center",
            category: "Commercial",
            description: "Three-story retail complex featuring mixed-use spaces and modern architectural design.",
            location: "Johannesburg CBD",
            image: "https://readdy.ai/api/search-image?query=modern%20shopping%20center%20with%20glass%20facade%2C%20retail%20complex%20architecture%2C%20contemporary%20commercial%20building%20design%2C%20professional%20architectural%20photography&width=400&height=300&seq=project5&orientation=landscape"
        },
        {
            title: "Victorian Manor Restoration",
            category: "Renovation",
            description: "Complete restoration of a 1920s manor house with period-appropriate materials and modern conveniences.",
            location: "Parktown, Johannesburg",
            image: "https://readdy.ai/api/search-image?query=restored%20Victorian%20manor%20house%2C%20heritage%20architecture%20renovation%2C%20period%20features%20with%20modern%20updates%2C%20elegant%20residential%20restoration&width=400&height=300&seq=project6&orientation=landscape"
        }
    ];

    const displayProjects = filter === 'All'
        ? allProjects
        : allProjects.filter(project => project.category === filter);

    return (
        <div className="min-h-screen bg-background">

            {/* Hero Section */}
            <section className="relative h-96 flex items-center">
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <Image
                        src="https://readdy.ai/api/search-image?query=portfolio%20of%20construction%20projects%2C%20multiple%20completed%20buildings%20showcase%2C%20modern%20residential%20and%20commercial%20architecture%2C%20professional%20portfolio%20photography&width=1440&height=400&seq=projects-hero&orientation=landscape"
                        alt="Our Projects"
                        width={1350}  height={900}
                        className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/30"></div>
                </div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h1 className="text-5xl font-bold text-white mb-4">Our Projects</h1>
                    <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                        Explore our portfolio of exceptional construction projects that showcase our commitment to quality and innovation.
                    </p>
                </div>
            </section>

            {/* Filter Tabs */}
            <section className="py-8 bg-muted/50">
                <div className="container mx-auto px-6">
                    <div className="flex flex-wrap justify-center gap-4">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setFilter(category)}
                                className={`px-6 py-2 rounded-lg font-medium transition-colors min-w-24 ${filter === category
                                        ? 'bg-primary text-primary-foreground'
                                        : 'bg-background border border-input text-foreground hover:bg-accent hover:text-accent-foreground'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {displayProjects.map((project, index) => {
                            const originalIndex = allProjects.findIndex(p => p.title === project.title);
                            return (
                                <Link key={index} href={`/projects/${originalIndex}`}>
                                    <div className="bg-card text-card-foreground rounded-lg shadow-xl transition-all hover:shadow-xl cursor-pointer">
                                        <div className="h-64 overflow-hidden">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                width={1350}  height={900}
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
                                                    <span className="font-medium mr-1">View Details</span>
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Project Stats */}
            <section className="py-20 bg-muted/50">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { number: "150+", label: "Projects Completed" },
                            { number: "15+", label: "Years Experience" },
                            { number: "98%", label: "Client Satisfaction" },
                            { number: "50+", label: "Expert Craftsmen" }
                        ].map((stat, index) => (
                            <div key={index}>
                                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                                <div className="text-muted-foreground">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" data-aos="fade-up">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">Whether you have a small renovation or a major construction project, we are here to help bring your vision to life.</p>
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

            {/* <Footer />
      <WhatsAppButton /> */}
        </div>
    );
};

export default Projects;