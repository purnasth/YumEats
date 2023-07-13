import Delivery from "./components/Delivery";
import Featured from "./components/Featured";
import Meal from "./components/Meal";
import TopNav from "./components/TopNav";
import TopPicks from "./components/TopPicks";
// import TopPickSs from "./components/TopPickSs";
function App() {
  return (
    <div className="App">
      <TopNav />
      <Featured />
      <Delivery />
      <TopPicks />
      {/* <TopPickSs /> */}
      <Meal />
    </div>
  );
}

export default App;
