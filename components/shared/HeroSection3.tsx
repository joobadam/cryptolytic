import Link from "next/link";
import { Button } from "@/components/ui/button";
/* import LottieAnimation from './LottieAnimation'; */
import dynamic from "next/dynamic";

export default function HeroSection3() {
  const LottieAnimation = dynamic(() => import("./LottieAnimation"), {
    ssr: false,
  });

  return (
    <section className="bg-primary-50 bg-dotted-pattern bg-contain p-7 md:py-10 ">
      <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
        <div className="flex flex-col justify-center gap-8">
          <h1 className="h1-bold gradient-text">
            Market Trends and Analysis of Cryptocurrencies
          </h1>
          <p className="p-regular-20 md:p-regular-24">
            The following chart allows you to track the price movements of the
            most popular cryptocurrencies. With our detailed analyses and
            real-time data, you can gain insights into market trends and make
            more informed investment decisions.
          </p>
          <Button size="lg" asChild className="button w-full sm:w-fit ">
            <Link href="/cryptos">Explore Table</Link>
          </Button>
        </div>
        <LottieAnimation animationPath="/assets/animation/ani6.json" />
      </div>
    </section>
  );
}
