import Link from "next/link";
import { Button } from "@/components/ui/button";
/* import LottieAnimation from './LottieAnimation'; */
import dynamic from "next/dynamic";

export default function HeroSection2() {
  const LottieAnimation = dynamic(() => import("./LottieAnimation"), {
    ssr: false,
  });

  return (
    <section className="bg-primary-50 bg-dotted-pattern bg-contain p-7 md:py-10 ">
      <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
        <div className="flex flex-col justify-center gap-8">
          <h1 className="h1-bold gradient-text">
            Unlock the Future of Finance
          </h1>
          <p className="p-regular-20 md:p-regular-24">
            Explore cutting-edge crypto trading tools and gain insights that
            empower your investment decisions. Stay ahead with real-time data,
            detailed analytics, and expert-driven strategies designed for every
            level of trader.
          </p>
          <Button size="lg" asChild className="button w-full sm:w-fit ">
            <Link href="/cryptos/chart">Explore Chart</Link>
          </Button>
        </div>
        <LottieAnimation animationPath="/assets/animation/ani5.json" />
      </div>
    </section>
  );
}
