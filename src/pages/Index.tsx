
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

  const whatsappNumber = "7018227528";
  const emailAddress = "kasoljourney@gmail.com";

  const handleWhatsAppRedirect = (service?: string) => {
    const message = service 
      ? `Hi! I'm interested in ${service} with Kasol Journey. Can you please provide more details?`
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
      title: "Premium Stays & Lodging",
      description: "Experience comfort amidst nature with our handpicked accommodations",
      features: ["Luxury River Camps", "Mountain View Cottages", "Boutique Guesthouses", "Eco-Friendly Stays"],
      price: "Starting from ₹1,500/night",
      image: "photo-1571896349842-33c89424de2d",
      category: "stays"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50/90 via-sky-50/80 to-white/95 relative overflow-hidden">
      {/* Dynamic Background Layers */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-20 -z-20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
        }}
      />
      <div 
        className="fixed top-0 right-0 w-1/2 h-full bg-cover bg-center bg-no-repeat opacity-15 -z-19"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
        }}
      />
      <div 
        className="fixed bottom-0 left-0 w-1/3 h-2/3 bg-cover bg-center bg-no-repeat opacity-10 -z-18"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
        }}
      />
      
      {/* Floating Header */}
      <header className="fixed top-4 left-4 right-4 bg-white/95 backdrop-blur-lg border border-emerald-200/50 rounded-2xl shadow-xl z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                <MapPin className="h-7 w-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Kasol Journey
                </h1>
                <p className="text-sm text-gray-600">Gateway to Himalayan Magic</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                onClick={() => handleWhatsAppRedirect()}
                className="bg-green-600 hover:bg-green-700 text-white shadow-lg border-0 flex items-center space-x-2"
              >
                <MessageCircle className="h-4 w-4" />
                <span className="hidden sm:inline">WhatsApp</span>
              </Button>
              <div className="flex items-center space-x-2 text-sm text-gray-700">
                <Phone className="h-4 w-4" />
                <span className="hidden sm:inline">{whatsappNumber}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-800/70 via-blue-800/50 to-teal-800/70" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 pt-20">
          <h2 className="text-6xl md:text-8xl font-bold mb-8 animate-fade-in leading-tight text-white">
            Where Mountains{" "}
            <span className="bg-gradient-to-r from-emerald-300 via-blue-300 to-teal-300 bg-clip-text text-transparent">
              Meet Magic
            </span>
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Embark on extraordinary journeys through the mystical valleys of Kasol. 
            Where every trail tells a story, every peak holds a secret, and every moment becomes a memory.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button
              size="lg"
              onClick={() => handleWhatsAppRedirect("travel packages")}
              className="bg-gradient-to-r from-emerald-600 to-blue-700 hover:from-emerald-700 hover:to-blue-800 text-white px-10 py-6 text-lg rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 border-0"
            >
              Begin Your Adventure
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/60 bg-white/20 text-white hover:bg-white/30 backdrop-blur-md px-10 py-6 text-lg rounded-full shadow-xl"
              onClick={() => document.getElementById('stories')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Discover Stories
            </Button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center bg-white/15 backdrop-blur-md border border-white/25 rounded-2xl p-6 shadow-xl">
              <div className="text-3xl font-bold text-emerald-300 mb-2">500+</div>
              <div className="text-sm text-blue-100">Happy Travelers</div>
            </div>
            <div className="text-center bg-white/15 backdrop-blur-md border border-white/25 rounded-2xl p-6 shadow-xl">
              <div className="text-3xl font-bold text-blue-300 mb-2">50+</div>
              <div className="text-sm text-blue-100">Scenic Locations</div>
            </div>
            <div className="text-center bg-white/15 backdrop-blur-md border border-white/25 rounded-2xl p-6 shadow-xl">
              <div className="text-3xl font-bold text-teal-300 mb-2">5★</div>
              <div className="text-sm text-blue-100">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Stories Section */}
      <LocationStories onWhatsApp={handleWhatsAppRedirect} onEmail={handleEmailBooking} />

      {/* Two Wheeler Section */}
      <TwoWheelerSection 
        onWhatsApp={handleWhatsAppRedirect}
        onEmail={handleEmailBooking}
      />

      {/* Services Section */}
      <section id="services" className="py-24 px-4 bg-gradient-to-b from-white/60 via-emerald-50/40 to-sky-50/60 backdrop-blur-sm relative">
        <div 
          className="absolute top-0 right-0 w-1/2 h-full bg-cover bg-center opacity-10"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
          }}
        />
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-emerald-100/80 backdrop-blur-sm border border-emerald-200 rounded-full px-6 py-3 mb-6">
              <MapPin className="h-5 w-5 text-emerald-600" />
              <span className="text-sm font-medium text-emerald-800">Premium Services</span>
            </div>
            <h3 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight">
              Curated for{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                Adventurers
              </span>
            </h3>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              From soul-stirring journeys to comfortable stays, 
              we craft experiences that transform travelers into storytellers.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 max-w-2xl mx-auto">
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
      <section className="py-24 bg-gradient-to-r from-emerald-800/90 to-blue-900/90 text-white relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
          }}
        />
        <div 
          className="absolute top-0 left-0 w-1/3 h-full bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/95 to-blue-900/95"></div>
        
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
              className="bg-green-600 hover:bg-green-700 text-white flex items-center space-x-3 px-10 py-6 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 border-0"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Chat on WhatsApp</span>
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              onClick={() => setShowBookingForm(true)}
              className="border-2 border-white/60 bg-white/20 text-white hover:bg-white/30 backdrop-blur-md flex items-center space-x-3 px-10 py-6 rounded-full shadow-xl"
            >
              <Mail className="h-5 w-5" />
              <span>Send Email Inquiry</span>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/15 backdrop-blur-md border border-white/25 rounded-2xl p-8 shadow-xl">
              <Phone className="h-8 w-8 text-emerald-300 mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Call Us</h4>
              <p className="text-blue-100">+91 {whatsappNumber}</p>
            </div>
            <div className="bg-white/15 backdrop-blur-md border border-white/25 rounded-2xl p-8 shadow-xl">
              <Mail className="h-8 w-8 text-blue-300 mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Email Us</h4>
              <p className="text-blue-100 break-all">{emailAddress}</p>
            </div>
            <div className="bg-white/15 backdrop-blur-md border border-white/25 rounded-2xl p-8 shadow-xl">
              <MapPin className="h-8 w-8 text-teal-300 mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Visit Us</h4>
              <p className="text-blue-100">Kasol, Parvati Valley</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-md border-t border-emerald-200/50 text-gray-800 py-12 relative">
        <div 
          className="absolute bottom-0 right-0 w-1/4 h-full bg-cover bg-center opacity-5"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
          }}
        />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-full flex items-center justify-center">
              <MapPin className="h-5 w-5 text-white" />
            </div>
            <h4 className="text-2xl font-bold text-gray-900">Kasol Journey</h4>
          </div>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Creating magical moments in the heart of the Himalayas. 
            Where every journey becomes a story worth telling.
          </p>
          <div className="border-t border-emerald-200 pt-6">
            <p className="text-gray-500">
              © 2024 Kasol Journey. All rights reserved. | Crafted with ❤️ for mountain souls
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
