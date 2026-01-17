import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowUpRight, Clock } from "lucide-react";
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
  { name: "Duplex Boxes", path: "/products/duplex-printed-boxes" },
  { name: "Paper Roll", path: "/products/paper-roll" },
];

const addresses = [
  {
    label: "Head Office",
    lines: [
      "Plot No. 10, Gali No. 1,",
      "Near Shiv Mandir, Khera Choganpur,",
      "Greater Noida, UP - 201306",
    ],
  },
  {
    label: "Alternative Address",
    lines: [
      "D-19 Sector-55, Noida",
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground">
      {/* Top CTA Section */}
      <div className="border-b border-accent-foreground/10">
        <div className="container-wide py-10 md:py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="font-display font-bold text-xl md:text-2xl mb-2">
                Ready to Get Started?
              </h3>
              <p className="text-accent-foreground/80 text-sm">
                Contact us today for a free quote on your packaging needs.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-background text-primary px-6 py-3 rounded-full font-semibold hover:bg-background/90 transition-colors"
            >
              Get a Quote
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-wide py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img
                src={logo}
                alt="MR Enterprises"
                className="h-14 w-auto rounded-lg shadow-md"
              />
              <div>
                <span className="font-display font-bold text-xl block">
                  MR Enterprises
                </span>
                <span className="text-accent-foreground/70 text-xs uppercase tracking-wider">
                  Since 2000
                </span>
              </div>
            </Link>
            <p className="text-accent-foreground/80 text-sm leading-relaxed mb-6">
              Leading manufacturer of premium corrugated packaging solutions.
              Quality products, competitive pricing, and reliable delivery for
              businesses across industries.
            </p>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-accent-foreground/90 text-sm font-medium bg-accent-foreground/10 px-3 py-2 rounded-lg w-fit">
                <span className="font-semibold">GST:</span>
                <span>09ABRPV1756E1Z4</span>
              </div>
              <div className="flex items-center gap-2 text-accent-foreground/70 text-xs">
                <Clock className="w-4 h-4" />
                <span>Mon - Sat: 9:00 AM - 8:00 PM</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-display font-semibold text-base mb-5 uppercase tracking-wider text-sm">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-accent-foreground/80 hover:text-white transition-colors text-sm inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="lg:col-span-2">
            <h4 className="font-display font-semibold text-base mb-5 uppercase tracking-wider text-sm">
              Products
            </h4>
            <ul className="space-y-3">
              {products.map((product) => (
                <li key={product.path}>
                  <Link
                    to={product.path}
                    className="text-accent-foreground/80 hover:text-white transition-colors text-sm inline-flex items-center gap-1 group"
                  >
                    {product.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Addresses */}
          <div className="lg:col-span-4">
            <h4 className="font-display font-semibold text-base mb-5 uppercase tracking-wider text-sm">
              Contact Us
            </h4>
            
            {/* Addresses */}
            <div className="space-y-4 mb-6">
              {addresses.map((address) => (
                <div key={address.label} className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-accent-foreground shrink-0 mt-1" />
                  <div>
                    <span className="text-accent-foreground font-medium text-xs uppercase tracking-wider block mb-1">
                      {address.label}
                    </span>
                    {address.lines.map((line) => (
                      <span
                        key={line}
                        className="text-accent-foreground/80 text-sm leading-relaxed block"
                      >
                        {line}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Phone & Email */}
            <div className="space-y-3 pt-4 border-t border-accent-foreground/10">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent-foreground shrink-0" />
                <div className="text-sm flex gap-3">
                  <a
                    href="tel:+919810504174"
                    className="text-accent-foreground/80 hover:text-white transition-colors"
                  >
                    +91 98105 04174
                  </a>
                  <span className="text-accent-foreground/40">|</span>
                  <a
                    href="tel:+919911194174"
                    className="text-accent-foreground/80 hover:text-white transition-colors"
                  >
                    +91 99111 94174
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent-foreground shrink-0" />
                <a
                  href="mailto:mrenterprises2000@gmail.com"
                  className="text-accent-foreground/80 hover:text-white transition-colors text-sm"
                >
                  mrenterprises2000@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-accent-foreground/10 bg-accent-foreground/5">
        <div className="container-wide py-5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-accent-foreground/60 text-sm">
              © {new Date().getFullYear()} MR Enterprises. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                to="/privacy"
                className="text-accent-foreground/60 hover:text-white transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-accent-foreground/60 hover:text-white transition-colors text-sm"
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
