import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Crown, Ship, Gem, Hammer, Palette, Zap } from "lucide-react";

interface Dynasty {
  id: string;
  name: string;
  period: string;
  icon: React.ComponentType<{ className?: string }>;
  highlights: string[];
  color: string;
  description: string;
}

const dynasties: Dynasty[] = [
  {
    id: "sangam",
    name: "Sangam Age",
    period: "300 BCE - 300 CE",
    icon: Palette,
    highlights: ["Sangam Literature", "Ancient Trade Routes", "Early Tamil Culture"],
    color: "coral",
    description: "The golden age of Tamil literature and early kingdoms"
  },
  {
    id: "pallavas",
    name: "Pallavas",
    period: "275 CE - 897 CE",
    icon: Hammer,
    highlights: ["Mahabalipuram Monuments", "Rock-cut Architecture", "Sanskrit Revival"],
    color: "stone",
    description: "Masters of stone carving and architectural innovation"
  },
  {
    id: "cholas",
    name: "Cholas",
    period: "850 CE - 1279 CE",
    icon: Ship,
    highlights: ["Naval Empire", "Brihadeeswarar Temple", "Bronze Sculptures"],
    color: "bronze",
    description: "The greatest maritime empire of medieval India"
  },
  {
    id: "pandyas",
    name: "Pandyas",
    period: "600 BCE - 1345 CE",
    icon: Gem,
    highlights: ["Pearl Trade", "Meenakshi Temple", "Tamil Patronage"],
    color: "coral",
    description: "Patrons of Tamil culture and architecture"
  },
  {
    id: "cheras",
    name: "Cheras",
    period: "300 BCE - 1102 CE",
    icon: Zap,
    highlights: ["Roman Trade", "Spice Routes", "Cultural Exchange"],
    color: "gold",
    description: "Bridge between Tamil Nadu and the ancient world"
  },
  {
    id: "nayaks",
    name: "Nayaks",
    period: "1529 CE - 1736 CE",
    icon: Crown,
    highlights: ["Madurai Renaissance", "Temple Art", "Cultural Revival"],
    color: "accent",
    description: "Revitalizers of Tamil culture and temple traditions"
  }
];

const DynastyTimeline = () => {
  return (
    <section id="dynasties" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heritage text-4xl md:text-5xl font-bold text-primary mb-4">
            Timeline of Tamil Nadu's Dynasties
          </h2>
          <p className="font-culture text-lg text-muted-foreground max-w-2xl mx-auto">
            Journey through millennia of Tamil civilization, from ancient Sangam poetry 
            to magnificent temple architectures
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent via-primary to-coral rounded-full hidden lg:block" />

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            {dynasties.map((dynasty, index) => {
              const IconComponent = dynasty.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={dynasty.id}
                  className={`relative ${isEven ? 'lg:pr-8' : 'lg:pl-8 lg:col-start-2'}`}
                >
                  {/* Timeline Dot */}
                  <div className="hidden lg:block absolute top-8 w-4 h-4 bg-accent rounded-full shadow-glow" 
                       style={{ 
                         [isEven ? 'right' : 'left']: '-8px'
                       }} />

                  <Card className="group hover:shadow-temple transition-all duration-500 hover:-translate-y-2 bg-card/80 backdrop-blur-sm border-2 hover:border-accent/50">
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-4 mb-2">
                        <div className={`w-12 h-12 bg-${dynasty.color}/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className={`w-6 h-6 text-${dynasty.color}`} />
                        </div>
                        <div>
                          <CardTitle className="font-heritage text-2xl text-primary">
                            {dynasty.name}
                          </CardTitle>
                          <CardDescription className="font-culture text-accent font-semibold">
                            {dynasty.period}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <p className="font-culture text-muted-foreground mb-4 leading-relaxed">
                        {dynasty.description}
                      </p>
                      
                      <div className="space-y-2 mb-6">
                        {dynasty.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-accent rounded-full" />
                            <span className="font-culture text-sm text-foreground">{highlight}</span>
                          </div>
                        ))}
                      </div>
                      
                      {/* <Button 
                        variant="outline" 
                        className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300"
                      >
                        Explore {dynasty.name} Era
                      </Button> */}
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DynastyTimeline;