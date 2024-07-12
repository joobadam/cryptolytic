import CryptoChart from "@/components/shared/CryptoChart";
import HeroSection3 from "@/components/shared/HeroSection3";

export default function CryptoPage({ params }: { params: { id: string } }) {
  return (
    <div className="container mx-auto p-4">
      <HeroSection3/>
     <CryptoChart/> 
    </div>
  )
}