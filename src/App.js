import React, { Component } from "react";
import "./resources/styles.css";

//Component
import Header from "./components/header-footer/Header";
import Featured from "./components/featured";
import VenueInfo from "./components/venue_info/VenueInfo";
import Highlight from "./components/highlights";
import Pricing from "./components/pricing";
import Location from "./components/location";
import Footer from "./components/footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Featured />
        <VenueInfo />
        <Highlight />
        <Pricing />
        <Location />
        <Footer />
      </div>
    );
  }
}

export default App;
