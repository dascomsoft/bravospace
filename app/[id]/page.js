'use client';

import { servicesData } from '@/helper/servicesData';
import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';

export default function Page({ params }) {
  // Vérification que params.id existe
  if (!params?.id) {
    return <div>Loading...</div>;
  }

  const serviceId = parseInt(params.id);
  
  // CORRECTION ICI : Parenthèse fermante ajoutée
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
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link 
          href="/services" 
          className="flex items-center text-blue-600 hover:text-blue-800"
        >
          <FaChevronRight className="rotate-180 mr-1" />
          Back to Services
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="h-64 w-full overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{service.title}</h1>
          <p className="text-gray-600 mb-6">{service.description}</p>
          
          <div className="prose">
            <h2 className="text-xl font-semibold mb-3">Service Details</h2>
            <ul className="space-y-2 mb-6">
              {service.features?.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <FaChevronRight className="text-blue-500 mt-1 mr-2 flex-shrink-0" size={12} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Contact Us <FaChevronRight className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}