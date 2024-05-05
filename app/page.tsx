import AboutUsSection from "@/components/shared/AboutUsSection"
import FeaturesSection from "@/components/shared/FeaturesSection"
import Footer from "@/components/shared/Footer"
import GraphPic from "@/components/shared/GraphPic"
import Header from "@/components/shared/Header"
import HeroSection from "@/components/shared/HeroSection"
import LottieAnimation from "@/components/shared/LottieAnimation"


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection/>
        <FeaturesSection/>
        <LottieAnimation animationPath="/assets/animation/ani1.json"/>
        <AboutUsSection/>
        <GraphPic/>
      </main>
      <Footer />
    </div>
  )
}
