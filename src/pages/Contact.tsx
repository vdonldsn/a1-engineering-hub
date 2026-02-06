import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  BadgeCheck,
  Shield,
  Award,
} from "lucide-react";

const propertyTypes = [
  { value: "residential", label: "Residential" },
  { value: "commercial", label: "Commercial" },
  { value: "multi-family", label: "Multi-family" },
  { value: "industrial", label: "Industrial" },
  { value: "other", label: "Other" },
];

const serviceOptions = [
  { id: "planning", label: "Planning & Design" },
  { id: "engineering", label: "Engineering & Structural" },
  { id: "green", label: "Green, Energy & Testing" },
  { id: "electrical", label: "PE Electrical Engineering" },
  { id: "permitting", label: "Permitting & Operations" },
];

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    propertyType: "",
    services: [] as string[],
    description: "",
  });

  const handleServiceToggle = (serviceId: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter((s) => s !== serviceId)
        : [...prev.services, serviceId],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (ready for Resend integration later)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Quote Request Submitted!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      address: "",
      propertyType: "",
      services: [],
      description: "",
    });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blueprint via-background to-steel/20 blueprint-pattern">
        <div className="section-container">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Get a <span className="text-gradient">Free Quote</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Tell us about your project and our team of licensed Professional Engineers will provide a comprehensive quote tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-background">
        <div className="section-container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="glass-card rounded-2xl p-8">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                  Project Inquiry Form
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Phone */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        placeholder="John Smith"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(123) 456-7890"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        required
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                    />
                  </div>

                  {/* Project Address */}
                  <div className="space-y-2">
                    <Label htmlFor="address">Project Address</Label>
                    <Input
                      id="address"
                      placeholder="123 Main St, City, State ZIP"
                      value={formData.address}
                      onChange={(e) =>
                        setFormData({ ...formData, address: e.target.value })
                      }
                    />
                  </div>

                  {/* Property Type */}
                  <div className="space-y-2">
                    <Label>Property Type</Label>
                    <Select
                      value={formData.propertyType}
                      onValueChange={(value) =>
                        setFormData({ ...formData, propertyType: value })
                      }
                    >
                      <SelectTrigger className="bg-background">
                        <SelectValue placeholder="Select property type" />
                      </SelectTrigger>
                      <SelectContent className="bg-background z-50">
                        {propertyTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Services Needed */}
                  <div className="space-y-3">
                    <Label>Services Needed</Label>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {serviceOptions.map((service) => (
                        <div
                          key={service.id}
                          className="flex items-center space-x-2"
                        >
                          <Checkbox
                            id={service.id}
                            checked={formData.services.includes(service.id)}
                            onCheckedChange={() =>
                              handleServiceToggle(service.id)
                            }
                          />
                          <Label
                            htmlFor={service.id}
                            className="text-sm font-normal cursor-pointer"
                          >
                            {service.label}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Description */}
                  <div className="space-y-2">
                    <Label htmlFor="description">Project Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Tell us about your project, timeline, and any specific requirements..."
                      rows={5}
                      value={formData.description}
                      onChange={(e) =>
                        setFormData({ ...formData, description: e.target.value })
                      }
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full gradient-metallic"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Submitting..."
                    ) : (
                      <>
                        Submit Quote Request
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-6">
              {/* Contact Details */}
              <div className="glass-card rounded-2xl p-6">
                <h3 className="font-heading text-xl font-bold text-foreground mb-6">
                  Contact Information
                </h3>
                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Location</div>
                      <div className="text-sm text-muted-foreground">
                        United States<br />
                        Serving TN, TX, AZ, FL
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Phone</div>
                      <a
                        href="tel:+1234567890"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        (123) 456-7890
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Email</div>
                      <a
                        href="mailto:info@a1engineering.com"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        info@a1engineering.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Hours</div>
                      <div className="text-sm text-muted-foreground">
                        Monday - Friday<br />
                        8:00 AM - 6:00 PM
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Trust Badges */}
              <div className="glass-card rounded-2xl p-6">
                <h3 className="font-heading text-xl font-bold text-foreground mb-6">
                  Why Choose Us
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium text-foreground text-sm">
                        Licensed PE Approval
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Every project stamped by PEs
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Award className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium text-foreground text-sm">
                        Green/Energy Certified
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Full compliance expertise
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <BadgeCheck className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium text-foreground text-sm">
                        US-Based Expertise
                      </div>
                      <div className="text-xs text-muted-foreground">
                        American engineering excellence
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Quick Response */}
              <div className="gradient-metallic rounded-2xl p-6 text-primary-foreground">
                <h3 className="font-heading text-lg font-bold mb-2">
                  Quick Response
                </h3>
                <p className="text-sm text-primary-foreground/80">
                  We typically respond to all inquiries within 24 hours. For urgent projects, call us directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
