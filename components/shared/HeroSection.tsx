import Link from 'next/link'
import { Button } from '@/components/ui/button'
import LottieAnimation from "./LottieAnimation";


export default function HeroSection() {
    return (
        <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10 " id='hero'>
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold gradient-text">Unlock the Future of Finance</h1>
            <p className="p-regular-20 md:p-regular-24">Explore cutting-edge crypto trading tools and gain insights that empower your investment decisions. Stay ahead with real-time data, detailed analytics, and expert-driven strategies designed for every level of trader.</p>
            <Button size="lg" asChild className="button w-full sm:w-fit ">
              <Link href="#about">
                Explore Now
              </Link>
            </Button>
          </div>
          <LottieAnimation animationPath="/assets/animation/ani3.json"/>
        </div>
      </section> 
    );
  }