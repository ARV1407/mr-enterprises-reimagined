import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";

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
  {
    name: "Corrugated Cardboard Boxes",
    slug: "corrugated-cardboard-boxes",
    image: corrugatedBoxesImg,
  },
  {
    name: "Printed Corrugated Boxes",
    slug: "printed-corrugated-boxes",
    image: printedBoxesImg,
  },
  {
    name: "Fruits Corrugated Boxes",
    slug: "fruits-corrugated-boxes",
    image: fruitsBoxesImg,
  },
  {
    name: "Duplex Printed Boxes",
    slug: "duplex-printed-boxes",
    image: duplexBoxesImg,
  },
  {
    name: "Packaging Corrugated Boxes",
    slug: "packaging-corrugated-boxes",
    image: packagingBoxesImg,
  },
  {
    name: "Packing Boxes",
    slug: "packing-boxes",
    image: packingBoxesImg,
  },
  {
    name: "5 Ply Boxes",
    slug: "5-ply-boxes",
    image: fivePlyBoxesImg,
  },
  {
    name: "Carton Boxes",
    slug: "carton-boxes",
    image: cartonBoxesImg,
  },
  {
    name: "BOPP Adhesive Tapes",
    slug: "bopp-adhesive-tapes",
    image: boppAdhesiveTapesImg,
  },
  {
    name: "BOPP Tapes",
    slug: "bopp-tapes",
    image: boppTapesImg,
  },
  {
    name: "Corrugated Roll",
    slug: "corrugated-roll",
    image: corrugatedRollImg,
  },
  {
    name: "Paper Roll",
    slug: "paper-roll",
    image: paperRollImg,
  },
];

const Products = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-secondary section-padding">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="heading-display mb-6 opacity-0 animate-fade-in">
              Our Products
            </h1>
            <p className="text-body-large opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Explore our comprehensive range of corrugated packaging solutions. From standard shipping boxes to custom printed packaging, we have solutions for every need.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {productCategories.map((product, index) => (
              <Link
                key={product.slug}
                to={`/products/${product.slug}`}
                className="group bg-background border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="aspect-square overflow-hidden bg-secondary">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-display font-semibold text-sm md:text-base mb-2 group-hover:text-accent transition-colors line-clamp-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-1 text-accent font-medium text-sm">
                    View Details
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solutions CTA */}
      <section className="bg-kraft-light section-padding">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-section mb-4">Need Custom Packaging?</h2>
            <p className="text-body-large mb-8">
              Don't see exactly what you need? We specialize in creating custom packaging solutions tailored to your specific requirements. Share your specifications with us.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-md font-semibold hover:bg-accent/90 transition-colors"
            >
              Request Custom Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
