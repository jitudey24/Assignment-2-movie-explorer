import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  const path = window.location.pathname;
  const page = path === "/movies" ? <Movies /> : <Home />;

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      {page}
      <Footer />
    </div>
  );
};

export default App;
