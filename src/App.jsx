import "./App.css";
import Header from "./components/Header/Header";
import NavBar from "./components/Header/NavBar";
import Home from "./components/Home/Home";
function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />
      <NavBar />
      {/* Home */}
      <Home />
    </div>
  );
}

export default App;
