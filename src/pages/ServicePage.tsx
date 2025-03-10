import { useParams, Link } from "react-router-dom";
import { servicesData } from "@/servicesData"; // Import service details
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";

export default function ServicePage() {
  const { serviceSlug } = useParams(); // Get slug from URL
  const service = servicesData.find((s) => s.slug === serviceSlug);

  if (!service) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold text-red-600">Service Not Found</h1>
        <p className="text-gray-500 mt-4">Sorry, we couldn't find this service.</p>
        <Link to="/services">
          <Button variant="outline" className="mt-6">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <Card className="bg-white shadow-lg rounded-xl">
          <CardContent className="p-8">
            {/* Service Icon */}
            <div className={`flex items-center justify-center w-20 h-20 rounded-xl bg-gradient-to-br ${service.gradient} shadow-md`}>
              <service.icon />
            </div>

            {/* Service Title */}
            <h1 className="mt-6 text-4xl font-bold text-gray-900">{service.title}</h1>

            {/* Service Description */}
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">{service.fullDescription}</p>

            {/* Back to Services Button */}
            <div className="mt-6">
              <Link to="/services">
                <Button variant="outline">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
