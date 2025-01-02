'use client'

import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { motion } from 'framer-motion'

export default function Founders() {
  return (
    <section id="founders" className="min-h-screen flex items-center py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-16 text-center text-gray-800"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Founders
        </motion.h2>

        {/* Grid for Cards */}
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Kanak Mevawala Card */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl font-bold text-center text-gray-800">Kanak Mevawala</CardTitle>
              </CardHeader>
              <CardContent>
                <Image 
                  src="/images/img1.jpg" 
                  alt="Kanak Mevawala" 
                  height={100}
                  width={150}
                  className="rounded-full mx-auto mb-6"
                />
                <p className="text-lg text-gray-700 leading-relaxed text-justify">
                  With over 25 years of rich corporate experience, Kanak has made significant contributions in the Telecom, ISP, and NBFC sectors. He holds a Bachelor's degree in Commerce (B.COM) and has pursued a Master's in Business Administration (MBA) with a specialization in Finance.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Anil Raj Card */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl font-bold text-center text-gray-800">Anil Raj</CardTitle>
              </CardHeader>
              <CardContent>
                <Image 
                  src="/images/img1.jpg" 
                  alt="Anil Raj" 
                  width={150} 
                  height={150} 
                  className="rounded-full mx-auto mb-6"
                />
                <p className="text-lg text-gray-700 leading-relaxed text-justify">
                  Anil brings over 25 years of extensive experience in the Telecom, Hospitality, and ISP industries to Telfinn Business Solutions. He has held diverse leadership roles, focusing on customer experience and lifecycle management, sales, and business operations.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
