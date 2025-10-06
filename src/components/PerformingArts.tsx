import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Music, Palette, Scissors, Calendar, UtensilsCrossed, BookOpen, Sparkles } from "lucide-react";
import bharatanatyamImg from "@/assets/bharatanatyam.jpg";
import karagattamImg from "@/assets/karagattam.jpg";
import poikkalKuthiraiImg from "@/assets/poikkal-kuthirai.jpg";
import paraiAttamImg from "@/assets/parai-attam.jpg";
import nadaswaramImg from "@/assets/nadaswaram-thavil.jpg";
import tanjourePaintingsImg from "@/assets/tanjore-paintings.jpg";
import kolamArtImg from "@/assets/kolam-art.jpg";
import bronzeSculpturesImg from "@/assets/bronze-sculptures.jpg";
import stoneCarvingsImg from "@/assets/stone-carvings.jpg";
import thanjavurDollsImg from "@/assets/thanjavur-dolls.webp";
import swamimalaiBronzeImg from "@/assets/swamimalai-bronze-casting.webp";
import pongalImg from "@/assets/pongal.webp";
import chithiraiImg from "@/assets/chithirai-thiruvizha.webp";
import karthigaiDeepamImg from "@/assets/karthigai-deepam.webp";
import natyanjaliImg from "@/assets/Natyanjali.webp";
import bananaLeafMealImg from "@/assets/Traditional-Banana-Leaf-Meals.jpeg";
import chettinadCuisineImg from "@/assets/Chettinad-Cuisine.webp";
import jigarthandaImg from "@/assets/Madurai-Jigarthanda.webp";
import sangamLiteratureImg from "@/assets/Sangam-Literature.webp";
import tirukkuralImg from "@/assets/thirukkural.webp";
import bhaktiMovementImg from "@/assets/Bhakti-Movement.webp";
import tamilScriptImg from "@/assets/Tamil-Script.webp";

interface ArtForm {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: any;
  image?: string;
}

const performingArts: ArtForm[] = [
  {
    id: "bharatanatyam",
    name: "Bharatanatyam",
    description: "Classical dance form born in Tamil temples; graceful gestures, storytelling through movement.",
    category: "Dance",
    icon: Sparkles,
    image: bharatanatyamImg
  },
  {
    id: "karagattam",
    name: "Karagattam",
    description: "Folk dance balancing pots on the head, performed during festivals.",
    category: "Dance",
    icon: Sparkles,
    image: karagattamImg
  },
  {
    id: "poikkal-kuthirai",
    name: "Poikkal Kuthirai Aattam",
    description: "\"Dummy horse\" dance performed in rural festivals.",
    category: "Dance",
    icon: Sparkles,
    image: poikkalKuthiraiImg
  },
  {
    id: "parai-attam",
    name: "Parai Attam",
    description: "Oldest drum dance form, symbolizing community celebration.",
    category: "Dance",
    icon: Sparkles,
    image: paraiAttamImg
  },
  {
    id: "nadaswaram",
    name: "Nadaswaram & Thavil",
    description: "Traditional temple instruments with divine significance.",
    category: "Music",
    icon: Music,
    image: nadaswaramImg
  }
];

const visualArts: ArtForm[] = [
  {
    id: "tanjore-paintings",
    name: "Tanjore Paintings",
    description: "Gold foil religious art depicting deities.",
    category: "Art",
    icon: Palette,
    image: tanjourePaintingsImg
  },
  {
    id: "kolam",
    name: "Kalamkari & Kolam Art",
    description: "Hand-drawn floor art using rice flour; a daily expression of devotion and symmetry.",
    category: "Art",
    icon: Palette,
    image: kolamArtImg
  },
  {
    id: "bronze-sculptures",
    name: "Bronze Sculptures",
    description: "Especially Chola bronzes (Nataraja, Devi figures) known worldwide for perfection.",
    category: "Sculpture",
    icon: Palette,
    image: bronzeSculpturesImg
  },
  {
    id: "stone-carvings",
    name: "Stone Carvings & Temple Murals",
    description: "Vibrant wall paintings in temples like Madurai, Chidambaram, and Kanchipuram.",
    category: "Art",
    icon: Palette,
    image: stoneCarvingsImg
  }
];

const handicrafts: ArtForm[] = [
 
  {
    id: "thanjavur-dolls",
    name: "Thanjavur Dolls",
    description: "Traditional bobble-head toys.",
    category: "Craft",
    icon: Scissors,
    image: thanjavurDollsImg
  },
  {
    id: "bronze-casting",
    name: "Swamimalai Bronze Casting",
    description: "UNESCO-recognized metalwork tradition.",
    category: "Craft",
    icon: Scissors,
    image: swamimalaiBronzeImg
  }
];

const festivals: ArtForm[] = [
  {
    id: "pongal",
    name: "Pongal",
    description: "Harvest festival celebrating nature and farmers.",
    category: "Festival",
    icon: Calendar,
    image: pongalImg
  },
  {
    id: "chithirai",
    name: "Chithirai Thiruvizha",
    description: "Grand temple festival reenacting divine marriage (Madurai).",
    category: "Festival",
    icon: Calendar,
    image: chithiraiImg
  },
  {
    id: "karthigai-deepam",
    name: "Karthigai Deepam",
    description: "Festival of lights on Arunachala hill (Thiruvannamalai).",
    category: "Festival",
    icon: Calendar,
    image: karthigaiDeepamImg
  },
  {
    id: "natyanjali",
    name: "Natyanjali",
    description: "Bharatanatyam dance festival honoring Lord Nataraja (Chidambaram).",
    category: "Festival",
    icon: Calendar,
    image: natyanjaliImg
  }
];

const cuisine: ArtForm[] = [
  {
    id: "banana-leaf",
    name: "Traditional Banana Leaf Meals",
    description: "Sambar, rasam, dosai, idli, and temple prasadam traditions.",
    category: "Cuisine",
    icon: UtensilsCrossed,
    image: bananaLeafMealImg
  },
  {
    id: "chettinad",
    name: "Chettinad Cuisine",
    description: "Millet dishes, spicy curries, and aromatic flavors.",
    category: "Cuisine",
    icon: UtensilsCrossed,
    image: chettinadCuisineImg
  },
  {
    id: "jigarthanda",
    name: "Madurai Jigarthanda",
    description: "Heritage cold beverage with milk, almond gum, and ice cream.",
    category: "Cuisine",
    icon: UtensilsCrossed,
    image: jigarthandaImg
  }
];

const literature: ArtForm[] = [
  {
    id: "sangam",
    name: "Sangam Literature",
    description: "Earliest Tamil poetry, reflecting love, valor, and ethics.",
    category: "Literature",
    icon: BookOpen,
    image: sangamLiteratureImg
  },
  {
    id: "thirukkural",
    name: "Tirukkural",
    description: "Moral masterpiece by Thiruvalluvar with 1,330 couplets on virtue, wealth, and love.",
    category: "Literature",
    icon: BookOpen,
    image: tirukkuralImg
  },
  {
    id: "bhakti",
    name: "Bhakti Movement",
    description: "Devotional poetry of Alvars & Nayanmars inspiring temple culture.",
    category: "Literature",
    icon: BookOpen,
    image: bhaktiMovementImg
  },
  {
    id: "tamil-script",
    name: "Tamil Script & Inscriptions",
    description: "Evolution of Tamil writing seen in temples and ancient rocks.",
    category: "Literature",
    icon: BookOpen,
    image: tamilScriptImg
  }
];

const PerformingArts = () => {
  const renderArtSection = (title: string, description: string, items: ArtForm[], gradient: string) => (
    <div className="mb-16">
      <div className="text-center mb-12">
        <h3 className={`font-heritage text-3xl md:text-4xl font-bold bg-gradient-${gradient} bg-clip-text text-transparent mb-3`}>
          {title}
        </h3>
        <p className="font-culture text-muted-foreground max-w-2xl mx-auto">
          {description}
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <Card key={item.id} className="group hover:shadow-temple hover:border-accent/50 transition-all duration-300 hover:-translate-y-1 bg-card/80 backdrop-blur-sm overflow-hidden">
              {item.image && (
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
              )}
              <CardHeader className="pb-3">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="font-heritage text-lg text-primary group-hover:text-accent transition-colors">
                      {item.name}
                    </CardTitle>
                    <Badge variant="secondary" className="mt-2 text-xs">
                      {item.category}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="font-culture text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );

  return (
    <section id="performing-arts" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heritage text-4xl md:text-5xl font-bold text-primary mb-4">
            Cultural Heritage & Living Traditions
          </h2>
          <p className="font-culture text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore the vibrant performing arts, visual traditions, handicrafts, and cultural expressions
            that have shaped Tamil Nadu's identity for millennia
          </p>
        </div>

        {renderArtSection(
          "🎭 Performing Arts",
          "Highlight the performing traditions that define Tamil Nadu's identity",
          performingArts,
          "temple"
        )}

        {renderArtSection(
          "🎨 Visual Arts",
          "Display Tamil Nadu's visual creativity and artistic excellence",
          visualArts,
          "temple"
        )}

        {renderArtSection(
          "🧵 Handicrafts & Textiles",
          "Handcrafted treasures showcasing centuries of artisan mastery",
          handicrafts,
          "temple"
        )}

        {renderArtSection(
          "🎉 Festivals & Traditions",
          "Vibrant Tamil festivities celebrating devotion, harvest, and community",
          festivals,
          "temple"
        )}

        {renderArtSection(
          "🍛 Tamil Cuisine",
          "Culinary heritage rooted in tradition, flavor, and temple culture",
          cuisine,
          "temple"
        )}

        {renderArtSection(
          "🏛️ Language, Literature & Philosophy",
          "Ancient wisdom and literary excellence spanning over 2,000 years",
          literature,
          "temple"
        )}
      </div>
    </section>
  );
};

export default PerformingArts;
