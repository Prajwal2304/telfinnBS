import Header from '@/components/Header'
import Hero from '@/components/Hero'
import AboutUs from '@/components/AboutUs'
import OurPromise from '@/components/OurPromise'
import MissionVision from '@/components/MissionVision'
import Founders from '@/components/Founders'
import CoreServices from '@/components/CoreServices'
import WhyChooseUs from '@/components/WhyChooseUs'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow">
        <Hero />
        <AboutUs />
        <MissionVision />
        <Founders />
        <CoreServices />
        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  )
}

