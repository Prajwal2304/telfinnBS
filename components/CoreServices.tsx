'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Building2, Users, HeartHandshake, UserPlus, Briefcase, Banknote, Wallet, BarChart } from 'lucide-react'
import { motion } from 'framer-motion'

const services = [
  { title: "Business Development", icon: Building2, description: "Crafting customized sales strategies to drive revenue and building alliances that drive growth and expand market reach." },
  { title: "New Customer Acquisition", icon: UserPlus, description: "Data driven insights to optimize conversion rates and to reduce acquisition cost." },
  { title: "Customer Experience Management", icon: HeartHandshake, description: "Personalize approaches to improve engagement, loyalty and lifetime value." },
  { title: "Talent Acquisition", icon: Users, description: "Enhancing company's reputation to attract high-quality candidates and identification of top talent through various sourcing techniques and networks." },
  { title: "Relationship & Retention Strategies", icon: Briefcase, description: "Customized approaches to increase customer retention and minimize revenue loss." },
  { title: "Asset Recovery", icon: Banknote, description: "Maintaining professionalism and respect in all interactions to preserve client relationship." },
  { title: "Payment Recovery Process", icon: Wallet, description: "Skilled negotiators working to achieve favorable results that maximizes recovery rates." },
  { title: "Service Delivery Excellence", icon: BarChart, description: "Implementation of best practices to streamline operations and improve service quality." }
]

export default function CoreServices() {
  return (
    <section id="services" className="min-h-screen flex items-center py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-8 text-center"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Core Services
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl font-bold">
                    <service.icon className="mr-2 h-6 w-6" />
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

