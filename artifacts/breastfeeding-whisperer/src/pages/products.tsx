import { useSEO } from "@/hooks/useSEO";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ExternalLink, ShoppingBag, AlertCircle } from "lucide-react";

const products = [
  {
    name: "Mother's Milk Tea",
    tagline: "A warm, time-tested tradition for nursing mothers",
    description: "Traditional Medicinals Organic Mother's Milk tea is one of the most trusted galactagogue teas available. Blended with fenugreek, fennel, anise, and coriander, it has been used for generations to support breast milk production. Many mothers find a comforting ritual in brewing a cup while nursing or pumping.",
    benefits: ["Certified organic herbs", "Caffeine-free formula", "Supports healthy milk production", "Pleasant, slightly sweet taste"],
    link: "https://www.amazon.com/Traditional-Medicinals-Organic-Mothers-Womens/dp/B0009F3POY?tag=bfwhisperer08-20",
    badge: "Tara's Pick",
    badgeColor: "#C41E8E",
  },
  {
    name: "Lactiful Supplement",
    tagline: "Concentrated lactation support in capsule form",
    description: "Lactiful is a concentrated lactation support supplement combining multiple galactagogues in convenient capsule form. Designed for mothers who want the benefits of multiple milk-supporting herbs without the need to brew multiple teas. A great option for busy mothers or those who don't enjoy herbal teas.",
    benefits: ["Multi-herb formula", "Easy daily capsule routine", "Made for breastfeeding mothers", "Supports supply over time"],
    link: "https://www.amazon.com/Lactation-Supplement-Breastfeeding-Mothers-Production/dp/B01EVXPPAQ?tag=bfwhisperer08-20",
    badge: "Popular Choice",
    badgeColor: "#6B0032",
  },
  {
    name: "Fenugreek Capsules",
    tagline: "The classic galactagogue, in easy supplement form",
    description: "Fenugreek has been used for centuries as a traditional galactagogue. Bronson's high-quality fenugreek capsules provide a concentrated, standardized dose — no measuring or brewing required. Fenugreek has strong anecdotal support among breastfeeding mothers and remains one of the most commonly recommended herbs for milk supply.",
    benefits: ["Traditional herbal support", "High-potency formula", "Vegetarian capsules", "Easy to integrate into your routine"],
    link: "https://www.amazon.com/Bronson-Fenugreek-Trigonella-Foenum-Graecum-Vegetarian/dp/B09TL8X7Q2?tag=bfwhisperer08-20",
    badge: "Classic Remedy",
    badgeColor: "#1C1412",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55 },
};

export default function Products() {
  useSEO({
    title: "Recommended Breastfeeding Products",
    description: "Tara's hand-picked recommendations for breastfeeding mothers — lactation supplements, teas, and tools to support your milk supply and nursing journey.",
  });

  return (
    <div className="w-full pt-24">
      {/* Header */}
      <section className="py-20 bg-[#FDF8F5]">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <motion.div {...fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C41E8E]/10 text-[#C41E8E] text-sm font-semibold mb-6">
            <ShoppingBag className="h-4 w-4" />
            Trusted Recommendations
          </motion.div>
          <motion.h1 {...fadeInUp} transition={{ duration: 0.55, delay: 0.1 }} className="text-4xl md:text-5xl font-serif font-bold text-[#1C1412] mb-5">
            Products Tara Recommends
          </motion.h1>
          <motion.p {...fadeInUp} transition={{ duration: 0.55, delay: 0.2 }} className="text-lg text-[#6B5B57] leading-relaxed">
            Over years of supporting breastfeeding families, Tara has discovered products that genuinely help. These are the ones she recommends most often.
          </motion.p>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="pb-6 bg-[#FDF8F5]">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="flex items-start gap-3 p-4 bg-amber-50 border border-amber-200 rounded-2xl">
            <AlertCircle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
            <p className="text-xs text-amber-900 leading-relaxed">
              <strong>Disclosure:</strong> The links on this page are affiliate links. As an Amazon Associate, The Breastfeeding Whisperer earns a small commission when you purchase through these links at no extra cost to you. Tara only recommends products she genuinely believes in. Always consult with your healthcare provider before starting any supplement.
            </p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="space-y-12">
            {products.map((product, i) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="grid grid-cols-1 lg:grid-cols-3 gap-8 bg-[#FDF8F5] rounded-3xl p-8 border border-[#1C1412]/5 hover:shadow-md transition-shadow items-center"
              >
                {/* Icon column */}
                <div className="flex flex-col items-center lg:items-start gap-4">
                  <div className="w-20 h-20 rounded-2xl flex items-center justify-center" style={{ backgroundColor: `${product.badgeColor}15` }}>
                    <ShoppingBag className="h-10 w-10" style={{ color: product.badgeColor }} />
                  </div>
                  <span className="inline-block text-xs font-bold px-3 py-1 rounded-full text-white" style={{ backgroundColor: product.badgeColor }}>
                    {product.badge}
                  </span>
                </div>

                {/* Content column */}
                <div className="lg:col-span-2 space-y-4">
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-[#1C1412]">{product.name}</h3>
                    <p className="text-[#C41E8E] font-medium text-sm mt-1">{product.tagline}</p>
                  </div>
                  <p className="text-[#6B5B57] leading-relaxed text-sm">{product.description}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {product.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-2 text-sm text-[#1C1412]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C41E8E] shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="rounded-full mt-2 h-12 px-8 font-semibold transition-all hover:scale-105" style={{ backgroundColor: product.badgeColor }}>
                    <a href={product.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-white">
                      View on Amazon
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Note from Tara */}
      <section className="py-20 bg-[#FDF8F5]">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl text-center">
          <motion.div {...fadeInUp} className="bg-white rounded-3xl p-10 shadow-sm border border-[#1C1412]/5">
            <div className="w-12 h-12 rounded-full bg-[#C41E8E]/10 flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-serif text-[#C41E8E] font-bold">T</span>
            </div>
            <blockquote className="text-xl font-serif font-medium text-[#1C1412] italic mb-6 leading-relaxed">
              "Supplements can help, but they work best alongside consistent nursing or pumping and a good latch. If your supply concerns persist, please book a consultation — there's almost always a root cause we can address together."
            </blockquote>
            <p className="text-sm font-semibold text-[#6B5B57]">— Tara, IBCLC</p>
            <Button asChild size="lg" className="rounded-full bg-[#C41E8E] hover:bg-[#6B0032] text-white h-12 px-8 mt-8 transition-all hover:scale-105">
              <a href="https://thebreastfeedingwhisperer.simplybook.me/v2/#book" target="_blank" rel="noreferrer">
                Book a Consultation
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
