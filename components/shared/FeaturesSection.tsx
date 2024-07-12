/* import LottieAnimation from "./LottieAnimation"; */
import dynamic from "next/dynamic";
import Image from "next/image";

const LottieAnimation = dynamic(() => import("./LottieAnimation"), {
  ssr: false,
});

export default function FeaturesSection() {
  return (
    <section id="features">
      <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-12 gap-2 p-5">
        <div className="md:col-start-1 md:col-end-4 md:row-start-1 md:row-end-7 glass p-4 shadow rounded-lg flex-center ">
          <LottieAnimation animationPath="/assets/animation/ani2.json" />
        </div>
        <div className="md:col-start-10 md:col-end-13 md:row-start-1 md:row-end-7 glass p-4 shadow-xl rounded-lg flex-center ">
          <LottieAnimation animationPath="/assets/animation/ani4.json" />
        </div>
        <div className="md:col-start-4 md:col-end-10 md:row-start-1 md:row-end-7 glass p-4 shadow-xl rounded-lg ">
          <h3 className="text-xl font-semibold mb-2 gradient-text">
            Advanced Analytics
          </h3>
          <p className="text-lg">
            Unlock the full potential of the financial markets with our Advanced
            Analytics suite. Designed for serious traders, our platform offers
            real-time insights and customizable dashboards that adapt to your
            unique trading style. Leverage sophisticated predictive tools to
            forecast market movements accurately, and stay ahead with updates
            streamed directly to your command center.
          </p>
        </div>
        <div className="md:col-start-1 md:col-end-7 md:row-start-7 md:row-end-13 glass p-4 shadow-xl rounded-lg ">
          <h3 className="text-xl font-semibold mb-2 gradient-text">
            Crypto Chart Insights
          </h3>
          <p className="text-lg">
            Explore the dynamics of cryptocurrency markets through our advanced
            charting tools. Our intuitive graphs provide a clear visualization
            of crypto price movements, trends, and volatility, enabling you to
            make informed trading decisions. With real-time data and a range of
            customizable options, our charts help you track and analyze the
            performance of your chosen cryptocurrencies efficiently..
          </p>
        </div>
        <div className="md:col-start-7 md:col-end-13 md:row-start-7 md:row-end-13 glass shadow-xl rounded-lg ">
          <Image
            src="/assets/images/crypto1.png"
            alt="crypto"
            fill
            className="object-cover object-center rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}
