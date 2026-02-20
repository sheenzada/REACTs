export default function About() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div>
          <h6 className="text-yellow-500 uppercase font-semibold mb-2">
            About Us
          </h6>

          <h2 className="text-4xl font-bold mb-6">
            Welcome to <span className="text-yellow-500">Hotelier</span>
          </h2>

          <p className="text-gray-600 mb-8">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam
            amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit
            clita duo justo magna dolore erat amet.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="border rounded-lg p-6 text-center shadow-sm">
              <h3 className="text-3xl font-bold text-yellow-500">1234</h3>
              <p className="text-gray-600">Rooms</p>
            </div>

            <div className="border rounded-lg p-6 text-center shadow-sm">
              <h3 className="text-3xl font-bold text-yellow-500">1234</h3>
              <p className="text-gray-600">Staffs</p>
            </div>

            <div className="border rounded-lg p-6 text-center shadow-sm">
              <h3 className="text-3xl font-bold text-yellow-500">1234</h3>
              <p className="text-gray-600">Clients</p>
            </div>
          </div>

          <button className="bg-yellow-500 text-black font-semibold px-6 py-3 rounded hover:bg-yellow-400 transition">
            Explore More
          </button>
        </div>

        {/* Right Image Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex justify-end items-end">
            <img
              src="/img/about-1.jpg"
              alt="About 1"
              className="w-3/4 rounded-lg shadow-lg"
            />
          </div>

          <div>
            <img
              src="/img/about-2.jpg"
              alt="About 2"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          <div className="flex justify-end">
            <img
              src="/img/about-3.jpg"
              alt="About 3"
              className="w-1/2 rounded-lg shadow-lg"
            />
          </div>

          <div>
            <img
              src="/img/about-4.jpg"
              alt="About 4"
              className="w-3/4 rounded-lg shadow-lg"
            />
          </div>
        </div>

      </div>
    </section>
  );
}