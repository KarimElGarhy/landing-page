import CustomerHelp from "./_components/_Sections/CustomerHelp"
import CustomerServices from "./_components/_Sections/CustomerServices"
import Hero from "./_components/_Sections/Hero"
import OurClients from "./_components/_Sections/OurClients"
import PriceTable from "./_components/_Sections/PriceTable"
import Services from "./_components/_Sections/Services"

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <Hero />
      {/* Services Section */}
      <Services />
      {/* Customer Services */}
      <CustomerServices />
      {/* Price Table */}
      <PriceTable />
      {/* Customer Help */}
      <CustomerHelp />
      {/* Our Client */}
      <OurClients />
    </div>
  )
}
