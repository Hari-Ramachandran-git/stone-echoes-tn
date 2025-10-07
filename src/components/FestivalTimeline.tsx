import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Sparkles } from "lucide-react";
import pongalVideo from "@/assets/pongal-video.mp4";
import jallikattuVideo from "@/assets/jallikattu-video.mp4";
import thaipusamVideo from "@/assets/thaipusam.mp4";
import panguniUthiramVideo from "@/assets/panguni-uthiram.mp4";
import tamilPuthanduVideo from "@/assets/tamil-puthandu.mp4";
import chithiraiThiruvizhaVideo from "@/assets/chithirai-thiruvizha.mp4";
import vaikasiVisakamVideo from "@/assets/vaikasi-visakam.mp4";
import chariotFestivalVideo from "@/assets/chariot-festival.mp4";
import aadiPerukkuVideo from "@/assets/aadi-perukku.mp4";
import krishnaJayanthiVideo from "@/assets/krishna-jayanthi.mp4";
import navaratriGoluVideo from "@/assets/navaratri-golu.mp4";
import karthigaiDeepamVideo from "@/assets/karthigai-deepam.mp4";

interface Festival {
  id: string;
  name: string;
  month: string;
  description: string;
  videoUrl?: string;
  videoFile?: string;
  color: string;
}

const festivals: Festival[] = [
  {
    id: "pongal",
    name: "Pongal",
    month: "January (Thai)",
    description: "Four-day harvest festival celebrating the Sun God, nature, and farmers. Traditional sweet rice dish cooked in earthen pots symbolizes prosperity and abundance.",
    videoFile: pongalVideo,
    color: "bg-amber-500",
  },
  {
    id: "jallikattu",
    name: "Jallikattu",
    month: "January (Mattu Pongal)",
    description: "Ancient bull-taming sport celebrated during Pongal. A symbol of Tamil pride and bravery, deeply rooted in agrarian culture and tradition.",
    videoFile: jallikattuVideo,
    color: "bg-red-500",
  },
  {
    id: "thaipusam",
    name: "Thaipusam",
    month: "January-February (Thai)",
    description: "Grand celebration honoring Lord Murugan. Devotees carry kavadis and undertake penance, culminating in spectacular processions to Murugan temples.",
    videoFile: thaipusamVideo,
    color: "bg-yellow-500",
  },
  {
    id: "panguni-uthiram",
    name: "Panguni Uthiram",
    month: "March-April (Panguni)",
    description: "Celestial wedding festival celebrating divine marriages of deities. Major temple festivals with grand processions and elaborate rituals across Tamil Nadu.",
    videoFile: panguniUthiramVideo,
    color: "bg-pink-500",
  },
  {
    id: "puthandu",
    name: "Tamil New Year – Puthandu",
    month: "April 14 (Chithirai)",
    description: "Tamil New Year celebrated with new clothes, special dishes like mango pachadi (symbolizing life's varied experiences), and temple visits for blessings.",
    videoFile: tamilPuthanduVideo,
    color: "bg-green-500",
  },
  {
    id: "chithirai",
    name: "Chithirai Thiruvizha",
    month: "April-May (Chithirai)",
    description: "Madurai's grandest temple festival reenacting the celestial wedding of Goddess Meenakshi and Lord Sundareswarar, attracting millions of devotees.",
    videoFile: chithiraiThiruvizhaVideo,
    color: "bg-purple-500",
  },
  {
    id: "vaikasi-visakam",
    name: "Vaikasi Visakam",
    month: "May-June (Vaikasi)",
    description: "Birth anniversary of Lord Murugan. Major celebrations at six abodes (Arupadai Veedu) with special abhishekams and chariot processions.",
    videoFile: vaikasiVisakamVideo,
    color: "bg-orange-500",
  },
  {
    id: "chariot-festival",
    name: "Chariot Festivals (Thanjavur)",
    month: "May-June",
    description: "Magnificent temple car festivals where deities are taken in grand procession on towering chariots, pulled by thousands of devotees through temple streets.",
    videoFile: chariotFestivalVideo,
    color: "bg-blue-500",
  },
  {
    id: "aadi-perukku",
    name: "Aadi Perukku",
    month: "July-August (Aadi)",
    description: "River festival honoring water as life source. Women worship at riverbanks, offering prayers for prosperity and celebrating the monsoon's abundance.",
    videoFile: aadiPerukkuVideo,
    color: "bg-cyan-500",
  },
  {
    id: "krishna-jayanthi",
    name: "Krishna Jayanthi",
    month: "August-September (Aavani)",
    description: "Lord Krishna's birth celebration with devotional songs, dahi handi (pot-breaking), and elaborate decorations. Children dress as Krishna and Radha.",
    videoFile: krishnaJayanthiVideo,
    color: "bg-indigo-500",
  },
  {
    id: "navaratri",
    name: "Navaratri & Golu",
    month: "September-October (Purattasi)",
    description: "Nine nights celebrating Goddess Durga. Homes display artistic doll arrangements (Golu) on stepped platforms, depicting mythological and cultural themes.",
    videoFile: navaratriGoluVideo,
    color: "bg-rose-500",
  },
  {
    id: "karthigai-deepam",
    name: "Karthigai Deepam",
    month: "November-December (Karthigai)",
    description: "Festival of lights with the divine beacon atop Arunachala hill in Thiruvannamalai. Homes and temples lit with countless oil lamps symbolizing enlightenment.",
    videoFile: karthigaiDeepamVideo,
    color: "bg-amber-600",
  },
  {
    id: "vaikunta-ekadasi",
    name: "Vaikunta Ekadasi",
    month: "December-January (Margazhi)",
    description: "Most sacred Vishnu festival. Devotees pass through the 'Vaikunta Dwaram' (heaven's gate) at temples for divine liberation and spiritual merit.",
    color: "bg-violet-500",
  },
];

const FestivalTimeline = () => {
  return (
    <section id="festival-timeline" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-4 animate-scale-in">
            <Calendar className="w-8 h-8 text-accent" />
            <Sparkles className="w-6 h-6 text-accent animate-pulse" />
          </div>
          <h2 className="font-heritage text-4xl md:text-5xl font-bold text-primary mb-4">
            Tamil Nadu Festival Calendar
          </h2>
          <p className="font-culture text-lg text-muted-foreground max-w-3xl mx-auto">
            Experience the vibrant tapestry of Tamil traditions through year-round celebrations,
            from harvest festivals to divine processions
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-accent/20 via-accent/50 to-accent/20" />

          <div className="space-y-12">
            {festivals.map((festival, index) => (
              <div
                key={festival.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col gap-8 animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-accent border-4 border-background shadow-lg z-10 animate-scale-in" 
                  style={{ animationDelay: `${index * 0.1 + 0.2}s` }} />

                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <Card className="group hover:shadow-temple hover:border-accent/50 transition-all duration-500 hover:-translate-y-2 hover:scale-105 bg-card/80 backdrop-blur-sm overflow-hidden">
                    <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                      {festival.videoFile ? (
                        <video
                          className="w-full h-full object-cover"
                          src={festival.videoFile}
                          title={festival.name}
                          autoPlay
                          muted
                          loop
                          playsInline
                        />
                      ) : festival.videoUrl ? (
                        <iframe
                          className="w-full h-full"
                          src={festival.videoUrl}
                          title={festival.name}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className={`w-20 h-20 rounded-full ${festival.color} opacity-20 animate-pulse`} />
                        </div>
                      )}
                    </div>

                    <CardHeader>
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1">
                          <CardTitle className="font-heritage text-xl text-primary group-hover:text-accent transition-colors mb-2">
                            {festival.name}
                          </CardTitle>
                          <Badge variant="secondary" className="text-xs">
                            {festival.month}
                          </Badge>
                        </div>
                        <div className={`w-3 h-3 rounded-full ${festival.color}`} />
                      </div>
                    </CardHeader>

                    <CardContent>
                      <CardDescription className="font-culture text-sm leading-relaxed">
                        {festival.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </div>

                {/* Spacer for the other side */}
                <div className="hidden md:block w-5/12" />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="font-culture text-muted-foreground italic">
            Each festival weaves together devotion, culture, and community,
            making Tamil Nadu a land of perpetual celebration
          </p>
        </div>
      </div>
    </section>
  );
};

export default FestivalTimeline;
