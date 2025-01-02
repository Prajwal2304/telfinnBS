'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { motion } from 'framer-motion'

export default function OurPromise() {
  return (
    <section className="min-h-screen flex items-center py-16 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="bg-white/10 backdrop-blur-lg text-white border-none shadow-xl">
            <CardHeader>
              <CardTitle className="text-3xl md:text-4xl font-bold text-center">Our Promise</CardTitle>
            </CardHeader>
            <CardContent>
              <motion.p 
                className="text-xl md:text-2xl text-center mb-6"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                Empowering your success with unwavering trust and unmatched dedication!
              </motion.p>
              <motion.p 
                className="text-lg md:text-xl text-center"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                viewport={{ once: true }}
              >
                At Telfinn Business Solutions, we promise to be your most trusted and committed partner. Our dedication to professionalism ensures that we will always work tirelessly to make our partnership a resounding success.
              </motion.p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

