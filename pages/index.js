import Image from "import Image from "next/image";
export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 p-6">
      <header className="text-center py-10">
        <div className="flex justify-center mb-6">
          <Image src="/macbus-logo.jpg" alt="The MAC Bus Logo" width={200} height={200} className="rounded-xl" />
        </div>
        <h1 className="text-4xl font-bold text-purple-800">The MAC Bus, Inc.</h1>
        <p className="text-lg mt-2 text-gray-600">
          Mississippi Access Connect Bus – Bridging Communities with Transit Access in Jackson County, MS.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 py-10">
        <div className="bg-yellow-100 p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-purple-900">Our Mission</h2>
          <p>
            To provide reliable, affordable, and inclusive transportation for underserved communities in Jackson County and beyond.
          </p>
        </div>

        <div className="bg-purple-100 p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-purple-900">Our Vision</h2>
          <p>
            A connected Mississippi where every resident has equal access to mobility and opportunity.
          </p>
        </div>
      </section>

      <section className="bg-white py-12">
        <h2 className="text-3xl font-bold text-center text-purple-900 mb-6">Programs & Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">Fixed Route Shuttles</h3>
            <p>Serving Pascagoula, Gautier, and Moss Point with reliable, scheduled transit.</p>
          </div>

          <div className="bg-white border p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">ADA & Senior Transport</h3>
            <p>Accessible vehicles and personalized support for seniors and persons with disabilities.</p>
          </div>

          <div className="bg-white border p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">Community Partnerships</h3>
            <p>Collaborating with local agencies, nonprofits, and government to extend our impact.</p>
          </div>
        </div>
      </section>

      <section className="bg-purple-50 py-10 px-6 mt-10 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold text-center text-purple-900 mb-4">Support Our Work</h2>
        <p className="text-center mb-6">
          Your sponsorship helps us keep wheels turning for those who need it most. Join us in building equitable transit access.
        </p>
        <div className="flex justify-center">
          <button className="bg-purple-700 text-white px-6 py-3 rounded-full hover:bg-purple-900 transition transform hover:scale-105">
            Become a Sponsor
          </button>
        </div>
      </section>
    </main>
  );
}
