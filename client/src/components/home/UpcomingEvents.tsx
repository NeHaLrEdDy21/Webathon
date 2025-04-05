
import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const events = [
  {
    id: 1,
    title: "Community Blood Drive",
    date: "April 15, 2025",
    time: "9:00 AM - 4:00 PM",
    location: "Central Community Center",
    address: "123 Main St, San Francisco",
    spotsAvailable: 24,
    image: "https://source.unsplash.com/random/300x200/?medical",
  },
  {
    id: 2,
    title: "Corporate Donation Day",
    date: "April 22, 2025",
    time: "10:00 AM - 3:00 PM",
    location: "Tech Plaza Office Building",
    address: "456 Market St, San Francisco",
    spotsAvailable: 12,
    image: "https://source.unsplash.com/random/300x200/?office",
  },
  {
    id: 3,
    title: "University Blood Drive",
    date: "May 1, 2025",
    time: "11:00 AM - 6:00 PM",
    location: "State University Campus",
    address: "789 Campus Ave, Berkeley",
    spotsAvailable: 50,
    image: "https://source.unsplash.com/random/300x200/?university",
  },
  {
    id: 4,
    title: "Neighborhood Donation Event",
    date: "May 8, 2025",
    time: "8:00 AM - 2:00 PM",
    location: "Sunset Community Hall",
    address: "321 Sunset Blvd, San Francisco",
    spotsAvailable: 18,
    image: "https://source.unsplash.com/random/300x200/?community",
  },
];

const UpcomingEvents = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Upcoming <span className="text-blood-red-600">Donation Events</span>
            </h2>
            <p className="mt-4 text-xl text-gray-500 max-w-2xl">
              Join one of our scheduled blood donation events in your area.
            </p>
          </div>
          <Link to="/events" className="hidden md:flex items-center text-blood-red-600 hover:text-blood-red-700 font-medium">
            View all events
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event) => (
            <Card key={event.id} className="overflow-hidden border-none shadow-lg transition-shadow hover:shadow-xl">
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">{event.title}</CardTitle>
                <div className="space-y-1 mt-2">
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>{event.date} • {event.time}</span>
                  </div>
                  <div className="flex items-start text-sm text-gray-500">
                    <MapPin className="mr-2 h-4 w-4 mt-0.5" />
                    <div>
                      <div>{event.location}</div>
                      <div>{event.address}</div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm">
                  <Users className="mr-2 h-4 w-4 text-blood-red-600" />
                  <span className="font-medium">
                    {event.spotsAvailable} spots available
                  </span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-blood-red-600 hover:bg-blood-red-700 text-white">
                  Reserve Spot
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link to="/events" className="inline-flex items-center text-blood-red-600 hover:text-blood-red-700 font-medium">
            View all events
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
