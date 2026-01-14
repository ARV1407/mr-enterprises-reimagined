import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import boxesImage from "@/assets/boxes-closeup.jpg";

const productCategories = [
  {
    name: "Corrugated Boxes",
    slug: "corrugated-boxes",
    description: "Standard and heavy-duty corrugated shipping boxes available in all sizes.",
    features: ["3-ply, 5-ply, 7-ply options", "Custom sizes available", "Bulk order discounts"],
  },
  {
    name: "Die-Cut Boxes",
    slug: "die-cut-boxes",
    description: "Precision die-cut boxes perfect for retail packaging and displays.",
    features: ["Custom shapes & designs", "Retail-ready packaging", "Display solutions"],
  },
  {
    name: "Printed Packaging",
    slug: "printed-packaging",
    description: "Custom branded packaging with high-quality printing options.",
    features: ["Flexographic printing", "Full-color branding", "Logo & design placement"],
  },
  {
    name: "Industrial Packaging",
    slug: "industrial-packaging",
    description: "Heavy-duty packaging solutions for machinery and industrial products.",
    features: ["Extra-strength materials", "Custom crating", "Export-grade packaging"],
  },
  {
    name: "E-commerce Packaging",
    slug: "ecommerce-packaging",
    description: "Lightweight, protective packaging designed for online retail.",
    features: ["Easy-seal designs", "Return-friendly", "Branded unboxing experience"],
  },
  {
    name: "Food-Grade Packaging",
    slug: "food-grade-packaging",
    description: "FDA-compliant packaging solutions for food and beverage products.",
    features: ["Food-safe materials", "Grease-resistant options", "Temperature protection"],
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((product, index) => (
              <Link
                key={product.slug}
                to={`/products/${product.slug}`}
                className="group bg-background border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-[4/3] overflow-hidden bg-secondary">
                  <img
                    src={boxesImage}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="heading-card mb-2 group-hover:text-accent transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-body text-sm mb-4">{product.description}</p>
                  <ul className="space-y-1 mb-4">
                    {product.features.map((feature) => (
                      <li key={feature} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-2 text-accent font-medium text-sm">
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
