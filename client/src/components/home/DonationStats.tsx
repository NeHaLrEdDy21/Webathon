
import { Card } from "@/components/ui/card";
import { Heart, Users, Calendar, MapPin } from "lucide-react";

const DonationStats = () => {
  const stats = [
    {
      id: 1,
      name: "Active Donors",
      value: "10,000+",
      description: "Registered donors ready to help",
      icon: <Users className="h-8 w-8 text-medical-blue-500" />,
      color: "bg-medical-blue-50",
    },
    {
      id: 2,
      name: "Lives Saved",
      value: "42,500+",
      description: "Lives impacted through donations",
      icon: <Heart className="h-8 w-8 text-blood-red-500" />,
      color: "bg-blood-red-50",
    },
    {
      id: 3,
      name: "Donation Events",
      value: "250+",
      description: "Community blood drives this year",
      icon: <Calendar className="h-8 w-8 text-medical-blue-500" />,
      color: "bg-medical-blue-50",
    },
    {
      id: 4,
      name: "Donation Centers",
      value: "120+",
      description: "Locations nationwide",
      icon: <MapPin className="h-8 w-8 text-blood-red-500" />,
      color: "bg-blood-red-50",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Making a <span className="text-blood-red-600">Difference</span> Together
          </h2>
          <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
            Our community's impact by the numbers. Every donation counts.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.id} className="border-none shadow-md hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-center justify-center h-16 w-16 rounded-full mx-auto mb-4" style={{ backgroundColor: stat.color }}>
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold text-center text-gray-900">
                  {stat.value}
                </h3>
                <p className="mt-2 text-lg font-medium text-center text-gray-700">
                  {stat.name}
                </p>
                <p className="mt-1 text-sm text-center text-gray-500">
                  {stat.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center justify-center p-4 bg-blood-red-50 rounded-full">
            <p className="text-blood-red-700 font-medium">
              Every 2 seconds, someone in India needs blood.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationStats;
