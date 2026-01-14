import { Link } from "react-router-dom";
import { Package, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="flex items-center justify-center w-10 h-10 rounded bg-accent text-accent-foreground">
                <Package className="w-6 h-6" />
              </div>
              <span className="font-display font-bold text-lg">
                MR Enterprises
              </span>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Leading manufacturer of corrugated boxes and packaging solutions.
              Quality products, competitive pricing, and reliable delivery.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Products", path: "/products" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">
              Our Products
            </h4>
            <ul className="space-y-3">
              {[
                "Corrugated Cardboard Boxes",
                "Printed Corrugated Boxes",
                "Fruits Corrugated Boxes",
                "Duplex Printed Boxes",
                "BOPP Tapes",
              ].map((product) => (
                <li key={product}>
                  <Link
                    to="/products"
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {product}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70 text-sm">
                  Plot No - 112, Ground Floor,<br />
                  Udyog Kendra II, Greater Noida,<br />
                  Gautam Buddha Nagar - 201310,<br />
                  Uttar Pradesh, India
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div className="text-primary-foreground/70 text-sm">
                  <a
                    href="tel:+919810504174"
                    className="hover:text-accent transition-colors block"
                  >
                    +91 9810504174
                  </a>
                  <a
                    href="tel:+919911194174"
                    className="hover:text-accent transition-colors block"
                  >
                    +91 9911194174
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
            <p className="text-primary-foreground/50 text-xs mt-4">
              Hours: 9:00 - 20:00, Mon - Sat
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10">
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
