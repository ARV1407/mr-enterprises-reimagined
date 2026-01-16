import { Link } from "react-router-dom";
import { ArrowRight, Package, Truck, Shield, CheckCircle, Award, Users } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { PageTransition, ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations";
import heroImage from "@/assets/hero-warehouse.jpg";
import boxesImage from "@/assets/boxes-closeup.jpg";

// Animated counter component
const AnimatedCounter = ({ value, suffix = "", prefix = "" }: { value: string; suffix?: string; prefix?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (isInView) {
      // Extract numeric part
      const numericValue = parseInt(value.replace(/[^0-9]/g, "")) || 0;
      const duration = 2000;
      const steps = 60;
      const increment = numericValue / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= numericValue) {
          setDisplayValue(value);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(current).toString());
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="stat-number text-foreground">
      {prefix}{displayValue}{suffix}
    </span>
  );
};

const features = [
  {
    icon: Package,
    title: "Custom Packaging",
    description: "Tailored solutions designed specifically for your products and brand requirements.",
  },
  {
    icon: Truck,
    title: "Reliable Delivery",
    description: "On-time logistics ensuring your orders arrive exactly when promised.",
  },
  {
    icon: Shield,
    title: "Quality Assured",
    description: "Rigorous testing and quality control at every stage of production.",
  },
  {
    icon: Award,
    title: "Industry Expertise",
    description: "24+ years of experience serving top brands across industries.",
  },
];

const stats = [
  { value: "24", suffix: "+", label: "Years of Excellence" },
  { value: "50", suffix: "+", label: "Skilled Team Members" },
  { value: "25", prefix: "₹", suffix: " Cr+", label: "Annual Turnover" },
  { value: "100", suffix: "%", label: "Quality Tested" },
];

const products = [
  {
    name: "Corrugated Cardboard Boxes",
    description: "Standard and heavy-duty corrugated boxes for all shipping needs.",
    slug: "corrugated-cardboard-boxes",
  },
  {
    name: "Printed Corrugated Boxes",
    description: "Custom branded packaging to elevate your product presentation.",
    slug: "printed-corrugated-boxes",
  },
  {
    name: "Fruits Corrugated Boxes",
    description: "Specialized boxes designed for fruits and agricultural products.",
    slug: "fruits-corrugated-boxes",
  },
  {
    name: "5 Ply Heavy Duty Boxes",
    description: "Maximum strength for heavy or delicate items.",
    slug: "5-ply-boxes",
  },
];

const clients = ["LG", "DS Group", "Frank Brothers", "Macmillan"];

const Index = () => {
  return (
    <Layout>
      <PageTransition>
        {/* Hero Section - Full viewport with overlay */}
        <section className="relative min-h-screen flex items-center">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Industrial warehouse"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 gradient-hero" />
          </div>

          <div className="container-wide relative z-10 pt-20">
            <div className="max-w-3xl">
              <motion.p
                className="text-caption text-accent mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Premium Packaging Since 2000
              </motion.p>

              <motion.h1
                className="heading-hero text-primary-foreground mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                Quality Corrugated Packaging{" "}
                <span className="text-accent">Solutions</span>
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl text-primary-foreground/80 mb-10 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                We partner with businesses to deliver superior quality packaging
                that protects products and elevates brands.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <Button variant="accent" size="xl" asChild>
                  <Link to="/products">
                    Explore Products
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="xl"
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                  asChild
                >
                  <Link to="/contact">Get a Quote</Link>
                </Button>
              </motion.div>
            </div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <motion.div
              className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <motion.div className="w-1.5 h-3 bg-accent rounded-full mt-2" />
            </motion.div>
          </motion.div>
        </section>

        {/* Stats Section - Bento style */}
        <section className="section-padding bg-background">
          <div className="container-wide">
            <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-caption text-accent mb-4">Our Impact</p>
              <h2 className="heading-section mb-4">
                Building Trust Through Quality
              </h2>
              <p className="text-body-large">
                With over two decades of dedication, we've established ourselves
                as a trusted partner for businesses across industries.
              </p>
            </ScrollReveal>

            <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <StaggerItem key={stat.label}>
                  <motion.div
                    className={`p-8 rounded-2xl text-center ${
                      index === 0
                        ? "bg-primary text-primary-foreground col-span-2 lg:col-span-1"
                        : "bg-secondary"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className={index === 0 ? "text-primary-foreground" : ""}>
                      <AnimatedCounter
                        value={stat.value}
                        suffix={stat.suffix}
                        prefix={stat.prefix}
                      />
                    </div>
                    <p
                      className={`text-sm mt-2 ${
                        index === 0
                          ? "text-primary-foreground/70"
                          : "text-muted-foreground"
                      }`}
                    >
                      {stat.label}
                    </p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Who We Are Section */}
        <section className="section-padding bg-secondary">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <ScrollReveal direction="left">
                <p className="text-caption text-accent mb-4">Who We Are</p>
                <h2 className="heading-section mb-6">
                  Manufacturing Excellence <br />
                  <span className="text-accent">Since 2000</span>
                </h2>
                <p className="text-body-large mb-6">
                  M.R. Enterprises is a leading manufacturer of premium
                  corrugated packaging products. We combine decades of expertise
                  with modern manufacturing to deliver solutions that exceed
                  expectations.
                </p>
                <p className="text-body mb-8">
                  Our commitment to quality, innovation, and customer
                  satisfaction has earned us the trust of industry leaders
                  across sectors. We don't just make boxes — we protect your
                  products and elevate your brand.
                </p>

                {/* Client logos */}
                <div className="border-t border-border pt-8">
                  <p className="text-sm text-muted-foreground mb-4">
                    Trusted by industry leaders
                  </p>
                  <div className="flex flex-wrap gap-6">
                    {clients.map((client) => (
                      <span
                        key={client}
                        className="text-lg font-display font-semibold text-foreground/60"
                      >
                        {client}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={0.2}>
                <div className="relative">
                  <motion.img
                    src={boxesImage}
                    alt="Corrugated boxes manufacturing"
                    className="rounded-2xl shadow-xl w-full"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div
                    className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-6 rounded-2xl shadow-lg hidden md:block"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    <div className="font-display text-3xl font-bold">24+</div>
                    <div className="text-sm text-accent-foreground/80">
                      Years Experience
                    </div>
                  </motion.div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section-padding bg-background">
          <div className="container-wide">
            <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-caption text-accent mb-4">Our Capabilities</p>
              <h2 className="heading-section mb-4">Why Choose MR Enterprises?</h2>
              <p className="text-body-large">
                We bring together expertise, technology, and dedication to
                deliver packaging solutions that make a difference.
              </p>
            </ScrollReveal>

            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature) => (
                <StaggerItem key={feature.title}>
                  <motion.div
                    className="group p-8 bg-secondary rounded-2xl h-full hover:bg-kraft-light transition-all duration-300"
                    whileHover={{ y: -5 }}
                  >
                    <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                      <feature.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground" />
                    </div>
                    <h3 className="font-display font-semibold text-lg mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Products Preview Section */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-wide">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
              <ScrollReveal className="max-w-2xl">
                <p className="text-caption text-accent mb-4">Our Products</p>
                <h2 className="heading-section text-primary-foreground mb-4">
                  Explore Our Product Range
                </h2>
                <p className="text-primary-foreground/70 text-lg">
                  From standard shipping boxes to custom printed packaging, we
                  have solutions for every industry and requirement.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <Button
                  variant="accent"
                  size="lg"
                  asChild
                >
                  <Link to="/products">
                    View All Products
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </ScrollReveal>
            </div>

            <StaggerContainer className="grid md:grid-cols-2 gap-6">
              {products.map((product, index) => (
                <StaggerItem key={product.slug}>
                  <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                    <Link
                      to={`/products/${product.slug}`}
                      className="group flex items-start gap-4 p-6 rounded-2xl bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-colors"
                    >
                      <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center shrink-0">
                        <CheckCircle className="w-6 h-6 text-accent" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-display font-semibold text-lg text-primary-foreground group-hover:text-accent transition-colors mb-2">
                          {product.name}
                        </h4>
                        <p className="text-sm text-primary-foreground/60">
                          {product.description}
                        </p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-primary-foreground/40 group-hover:text-accent group-hover:translate-x-1 transition-all shrink-0 mt-1" />
                    </Link>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-kraft-light">
          <div className="container-narrow">
            <ScrollReveal className="text-center">
              <p className="text-caption text-accent mb-4">Get Started</p>
              <h2 className="heading-section mb-6">
                Ready to Elevate Your Packaging?
              </h2>
              <p className="text-body-large max-w-2xl mx-auto mb-10">
                Contact us today for a free consultation and quote. Our team is
                ready to help you find the perfect packaging solution for your
                business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="accent" size="xl" asChild>
                  <Link to="/contact">
                    Request a Quote
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <Link to="/about">Learn More About Us</Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </PageTransition>
    </Layout>
  );
};

export default Index;
