import "./App.css";
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import Homepage from "./Components/Homepage/Homepage";
import Footer from "./Components/Footer/Footer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app-container">
      <NavigationBar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
