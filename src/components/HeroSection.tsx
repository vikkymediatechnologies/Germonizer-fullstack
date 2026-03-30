import { Shield, Radiation, Search, Hospital } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const services = [
  {
    icon: Shield,
    title: "Drug & Alcohol Management",
    path: "/services/drug-alcohol-management",
  },
  {
    icon: Radiation,
    title: "CBRNe",
    path: "/services/cbrne",
  },
  {
    icon: Search,
    title: "Forensic Investigation Management",
    path: "/services/forensic-investigation",
  },
  {
    icon: Hospital,
    title: "Healthcare Consumer Products",
    path: "/services/healthcare-products",
  },
];

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center pt-24 pb-16"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Hero background"
          className="w-full h-full object-cover opacity-40"
        />
        {/* Optional overlay for better text contrast */}
        <div className="absolute inset-0 bg-white/60"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* ✅ Text Content */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <p className="text-xs md:text-sm font-semibold tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Welcome to Gemonics
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight mb-6">
            Global Distributor Of Healthcare, Drug Testing, CBRNE Detection And
            Forensic Investigation Kits
          </h1>

          <p className="text-muted-foreground text-base md:text-lg max-w-xl leading-relaxed">
            With massive experience and network, customer satisfaction is always
            our first priority.
          </p>
        </div>

        {/* ✅ Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {services.map((svc, i) => (
            <Link to={svc.path} key={i}>
              <div className="bg-card rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 md:p-8 flex flex-col items-center text-center group cursor-pointer border border-border hover:-translate-y-2 h-full">
                
                <svc.icon
                  size={44}
                  className="text-orange mb-4 group-hover:scale-110 transition-transform"
                  strokeWidth={1.5}
                />

                <h3 className="text-sm md:text-base font-semibold text-navy leading-snug">
                  {svc.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;