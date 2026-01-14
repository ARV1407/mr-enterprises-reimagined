import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import boxesImage from "@/assets/boxes-closeup.jpg";

const productData: Record<string, {
  name: string;
  description: string;
  longDescription: string;
  specifications: string[];
  applications: string[];
  features: string[];
}> = {
  "corrugated-boxes": {
    name: "Corrugated Boxes",
    description: "Standard and heavy-duty corrugated shipping boxes",
    longDescription: "Our corrugated boxes are manufactured using high-quality kraft paper and advanced corrugation technology. Available in 3-ply, 5-ply, and 7-ply configurations to meet various strength requirements. Perfect for shipping, storage, and product protection.",
    specifications: [
      "Material: Virgin Kraft / Recycled Kraft",
      "Flute Types: A, B, C, E, BC, EB",
      "GSM Range: 100-300 GSM",
      "Bursting Strength: 8-25 kg/cm²",
      "Custom sizes available",
    ],
    applications: ["Shipping & Logistics", "Warehousing", "E-commerce", "Manufacturing", "Retail Distribution"],
    features: ["High stacking strength", "Moisture resistant options", "Eco-friendly materials", "Cost-effective", "Fully recyclable"],
  },
  "die-cut-boxes": {
    name: "Die-Cut Boxes",
    description: "Precision-cut boxes for retail and display",
    longDescription: "Die-cut boxes offer superior precision and aesthetic appeal, making them ideal for retail packaging, product displays, and gift packaging. Our advanced die-cutting machinery ensures clean cuts and consistent quality across large production runs.",
    specifications: [
      "Precision tolerance: ±0.5mm",
      "Material: White/Brown Kraft",
      "GSM Range: 150-350 GSM",
      "Custom die development available",
      "Minimum order: 1000 units",
    ],
    applications: ["Retail Packaging", "Gift Boxes", "Product Displays", "Cosmetics", "Electronics"],
    features: ["Clean precise cuts", "Custom shapes", "Easy assembly", "Premium finish options", "Point-of-sale ready"],
  },
  "printed-packaging": {
    name: "Printed Packaging",
    description: "Custom branded packaging solutions",
    longDescription: "Elevate your brand with custom printed packaging. We offer high-quality flexographic and offset printing on corrugated materials. From simple one-color logos to full-color photographic prints, we bring your vision to life.",
    specifications: [
      "Print type: Flexographic / Offset",
      "Colors: Up to 6 colors",
      "Coverage: Full-box or partial",
      "Coating: Gloss / Matte / UV available",
      "Design assistance available",
    ],
    applications: ["Brand Packaging", "Marketing Materials", "Subscription Boxes", "Premium Products", "Corporate Gifting"],
    features: ["Vibrant color reproduction", "Consistent print quality", "Water-based eco-inks", "Lamination options", "Brand recognition"],
  },
  "industrial-packaging": {
    name: "Industrial Packaging",
    description: "Heavy-duty packaging for machinery",
    longDescription: "Our industrial packaging solutions are engineered to protect heavy machinery, equipment, and industrial products during transit and storage. Built with extra-strength materials and designed for maximum protection.",
    specifications: [
      "Material: Heavy-duty 7-ply / 9-ply",
      "Edge Crush Test: 23-71 ECT",
      "Static load capacity: Up to 500 kg",
      "Custom crating available",
      "Export-grade options",
    ],
    applications: ["Machinery Shipping", "Auto Parts", "Industrial Equipment", "Export Packaging", "Heavy Components"],
    features: ["Maximum protection", "Reinforced corners", "Moisture barriers", "Shock absorption", "Stackable design"],
  },
  "ecommerce-packaging": {
    name: "E-commerce Packaging",
    description: "Lightweight packaging for online retail",
    longDescription: "Designed specifically for the e-commerce industry, our packaging solutions combine protection, sustainability, and branded unboxing experiences. Lightweight yet durable, perfect for reducing shipping costs.",
    specifications: [
      "Material: Lightweight corrugated",
      "Self-sealing options available",
      "Tamper-evident designs",
      "Easy-open/easy-return features",
      "Custom sizes available",
    ],
    applications: ["Online Retail", "Subscription Services", "Direct-to-Consumer", "Fulfillment Centers", "Dropshipping"],
    features: ["Easy seal & open", "Return-friendly", "Branded experience", "Reduced weight", "Sustainable materials"],
  },
  "food-grade-packaging": {
    name: "Food-Grade Packaging",
    description: "FDA-compliant food packaging",
    longDescription: "Our food-grade packaging solutions meet strict FDA and FSSAI compliance standards. Perfect for bakeries, restaurants, food manufacturers, and FMCG companies requiring safe, hygienic packaging.",
    specifications: [
      "Compliance: FDA / FSSAI approved",
      "Material: Food-safe virgin kraft",
      "Grease-resistant coatings available",
      "Temperature range: -40°C to 70°C",
      "Microwave-safe options",
    ],
    applications: ["Bakery Products", "Frozen Foods", "Fast Food", "Confectionery", "Meal Kits"],
    features: ["Food-safe materials", "Grease resistant", "Odor barrier", "Temperature stable", "Hygienic production"],
  },
};

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? productData[slug] : null;

  if (!product) {
    return (
      <Layout>
        <div className="section-padding container-wide text-center">
          <h1 className="heading-section mb-4">Product Not Found</h1>
          <p className="text-body mb-8">The product you're looking for doesn't exist.</p>
          <Button variant="kraft" asChild>
            <Link to="/products">View All Products</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-secondary py-4">
        <div className="container-wide">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Link>
        </div>
      </div>

      {/* Product Header */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="opacity-0 animate-fade-in">
              <img
                src={boxesImage}
                alt={product.name}
                className="w-full rounded-lg shadow-lg"
              />
            </div>

            <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <h1 className="heading-display mb-4">{product.name}</h1>
              <p className="text-body-large mb-6">{product.longDescription}</p>

              <div className="mb-8">
                <h3 className="font-display font-semibold text-lg mb-3">Key Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                      <span className="text-body">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="kraft" size="lg" asChild>
                  <Link to="/contact">Request Quote</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="tel:+919876543210">
                    <Phone className="w-4 h-4" />
                    Call Us
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="bg-secondary section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="heading-section mb-6">Specifications</h2>
              <ul className="space-y-3">
                {product.specifications.map((spec) => (
                  <li
                    key={spec}
                    className="flex items-start gap-3 p-4 bg-background rounded-lg"
                  >
                    <span className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                    <span className="text-body">{spec}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="heading-section mb-6">Applications</h2>
              <div className="flex flex-wrap gap-3">
                {product.applications.map((app) => (
                  <span
                    key={app}
                    className="px-4 py-2 bg-kraft-light text-foreground rounded-full text-sm font-medium"
                  >
                    {app}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12 text-center">
            <h2 className="heading-section text-primary-foreground mb-4">
              Need This Product?
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-6 max-w-2xl mx-auto">
              Get in touch with our team for pricing, bulk orders, and customization options.
            </p>
            <Button variant="kraft" size="lg" asChild>
              <Link to="/contact">Contact Sales Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductDetail;
