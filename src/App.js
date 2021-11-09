import "./App.css";
import Nav from "./component/navbar";
import Aboutme from "./component/about";
import Project from "./component/project";
import Contact from "./component/contact";
import Footer from "./component/footer";
import "./css/style.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Aboutme />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
