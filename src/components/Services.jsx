export default function Services() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="text-center mb-10">
        <h4 className="text-yellow-500 uppercase">Our Services</h4>
        <h2 className="text-4xl font-bold">Explore Our Services</h2>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {["Rooms", "Restaurant", "Spa", "Sports", "Events", "Gym"].map(
          (service, i) => (
            <div
              key={i}
              className="bg-white shadow p-6 rounded text-center hover:shadow-xl transition"
            >
              <h3 className="font-bold text-lg mb-3">{service}</h3>
              <p className="text-gray-600">
                Luxury service experience for your comfort.
              </p>
            </div>
          )
        )}
      </div>
    </section>
  );
}