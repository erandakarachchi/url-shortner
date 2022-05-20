import logo from "./assets/logo.png";
import "./App.css";
import UrlEditor from "./components/UrlEditor";
import UrlResult from "./components/UrlResult";
import React,{useState} from "react";

function App() {

  const [shortenUrl, setShortenUrl] = useState("")

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} />
      </header>
      <section className="App-section">
        <UrlEditor setShortUrl={setShortenUrl}/>
        <UrlResult url={shortenUrl}/>
      </section>
    </div>
  );
}

export default App;
