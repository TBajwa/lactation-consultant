import { useSEO } from "@/hooks/useSEO";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Check, Phone, AlertCircle } from "lucide-react";

const individualServices = [
  { name: "Initial Consultation", duration: "45 min", price: "$75", description: "A thorough first visit to assess your breastfeeding experience, identify challenges, and build a personalized plan." },
  { name: "Virtual Consultation", duration: "1 hour", price: "$120", description: "Get the same expert guidance from the comfort of your home via video call — available worldwide." },
  { name: "Phone Consultation", duration: "30 min", price: "$60", description: "A focused phone session for quick questions, follow-up guidance, or urgent concerns." },
  { name: "Virtual Prenatal Class", duration: "1 hr 15 min", price: "$75", description: "Prepare for your breastfeeding journey before baby arrives. Gain confidence and knowledge through this comprehensive prenatal class." },
  { name: "In-Home Consultation", duration: "2 hours", price: "$250", description: "The most personalized option — Tara comes to you. Hands-on, real-time support in your own space where you're most comfortable. +$75 for multiples." },
];

const bundles = [
  {
    name: "Little Whisperer Bundle",
    price: "$465",
    featured: false,
    description: "A solid foundation of care for new families starting their breastfeeding journey.",
    items: ["Initial in-home consultation", "1 virtual follow-up", "Phone support session"],
  },
  {
    name: "Essential Whisperer Bundle",
    price: "$565",
    featured: false,
    description: "Comprehensive support for families who want sustained guidance through the early weeks.",
    items: ["Initial in-home consultation", "2 virtual follow-ups", "1 phone consultation", "Unlimited text support"],
  },
  {
    name: "Grand Whisperer Bundle",
    price: "$715",
    featured: true,
    description: "The complete care package — everything you need for a confident, successful breastfeeding experience.",
    items: ["Initial in-home consultation", "Multiple follow-up sessions", "Virtual & phone support", "Unlimited texting", "Extended care timeline"],
  },
  {
    name: "Little Whisperer Elite",
    price: "$575",
    featured: false,
    description: "Elite-level support with maximum flexibility and direct access to Tara.",
    items: ["Free initial in-home consultation", "1 in-home follow-up", "1 virtual consultation", "1 phone consultation", "Unlimited texting"],
  },
  {
    name: "Essential Whisperer Elite",
    price: "$795",
    featured: false,
    description: "The most comprehensive support package, including emergency after-hours access.",
    items: ["3 private in-home consultations", "1 virtual follow-up consultation", "1 phone consultation", "Unlimited texting", "Emergency after-hours consultation (Mon-Fri 4pm-11pm)"],
  },
];

const issues = [
  "Latch issues & nipple pain",
  "Low milk supply",
  "Breast & bottle refusal",
  "Pumping guidance",
  "Milk supply management",
  "Breast pain & mastitis",
  "Breast milk jaundice",
  "Formula supplementation",
  "Low baby weight gain",
  "Re-lactation",
  "Induced lactation",
  "Weaning support",
  "Prenatal education",
  "Equipment guidance",
  "Return-to-work planning",
];

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55 },
};

export default function Services() {
  useSEO({
    title: "Lactation Consultation Services & Pricing",
    description: "View Tara's full range of IBCLC lactation consultant services and pricing — in-home, virtual, phone, prenatal classes, and bundle packages in Central Florida.",
  });

  return (
    <div className="w-full pt-24">
      {/* Page Header */}
      <section className="py-20 bg-[#FDF8F5]">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <motion.span {...fadeInUp} className="inline-block text-sm font-semibold tracking-widest text-[#C41E8E] uppercase mb-4">
            Services &amp; Pricing
          </motion.span>
          <motion.h1 {...fadeInUp} transition={{ duration: 0.55, delay: 0.1 }} className="text-4xl md:text-5xl font-serif font-bold text-[#1C1412] mb-6">
            Support designed around your journey
          </motion.h1>
          <motion.p {...fadeInUp} transition={{ duration: 0.55, delay: 0.2 }} className="text-lg text-[#6B5B57] leading-relaxed">
            Every mother and baby is unique. Whether you need a quick call or ongoing in-home care, there is an option that fits your life and budget.
          </motion.p>
        </div>
      </section>

      {/* Individual Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.h2 {...fadeInUp} className="text-3xl font-serif font-bold text-[#1C1412] mb-12 text-center">
            Individual Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {individualServices.map((service, i) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-[#FDF8F5] rounded-3xl p-8 border border-[#1C1412]/5 hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-serif font-bold text-[#1C1412] leading-snug max-w-[65%]">{service.name}</h3>
                  <span className="text-2xl font-bold text-[#C41E8E] shrink-0">{service.price}</span>
                </div>
                <span className="text-xs font-medium text-[#6B5B57] uppercase tracking-wider mb-4">{service.duration}</span>
                <p className="text-[#6B5B57] text-sm leading-relaxed flex-1">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeInUp} className="mt-10 p-5 bg-amber-50 border border-amber-200 rounded-2xl flex items-start gap-3 max-w-xl mx-auto">
            <AlertCircle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
            <p className="text-sm text-amber-900">
              A <strong>$50 cancellation fee</strong> applies for cancellations with less than 24 hours notice.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bundle Packages */}
      <section className="py-20 bg-[#FDF8F5]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <motion.span {...fadeInUp} className="inline-block text-sm font-semibold tracking-widest text-[#C41E8E] uppercase mb-3">
              Save More
            </motion.span>
            <motion.h2 {...fadeInUp} transition={{ duration: 0.55, delay: 0.1 }} className="text-3xl md:text-4xl font-serif font-bold text-[#1C1412]">
              Bundle Packages
            </motion.h2>
            <motion.p {...fadeInUp} transition={{ duration: 0.55, delay: 0.2 }} className="text-[#6B5B57] mt-4 max-w-2xl mx-auto">
              Bundle packages offer exceptional value for families who know they want comprehensive, ongoing support throughout their breastfeeding journey.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bundles.map((bundle, i) => (
              <motion.div
                key={bundle.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`rounded-3xl p-8 flex flex-col relative overflow-hidden ${
                  bundle.featured
                    ? "bg-[#6B0032] text-white shadow-xl shadow-[#6B0032]/30 border-2 border-[#C41E8E]"
                    : "bg-white border border-[#1C1412]/5 hover:shadow-md transition-shadow"
                }`}
              >
                {bundle.featured && (
                  <span className="absolute top-4 right-4 bg-[#C41E8E] text-white text-xs font-bold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <div className="mb-2">
                  <h3 className={`text-xl font-serif font-bold mb-1 ${bundle.featured ? "text-white" : "text-[#1C1412]"}`}>
                    {bundle.name}
                  </h3>
                  <span className={`text-3xl font-bold ${bundle.featured ? "text-[#FFA0D8]" : "text-[#C41E8E]"}`}>
                    {bundle.price}
                  </span>
                </div>
                <p className={`text-sm leading-relaxed mb-6 ${bundle.featured ? "text-white/80" : "text-[#6B5B57]"}`}>
                  {bundle.description}
                </p>
                <ul className="space-y-3 flex-1">
                  {bundle.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <Check className={`h-4 w-4 shrink-0 mt-0.5 ${bundle.featured ? "text-[#FFA0D8]" : "text-[#C41E8E]"}`} />
                      <span className={bundle.featured ? "text-white/90" : "text-[#1C1412]"}>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className={`mt-8 rounded-full w-full h-12 font-semibold transition-all hover:scale-105 ${
                    bundle.featured
                      ? "bg-[#C41E8E] hover:bg-[#a8177a] text-white"
                      : "bg-[#1C1412] text-white hover:bg-[#6B0032]"
                  }`}
                >
                  <a href="https://thebreastfeedingwhisperer.simplybook.me/v2/#packages" target="_blank" rel="noreferrer">
                    Get This Package
                  </a>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Issues Addressed */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <motion.h2 {...fadeInUp} className="text-3xl font-serif font-bold text-[#1C1412] mb-4">
                Challenges I address
              </motion.h2>
              <motion.p {...fadeInUp} transition={{ duration: 0.55, delay: 0.1 }} className="text-[#6B5B57]">
                From the first hours to the hardest nights — here are the issues Tara routinely helps families navigate.
              </motion.p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {issues.map((issue, i) => (
                <motion.div
                  key={issue}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="flex items-center gap-3 p-4 rounded-2xl bg-[#FDF8F5] border border-[#1C1412]/5"
                >
                  <Check className="h-4 w-4 text-[#C41E8E] shrink-0" />
                  <span className="text-[#1C1412] text-sm font-medium">{issue}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#C41E8E] text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <motion.h2 {...fadeInUp} className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Ready to get started?
          </motion.h2>
          <motion.p {...fadeInUp} transition={{ duration: 0.55, delay: 0.1 }} className="text-white/85 text-lg mb-10">
            Book your consultation today and take the first step toward a more comfortable, confident breastfeeding experience.
          </motion.p>
          <motion.div {...fadeInUp} transition={{ duration: 0.55, delay: 0.2 }} className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="rounded-full bg-white text-[#C41E8E] hover:bg-gray-100 h-14 px-10 text-base font-semibold transition-all hover:scale-105">
              <a href="https://thebreastfeedingwhisperer.simplybook.me/v2/#book" target="_blank" rel="noreferrer">Book Now</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-white/40 text-white hover:bg-white/10 h-14 px-10 text-base">
              <a href="tel:+14078681569" className="flex items-center gap-2">
                <Phone className="h-5 w-5" /> Call (407) 868-1569
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
