
'use client'

// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState, useEffect } from 'react';
import { GrProjects } from 'react-icons/gr';


const Projects = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOption, setSortOption] = useState('Latest');
    const [viewMode, setViewMode] = useState('grid');
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [showSortDropdown, setShowSortDropdown] = useState(false);
    const projectsPerPage = 6;
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
    useEffect(() => {
        setIsLoading(true);
        // Simulate loading data
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 800);
        return () => clearTimeout(timer);
    }, [activeCategory, searchTerm, sortOption, currentPage]);
    const handleCategoryChange = (category) => {
        setActiveCategory(category);
        setCurrentPage(1);
    };
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1);
    };
    const handleSortChange = (option) => {
        setSortOption(option);
        setShowSortDropdown(false);
        setCurrentPage(1);
    };
    const handlePageChange = (page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 500, behavior: 'smooth' });
    };
    // Filter projects based on category and search term
    const filteredProjects = allProjects.filter(project => {
        const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
        const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.description.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });
    // Sort filtered projects
    const sortedProjects = [...filteredProjects].sort((a, b) => {
        if (sortOption === 'Latest') {
            return new Date(b.completionDate).getTime() - new Date(a.completionDate).getTime();
        } else if (sortOption === 'Most Popular') {
            return b.popularity - a.popularity;
        } else {
            return a.title.localeCompare(b.title);
        }
    });
    // Paginate projects
    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = sortedProjects.slice(indexOfFirstProject, indexOfLastProject);
    const totalPages = Math.ceil(sortedProjects.length / projectsPerPage);
    return (
        <div className="min-h-screen bg-white">
          
             
            {/* Page Title Section */}
            <section className="pt-32 pb-12 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="flex items-center mb-4">
                        <a
                            href="https://readdy.ai/home/4036c8c6-2333-41f5-844c-9121096f2f54/19e692e7-4fb2-49b8-88d4-50079d56c405"
                            data-readdy="true"
                            className="text-blue-600 hover:text-blue-700 flex items-center cursor-pointer"
                        >
                            <i className="fas fa-arrow-left mr-2"></i>
                            <span>Back to Home</span>
                        </a>
                    </div>
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Projects Portfolio</h1>
                    <p className="text-gray-600 max-w-3xl">
                        Explore our comprehensive collection of construction projects showcasing our expertise in residential,
                        commercial, and renovation work. Each project reflects our commitment to quality, innovation, and client satisfaction.
                    </p>
                </div>
            </section>
            {/* Filter Bar */}
            <section className="sticky top-16 z-40 bg-white shadow-md py-4">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="flex overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
                            <button
                                onClick={() => handleCategoryChange('All')}
                                className={`px-6 py-2 rounded-lg mr-2 whitespace-nowrap !rounded-button cursor-pointer ${activeCategory === 'All'
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                All Projects
                            </button>
                            <button
                                onClick={() => handleCategoryChange('Residential')}
                                className={`px-6 py-2 rounded-lg mr-2 whitespace-nowrap !rounded-button cursor-pointer ${activeCategory === 'Residential'
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                Residential
                            </button>
                            <button
                                onClick={() => handleCategoryChange('Commercial')}
                                className={`px-6 py-2 rounded-lg mr-2 whitespace-nowrap !rounded-button cursor-pointer ${activeCategory === 'Commercial'
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                Commercial
                            </button>
                            <button
                                onClick={() => handleCategoryChange('Renovation')}
                                className={`px-6 py-2 rounded-lg mr-2 whitespace-nowrap !rounded-button cursor-pointer ${activeCategory === 'Renovation'
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                Renovation
                            </button>
                        </div>
                        <div className="flex items-center space-x-3 w-full md:w-auto">
                            <div className="relative flex-grow md:flex-grow-0 md:w-64">
                                <input
                                    type="text"
                                    placeholder="Search projects..."
                                    value={searchTerm}
                                    onChange={handleSearch}
                                    className="w-full px-4 py-2 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                                />
                                <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                            </div>
                            <div className="relative">
                                <button
                                    onClick={() => setShowSortDropdown(!showSortDropdown)}
                                    className="flex items-center px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 !rounded-button whitespace-nowrap cursor-pointer"
                                >
                                    <span className="mr-2">{sortOption}</span>
                                    <i className="fas fa-chevron-down text-xs"></i>
                                </button>
                                {showSortDropdown && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-50">
                                        <ul className="py-2">
                                            <li
                                                onClick={() => handleSortChange('Latest')}
                                                className={`px-4 py-2 hover:bg-gray-100 cursor-pointer ${sortOption === 'Latest' ? 'text-blue-600' : 'text-gray-700'}`}
                                            >
                                                Latest
                                            </li>
                                            <li
                                                onClick={() => handleSortChange('Most Popular')}
                                                className={`px-4 py-2 hover:bg-gray-100 cursor-pointer ${sortOption === 'Most Popular' ? 'text-blue-600' : 'text-gray-700'}`}
                                            >
                                                Most Popular
                                            </li>
                                            <li
                                                onClick={() => handleSortChange('Alphabetical')}
                                                className={`px-4 py-2 hover:bg-gray-100 cursor-pointer ${sortOption === 'Alphabetical' ? 'text-blue-600' : 'text-gray-700'}`}
                                            >
                                                Alphabetical
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                            <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                                <button
                                    onClick={() => setViewMode('grid')}
                                    className={`px-3 py-2 ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'} cursor-pointer`}
                                >
                                    <i className="fas fa-th-large"></i>
                                </button>
                                <button
                                    onClick={() => setViewMode('list')}
                                    className={`px-3 py-2 ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'} cursor-pointer`}
                                >
                                    <i className="fas fa-list"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Projects Gallery */}
            <section className="py-12 min-h-screen">
                <div className="container mx-auto px-6">
                    {isLoading ? (
                        // Skeleton loading state
                        <div className={`grid ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'} gap-8`}>
                            {[...Array(6)].map((_, index) => (
                                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden animate-pulse">
                                    <div className="h-64 bg-gray-300"></div>
                                    <div className="p-6">
                                        <div className="h-6 bg-gray-300 rounded w-3/4 mb-3"></div>
                                        <div className="h-4 bg-gray-300 rounded w-1/4 mb-4"></div>
                                        <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
                                        <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
                                        <div className="h-4 bg-gray-300 rounded w-2/3 mb-4"></div>
                                        <div className="flex justify-between items-center">
                                            <div className="h-4 bg-gray-300 rounded w-1/3"></div>
                                            <div className="h-4 bg-gray-300 rounded w-1/4"></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : sortedProjects.length === 0 ? (
                        <div className="text-center py-16">
                            <i className="fas fa-search text-gray-400 text-5xl mb-4"></i>
                            <h3 className="text-2xl font-semibold text-gray-700 mb-2">No projects found</h3>
                            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
                        </div>
                    ) : (
                        <>
                            {/* Category headers */}
                            {activeCategory === 'All' ? (
                                <>
                                    {['Residential', 'Commercial', 'Renovation'].map(category => {
                                        const categoryProjects = currentProjects.filter(project => project.category === category);
                                        if (categoryProjects.length === 0) return null;
                                        return (
                                            <div key={category} className="mb-12">
                                                <div className="flex items-center mb-6">
                                                    <i className={`${getCategoryIcon(category)} text-blue-600 text-2xl mr-3`}></i>
                                                    <h2 className="text-2xl font-bold text-gray-800">{category} Projects</h2>
                                                </div>
                                                <p className="text-gray-600 mb-8 max-w-3xl">{getCategoryDescription(category)}</p>
                                                <div className={`grid ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'} gap-8`}>
                                                    {categoryProjects.map((project, index) => (
                                                        <ProjectCard key={index} project={project} viewMode={viewMode} />
                                                    ))}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </>
                            ) : (
                                <div className="mb-12">
                                    <div className="flex items-center mb-6">
                                        <i className={`${getCategoryIcon(activeCategory)} text-blue-600 text-2xl mr-3`}></i>
                                        <h2 className="text-2xl font-bold text-gray-800">{activeCategory} Projects</h2>
                                    </div>
                                    <p className="text-gray-600 mb-8 max-w-3xl">{getCategoryDescription(activeCategory)}</p>
                                    <div className={`grid ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'} gap-8`}>
                                        {currentProjects.map((project, index) => (
                                            <ProjectCard key={index} project={project} viewMode={viewMode} />
                                        ))}
                                    </div>
                                </div>
                            )}
                        </>
                    )}
                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className="flex justify-center items-center mt-12 space-x-2">
                            <button
                                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                                disabled={currentPage === 1}
                                className={`px-4 py-2 rounded-lg !rounded-button whitespace-nowrap cursor-pointer ${currentPage === 1
                                        ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                    }`}
                            >
                                <i className="fas fa-chevron-left mr-1"></i> Previous
                            </button>
                            {[...Array(totalPages)].map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => handlePageChange(index + 1)}
                                    className={`w-10 h-10 rounded-full !rounded-button cursor-pointer ${currentPage === index + 1
                                            ? 'bg-blue-600 text-white'
                                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                        }`}
                                >
                                    {index + 1}
                                </button>
                            ))}
                            <button
                                onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                                disabled={currentPage === totalPages}
                                className={`px-4 py-2 rounded-lg !rounded-button whitespace-nowrap cursor-pointer ${currentPage === totalPages
                                        ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                    }`}
                            >
                                Next <i className="fas fa-chevron-right ml-1"></i>
                            </button>
                        </div>
                    )}
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
                            Contact Us
                        </button>
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
                <i className="fab fa-whatsapp text-2xl"></i>
            </a>
        </div>
    );
};
// Project Card Component
const ProjectCard = ({ project, viewMode }) => {
    return (
        <div className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all hover:shadow-xl cursor-pointer ${viewMode === 'list' ? 'flex flex-col md:flex-row' : ''
            }`}>
            <div className={`${viewMode === 'list' ? 'md:w-1/3' : 'h-64'} overflow-hidden`}>
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform hover:scale-110"
                />
            </div>
            <div className={`p-6 ${viewMode === 'list' ? 'md:w-2/3' : ''}`}>
                <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                    <span className="bg-blue-100 text-blue-600 text-xs font-medium px-2.5 py-1 rounded">{project.category}</span>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center">
                        <i className="fas fa-map-marker-alt text-gray-400 mr-2"></i>
                        <span className="text-gray-500 text-sm">{project.location}</span>
                    </div>
                    <div className="flex items-center">
                        <i className="fas fa-calendar-alt text-gray-400 mr-2"></i>
                        <span className="text-gray-500 text-sm">{project.completionDate}</span>
                    </div>
                </div>
                {project.testimonial && (
                    <div className="bg-gray-50 p-3 rounded-lg mb-4 italic text-sm text-gray-600">
                        "{project.testimonial}"
                    </div>
                )}
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        {project.features && project.features.slice(0, 3).map((feature, index) => (
                            <span key={index} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded mr-2">
                                {feature}
                            </span>
                        ))}
                    </div>
                    <div className="flex items-center text-blue-600">
                        <span className="font-medium mr-1">View Details</span>
                        <i className="fas fa-chevron-right text-sm"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};
// Helper functions
const getCategoryIcon = (category) => {
    switch (category) {
        case 'Residential':
            return 'fas fa-home';
        case 'Commercial':
            return 'fas fa-building';
        case 'Renovation':
            return 'fas fa-tools';
        default:
            return 'fas fa-project-diagram';
    }
};
const getCategoryDescription = (category) => {
    switch (category) {
        case 'Residential':
            return 'Our residential projects showcase our ability to create beautiful, functional homes that reflect the unique lifestyle and preferences of each client.';
        case 'Commercial':
            return 'Our commercial construction portfolio demonstrates our expertise in creating efficient, innovative spaces for businesses of all sizes.';
        case 'Renovation':
            return 'Our renovation projects highlight our skill in transforming existing spaces while preserving their character and enhancing their functionality.';
        default:
            return '';
    }
};
// Types

// Sample project data
const allProjects = [
    {
        id: 1,
        title: "Luxury Villa Sandton",
        category: "Residential",
        description: "A custom-built 5-bedroom luxury villa featuring modern architecture, smart home technology, and sustainable design elements.",
        location: "Sandton, Johannesburg",
        completionDate: "June 2024",
        image: "https://readdy.ai/api/search-image?query=luxury%2520modern%2520villa%2520with%2520swimming%2520pool%252C%2520elegant%2520architecture%252C%2520high-end%2520residential%2520property%2520in%2520upscale%2520neighborhood%252C%2520professional%2520real%2520estate%2520photography%2520with%2520beautiful%2520landscaping%2520and%2520neutral%2520background&width=600&height=400&seq=project1&orientation=landscape",
        testimonial: "Bravospace 294 exceeded our expectations. The attention to detail and quality of work is outstanding.",
        features: ["Smart Home", "Sustainable", "Luxury Finishes"],
        popularity: 95
    },
    {
        id: 2,
        title: "Rosebank Office Complex",
        category: "Commercial",
        description: "A state-of-the-art office complex with sustainable design features, collaborative workspaces, and cutting-edge technology infrastructure.",
        location: "Rosebank, Johannesburg",
        completionDate: "March 2024",
        image: "https://readdy.ai/api/search-image?query=modern%2520office%2520complex%2520with%2520glass%2520facade%252C%2520contemporary%2520commercial%2520architecture%252C%2520professional%2520business%2520district%2520building%252C%2520sleek%2520design%2520with%2520landscaped%2520entrance%252C%2520professional%2520architectural%2520photography%2520with%2520neutral%2520background&width=600&height=400&seq=project2&orientation=landscape",
        testimonial: "Working with Bravospace 294 was seamless. They delivered on time and within budget.",
        features: ["Energy Efficient", "Modern Design", "Tech-Ready"],
        popularity: 88
    },
    {
        id: 3,
        title: "Heritage Home Restoration",
        category: "Renovation",
        description: "Careful restoration of a historic property in Houghton, preserving its character while adding modern amenities and structural improvements.",
        location: "Houghton, Johannesburg",
        completionDate: "January 2024",
        image: "https://readdy.ai/api/search-image?query=restored%2520heritage%2520home%2520with%2520modern%2520touches%252C%2520historical%2520architecture%2520with%2520contemporary%2520updates%252C%2520elegant%2520renovation%2520of%2520classic%2520property%252C%2520professional%2520architectural%2520photography%2520with%2520neutral%2520background&width=600&height=400&seq=project3&orientation=landscape",
        testimonial: "They preserved the soul of our historic home while making it comfortable for modern living.",
        features: ["Historic Preservation", "Modern Amenities", "Structural Upgrades"],
        popularity: 92
    },
    {
        id: 4,
        title: "Waterfall Estate Residence",
        category: "Residential",
        description: "Contemporary family home with open-plan living spaces, energy-efficient design, and seamless indoor-outdoor flow for entertainment.",
        location: "Waterfall Estate, Midrand",
        completionDate: "November 2023",
        image: "https://readdy.ai/api/search-image?query=contemporary%2520family%2520home%2520with%2520open%2520plan%2520design%252C%2520large%2520windows%252C%2520modern%2520architecture%2520in%2520upscale%2520neighborhood%252C%2520beautiful%2520garden%2520and%2520outdoor%2520entertainment%2520area%252C%2520professional%2520real%2520estate%2520photography%2520with%2520neutral%2520background&width=600&height=400&seq=project4&orientation=landscape",
        features: ["Open Plan", "Energy Efficient", "Entertainment Areas"],
        popularity: 85
    },
    {
        id: 5,
        title: "Melrose Arch Retail Space",
        category: "Commercial",
        description: "High-end retail space designed to maximize customer flow and product visibility while maintaining an elegant, brand-appropriate atmosphere.",
        location: "Melrose Arch, Johannesburg",
        completionDate: "September 2023",
        image: "https://readdy.ai/api/search-image?query=luxury%2520retail%2520space%2520interior%2520with%2520elegant%2520design%252C%2520high-end%2520finishes%252C%2520modern%2520lighting%252C%2520upscale%2520shopping%2520environment%252C%2520professional%2520commercial%2520interior%2520photography%2520with%2520neutral%2520background&width=600&height=400&seq=project5&orientation=landscape",
        testimonial: "The space perfectly represents our brand and has significantly increased our foot traffic.",
        features: ["Retail Design", "Brand-Focused", "Premium Finishes"],
        popularity: 78
    },
    {
        id: 6,
        title: "Parkhurst Kitchen Remodel",
        category: "Renovation",
        description: "Complete kitchen renovation featuring custom cabinetry, high-end appliances, and thoughtful space planning in a charming Parkhurst home.",
        location: "Parkhurst, Johannesburg",
        completionDate: "August 2023",
        image: "https://readdy.ai/api/search-image?query=luxury%2520kitchen%2520renovation%2520with%2520custom%2520cabinetry%252C%2520marble%2520countertops%252C%2520high-end%2520appliances%252C%2520modern%2520design%2520with%2520elegant%2520finishes%252C%2520professional%2520interior%2520photography%2520with%2520neutral%2520background&width=600&height=400&seq=project6&orientation=landscape",
        features: ["Custom Cabinetry", "High-End Appliances", "Space Optimization"],
        popularity: 82
    },
    {
        id: 7,
        title: "Bryanston Family Estate",
        category: "Residential",
        description: "Luxurious family estate featuring 6 bedrooms, entertainment areas, home theater, gym, and landscaped gardens with swimming pool.",
        location: "Bryanston, Johannesburg",
        completionDate: "July 2023",
        image: "https://readdy.ai/api/search-image?query=luxury%2520estate%2520home%2520with%2520expansive%2520grounds%252C%2520elegant%2520architecture%252C%2520swimming%2520pool%252C%2520landscaped%2520gardens%252C%2520high-end%2520residential%2520property%252C%2520professional%2520real%2520estate%2520photography%2520with%2520neutral%2520background&width=600&height=400&seq=project7&orientation=landscape",
        testimonial: "Bravospace 294 created our dream home with impeccable attention to every detail.",
        features: ["Luxury Estate", "Entertainment Spaces", "Landscaped Gardens"],
        popularity: 94
    },
    {
        id: 8,
        title: "Sandton City Restaurant",
        category: "Commercial",
        description: "Upscale restaurant featuring custom millwork, specialty lighting, and an open kitchen design that creates a dynamic dining experience.",
        location: "Sandton City, Johannesburg",
        completionDate: "May 2023",
        image: "https://readdy.ai/api/search-image?query=upscale%2520restaurant%2520interior%2520with%2520elegant%2520design%252C%2520open%2520kitchen%252C%2520custom%2520lighting%252C%2520sophisticated%2520dining%2520environment%252C%2520professional%2520commercial%2520interior%2520photography%2520with%2520neutral%2520background&width=600&height=400&seq=project8&orientation=landscape",
        features: ["Restaurant Design", "Open Kitchen", "Custom Lighting"],
        popularity: 86
    },
    {
        id: 9,
        title: "Westcliff Home Expansion",
        category: "Renovation",
        description: "Thoughtful expansion of a classic Westcliff home, adding modern living spaces while preserving the architectural integrity of the original structure.",
        location: "Westcliff, Johannesburg",
        completionDate: "April 2023",
        image: "https://readdy.ai/api/search-image?query=classic%2520home%2520with%2520modern%2520extension%252C%2520architectural%2520blend%2520of%2520traditional%2520and%2520contemporary%2520elements%252C%2520elegant%2520home%2520renovation%252C%2520professional%2520architectural%2520photography%2520with%2520neutral%2520background&width=600&height=400&seq=project9&orientation=landscape",
        testimonial: "They seamlessly blended the new with the old, exceeding our expectations.",
        features: ["Home Extension", "Architectural Preservation", "Modern Living"],
        popularity: 89
    },
    {
        id: 10,
        title: "Hyde Park Eco-Home",
        category: "Residential",
        description: "Environmentally conscious home featuring solar power, rainwater harvesting, energy-efficient design, and sustainable building materials.",
        location: "Hyde Park, Johannesburg",
        completionDate: "February 2023",
        image: "https://readdy.ai/api/search-image?query=modern%2520eco-friendly%2520home%2520with%2520solar%2520panels%252C%2520sustainable%2520architecture%252C%2520green%2520building%2520design%252C%2520environmentally%2520conscious%2520residential%2520property%252C%2520professional%2520architectural%2520photography%2520with%2520neutral%2520background&width=600&height=400&seq=project10&orientation=landscape",
        features: ["Eco-Friendly", "Solar Powered", "Sustainable Materials"],
        popularity: 91
    },
    {
        id: 11,
        title: "Fourways Medical Center",
        category: "Commercial",
        description: "State-of-the-art medical facility designed for optimal patient flow, featuring specialized treatment rooms and a calming environment.",
        location: "Fourways, Johannesburg",
        completionDate: "December 2022",
        image: "https://readdy.ai/api/search-image?query=modern%2520medical%2520center%2520with%2520professional%2520design%252C%2520clean%2520healthcare%2520facility%252C%2520contemporary%2520medical%2520office%2520interior%252C%2520professional%2520commercial%2520photography%2520with%2520neutral%2520background&width=600&height=400&seq=project11&orientation=landscape",
        testimonial: "The thoughtful design has improved our workflow and created a healing environment for patients.",
        features: ["Healthcare Design", "Patient-Focused", "Specialized Facilities"],
        popularity: 83
    },
    {
        id: 12,
        title: "Craighall Park Bathroom Renovation",
        category: "Renovation",
        description: "Luxury bathroom renovation featuring a freestanding tub, walk-in shower, custom vanity, and high-end fixtures and finishes.",
        location: "Craighall Park, Johannesburg",
        completionDate: "November 2022",
        image: "https://readdy.ai/api/search-image?query=luxury%2520bathroom%2520renovation%2520with%2520freestanding%2520tub%252C%2520walk-in%2520shower%252C%2520marble%2520surfaces%252C%2520elegant%2520fixtures%252C%2520high-end%2520bathroom%2520design%252C%2520professional%2520interior%2520photography%2520with%2520neutral%2520background&width=600&height=400&seq=project12&orientation=landscape",
        features: ["Luxury Bathroom", "Custom Vanity", "High-End Fixtures"],
        popularity: 80
    }
];
export default Projects