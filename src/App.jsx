import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";

const App = () => {
  return (
    <div className=" ">
      <BrowserRouter>
        <Navbar />
        <MainContent />
      </BrowserRouter>
    </div>
  );
};

export default App;
