import { Link } from "react-router-dom";
import { ArrowRight, Users, Target, Award, Factory } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const values = [
  {
    icon: Target,
    title: "Quality First",
    description: "We never compromise on quality. Every box we produce undergoes rigorous testing.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description: "Your success is our priority. We work closely with you to meet your exact needs.",
  },
  {
    icon: Award,
    title: "Innovation",
    description: "Continuous improvement in processes and materials keeps us at the forefront.",
  },
  {
    icon: Factory,
    title: "Reliability",
    description: "Consistent production capacity and on-time delivery you can count on.",
  },
];

const milestones = [
  { year: "1998", event: "MR Enterprises founded with a single corrugation line" },
  { year: "2005", event: "Expanded to 10,000 sq ft manufacturing facility" },
  { year: "2012", event: "Achieved ISO 9001:2008 certification" },
  { year: "2018", event: "Installed state-of-the-art automated production line" },
  { year: "2023", event: "Serving 500+ clients across multiple industries" },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-secondary section-padding">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="heading-display mb-6 opacity-0 animate-fade-in">
              Building Trust Through Quality Packaging
            </h1>
            <p className="text-body-large opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              For over 25 years, MR Enterprises has been a trusted name in corrugated packaging. We combine traditional craftsmanship with modern technology to deliver exceptional products.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-section mb-6">Our Story</h2>
              <div className="space-y-4 text-body">
                <p>
                  Founded in 1998, MR Enterprises began as a small family-owned business with a single corrugation machine and a commitment to quality. Our founder recognized the growing need for reliable packaging solutions in the manufacturing sector.
                </p>
                <p>
                  Over the decades, we've grown into a full-scale packaging manufacturer, serving clients across industries including electronics, FMCG, automotive, and e-commerce. Our state-of-the-art facility now houses multiple production lines capable of producing millions of boxes annually.
                </p>
                <p>
                  Despite our growth, we've never lost sight of our core values: quality, reliability, and customer satisfaction. Every team member shares our commitment to excellence.
                </p>
              </div>
            </div>

            <div className="bg-primary text-primary-foreground p-8 md:p-12 rounded-lg">
              <h3 className="heading-card text-primary-foreground mb-8">Our Journey</h3>
              <div className="space-y-6">
                {milestones.map((milestone, index) => (
                  <div
                    key={milestone.year}
                    className="flex gap-4 opacity-0 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="font-display font-bold text-accent text-lg w-16 shrink-0">
                      {milestone.year}
                    </div>
                    <div className="text-primary-foreground/80">{milestone.event}</div>
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

      {/* Facility Section */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-kraft-light p-6 rounded-lg text-center">
                  <div className="font-display text-3xl font-bold text-accent mb-1">25,000</div>
                  <div className="text-sm text-muted-foreground">Sq. Ft. Facility</div>
                </div>
                <div className="bg-kraft-light p-6 rounded-lg text-center">
                  <div className="font-display text-3xl font-bold text-accent mb-1">150+</div>
                  <div className="text-sm text-muted-foreground">Skilled Workers</div>
                </div>
                <div className="bg-kraft-light p-6 rounded-lg text-center">
                  <div className="font-display text-3xl font-bold text-accent mb-1">5</div>
                  <div className="text-sm text-muted-foreground">Production Lines</div>
                </div>
                <div className="bg-kraft-light p-6 rounded-lg text-center">
                  <div className="font-display text-3xl font-bold text-accent mb-1">24/7</div>
                  <div className="text-sm text-muted-foreground">Operations</div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="heading-section mb-6">Modern Manufacturing Facility</h2>
              <p className="text-body mb-6">
                Our manufacturing facility is equipped with cutting-edge machinery including automated corrugation lines, precision die-cutting equipment, and high-quality printing systems.
              </p>
              <p className="text-body mb-6">
                We maintain strict quality control measures at every stage of production, from raw material inspection to final product packaging.
              </p>
              <Button variant="kraft" asChild>
                <Link to="/contact">
                  Schedule a Visit
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground section-padding">
        <div className="container-wide text-center">
          <h2 className="heading-section text-primary-foreground mb-4">Partner With Us</h2>
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
