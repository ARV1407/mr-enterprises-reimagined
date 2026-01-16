import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import logo from "@/assets/mr-enterprises-logo.jpg";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Products", path: "/products" },
  { name: "Contact", path: "/contact" },
];

const products = [
  { name: "Corrugated Boxes", path: "/products/corrugated-cardboard-boxes" },
  { name: "Printed Boxes", path: "/products/printed-corrugated-boxes" },
  { name: "Fruits Boxes", path: "/products/fruits-corrugated-boxes" },
  { name: "5 Ply Boxes", path: "/products/5-ply-boxes" },
  { name: "BOPP Tapes", path: "/products/bopp-tapes" },
];

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container-wide py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img
                src={logo}
                alt="MR Enterprises"
                className="h-12 w-auto rounded-lg"
              />
              <div>
                <span className="font-display font-bold text-lg block">
                  MR Enterprises
                </span>
                <span className="text-primary-foreground/60 text-xs">
                  Since 2000
                </span>
              </div>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              Leading manufacturer of premium corrugated packaging solutions.
              Quality products, competitive pricing, and reliable delivery for
              businesses across industries.
            </p>
            <div className="flex items-center gap-2 text-accent text-sm font-medium">
              <span>GST: 09ABRPV1756E1Z4</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-base mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-display font-semibold text-base mb-6">
              Products
            </h4>
            <ul className="space-y-3">
              {products.map((product) => (
                <li key={product.path}>
                  <Link
                    to={product.path}
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm inline-flex items-center gap-1 group"
                  >
                    {product.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-base mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70 text-sm leading-relaxed">
                  Plot No - 112, Ground Floor,
                  <br />
                  Udyog Kendra II, Greater Noida,
                  <br />
                  Gautam Buddha Nagar - 201310
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <div className="text-sm">
                  <a
                    href="tel:+919810504174"
                    className="text-primary-foreground/70 hover:text-accent transition-colors block"
                  >
                    +91 98105 04174
                  </a>
                  <a
                    href="tel:+919911194174"
                    className="text-primary-foreground/70 hover:text-accent transition-colors block"
                  >
                    +91 99111 94174
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <a
                  href="mailto:mrenterprises2000@gmail.com"
                  className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                >
                  mrenterprises2000@gmail.com
                </a>
              </li>
            </ul>
            <p className="text-primary-foreground/50 text-xs mt-6">
              Mon - Sat: 9:00 AM - 8:00 PM
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-wide py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/50 text-sm">
              © {new Date().getFullYear()} MR Enterprises. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                to="/privacy"
                className="text-primary-foreground/50 hover:text-accent transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-primary-foreground/50 hover:text-accent transition-colors text-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
