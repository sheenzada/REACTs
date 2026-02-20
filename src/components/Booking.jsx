export default function Booking() {
  return (
    <section className="py-10 bg-gray-100">
      <div className="max-w-6xl mx-auto bg-white shadow-lg p-6 rounded-lg grid md:grid-cols-5 gap-4">
        <input type="date" className="border p-2 rounded" />
        <input type="date" className="border p-2 rounded" />

        <select className="border p-2 rounded">
          <option>Adults</option>
          <option>1</option>
          <option>2</option>
        </select>

        <select className="border p-2 rounded">
          <option>Children</option>
          <option>1</option>
          <option>2</option>
        </select>

        <button className="bg-yellow-500 text-black font-semibold rounded px-4">
          Submit
        </button>
      </div>
    </section>
  );
}