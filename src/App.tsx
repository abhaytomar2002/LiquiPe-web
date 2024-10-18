import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";
import Banner from "./components/banner";
import Benefit from "./components/benefit";
import Company from "./components/company";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Newsletter from "./components/newsletter";
import Pricing from "./components/pricing";
import Review from "./components/review";
import Transaction from "./components/transaction";

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
        {/* <Pricing />
        <Review />
        <Newsletter /> */}
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}
