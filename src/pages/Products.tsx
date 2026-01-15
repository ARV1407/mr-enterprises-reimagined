import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import boxesImage from "@/assets/boxes-closeup.jpg";

const productCategories = [
  {
    name: "Corrugated Cardboard Boxes",
    slug: "corrugated-cardboard-boxes",
  },
  {
    name: "Printed Corrugated Boxes",
    slug: "printed-corrugated-boxes",
  },
  {
    name: "Fruits Corrugated Boxes",
    slug: "fruits-corrugated-boxes",
  },
  {
    name: "Duplex Printed Boxes",
    slug: "duplex-printed-boxes",
  },
  {
    name: "Packaging Corrugated Boxes",
    slug: "packaging-corrugated-boxes",
  },
  {
    name: "Packing Boxes",
    slug: "packing-boxes",
  },
  {
    name: "5 Ply Boxes",
    slug: "5-ply-boxes",
  },
  {
    name: "Carton Boxes",
    slug: "carton-boxes",
  },
  {
    name: "BOPP Adhesive Tapes",
    slug: "bopp-adhesive-tapes",
  },
  {
    name: "BOPP Tapes",
    slug: "bopp-tapes",
  },
  {
    name: "Corrugated Roll",
    slug: "corrugated-roll",
  },
  {
    name: "Paper Roll",
    slug: "paper-roll",
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
                    src={boxesImage}
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
