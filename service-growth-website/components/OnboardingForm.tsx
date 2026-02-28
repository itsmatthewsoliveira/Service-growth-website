"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  Check,
  Loader2,
  Calendar,
  Mail,
  Clock,
} from "lucide-react";

// ─── Form Data ────────────────────────────────────────────────────────────────

interface FormData {
  // Section 1
  fullName: string;
  role: string;
  companyName: string;
  yearsInBusiness: string;
  city: string;
  phone: string;
  email: string;
  existingWebsite: string;
  companyDescription: string;
  // Section 2
  services: string[];
  otherServices: string;
  avgProjectSize: string;
  projectDuration: string;
  notableProject: string;
  photosAvailable: string;
  serviceArea: string;
  // Section 3
  brandPersonality: string[];
  hasLogo: string;
  brandColors: string;
  fonts: string;
  competitorWebsites: string;
  inspiredWebsites: string;
  websiteFeeling: string;
  // Section 4
  primaryGoal: string;
  idealClient: string;
  problemSolved: string;
  fatherCompanyName: string;
  fatherRole: string;
  fatherCompanyDetails: string;
  fatherProjects: string;
  additionalNotes: string;
}

const initialFormData: FormData = {
  fullName: "",
  role: "",
  companyName: "",
  yearsInBusiness: "",
  city: "",
  phone: "",
  email: "",
  existingWebsite: "",
  companyDescription: "",
  services: [],
  otherServices: "",
  avgProjectSize: "",
  projectDuration: "",
  notableProject: "",
  photosAvailable: "",
  serviceArea: "",
  brandPersonality: [],
  hasLogo: "",
  brandColors: "",
  fonts: "",
  competitorWebsites: "",
  inspiredWebsites: "",
  websiteFeeling: "",
  primaryGoal: "",
  idealClient: "",
  problemSolved: "",
  fatherCompanyName: "",
  fatherRole: "",
  fatherCompanyDetails: "",
  fatherProjects: "",
  additionalNotes: "",
};

// ─── Constants ────────────────────────────────────────────────────────────────

const SECTIONS = [
  { label: "Business", number: "01" },
  { label: "Services", number: "02" },
  { label: "Brand", number: "03" },
  { label: "Goals", number: "04" },
];

const SERVICE_OPTIONS = [
  "Residential Construction",
  "Commercial Construction",
  "Remodeling / Renovations",
  "Structural Engineering",
  "Landscaping / Outdoor",
  "Interior Design",
  "Project Management",
  "Industrial / Infrastructure",
];

const BRAND_PERSONALITY_OPTIONS = [
  "Premium / Luxury",
  "Modern / Minimalist",
  "Trustworthy / Family",
  "Industrial / Bold",
  "Innovative / Tech-forward",
  "Traditional / Classic",
];

const LOGO_OPTIONS = [
  { value: "Yes — approved logo with files", label: "Yes — approved logo with files" },
  { value: "Yes — but needs redesign", label: "Yes — but needs redesign" },
  { value: "No — we need a logo", label: "No — we need a logo" },
];

const PHOTOS_OPTIONS = [
  { value: "Yes — high resolution photos available", label: "Yes — high resolution photos available" },
  { value: "Yes — but photos need to be taken/found", label: "Yes — but photos need to be taken/found" },
  { value: "No — we'll need to discuss alternatives", label: "No — we'll need to discuss alternatives" },
];

const GOAL_OPTIONS = [
  { value: "Generate new client leads", label: "Generate new client leads" },
  { value: "Build credibility / show portfolio", label: "Build credibility / show portfolio" },
  { value: "Attract large commercial clients", label: "Attract large commercial clients" },
  { value: "Replace word-of-mouth with online presence", label: "Replace word-of-mouth with online presence" },
  { value: "Expand to new cities/regions", label: "Expand to new cities/regions" },
  { value: "All of the above", label: "All of the above" },
];

const CALENDLY_URL =
  "https://calendly.com/servicegrowth-info/30min?hide_gdpr_banner=1&background_color=0a0a0a&text_color=ffffff&primary_color=28e8fd";

// ─── Reusable Styled Components ───────────────────────────────────────────────

function FormField({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <label className="block text-xs tracking-[0.15em] uppercase text-accent">
        {label}
        {hint && (
          <span className="text-text-muted text-[10px] ml-1 normal-case tracking-normal">
            ({hint})
          </span>
        )}
      </label>
      {children}
    </div>
  );
}

const inputClasses =
  "w-full bg-white/[0.03] border border-accent/20 text-white font-sans text-sm px-4 py-3.5 outline-none transition-all duration-300 placeholder:text-white/20 placeholder:italic focus:border-accent focus:bg-accent/[0.04] rounded-none";

const textareaClasses = `${inputClasses} resize-y min-h-[100px] leading-relaxed`;

const selectClasses = `${inputClasses} appearance-none cursor-pointer`;

const selectStyle = {
  backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%2328e8fd' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
  backgroundPosition: "right 0.75rem center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "1.5em 1.5em",
};

// ─── Main Component ───────────────────────────────────────────────────────────

export default function OnboardingForm() {
  const [current, setCurrent] = useState(0);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function updateField(field: keyof FormData, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }

  function toggleCheckbox(field: "services" | "brandPersonality", value: string) {
    setFormData((prev) => {
      const arr = prev[field] as string[];
      return {
        ...prev,
        [field]: arr.includes(value)
          ? arr.filter((v) => v !== value)
          : [...arr, value],
      };
    });
  }

  function goTo(step: number) {
    setCurrent(step);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function handleSubmit() {
    setSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Submission failed");

      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setError("Something went wrong. Please try again or email us directly.");
      setSubmitting(false);
    }
  }

  // ─── Completion Screen ────────────────────────────────────────────────────

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center py-20"
      >
        <div className="w-[72px] h-[72px] border border-accent rounded-full flex items-center justify-center mx-auto mb-8">
          <Check className="w-7 h-7 text-accent" />
        </div>

        <h2 className="text-4xl md:text-5xl font-serif text-text-headline mb-4">
          Thank You.
        </h2>
        <p className="text-sm text-text-muted max-w-md mx-auto leading-relaxed tracking-wide">
          Your onboarding questionnaire has been submitted. We review every
          response carefully before beginning work.
        </p>

        <div className="mt-10 border border-accent/20 text-left max-w-md mx-auto p-6">
          <span className="text-xs tracking-[0.15em] uppercase text-accent block mb-4">
            What Happens Next
          </span>
          <ul className="space-y-3">
            {[
              "You'll receive a confirmation email within 1 hour",
              "We'll review your answers within 24 hours",
              "A project strategy call will be scheduled",
              "Website design begins within 3–5 business days",
            ].map((step, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-sm text-white/70 tracking-wide"
              >
                <ArrowRight className="w-3.5 h-3.5 text-accent mt-0.5 flex-shrink-0" />
                {step}
              </li>
            ))}
          </ul>
        </div>

        {/* Calendly CTA */}
        <div className="mt-10 max-w-md mx-auto">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 w-full px-8 py-4 bg-accent text-black text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:bg-accent-hover hover:-translate-y-0.5"
          >
            <Calendar className="w-4 h-4" />
            Book Your Strategy Call Now
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
          <p className="text-text-muted text-xs mt-3">
            Skip the wait — book a time directly on our calendar.
          </p>
        </div>
      </motion.div>
    );
  }

  // ─── Form Sections ────────────────────────────────────────────────────────

  const sections = [
    // Section 1: Business Basics
    <div key="s1" className="space-y-8">
      <SectionHeader
        number="01"
        title="About Your Business"
        subtitle="Tell us the fundamentals of your construction company."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField label="Your Full Name">
          <input
            type="text"
            value={formData.fullName}
            onChange={(e) => updateField("fullName", e.target.value)}
            placeholder="e.g. Mateo Garcia"
            className={inputClasses}
          />
        </FormField>
        <FormField label="Your Role / Title">
          <input
            type="text"
            value={formData.role}
            onChange={(e) => updateField("role", e.target.value)}
            placeholder="e.g. Owner, Director"
            className={inputClasses}
          />
        </FormField>
      </div>
      <FormField label="Company Name" hint="official / legal name">
        <input
          type="text"
          value={formData.companyName}
          onChange={(e) => updateField("companyName", e.target.value)}
          placeholder="e.g. Garcia Construcciones S.A."
          className={inputClasses}
        />
      </FormField>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField label="Years in Business">
          <input
            type="number"
            value={formData.yearsInBusiness}
            onChange={(e) => updateField("yearsInBusiness", e.target.value)}
            placeholder="e.g. 12"
            className={inputClasses}
          />
        </FormField>
        <FormField label="City / Province">
          <input
            type="text"
            value={formData.city}
            onChange={(e) => updateField("city", e.target.value)}
            placeholder="e.g. Mendoza, Argentina"
            className={inputClasses}
          />
        </FormField>
      </div>
      <FormField label="Phone Number">
        <input
          type="tel"
          value={formData.phone}
          onChange={(e) => updateField("phone", e.target.value)}
          placeholder="+54 261 ..."
          className={inputClasses}
        />
      </FormField>
      <FormField label="Email Address">
        <input
          type="email"
          value={formData.email}
          onChange={(e) => updateField("email", e.target.value)}
          placeholder="contact@yourcompany.com"
          className={inputClasses}
        />
      </FormField>
      <FormField label="Existing Website" hint="if any">
        <input
          type="url"
          value={formData.existingWebsite}
          onChange={(e) => updateField("existingWebsite", e.target.value)}
          placeholder="https://yoursite.com  — or leave blank"
          className={inputClasses}
        />
      </FormField>
      <FormField label="Brief Company Description">
        <textarea
          value={formData.companyDescription}
          onChange={(e) => updateField("companyDescription", e.target.value)}
          placeholder="Tell us what you do, who you serve, and what makes you different..."
          className={textareaClasses}
          rows={4}
        />
      </FormField>
    </div>,

    // Section 2: Services & Projects
    <div key="s2" className="space-y-8">
      <SectionHeader
        number="02"
        title="Services & Projects"
        subtitle="Help us understand what you build and who you build it for."
      />
      <FormField label="Primary Services Offered" hint="check all that apply">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {SERVICE_OPTIONS.map((service) => (
            <label
              key={service}
              className={`flex items-center gap-3 px-4 py-3 border cursor-pointer transition-all duration-300 select-none ${
                formData.services.includes(service)
                  ? "border-accent/50 bg-accent/[0.06]"
                  : "border-accent/15 hover:border-accent/30 hover:bg-accent/[0.02]"
              }`}
            >
              <input
                type="checkbox"
                checked={formData.services.includes(service)}
                onChange={() => toggleCheckbox("services", service)}
                className="w-3.5 h-3.5 accent-accent flex-shrink-0"
              />
              <span className="text-sm text-white tracking-wide">{service}</span>
            </label>
          ))}
        </div>
      </FormField>
      <FormField label="Other Services">
        <input
          type="text"
          value={formData.otherServices}
          onChange={(e) => updateField("otherServices", e.target.value)}
          placeholder="e.g. Pools, solar, smart homes..."
          className={inputClasses}
        />
      </FormField>

      <hr className="border-accent/15" />
      <span className="block text-xs tracking-[0.15em] uppercase text-accent/60 pb-2 border-b border-accent/10">
        Project History
      </span>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField label="Average Project Size">
          <input
            type="text"
            value={formData.avgProjectSize}
            onChange={(e) => updateField("avgProjectSize", e.target.value)}
            placeholder="e.g. $50,000 – $300,000 USD"
            className={inputClasses}
          />
        </FormField>
        <FormField label="Typical Project Duration">
          <input
            type="text"
            value={formData.projectDuration}
            onChange={(e) => updateField("projectDuration", e.target.value)}
            placeholder="e.g. 3–6 months"
            className={inputClasses}
          />
        </FormField>
      </div>
      <FormField label="Most Notable Project">
        <textarea
          value={formData.notableProject}
          onChange={(e) => updateField("notableProject", e.target.value)}
          placeholder="Describe a project you're most proud of..."
          className={textareaClasses}
          rows={3}
        />
      </FormField>
      <FormField label="Project Photos Available?">
        <select
          value={formData.photosAvailable}
          onChange={(e) => updateField("photosAvailable", e.target.value)}
          className={selectClasses}
          style={selectStyle}
        >
          <option value="" className="bg-bg-card">
            Select...
          </option>
          {PHOTOS_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value} className="bg-bg-card">
              {opt.label}
            </option>
          ))}
        </select>
      </FormField>
      <FormField label="Geographic Service Area">
        <input
          type="text"
          value={formData.serviceArea}
          onChange={(e) => updateField("serviceArea", e.target.value)}
          placeholder="e.g. Mendoza Province, Gran Mendoza..."
          className={inputClasses}
        />
      </FormField>
    </div>,

    // Section 3: Brand & Identity
    <div key="s3" className="space-y-8">
      <SectionHeader
        number="03"
        title="Brand & Identity"
        subtitle="We need to understand how you want to be perceived in the market."
      />
      <FormField label="Brand Personality" hint="check up to 3">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {BRAND_PERSONALITY_OPTIONS.map((trait) => (
            <label
              key={trait}
              className={`flex items-center gap-3 px-4 py-3 border cursor-pointer transition-all duration-300 select-none ${
                formData.brandPersonality.includes(trait)
                  ? "border-accent/50 bg-accent/[0.06]"
                  : "border-accent/15 hover:border-accent/30 hover:bg-accent/[0.02]"
              }`}
            >
              <input
                type="checkbox"
                checked={formData.brandPersonality.includes(trait)}
                onChange={() => toggleCheckbox("brandPersonality", trait)}
                className="w-3.5 h-3.5 accent-accent flex-shrink-0"
              />
              <span className="text-sm text-white tracking-wide">{trait}</span>
            </label>
          ))}
        </div>
      </FormField>
      <FormField label="Do You Have a Logo?">
        <select
          value={formData.hasLogo}
          onChange={(e) => updateField("hasLogo", e.target.value)}
          className={selectClasses}
          style={selectStyle}
        >
          <option value="" className="bg-bg-card">
            Select...
          </option>
          {LOGO_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value} className="bg-bg-card">
              {opt.label}
            </option>
          ))}
        </select>
      </FormField>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField label="Brand Colors">
          <input
            type="text"
            value={formData.brandColors}
            onChange={(e) => updateField("brandColors", e.target.value)}
            placeholder="e.g. Dark navy, gold, white"
            className={inputClasses}
          />
        </FormField>
        <FormField label="Preferred Fonts">
          <input
            type="text"
            value={formData.fonts}
            onChange={(e) => updateField("fonts", e.target.value)}
            placeholder="e.g. Clean modern sans-serif"
            className={inputClasses}
          />
        </FormField>
      </div>
      <FormField label="Competitor Websites You Respect">
        <textarea
          value={formData.competitorWebsites}
          onChange={(e) => updateField("competitorWebsites", e.target.value)}
          placeholder="URLs or names + what you like about them..."
          className={textareaClasses}
          rows={3}
        />
      </FormField>
      <FormField label="Websites You Love (Any Industry)">
        <textarea
          value={formData.inspiredWebsites}
          onChange={(e) => updateField("inspiredWebsites", e.target.value)}
          placeholder="Any industry — architecture, luxury brands, tech..."
          className={textareaClasses}
          rows={3}
        />
      </FormField>
      <FormField label="How Should Visitors Feel?">
        <textarea
          value={formData.websiteFeeling}
          onChange={(e) => updateField("websiteFeeling", e.target.value)}
          placeholder="e.g. Confident, impressed, ready to call you..."
          className={textareaClasses}
          rows={3}
        />
      </FormField>
    </div>,

    // Section 4: Goals & Expectations
    <div key="s4" className="space-y-8">
      <SectionHeader
        number="04"
        title="Goals & Expectations"
        subtitle="Help us understand what success looks like for you."
      />
      <FormField label="Primary Goal for the Website">
        <select
          value={formData.primaryGoal}
          onChange={(e) => updateField("primaryGoal", e.target.value)}
          className={selectClasses}
          style={selectStyle}
        >
          <option value="" className="bg-bg-card">
            Select...
          </option>
          {GOAL_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value} className="bg-bg-card">
              {opt.label}
            </option>
          ))}
        </select>
      </FormField>
      <FormField label="Who Is Your Ideal Client?">
        <textarea
          value={formData.idealClient}
          onChange={(e) => updateField("idealClient", e.target.value)}
          placeholder="Homeowners, developers, government, companies... age, budget, location..."
          className={textareaClasses}
          rows={3}
        />
      </FormField>
      <FormField label="What Problem Do You Solve?">
        <textarea
          value={formData.problemSolved}
          onChange={(e) => updateField("problemSolved", e.target.value)}
          placeholder="What pain points do clients come to you with?"
          className={textareaClasses}
          rows={3}
        />
      </FormField>

      <hr className="border-accent/15" />
      <span className="block text-xs tracking-[0.15em] uppercase text-accent/60 pb-2 border-b border-accent/10">
        Father&apos;s Company{" "}
        <span className="text-text-muted text-[10px] normal-case tracking-normal">
          (complete if applicable)
        </span>
      </span>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField label="Father's Company Name">
          <input
            type="text"
            value={formData.fatherCompanyName}
            onChange={(e) => updateField("fatherCompanyName", e.target.value)}
            placeholder="Official business name"
            className={inputClasses}
          />
        </FormField>
        <FormField label="Father's Role / Title">
          <input
            type="text"
            value={formData.fatherRole}
            onChange={(e) => updateField("fatherRole", e.target.value)}
            placeholder="e.g. Founder, Owner"
            className={inputClasses}
          />
        </FormField>
      </div>
      <FormField label="Father's Company — Years & Specialty">
        <textarea
          value={formData.fatherCompanyDetails}
          onChange={(e) => updateField("fatherCompanyDetails", e.target.value)}
          placeholder="How long operating? What does his company specialize in?"
          className={textareaClasses}
          rows={3}
        />
      </FormField>
      <FormField label="Father's Most Impressive Projects">
        <textarea
          value={formData.fatherProjects}
          onChange={(e) => updateField("fatherProjects", e.target.value)}
          placeholder="Landmark buildings, major contracts, notable clients..."
          className={textareaClasses}
          rows={3}
        />
      </FormField>

      <hr className="border-accent/15" />

      <FormField label="Anything Else We Should Know?">
        <textarea
          value={formData.additionalNotes}
          onChange={(e) => updateField("additionalNotes", e.target.value)}
          placeholder="Timeline, languages, certifications, awards..."
          className={textareaClasses}
          rows={3}
        />
      </FormField>

      {error && (
        <p className="text-sm text-red-400 text-center tracking-wide">
          {error}
        </p>
      )}
    </div>,
  ];

  // ─── Render ───────────────────────────────────────────────────────────────

  return (
    <div>
      {/* Progress Bar */}
      <div className="flex gap-1 mb-12">
        {SECTIONS.map((section, i) => (
          <div key={i} className="flex-1">
            <div
              className={`h-0.5 transition-colors duration-400 ${
                i < current
                  ? "bg-accent/50"
                  : i === current
                    ? "bg-accent"
                    : "bg-white/10"
              }`}
            />
            <p className="text-[9px] tracking-[0.15em] uppercase text-text-muted text-center mt-2">
              {section.label}
            </p>
          </div>
        ))}
      </div>

      {/* Active Section */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35 }}
        >
          {sections[current]}
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-12 pt-8 border-t border-accent/15">
        {current > 0 ? (
          <button
            type="button"
            onClick={() => goTo(current - 1)}
            className="flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-text-muted hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back
          </button>
        ) : (
          <span />
        )}

        <span className="text-xs text-text-muted tracking-wide">
          {current + 1} of {SECTIONS.length}
        </span>

        {current < SECTIONS.length - 1 ? (
          <button
            type="button"
            onClick={() => goTo(current + 1)}
            className="flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-black bg-accent px-8 py-4 hover:bg-accent-hover hover:-translate-y-px transition-all duration-300"
          >
            Continue
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        ) : (
          <button
            type="button"
            onClick={handleSubmit}
            disabled={submitting}
            className="flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-black bg-accent px-8 py-4 hover:bg-accent-hover hover:-translate-y-px transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {submitting ? (
              <>
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                Submit
                <ArrowRight className="w-3.5 h-3.5" />
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
}

// ─── Section Header ───────────────────────────────────────────────────────────

function SectionHeader({
  number,
  title,
  subtitle,
}: {
  number: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="mb-10">
      <span className="text-[10px] tracking-[0.2em] text-accent uppercase block mb-2">
        Section {number} / 04
      </span>
      <h2 className="text-3xl font-serif text-text-headline">{title}</h2>
      <p className="text-sm text-text-muted mt-2 tracking-wide">{subtitle}</p>
    </div>
  );
}
