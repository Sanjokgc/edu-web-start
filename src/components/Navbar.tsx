
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm py-4 fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-education-blue">EduLearn</h1>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-700 hover:text-education-blue font-medium transition-colors">
            Home
          </a>
          <a href="#courses" className="text-gray-700 hover:text-education-blue font-medium transition-colors">
            Courses
          </a>
          <a href="#features" className="text-gray-700 hover:text-education-blue font-medium transition-colors">
            Features
          </a>
          <a href="#testimonials" className="text-gray-700 hover:text-education-blue font-medium transition-colors">
            Testimonials
          </a>
          <Button className="bg-education-blue hover:bg-blue-700 text-white">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 animate-fade-in">
          <div className="flex flex-col space-y-4">
            <a 
              href="#" 
              className="text-gray-700 hover:text-education-blue font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#courses" 
              className="text-gray-700 hover:text-education-blue font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Courses
            </a>
            <a 
              href="#features" 
              className="text-gray-700 hover:text-education-blue font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#testimonials" 
              className="text-gray-700 hover:text-education-blue font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <Button className="bg-education-blue hover:bg-blue-700 text-white w-full">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
