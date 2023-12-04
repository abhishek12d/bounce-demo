import Products from "./components/BestProducts/Products";
import Navbar from "./components/Header/Navbar";
import Hero from "./components/Hero/Hero";
import Bounce from "./components/WhyBounce/Bounce";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Products />
      <Bounce />
    </div>
  );
};

export default App;
