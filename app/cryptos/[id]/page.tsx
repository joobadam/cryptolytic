import CryptoDetails from "@/components/shared/CryptoDetails";


export default function CryptoPage({ params }: { params: { id: string } }) {
  return (
    <div className="container mx-auto p-4">
      <CryptoDetails id={params.id} />
    </div>
  )
}