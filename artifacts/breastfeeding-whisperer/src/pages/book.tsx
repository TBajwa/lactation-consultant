import { useState } from "react";
import { useSEO } from "@/hooks/useSEO";
import { motion } from "framer-motion";
import { Phone, Clock, CheckCircle } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55 },
};

export default function Book() {
  useSEO({
    title: "Book a Lactation Consultation",
    description: "Schedule your in-home, virtual, or phone lactation consultation with Tara, IBCLC. Easy online booking through SimplyBook.",
  });

  const [iframeLoaded, setIframeLoaded] = useState(false);

  return (
    <div className="w-full pt-24">
      {/* Header */}
      <section className="py-16 bg-[#FDF8F5]">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <motion.span {...fadeInUp} className="inline-block text-sm font-semibold tracking-widest text-[#C41E8E] uppercase mb-4">
            Get Started
          </motion.span>
          <motion.h1 {...fadeInUp} transition={{ duration: 0.55, delay: 0.1 }} className="text-4xl md:text-5xl font-serif font-bold text-[#1C1412] mb-5">
            Book Your Appointment
          </motion.h1>
          <motion.p {...fadeInUp} transition={{ duration: 0.55, delay: 0.2 }} className="text-lg text-[#6B5B57] leading-relaxed">
            Taking that first step is the bravest thing you can do for yourself and your baby. Choose a time that works for you below — Tara will take it from there.
          </motion.p>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-10 bg-white border-y border-[#1C1412]/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            {[
              { icon: CheckCircle, title: "IBCLC Certified", desc: "Board-certified lactation expertise you can trust" },
              { icon: Clock, title: "Flexible Scheduling", desc: "In-home, virtual, and phone options available" },
              { icon: Phone, title: "Same-Day Available", desc: "Urgent appointments often available — call to inquire" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex flex-col items-center gap-3"
              >
                <item.icon className="h-8 w-8 text-[#C41E8E]" />
                <h3 className="font-serif font-bold text-[#1C1412]">{item.title}</h3>
                <p className="text-sm text-[#6B5B57]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Iframe */}
      <section className="py-16 bg-[#FDF8F5]">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-[#1C1412]/5 relative">
            {/* Loading skeleton */}
            {!iframeLoaded && (
              <div className="absolute inset-0 bg-white flex flex-col items-center justify-center z-10 gap-4">
                <div className="w-12 h-12 rounded-full border-4 border-[#C41E8E] border-t-transparent animate-spin" />
                <p className="text-[#6B5B57] text-sm font-medium">Loading booking calendar...</p>
              </div>
            )}
            <iframe
              src="https://thebreastfeedingwhisperer.simplybook.me/v2/#book"
              width="100%"
              height="800px"
              frameBorder="0"
              title="Book an Appointment with The Breastfeeding Whisperer"
              className="block"
              onLoad={() => setIframeLoaded(true)}
              style={{ minHeight: "800px" }}
            />
          </div>
        </div>
      </section>

      {/* Alternative contact */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-2xl">
          <motion.h2 {...fadeInUp} className="text-2xl font-serif font-bold text-[#1C1412] mb-4">
            Prefer to speak first?
          </motion.h2>
          <motion.p {...fadeInUp} transition={{ duration: 0.55, delay: 0.1 }} className="text-[#6B5B57] mb-8 leading-relaxed">
            If you have questions or need an urgent appointment, Tara is just a call away. A $50 cancellation fee applies for cancellations with less than 24 hours notice.
          </motion.p>
          <motion.a
            href="tel:+14078681569"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-3 bg-[#1C1412] text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-[#6B0032] transition-all hover:scale-105"
          >
            <Phone className="h-5 w-5" />
            Call (407) 868-1569
          </motion.a>
        </div>
      </section>
    </div>
  );
}
