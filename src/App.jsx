import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./assets/components/Navbar/Navbar";
import Products from "./assets/components/Products/Products";
import Charts from "./assets/components/Charts/Charts";
import Axious from "./assets/components/axious/Axious";

function App() {
  return (
    <div className="container p-3 mx-auto">
      <Navbar></Navbar>
      <h1 className="text-5xl text-teal-700 font-bold text-center my-7">
        Welcome to Sopify. Shop the Best!!
      </h1>
      <Products></Products>
      <Charts></Charts>
      <Axious></Axious>
    </div>
  );
}

export default App;
