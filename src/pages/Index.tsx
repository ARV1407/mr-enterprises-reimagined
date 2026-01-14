import { Link } from "react-router-dom";
import { ArrowRight, Package, Truck, Shield, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import heroImage from "@/assets/hero-warehouse.jpg";
import boxesImage from "@/assets/boxes-closeup.jpg";

const features = [
  {
    icon: Package,
    title: "Custom Packaging",
    description: "Tailored solutions for every industry and product requirement.",
  },
  {
    icon: Truck,
    title: "On-Time Delivery",
    description: "Reliable logistics ensuring your orders arrive when promised.",
  },
  {
    icon: Shield,
    title: "Quality Assured",
    description: "Rigorous testing and quality control at every production stage.",
  },
];

const stats = [
  { value: "24+", label: "Years Experience" },
  { value: "26-50", label: "Skilled Employees" },
  { value: "5-25 Cr", label: "Annual Turnover" },
  { value: "100%", label: "Quality Tested" },
];

const products = [
  {
    name: "Corrugated Cardboard Boxes",
    description: "Standard and heavy-duty corrugated boxes for all shipping needs.",
    slug: "corrugated-boxes",
  },
  {
    name: "Printed Corrugated Boxes",
    description: "Custom branded packaging to elevate your product presentation.",
    slug: "printed-packaging",
  },
  {
    name: "Fruits Corrugated Boxes",
    description: "Specialized boxes designed for fruits and agricultural products.",
    slug: "fruits-boxes",
  },
  {
    name: "Duplex Printed Boxes",
    description: "Premium duplex board boxes with high-quality printing.",
    slug: "duplex-boxes",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
        </div>
        
        <div className="container-wide relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 text-accent-foreground rounded-full mb-6 animate-fade-in">
              <Package className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-primary-foreground">
                Packaging Redefined Since 2000
              </span>
            </div>
            
            <h1 className="heading-display text-primary-foreground mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Quality Corrugated Packaging Solutions
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              With over two decades of experience, MR Enterprises delivers superior quality Corrugated Packaging Boxes and Tapes for businesses across industries.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Button variant="kraft" size="xl" asChild>
                <Link to="/products">
                  View Products
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link to="/contact">Get a Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-secondary py-12 md:py-16">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="font-display text-3xl md:text-4xl font-bold text-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="heading-section mb-4">Why Choose MR Enterprises?</h2>
            <p className="text-body-large">
              We combine decades of expertise with modern manufacturing to deliver packaging that exceeds expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group p-8 bg-secondary rounded-lg hover:bg-kraft-light transition-all duration-300 opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <feature.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="heading-card mb-3">{feature.title}</h3>
                <p className="text-body">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-section mb-6">Featured Products</h2>
              <p className="text-primary-foreground/70 text-lg mb-8">
                We manufacture a comprehensive range of corrugated packaging products including boxes, rolls, and BOPP tapes in various sizes with tailor-made options.
              </p>
              
              <div className="space-y-4 mb-8">
                {products.map((product) => (
                  <Link
                    key={product.slug}
                    to={`/products/${product.slug}`}
                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-primary-foreground/5 transition-colors group"
                  >
                    <CheckCircle className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold group-hover:text-accent transition-colors">
                        {product.name}
                      </h4>
                      <p className="text-sm text-primary-foreground/60">
                        {product.description}
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity ml-auto shrink-0" />
                  </Link>
                ))}
              </div>

              <Button variant="kraft" asChild>
                <Link to="/products">
                  View All Products
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>

            <div className="relative">
              <img
                src={boxesImage}
                alt="Corrugated boxes in warehouse"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-6 rounded-lg hidden md:block">
                <div className="font-display text-2xl font-bold">GST Registered</div>
                <div className="text-sm">Since 2000</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="bg-kraft-light rounded-2xl p-8 md:p-16 text-center">
            <h2 className="heading-section mb-4">Ready to Get Started?</h2>
            <p className="text-body-large max-w-2xl mx-auto mb-8">
              Contact us today for a free consultation and quote. Our team is ready to help you find the perfect packaging solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="kraft" size="lg" asChild>
                <Link to="/contact">Request a Quote</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
