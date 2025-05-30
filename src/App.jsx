import Heading from "./components/Heading";
import Number from "./components/Number";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-redhat min-h-screen flex flex-col justify-between">
      <Heading />
      <Number>01</Number>
      <Main />
      <Number>02</Number>
      <Footer />
    </div>
  );
}

export default App;
