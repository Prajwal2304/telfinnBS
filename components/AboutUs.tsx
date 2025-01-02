'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AboutUs() {
  return (
    <section id="about" className="min-h-screen flex items-center bg-gray-100 pt-8 pb-16">
      <div className="container mx-auto px-6">
        {/* Title Section */}
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          About Us
        </motion.h2>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Text Section */}
          <motion.div 
            className="md:w-1/2 text-center md:text-left"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-lg leading-relaxed text-gray-700">
              Telfinn Business Solutions, LLP is a dynamic consultancy firm founded by industry veterans with a collective experience of over 25 years in the Telecom, ISP, and NBFC sectors. Our founders bring unparalleled expertise and strategic insights, ensuring that we deliver tailored solutions to meet our clients' unique needs.
            </p>
            <br />
            <p className="text-lg leading-relaxed text-gray-700">
              Established with a vision to empower corporate clients, Telfinn offers a comprehensive range of services designed to drive growth, enhance operational efficiency, and achieve sustainable success. Our commitment to excellence and innovation sets us apart as a trusted partner in navigating the complexities of today's business landscape.
            </p>
          </motion.div>

          {/* Image Section */}
          <motion.div 
            className="md:w-1/2 flex justify-center md:justify-end"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Image 
              src="/images/img1.jpg" 
              alt="Telfinn Business Solutions Team" 
              className="rounded-lg shadow-lg max-w-full h-auto" 
              width={500} 
              height={400} 
              priority={true} 
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
