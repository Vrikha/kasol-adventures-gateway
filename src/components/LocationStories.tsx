
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Users, Star } from "lucide-react";

const LocationStories = () => {
  const stories = [
    {
      title: "The Enchanted Village of Malana",
      description: "Step into a world where time stands still. Malana, often called the 'Little Greece of India', harbors ancient secrets and customs that have remained unchanged for millennia.",
      image: "photo-1570973013568-3d90ff4d6a32",
      difficulty: "Moderate",
      duration: "2-3 Days",
      highlights: ["Ancient Parliament System", "Sacred Temples", "Local Hash Culture", "Stunning Valley Views"],
      rating: 4.8
    },
    {
      title: "Tosh: Where Heaven Touches Earth",
      description: "At the end of the road lies Tosh, a village that seems painted by the gods themselves. Here, every sunrise paints the snow-capped peaks in gold, and every sunset whispers stories of eternity.",
      image: "photo-1519904981063-b0cf448d479e",
      difficulty: "Easy",
      duration: "1-2 Days",
      highlights: ["Panoramic Mountain Views", "Traditional Himachali Culture", "Peaceful Environment", "Perfect for Photography"],
      rating: 4.9
    },
    {
      title: "Chalal: The Psychedelic Paradise",
      description: "Cross the bridge into Chalal and enter a realm where creativity flows like the Parvati River. This artist's haven has inspired countless souls with its bohemian spirit and mystical energy.",
      image: "photo-1469474968028-56623f02e42e",
      difficulty: "Easy",
      duration: "1 Day",
      highlights: ["Riverside Cafes", "Art & Music Scene", "Peaceful Walking Trails", "Cannabis-friendly Environment"],
      rating: 4.7
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-700 bg-green-100 border-green-300';
      case 'Moderate': return 'text-orange-700 bg-orange-100 border-orange-300';
      case 'Hard': return 'text-red-700 bg-red-100 border-red-300';
      default: return 'text-gray-700 bg-gray-100 border-gray-300';
    }
  };

  return (
    <section id="stories" className="py-24 px-4 bg-gradient-to-b from-white/70 via-emerald-50/50 to-white/70 backdrop-blur-sm relative">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
        }}
      />
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-emerald-100/80 backdrop-blur-sm border border-emerald-200 rounded-full px-6 py-3 mb-6">
            <Star className="h-5 w-5 text-emerald-600" />
            <span className="text-sm font-medium text-emerald-800">Legendary Destinations</span>
          </div>
          <h3 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight">
            Stories That{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
              Inspire
            </span>
          </h3>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Each destination in Kasol has a tale to tell. Discover the legends, 
            myths, and real adventures that make these places truly magical.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <Card key={index} className="group bg-white/90 backdrop-blur-md border border-green-200/50 hover:bg-white/95 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden shadow-xl">
              <div className="relative h-72 overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/${story.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')`
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                
                {/* Floating badges */}
                <div className="absolute top-4 left-4 flex flex-col space-y-2">
                  <div className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-medium border backdrop-blur-md ${getDifficultyColor(story.difficulty)}`}>
                    <span>{story.difficulty}</span>
                  </div>
                  <div className="inline-flex items-center space-x-1 bg-white/90 backdrop-blur-md text-gray-800 px-3 py-1 rounded-full text-xs border border-white/50">
                    <Star className="h-3 w-3 text-yellow-500" />
                    <span>{story.rating}</span>
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                    {story.title}
                  </h4>
                  <div className="flex items-center space-x-4 text-green-100 text-sm">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{story.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>Kasol</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <p className="text-gray-700 text-sm mb-6 leading-relaxed">
                  {story.description}
                </p>
                
                <div className="mb-6">
                  <h5 className="text-gray-900 font-semibold mb-3">Experience Highlights:</h5>
                  <div className="grid grid-cols-2 gap-2">
                    {story.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-xs text-gray-600">
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Button className="w-full bg-gradient-to-r from-emerald-600 to-green-700 hover:from-emerald-700 hover:to-green-800 text-white border-0 shadow-lg">
                  Explore This Story
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationStories;
