
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone, ExternalLink } from "lucide-react";

const centers = [
  {
    id: 1,
    name: "NTR Memorial Trust Blood Bank",
    address: "NTR Trust Bhavan,Banjara Hills,Hyderabad",
    phone: "040 3079 9999",
    hours: "Open 24 hours",
    distance: "0.5 miles",
    availability: "High",
    availabilityColor: "text-green-600",
  },
  {
    id: 2,
    name: "appple tr",
    address: "Street no 6,Near Spencers super market,Vidya Nagar,Hyderabad",
    phone: "040 2763 3087",
    hours: "Mon-Sun: 7am-9pm",
    distance: "1.2 miles",
    availability: "Medium",
    availabilityColor: "text-yellow-600",
  },
  {
    id: 3,
    name: "Aarohi Blood bank",
    address: "Lake View Apartments,Banjara Hills,Hyderabad",
    phone: "040 2338 4212",
    hours: "Open 24 hrs",
    distance: "2.3 miles",
    availability: "Low",
    availabilityColor: "text-red-600",
  },
  {
    id: 4,
    name: "Sanjeevani Blood Bank",
    address: "Bhagyanagar Complex,RTC cross roads,Hyderabad",
    phone: "040 2766 7500",
    hours: "Mon-Sun: 9am-6pm",
    distance: "18.6 miles",
    availability: "High",
    availabilityColor: "text-green-600",
  },
];

const DonationCenters = () => {
  const [selectedCenter, setSelectedCenter] = useState(centers[0]);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Find a <span className="text-blood-red-600">Donation Center</span> Near You
          </h2>
          <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
            Locate the closest blood donation center in your area and schedule your appointment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map placeholder - would be replaced with an actual map integration */}
          <div className="bg-gray-200 rounded-xl h-96 overflow-hidden shadow-md relative">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-100/50 to-gray-300/50 flex items-center justify-center">
              <div className="text-center p-6">
                <MapPin className="h-16 w-16 text-blood-red-600 mx-auto mb-4" />
                <p className="text-xl font-medium text-gray-700">
                  Interactive Map
                </p>
                <p className="text-gray-500 mt-2">
                  Showing {centers.length} donation centers near you
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-sm text-gray-500 mb-4">
                Search for centers by location or ZIP code:
              </div>
              <div className="flex">
                <input
                  type="text"
                  placeholder="Enter your location..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blood-red-500"
                />
                <Button className="rounded-l-none bg-blood-red-600 hover:bg-blood-red-700">
                  Search
                </Button>
              </div>
            </div>
            
            <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
              {centers.map((center) => (
                <Card
                  key={center.id}
                  className={`cursor-pointer transition-all hover:shadow-md ${
                    selectedCenter.id === center.id ? "border-blood-red-600 shadow-md" : "border-gray-200"
                  }`}
                  onClick={() => setSelectedCenter(center)}
                >
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex justify-between items-center">
                      <span>{center.name}</span>
                      <span className="text-sm font-normal text-gray-500">{center.distance}</span>
                    </CardTitle>
                    <CardDescription className="flex items-start">
                      <MapPin className="h-4 w-4 mr-1 mt-0.5 text-gray-500" />
                      <span>{center.address}</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1 text-gray-500" />
                        <span className="text-gray-600">{center.hours}</span>
                      </div>
                      <div className={`font-medium ${center.availabilityColor}`}>
                        {center.availability} Availability
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button className="w-full btn-donate">
              Schedule at Selected Center
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationCenters;
