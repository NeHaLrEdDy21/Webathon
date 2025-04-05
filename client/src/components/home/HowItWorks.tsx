
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const steps = [
  {
    id: 1,
    title: "Register as a Donor",
    description: "Create your account with your blood type and contact information.",
    icon: (
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
        className="h-10 w-10"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <line x1="19" y1="8" x2="19" y2="14" />
        <line x1="22" y1="11" x2="16" y2="11" />
      </svg>
    ),
    color: "text-blood-red-600",
    bgColor: "bg-blood-red-50",
  },
  {
    id: 2,
    title: "Schedule a Donation",
    description: "Choose a convenient date, time and location for your blood donation.",
    icon: (
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
        className="h-10 w-10"
      >
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    color: "text-medical-blue-600",
    bgColor: "bg-medical-blue-50",
  },
  {
    id: 3,
    title: "Donate Blood",
    description: "The donation process is quick, safe, and typically takes about 30-45 minutes.",
    icon: (
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
        className="h-10 w-10"
      >
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
      </svg>
    ),
    color: "text-blood-red-600",
    bgColor: "bg-blood-red-50",
  },
  {
    id: 4,
    title: "Save Lives",
    description: "Your donation can help save up to three lives in your community.",
    icon: (
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
        className="h-10 w-10"
      >
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    color: "text-medical-blue-600",
    bgColor: "bg-medical-blue-50",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            How Blood Donation <span className="text-blood-red-600">Works</span>
          </h2>
          <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
            Donating blood is a simple process that takes less than an hour of your time.
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2"></div>
          
          <div className="space-y-12 relative">
            {steps.map((step, index) => (
              <div key={step.id} className={cn("relative z-10", index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12")}>
                <div className="md:flex md:items-center md:flex-row-reverse md:justify-end">
                  <div className={cn(
                    "flex h-20 w-20 items-center justify-center rounded-full p-3 mx-auto md:mx-0",
                    step.bgColor
                  )}>
                    <div className={cn("rounded-full", step.color)}>
                      {step.icon}
                    </div>
                  </div>
                  
                  <div className={cn("mt-6 md:mt-0", index % 2 === 0 ? "md:mr-8" : "md:ml-8", "md:max-w-md")}>
                    <div className="flex items-center md:justify-start">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blood-red-600 text-white font-medium">
                        {step.id}
                      </div>
                      <h3 className={cn("ml-3 text-xl font-bold text-gray-900", index % 2 === 0 ? "md:mr-3 md:ml-0" : "")}>
                        {step.title}
                      </h3>
                    </div>
                    <p className="mt-3 text-base text-gray-500">
                      {step.description}
                    </p>
                  </div>
                </div>
                
                {/* Center dot for timeline */}
                <div className="hidden md:block absolute top-10 left-1/2 w-4 h-4 rounded-full bg-blood-red-600 border-4 border-white shadow-md -translate-x-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Button className="btn-donate px-8 py-6 text-lg">
            Schedule Your Donation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
