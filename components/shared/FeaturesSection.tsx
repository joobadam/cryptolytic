import { Suspense } from 'react'
import Image from 'next/image'
import { LucideBarChart2, LucideLineChart } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import dynamic from "next/dynamic";

const LottieAnimation = dynamic(() => import("./LottieAnimation"), {
  ssr: false,
});


export default function FeaturesSection() {
  return (
    <section id="features" className="py-12 px-4 md:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-12 gap-4">
        <Card className="md:col-span-3 md:row-span-6">
          <CardContent className="p-0">
            <Suspense fallback={<div className="w-full h-full bg-secondary animate-pulse rounded-lg" />}>
              <LottieAnimation animationPath="/assets/animation/ani2.json" />
            </Suspense>
          </CardContent>
        </Card>

        <Card className="md:col-span-6 md:row-span-6">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <LucideBarChart2 className="h-6 w-6 text-primary" />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Advanced Analytics
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg">
              Unlock the full potential of the financial markets with our Advanced
              Analytics suite. Designed for serious traders, our platform offers
              real-time insights and customizable dashboards that adapt to your
              unique trading style. Leverage sophisticated predictive tools to
              forecast market movements accurately, and stay ahead with updates
              streamed directly to your command center.
            </p>
          </CardContent>
        </Card>

        <Card className="md:col-span-3 md:row-span-6">
          <CardContent className="p-0">
            <Suspense fallback={<div className="w-full h-full bg-secondary animate-pulse rounded-lg" />}>
              <LottieAnimation animationPath="/assets/animation/ani4.json" />
            </Suspense>
          </CardContent>
        </Card>

        <Card className="md:col-span-6 md:row-span-6">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <LucideLineChart className="h-6 w-6 text-primary" />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Crypto Chart Insights
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg">
              Explore the dynamics of cryptocurrency markets through our advanced
              charting tools. Our intuitive graphs provide a clear visualization
              of crypto price movements, trends, and volatility, enabling you to
              make informed trading decisions. With real-time data and a range of
              customizable options, our charts help you track and analyze the
              performance of your chosen cryptocurrencies efficiently.
            </p>
          </CardContent>
        </Card>

        <Card className="md:col-span-6 md:row-span-6 overflow-hidden">
          <CardContent className="p-0 relative aspect-video">
            <Image
              src="/assets/images/crypto1.png"
              alt="Cryptocurrency chart displaying market trends and analysis"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover object-center rounded-lg"
            />
          </CardContent>
        </Card>
      </div>
    </section>
  )
}