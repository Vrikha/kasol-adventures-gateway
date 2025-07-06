
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Mail, Fuel, Users, Gauge, Shield } from "lucide-react";

interface TwoWheelerSectionProps {
  onWhatsApp: (service?: string) => void;
  onEmail: (service: string) => void;
}

const TwoWheelerSection = ({ onWhatsApp, onEmail }: TwoWheelerSectionProps) => {
  const bikes = [
    {
      name: "Royal Enfield Classic 350",
      description: "The perfect companion for mountain roads. Built to conquer any terrain with style and reliability.",
      image: "photo-1558618666-fcd25c85cd64",
      price: "₹1,200/day",
      features: ["350cc Engine", "2 Person Capacity", "Highway Cruiser", "Fuel Efficient"],
      specs: {
        engine: "350cc",
        mileage: "35-40 kmpl",
        capacity: "2 Riders",
        type: "Cruiser"
      },
      popular: true
    },
    {
      name: "Royal Enfield Himalayan",
      description: "Adventure-ready beast designed for the mountains. Your ticket to explore the unexplored.",
      image: "photo-1568605117036-5fe5e7bab0b7",
      price: "₹1,500/day",
      features: ["411cc Engine", "Off-road Ready", "Adventure Bike", "Long Range Tank"],
      specs: {
        engine: "411cc",
        mileage: "30-35 kmpl",
        capacity: "2 Riders",
        type: "Adventure"
      },
      popular: false
    },
    {
      name: "Honda Activa 6G",
      description: "Smooth, reliable, and perfect for comfortable rides around Kasol and nearby valleys.",
      image: "photo-1571068316344-75bc76f77890",
      price: "₹800/day",
      features: ["110cc Engine", "Automatic", "City Comfort", "Easy Handling"],
      specs: {
        engine: "110cc",
        mileage: "50-55 kmpl",
        capacity: "2 Riders",
        type: "Scooter"
      },
      popular: false
    },
    {
      name: "Bajaj Pulsar NS200",
      description: "Sporty performance meets mountain adventure. Feel the thrill on every curve.",
      image: "photo-1558454114-f6aa5e0623e5",
      price: "₹1,000/day",
      features: ["200cc Engine", "Sporty Design", "Performance Bike", "Mountain Ready"],
      specs: {
        engine: "200cc",
        mileage: "35-40 kmpl",
        capacity: "2 Riders",
        type: "Sports"
      },
      popular: false
    }
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-emerald-50/70 via-white/80 to-green-50/70 backdrop-blur-sm relative">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
        }}
      />
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-blue-100/80 backdrop-blur-sm border border-blue-200 rounded-full px-6 py-3 mb-6">
            <Gauge className="h-5 w-5 text-blue-600" />
            <span className="text-sm font-medium text-blue-800">Premium Rentals</span>
          </div>
          <h3 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight">
            Ride the{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Mountains
            </span>
          </h3>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Choose from our premium collection of two-wheelers. From classic cruisers 
            to adventure beasts, find your perfect ride for the mountain roads.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {bikes.map((bike, index) => (
            <Card key={index} className="group bg-white/95 backdrop-blur-md border border-green-200/50 hover:bg-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 overflow-hidden shadow-xl">
              <div className="relative h-64 overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/${bike.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')`
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                
                {bike.popular && (
                  <Badge className="absolute top-4 left-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold border-0">
                    Most Popular
                  </Badge>
                )}
                
                <div className="absolute bottom-4 right-4">
                  <Badge variant="secondary" className="bg-white/95 text-gray-900 font-bold text-lg px-4 py-2 border border-white/50 backdrop-blur-md">
                    {bike.price}
                  </Badge>
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {bike.name}
                </CardTitle>
                <p className="text-gray-700 text-base leading-relaxed">
                  {bike.description}
                </p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Specifications */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-emerald-50/80 backdrop-blur-sm border border-emerald-200/50 rounded-lg p-3 text-center">
                    <Fuel className="h-5 w-5 text-blue-600 mx-auto mb-1" />
                    <div className="text-xs text-gray-600">Engine</div>
                    <div className="text-sm font-semibold text-gray-900">{bike.specs.engine}</div>
                  </div>
                  <div className="bg-green-50/80 backdrop-blur-sm border border-green-200/50 rounded-lg p-3 text-center">
                    <Gauge className="h-5 w-5 text-green-600 mx-auto mb-1" />
                    <div className="text-xs text-gray-600">Mileage</div>
                    <div className="text-sm font-semibold text-gray-900">{bike.specs.mileage}</div>
                  </div>
                  <div className="bg-purple-50/80 backdrop-blur-sm border border-purple-200/50 rounded-lg p-3 text-center">
                    <Users className="h-5 w-5 text-purple-600 mx-auto mb-1" />
                    <div className="text-xs text-gray-600">Capacity</div>
                    <div className="text-sm font-semibold text-gray-900">{bike.specs.capacity}</div>
                  </div>
                  <div className="bg-orange-50/80 backdrop-blur-sm border border-orange-200/50 rounded-lg p-3 text-center">
                    <Shield className="h-5 w-5 text-orange-600 mx-auto mb-1" />
                    <div className="text-xs text-gray-600">Type</div>
                    <div className="text-sm font-semibold text-gray-900">{bike.specs.type}</div>
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h5 className="text-gray-900 font-semibold mb-3">Key Features:</h5>
                  <div className="grid grid-cols-2 gap-2">
                    {bike.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm text-gray-700">
                        <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    onClick={() => onWhatsApp(`${bike.name} rental`)}
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white flex items-center justify-center space-x-2 border-0 shadow-lg"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>Book on WhatsApp</span>
                  </Button>
                  <Button
                    onClick={() => onEmail(`${bike.name} rental`)}
                    variant="outline"
                    className="flex-1 border-2 border-gray-300 bg-white/80 text-gray-800 hover:bg-gray-50 backdrop-blur-sm flex items-center justify-center space-x-2"
                  >
                    <Mail className="h-4 w-4" />
                    <span>Email Query</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center bg-white/90 backdrop-blur-md border border-green-200/50 rounded-2xl p-8 shadow-xl">
          <h4 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Our Rentals?</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-700">
            <div>
              <Shield className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <h5 className="font-semibold text-gray-900 mb-2">Fully Insured</h5>
              <p className="text-sm">All vehicles come with comprehensive insurance coverage</p>
            </div>
            <div>
              <Fuel className="h-8 w-8 text-green-600 mx-auto mb-3" />
              <h5 className="font-semibold text-gray-900 mb-2">Well Maintained</h5>
              <p className="text-sm">Regular servicing and quality checks before every rental</p>
            </div>
            <div>
              <Users className="h-8 w-8 text-orange-600 mx-auto mb-3" />
              <h5 className="font-semibold text-gray-900 mb-2">24/7 Support</h5>
              <p className="text-sm">Round-the-clock assistance for any issues during your ride</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TwoWheelerSection;
