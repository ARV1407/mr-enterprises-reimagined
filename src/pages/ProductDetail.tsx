import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import boxesImage from "@/assets/boxes-closeup.jpg";

const productData: Record<string, {
  name: string;
  description: string;
}> = {
  "corrugated-cardboard-boxes": {
    name: "Corrugated Cardboard Boxes",
    description: "We have specialized in offering a variety of Corrugated Cardboard Boxes. We do not compromise on the fine quality of these boxes since they are the most preferred storage options for many products of our customers. The Corrugated Card Board Sheets is a paper-based material consisting of a fluted corrugated sheet and one or two flat liner boards. Client can avail these boxes at market leading price. Our range of packaging materials cater to the requirements of host of industries and satiates the need for durable packaging. These packaging materials can be availed from us at industry leading prices.",
  },
  "printed-corrugated-boxes": {
    name: "Printed Corrugated Boxes",
    description: "We offer high-quality Printed Corrugated Boxes with custom branding options. Our printing capabilities include flexographic and offset printing to bring your brand to life. These boxes are perfect for retail packaging, brand recognition, and marketing purposes. Available in various sizes and configurations to meet your specific packaging needs.",
  },
  "fruits-corrugated-boxes": {
    name: "Fruits Corrugated Boxes",
    description: "Specially designed Fruits Corrugated Boxes that provide excellent ventilation and protection for fresh produce. These boxes are engineered to maintain the freshness of fruits during storage and transportation. Available with custom ventilation patterns and sizes to accommodate different fruit types and quantities.",
  },
  "duplex-printed-boxes": {
    name: "Duplex Printed Boxes",
    description: "Premium Duplex Printed Boxes offering superior print quality and structural strength. These boxes feature high-quality printing on duplex board material, making them ideal for premium product packaging. Perfect for cosmetics, pharmaceuticals, food products, and retail applications.",
  },
  "packaging-corrugated-boxes": {
    name: "Packaging Corrugated Boxes",
    description: "Versatile Packaging Corrugated Boxes suitable for a wide range of applications. These boxes are manufactured using high-grade corrugated materials to ensure maximum protection during transit and storage. Available in various ply configurations to meet different strength requirements.",
  },
  "packing-boxes": {
    name: "Packing Boxes",
    description: "General purpose Packing Boxes designed for everyday packaging needs. These boxes offer excellent value without compromising on quality. Ideal for shipping, moving, storage, and general packaging applications. Available in standard and custom sizes.",
  },
  "5-ply-boxes": {
    name: "5 Ply Boxes",
    description: "Heavy-duty 5 Ply Boxes engineered for maximum strength and durability. These boxes feature five layers of corrugated material, providing superior protection for heavy or delicate items. Ideal for industrial packaging, machinery, electronics, and export-grade requirements.",
  },
  "carton-boxes": {
    name: "Carton Boxes",
    description: "Standard Carton Boxes manufactured to meet diverse packaging requirements. These boxes are versatile, cost-effective, and suitable for various industries including FMCG, retail, e-commerce, and manufacturing. Available in multiple sizes and can be customized per requirements.",
  },
  "bopp-adhesive-tapes": {
    name: "BOPP Adhesive Tapes",
    description: "High-quality BOPP Adhesive Tapes with excellent adhesion properties. These tapes are manufactured using premium quality BOPP film with acrylic-based adhesive coating. Ideal for carton sealing, packaging, and general purpose applications. Available in various widths and lengths.",
  },
  "bopp-tapes": {
    name: "BOPP Tapes",
    description: "Premium BOPP Tapes offering superior performance for packaging applications. Our BOPP tapes feature strong adhesion, excellent clarity, and consistent quality. Available in clear, brown, and custom printed options. Perfect for carton sealing and bundling applications.",
  },
  "corrugated-roll": {
    name: "Corrugated Roll",
    description: "Flexible Corrugated Roll material for protective packaging applications. These rolls provide cushioning and protection for fragile items during transit. Easy to use, cut, and wrap around products of various shapes and sizes. Ideal for void filling, wrapping, and surface protection.",
  },
  "paper-roll": {
    name: "Paper Roll",
    description: "Quality Paper Roll products for various packaging and industrial applications. Our paper rolls are manufactured using high-grade kraft paper with consistent thickness and strength. Ideal for wrapping, interleaving, and general packaging purposes. Available in various GSM options and widths.",
  },
};

const featuredProducts = [
  { name: "Corrugated Cardboard Boxes", slug: "corrugated-cardboard-boxes" },
  { name: "Printed Corrugated Boxes", slug: "printed-corrugated-boxes" },
  { name: "Fruits Corrugated Boxes", slug: "fruits-corrugated-boxes" },
  { name: "Duplex Printed Boxes", slug: "duplex-printed-boxes" },
];

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

      {/* Product Details */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="opacity-0 animate-fade-in">
              <img
                src={boxesImage}
                alt={product.name}
                className="w-full rounded-lg shadow-lg"
              />
            </div>

            {/* Product Info */}
            <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <h1 className="heading-display mb-4">{product.name}</h1>
              <h2 className="font-display font-semibold text-xl text-accent mb-4">Product Details</h2>
              <p className="text-body-large mb-8 leading-relaxed">{product.description}</p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="kraft" size="lg" asChild>
                  <Link to="/contact">Request Quote</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="tel:+919810504174">
                    <Phone className="w-4 h-4" />
                    Call Us
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-secondary section-padding">
        <div className="container-wide">
          <h2 className="heading-section mb-8">Featured Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {featuredProducts.map((item, index) => (
              <Link
                key={item.slug}
                to={`/products/${item.slug}`}
                className="group bg-background border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-square overflow-hidden bg-secondary">
                  <img
                    src={boxesImage}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-display font-semibold text-sm group-hover:text-accent transition-colors line-clamp-2">
                    {item.name}
                  </h3>
                </div>
              </Link>
            ))}
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
