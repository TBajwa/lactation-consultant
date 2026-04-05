import { useSEO } from "@/hooks/useSEO";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Award, Heart, Users } from "lucide-react";
import aboutImg from "@assets/about-tara.png";

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55 },
};

const credentials = [
  "International Board Certified Lactation Consultant (IBCLC)",
  "Certified Breastfeeding Specialist (CBS)",
  "Serving Central Florida and virtual clients worldwide",
  "Hundreds of families supported",
];

const values = [
  {
    icon: Heart,
    title: "Compassionate Care",
    desc: "Every mother deserves to be heard, not rushed. Tara creates a judgment-free space where you can ask anything and feel truly supported.",
  },
  {
    icon: Award,
    title: "Evidence-Based Expertise",
    desc: "As an IBCLC, Tara brings the gold standard in lactation credentials — combining clinical knowledge with real-world experience.",
  },
  {
    icon: Users,
    title: "Family-Centered Approach",
    desc: "Breastfeeding isn't just about the baby. Tara works with your whole family — your goals, your lifestyle, your home.",
  },
];

export default function About() {
  useSEO({
    title: "About Tara — IBCLC Lactation Consultant in Central Florida",
    description: "Meet Tara, International Board Certified Lactation Consultant (IBCLC) serving Central Florida. Learn about her credentials, philosophy, and commitment to supporting breastfeeding mothers.",
  });

  return (
    <div className="w-full pt-24">
      {/* Header */}
      <section className="py-20 bg-[#FDF8F5]">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <motion.span {...fadeInUp} className="inline-block text-sm font-semibold tracking-widest text-[#C41E8E] uppercase mb-4">
            Our Story
          </motion.span>
          <motion.h1 {...fadeInUp} transition={{ duration: 0.55, delay: 0.1 }} className="text-4xl md:text-5xl font-serif font-bold text-[#1C1412] mb-5">
            Meet Tara
          </motion.h1>
          <motion.p {...fadeInUp} transition={{ duration: 0.55, delay: 0.2 }} className="text-lg text-[#6B5B57] leading-relaxed">
            A Board Certified Lactation Consultant who has dedicated her career to one mission: making sure no mother feels alone on her breastfeeding journey.
          </motion.p>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-3xl bg-[#C41E8E]/5 -rotate-2" />
              <img
                src={aboutImg}
                alt="Tara, IBCLC Lactation Consultant"
                className="relative rounded-3xl w-full object-cover shadow-lg aspect-[4/3]"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#6B0032] text-white rounded-2xl p-5 shadow-xl">
                <p className="text-3xl font-serif font-bold">IBCLC</p>
                <p className="text-xs text-white/80 mt-1">Board Certified</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1C1412]">
                Bridging the gap from delivery to home
              </h2>
              <p className="text-[#6B5B57] leading-relaxed text-lg">
                When Tara became a mother herself, she discovered how little support was available in those critical first days and weeks. The hospital sent her home with a beautiful baby and almost no guidance on how to feed her. That experience became the foundation of everything she does today.
              </p>
              <p className="text-[#6B5B57] leading-relaxed">
                As an International Board Certified Lactation Consultant (IBCLC) — the highest credential in the field — Tara brings both clinical expertise and deep personal empathy to every consultation. She has supported hundreds of families across Central Florida and virtually worldwide, helping them overcome the most challenging breastfeeding hurdles and find joy in the feeding relationship.
              </p>
              <p className="text-[#6B5B57] leading-relaxed">
                Whether she's visiting your home in the middle of a crisis or meeting you virtually at 2 in the afternoon, Tara shows up with patience, warmth, and a plan. She doesn't just fix problems — she empowers mothers with the knowledge and confidence to keep going.
              </p>

              <ul className="space-y-3 pt-2">
                {credentials.map((credential) => (
                  <li key={credential} className="flex items-center gap-3 text-[#1C1412] text-sm font-medium">
                    <span className="w-2 h-2 rounded-full bg-[#C41E8E] shrink-0" />
                    {credential}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild size="lg" className="rounded-full bg-[#C41E8E] hover:bg-[#6B0032] text-white h-12 px-8">
                  <a href="https://thebreastfeedingwhisperer.simplybook.me/v2/#book" target="_blank" rel="noreferrer">
                    Book with Tara
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full border-[#1C1412]/15 text-[#1C1412] hover:bg-[#FDF8F5] h-12 px-8">
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#FDF8F5]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <motion.h2 {...fadeInUp} className="text-3xl font-serif font-bold text-[#1C1412] mb-4">
              What you can always expect
            </motion.h2>
            <motion.p {...fadeInUp} transition={{ duration: 0.55, delay: 0.1 }} className="text-[#6B5B57] max-w-xl mx-auto">
              These principles guide every consultation, every conversation, every piece of advice Tara gives.
            </motion.p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-sm border border-[#1C1412]/5 text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#FDF8F5] flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-7 w-7 text-[#C41E8E]" />
                </div>
                <h3 className="text-lg font-serif font-bold text-[#1C1412] mb-3">{value.title}</h3>
                <p className="text-[#6B5B57] text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tagline CTA */}
      <section className="py-24 bg-[#1C1412] text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <motion.blockquote {...fadeInUp} className="text-3xl md:text-4xl font-serif font-bold italic text-[#FDF8F5] mb-8 leading-relaxed">
            "Bridging the gap from delivery to home."
          </motion.blockquote>
          <motion.p {...fadeInUp} transition={{ duration: 0.55, delay: 0.1 }} className="text-white/70 text-lg mb-10">
            Every family deserves to start their breastfeeding journey with confidence. Let Tara be your guide.
          </motion.p>
          <motion.div {...fadeInUp} transition={{ duration: 0.55, delay: 0.2 }}>
            <Button asChild size="lg" className="rounded-full bg-[#C41E8E] hover:bg-[#a8177a] text-white h-14 px-10 text-base transition-all hover:scale-105">
              <a href="https://thebreastfeedingwhisperer.simplybook.me/v2/#book" target="_blank" rel="noreferrer">
                Schedule Your Consultation
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
