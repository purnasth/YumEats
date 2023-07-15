import Categories from "./components/Categories";
import Delivery from "./components/Delivery";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import Meal from "./components/Meal";
import TopNav from "./components/TopNav";
import TopPicks from "./components/TopPicks";
function App() {
  return (
    <div className="App">
      <TopNav />
      <Featured />
      <Delivery />
      <TopPicks />
      <Meal />
      <Categories />
      <Footer />
    </div>
  );
}

export default App;
