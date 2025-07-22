


'use client';

import { servicesData } from '@/helper/servicesData';
import Link from 'next/link';
import { use } from 'react';


export default function ServiceDetail({ params }) {

    const unwrappedParams = use(params);
    const serviceId = parseInt(unwrappedParams.id);

    if (isNaN(serviceId)) {
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

    const service = servicesData[serviceId];

    if (!service) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
                    <Link href="/services" className="text-blue-600 hover:underline">
                        Return to Services
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-background text-foreground">
            {/* Breadcrumb */}
            <section className="py-6 bg-muted/50">
                <div className="container mx-auto px-6 text-sm flex items-center gap-2">
                    <Link href="/" className="text-muted-foreground hover:text-foreground">Home</Link>
                    <span>/</span>
                    <Link href="/services" className="text-muted-foreground hover:text-foreground">Services</Link>
                    <span>/</span>
                    <span>{service.title}</span>
                </div>
            </section>

            {/* Hero section */}
            <section className="relative h-96 flex items-center">
                <div className="absolute inset-0 z-0">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/30" />
                </div>
                <div className="container mx-auto px-6  relative z-10 px-6 text-white">
                    <Link href="/services" className="inline-flex items-center mb-4 hover:text-gray-300">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Services
                    </Link>
                    <h1 className="text-5xl font-bold mb-4">{service.title}</h1>
                    <p className="text-xl text-gray-200 max-w-2xl">{service.description}</p>
                </div>
            </section>

            {/* Service Content */}
            <section className="py-20">
                <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left */}
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Service Overview</h2>
                        <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                            {service.description} Our experienced team brings years of expertise and innovative solutions to every project, ensuring exceptional results that exceed your expectations.
                        </p>

                        <h3 className="text-2xl font-semibold mb-4">What We Offer</h3>
                        <ul className="space-y-3">
                            {[
                                "Comprehensive planning and design consultation",
                                "Expert project management and coordination",
                                "Quality materials and skilled craftsmanship",
                                "Timely delivery and budget management",
                                "Post-completion support and maintenance"
                            ].map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <div className="w-2 h-2 mt-2 mr-3 bg-blue-500 rounded-full" />
                                    <span className="text-muted-foreground">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right */}
                    <div>
                        <div className="bg-muted/50 p-8 rounded-xl">
                            <h3 className="text-2xl font-bold mb-4">Get Started Today</h3>
                            <p className="text-muted-foreground mb-6">
                                Ready to begin your {service.title.toLowerCase()} project? Contact us for a free consultation and detailed quote.
                            </p>
                            <Link href="/contact">
                                <button className="w-full bg-blue-400 text-white cursor-pointer px-8 py-3 rounded-lg text-lg font-medium shadow hover:bg-primary/90 transition">
                                    Request Free Consultation
                                </button>
                            </Link>
                            <div className="mt-6 space-y-3">
                                <a href="tel:+27123456789" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                    </svg>
                                    +27 12 345 6789
                                </a>
                                <a href="mailto:info@bravospace294.com" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                    </svg>
                                    info@bravospace294.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Steps */}
            <section className="py-20 bg-muted/50">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-16">Our Process</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { step: "01", title: "Consultation", description: "Initial meeting to discuss your vision and requirements." },
                            { step: "02", title: "Planning", description: "Detailed planning and design development phase." },
                            { step: "03", title: "Execution", description: "Professional implementation with quality control." },
                            { step: "04", title: "Delivery", description: "Final inspection and project handover." }
                        ].map((process, index) => (
                            <div key={index} className="text-center shadow-xl p-3">
                                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-blue-500 text-white text-2xl font-bold">
                                    {process.step}
                                </div>
                                <h3 className="text-xl font-bold mb-2">{process.title}</h3>
                                <p className="text-muted-foreground">{process.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}


























