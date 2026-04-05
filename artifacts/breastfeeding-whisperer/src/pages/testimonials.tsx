import { useSEO } from "@/hooks/useSEO";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";

const testimonials = [
  {
    name: "Savannah C.",
    text: "We struggled getting our baby to latch to the point I started exclusively pumping and bottle feeding. Tara was able to get her to latch within 2 minutes of being here and next feeding we got her to latch by ourselves. She gave us way more information than we got from the hospital and worked with us one on one in our home. She also was able to get us in for a very last minute appointment so we could start asap.",
    highlight: "Latched within 2 minutes",
  },
  {
    name: "Amber R.",
    text: "I'm a first time mom with a newborn just days old. The hospital staff gave a lot of conflicting messaging about how to nurse. I thought I was fine because the baby latched easily. What I didn't realize was that the baby was latching improperly, both causing me SIGNIFICANT pain and hindering baby's ability to eat. She helped show me a better technique and emphasized that it should NOT be painful to breastfeed. My baby was at risk of jaundice from being under nourished, but is now getting more milk and my nipple cracking and pain has eased. Reach out for help sooner rather than later. The benefits will be worth the investment.",
    highlight: "Pain resolved, baby thriving",
  },
  {
    name: "Timonda G.",
    text: "BEST DECISION I Have ever made. I was desperate and ready to give up on breastfeeding until I found The Breastfeeding Whisperer. Tara was very professional and caring. She instructed me and made me feel like I can do this. I would highly recommend if you are in need of a lactation consultant.",
    highlight: "Ready to give up — then found Tara",
  },
  {
    name: "Alexis J.",
    text: "Tara is amazing!!! I felt like giving up & I am so glad I reached out to her before I did! She has made me feel like it's possible to feed my baby! Do not hesitate booking her for help!",
    highlight: "Felt like giving up — now confident",
  },
  {
    name: "Nicole B.",
    text: "I CANNOT express enough how THANKFUL I am for Tara! She truly is a baby whisperer. She was able to identify our baby's egg issue (caused her to be SUPER fussy) as well as our bad latch. She gave so many tips and tricks that we have a totally different baby! I am a FIRM believer in addressing the root cause of the issue and working together I find that she is too! I've learned so many things from how to swaddle properly, nurse from different positions, pump, introduce the bottle, and more. For moms due with a baby, please don't do what I did and assume everything is going to be fine. Even if this is not your first baby! Health is an investment and I mean that for you and your whole family!!",
    highlight: "Identified root cause, completely transformed",
  },
];

const stars = Array(5).fill(0);

export default function Testimonials() {
  useSEO({
    title: "Testimonials — Real Stories from Real Mothers",
    description: "Read what families say about working with Tara, IBCLC. Real testimonials from mothers who found confidence, comfort, and success with The Breastfeeding Whisperer.",
  });

  return (
    <div className="w-full pt-24">
      {/* Header */}
      <section className="py-20 bg-[#FDF8F5]">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="flex justify-center gap-1 mb-6"
          >
            {stars.map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-[#C41E8E] text-[#C41E8E]" />
            ))}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold text-[#1C1412] mb-5"
          >
            Stories from our families
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="text-lg text-[#6B5B57] leading-relaxed"
          >
            These are real mothers who were struggling — just like you might be right now. Their words capture what Tara's support truly means.
          </motion.p>
        </div>
      </section>

      {/* Testimonial Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[#FDF8F5] rounded-3xl p-8 border border-[#1C1412]/5 flex flex-col hover:shadow-md transition-shadow"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {stars.map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-[#C41E8E] text-[#C41E8E]" />
                  ))}
                </div>

                {/* Highlight */}
                <div className="inline-block bg-[#C41E8E]/10 text-[#C41E8E] text-xs font-semibold px-3 py-1 rounded-full mb-4 w-fit">
                  {testimonial.highlight}
                </div>

                {/* Quote mark */}
                <span className="text-5xl font-serif text-[#C41E8E]/20 leading-none mb-2 block">"</span>

                <p className="text-[#6B5B57] text-sm leading-relaxed flex-1 italic">
                  {testimonial.text}
                </p>

                <div className="mt-6 pt-4 border-t border-[#1C1412]/8">
                  <p className="font-semibold text-[#1C1412] text-sm">{testimonial.name}</p>
                  <p className="text-xs text-[#6B5B57]">Verified Client</p>
                </div>
              </motion.div>
            ))}

            {/* Google Reviews CTA Card */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: testimonials.length * 0.1 }}
              className="bg-[#6B0032] rounded-3xl p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 mb-5">
                  {stars.map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-[#FFA0D8] text-[#FFA0D8]" />
                  ))}
                </div>
                <h3 className="text-xl font-serif font-bold text-white mb-4">
                  See all our reviews on Google
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Read what dozens of Central Florida families are saying about their experience with The Breastfeeding Whisperer.
                </p>
              </div>
              <a
                href="https://maps.app.goo.gl/kLCzfbxUU8Lv1Edg6?g_st=ic"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 bg-white text-[#6B0032] px-6 py-3 rounded-full font-semibold text-sm hover:bg-[#FDF8F5] transition-all hover:scale-105 w-fit"
              >
                View Google Reviews
                <ExternalLink className="h-4 w-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#C41E8E] text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="text-3xl md:text-4xl font-serif font-bold mb-5"
          >
            Ready to write your own success story?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="text-white/85 text-lg mb-10"
          >
            Every one of these mothers felt what you might be feeling right now. All it took was one call to Tara.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button asChild size="lg" className="rounded-full bg-white text-[#C41E8E] hover:bg-gray-100 h-14 px-10 text-base font-semibold transition-all hover:scale-105">
              <a href="https://thebreastfeedingwhisperer.simplybook.me/v2/#book" target="_blank" rel="noreferrer">
                Book Your Appointment
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
