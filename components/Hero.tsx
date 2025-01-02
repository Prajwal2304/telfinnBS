'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle } from 'lucide-react' // Import the tick mark icon
import { motion } from 'framer-motion'
import Link from 'next/link'

const engagements = [
  "Atria Convergence Technologies Limited",
  "Enpro Enviro Tech and Engineers Private Limited"
]

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-primary text-white overflow-hidden">
      <motion.div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.2 }}
        transition={{ duration: 1.5 }}
      />
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Your Partner In Progress
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Empowering corporate clients with tailored solutions for growth and efficiency
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
<Link href="#mission">
            <Button size="lg" variant="secondary">
              Learn More
            </Button>
          </Link>        </motion.div>

        {/* Current Engagements Section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-32 text-sm md:text-base text-gray-200"
        >
          <Card className="bg-white/10 backdrop-blur-lg text-white border-none shadow-md max-w-xl mx-auto">
            <CardHeader>
              <CardTitle className="text-lg text-center text-indigo-300 font-semibold">Our Valued Clients</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center space-x-14">
                {engagements.map((engagement, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center text-sm md:text-lg text-white"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="h-8 w-8 text-green-400 mr-2" />
                    <span>{engagement}</span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
