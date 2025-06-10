// servicesData.ts (ou .js selon ton projet)
import { FaArchway, FaBath, FaPaintRoller, FaDoorOpen, FaPaintBrush, FaProjectDiagram } from "react-icons/fa";

export const servicesData = [
  {
    id: 1,
    title: "Intricate Ceiling Designs",
    description: "Artistic and detailed ceilings that elevate your interior spaces with unique visual appeal.",
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    icon: FaArchway,
    alt: "Ceiling design",
    link: "/about",
  },
  {
    id: 2,
    title: "Bathroom Tiling & Seamless Showers",
    description: "Elegant tiling solutions including seamless shower designs for a modern, easy-to-maintain bathroom.",
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    icon: FaBath,
    alt: "Bathroom tiling",
    link: "#",
  },
  {
    id: 3,
    title: "Interior & Exterior Painting",
    description: "Professional painting services that provide both protection and aesthetic enhancement for your property.",
    image: "https://images.unsplash.com/photo-1600585152915-d208bec867a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    icon: FaPaintRoller,
    alt: "Interior painting",
    link: "#",
  },
  {
    id: 4,
    title: "Handmade Doors & Italian Cornices",
    description: "Exquisite artisanal doors and decorative Italian cornices that add a distinctive touch of elegance.",
    image: "https://images.unsplash.com/photo-1600450552764-25a60610116b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    icon: FaDoorOpen,
    alt: "Handmade door",
    link: "#",
  },
  {
    id: 5,
    title: "Rhinolite Application",
    description: "Premium decorative coatings that create a sophisticated finish for walls and architectural elements.",
    image: "https://images.unsplash.com/photo-1606744837616-56c9a5c6a6eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    icon: FaPaintBrush,
    alt: "Rhinolite application",
    link: "#",
  },
  {
    id: 6,
    title: "Custom Construction Projects",
    description: "Complete bespoke construction solutions tailored to your specific vision and requirements.",
    image: "https://images.unsplash.com/photo-1581093318105-ad3d3f4d3b52?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    icon: FaProjectDiagram,
    alt: "Construction planning",
    link: "#",
  },
];
