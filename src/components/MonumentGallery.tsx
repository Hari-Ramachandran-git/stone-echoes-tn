import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Award, Camera } from "lucide-react";
import brihadeeswararImage from "@/assets/brihadeeswarar-temple.jpg";
import meenakshiImage from "@/assets/meenakshi-temple.jpg";
import shoreTempleImage from "@/assets/shore-temple.jpg";
import gingeeFortImage from "@/assets/gingee-fort.jpg";
import tamilThaiTempleImage from "@/assets/tamil-thai-temple.jpg";
import theppakulamTempleImage from "@/assets/theppakulam-real.jpg";

interface Monument {
  id: string;
  name: string;
  location: string;
  period: string;
  dynasty: string;
  image: string;
  description: string;
  highlights: string[];
  isUNESCO?: boolean;
  category: string;
}

const monuments: Monument[] = [
  {
    id: "brihadeeswarar",
    name: "Brihadeeswarar Temple",
    location: "Thanjavur",
    period: "11th Century",
    dynasty: "Chola",
    image: brihadeeswararImage,
    description: "Built by Raja Raja Chola I, this UNESCO World Heritage site stands as the world's tallest temple tower of its time, showcasing the pinnacle of Chola architecture.",
    highlights: ["World's tallest temple tower", "Shadow never falls at noon", "Single granite capstone weighing 80 tons"],
    isUNESCO: true,
    category: "Temple Architecture"
  },
  {
    id: "meenakshi",
    name: "Meenakshi Amman Temple",
    location: "Madurai",
    period: "14th Century",
    dynasty: "Nayak",
    image: meenakshiImage,
    description: "The crown jewel of Madurai, featuring intricate gopurams with 33,000 sculptures, serving as the cultural and spiritual heart of Tamil Nadu.",
    highlights: ["33,000 sculptures", "14 towering gopurams", "Annual Chithirai Festival"],
    isUNESCO: false,
    category: "Temple Complex"
  },
  {
    id: "shore-temple",
    name: "Shore Temple",
    location: "Mahabalipuram",
    period: "8th Century",
    dynasty: "Pallava",
    image: shoreTempleImage,
    description: "A magnificent 8th-century Pallava marvel facing the Bay of Bengal, carved from single granite blocks and surviving countless storms and tsunamis.",
    highlights: ["Faces the ocean", "Carved from single rock", "Survived 2004 tsunami"],
    isUNESCO: true,
    category: "Rock-cut Architecture"
  },
  {
    id: "gingee-fort",
    name: "Gingee Fort",
    location: "Villupuram",
    period: "9th-16th Century",
    dynasty: "Vijayanagara",
    image: gingeeFortImage,
    description: "Known as the 'Troy of the East', this unconquerable fortress spans three hilltops with massive fortification walls and served as a stronghold for multiple South Indian dynasties.",
    highlights: ["Three hilltop citadels", "Called 'Troy of the East'", "Never conquered by force"],
    isUNESCO: false,
    category: "Military Architecture"
  },
  {
    id: "tamil-thai-temple",
    name: "Tamil Thai Temple",
    location: "Karaikudi",
    period: "20th Century",
    dynasty: "Modern",
    image: tamilThaiTempleImage,
    description: "A beautiful Buddhist temple showcasing Thai architectural style, symbolizing the cultural bond between Tamil Nadu and Thailand, featuring golden spires and intricate Thai craftsmanship.",
    highlights: ["Thai architectural style", "Buddhist heritage", "Cultural friendship monument"],
    isUNESCO: false,
    category: "Buddhist Temple"
  },
  {
    id: "theppakulam-temple",
    name: "Vandiyur Mariamman Theppakulam",
    location: "Madurai",
    period: "17th Century",
    dynasty: "Nayak",
    image: theppakulamTempleImage,
    description: "One of the largest temple tanks in India, this sacred pond was built by King Thirumalai Nayak. The annual float festival sees deities taken on decorated rafts across the water.",
    highlights: ["Largest temple tank in Tamil Nadu", "Annual float festival", "Mandapam in center"],
    isUNESCO: false,
    category: "Sacred Water Body"
  }
];

const MonumentGallery = () => {
  return (
    <section id="monuments" className="py-20 bg-stone/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heritage text-4xl md:text-5xl font-bold text-primary mb-4">
            Monuments & Sacred Spaces
          </h2>
          <p className="font-culture text-lg text-muted-foreground max-w-3xl mx-auto">
            Marvel at the architectural wonders that have stood the test of time, 
            each stone telling tales of devotion, artistry, and human achievement
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {monuments.map((monument) => (
            <Card key={monument.id} className="group overflow-hidden bg-card/80 backdrop-blur-sm border-2 hover:border-accent/50 hover:shadow-temple transition-all duration-500 hover:-translate-y-2">
              {/* Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={monument.image} 
                  alt={monument.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {monument.isUNESCO && (
                    <Badge className="bg-gold text-black font-semibold">
                      <Award className="w-3 h-3 mr-1" />
                      UNESCO
                    </Badge>
                  )}
                  <Badge variant="secondary" className="bg-primary/80 text-primary-foreground">
                    {monument.category}
                  </Badge>
                </div>

                {/* Dynasty Period */}
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-culture text-sm opacity-90">{monument.dynasty} Dynasty</p>
                  <p className="font-heritage text-lg font-semibold">{monument.period}</p>
                </div>
              </div>

              <CardHeader className="pb-4">
                <CardTitle className="font-heritage text-xl text-primary group-hover:text-accent transition-colors">
                  {monument.name}
                </CardTitle>
                <CardDescription className="flex items-center gap-2 font-culture text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  {monument.location}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <p className="font-culture text-muted-foreground text-sm leading-relaxed mb-4">
                  {monument.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 mb-6">
                  {monument.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                      <span className="font-culture text-xs text-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300"
                  >
                    <Camera className="w-4 h-4 mr-2" />
                    Explore
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="flex-1 hover:bg-coral/10 hover:text-coral"
                  >
                    <Clock className="w-4 h-4 mr-2" />
                    History
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="bg-gradient-temple hover:shadow-glow transition-all duration-300 font-culture font-semibold px-8"
          >
            Discover All Monuments
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MonumentGallery;