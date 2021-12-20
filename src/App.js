import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
// import TextForm from "./Components/TextForm";
import About from "./Components/About";

function App() {
  return (
    <>
      <Navbar title="Hello Sagar" about="About Us" />
      <div className="container my-3">
        {/* <TextForm heading="Enter Your Text to Analyze Below" /> */}
        <About />
      </div>
    </>
  );
}

export default App;
