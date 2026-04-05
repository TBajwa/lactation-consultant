import { useSEO } from "@/hooks/useSEO";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Phone, Heart, Award, ShieldCheck, ArrowRight, Star, Quote } from "lucide-react";
import heroImg from "@assets/hero-nursing.png";

export default function Home() {
  useSEO({
    title: "Central Florida IBCLC Lactation Consultant",
    description: "Bridging the gap from delivery to home. Expert, compassionate IBCLC lactation support for families in Central Florida and virtually worldwide.",
  });

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 pb-20 overflow-hidden bg-[#FDF8F5]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#FDF8F5] via-[#FDF8F5]/90 to-transparent z-10 lg:w-2/3" />
          <img 
            src={heroImg} 
            alt="Mother nursing her baby" 
            className="absolute inset-0 w-full h-full object-cover object-right-top opacity-60 lg:opacity-100 mix-blend-multiply lg:mix-blend-normal"
          />
        </div>

        <div className="container relative z-20 mx-auto px-4 lg:px-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            >
              <Heart className="h-4 w-4" />
              <span>You are not alone in this</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#1C1412] leading-tight mb-6"
            >
              Bridging the gap from <span className="text-[#C41E8E] italic">delivery to home.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-[#1C1412]/80 leading-relaxed mb-10 max-w-xl"
            >
              Expert, compassionate IBCLC lactation support. When feeding your baby feels overwhelming, I'm here to help you find comfort, confidence, and joy again.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button asChild size="lg" className="rounded-full bg-[#C41E8E] hover:bg-[#6B0032] text-white text-base h-14 px-8 shadow-lg shadow-primary/20 transition-all hover:scale-105">
                <Link href="/book">Book an Appointment</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-2 border-[#1C1412]/10 bg-white/50 backdrop-blur-sm text-[#1C1412] hover:bg-white text-base h-14 px-8 transition-all hover:scale-105">
                <a href="tel:+14078681569">
                  <Phone className="mr-2 h-5 w-5" />
                  Call (407) 868-1569
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Empathy / Problem Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1C1412] mb-8">
                Is breastfeeding feeling harder than you expected?
              </h2>
              <p className="text-lg text-[#6B5B57] leading-relaxed mb-6">
                You expected it to be natural, but right now it might be painful, exhausting, or deeply stressful. The late nights, the conflicting advice, the worry about whether your baby is getting enough—it's heavy.
              </p>
              <p className="text-lg text-[#1C1412] font-medium leading-relaxed">
                Take a deep breath. You're doing a beautiful job, and you don't have to figure this out alone.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-[#FDF8F5]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1C1412] mb-4">How I can help</h2>
              <p className="text-lg text-[#6B5B57]">Targeted, compassionate support right when you need it most.</p>
            </div>
            <Button asChild variant="ghost" className="text-[#C41E8E] hover:text-[#6B0032] hover:bg-transparent px-0 group">
              <Link href="/services" className="flex items-center gap-2 text-lg font-medium">
                View All Services <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "In-Home Consultations",
                desc: "I come to you. Get hands-on help in your own environment where you're most comfortable.",
                icon: Heart
              },
              {
                title: "Virtual Support",
                desc: "Face-to-face guidance from anywhere in the world. Convenient, effective, and immediate.",
                icon: ShieldCheck
              },
              {
                title: "Prenatal Education",
                desc: "Start strong. Learn the essentials of breastfeeding before your baby arrives.",
                icon: Award
              }
            ].map((service, i) => (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-sm border border-[#1C1412]/5 hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#FDF8F5] flex items-center justify-center mb-6">
                  <service.icon className="h-7 w-7 text-[#C41E8E]" />
                </div>
                <h3 className="text-xl font-serif font-bold text-[#1C1412] mb-3">{service.title}</h3>
                <p className="text-[#6B5B57] leading-relaxed mb-6">{service.desc}</p>
                <Link href="/services" className="text-sm font-semibold text-[#1C1412] hover:text-[#C41E8E] transition-colors inline-flex items-center gap-1">
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Highlights Section */}
      <section className="py-24 bg-[#FDF8F5]">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="flex justify-center mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-[#C41E8E] text-[#C41E8E]" />
              ))}
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1C1412] mb-4">
              Real Moms, Real Results
            </h2>
            <p className="text-[#6B5B57] text-lg max-w-2xl mx-auto">
              Hundreds of Central Florida families have found their breastfeeding confidence with Tara's help.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                quote: "Tara helped me through the toughest first weeks. Her patience and knowledge gave me the confidence I needed.",
                name: "Sarah M.",
                location: "Orlando, FL",
              },
              {
                quote: "I was about to give up when I called Tara. She came to my home and fixed everything in one visit. An absolute lifesaver.",
                name: "Jessica R.",
                location: "Winter Park, FL",
              },
              {
                quote: "After a tongue tie diagnosis, I didn't know what to do. Tara guided us every step of the way — we're still nursing at 14 months!",
                name: "Melissa K.",
                location: "Lake Nona, FL",
              },
            ].map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-[#C41E8E]/10 flex flex-col"
              >
                <Quote className="h-6 w-6 text-[#C41E8E]/40 mb-3" />
                <p className="text-[#1C1412] leading-relaxed flex-1 mb-4">"{t.quote}"</p>
                <div>
                  <p className="font-semibold text-[#1C1412] text-sm">{t.name}</p>
                  <p className="text-[#6B5B57] text-xs">{t.location}</p>
                  <div className="flex mt-2">
                    {[...Array(5)].map((_, s) => (
                      <Star key={s} className="h-3 w-3 fill-[#C41E8E] text-[#C41E8E]" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/testimonials" className="inline-flex items-center gap-2 text-[#C41E8E] font-semibold hover:underline">
              Read more stories <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#FDF8F5] rounded-3xl p-10 md:p-14 border border-[#C41E8E]/15 text-center relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#C41E8E] via-[#6B0032] to-[#C41E8E]" />
              <div className="flex justify-center gap-1 mb-6">
                {Array(5).fill(0).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-[#C41E8E] text-[#C41E8E]" />
                ))}
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1C1412] mb-5 leading-tight">
                Tara guarantees your breastfeeding success.
              </h2>
              <p className="text-lg text-[#6B5B57] leading-relaxed mb-8 max-w-2xl mx-auto">
                Every consultation comes with Tara's complete commitment to your breastfeeding journey. She will work with you until you have a plan that works — with the knowledge, confidence, and hands-on guidance to carry it forward. No rushing. No guessing. Just results.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 text-left">
                {[
                  { title: "IBCLC Certified", desc: "The gold standard in lactation expertise — not a nurse or doula, but a board-certified specialist." },
                  { title: "Personalized Plan", desc: "Every mother and baby are different. Your consultation is 100% tailored to your specific situation." },
                  { title: "Ongoing Support", desc: "The conversation doesn't end when Tara walks out the door. Bundle clients get unlimited text support." },
                ].map((item) => (
                  <div key={item.title} className="bg-white rounded-2xl p-5 border border-[#1C1412]/5">
                    <h3 className="font-serif font-bold text-[#1C1412] mb-2">{item.title}</h3>
                    <p className="text-[#6B5B57] text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
              <Button asChild size="lg" className="rounded-full bg-[#C41E8E] hover:bg-[#6B0032] text-white h-14 px-10 text-base font-semibold transition-all hover:scale-105 shadow-lg shadow-[#C41E8E]/25">
                <Link href="/book">Book Your Consultation</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#6B0032] text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Ready to find comfort and confidence?</h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto font-light">
            Don't spend another night in pain or worry. Let's work together to create a feeding plan that works for you and your baby.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="rounded-full bg-white text-[#6B0032] hover:bg-gray-100 text-base h-14 px-10 transition-all hover:scale-105">
              <Link href="/book">Book Your Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-white/30 text-white hover:bg-white/10 text-base h-14 px-10 transition-all">
              <a href="tel:+14078681569">Call for questions</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
