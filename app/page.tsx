import CustomerServices from "./_components/CustomerServices"
import Hero from "./_components/Hero"
import Services from "./_components/Services"
export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <Hero />
      {/* Services Section */}
      <Services />
      {/* Customer Services */}
      <CustomerServices />
    </div>
  )
}
