import { Link } from "react-router-dom";
import { ArrowRight, Users, Target, Award, Factory, Building2, BadgeCheck, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { PageTransition, ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations";

const values = [
  {
    icon: Target,
    title: "Quality First",
    description: "We never compromise on quality. Every product undergoes rigorous testing before delivery.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description: "Your success is our priority. We work closely to understand and meet your exact needs.",
  },
  {
    icon: Award,
    title: "Innovation",
    description: "Continuous improvement in processes and materials keeps us ahead of industry standards.",
  },
  {
    icon: Factory,
    title: "Reliability",
    description: "Consistent production capacity and on-time delivery you can always count on.",
  },
];

const clients = ["LG", "DS Group", "Frank Brothers", "Macmillan"];

const companyInfo = [
  { label: "Nature of Business", value: "Manufacturer" },
  { label: "Company CEO", value: "Raghvendra Varshney" },
  { label: "Total Employees", value: "26 to 50 People" },
  { label: "Established", value: "2000" },
  { label: "Legal Status", value: "Proprietorship" },
  { label: "Annual Turnover", value: "₹5 - 25 Cr" },
  { label: "GST No.", value: "09ABRPV1756E1Z4" },
];

const companyUSP = [
  "Primary Competitive Advantage",
  "Experienced R & D Department",
  "Good Financial Position & TQM",
  "Large Production Capacity",
  "Provide Customized Solutions",
  "Quality Measures / Testing Facilities",
];

const productList = [
  "Corrugated Cardboard Boxes",
  "Printed Corrugated Boxes",
  "Fruits Corrugated Boxes",
  "Duplex Printed Boxes",
  "Packaging Corrugated Boxes",
  "Packing Boxes",
  "Paper Roll",
];

const About = () => {
  return (
    <Layout>
      <PageTransition>
        {/* Hero Section */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-secondary">
          <div className="container-wide">
            <div className="max-w-4xl">
              <motion.p
                className="text-caption text-accent mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                About Us
              </motion.p>
              <motion.h1
                className="heading-hero mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                Transforming Packaging,{" "}
                <span className="text-accent">Delivering Excellence</span>
              </motion.h1>
              <motion.p
                className="text-xl md:text-2xl text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <strong className="text-foreground">M.R. Enterprises</strong> was
                established in <strong className="text-foreground">2000</strong>.
                With over two decades of experience, we have carved a niche in
                the packaging industry with our superior quality corrugated
                boxes and tapes.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Values Section - Bento Grid */}
        <section className="section-padding bg-background">
          <div className="container-wide">
            <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-caption text-accent mb-4">Our Values</p>
              <h2 className="heading-section mb-4">What Drives Us Forward</h2>
              <p className="text-body-large">
                These principles guide every decision we make and every product
                we create.
              </p>
            </ScrollReveal>

            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <StaggerItem key={value.title}>
                  <motion.div
                    className={`p-8 rounded-2xl h-full ${
                      index === 0 ? "bg-primary text-primary-foreground" : "bg-secondary"
                    }`}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div
                      className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                        index === 0 ? "bg-accent" : "bg-accent/10"
                      }`}
                    >
                      <value.icon
                        className={`w-7 h-7 ${
                          index === 0 ? "text-accent-foreground" : "text-accent"
                        }`}
                      />
                    </div>
                    <h3
                      className={`font-display font-semibold text-lg mb-3 ${
                        index === 0 ? "text-primary-foreground" : "text-foreground"
                      }`}
                    >
                      {value.title}
                    </h3>
                    <p
                      className={`text-sm ${
                        index === 0 ? "text-primary-foreground/70" : "text-muted-foreground"
                      }`}
                    >
                      {value.description}
                    </p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Products & Clients Section */}
        <section className="section-padding bg-secondary">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-16">
              <ScrollReveal direction="left">
                <p className="text-caption text-accent mb-4">Our Products</p>
                <h2 className="heading-section mb-6">
                  Comprehensive Product Range
                </h2>
                <p className="text-body mb-8">
                  We specialize in manufacturing a wide range of superior quality
                  packaging products. All available in various sizes with
                  tailor-made options.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {productList.map((product) => (
                    <div
                      key={product}
                      className="flex items-center gap-2 text-sm"
                    >
                      <BadgeCheck className="w-4 h-4 text-accent shrink-0" />
                      <span className="text-muted-foreground">{product}</span>
                    </div>
                  ))}
                </div>
                <Button variant="accent" className="mt-8" asChild>
                  <Link to="/products">
                    View All Products
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={0.2}>
                <div className="bg-primary text-primary-foreground p-10 rounded-2xl h-full">
                  <p className="text-caption text-accent mb-4">Trusted Partners</p>
                  <h3 className="heading-card text-primary-foreground mb-6">
                    Our Valued Clientele
                  </h3>
                  <p className="text-primary-foreground/70 mb-8">
                    We are a client-oriented organization focused on delivering
                    superior quality products that exceed expectations. Our
                    products are manufactured using high-grade raw materials and
                    advanced technology.
                  </p>
                  <div className="space-y-4">
                    {clients.map((client, index) => (
                      <motion.div
                        key={client}
                        className="flex items-center gap-4 p-4 bg-primary-foreground/5 rounded-xl"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Building2 className="w-5 h-5 text-accent shrink-0" />
                        <span className="text-lg font-semibold">{client}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Company Info Section */}
        <section className="section-padding bg-background">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-16">
              <ScrollReveal direction="left">
                <p className="text-caption text-accent mb-4">Company Details</p>
                <h2 className="heading-section mb-8">Basic Information</h2>
                <div className="bg-secondary rounded-2xl p-8">
                  <div className="space-y-4">
                    {companyInfo.map((info) => (
                      <div
                        key={info.label}
                        className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 py-3 border-b border-border last:border-0"
                      >
                        <span className="font-semibold text-foreground min-w-[160px]">
                          {info.label}
                        </span>
                        <span className="text-muted-foreground">{info.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={0.2}>
                <p className="text-caption text-accent mb-4">Why Choose Us</p>
                <h2 className="heading-section mb-8">Company USP</h2>
                <div className="space-y-4">
                  {companyUSP.map((usp, index) => (
                    <motion.div
                      key={usp}
                      className="flex items-center gap-4 p-5 bg-kraft-light rounded-xl"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                      <span className="font-medium">{usp}</span>
                    </motion.div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-narrow text-center">
            <ScrollReveal>
              <p className="text-caption text-accent mb-4">Let's Connect</p>
              <h2 className="heading-section text-primary-foreground mb-6">
                Packaging Redefined Since 2000
              </h2>
              <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto mb-10">
                Join hundreds of businesses that trust MR Enterprises for their
                packaging needs. Let's discuss how we can help you.
              </p>
              <Button variant="accent" size="xl" asChild>
                <Link to="/contact">
                  Contact Us Today
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </ScrollReveal>
          </div>
        </section>
      </PageTransition>
    </Layout>
  );
};

export default About;
