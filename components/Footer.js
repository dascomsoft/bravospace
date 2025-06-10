 import { FaPhoneAlt, FaBars, FaChevronRight, FaQuoteLeft, FaStar, FaStarHalfAlt, FaMapMarkerAlt, FaEnvelope, FaClock, FaPaperPlane, FaPaintRoller, FaBath, FaDoorOpen, FaPaintBrush, FaProjectDiagram, FaLightbulb, FaTools, FaUsers, FaClipboardCheck, FaCheckCircle, FaArchway } from 'react-icons/fa';
 import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
 

 const Footer = ()=>{


return(

    <div>
 {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center mb-6">
                <span className="text-2xl font-bold text-blue-400">Bravospace</span>
                <span className="text-2xl font-bold text-white">294</span>
              </div>
              <p className="mb-6">The Art of Construction. Transforming spaces with style and precision in Johannesburg and surrounding areas.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <FaFacebookF />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <FaInstagram />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <FaLinkedinIn />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <FaTwitter />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="#home" className="hover:text-white transition" >Home</a></li>
                <li><a href="#services" className="hover:text-white transition" >Services</a></li>
                <li><a href="#projects" className="hover:text-white transition" >Projects</a></li>
                <li><a href="#about" className="hover:text-white transition" >About Us</a></li>
                <li><a href="#contact" className="hover:text-white transition" >Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Our Services</h3>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-white transition">Ceiling Designs</a></li>
                <li><a href="#" className="hover:text-white transition">Bathroom Tiling</a></li>
                <li><a href="#" className="hover:text-white transition">Painting Services</a></li>
                <li><a href="#" className="hover:text-white transition">Custom Doors</a></li>
                <li><a href="#" className="hover:text-white transition">Rhinolite Application</a></li>
                <li><a href="#" className="hover:text-white transition">Complete Builds</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Newsletter</h3>
              <p className="mb-6">Subscribe to our newsletter for the latest updates and construction tips.</p>
              <form className="flex">
                <input type="email" placeholder="Your email" className="px-4 py-2 bg-gray-800 text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"/>
                <button type="submit" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-r-lg text-white">
                  <FaPaperPlane />
                </button>
              </form>
              <div className="mt-6">
                <a href="tel:+27111234567" className="flex items-center text-gray-400 hover:text-white mb-3">
                  <FaPhoneAlt className="mr-3" /> +27 11 123 4567
                </a>
                <a href="mailto:info@bravospace294.co.za" className="flex items-center text-gray-400 hover:text-white">
                  <FaEnvelope className="mr-3" /> info@bravospace294.co.za
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p>© 2023 Bravospace 294. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Sitemap</a>
            </div>
          </div>
        </div>
        </footer>
</div>
)
 }

  export default Footer