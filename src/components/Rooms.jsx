const rooms = [
  {
    title: "Junior Suite",
    price: "$100/Night",
    image: "/img/room-1.jpg",
  },
  {
    title: "Executive Suite",
    price: "$150/Night",
    image: "/img/room-2.jpg",
  },
  {
    title: "Super Deluxe",
    price: "$200/Night",
    image: "/img/room-3.jpg",
  },
];

export default function Rooms() {
  return (
    <section className="py-16">
      <div className="text-center mb-10">
        <h4 className="text-yellow-500 uppercase">Our Rooms</h4>
        <h2 className="text-4xl font-bold">Explore Our Rooms</h2>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {rooms.map((room, index) => (
          <div key={index} className="shadow-lg rounded overflow-hidden">
            <img src={room.image} alt={room.title} />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{room.title}</h3>
              <p className="text-yellow-500 mb-4">{room.price}</p>
              <button className="bg-black text-white px-4 py-2 rounded">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}