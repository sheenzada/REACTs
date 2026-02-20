export default function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        <div>
          <h2 className="text-yellow-500 text-2xl font-bold mb-4">
            Hotelier
          </h2>
          <p>Luxury hotel experience with premium services.</p>
        </div>

        <div>
          <h4 className="font-bold mb-3">Contact</h4>
          <p>123 Street, New York</p>
          <p>+012 345 6789</p>
          <p>info@example.com</p>
        </div>

        <div>
          <h4 className="font-bold mb-3">Company</h4>
          <p>About</p>
          <p>Services</p>
          <p>Support</p>
        </div>
      </div>

      <div className="text-center mt-8 border-t border-gray-700 pt-4">
        © 2026 Hotelier. All Rights Reserved.
      </div>
    </footer>
  );
}