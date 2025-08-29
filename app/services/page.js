import { FaChevronRight, FaWhatsapp } from 'react-icons/fa';
import { servicesData } from "@/helper/servicesData";
import Link from "next/link";
import Image from 'next/image';





const Services = () => {
  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section
        id="home"
        className="hero-image flex items-center justify-center text-center pt-16 text-white"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/images/house.jpg)',
          height: "40vh",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "relative"
        }}
        data-aos="fade"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">Comprehensive construction solutions tailored to meet your specific needs with exceptional quality and innovation.
              .</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-100 text-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Complete Construction Solutions</h2>
            <p className="max-w-2xl mx-auto">
              From residential homes to commercial complexes, we provide end-to-end construction services with a focus on quality, innovation, and client satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <Link key={index} href={`/services/${index}`}>
                <div className="overflow-hidden shadow-xl transition-transform hover:scale-105 cursor-pointer">
                  <div className="h-64 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={1350}  height={900}
                      className="w-full h-full object-cover transition-transform hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-primary font-medium">Learn more</span>
                      <FaChevronRight className="w-4 h-4 text-primary" />
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
              <div key={index} className="text-center shadow-xl p-3">
                <div className="bg-blue-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
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

export default Services;