'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'

const reasons = [
  "Industry Expertise: In-depth knowledge and hands-on experience in Telecom, ISP, Banking, and NBFC sectors.",
  "Customized Solutions: Tailored strategies designed to address specific challenges and achieve business objectives.",
  "Measurable Results: Proven track record of delivering tangible and sustainable results for our clients.",
  "Commitment to Excellence: Dedication to maintaining the highest standards of professionalism, integrity, and client satisfaction."
]

export default function WhyChooseUs() {
  return (
    <section className="min-h-screen flex items-center justify-center py-24 bg-white">
      <div className="px-4 w-full max-w-6xl">
        {/* Section Title */}
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-800"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Why Choose Telfinn?
        </motion.h2>

        {/* Card Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-b from-indigo-50 to-indigo-100 text-white border-none">
            <CardHeader>
              <CardTitle className="text-3xl md:text-4xl font-bold text-center text-indigo-700">Trusted by Industry Leaders for Business Success</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-6">
                {reasons.map((reason, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start space-x-4"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="h-7 w-7 text-green-500 flex-shrink-0" />
                    <span className="text-lg md:text-xl text-gray-700 leading-relaxed">{reason}</span>
                  </motion.li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
