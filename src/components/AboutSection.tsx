import about1 from "@/assets/about-1.jpg";
import about2 from "@/assets/about-2.jpg";
import about3 from "@/assets/about-3.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img
                src={about1}
                alt="Corporate meeting"
                className="rounded-lg object-cover w-full h-48 shadow-md"
                loading="lazy"
                width={640}
                height={512}
              />
              <img
                src={about2}
                alt="Lab diagnostics"
                className="rounded-lg object-cover w-full h-48 shadow-md"
                loading="lazy"
                width={640}
                height={512}
              />
            </div>
            <div className="pt-8">
              <img
                src={about3}
                alt="CEO Portrait"
                className="rounded-lg object-cover w-full h-[400px] shadow-md"
                loading="lazy"
                width={640}
                height={640}
              />
            </div>
          </div>

          {/* Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">About Us</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We specialize in providing an exceptional network for manufacturing and services
              tailored to meet the needs of end users. Our goal is to connect businesses with the
              resources they need to succeed in today's competitive landscape.
            </p>
            <a
              href="#"
              className="inline-block px-6 py-3 bg-orange text-secondary-foreground font-semibold rounded-md hover:bg-orange-light transition-colors text-sm"
            >
              Know More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
