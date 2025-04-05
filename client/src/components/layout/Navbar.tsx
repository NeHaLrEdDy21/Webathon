
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              {/* Heart SVG */}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="h-8 w-8 text-blood-red-600 mr-2"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
              <span className="font-bold text-xl text-blood-red-600">Sanjeevani</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blood-red-600 px-3 py-2 text-sm font-medium">
              Home
            </Link>
            <Link to="/donate" className="text-gray-700 hover:text-blood-red-600 px-3 py-2 text-sm font-medium">
              Donate
            </Link>
            <Link to="/request" className="text-gray-700 hover:text-blood-red-600 px-3 py-2 text-sm font-medium">
              Request Blood
            </Link>
            <Link to="/centers" className="text-gray-700 hover:text-blood-red-600 px-3 py-2 text-sm font-medium">
              Find Centers
            </Link>
            <Link to="/events" className="text-gray-700 hover:text-blood-red-600 px-3 py-2 text-sm font-medium">
              Events
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blood-red-600 px-3 py-2 text-sm font-medium">
              About Us
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-3">
            <Button variant="ghost" size="icon" className="text-gray-700">
              {/* Bell SVG */}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="h-5 w-5"
              >
                <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
              </svg>
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-700">
              {/* User SVG */}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="h-5 w-5"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </Button>
            <Button className="bg-blood-red-600 hover:bg-blood-red-700 text-white">
              Login / Register
            </Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blood-red-600 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                /* X SVG */
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="block h-6 w-6" 
                  aria-hidden="true"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              ) : (
                /* Menu SVG */
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="block h-6 w-6" 
                  aria-hidden="true"
                >
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={cn("md:hidden", isOpen ? "block" : "hidden")}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blood-red-600">
            Home
          </Link>
          <Link to="/donate" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blood-red-600">
            Donate
          </Link>
          <Link to="/request" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blood-red-600">
            Request Blood
          </Link>
          <Link to="/centers" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blood-red-600">
            Find Centers
          </Link>
          <Link to="/events" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blood-red-600">
            Events
          </Link>
          <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blood-red-600">
            About Us
          </Link>
        </div>
        <div className="pt-4 pb-3 border-t border-gray-200">
          <div className="flex items-center px-5">
            <Button className="w-full bg-blood-red-600 hover:bg-blood-red-700 text-white">
              Login / Register
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
