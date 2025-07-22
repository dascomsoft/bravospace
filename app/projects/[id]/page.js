// import { useParams, Link } from 'react-router-dom';

'use client'
import { projectsData } from '@/helper/projectsData';
import Link from 'next/link';
import { use } from 'react';



 











const ProjectDetail = ({ params }) => {

 const unwrappedParams = use(params);
    const projectId = parseInt(unwrappedParams.id);



  

    if (isNaN(projectId)) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <h1 className="text-3xl font-bold mb-4">Invalid Service ID</h1>
                    <Link href="/services" className="text-blue-600 hover:underline">
                        Return to Services
                    </Link>
                </div>
            </div>
        );
    }
  
  // Extended projects array (same as in Projects.jsx)
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
  
  const project = allProjects[projectId];

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Project Not Found</h1>
          <Link to="/projects">
            <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg shadow-md hover:bg-primary/90 transition-colors">
              Back to Projects
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      
      {/* Breadcrumb */}
      <section className="py-8 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-muted-foreground hover:text-foreground">Home</Link>
            <span className="text-muted-foreground">/</span>
            <Link href="/projects" className="text-muted-foreground hover:text-foreground">Projects</Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground">{project.title}</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative h-96 flex items-center">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/30"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <Link href="/projects" className="inline-flex items-center text-white mb-4 hover:text-gray-300">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Projects
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <h1 className="text-5xl font-bold text-white">{project.title}</h1>
            <span className="bg-primary/20 text-primary-foreground text-sm font-medium px-3 py-1 rounded backdrop-blur-sm">
              {project.category}
            </span>
          </div>
          <div className="flex items-center text-gray-200 mb-4">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <span className="text-lg">{project.location}</span>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-foreground mb-6">Project Overview</h2>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                {project.description} This project represents our commitment to delivering exceptional construction solutions that combine innovative design, quality craftsmanship, and sustainable building practices.
              </p>
              
              <h3 className="text-2xl font-bold text-foreground mb-6">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-card text-card-foreground rounded-lg border shadow-sm p-6">
                  <svg className="w-8 h-8 text-primary mb-4" fill="blue" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Architecture</h4>
                  <p className="text-muted-foreground">Modern design with innovative architectural elements and sustainable features.</p>
                </div>
                <div className="bg-card text-card-foreground rounded-lg border shadow-sm p-6">
                  <svg className="w-8 h-8 text-primary mb-4" fill="blue" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Team Collaboration</h4>
                  <p className="text-muted-foreground">Expert coordination between architects, engineers, and construction specialists.</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-4">Project Highlights</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Premium quality materials and finishes throughout</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Energy-efficient design and sustainable construction practices</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Advanced technology integration and smart building features</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Completed on schedule and within budget</span>
                </li>
              </ul>
            </div>
            
            <div>
              <div className="bg-card text-card-foreground rounded-lg border shadow-sm mb-8">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-6">Project Details</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-muted-foreground mr-3" fill="blue" viewBox="0 0 20 20">
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z" />
                      </svg>
                      <div>
                        <p className="text-sm text-muted-foreground">Category</p>
                        <p className="text-foreground font-medium">{project.category}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-muted-foreground mr-3" fill="blue" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <p className="text-sm text-muted-foreground">Location</p>
                        <p className="text-foreground font-medium">{project.location}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-muted-foreground mr-3" fill="blue" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <p className="text-sm text-muted-foreground">Completion</p>
                        <p className="text-foreground font-medium">2024</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card text-card-foreground rounded-lg border shadow-sm">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">Start Your Project</h3>
                  <p className="text-muted-foreground mb-6">
                    Inspired by this project? Let's discuss how we can bring your vision to life.
                  </p>
                  <div className="space-y-3">
                    <Link href="/contact">
                      <button className="bg-blue-400 text-white cursor-pointer px-8 py-3 rounded-lg shadow-lg hover:bg-primary/90 transition-colors text-lg font-medium w-full">
                        Get Free Consultation
                      </button>
                    </Link>
                    <Link href="/services">
                      <button className="bg-slate-300 mt-3 cursor-pointer px-8 py-3 rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors text-lg font-medium w-full">
                        View Our Services
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-foreground text-center mb-16">Related Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects
              .filter((p, index) => index !== projectId && p.category === project.category)
              .slice(0, 3)
              .map((relatedProject, index) => {
                const relatedIndex = allProjects.findIndex(p => p.title === relatedProject.title);
                return (
                  <div key={index} className="bg-card text-card-foreground rounded-lg border shadow-sm overflow-hidden transition-all hover:shadow-xl">
                    <div className="h-48 overflow-hidden">
                      <img
                        src={relatedProject.image}
                        alt={relatedProject.title}
                        className="w-full h-full object-cover transition-transform hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-foreground mb-2">{relatedProject.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{relatedProject.description.slice(0, 100)}...</p>
                      <Link href={`/projects/${relatedIndex}`}>
                        <button className="bg-blue-400 text-white px-4 py-2 rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors text-sm w-full">
                          View Project
                        </button>
                      </Link>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;