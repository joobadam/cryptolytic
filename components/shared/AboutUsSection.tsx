'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Rocket, BookOpen, Users } from 'lucide-react'

export default function AboutUsSection() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  return (
    <section id="about" className="py-16 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          {...fadeInUp}
        >
          About Us
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AboutCard
            title="Our Mission"
            icon={<Rocket className="h-6 w-6 text-primary" />}
            delay={0.2}
          >
            At <span className="font-bold uppercase text-primary">cryptolytic</span>,
            our mission is clear: to revolutionize the way people engage with
            cryptocurrencies. We are committed to providing accessible,
            innovative, and secure solutions that empower individuals to
            navigate the complex world of digital assets with confidence.
          </AboutCard>

          <AboutCard
            title="Our Story"
            icon={<BookOpen className="h-6 w-6 text-primary" />}
            delay={0.4}
          >
            Our journey began in 2018, driven by a shared passion for technology
            and finance. Since then, we have embarked on a mission to
            democratize access to crypto markets, starting with our innovative
            trading platform. Today, we proudly stand as a beacon of
            innovation and trust in the crypto community.
          </AboutCard>

          <AboutCard
            title="Our Culture"
            icon={<Users className="h-6 w-6 text-primary" />}
            delay={0.6}
          >
            At <span className="font-bold uppercase text-primary">cryptolytic</span>,
            our culture is the cornerstone of everything we do. We foster a
            dynamic and inclusive environment that celebrates diversity,
            encourages collaboration, and values integrity. Together, we strive
            for excellence, embrace challenges, and push boundaries to shape the
            future of finance.
          </AboutCard>
        </div>
      </div>
    </section>
  )
}

function AboutCard({ title, children, icon, delay }: { title: string, children: React.ReactNode, icon: React.ReactNode, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      <Card className="h-full">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            {icon}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {title}
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-foreground/80">{children}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}