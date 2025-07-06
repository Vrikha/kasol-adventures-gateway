
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, MapPin, Phone, Star, Clock, Users } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import BookingForm from "@/components/BookingForm";
import ServiceCard from "@/components/ServiceCard";
import LocationStories from "@/components/LocationStories";
import TwoWheelerSection from "@/components/TwoWheelerSection";

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
      title: "Mystical Travel Packages",
      description: "Journey through enchanted valleys and ancient trails with our expertly crafted packages",
      features: ["Malana Ancient Village", "Tosh Fairy Meadows", "Chalal River Magic", "Rasol Hidden Gems"],
      price: "Starting from ₹2,999",
      image: "photo-1506905925346-21bda4d32df4",
      category: "packages"
    },
    {
      title: "Premium Stays & Lodging",
      description: "Experience comfort amidst nature with our handpicked accommodations",
      features: ["Luxury River Camps", "Mountain View Cottages", "Boutique Guesthouses", "Eco-Friendly Stays"],
      price: "Starting from ₹1,500/night",
      image: "photo-1571896349842-33c89424de2d",
      category: "stays"
    },
    {
      title: "Adrenaline Adventures",
      description: "Push your limits with heart-pounding activities in the Himalayas",
      features: ["White Water Rafting", "Rock Climbing Expeditions", "Paragliding Adventures", "Starlit Camping"],
      price: "Starting from ₹1,800",
      image: "photo-1551632811-561732d1e306",
      category: "adventure"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      {/* Floating Header */}
      <header className="fixed top-4 left-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                <MapPin className="h-7 w-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">
                  KasolJourneys
                </h1>
                <p className="text-sm text-gray-200">Gateway to Himalayan Magic</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                onClick={() => handleWhatsAppRedirect()}
                className="bg-green-500/90 hover:bg-green-600 text-white backdrop-blur-sm border border-green-400/50 flex items-center space-x-2"
              >
                <MessageCircle className="h-4 w-4" />
                <span className="hidden sm:inline">WhatsApp</span>
              </Button>
              <div className="flex items-center space-x-2 text-sm text-gray-200">
                <Phone className="h-4 w-4" />
                <span className="hidden sm:inline">{whatsappNumber}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with Parallax Effect */}
      <section className="relative min-h-screen flex items-center justify-center text-center text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-110"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1464822759844-d150baec93c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 via-indigo-900/70 to-pink-900/90" />
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-32 h-32 bg-orange-400/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-pink-400/20 rounded-full blur-xl animate-pulse"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 pt-20">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8">
            <Star className="h-5 w-5 text-yellow-400" />
            <span className="text-sm font-medium">Rated #1 Kasol Travel Experience</span>
          </div>
          
          <h2 className="text-6xl md:text-8xl font-bold mb-8 animate-fade-in leading-tight">
            Where Mountains{" "}
            <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-400 bg-clip-text text-transparent">
              Meet Magic
            </span>
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Embark on extraordinary journeys through the mystical valleys of Kasol. 
            Where every trail tells a story, every peak holds a secret, and every moment becomes a memory.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button
              size="lg"
              onClick={() => handleWhatsAppRedirect("travel packages")}
              className="bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white px-10 py-6 text-lg rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Begin Your Adventure
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-10 py-6 text-lg rounded-full"
              onClick={() => document.getElementById('stories')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Discover Stories
            </Button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">500+</div>
              <div className="text-sm text-gray-300">Happy Travelers</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <div className="text-3xl font-bold text-pink-400 mb-2">50+</div>
              <div className="text-sm text-gray-300">Scenic Locations</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">5★</div>
              <div className="text-sm text-gray-300">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Stories Section */}
      <LocationStories />

      {/* Two Wheeler Section */}
      <TwoWheelerSection 
        onWhatsApp={handleWhatsAppRedirect}
        onEmail={handleEmailBooking}
      />

      {/* Services Section */}
      <section id="services" className="py-24 px-4 bg-gradient-to-b from-transparent to-black/20">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3 mb-6">
              <MapPin className="h-5 w-5 text-orange-400" />
              <span className="text-sm font-medium text-white">Premium Services</span>
            </div>
            <h3 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
              Curated for{" "}
              <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
                Adventurers
              </span>
            </h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              From soul-stirring journeys to adrenaline-pumping adventures, 
              we craft experiences that transform travelers into storytellers.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
      <section className="py-24 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/95 to-pink-900/95"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h3 className="text-5xl font-bold mb-8">Your Adventure Awaits</h3>
          <p className="text-xl mb-16 max-w-2xl mx-auto leading-relaxed">
            Ready to write your own mountain story? Let's plan an unforgettable journey 
            through the magical landscapes of Kasol together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button
              size="lg"
              onClick={() => handleWhatsAppRedirect()}
              className="bg-green-500/90 hover:bg-green-600 backdrop-blur-sm border border-green-400/50 text-white flex items-center space-x-3 px-10 py-6 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Chat on WhatsApp</span>
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              onClick={() => setShowBookingForm(true)}
              className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm flex items-center space-x-3 px-10 py-6 rounded-full"
            >
              <Mail className="h-5 w-5" />
              <span>Send Email Inquiry</span>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <Phone className="h-8 w-8 text-green-400 mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Call Us</h4>
              <p className="text-gray-300">+91 {whatsappNumber}</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <Mail className="h-8 w-8 text-blue-400 mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Email Us</h4>
              <p className="text-gray-300 break-all">{emailAddress}</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <MapPin className="h-8 w-8 text-orange-400 mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Visit Us</h4>
              <p className="text-gray-300">Kasol, Parvati Valley</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 backdrop-blur-sm border-t border-white/10 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full flex items-center justify-center">
              <MapPin className="h-5 w-5 text-white" />
            </div>
            <h4 className="text-2xl font-bold">KasolJourneys</h4>
          </div>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Creating magical moments in the heart of the Himalayas. 
            Where every journey becomes a story worth telling.
          </p>
          <div className="border-t border-white/10 pt-6">
            <p className="text-gray-500">
              © 2024 KasolJourneys. All rights reserved. | Crafted with ❤️ for mountain souls
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
