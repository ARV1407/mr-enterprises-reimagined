import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/layout/Layout";
import { PageTransition, ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations";

const addresses = [
  {
    label: "Head Office",
    details: [
      "Plot No - 112, Ground Floor,",
      "Udyog Kendra II, Greater Noida,",
      "Gautam Buddha Nagar - 201310",
    ],
  },
  {
    label: "Alternative Address",
    details: [
      "D-19 Sector-55, Noida",
    ],
  },
];

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    details: ["+91 98105 04174", "+91 99111 94174"],
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
      description:
        "Thank you for contacting us. We'll get back to you within 24 hours.",
    });

    setFormData({ name: "", email: "", phone: "", company: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      <PageTransition>
        {/* Hero Section */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-secondary">
          <div className="container-wide">
            <div className="max-w-4xl">
              <motion.p
                className="text-caption text-accent mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Contact Us
              </motion.p>
              <motion.h1
                className="heading-hero mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                Let's Start a{" "}
                <span className="text-accent">Conversation</span>
              </motion.h1>
              <motion.p
                className="text-xl md:text-2xl text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                Have questions about our products or need a custom quote? Our
                team is here to help. Reach out and we'll respond within 24
                hours.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="section-padding bg-background">
          <div className="container-wide">
            <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
              {/* Contact Form */}
              <ScrollReveal direction="left" className="lg:col-span-3">
                <div className="bg-card p-8 md:p-10 rounded-2xl shadow-sm">
                  <h2 className="heading-card mb-2">Send Us a Message</h2>
                  <p className="text-muted-foreground mb-8">
                    Fill out the form below and we'll get back to you shortly.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium mb-2"
                        >
                          Full Name <span className="text-accent">*</span>
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleChange}
                          className="h-12 bg-background"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium mb-2"
                        >
                          Email Address <span className="text-accent">*</span>
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="you@company.com"
                          value={formData.email}
                          onChange={handleChange}
                          className="h-12 bg-background"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium mb-2"
                        >
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="+91 98105 04174"
                          value={formData.phone}
                          onChange={handleChange}
                          className="h-12 bg-background"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="company"
                          className="block text-sm font-medium mb-2"
                        >
                          Company Name
                        </label>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          placeholder="Your Company"
                          value={formData.company}
                          onChange={handleChange}
                          className="h-12 bg-background"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium mb-2"
                      >
                        Message <span className="text-accent">*</span>
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        placeholder="Tell us about your packaging requirements..."
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="bg-background resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="accent"
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
              </ScrollReveal>

              {/* Contact Info */}
              <ScrollReveal direction="right" delay={0.2} className="lg:col-span-2">
                <p className="text-caption text-accent mb-4">Get in Touch</p>
                <h2 className="heading-card mb-8">Contact Information</h2>

                {/* Addresses Section */}
                <div className="space-y-4 mb-6">
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Our Locations</h3>
                  <StaggerContainer className="space-y-3" staggerDelay={0.1}>
                    {addresses.map((address) => (
                      <StaggerItem key={address.label}>
                        <motion.div
                          className="flex gap-4 p-5 bg-secondary rounded-xl"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                            <MapPin className="w-5 h-5 text-accent" />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-1">{address.label}</h3>
                            {address.details.map((detail) => (
                              <p
                                key={detail}
                                className="text-sm text-muted-foreground"
                              >
                                {detail}
                              </p>
                            ))}
                          </div>
                        </motion.div>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                </div>

                {/* Contact Info Section */}
                <StaggerContainer className="space-y-3" staggerDelay={0.1}>
                  {contactInfo.map((info) => (
                    <StaggerItem key={info.title}>
                      <motion.div
                        className="flex gap-4 p-4 bg-secondary rounded-xl"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                          <info.icon className="w-4 h-4 text-accent" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-sm mb-1">{info.title}</h3>
                          {info.details.map((detail) => (
                            <p
                              key={detail}
                              className="text-sm text-muted-foreground"
                            >
                              {detail}
                            </p>
                          ))}
                        </div>
                      </motion.div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>

                {/* Map */}
                <motion.div
                  className="mt-8 rounded-xl overflow-hidden shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.2034694982604!2d77.50494217549825!3d28.474399175742756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea64ffffffff%3A0x1c7bbd40e9c5e43a!2sUdyog%20Kendra%20II!5e0!3m2!1sen!2sin!4v1704000000000!5m2!1sen!2sin"
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="MR Enterprises Location"
                    className="rounded-xl"
                  />
                </motion.div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Quick Call CTA */}
        <section className="section-padding-sm bg-kraft-light">
          <div className="container-wide">
            <ScrollReveal className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
              <div>
                <h2 className="heading-card mb-2">Quick Inquiry?</h2>
                <p className="text-muted-foreground">
                  For urgent requirements, feel free to call us directly.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="accent" size="lg" asChild>
                  <a href="tel:+919810504174">
                    <Phone className="w-4 h-4" />
                    +91 98105 04174
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="tel:+919911194174">
                    <Phone className="w-4 h-4" />
                    +91 99111 94174
                  </a>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </PageTransition>
    </Layout>
  );
};

export default Contact;
