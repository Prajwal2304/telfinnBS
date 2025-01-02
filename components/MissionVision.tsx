'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { motion } from 'framer-motion'

export default function MissionVision() {
  return (
    <section id='mission' className="min-h-screen flex items-center py-24 bg-gradient-to-br from-indigo-100 via-white to-indigo-200">
      <div className="container mx-auto px-4">

        {/* Flexbox for Cards */}
        <motion.div
          className="flex flex-col md:flex-row gap-12 justify-center items-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          {/* Mission Card */}
          <motion.div
            className="flex-1 max-w-xs mx-auto md:max-w-none"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="h-80 shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-blue-50 border-t-4 border-blue-600">
              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl font-bold text-blue-600">Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg md:text-xl text-gray-700">
                  Our mission is to partner with businesses to transform challenges into opportunities by leveraging our deep industry knowledge, analytical rigor, and commitment to delivering measurable results.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Promise Card */}
          <motion.div
            className="flex-1 max-w-xs mx-auto md:max-w-none"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-80 shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-green-50 border-t-4 border-green-600">
              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl font-bold text-green-600">Our Promise</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg md:text-xl text-gray-700">
                  We promise to uphold our values by consistently delivering quality, transparency, and results-driven solutions tailored to the unique needs of our clients.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            className="flex-1 max-w-xs mx-auto md:max-w-none"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="h-80 shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-purple-50 border-t-4 border-purple-600">
              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl font-bold text-purple-600">Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg md:text-xl text-gray-700">
                  To be the leading consultancy firm recognized for delivering innovative and effective solutions that drive operational excellence and sustainable growth for our clients across diverse industries.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
