import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/layout/Layout";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: [
      "Plot No - 112, Ground Floor,",
      "Udyog Kendra II, Greater Noida,",
      "Gautam Buddha Nagar - 201310,",
      "Uttar Pradesh, India"
    ],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+91 9810504174", "+91 9911194174"],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["mrenterprises2000@gmail.com"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Mon - Sat: 9:00 AM - 8:00 PM", "Sunday: Closed"],
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });

    setFormData({ name: "", email: "", phone: "", company: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-secondary section-padding">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="heading-display mb-6 opacity-0 animate-fade-in">
              Get in Touch
            </h1>
            <p className="text-body-large opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Have questions about our products or need a custom quote? Our team is here to help. Reach out and we'll respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <h2 className="heading-section mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 98105 04174"
                      value={formData.phone}
                      onChange={handleChange}
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Company Name
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Your Company"
                      value={formData.company}
                      onChange={handleChange}
                      className="h-12"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    placeholder="Tell us about your packaging requirements..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                  />
                </div>

                <Button
                  type="submit"
                  variant="kraft"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full md:w-auto"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="heading-section mb-6">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div
                    key={info.title}
                    className="flex gap-4 p-4 bg-secondary rounded-lg"
                  >
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <info.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{info.title}</h3>
                      {info.details.map((detail) => (
                        <p key={detail} className="text-sm text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Google Maps Embed */}
              <div className="mt-8 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.2034694982604!2d77.50494217549825!3d28.474399175742756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea64ffffffff%3A0x1c7bbd40e9c5e43a!2sUdyog%20Kendra%20II!5e0!3m2!1sen!2sin!4v1704000000000!5m2!1sen!2sin"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="MR Enterprises Location"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Inquiry CTA */}
      <section className="bg-kraft-light section-padding">
        <div className="container-wide text-center">
          <h2 className="heading-section mb-4">Quick Inquiry?</h2>
          <p className="text-body-large max-w-2xl mx-auto mb-6">
            For urgent requirements or quick questions, feel free to call us directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919810504174"
              className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-md font-semibold hover:bg-accent/90 transition-colors"
            >
              <Phone className="w-5 h-5" />
              +91 9810504174
            </a>
            <a
              href="tel:+919911194174"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-md font-semibold hover:bg-primary/90 transition-colors"
            >
              <Phone className="w-5 h-5" />
              +91 9911194174
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
