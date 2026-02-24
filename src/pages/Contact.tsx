import { useState, useEffect, useRef } from "react";
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
  Paperclip,
  X,
} from "lucide-react";

/* ─── Constants ─────────────────────────────────────────── */

const WEBHOOK_URL =
  "https://hook.us2.make.com/9y3z84y3i7e3lpncfc4vql28oq37ji94";

const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwraJqaaJ0YzmsxXmZtxUoMoGGT0aS4ecUUEXhguc_6i1YYuvFqg9e6u1-4Ogd8v-YZPA/exec";

const MAX_FILES = 5;
const MAX_FILE_SIZE_MB = 15;
const ALLOWED_TYPES = ["application/pdf", "image/jpeg", "image/png", "image/heic", "image/heif"];
const ALLOWED_EXTS = [".pdf", ".jpg", ".jpeg", ".png", ".heic"];

const propertyTypes = [
  { value: "residential", label: "Residential" },
  { value: "commercial", label: "Commercial" },
  { value: "multi-family", label: "Multi-family" },
  { value: "industrial", label: "Industrial" },
  { value: "other", label: "Other" },
];

const serviceOptions = [
  { id: "planning", label: "Planning & Design" },
  { id: "land-survey", label: "Land Survey (DFW Only)" },
  { id: "electrical", label: "Engineering Seal (TX, TN, AZ, FL)" },
  { id: "permitting", label: "Expedited Permit (DFW Only)" },
  { id: "engineering", label: "Drawings - Arch/Civil/Structural/MEP" },
];

const urgencyOptions = [
  { value: "immediately", label: "Immediately" },
  { value: "3-5 days", label: "3–5 days" },
  { value: "7-14 days", label: "7–14 days" },
  { value: "no-rush", label: "No rush" },
];

const heardFromOptions = [
  { value: "Facebook", label: "Facebook" },
  { value: "Google", label: "Google" },
  { value: "LinkedIn", label: "LinkedIn" },
  { value: "Other", label: "Other" },
];

/* ─── UTM helpers ────────────────────────────────────────── */

interface UtmParams {
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_content: string;
  utm_term: string;
}

function parseUtm(): UtmParams {
  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get("utm_source") ?? "",
    utm_medium: params.get("utm_medium") ?? "",
    utm_campaign: params.get("utm_campaign") ?? "",
    utm_content: params.get("utm_content") ?? "",
    utm_term: params.get("utm_term") ?? "",
  };
}

function inferHeardFrom(utm: UtmParams): string {
  const src = utm.utm_source.toLowerCase();
  const med = utm.utm_medium.toLowerCase();
  const isPaid = med === "cpc" || med === "paid";

  if (src.includes("facebook") && isPaid) return "Facebook";
  if (src.includes("google") && isPaid) return "Google";
  return "";
}

/* ─── Component ──────────────────────────────────────────── */

export default function Contact() {
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fileErrors, setFileErrors] = useState<string[]>([]);

  const [utm, setUtm] = useState<UtmParams>({
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_content: "",
    utm_term: "",
  });

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    propertyType: "",
    services: [] as string[],
    description: "",
    urgency: "",
    heardFrom: "",
    heardFromOther: "",
  });

  const [files, setFiles] = useState<File[]>([]);

  // Capture UTM params on mount and pre-fill heardFrom
  useEffect(() => {
    const parsed = parseUtm();
    setUtm(parsed);
    const inferred = inferHeardFrom(parsed);
    if (inferred) {
      setFormData((prev) => ({ ...prev, heardFrom: inferred }));
    }
  }, []);

  /* ─── Handlers ─────────────────────────────────────────── */

  const handleServiceToggle = (serviceId: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter((s) => s !== serviceId)
        : [...prev.services, serviceId],
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = Array.from(e.target.files ?? []);
    const errors: string[] = [];
    const valid: File[] = [];

    for (const file of selected) {
      const ext = "." + file.name.split(".").pop()?.toLowerCase();
      const isAllowedType = ALLOWED_TYPES.includes(file.type) || ALLOWED_EXTS.includes(ext);
      const isUnderSize = file.size <= MAX_FILE_SIZE_MB * 1024 * 1024;

      if (!isAllowedType) {
        errors.push(`"${file.name}" is not an allowed file type (PDF, JPG, PNG, HEIC).`);
      } else if (!isUnderSize) {
        errors.push(`"${file.name}" exceeds the ${MAX_FILE_SIZE_MB}MB limit.`);
      } else {
        valid.push(file);
      }
    }

    const combined = [...files, ...valid];
    if (combined.length > MAX_FILES) {
      errors.push(`You can upload a maximum of ${MAX_FILES} files.`);
      setFiles(combined.slice(0, MAX_FILES));
    } else {
      setFiles(combined);
    }

    setFileErrors(errors);
    // Reset file input so same file can be re-added after removal
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
    setFileErrors([]);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      phone: "",
      email: "",
      address: "",
      propertyType: "",
      services: [],
      description: "",
      urgency: "",
      heardFrom: "",
      heardFromOther: "",
    });
    setFiles([]);
    setFileErrors([]);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  /* ─── Validation ────────────────────────────────────────── */

  const validate = (): string | null => {
    if (!formData.name.trim()) return "Full Name is required.";
    if (!formData.email.trim()) return "Email Address is required.";
    if (!formData.phone.trim()) return "Phone Number is required.";
    if (!formData.urgency) return "Please select an urgency level.";
    if (!formData.heardFrom) return "Please tell us how you heard about us.";
    if (formData.heardFrom === "Other" && !formData.heardFromOther.trim())
      return "Please specify how you heard about us.";
    return null;
  };

  /* ─── Submit ────────────────────────────────────────────── */

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const error = validate();
    if (error) {
      toast({ title: "Validation Error", description: error, variant: "destructive" });
      return;
    }

    setIsSubmitting(true);

    try {
      const resolvedHeardFrom =
        formData.heardFrom === "Other" ? formData.heardFromOther.trim() : formData.heardFrom;

      // ── Step 1: Upload each file to Drive via Apps Script ──────────
      // Apps Script expects one file at a time as JSON with base64 encoded data
      // It returns { success: true, url: "https://drive.google.com/..." }
      let driveLinks = "";
      let fileNames = "";

      if (files.length > 0) {
        const uploadedUrls: string[] = [];

        for (const file of files) {
          // Convert file to base64 — Apps Script requires this format
          const base64 = await new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => {
              // FileReader result is "data:mimetype;base64,XXXXX" — strip the prefix
              const result = reader.result as string;
              resolve(result.split(",")[1]);
            };
            reader.onerror = () => reject(new Error(`Failed to read file: ${file.name}`));
            reader.readAsDataURL(file);
          });

          const uploadRes = await fetch(APPS_SCRIPT_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              fileName: file.name,
              fileData: base64,
              mimeType: file.type || "application/octet-stream",
            }),
          });

          if (!uploadRes.ok) {
            throw new Error(`Failed to upload ${file.name}`);
          }

          const uploadData = await uploadRes.json();

          if (!uploadData.success) {
            throw new Error(`Apps Script error for ${file.name}: ${uploadData.error}`);
          }

          uploadedUrls.push(uploadData.url);
        }

        // Comma-separated — lands cleanly in a single Google Sheet cell
        driveLinks = uploadedUrls.join(", ");
        fileNames = files.map((f) => f.name).join(", ");
      }

      // ── Step 2: Send full payload to Make ─────────────────────────
      // Format: multipart/form-data — Make reads each field by name
      // fileNames and driveLinks will be empty strings if no files uploaded
      const payload = new FormData();

      // Text fields
      payload.append("name", formData.name);
      payload.append("phone", formData.phone);
      payload.append("email", formData.email);
      payload.append("address", formData.address);
      payload.append("propertyType", formData.propertyType);
      payload.append("services", JSON.stringify(formData.services));
      payload.append("description", formData.description);
      payload.append("urgency", formData.urgency);
      payload.append("heardFrom", resolvedHeardFrom);

      // UTM + meta
      payload.append("utm_source", utm.utm_source);
      payload.append("utm_medium", utm.utm_medium);
      payload.append("utm_campaign", utm.utm_campaign);
      payload.append("utm_content", utm.utm_content);
      payload.append("utm_term", utm.utm_term);
      payload.append("createdAt", new Date().toISOString());
      payload.append("sourceUrl", window.location.href);

      // Drive data — populated from Apps Script responses above
      payload.append("fileNames", fileNames);
      payload.append("driveLinks", driveLinks);

      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        body: payload,
        // Do NOT set Content-Type — browser sets it with boundary automatically
      });

      if (!response.ok) {
        throw new Error(`Webhook returned ${response.status}`);
      }

      toast({
        title: "Quote Request Submitted!",
        description: "We'll get back to you within 24 hours.",
      });

      resetForm();
    } catch (err) {
      toast({
        title: "Submission Error",
        description: "Failed to submit your quote request. Please try again.",
        variant: "destructive",
      });
      console.error("Form submission error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  /* ─── Render ────────────────────────────────────────────── */

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
              Tell us about your project and our team of licensed Professional Engineers will
              provide a comprehensive quote tailored to your needs.
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
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
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
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    />
                  </div>

                  {/* Property Type & Urgency */}
                  <div className="grid sm:grid-cols-2 gap-6">
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

                    <div className="space-y-2">
                      <Label>Urgency *</Label>
                      <Select
                        value={formData.urgency}
                        onValueChange={(value) =>
                          setFormData({ ...formData, urgency: value })
                        }
                      >
                        <SelectTrigger className="bg-background">
                          <SelectValue placeholder="How soon do you need this?" />
                        </SelectTrigger>
                        <SelectContent className="bg-background z-50">
                          {urgencyOptions.map((opt) => (
                            <SelectItem key={opt.value} value={opt.value}>
                              {opt.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Services Needed */}
                  <div className="space-y-3">
                    <Label>Services Needed</Label>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {serviceOptions.map((service) => (
                        <div key={service.id} className="flex items-center space-x-2">
                          <Checkbox
                            id={service.id}
                            checked={formData.services.includes(service.id)}
                            onCheckedChange={() => handleServiceToggle(service.id)}
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
                      rows={4}
                      value={formData.description}
                      onChange={(e) =>
                        setFormData({ ...formData, description: e.target.value })
                      }
                    />
                  </div>

                  {/* Where did you hear about us */}
                  <div className="space-y-2">
                    <Label>Where did you hear about us? *</Label>
                    <Select
                      value={formData.heardFrom}
                      onValueChange={(value) =>
                        setFormData({ ...formData, heardFrom: value, heardFromOther: "" })
                      }
                    >
                      <SelectTrigger className="bg-background">
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent className="bg-background z-50">
                        {heardFromOptions.map((opt) => (
                          <SelectItem key={opt.value} value={opt.value}>
                            {opt.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    {formData.heardFrom === "Other" && (
                      <div className="pt-2">
                        <Input
                          placeholder="Please specify *"
                          value={formData.heardFromOther}
                          onChange={(e) =>
                            setFormData({ ...formData, heardFromOther: e.target.value })
                          }
                          required
                        />
                      </div>
                    )}
                  </div>

                  {/* File Upload */}
                  <div className="space-y-3">
                    <Label>Upload Plans / Photos (optional)</Label>
                    <div
                      className="border-2 border-dashed border-border rounded-lg p-6 text-center cursor-pointer hover:border-primary/50 transition-colors"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <Paperclip className="h-6 w-6 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">
                        Click to upload or drag files here
                      </p>
                      <p className="text-xs text-muted-foreground/70 mt-1">
                        PDF, JPG, PNG, HEIC — up to {MAX_FILES} files, {MAX_FILE_SIZE_MB}MB each
                      </p>
                    </div>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png,.heic"
                      multiple
                      className="hidden"
                      onChange={handleFileChange}
                    />

                    {/* File errors */}
                    {fileErrors.length > 0 && (
                      <ul className="space-y-1">
                        {fileErrors.map((err, i) => (
                          <li key={i} className="text-sm text-destructive">
                            {err}
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Selected files */}
                    {files.length > 0 && (
                      <ul className="space-y-2">
                        {files.map((file, i) => (
                          <li
                            key={i}
                            className="flex items-center justify-between bg-muted/50 rounded-lg px-3 py-2 text-sm"
                          >
                            <span className="truncate text-foreground max-w-[85%]">
                              {file.name}
                            </span>
                            <button
                              type="button"
                              onClick={() => removeFile(i)}
                              className="text-muted-foreground hover:text-destructive transition-colors ml-2 shrink-0"
                              aria-label={`Remove ${file.name}`}
                            >
                              <X className="h-4 w-4" />
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* Submit */}
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
                        United States
                        <br />
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
                        href="tel:+12143829584"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        (214) 382-9584
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
                        href="mailto:contact@a1engineering.com"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        contact@a1engineering.com
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
                        Monday - Friday
                        <br />
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
                <h3 className="font-heading text-lg font-bold mb-2">Quick Response</h3>
                <p className="text-sm text-primary-foreground/80">
                  We typically respond to all inquiries within 24 hours. For urgent projects,
                  call us directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
