import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Booking from "./components/Booking";
import About from "./components/About";
import Rooms from "./components/Rooms";
import Services from "./components/Services";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Header />
      <Booking />
      <About />
      <Rooms />
      <Services />
      <Footer />
    </div>
  );
}

export default App;