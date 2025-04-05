
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import DonationStats from "@/components/home/DonationStats";
import HowItWorks from "@/components/home/HowItWorks";
import DonationCenters from "@/components/home/DonationCenters";
import UpcomingEvents from "@/components/home/UpcomingEvents";

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />
        
        {/* Scroll Indicator */}
        <div className="flex justify-center -mt-6">
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full bg-white shadow-md hover:shadow-lg"
            onClick={() => scrollToSection('donation-stats')}
          >
            {/* Down arrow SVG */}
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
              className="h-5 w-5 text-blood-red-600"
            >
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </Button>
        </div>
        
        {/* Donation Statistics */}
        <div id="donation-stats">
          <DonationStats />
        </div>
        
        {/* How It Works */}
        <HowItWorks />
        
        {/* Blood Need Alert Banner */}
        <div className="bg-blood-red-600 py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="flex items-center mb-4 md:mb-0">
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
                  className="h-10 w-10 text-white mr-4"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    Blood supply is critically low
                  </h3>
                  <p className="text-white/90">
                    All blood types are needed, especially O negative and O positive
                  </p>
                </div>
              </div>
              <Button className="bg-white text-blood-red-600 hover:bg-gray-100">
                Donate Now
              </Button>
            </div>
          </div>
        </div>
        
        {/* Donation Centers Map */}
        <DonationCenters />
        
        {/* Upcoming Events */}
        <UpcomingEvents />
        
        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-blood-red-600 to-blood-red-700 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Make a Difference?
            </h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
              Your donation can save up to three lives. Schedule an appointment today or learn more about how you can help.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button className="bg-white text-blood-red-600 hover:bg-gray-100 px-8 py-6 text-lg">
                Donate Blood
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-blood-red-500 px-8 py-6 text-lg">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
