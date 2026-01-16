import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Phone, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
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

const productData: Record<string, { name: string; description: string; image: string; features: string[] }> = {
  "corrugated-cardboard-boxes": {
    name: "Corrugated Cardboard Boxes",
    description: "We have specialized in offering a variety of Corrugated Cardboard Boxes. We do not compromise on the fine quality of these boxes since they are the most preferred storage options for many products of our customers. The Corrugated Card Board Sheets is a paper-based material consisting of a fluted corrugated sheet and one or two flat liner boards. Client can avail these boxes at market leading price.",
    image: corrugatedBoxesImg,
    features: ["High durability", "Cost-effective", "Recyclable material", "Custom sizes available", "Excellent stacking strength"]
  },
  "printed-corrugated-boxes": {
    name: "Printed Corrugated Boxes",
    description: "We offer high-quality Printed Corrugated Boxes with custom branding options. Our printing capabilities include flexographic and offset printing to bring your brand to life. These boxes are perfect for retail packaging, brand recognition, and marketing purposes.",
    image: printedBoxesImg,
    features: ["Custom branding", "High-quality printing", "Multiple color options", "Brand visibility", "Premium finish"]
  },
  "fruits-corrugated-boxes": {
    name: "Fruits Corrugated Boxes",
    description: "Specially designed Fruits Corrugated Boxes that provide excellent ventilation and protection for fresh produce. These boxes are engineered to maintain the freshness of fruits during storage and transportation.",
    image: fruitsBoxesImg,
    features: ["Ventilation holes", "Moisture resistant", "Stackable design", "Lightweight yet strong", "Food-safe materials"]
  },
  "duplex-printed-boxes": {
    name: "Duplex Printed Boxes",
    description: "Premium Duplex Printed Boxes offering superior print quality and structural strength. These boxes feature high-quality printing on duplex board material, making them ideal for premium product packaging.",
    image: duplexBoxesImg,
    features: ["Premium finish", "Excellent print quality", "Rigid structure", "Luxury appearance", "Customizable design"]
  },
  "packaging-corrugated-boxes": {
    name: "Packaging Corrugated Boxes",
    description: "Versatile Packaging Corrugated Boxes suitable for a wide range of applications. These boxes are manufactured using high-grade corrugated materials to ensure maximum protection during transit and storage.",
    image: packagingBoxesImg,
    features: ["Multi-purpose use", "Strong construction", "Protective packaging", "Various sizes", "Cost-effective"]
  },
  "packing-boxes": {
    name: "Packing Boxes",
    description: "General purpose Packing Boxes designed for everyday packaging needs. These boxes offer excellent value without compromising on quality. Ideal for shipping, moving, storage, and general packaging applications.",
    image: packingBoxesImg,
    features: ["Everyday use", "Affordable pricing", "Easy assembly", "Durable material", "Standard sizes"]
  },
  "5-ply-boxes": {
    name: "5 Ply Boxes",
    description: "Heavy-duty 5 Ply Boxes engineered for maximum strength and durability. These boxes feature five layers of corrugated material, providing superior protection for heavy or delicate items.",
    image: fivePlyBoxesImg,
    features: ["Maximum strength", "5-layer construction", "Heavy load capacity", "Extra protection", "Industrial grade"]
  },
  "carton-boxes": {
    name: "Carton Boxes",
    description: "Standard Carton Boxes manufactured to meet diverse packaging requirements. These boxes are versatile, cost-effective, and suitable for various industries including FMCG, retail, e-commerce, and manufacturing.",
    image: cartonBoxesImg,
    features: ["Versatile use", "Industry standard", "Quick assembly", "Bulk availability", "Consistent quality"]
  },
  "bopp-adhesive-tapes": {
    name: "BOPP Adhesive Tapes",
    description: "High-quality BOPP Adhesive Tapes with excellent adhesion properties. These tapes are manufactured using premium quality BOPP film with acrylic-based adhesive coating.",
    image: boppAdhesiveTapesImg,
    features: ["Strong adhesion", "Clear finish", "Tear resistant", "Multiple widths", "Long-lasting bond"]
  },
  "bopp-tapes": {
    name: "BOPP Tapes",
    description: "Premium BOPP Tapes offering superior performance for packaging applications. Our BOPP tapes feature strong adhesion, excellent clarity, and consistent quality.",
    image: boppTapesImg,
    features: ["Premium quality", "Crystal clear", "Strong bond", "Easy application", "Various lengths"]
  },
  "corrugated-roll": {
    name: "Corrugated Roll",
    description: "Flexible Corrugated Roll material for protective packaging applications. These rolls provide cushioning and protection for fragile items during transit.",
    image: corrugatedRollImg,
    features: ["Flexible wrapping", "Cushioning effect", "Custom length cutting", "Lightweight", "Shock absorption"]
  },
  "paper-roll": {
    name: "Paper Roll",
    description: "Quality Paper Roll products for various packaging and industrial applications. Our paper rolls are manufactured using high-grade kraft paper with consistent thickness and strength.",
    image: paperRollImg,
    features: ["High-grade kraft", "Consistent thickness", "Multiple widths", "Eco-friendly", "Industrial use"]
  },
};

const relatedProducts = [
  { name: "Corrugated Cardboard Boxes", slug: "corrugated-cardboard-boxes", image: corrugatedBoxesImg },
  { name: "Printed Corrugated Boxes", slug: "printed-corrugated-boxes", image: printedBoxesImg },
  { name: "5 Ply Boxes", slug: "5-ply-boxes", image: fivePlyBoxesImg },
  { name: "BOPP Tapes", slug: "bopp-tapes", image: boppTapesImg },
];

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? productData[slug] : null;

  if (!product) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="heading-section mb-4">Product Not Found</h1>
            <p className="text-body mb-8">
              The product you're looking for doesn't exist.
            </p>
            <Button variant="accent" asChild>
              <Link to="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  // Filter out current product from related
  const filteredRelated = relatedProducts.filter((p) => p.slug !== slug);

  return (
    <Layout>
      <PageTransition>
        {/* Breadcrumb */}
        <div className="pt-24 pb-4 bg-secondary">
          <div className="container-wide">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Products
            </Link>
          </div>
        </div>

        {/* Product Detail */}
        <section className="py-12 md:py-20 bg-secondary">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Product Image */}
              <ScrollReveal direction="left">
                <motion.div
                  className="rounded-2xl overflow-hidden shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full aspect-square object-cover"
                  />
                </motion.div>
              </ScrollReveal>

              {/* Product Info */}
              <ScrollReveal direction="right" delay={0.1}>
                <div className="lg:py-8">
                  <p className="text-caption text-accent mb-3">Product Details</p>
                  <h1 className="heading-display mb-6">{product.name}</h1>
                  <p className="text-body-large mb-8 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="mb-10">
                    <h3 className="font-display font-semibold text-lg mb-4">
                      Key Features
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {product.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-3 text-sm"
                        >
                          <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="accent" size="lg" asChild>
                      <Link to="/contact">
                        Request Quote
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                      <a href="tel:+919810504174">
                        <Phone className="w-4 h-4" />
                        Call Us
                      </a>
                    </Button>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Related Products */}
        <section className="section-padding bg-background">
          <div className="container-wide">
            <ScrollReveal className="flex items-end justify-between gap-8 mb-10">
              <div>
                <p className="text-caption text-accent mb-2">Explore More</p>
                <h2 className="heading-section">Related Products</h2>
              </div>
              <Button variant="outline" asChild className="hidden sm:flex">
                <Link to="/products">
                  View All
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </ScrollReveal>

            <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {filteredRelated.map((item) => (
                <StaggerItem key={item.slug}>
                  <Link to={`/products/${item.slug}`} className="group block">
                    <motion.div
                      className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
                      whileHover={{ y: -5 }}
                    >
                      <div className="aspect-square overflow-hidden bg-secondary">
                        <motion.img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.5 }}
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-display font-semibold text-sm group-hover:text-accent transition-colors line-clamp-2">
                          {item.name}
                        </h3>
                      </div>
                    </motion.div>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <div className="mt-8 text-center sm:hidden">
              <Button variant="outline" asChild>
                <Link to="/products">View All Products</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-narrow text-center">
            <ScrollReveal>
              <p className="text-caption text-accent mb-4">Interested?</p>
              <h2 className="heading-section text-primary-foreground mb-6">
                Need This Product?
              </h2>
              <p className="text-primary-foreground/70 text-lg mb-10 max-w-2xl mx-auto">
                Get in touch with our team for pricing, bulk orders, and
                customization options. We're here to help you find the perfect
                solution.
              </p>
              <Button variant="accent" size="xl" asChild>
                <Link to="/contact">
                  Contact Sales Team
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

export default ProductDetail;
