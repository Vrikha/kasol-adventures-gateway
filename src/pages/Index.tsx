
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Mail, MapPin, Car, Phone } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import BookingForm from "@/components/BookingForm";
import ServiceCard from "@/components/ServiceCard";

const Index = () => {
  const [selectedService, setSelectedService] = useState<string>("");
  const [showBookingForm, setShowBookingForm] = useState(false);

  const whatsappNumber = "9857707841";
  const emailAddress = "vrikhaketu.jha@gmail.com";

  const handleWhatsAppRedirect = (service?: string) => {
    const message = service 
      ? `Hi! I'm interested in ${service} with KasolJourneys. Can you please provide more details?`
      : "Hi! I'm interested in your services. Can you please provide more details?";
    
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleEmailBooking = (service: string) => {
    setSelectedService(service);
    setShowBookingForm(true);
  };

  const services = [
    {
      title: "Travel Packages",
      description: "Explore the most scenic locations around Kasol with our curated travel packages",
      features: ["Malana Village Trek", "Tosh Valley Expedition", "Chalal Riverside Walk", "Rasol Village Tour"],
      price: "Starting from ₹2,999",
      image: "photo-1469474968028-56623f02e42e",
      category: "packages"
    },
    {
      title: "Vehicle Rentals",
      description: "Rent two-wheelers and four-wheelers for your mountain adventures",
      features: ["Royal Enfield Bikes", "Activa Scooters", "SUVs & Sedans", "Local Driver Available"],
      price: "Starting from ₹800/day",
      image: "photo-1470071459604-3b5ec3a7fe05",
      category: "rentals"
    },
    {
      title: "Stays & Accommodation",
      description: "Comfortable stays in and around the beautiful Kasol valley",
      features: ["Riverside Camps", "Cozy Guesthouses", "Luxury Resorts", "Budget Hostels"],
      price: "Starting from ₹1,200/night",
      image: "photo-1482938289607-e9573fc25ebb",
      category: "stays"
    },
    {
      title: "Adventure Activities",
      description: "Thrilling adventure activities for adrenaline seekers",
      features: ["River Rafting", "Rock Climbing", "Paragliding", "Camping Under Stars"],
      price: "Starting from ₹1,500",
      image: "photo-1472396961693-142e6e269027",
      category: "adventure"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-orange-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  KasolJourneys
                </h1>
                <p className="text-sm text-gray-600">Your Gateway to Himalayas</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                onClick={() => handleWhatsAppRedirect()}
                className="bg-green-500 hover:bg-green-600 text-white flex items-center space-x-2"
              >
                <MessageCircle className="h-4 w-4" />
                <span className="hidden sm:inline">WhatsApp</span>
              </Button>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Phone className="h-4 w-4" />
                <span className="hidden sm:inline">{whatsappNumber}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center text-center text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-green-900/60 to-orange-900/80" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Discover the Magic of{" "}
            <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Kasol
            </span>
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Experience the pristine beauty of the Himalayas with our curated travel packages, 
            comfortable stays, and thrilling adventures in the heart of Parvati Valley.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => handleWhatsAppRedirect("travel packages")}
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 text-lg"
            >
              Book Your Journey
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Services
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Our Services
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From adventure-packed journeys to peaceful retreats, we offer everything you need 
              for an unforgettable Kasol experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                service={service}
                onWhatsApp={() => handleWhatsAppRedirect(service.title)}
                onEmail={() => handleEmailBooking(service.title)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-green-600 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold mb-8">Ready for Your Adventure?</h3>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            Contact us now to plan your perfect Kasol getaway. We're here to make your mountain dreams come true!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              size="lg"
              onClick={() => handleWhatsAppRedirect()}
              className="bg-green-500 hover:bg-green-600 text-white flex items-center space-x-3 px-8 py-4"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Chat on WhatsApp</span>
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              onClick={() => setShowBookingForm(true)}
              className="border-white text-white hover:bg-white hover:text-gray-900 flex items-center space-x-3 px-8 py-4"
            >
              <Mail className="h-5 w-5" />
              <span>Send Email Inquiry</span>
            </Button>
          </div>

          <div className="mt-12 pt-8 border-t border-white/30">
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>+91 {whatsappNumber}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5" />
                <span>{emailAddress}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5" />
                <span>Kasol, Himachal Pradesh</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center">
              <MapPin className="h-4 w-4 text-white" />
            </div>
            <h4 className="text-2xl font-bold">KasolJourneys</h4>
          </div>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Your trusted partner for exploring the magical landscapes of Kasol and the Parvati Valley. 
            Creating memories that last a lifetime.
          </p>
          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-500">
              © 2024 KasolJourneys. All rights reserved. | Made with ❤️ for mountain lovers
            </p>
          </div>
        </div>
      </footer>

      {/* Booking Form Modal */}
      {showBookingForm && (
        <BookingForm
          service={selectedService}
          onClose={() => setShowBookingForm(false)}
          emailAddress={emailAddress}
        />
      )}
    </div>
  );
};

export default Index;
