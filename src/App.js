import {
  FaYoutube,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaBars,
} from "react-icons/fa";
import FirstPage from "./components/FirstPage";
import SecondPage from "./components/SecondPage";
import ContactPage from "./components/ContactPage";
import "./App.css";
import ThirdPage from "./components/ThirdPage";
function App() {
  return (
    <div className="App">
      <FirstPage></FirstPage>
      <SecondPage></SecondPage>
      <ThirdPage></ThirdPage>
      <ContactPage></ContactPage>
    </div>
  );
}

export default App;
