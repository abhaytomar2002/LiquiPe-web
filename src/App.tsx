import { BrowserRouter as Router} from "react-router-dom";
import { Helmet } from "react-helmet";
import Banner from "./components/MainPage";
import Benefit from "./components/benefit";
import Company from "./components/company";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Transaction from "./components/Highlights";

export default function App() {
  return (
    <Router>
      <div className="font-Poppins">
        <Helmet>
          <title>LiquiPe</title>
          <link rel="icon" href="/favicon.png" />
        </Helmet>

        <header className="h-screen bg-gradient-to-b from-newPurple to-darkPurple to-15%">
          <Navbar />
          <Banner />
        </header>
        <Benefit />
        <Transaction />
        <Company />
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}
