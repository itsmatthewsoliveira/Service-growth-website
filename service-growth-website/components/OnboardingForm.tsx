"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  Check,
  Loader2,
  Calendar,
  Globe,
} from "lucide-react";
import { type Lang, LANG_LABELS, ts, ta, tMap } from "@/lib/onboarding-translations";

// --- Form Data ----------------------------------------------------------------

interface FormData {
  // Section 1
  fullName: string;
  role: string;
  companyName: string;
  industry: string;
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
  additionalNotes: string;
}

const initialFormData: FormData = {
  fullName: "",
  role: "",
  companyName: "",
  industry: "",
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
  additionalNotes: "",
};

// --- Constants (services data) ------------------------------------------------

const INDUSTRY_KEYS = [
  "home-services",
  "medical",
  "construction",
  "legal",
  "real-estate",
  "automotive",
  "restaurant",
  "fitness",
  "other",
];

const SERVICES_BY_INDUSTRY: Record<string, string[]> = {
  "home-services": [
    "Plumbing",
    "HVAC / Air Conditioning",
    "Electrical",
    "Roofing",
    "Landscaping / Lawn Care",
    "Cleaning Services",
    "Pest Control",
    "Painting",
  ],
  medical: [
    "General Practice / Family Medicine",
    "Dental",
    "Chiropractic",
    "Dermatology",
    "Mental Health / Therapy",
    "Physical Therapy",
    "Urgent Care",
    "Veterinary",
  ],
  construction: [
    "Residential Construction",
    "Commercial Construction",
    "Remodeling / Renovations",
    "Concrete / Masonry",
    "Flooring / Tile",
    "Framing / Structural",
    "Demolition",
    "Project Management",
  ],
  legal: [
    "Personal Injury",
    "Family Law / Divorce",
    "Criminal Defense",
    "Estate Planning",
    "Business / Corporate Law",
    "Immigration",
    "Real Estate Law",
    "Employment Law",
  ],
  "real-estate": [
    "Residential Sales",
    "Commercial Sales",
    "Property Management",
    "Real Estate Investment",
    "Luxury / High-End",
    "New Construction Sales",
    "Rentals / Leasing",
    "Land Development",
  ],
  automotive: [
    "Auto Repair / Mechanic",
    "Body Shop / Collision",
    "Auto Detailing",
    "Tire & Wheel Services",
    "Oil Change / Quick Lube",
    "Towing",
    "Auto Sales (Used)",
    "Auto Sales (New)",
  ],
  restaurant: [
    "Dine-In Restaurant",
    "Fast Casual",
    "Catering",
    "Food Truck",
    "Bakery / Desserts",
    "Coffee / Caf\u00e9",
    "Bar / Nightlife",
    "Meal Prep / Delivery",
  ],
  fitness: [
    "Personal Training",
    "Gym / Fitness Center",
    "Yoga / Pilates",
    "Martial Arts",
    "CrossFit / Boot Camp",
    "Nutrition / Coaching",
    "Spa / Massage",
    "Physical Rehabilitation",
  ],
  other: [
    "Consulting",
    "IT / Technology Services",
    "Accounting / Tax",
    "Marketing / Advertising",
    "Photography / Videography",
    "Education / Tutoring",
    "Event Planning",
    "Retail / E-commerce",
  ],
};

const CALENDLY_URL =
  "https://calendly.com/servicegrowth-info/30min?hide_gdpr_banner=1&background_color=1A1A18&text_color=F5F0E8&primary_color=C2703A";

// --- Reusable Styled Components -----------------------------------------------

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
      <label className="block text-xs tracking-[0.15em] uppercase text-[#E25312]">
        {label}
        {hint && (
          <span className="text-[#7A766E] text-[10px] ml-1 normal-case tracking-normal">
            ({hint})
          </span>
        )}
      </label>
      {children}
    </div>
  );
}

const inputClasses =
  "w-full bg-white border border-[#D6D0C7] text-[#1D1C1A] font-sans text-sm px-4 py-3.5 outline-none transition-all duration-300 placeholder:text-[#7A766E] placeholder:italic focus:border-[#E25312] focus:ring-2 focus:ring-[#E25312]/20 rounded-lg";

const textareaClasses = `${inputClasses} resize-y min-h-[100px] leading-relaxed`;

const selectClasses = `${inputClasses} appearance-none cursor-pointer`;

const selectStyle = {
  backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23C2703A' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
  backgroundPosition: "right 0.75rem center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "1.5em 1.5em",
};

// --- Language Switcher --------------------------------------------------------

function LanguageSwitcher({
  lang,
  setLang,
}: {
  lang: Lang;
  setLang: (l: Lang) => void;
}) {
  const langs: Lang[] = ["en", "es", "pt"];

  return (
    <div className="flex items-center gap-2 mb-10 justify-end">
      <Globe className="w-3.5 h-3.5 text-[#E25312]/60" />
      <div className="flex border border-[#E25312]/20 overflow-hidden">
        {langs.map((l) => (
          <button
            key={l}
            type="button"
            onClick={() => setLang(l)}
            className={`px-3 py-1.5 text-[10px] tracking-[0.15em] uppercase font-medium transition-all duration-300 ${
              lang === l
                ? "bg-[#E25312] text-[#1D1C1A]"
                : "text-[#7A766E] hover:text-[#1D1C1A] hover:bg-[#FCFFD5]/5"
            }`}
          >
            {LANG_LABELS[l]}
          </button>
        ))}
      </div>
    </div>
  );
}

// --- Main Component -----------------------------------------------------------

export default function OnboardingForm({
  lang,
  setLang,
}: {
  lang: Lang;
  setLang: (l: Lang) => void;
}) {
  const [current, setCurrent] = useState(0);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const sectionLabels = ta("sections", lang);

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
      setError(ts("errorMessage", lang));
      setSubmitting(false);
    }
  }

  // --- Completion Screen ------------------------------------------------------

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center py-20"
      >
        <div className="w-[72px] h-[72px] border border-[#E25312] rounded-full flex items-center justify-center mx-auto mb-8">
          <Check className="w-7 h-7 text-[#E25312]" />
        </div>

        <h2 className="text-4xl md:text-5xl font-serif text-[#1D1C1A] mb-4">
          {ts("thankYou", lang)}
        </h2>
        <p className="text-sm text-[#7A766E] max-w-md mx-auto leading-relaxed tracking-wide">
          {ts("submittedMessage", lang)}
        </p>

        <div className="mt-10 border border-[#E25312]/20 text-left max-w-md mx-auto p-6">
          <span className="text-xs tracking-[0.15em] uppercase text-[#E25312] block mb-4">
            {ts("whatsNext", lang)}
          </span>
          <ul className="space-y-3">
            {ta("nextSteps", lang).map((step, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-sm text-[#4A4A45] tracking-wide"
              >
                <ArrowRight className="w-3.5 h-3.5 text-[#E25312] mt-0.5 flex-shrink-0" />
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
            className="group flex items-center justify-center gap-3 w-full px-8 py-4 bg-[#E25312] text-[#1D1C1A] text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:bg-[#F0712E] hover:-translate-y-0.5"
          >
            <Calendar className="w-4 h-4" />
            {ts("bookCall", lang)}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
          <p className="text-[#7A766E] text-xs mt-3">
            {ts("skipWait", lang)}
          </p>
        </div>
      </motion.div>
    );
  }

  // --- Translated option arrays ------------------------------------------------

  const industryMap = tMap("industryOptions", lang);
  const brandTraits = ta("brandPersonalityOptions", lang);
  const logoOpts = ta("logoOptions", lang);
  const photoOpts = ta("photosOptions", lang);
  const goalOpts = ta("goalOptions", lang);

  // --- Form Sections -----------------------------------------------------------

  const sections = [
    // Section 1: Business Basics
    <div key="s1" className="space-y-8">
      <SectionHeader
        number="01"
        total="04"
        title={ts("s1Title", lang)}
        subtitle={ts("s1Subtitle", lang)}
        sectionWord={ts("sectionLabel", lang)}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField label={ts("fullName", lang)}>
          <input
            type="text"
            value={formData.fullName}
            onChange={(e) => updateField("fullName", e.target.value)}
            placeholder={ts("fullNamePh", lang)}
            className={inputClasses}
          />
        </FormField>
        <FormField label={ts("role", lang)}>
          <input
            type="text"
            value={formData.role}
            onChange={(e) => updateField("role", e.target.value)}
            placeholder={ts("rolePh", lang)}
            className={inputClasses}
          />
        </FormField>
      </div>
      <FormField label={ts("companyName", lang)} hint={ts("companyNameHint", lang)}>
        <input
          type="text"
          value={formData.companyName}
          onChange={(e) => updateField("companyName", e.target.value)}
          placeholder={ts("companyNamePh", lang)}
          className={inputClasses}
        />
      </FormField>
      <FormField label={ts("industry", lang)}>
        <select
          value={formData.industry}
          onChange={(e) => {
            setFormData((prev) => ({ ...prev, industry: e.target.value, services: [] }));
          }}
          className={selectClasses}
          style={selectStyle}
        >
          <option value="" className="bg-white">
            {ts("industryPh", lang)}
          </option>
          {INDUSTRY_KEYS.map((key) => (
            <option key={key} value={key} className="bg-white">
              {industryMap[key]}
            </option>
          ))}
        </select>
      </FormField>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField label={ts("yearsInBusiness", lang)}>
          <input
            type="number"
            value={formData.yearsInBusiness}
            onChange={(e) => updateField("yearsInBusiness", e.target.value)}
            placeholder={ts("yearsInBusinessPh", lang)}
            className={inputClasses}
          />
        </FormField>
        <FormField label={ts("city", lang)}>
          <input
            type="text"
            value={formData.city}
            onChange={(e) => updateField("city", e.target.value)}
            placeholder={ts("cityPh", lang)}
            className={inputClasses}
          />
        </FormField>
      </div>
      <FormField label={ts("phone", lang)}>
        <input
          type="tel"
          value={formData.phone}
          onChange={(e) => updateField("phone", e.target.value)}
          placeholder={ts("phonePh", lang)}
          className={inputClasses}
        />
      </FormField>
      <FormField label={ts("email", lang)}>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => updateField("email", e.target.value)}
          placeholder={ts("emailPh", lang)}
          className={inputClasses}
        />
      </FormField>
      <FormField label={ts("existingWebsite", lang)} hint={ts("existingWebsiteHint", lang)}>
        <input
          type="url"
          value={formData.existingWebsite}
          onChange={(e) => updateField("existingWebsite", e.target.value)}
          placeholder={ts("existingWebsitePh", lang)}
          className={inputClasses}
        />
      </FormField>
      <FormField label={ts("companyDescription", lang)}>
        <textarea
          value={formData.companyDescription}
          onChange={(e) => updateField("companyDescription", e.target.value)}
          placeholder={ts("companyDescriptionPh", lang)}
          className={textareaClasses}
          rows={4}
        />
      </FormField>
    </div>,

    // Section 2: Services & Projects
    <div key="s2" className="space-y-8">
      <SectionHeader
        number="02"
        total="04"
        title={ts("s2Title", lang)}
        subtitle={ts("s2Subtitle", lang)}
        sectionWord={ts("sectionLabel", lang)}
      />
      <FormField label={ts("primaryServices", lang)} hint={ts("primaryServicesHint", lang)}>
        {formData.industry ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {(SERVICES_BY_INDUSTRY[formData.industry] || []).map((service) => (
              <label
                key={service}
                className={`flex items-center gap-3 px-4 py-3 border cursor-pointer transition-all duration-300 select-none ${
                  formData.services.includes(service)
                    ? "border-[#E25312]/50 bg-[#E25312]/[0.08]"
                    : "border-[#E25312]/15 hover:border-[#E25312]/30 hover:bg-[#E25312]/[0.03]"
                }`}
              >
                <input
                  type="checkbox"
                  checked={formData.services.includes(service)}
                  onChange={() => toggleCheckbox("services", service)}
                  className="w-3.5 h-3.5 accent-[#E25312] flex-shrink-0"
                />
                <span className="text-sm text-[#1D1C1A] tracking-wide">{service}</span>
              </label>
            ))}
          </div>
        ) : (
          <p className="text-sm text-[#7A766E] italic py-4 border border-dashed border-[#E25312]/15 text-center">
            {ts("selectIndustryFirst", lang)}
          </p>
        )}
      </FormField>
      <FormField label={ts("otherServices", lang)}>
        <input
          type="text"
          value={formData.otherServices}
          onChange={(e) => updateField("otherServices", e.target.value)}
          placeholder={ts("otherServicesPh", lang)}
          className={inputClasses}
        />
      </FormField>

      <hr className="border-[#E25312]/15" />
      <span className="block text-xs tracking-[0.15em] uppercase text-[#E25312]/60 pb-2 border-b border-[#E25312]/10">
        {ts("projectHistory", lang)}
      </span>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField label={ts("avgProjectSize", lang)}>
          <input
            type="text"
            value={formData.avgProjectSize}
            onChange={(e) => updateField("avgProjectSize", e.target.value)}
            placeholder={ts("avgProjectSizePh", lang)}
            className={inputClasses}
          />
        </FormField>
        <FormField label={ts("projectDuration", lang)}>
          <input
            type="text"
            value={formData.projectDuration}
            onChange={(e) => updateField("projectDuration", e.target.value)}
            placeholder={ts("projectDurationPh", lang)}
            className={inputClasses}
          />
        </FormField>
      </div>
      <FormField label={ts("notableProject", lang)}>
        <textarea
          value={formData.notableProject}
          onChange={(e) => updateField("notableProject", e.target.value)}
          placeholder={ts("notableProjectPh", lang)}
          className={textareaClasses}
          rows={3}
        />
      </FormField>
      <FormField label={ts("photosAvailable", lang)}>
        <select
          value={formData.photosAvailable}
          onChange={(e) => updateField("photosAvailable", e.target.value)}
          className={selectClasses}
          style={selectStyle}
        >
          <option value="" className="bg-white">
            {ts("select", lang)}
          </option>
          {photoOpts.map((opt) => (
            <option key={opt} value={opt} className="bg-white">
              {opt}
            </option>
          ))}
        </select>
      </FormField>
      <FormField label={ts("serviceArea", lang)}>
        <input
          type="text"
          value={formData.serviceArea}
          onChange={(e) => updateField("serviceArea", e.target.value)}
          placeholder={ts("serviceAreaPh", lang)}
          className={inputClasses}
        />
      </FormField>
    </div>,

    // Section 3: Brand & Identity
    <div key="s3" className="space-y-8">
      <SectionHeader
        number="03"
        total="04"
        title={ts("s3Title", lang)}
        subtitle={ts("s3Subtitle", lang)}
        sectionWord={ts("sectionLabel", lang)}
      />
      <FormField label={ts("brandPersonality", lang)} hint={ts("brandPersonalityHint", lang)}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {brandTraits.map((trait) => (
            <label
              key={trait}
              className={`flex items-center gap-3 px-4 py-3 border cursor-pointer transition-all duration-300 select-none ${
                formData.brandPersonality.includes(trait)
                  ? "border-[#E25312]/50 bg-[#E25312]/[0.08]"
                  : "border-[#E25312]/15 hover:border-[#E25312]/30 hover:bg-[#E25312]/[0.03]"
              }`}
            >
              <input
                type="checkbox"
                checked={formData.brandPersonality.includes(trait)}
                onChange={() => toggleCheckbox("brandPersonality", trait)}
                className="w-3.5 h-3.5 accent-[#E25312] flex-shrink-0"
              />
              <span className="text-sm text-[#1D1C1A] tracking-wide">{trait}</span>
            </label>
          ))}
        </div>
      </FormField>
      <FormField label={ts("hasLogo", lang)}>
        <select
          value={formData.hasLogo}
          onChange={(e) => updateField("hasLogo", e.target.value)}
          className={selectClasses}
          style={selectStyle}
        >
          <option value="" className="bg-white">
            {ts("select", lang)}
          </option>
          {logoOpts.map((opt) => (
            <option key={opt} value={opt} className="bg-white">
              {opt}
            </option>
          ))}
        </select>
      </FormField>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField label={ts("brandColors", lang)}>
          <input
            type="text"
            value={formData.brandColors}
            onChange={(e) => updateField("brandColors", e.target.value)}
            placeholder={ts("brandColorsPh", lang)}
            className={inputClasses}
          />
        </FormField>
        <FormField label={ts("fonts", lang)}>
          <input
            type="text"
            value={formData.fonts}
            onChange={(e) => updateField("fonts", e.target.value)}
            placeholder={ts("fontsPh", lang)}
            className={inputClasses}
          />
        </FormField>
      </div>
      <FormField label={ts("competitorWebsites", lang)}>
        <textarea
          value={formData.competitorWebsites}
          onChange={(e) => updateField("competitorWebsites", e.target.value)}
          placeholder={ts("competitorWebsitesPh", lang)}
          className={textareaClasses}
          rows={3}
        />
      </FormField>
      <FormField label={ts("inspiredWebsites", lang)}>
        <textarea
          value={formData.inspiredWebsites}
          onChange={(e) => updateField("inspiredWebsites", e.target.value)}
          placeholder={ts("inspiredWebsitesPh", lang)}
          className={textareaClasses}
          rows={3}
        />
      </FormField>
      <FormField label={ts("websiteFeeling", lang)}>
        <textarea
          value={formData.websiteFeeling}
          onChange={(e) => updateField("websiteFeeling", e.target.value)}
          placeholder={ts("websiteFeelingPh", lang)}
          className={textareaClasses}
          rows={3}
        />
      </FormField>
    </div>,

    // Section 4: Goals & Expectations
    <div key="s4" className="space-y-8">
      <SectionHeader
        number="04"
        total="04"
        title={ts("s4Title", lang)}
        subtitle={ts("s4Subtitle", lang)}
        sectionWord={ts("sectionLabel", lang)}
      />
      <FormField label={ts("primaryGoal", lang)}>
        <select
          value={formData.primaryGoal}
          onChange={(e) => updateField("primaryGoal", e.target.value)}
          className={selectClasses}
          style={selectStyle}
        >
          <option value="" className="bg-white">
            {ts("select", lang)}
          </option>
          {goalOpts.map((opt) => (
            <option key={opt} value={opt} className="bg-white">
              {opt}
            </option>
          ))}
        </select>
      </FormField>
      <FormField label={ts("idealClient", lang)}>
        <textarea
          value={formData.idealClient}
          onChange={(e) => updateField("idealClient", e.target.value)}
          placeholder={ts("idealClientPh", lang)}
          className={textareaClasses}
          rows={3}
        />
      </FormField>
      <FormField label={ts("problemSolved", lang)}>
        <textarea
          value={formData.problemSolved}
          onChange={(e) => updateField("problemSolved", e.target.value)}
          placeholder={ts("problemSolvedPh", lang)}
          className={textareaClasses}
          rows={3}
        />
      </FormField>

      <hr className="border-[#E25312]/15" />

      <FormField label={ts("additionalNotes", lang)}>
        <textarea
          value={formData.additionalNotes}
          onChange={(e) => updateField("additionalNotes", e.target.value)}
          placeholder={ts("additionalNotesPh", lang)}
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

  // --- Render -----------------------------------------------------------------

  return (
    <div>
      {/* Language Switcher */}
      <LanguageSwitcher lang={lang} setLang={setLang} />

      {/* Progress Bar */}
      <div className="flex gap-1 mb-12">
        {sectionLabels.map((label, i) => (
          <div key={i} className="flex-1">
            <div
              className={`h-0.5 transition-colors duration-400 ${
                i < current
                  ? "bg-[#E25312]/50"
                  : i === current
                    ? "bg-[#E25312]"
                    : "bg-[#E8E0D4]"
              }`}
            />
            <p className="text-[9px] tracking-[0.15em] uppercase text-[#7A766E] text-center mt-2">
              {label}
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
      <div className="flex items-center justify-between mt-12 pt-8 border-t border-[#E25312]/15">
        {current > 0 ? (
          <button
            type="button"
            onClick={() => goTo(current - 1)}
            className="flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-[#7A766E] hover:text-[#1D1C1A] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            {ts("back", lang)}
          </button>
        ) : (
          <span />
        )}

        <span className="text-xs text-[#7A766E] tracking-wide">
          {current + 1} {ts("of", lang)} {sectionLabels.length}
        </span>

        {current < sectionLabels.length - 1 ? (
          <button
            type="button"
            onClick={() => goTo(current + 1)}
            className="flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-[#1D1C1A] bg-[#E25312] px-8 py-4 hover:bg-[#F0712E] hover:-translate-y-px transition-all duration-300"
          >
            {ts("continue", lang)}
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        ) : (
          <button
            type="button"
            onClick={handleSubmit}
            disabled={submitting}
            className="flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-[#1D1C1A] bg-[#E25312] px-8 py-4 hover:bg-[#F0712E] hover:-translate-y-px transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {submitting ? (
              <>
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
                {ts("submitting", lang)}
              </>
            ) : (
              <>
                {ts("submit", lang)}
                <ArrowRight className="w-3.5 h-3.5" />
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
}

// --- Section Header -----------------------------------------------------------

function SectionHeader({
  number,
  total,
  title,
  subtitle,
  sectionWord,
}: {
  number: string;
  total: string;
  title: string;
  subtitle: string;
  sectionWord: string;
}) {
  return (
    <div className="mb-10">
      <span className="text-[10px] tracking-[0.2em] text-[#E25312] uppercase block mb-2">
        {sectionWord} {number} / {total}
      </span>
      <h2 className="text-3xl font-bold text-[#1D1C1A]" style={{ fontFamily: 'var(--font-heading)' }}>{title}</h2>
      <p className="text-sm text-[#7A766E] mt-2 tracking-wide">{subtitle}</p>
    </div>
  );
}
