import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { PageTransition, ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations";

// Import product images
import corrugatedBoxesImg from "@/assets/products/corrugated-boxes.jpg";
import printedBoxesImg from "@/assets/products/printed-boxes.jpg";
import fruitsBoxesImg from "@/assets/products/fruits-boxes.jpg";
import duplexBoxesImg from "@/assets/products/duplex-boxes.jpg";
import packagingBoxesImg from "@/assets/products/packaging-boxes.jpg";
import packingBoxesImg from "@/assets/products/packing-boxes.jpg";
import fivePlyBoxesImg from "@/assets/products/5-ply-boxes.jpg";
import cartonBoxesImg from "@/assets/products/carton-boxes.jpg";
import boppAdhesiveTapesImg from "@/assets/products/bopp-adhesive-tapes.jpg";
import boppTapesImg from "@/assets/products/bopp-tapes.jpg";
import corrugatedRollImg from "@/assets/products/corrugated-roll.jpg";
import paperRollImg from "@/assets/products/paper-roll.jpg";

const productCategories = [
  { name: "Corrugated Cardboard Boxes", slug: "corrugated-cardboard-boxes", image: corrugatedBoxesImg, category: "Boxes" },
  { name: "Printed Corrugated Boxes", slug: "printed-corrugated-boxes", image: printedBoxesImg, category: "Boxes" },
  { name: "Fruits Corrugated Boxes", slug: "fruits-corrugated-boxes", image: fruitsBoxesImg, category: "Boxes" },
  { name: "Duplex Printed Boxes", slug: "duplex-printed-boxes", image: duplexBoxesImg, category: "Boxes" },
  { name: "Packaging Corrugated Boxes", slug: "packaging-corrugated-boxes", image: packagingBoxesImg, category: "Boxes" },
  { name: "Packing Boxes", slug: "packing-boxes", image: packingBoxesImg, category: "Boxes" },
  { name: "5 Ply Boxes", slug: "5-ply-boxes", image: fivePlyBoxesImg, category: "Heavy Duty" },
  { name: "Carton Boxes", slug: "carton-boxes", image: cartonBoxesImg, category: "Boxes" },
  { name: "BOPP Adhesive Tapes", slug: "bopp-adhesive-tapes", image: boppAdhesiveTapesImg, category: "Tapes" },
  { name: "BOPP Tapes", slug: "bopp-tapes", image: boppTapesImg, category: "Tapes" },
  { name: "Corrugated Roll", slug: "corrugated-roll", image: corrugatedRollImg, category: "Rolls" },
  { name: "Paper Roll", slug: "paper-roll", image: paperRollImg, category: "Rolls" },
];

const Products = () => {
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
                Our Products
              </motion.p>
              <motion.h1
                className="heading-hero mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                Packaging Solutions for{" "}
                <span className="text-accent">Every Need</span>
              </motion.h1>
              <motion.p
                className="text-xl md:text-2xl text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                Explore our comprehensive range of corrugated packaging products.
                From standard shipping boxes to custom printed solutions, we have
                what you need.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="section-padding bg-background">
          <div className="container-wide">
            <StaggerContainer
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              staggerDelay={0.05}
            >
              {productCategories.map((product) => (
                <StaggerItem key={product.slug}>
                  <Link to={`/products/${product.slug}`} className="group block">
                    <motion.div
                      className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
                      whileHover={{ y: -5 }}
                    >
                      <div className="aspect-square overflow-hidden bg-secondary relative">
                        <motion.img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.5 }}
                        />
                        <div className="absolute top-3 left-3">
                          <span className="px-3 py-1 bg-background/90 backdrop-blur-sm text-xs font-medium rounded-full">
                            {product.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-5">
                        <h3 className="font-display font-semibold text-base mb-2 group-hover:text-accent transition-colors line-clamp-2">
                          {product.name}
                        </h3>
                        <div className="flex items-center gap-1 text-accent text-sm font-medium">
                          View Details
                          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Custom Solutions CTA */}
        <section className="section-padding bg-kraft-light">
          <div className="container-narrow">
            <ScrollReveal className="text-center">
              <p className="text-caption text-accent mb-4">Custom Solutions</p>
              <h2 className="heading-section mb-6">
                Need Custom Packaging?
              </h2>
              <p className="text-body-large max-w-2xl mx-auto mb-10">
                Don't see exactly what you need? We specialize in creating custom
                packaging solutions tailored to your specific requirements. Share
                your specifications with us.
              </p>
              <Button variant="accent" size="xl" asChild>
                <Link to="/contact">
                  Request Custom Quote
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

export default Products;
