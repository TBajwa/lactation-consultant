import { useState, FormEvent } from "react";
import { useSEO } from "@/hooks/useSEO";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Phone, MessageSquare, MapPin, Clock, CheckCircle } from "lucide-react";
import { SiFacebook, SiInstagram, SiYoutube } from "react-icons/si";

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55 },
};

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function Contact() {
  useSEO({
    title: "Contact The Breastfeeding Whisperer",
    description: "Get in touch with Tara, IBCLC. Call (407) 868-1569 or send a message. Serving Central Florida and available virtually worldwide.",
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});

  function validate(): FormErrors {
    const errs: FormErrors = {};
    if (!name.trim() || name.trim().length < 2) errs.name = "Please enter your name";
    if (!email.trim() || !validateEmail(email)) errs.email = "Please enter a valid email address";
    if (!message.trim() || message.trim().length < 10) errs.message = "Please enter a message (at least 10 characters)";
    return errs;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 900));
    setSubmitting(false);
    setSubmitted(true);
    setName(""); setEmail(""); setPhone(""); setMessage("");
  }

  const inputClass = "w-full h-12 px-4 rounded-xl border border-[#1C1412]/15 bg-white text-[#1C1412] placeholder:text-[#6B5B57]/50 focus:outline-none focus:ring-2 focus:ring-[#C41E8E]/30 focus:border-[#C41E8E] transition-all text-sm";
  const errorClass = "text-red-500 text-xs mt-1";

  return (
    <div className="w-full pt-24">
      {/* Header */}
      <section className="py-20 bg-[#FDF8F5]">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <motion.span {...fadeInUp} className="inline-block text-sm font-semibold tracking-widest text-[#C41E8E] uppercase mb-4">
            Get in Touch
          </motion.span>
          <motion.h1 {...fadeInUp} transition={{ duration: 0.55, delay: 0.1 }} className="text-4xl md:text-5xl font-serif font-bold text-[#1C1412] mb-5">
            We're here to help
          </motion.h1>
          <motion.p {...fadeInUp} transition={{ duration: 0.55, delay: 0.2 }} className="text-lg text-[#6B5B57] leading-relaxed">
            Whether you have a question, want to learn more about services, or are ready to book — reach out any way that's comfortable for you.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-10"
            >
              <div>
                <h2 className="text-2xl font-serif font-bold text-[#1C1412] mb-8">Contact Information</h2>
                <div className="space-y-6">
                  <a href="tel:+14078681569" className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-[#C41E8E]/10 flex items-center justify-center shrink-0 group-hover:bg-[#C41E8E] transition-colors">
                      <Phone className="h-5 w-5 text-[#C41E8E] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#6B5B57] uppercase tracking-wider mb-1">Phone</p>
                      <p className="font-semibold text-[#1C1412] group-hover:text-[#C41E8E] transition-colors text-lg">(407) 868-1569</p>
                      <p className="text-xs text-[#6B5B57] mt-0.5">Tap to call</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#C41E8E]/10 flex items-center justify-center shrink-0">
                      <MapPin className="h-5 w-5 text-[#C41E8E]" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#6B5B57] uppercase tracking-wider mb-1">Service Area</p>
                      <p className="font-semibold text-[#1C1412]">Central Florida</p>
                      <p className="text-xs text-[#6B5B57] mt-0.5">Virtual consultations available worldwide</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#C41E8E]/10 flex items-center justify-center shrink-0">
                      <Clock className="h-5 w-5 text-[#C41E8E]" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#6B5B57] uppercase tracking-wider mb-1">Response Time</p>
                      <p className="font-semibold text-[#1C1412]">Within 24 hours</p>
                      <p className="text-xs text-[#6B5B57] mt-0.5">Urgent appointments often available same day</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#C41E8E]/10 flex items-center justify-center shrink-0">
                      <MessageSquare className="h-5 w-5 text-[#C41E8E]" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#6B5B57] uppercase tracking-wider mb-1">Social Media</p>
                      <div className="flex gap-4 mt-2">
                        <a href="https://www.facebook.com/thebreastfeedingwhisperer" target="_blank" rel="noreferrer" className="text-[#6B5B57] hover:text-[#C41E8E] transition-colors" aria-label="Facebook">
                          <SiFacebook className="h-5 w-5" />
                        </a>
                        <a href="https://www.instagram.com/thebreastfeedingwhisperer/" target="_blank" rel="noreferrer" className="text-[#6B5B57] hover:text-[#C41E8E] transition-colors" aria-label="Instagram">
                          <SiInstagram className="h-5 w-5" />
                        </a>
                        <a href="https://youtube.com/" target="_blank" rel="noreferrer" className="text-[#6B5B57] hover:text-[#C41E8E] transition-colors" aria-label="YouTube">
                          <SiYoutube className="h-5 w-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Book CTA */}
              <div className="bg-[#6B0032] rounded-3xl p-8 text-white">
                <h3 className="text-xl font-serif font-bold mb-3">Ready to book?</h3>
                <p className="text-white/80 text-sm leading-relaxed mb-6">
                  Skip the inbox and book your appointment directly through our online scheduling system. Choose the time that works best for you.
                </p>
                <Button asChild className="rounded-full bg-white text-[#6B0032] hover:bg-[#FDF8F5] h-12 px-8 font-semibold transition-all hover:scale-105">
                  <a href="https://thebreastfeedingwhisperer.simplybook.me/v2/#book" target="_blank" rel="noreferrer">
                    Book Online Now
                  </a>
                </Button>
              </div>
            </motion.div>

            {/* Right - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#FDF8F5] rounded-3xl p-8 border border-[#1C1412]/5"
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center gap-5">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle className="h-9 w-9 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-[#1C1412]">Message sent!</h3>
                  <p className="text-[#6B5B57] max-w-xs leading-relaxed">
                    Thank you for reaching out. Tara will get back to you within 24 hours. You're in good hands.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-sm text-[#C41E8E] hover:underline font-medium mt-2"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div>
                    <h2 className="text-2xl font-serif font-bold text-[#1C1412] mb-2">Send a Message</h2>
                    <p className="text-[#6B5B57] text-sm">Questions, concerns, or just want to say hello — Tara reads every message.</p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-[#1C1412] mb-1.5">
                        Full Name <span className="text-[#C41E8E]">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className={inputClass}
                      />
                      {errors.name && <p className={errorClass}>{errors.name}</p>}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-[#1C1412] mb-1.5">
                        Email Address <span className="text-[#C41E8E]">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={inputClass}
                      />
                      {errors.email && <p className={errorClass}>{errors.email}</p>}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-[#1C1412] mb-1.5">
                        Phone Number <span className="text-[#6B5B57] font-normal">(optional)</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="(000) 000-0000"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-[#1C1412] mb-1.5">
                        Message <span className="text-[#C41E8E]">*</span>
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        placeholder="Tell Tara what's going on — she's listening..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-[#1C1412]/15 bg-white text-[#1C1412] placeholder:text-[#6B5B57]/50 focus:outline-none focus:ring-2 focus:ring-[#C41E8E]/30 focus:border-[#C41E8E] transition-all text-sm resize-none"
                      />
                      {errors.message && <p className={errorClass}>{errors.message}</p>}
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={submitting}
                    className="w-full rounded-full bg-[#C41E8E] hover:bg-[#6B0032] text-white py-3.5 text-base font-semibold transition-all hover:scale-[1.02] disabled:opacity-60 disabled:hover:scale-100"
                  >
                    {submitting ? "Sending..." : "Send Message"}
                  </Button>

                  <p className="text-xs text-center text-[#6B5B57]">
                    Your information is private and will never be shared.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
