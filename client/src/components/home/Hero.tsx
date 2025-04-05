
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:space-x-8">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="flex items-center space-x-2 mb-4">
              {/* Custom SVG Droplet icon */}
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
                className="h-6 w-6 text-blood-red-600"
              >
                <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
              </svg>
              <span className="text-blood-red-600 font-medium">Life Share</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-blood-red-600">Donate Blood,</span> <br />
              Save a Life Today
            </h1>

            <p className="text-lg text-gray-600 max-w-xl mb-8">
              Your blood donation can save up to three lives. Join our community of donors and make a difference today. Every drop counts!
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button className="btn-donate px-8 py-6 text-lg">
                Donate Now
              </Button>
              <Button variant="outline" className="px-8 py-6 text-lg border-blood-red-600 text-blood-red-600 hover:bg-blood-red-50">
                Request Blood
              </Button>
            </div>

            <div className="mt-10 flex items-center">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className={`inline-block h-8 w-8 rounded-full bg-blood-red-${item * 100} border-2 border-white`}></div>
                ))}
              </div>
              <p className="ml-3 text-sm font-medium text-gray-500">
                Joined by <span className="text-blood-red-600 font-bold">10,000+</span> donors worldwide
              </p>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="aspect-[4/3] rounded-2xl bg-white shadow-xl overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blood-red-100/50 to-blood-red-50/30"></div>
              <div className="p-8 h-full flex flex-col justify-between">
                <div className="grid grid-cols-2 gap-4">
                  {['A+', 'B+', 'AB+', 'O+', 'A-', 'B-', 'AB-', 'O-'].map((type) => (
                    <div 
                      key={type} 
                      className={`flex items-center justify-center rounded-lg py-4 ${
                        type === 'O-' ? 'bg-blood-red-600 text-white' : 'bg-white shadow-md'
                      }`}
                    >
                      <span className={`text-2xl font-bold ${
                        type === 'O-' ? 'text-white' : 'text-blood-red-600'
                      }`}>
                        {type}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 bg-white rounded-xl shadow-md p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-500">Most needed blood type</p>
                      <p className="text-xl font-bold text-blood-red-600">O Negative</p>
                    </div>
                    <div className="relative">
                      <div className="h-16 w-16 rounded-full bg-blood-red-600 animate-pulse-slow"></div>
                      <div className="absolute -top-1 -right-1 h-6 w-6 rounded-full bg-blood-red-700 flex items-center justify-center text-white text-xs font-bold">
                        !
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-medical-blue-100 z-[-1]"></div>
            <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-blood-red-100 z-[-1]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
