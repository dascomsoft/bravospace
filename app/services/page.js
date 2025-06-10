// import { ChevronRight } from 'lucide-react';
import { servicesData } from "@/helper/servicesData";
import Link from "next/link";
import { FaPhoneAlt, FaBars, FaChevronRight, FaQuoteLeft, FaStar, FaStarHalfAlt, FaMapMarkerAlt, FaEnvelope, FaClock, FaPaperPlane, FaPaintRoller, FaBath, FaDoorOpen, FaPaintBrush, FaProjectDiagram, FaLightbulb, FaTools, FaUsers, FaClipboardCheck, FaCheckCircle, FaArchway } from 'react-icons/fa';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';





const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="relative h-96 flex items-center">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="https://readdy.ai/api/search-image?query=construction%20services%20overview%2C%20multiple%20construction%20projects%20collage%2C%20residential%20and%20commercial%20buildings%2C%20professional%20construction%20photography%2C%20modern%20architecture&width=1440&height=400&seq=services-hero&orientation=landscape"
            alt="Our Services"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/30"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Comprehensive construction solutions tailored to meet your specific needs with exceptional quality and innovation.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Complete Construction Solutions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From residential homes to commercial complexes, we provide end-to-end construction services with a focus on quality, innovation, and client satisfaction.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <Link key={index} href={`/services/${index}`}>
                <div className="overflow-hidden transition-transform hover:scale-105 cursor-pointer">
                  <div className="h-64 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-primary font-medium">Learn more</span>
                      {/* <ChevronRight className="w-4 h-4 text-primary" /> */}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We follow a structured approach to ensure your project is completed on time, within budget, and to the highest standards.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "Initial meeting to understand your vision, requirements, and budget.",
                icon: "consultation"
              },
              {
                step: "02", 
                title: "Design & Planning",
                description: "Detailed architectural plans and project timeline development.",
                icon: "design"
              },
              {
                step: "03",
                title: "Construction",
                description: "Professional execution with regular progress updates and quality control.",
                icon: "construction"
              },
              {
                step: "04",
                title: "Completion",
                description: "Final inspection, handover, and ongoing support for your project.",
                icon: "completion"
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{process.title}</h3>
                <p className="text-muted-foreground">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss your construction needs and create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              {/* <Link variant="secondary" size="lg" className="w-full sm:w-auto">
                Get a Free Quote
              </Link> */}
            </Link>
            <Link href="/projects">
              {/* <Link variant="outline" size="lg" className="w-full sm:w-auto bg-transparent border-white text-white hover:bg-white/10">
                View Our Work
              </Link> */}
            </Link>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Services;