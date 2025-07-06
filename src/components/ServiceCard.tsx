
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Mail, Star } from "lucide-react";

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
    <Card className="group bg-white/95 backdrop-blur-md border border-green-200/50 hover:bg-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden shadow-xl">
      <div className="relative h-80 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{
            backgroundImage: `url('https://images.unsplash.com/${service.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
        
        <div className="absolute top-4 left-4 flex items-center space-x-2">
          <Badge className="bg-emerald-600 hover:bg-emerald-700 backdrop-blur-md border border-emerald-500/50 text-white font-semibold">
            {service.category}
          </Badge>
          <div className="flex items-center space-x-1 bg-white/90 backdrop-blur-md text-gray-800 px-2 py-1 rounded-full text-xs border border-white/50">
            <Star className="h-3 w-3 text-yellow-500" />
            <span>4.9</span>
          </div>
        </div>
        
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
            {service.title}
          </h3>
          <Badge variant="secondary" className="bg-white/95 text-gray-900 font-bold text-lg px-4 py-2 border border-white/50 backdrop-blur-md">
            {service.price}
          </Badge>
        </div>
      </div>
      
      <CardHeader className="pb-4">
        <CardDescription className="text-gray-700 text-base leading-relaxed">
          {service.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div className="grid grid-cols-2 gap-3">
          {service.features.map((feature, idx) => (
            <div key={idx} className="flex items-center space-x-2 text-sm text-gray-700">
              <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full flex-shrink-0" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            onClick={onWhatsApp}
            className="flex-1 bg-green-600 hover:bg-green-700 text-white flex items-center justify-center space-x-2 border-0 shadow-lg"
          >
            <MessageCircle className="h-4 w-4" />
            <span>WhatsApp</span>
          </Button>
          <Button
            onClick={onEmail}
            variant="outline"
            className="flex-1 border-2 border-gray-300 bg-white/80 text-gray-800 hover:bg-gray-50 backdrop-blur-sm flex items-center justify-center space-x-2"
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
