// Project files
import NavigationBar from "./components/NavigationBar";
import "./styles/style.sass";
// Project files
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Home />
    </div>
  );
}
