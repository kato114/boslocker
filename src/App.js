import React  from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ScrollToTop from "./component/ScrollToTop";
import Footer from "./component/Footer";
import Header from "./component/Header";

import Home from "./pages/Home";
import IcoApply from "./pages/IcoApply";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PreSale from "./pages/launchpadApply/Presale";
import PrivateSale from "./pages/launchpadApply/PrivateSale";
// import ProjectList from "./pages/launchpadApply/presaleview/ProjectList";
import DetailsComp from "./pages/launchpadApply/presaleview/DetailsComp";
import DetailsCompPrivatesale from "./pages/launchpadApply/privatesaleview/DetailsCompPrivatesale";
import Contact from "./pages/Contact";
import ProjectList from "./pages/launchpadApply/SaleList/ProjectList";
import MyContributions from "./pages/launchpadApply/SaleList/component/MyContributions";
import Fairsale from "./pages/launchpadApply/Fairsale";
import DetailsFairComp from "./pages/launchpadApply/fairsaleview/DetailsFairComp";
import MainLock from "./pages/lock/MainLock";
import TokenLockList from "./pages/locklist/TokenLockList";
import LockView from "./pages/locklist/LockView";
import LockRecord from "./pages/locklist/LockRecord";
import MyTokenLock from "./pages/locklist/MyTokenLock";
import MyLpLock from "./pages/locklist/MyLpLock";
import LpLockList from "./pages/locklist/LpLockList";

function App() {
  
  return (
    <div className="App">
      <Router>
        <ScrollToTop>
          <ToastContainer pauseOnFocusLoss={false} />
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/presale-details">
              <DetailsComp />
            </Route>
            <Route path="/private-details">
              <DetailsCompPrivatesale />
            </Route>
            <Route path="/fairlaunch-details">
              <DetailsFairComp />
            </Route>


            <Route exact path="/ico-apply"><IcoApply /></Route>
            <Route exact path="/presale"><PreSale /></Route>
            <Route exact path="/privatesale"><PrivateSale /></Route>
            <Route exact path="/fairlaunch"><Fairsale /></Route>
            <Route exact path="/contact"><Contact /></Route>
            <Route exact path="/sale-list"><ProjectList /></Route>
            <Route exact path="/my-contribution"><MyContributions /></Route>
            <Route exact path="/lock"><MainLock /></Route>
            <Route exact path="/token-locked"><TokenLockList /></Route>
            <Route exact path="/liquidity-locked"><LpLockList /></Route>
            <Route exact path="/lock-details/:id"><LockView /></Route>
            <Route exact path="/lock-record/:id"><LockRecord /></Route>
            <Route exact path="/my-token-lock"><MyTokenLock /></Route>
            <Route exact path="/my-lp-lock"><MyLpLock /></Route>
          </Switch>
          <Footer />
        </ScrollToTop>
      </Router>

    </div>
  );
}

export default App;
