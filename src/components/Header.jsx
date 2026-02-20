export default function Hero() {
  return (
    <section
      className="h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/img/carousel-1.jpg')" }}
    >
      <div className="bg-black bg-opacity-60 p-10 text-center text-white rounded">
        <h4 className="uppercase text-yellow-400 mb-4">
          Luxury Living
        </h4>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Discover A Brand Luxurious Hotel
        </h1>
        <div className="space-x-4">
          <button className="bg-yellow-500 px-6 py-3 rounded text-black font-semibold">
            Our Rooms
          </button>
          <button className="bg-white px-6 py-3 rounded text-black font-semibold">
            Book A Room
          </button>
        </div>
      </div>
    </section>
  );
}