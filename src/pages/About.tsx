import { Link } from "react-router-dom";
import { ArrowRight, Users, Target, Award, Factory, Building2, BadgeCheck, Truck, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const values = [
  {
    icon: Target,
    title: "Quality First",
    description: "We never compromise on quality. Every product undergoes rigorous testing.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description: "Your success is our priority. We work closely to meet your exact needs.",
  },
  {
    icon: Award,
    title: "Innovation",
    description: "Continuous improvement in processes and materials keeps us ahead.",
  },
  {
    icon: Factory,
    title: "Reliability",
    description: "Consistent production capacity and on-time delivery you can count on.",
  },
];

const clients = [
  "LG",
  "DS Group",
  "Frank Brothers",
  "Macmillan",
];

const companyInfo = [
  { label: "Nature of Business", value: "Manufacturer" },
  { label: "Additional Business", value: "Factory/Manufacturing" },
  { label: "Company CEO", value: "Raghvendra Varshney" },
  { label: "Total Employees", value: "26 to 50 People" },
  { label: "Established", value: "2000" },
  { label: "Legal Status", value: "Proprietorship" },
  { label: "Annual Turnover", value: "5 - 25 Cr" },
  { label: "GST No.", value: "09ABRPV1756E1Z4" },
  { label: "Payment Mode", value: "Cash, Cheque, DD" },
  { label: "Shipment Mode", value: "By Road" },
];

const companyUSP = [
  "Primary Competitive Advantage",
  "Experienced R & D Department",
  "Good Financial Position & TQM",
  "Large Production Capacity",
  "Provide Customized Solutions",
  "Quality Measures / Testing Facilities",
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-secondary section-padding">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="heading-display mb-6 opacity-0 animate-fade-in">
              Who We Are?
            </h1>
            <p className="text-body-large opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <strong>M. R. Enterprises</strong> was established in the year <strong>2000</strong>. With over two decades of experience, we have carved a niche in this industry with our superior quality Corrugated Packaging Boxes and Tapes.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="heading-section mb-6">Our Products</h2>
              <div className="space-y-4 text-body">
                <p>
                  We specialize in manufacturing a wide range of superior quality products including:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-muted-foreground">
                  {[
                    "Corrugated Boxes",
                    "Duplex Printed Corrugated Boxes",
                    "Fruits Corrugated Boxes",
                    "5 Ply Corrugated Box",
                    "Printed Corrugated Boxes",
                    "Corrugated Cardboard Boxes",
                    "Packaging Corrugated Boxes",
                    "Packing Boxes",
                    "Corrugated Shipping Boxes",
                    "Carton Box",
                    "Corrugated Roll",
                    "BOPP Tapes",
                    "BOPP Adhesive Tapes",
                    "Paper Roll",
                  ].map((product) => (
                    <li key={product} className="flex items-center gap-2">
                      <BadgeCheck className="w-4 h-4 text-accent shrink-0" />
                      <span>{product}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4">
                  These boxes and tapes are available in various sizes. We also undertake tailor-made orders as per specific requirements.
                </p>
              </div>
            </div>

            <div className="bg-primary text-primary-foreground p-8 md:p-12 rounded-lg">
              <h3 className="heading-card text-primary-foreground mb-8">Our Valued Clientele</h3>
              <p className="text-primary-foreground/80 mb-6">
                We are a client-oriented organization strongly focused on providing superior quality products that exceed expectations. Our products are manufactured using high-grade raw materials and advanced tools & technology.
              </p>
              <div className="space-y-4">
                {clients.map((client, index) => (
                  <div
                    key={client}
                    className="flex items-center gap-4 opacity-0 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <Building2 className="w-5 h-5 text-accent shrink-0" />
                    <span className="text-lg font-semibold">{client}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="heading-section mb-4">Our Core Values</h2>
            <p className="text-body-large">
              These principles guide every decision we make and every product we create.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="bg-background p-6 rounded-lg opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Information Section */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="heading-section mb-6">Basic Information</h2>
              <div className="bg-secondary rounded-lg p-6 md:p-8">
                <div className="space-y-4">
                  {companyInfo.map((info, index) => (
                    <div
                      key={info.label}
                      className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 py-2 border-b border-border last:border-0"
                    >
                      <span className="font-semibold text-foreground min-w-[160px]">{info.label}:</span>
                      <span className="text-muted-foreground">{info.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h2 className="heading-section mb-6">Company USP</h2>
              <div className="grid grid-cols-1 gap-4">
                {companyUSP.map((usp, index) => (
                  <div
                    key={usp}
                    className="flex items-center gap-4 p-4 bg-kraft-light rounded-lg opacity-0 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <Settings className="w-5 h-5 text-accent shrink-0" />
                    <span className="font-medium">{usp}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground section-padding">
        <div className="container-wide text-center">
          <h2 className="heading-section text-primary-foreground mb-4">Packaging Redefined Since 2000</h2>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto mb-8">
            Join hundreds of businesses that trust MR Enterprises for their packaging needs. Let's discuss how we can help you.
          </p>
          <Button variant="kraft" size="lg" asChild>
            <Link to="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;
