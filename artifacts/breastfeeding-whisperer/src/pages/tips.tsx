import { useSEO } from "@/hooks/useSEO";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const tips = [
  {
    id: "item-1",
    question: "What are the costs of lactation consultations?",
    answer: "Lactation consultation costs vary depending on the type of service you choose. Individual sessions range from $60 for a 30-minute phone consultation to $250 for a 2-hour in-home visit. Virtual consultations are $120 for one hour, and prenatal classes are $75 for 75 minutes. Bundle packages offer significant savings — starting at $465 — for families who anticipate needing ongoing support. Many insurance plans cover lactation services, so it's worth checking with your provider before booking. Tara can provide documentation to help you seek reimbursement.",
  },
  {
    id: "item-2",
    question: "How can I prepare for breastfeeding?",
    answer: "The best preparation starts during pregnancy. A prenatal breastfeeding class can give you a strong foundation — covering latch techniques, how milk production works, common early challenges, and how to recognize your baby is getting enough. Reading about positioning, skin-to-skin contact, and the importance of frequent early feeds is also helpful. Setting up a comfortable nursing area at home and assembling a basic support kit (nipple cream, nursing pillows, a quality breast pump) before baby arrives can make those first days much easier. Most importantly, know that asking for help is a sign of strength — not failure.",
  },
  {
    id: "item-3",
    question: "Do I need a breastfeeding consultant?",
    answer: "Many mothers benefit enormously from lactation support, even when things seem to be going okay. If you're experiencing pain, your baby seems unsatisfied after feeds, your supply feels low, you've received conflicting advice from hospital staff, or you simply want to feel more confident — a lactation consultant can transform your experience. As an IBCLC, Tara holds the highest certification in the field and can assess your latch, your baby's weight gain, and your milk transfer all in one session. Early intervention often prevents minor issues from becoming reasons to stop breastfeeding entirely.",
  },
  {
    id: "item-4",
    question: "How can I increase my milk supply?",
    answer: "Milk supply is primarily driven by demand: the more frequently and effectively your baby removes milk, the more your body produces. Feeding on demand — at least 8 to 12 times per day in the newborn period — is the most powerful tool you have. Ensuring your baby has a deep, effective latch is critical, because a shallow latch can mean less milk is removed and stimulation is reduced. Adding pumping sessions after feeds can also signal your body to increase output. Staying well-hydrated, eating enough calories, and minimizing stress all support production. Certain herbs and supplements (like fenugreek or Mother's Milk tea) can help some women, though results vary. A lactation consultation can help you identify the root cause of any supply issue and build a personalized plan.",
  },
  {
    id: "item-5",
    question: "What is a good latch and how do I achieve it?",
    answer: "A good latch means your baby has taken a wide mouthful of breast tissue — not just the nipple — allowing them to compress the milk sinuses and transfer milk efficiently. Signs of a good latch include a wide, asymmetric mouth, your nipple not being visible after baby latches, a comfortable sensation for you (latching may feel like strong suction but should not be sharp or pinching pain), and rhythmic swallowing. To achieve this, start with baby's nose aligned with your nipple, wait for a wide mouth, then bring baby to breast quickly. Positioning matters too — the baby should be facing you fully, belly to belly. A lactation consultant can observe a feed in real time and provide hands-on adjustments that make an immediate difference.",
  },
  {
    id: "item-6",
    question: "How do I know if my baby is getting enough milk?",
    answer: "The most reliable signs that your baby is getting enough milk include consistent weight gain (after the initial normal weight loss in the first few days), regular wet and dirty diapers, and an alert, content baby after most feeds. Newborns should have at least 6 wet diapers and 3 to 4 dirty diapers per day by day 4 or 5. Your baby should be back to birth weight by 10 to 14 days old, and then gain roughly 5 to 7 ounces per week thereafter. If you're concerned, a weight check at a pediatric office or a weighted feed at a lactation consultation (where baby is weighed before and after nursing) can measure exact milk transfer and give you a clear answer.",
  },
  {
    id: "item-7",
    question: "What should I do if breastfeeding is painful?",
    answer: "Breastfeeding should not be significantly painful. Mild nipple tenderness in the first few days is common as your body adjusts, but sharp, cracking, or burning pain is a signal that something needs attention. The most common cause is an improper latch — baby may be clamping down on the nipple tip rather than taking a full mouthful of breast tissue. Other causes include engorgement, vasospasm, thrush, or tongue tie. Stop the session by gently inserting your finger into the corner of baby's mouth to break the suction, reposition, and try again with a deeper latch. Applying lanolin or breast milk to cracked nipples can help healing. Do not push through severe pain — reach out to a lactation consultant as soon as possible.",
  },
  {
    id: "item-8",
    question: "What is mastitis and how do I treat it?",
    answer: "Mastitis is an inflammation of the breast tissue, often caused by a blocked milk duct that becomes infected. Symptoms include a red, hard, warm, and painful area of the breast, accompanied by flu-like symptoms such as fever, chills, and body aches. It's important to continue breastfeeding or pumping — stopping suddenly can worsen the blockage and increase infection risk. Treatment typically includes frequent feeding or pumping to keep milk moving, warm compresses before feeds, gentle breast massage, rest, fluids, and in many cases a short course of antibiotics from your doctor. Seeking help early is key, as untreated mastitis can progress to an abscess.",
  },
  {
    id: "item-9",
    question: "What is thrush and how does it affect breastfeeding?",
    answer: "Thrush is a yeast infection (caused by Candida albicans) that can affect both mother and baby during breastfeeding. In babies, it typically appears as white patches inside the mouth that don't wipe away. In mothers, symptoms include deep, burning breast pain during or after feeds, itchy or shiny pink nipples, and nipple pain that does not improve with latch correction. Thrush is passed back and forth between mother and baby, so both must be treated simultaneously. Treatment usually involves antifungal cream for the nipples and oral antifungal drops or gel for the baby. Keeping feeding equipment, bras, and nursing pads clean and dry helps prevent recurrence.",
  },
  {
    id: "item-10",
    question: "When and how should I introduce a bottle?",
    answer: "Most lactation experts recommend waiting until breastfeeding is well established — typically 3 to 6 weeks — before introducing a bottle, to avoid nipple confusion and protect your milk supply. When you're ready, choose a slow-flow nipple that requires the same active sucking as the breast. Practice paced bottle feeding: hold baby semi-upright, offer short pauses every few sips, and let baby set the pace. Bottles of pumped breast milk allow other caregivers to participate in feeding, which can ease the return to work. If your baby is refusing the breast or the bottle, a lactation consultation can help identify why and develop a plan.",
  },
  {
    id: "item-11",
    question: "How do I pump effectively and build a supply?",
    answer: "Effective pumping starts with a properly fitted breast shield — a shield that's too large or too small reduces suction and milk output. Pump within 30 minutes of feeding in the early weeks to establish supply without interfering with your baby's hunger cues. A double electric pump will save time and generally stimulates better output than a single pump. Pump both sides simultaneously for 15 to 20 minutes, or until milk stops flowing, then for 2 more minutes. Looking at a photo or video of your baby while pumping, staying warm and relaxed, and using breast massage during pumping (called 'hands-on pumping') can all improve output. Power pumping — mimicking a cluster feeding pattern on the pump — can be effective for supply boosts.",
  },
  {
    id: "item-12",
    question: "What is breast milk jaundice?",
    answer: "Breast milk jaundice is a prolonged form of newborn jaundice that occurs in some breastfed babies and can last for 3 to 12 weeks. It differs from early jaundice (which peaks around days 3 to 5) and is thought to be related to substances in breast milk that affect how the body processes bilirubin. Breast milk jaundice is typically benign and does not require stopping breastfeeding — frequent nursing helps by keeping bowels moving and clearing bilirubin through stool. It's important to monitor bilirubin levels and work closely with your pediatrician. A lactation consultant can help ensure your baby is feeding well and gaining weight appropriately throughout.",
  },
  {
    id: "item-13",
    question: "Can I re-lactate after stopping breastfeeding?",
    answer: "Re-lactation is possible, though it requires significant time, commitment, and support. The process involves stimulating your breasts again — through nursing, pumping, or both — to signal your body to resume milk production. The success rate depends on factors like how long ago you stopped, your baby's willingness to nurse, and the consistency of stimulation. Galactagogues (herbs or medications that support milk production) can help in conjunction with mechanical stimulation. Tara has experience supporting re-lactation journeys and can work with you to develop a realistic, step-by-step protocol. Induced lactation (for adoptive mothers) follows a similar process and is also something Tara can guide you through.",
  },
];

export default function Tips() {
  useSEO({
    title: "Tara's Tips — Free Breastfeeding Advice & FAQ",
    description: "Free expert breastfeeding advice from Tara, IBCLC. Learn about latch, milk supply, pain, mastitis, pumping, and more in our comprehensive free resource library.",
    url: "/tips",
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C41E8E]/10 text-[#C41E8E] text-sm font-semibold mb-6"
          >
            <BookOpen className="h-4 w-4" />
            Free Resource Library
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold text-[#1C1412] mb-5"
          >
            Tara's Tips
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="text-lg text-[#6B5B57] leading-relaxed"
          >
            Real answers to the questions every breastfeeding mother asks. Written from Tara's clinical experience with hundreds of families.
          </motion.p>
        </div>
      </section>

      {/* Accordion FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <Accordion type="single" collapsible className="space-y-3">
            {tips.map((tip, i) => (
              <motion.div
                key={tip.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
              >
                <AccordionItem
                  value={tip.id}
                  className="rounded-2xl border border-[#1C1412]/8 bg-[#FDF8F5] px-6 data-[state=open]:border-[#C41E8E]/30 transition-all overflow-hidden"
                >
                  <AccordionTrigger className="font-serif font-semibold text-base text-[#1C1412] hover:no-underline py-5 [&[data-state=open]]:text-[#C41E8E] [&>svg]:text-[#C41E8E]">
                    {tip.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#6B5B57] leading-relaxed text-sm pb-5 pt-0">
                    {tip.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#FDF8F5]">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="text-2xl md:text-3xl font-serif font-bold text-[#1C1412] mb-5"
          >
            Still have questions?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="text-[#6B5B57] mb-8 leading-relaxed"
          >
            Every situation is unique. Tara is here to give you personalized answers — not generic advice. Book a consultation and get the support your family actually needs.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button asChild size="lg" className="rounded-full bg-[#C41E8E] hover:bg-[#6B0032] text-white h-14 px-10 text-base transition-all hover:scale-105">
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
