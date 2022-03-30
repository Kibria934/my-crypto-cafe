import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Homepage from "./components/Homepage/Homepage";
import Coins from "./components/Coins/Coins";
import Contact from "./components/Contact/Contact";
import BdAdress from "./components/Contact/BdAddress";
import UsAdress from "./components/Contact/UsAddress";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import CoinDetails from "./components/CoinDetails/CoinDetails";
import NotFound from "./components/NotFound/NotFound";

const App = () => {
  return (
    <div className="bg-gray-200">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Homepage></Homepage>}></Route>
        <Route path="/coins" element={<Coins></Coins>}></Route>
        <Route
          path="/coin-details/:id"
          element={<CoinDetails></CoinDetails>}
        ></Route>
        <Route path="/contact" element={<Contact></Contact>}>
          <Route path="bd-adress" element={<BdAdress></BdAdress>}></Route>
          <Route path="us-adress" element={<UsAdress></UsAdress>}></Route>
        </Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
};

export default App;
