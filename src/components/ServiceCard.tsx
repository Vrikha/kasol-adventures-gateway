
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Mail } from "lucide-react";

interface Service {
  title: string;
  description: string;
  features: string[];
  price: string;
  image: string;
  category: string;
}

interface ServiceCardProps {
  service: Service;
  onWhatsApp: () => void;
  onEmail: () => void;
}

const ServiceCard = ({ service, onWhatsApp, onEmail }: ServiceCardProps) => {
  return (
    <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border-0 bg-white/80 backdrop-blur-sm">
      <div className="relative h-64 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
          style={{
            backgroundImage: `url('https://images.unsplash.com/${service.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <Badge className="absolute top-4 left-4 bg-orange-500 hover:bg-orange-600 text-white">
          {service.category}
        </Badge>
        <div className="absolute bottom-4 right-4">
          <Badge variant="secondary" className="bg-white/90 text-gray-900 font-semibold">
            {service.price}
          </Badge>
        </div>
      </div>
      
      <CardHeader className="pb-3">
        <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
          {service.title}
        </CardTitle>
        <CardDescription className="text-gray-600 text-base">
          {service.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div className="grid grid-cols-2 gap-2">
          {service.features.map((feature, idx) => (
            <div key={idx} className="flex items-center space-x-2 text-sm text-gray-700">
              <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            onClick={onWhatsApp}
            className="flex-1 bg-green-500 hover:bg-green-600 text-white flex items-center justify-center space-x-2"
          >
            <MessageCircle className="h-4 w-4" />
            <span>WhatsApp</span>
          </Button>
          <Button
            onClick={onEmail}
            variant="outline"
            className="flex-1 border-gray-300 hover:bg-gray-50 flex items-center justify-center space-x-2"
          >
            <Mail className="h-4 w-4" />
            <span>Email</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
