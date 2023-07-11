import Delivery from "./components/Delivery";
import Featured from "./components/Featured";
import TopNav from "./components/TopNav";
import TopPicks from "./components/TopPicks";
function App() {
  return (
    <div className="App">
      <TopNav />
      <Featured />
      <Delivery/>
      <TopPicks/>
    </div>
  );
}

export default App;
