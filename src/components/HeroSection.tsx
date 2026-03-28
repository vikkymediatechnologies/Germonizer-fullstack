import { Shield, Radiation, Search, Hospital } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const services = [
  { icon: Shield, title: "Drug & Alcohol Management" },
  { icon: Radiation, title: "CBRNe" },
  { icon: Search, title: "Forensic Investigation Management" },
  { icon: Hospital, title: "Healthcare Consumer Products" },
];

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex flex-col justify-center pt-20">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" width={1920} height={1080} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Welcome to Germonizer
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight mb-6">
            Global Distributor Of Healthcare, Drug Testing, CBRNE Detection And Forensic Investigation Kits
          </h1>
          <p className="text-muted-foreground text-lg max-w-lg">
            With massive experience and network, customer satisfaction is always first priority.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          {services.map((svc, i) => (
            <div
              key={i}
              className="bg-card rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 md:p-8 flex flex-col items-center text-center group cursor-pointer border border-border"
            >
              <svc.icon
                size={48}
                className="text-orange mb-4 group-hover:scale-110 transition-transform"
                strokeWidth={1.5}
              />
              <h3 className="text-sm md:text-base font-semibold text-navy">{svc.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
